<template>
    <b-modal ref="my-modal" :title="modal_title" @hidden="$emit('modalClose')" scrollable no-close-on-backdrop no-fade static>
        <div slot="modal-footer">
            <b-button variant="primary" @click="$refs['dummy_submit'].click()" :disabled="isLoading || (graterAmount === true) ">{{ __("save") }}
                <b-spinner v-if="isLoading" small label="Spinning"></b-spinner>
            </b-button>
            <b-button variant="secondary" @click="hideModal">{{ __("cancel") }}</b-button>
        </div>
        <form ref="my-form" @submit.prevent="saveRecord">
            <div class="row">
                <div class="form-group">
                    <label>{{ __("seller") }}</label>
                    <multiselect v-model="walletTransaction.seller"
                                 :options="sellers"
                                 @close="checkAmount"
                                 :placeholder="__('select_seller')"
                                 label="name"
                                 track-by="name" required>
                        <template slot="singleLabel" slot-scope="props">
                            <span class="option__desc">
                                <span class="option__title">{{ props.option.name }}</span>
                            </span>
                        </template>
                        <template slot="option" slot-scope="props">
                            <div class="option__desc">
                                <span class="option__title">{{ props.option.name }}</span>,
                                <span class="option__small">{{ __("balance") }}:- {{ props.option.balance }}</span>
                            </div>
                        </template>
                    </multiselect>
                    <div class="border border-grey rounded p-2 mt-2" v-if="walletTransaction.seller">
                        <div class="d-flex justify-content-between align-items-center text-left">
                            <span>{{ __("name") }}:-</span><span> {{ walletTransaction.seller.name }}</span>
                            <span>{{ __("mobile") }}:-</span><span> {{ walletTransaction.seller.mobile }}</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center text-left">
                            <span>{{ __("id") }}:-</span><span> {{ walletTransaction.seller.id }}</span>
                            <span>{{ __("balance") }}:-</span><span> {{ walletTransaction.seller.balance }}</span>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="type">{{ __("type") }}</label>
                    <select name="type" id="type" v-model="walletTransaction.type" v-on:change="checkAmount" required class="form-control form-select">
                        <option value="">{{ __("select_type") }}</option>
                        <option value="credit">{{ __("credit") }}</option>
                        <option value="debit">{{ __("debit") }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="amount">{{ __("amount") }}</label>
                    <input type="number" step="any" name="amount" id="amount" v-model="walletTransaction.amount" v-on:keyup="checkAmount" required class="form-control" :placeholder="__('transfer_amount')" @input="validateAmount">
                    <span class="text-danger" v-if="graterAmount === true">{{ __("you_can_not_enter_amount_greater_than_balance") }}</span>
                    <span v-if="validationErrorAmount" class="error">{{ validationErrorAmount }}</span>
                </div>
                <div class="form-group">
                    <label for="message">{{ __("message") }}</label>
                    <textarea name="message" id="message" v-model="walletTransaction.message" class="form-control" rows="3" :placeholder="__('message')" ></textarea>
                </div>
            </div>
            <button ref="dummy_submit" style="display:none;"></button>
        </form>
    </b-modal>
</template>

<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect'
export default {
    props: ['record','sellers'],
    components: {
        Multiselect
    },
    data : function(){
        return {
            isLoading: false,
            graterAmount:false,
            walletTransaction:{
                id: this.record ? this.record.id : null ,
                seller:null,
                type: this.record ? this.record.type : "" ,
                amount: this.record ? this.record.amount : "" ,
                message: this.record ? this.record.message : "" ,
            },
            validationErrorAmount: null,

        };
    },
    computed: {
        modal_title: function(){
            let title = this.id ? "Edit" : "Add" ;
            title += " Wallet Transaction";
            return title;
        },
    },
    methods: {
        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        validateAmount() {
            if (this.walletTransaction.amount < 0) {
                this.validationErrorAmount = "Amount must be greater than 0.";
                this.walletTransaction.amount = null;
            } else {
                this.validationErrorAmount = null;
            }
        },
        checkAmount(){
            if((this.walletTransaction.type === 'debit') && (parseInt(this.walletTransaction.amount) > parseInt(this.walletTransaction.seller.balance))){
                this.graterAmount = true;
            }else{
                this.graterAmount = false;
            }
        },
        saveRecord: function(){
            let vm = this;
            this.isLoading = true;
            let formObject = this.walletTransaction;
            let formData = new FormData();
            for(let key in formObject){
                if (key === 'seller'){
                    formData.append(key, JSON.stringify(formObject[key]));
                }
                else{
                    formData.append(key, formObject[key]);
                }
            }
            let url = this.$apiUrl + '/seller_wallet_transactions/save';
            if(this.walletTransaction.id){
                url = this.$apiUrl + '/seller_wallet_transactions/update';
            }
            axios.post(url, formData).then(res => {
                let data = res.data;
                if (data.status === 1) {
                    this.$eventBus.$emit('sellerWalletTransactionsSaved', data.message);
                    this.hideModal();
                }else{
                    vm.showError(data.message);
                    vm.isLoading = false;
                }
            }).catch(error => {
                vm.isLoading = false;
                if (error.request.statusText) {
                    this.showError(error.request.statusText);
                }else if (error.message) {
                    this.showError(error.message);
                } else {
                    this.showError("Something went wrong!");
                }
            });
        }
    },
    mounted(){
        this.showModal();
    }
}
</script>

<style scoped>
@import "../../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css";
</style>
