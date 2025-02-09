<template>
   <div class="auth" :style="{ backgroundImage: 'url('+ $panelLoginBackgroundImg + ')' }">
        <div class="login-wrapper">
            <div class="detail-card">
                <div class="auth-logo">
                    <a href="javascript:void(0)"
                       style="display: flex; align-items: center; justify-content: flex-start;">
                        <img v-if="$appLogo != ''" :src="$storageUrl+$appLogo" style="height: 70px; width: 70px;"
                             alt='Logo'/>
                        <img v-else :src="$baseUrl + '/images/logo.png'" style="height: 70px; width: 70px;"
                             alt='Logo'/>
                        <h2 style="margin: 10px;">{{ $appName }}</h2>
                    </a>
                </div>
                <h4>{{ __("delivery_profile") }}</h4>
                <p class="auth-subtitle text-primary">{{ __("seller_register_message") }}</p>
                <form ref="my-form" @submit.prevent="saveRecord">
                    <div class="content">
                        <h6>{{ __("delivery_information") }}</h6>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">{{ __("name") }}</label>
                                    <input type="text" name="name" id="name" v-model="deliveryBoys.name" class="form-control" :placeholder="__('name')">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="mobile">{{ __("mobile_no") }}</label>
                                    <input type="number" name="mobile" id="mobile" v-model="deliveryBoys.mobile" class="form-control" :placeholder="__('mobile_no')">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="driving_license">{{ __("driving_licence") }}</label>
                                    <input type="file" name="driving_license" id="driving_license" v-on:change="handleFileUploadLicense" ref="file_license" :required="!deliveryBoys.id" class="file-input" />

                                    <div class="file-input-div bg-gray-100" @click="$refs.file_license.click()" @drop="dropFileUploadLicense" @dragover="$dragoverFile" @dragleave="$dragleaveFile">

                                        <template v-if="deliveryBoys.driving_license && deliveryBoys.driving_license.name !== ''">
                                            <label>{{ __("selected_file_name") }}:- {{ deliveryBoys.driving_license.name }}</label>
                                        </template>
                                        <template v-else>
                                            <label><i class="fa fa-cloud-upload-alt fa-2x"></i></label>
                                            <label>{{ __('drop_files_here_or_click_to_upload') }}</label>
                                        </template>

                                    </div>

                                    <div class="row" v-if="deliveryBoys.driving_license_url">
                                        <div v-if="isImage(deliveryBoys.driving_license_url)" class="col-md-2">
                                            <img class="custom-image" :src="deliveryBoys.driving_license_url" title='Driving License' alt='Driving License'/>
                                        </div>
                                        <div v-else class="col-md-2 mt-2">
                                            <a target="_blank" :href="deliveryBoys.driving_license_url" class="badge bg-success"> <i class="fa fa-eye"></i> {{ __("identity") }}</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="national_identity_card">{{ __("national_identity_card") }}</label>
                                    <input type="file" name="national_identity_card" id="national_identity_card" v-on:change="handleFileUploadCard" ref="file_card" :required="!deliveryBoys.id" class="file-input" />

                                    <div class="file-input-div bg-gray-100" @click="$refs.file_card.click()" @drop="dropFileUploadCard" @dragover="$dragoverFile" @dragleave="$dragleaveFile">
                                        <template v-if="deliveryBoys.national_identity_card && deliveryBoys.national_identity_card.name !== ''">
                                            <label>{{ __("selected_file_name") }}:- {{ deliveryBoys.national_identity_card.name }}</label>
                                        </template>
                                        <template v-else>
                                            <label><i class="fa fa-cloud-upload-alt fa-2x"></i></label>
                                            <label>{{ __('drop_files_here_or_click_to_upload') }}</label>
                                        </template>
                                    </div>

                                    <div class="row" v-if="deliveryBoys.national_identity_card_url">
                                        <div v-if="isImage(deliveryBoys.national_identity_card_url)" class="col-md-2">
                                            <img class="custom-image" :src="deliveryBoys.national_identity_card_url" title='National Identity Card' alt='National Identity Card'/>
                                        </div>
                                        <div v-else class="col-md-2 mt-2">
                                            <a target="_blank" :href="deliveryBoys.national_identity_card_url" class="badge bg-success"> <i class="fa fa-eye"></i> {{ __("identity") }}</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="dob">{{ __("date_of_birth") }}</label>
                                    <input type="date" name="dob" id="dob" v-model="deliveryBoys.dob" required class="form-control" placeholder="Enter date of birth">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="ifsc_code">{{ __("bank_ifsc_code") }}</label>
                                    <input type="text" name="ifsc_code" id="ifsc_code" v-model="deliveryBoys.ifsc_code" required class="form-control" :placeholder="__('ifsc_code')">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="bank_name">{{ __("bank_name") }}</label>
                                    <input type="text" name="bank_name" id="bank_name" v-model="deliveryBoys.bank_name" required class="form-control" :placeholder="__('enter_bank_name')">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="account_number">{{ __("account_number") }}</label>
                                    <input type="text" name="account_number" id="account_number" v-model="deliveryBoys.bank_account_number" required class="form-control" :placeholder="__('enter_account_number')">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="account_name">{{ __("bank_account_name") }}</label>
                                    <input type="text" name="account_name" id="account_name" v-model="deliveryBoys.account_name" required class="form-control" :placeholder="__('enter_bank_account_name')">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="city_name">{{ __("select_or_search_city") }}</label>
                                <multiselect v-model="city"
                                             :options="cities"
                                             @close="setCityId"
                                             :placeholder="__('select_or_search_city')"
                                             label="name"
                                             track-by="name" id="city_name" required>
                                    <template slot="singleLabel" slot-scope="props">
                                                        <span class="option__desc">
                                                            <span class="option__title">{{ props.option.name }}</span>
                                                        </span>
                                    </template>
                                    <template slot="option" slot-scope="props">
                                        <div class="option__desc">
                                                            <span class="option__title">{{
                                                                    props.option.formatted_address
                                                                }}</span>
                                        </div>
                                    </template>
                                </multiselect>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="address">{{ __("address") }}</label>
                                    <textarea name="address" id="address" v-model="deliveryBoys.address" rows='3' class="form-control" :placeholder="__('enter_address')"></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="other_payment_info">{{ __("other_payment_information") }}</label>
                                    <textarea name="other_payment_info" id="other_payment_info" v-model="deliveryBoys.other_payment_information" rows='3' class="form-control" :placeholder="__('other_payment_information')"></textarea>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                        {{ __("complete") }}
                        <b-spinner v-if="isLoading" small label="Spinning"></b-spinner>
                    </button>

                </form>
                <div class="auth-copyright">

                    <a href="javascript:void(0)" class="text-primary font-weight-normal"> {{ $copyrightDetails }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Auth from '../../Auth.js';
import {VuejsDatatableFactory} from "vuejs-datatable";
import Select2 from "v-select2-component";
import Multiselect from "vue-multiselect";
import Editor from "@tinymce/tinymce-vue";
export default {
    components: {
        VuejsDatatableFactory,
        Select2,
        Multiselect,
        'editor': Editor
    },
    data : function(){
        return {
            isLoading: false,
            loggedUser: Auth.user,
            city:"",
            cities:[],
            deliveryBoys:{
                name: Auth.user.username ,
                mobile: "" ,
                dob: "" ,

                driving_license: "" ,
                driving_license_url: "" ,
                national_identity_card: "" ,
                national_identity_card_url: "" ,

                ifsc_code: "" ,
                bank_name: "" ,
                bank_account_number: "" ,
                account_name: "" ,
                address: "" ,
                other_payment_information: "" ,
                city_id:""
            },

        };
    },
    created: function () {
        this.getCities();
    },
    mounted() {
        if(!this.loggedUser){
            this.$router.push('/login');
        }
    },
    methods: {
        handleFileUploadLicense() {
            this.deliveryBoys.driving_license = this.$refs.file_license.files[0];
            this.deliveryBoys.driving_license_url = URL.createObjectURL(this.deliveryBoys.driving_license);;
        },
        dropFileUploadLicense(event){
            event.preventDefault();
            this.$refs.file_license.files = event.dataTransfer.files;
            this.handleFileUploadLicense(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        handleFileUploadCard() {
            this.deliveryBoys.national_identity_card = this.$refs.file_card.files[0];
            this.deliveryBoys.national_identity_card_url = URL.createObjectURL(this.deliveryBoys.national_identity_card);;
        },
        dropFileUploadCard(event){
            event.preventDefault();
            this.$refs.file_card.files = event.dataTransfer.files;
            this.handleFileUploadCard(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        getCities() {
            this.isLoading = true
            axios.get(this.$apiUrl + '/cities')
                .then((response) => {
                    this.isLoading = false
                    let data = response.data;
                    this.cities = data.data;
                });
        },
        setCityId() {
            this.deliveryBoys.city_id = this.city.id;
        },
        saveRecord: function(){
            let vm = this;
            this.isLoading = true;
            let formObject = this.deliveryBoys;
            let formData = new FormData();
            for(let key in formObject){
                formData.append(key, formObject[key]);
            }
            let url = this.$deliveryBoyApiUrl + '/details';
            axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                this.isLoading = false;
                let data = res.data;
                if (data.status === 1) {
                    this.showMessage("success", data.message);
                    setTimeout(
                        function () {
                            vm.$swal.close();
                            Auth.logout();
                            vm.$router.push({path: '/login'})
                        }, 2000);
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
    }
}
</script>

<style scoped>
@import "../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css";

.auth {
    overflow-x: hidden!important;
}
.auth-logo {
    padding-bottom: 10px;
}
</style>
