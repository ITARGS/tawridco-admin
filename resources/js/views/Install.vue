<template>
    <div class="auth" :style="{ backgroundImage: 'url('+ $baseUrl + '/images/panel_login_background_img.jpg' + ')' }">
        <div class="login-wrapper">
            <div class="auth-section col-lg-6 mt-5">
                <div class="auth-card">
                    <form-wizard @on-complete="onComplete"
                                 @on-loading="setLoading"
                                 @on-validate="handleValidation"
                                 @on-error="handleErrorMessage"
                                 shape="circle"
                                 color="#37a279"
                                 error-color="#e74c3c"
                                 title=""
                                 subtitle="">

                        <!--Welcome-->
                        <tab-content title="Welcome">
                            <div class="text-center">
                                <p class="display-4 py-3">🙌</p>
                                <p>{{ __("thank_wrTeam") }}</p>
                                <p> {{ __("this_website") }} </p>
                                <p>{{ __("It_minutes") }}</p>
                            </div>
                        </tab-content>

                        <!-- Requirements-->
                        <tab-content title="Requirements" :before-change="validateAsync">

                            <table class="table" v-for="(requirement,type) in requirements['requirements']">
                                <thead>
                                <tr>
                                    <th class="ps-2">PHP >= {{ phpSupportInfo['minimum'] }}</th>
                                    <th class="text-end pe-2">
                                        <strong>{{ phpSupportInfo['current'] }}</strong>
                                        <i class="fa fa-fw" :class="phpSupportInfo['supported'] ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-danger'"></i>
                                    </th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr v-for="(enabled,extension) in requirements['requirements'][type]" :class="enabled ? '' : 'text-danger'">
                                    <td>{{ extension }}</td>
                                    <td class="text-end">
                                        <i class="fa fa-fw" :class="enabled ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-danger'"></i>
                                    </td>
                                </tr>
                                </tbody>
                            </table>


                            <table class="table">
                                <thead>
                                <tr>
                                    <th colspan="2" class="ps-2">{{ __("permissions") }}</th>
                                </tr>
                                </thead>
                                <tbody>

                                <template v-for="permission in permissions['permissions']">

                                    <template v-if="permission['folder'] == '.env'">
                                        <tr :class="permission['permission'] ? '' : 'text-danger'">
                                            <td><input type="text" class="form-control" :value="permission['folder']" disabled></td>
                                            <td class="text-end align-middle">
                                                <strong>{{ permission['permission'] ? '' : __('The file is not writable!') }}</strong>
                                                <i class="fa fa-fw" :class="permission['permission'] ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-danger'"></i>

                                            </td>
                                        </tr>
                                    </template>

                                    <template v-else>
                                        <tr :class="permission['isSet'] ? '' : 'text-danger'">
                                            <td><input type="text" class="form-control" :value="permission['folder']" disabled></td>
                                            <td class="text-end align-middle">
                                                <strong>{{ permission['permission'] }}</strong>
                                                <i class="fa fa-fw" :class="permission['isSet'] ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-danger'"></i>
                                            </td>
                                        </tr>
                                    </template>

                                </template>

                                </tbody>
                            </table>
                        </tab-content>

                        <tab-content title="Database" :before-change="onCreateDatabase">
                            <div>
                                <p class="text-center">{{ __("below_host") }}</p>

                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group mb-3">
                                                <label class="form-label" for="database_host">{{ __("database_host") }}<span class="text-danger text-xs">*</span></label>
                                                <input type="text" :placeholder="__('database_host')" v-model="database.database_host" id="database_host" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mb-3">
                                                <label class="form-label" for="database_port">{{ __("database_port") }}<span class="text-danger text-xs">*</span></label>
                                                <input type="text" :placeholder="__('database_port')" v-model="database.database_port" id="database_port" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mb-3">
                                                <label class="form-label" for="database_name">{{ __("database_name") }}<span class="text-danger text-xs">*</span></label>
                                                <input type="text" :placeholder="__('database_name')" v-model="database.database_name" id="database_name" class="form-control " required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mb-3">
                                                <label class="form-label" for="database_username">{{ __("database_username") }}<span class="text-danger text-xs">*</span></label>
                                                <input type="text" :placeholder="__('database_username')" v-model="database.database_username" id="database_username" class="form-control" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mb-3">
                                                <label class="form-label" for="database_password">{{ __("database_password") }}<span class="text-danger text-xs">*</span></label>
                                                <input type="password" :placeholder="__('database_password')" v-model="database.database_password" id="database_password" class="form-control" required autocomplete="off" />
                                            </div>
                                        </div>

                                        <div class="divider">
                                            <div class="divider-text">{{ __("admin_details") }}</div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group mb-3">
                                                <label class="form-label" for="admin_email">{{ __("admin_email") }}<span class="text-danger text-xs">*</span></label>
                                                <input type="email" :placeholder="__('admin_email')" v-model="database.admin_email" id="admin_email" class="form-control" required />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group mb-3">
                                                <label class="form-label" for="admin_password">{{ __("admin_password") }}<span class="text-danger text-xs">*</span></label>
                                                <div class="input-group">
                                                    <input :type="showAdminPassword ? 'text' : 'password'" :placeholder="__('admin_password')" v-model="database.admin_password" name="admin_password" id="admin_password" class="form-control" required autocomplete="off">
                                                    <button type="button" v-on:click="showAdminPassword = !showAdminPassword" class="btn btn-primary font-bold">
                                                        <i v-if="showAdminPassword" class="fa fa-eye-slash" aria-hidden="true"></i>
                                                        <i v-else class="fa fa-eye" aria-hidden="true"></i>
                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </tab-content>



                        <tab-content title="Finish" :before-change="finish">
                            <div class="text-center">
                                <i class="fa fa-check-circle fa-5x text-success mx-auto my-3"></i>
                                <h1 class="text-success my-3">{{ __("congratulations") }}</h1>
                                <p>{{ __("your_needs") }}.</p>
                                <p>{{ __("please_and") }}<a class="text-primary" href="https://codecanyon.net/item/egrocer-online-grocery-store-ecommerce-marketplace-flutter-full-app-with-admin-panel/reviews/41423150">{{ __("leave_rating") }} </a> {{ __("if_script") }}</p>

                                <small class="form-hint">{{ __("for_automatically") }}</small>
                            </div>
                        </tab-content>

                        <div class="loader" v-if="loadingWizard"></div>
                        <div v-if="errorMsg">
                            <span class="error">{{ errorMsg }}</span>
                        </div>
                    </form-wizard>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
    components: {
        FormWizard,
        TabContent
    },
    data: function () {
        return {
            loadingWizard: false,
            errorMsg: null,
            count: 0,

            phpSupportInfo: [],
            requirements: [],
            permissions: [],

            database:{
                database_host:'127.0.0.1',
                database_port:3306,
                database_name:'',
                database_username:'root',
                database_password:'',
                admin_email:'',
                admin_password:'',
            },
            showAdminPassword: false,
            purchase_code:''
        };
    },
    mounted() {
        if (this.loggedUser) {
            this.$router.push('/dashboard');
        }
    },
    created: function () {
        this.getRequirements();
    },
    methods: {
        getRequirements: function () {
            let vm = this;
            axios.get(this.$apiUrl + '/install/requirements').then((response) => {
                this.isLoading = false
                var data = response.data.data;

                this.phpSupportInfo = data.phpSupportInfo;
                this.requirements = data.requirements;
                this.permissions = data.permissions;

            }).catch(error => {
                vm.isLoading = false;
                if (error?.request?.statusText) {
                    this.showError(error.request.statusText);
                } else if (error.message) {
                    this.showError(error.message);
                } else {
                    this.showError("Something went wrong!");
                }
            });
        },
        onComplete: function () {

        },
        setLoading: function (value) {
            this.loadingWizard = value
        },
        handleValidation: function (isValid, tabIndex) {
        },
        handleErrorMessage: function (errorMsg) {
            this.errorMsg = errorMsg
        },
        validateAsync: function () {
            return new Promise((resolve, reject) => {
                if(this.requirements['errors']===true || !this.phpSupportInfo['supported'] || this.permissions['errors']===true || this.permissions['permissions'][0]['permission'] === false){
                    this.count++
                    reject('Please Check the requirements and Try again after fixing it.')
                } else {
                    this.count = 0
                    resolve(true)
                }
            });
        },

        onCreateDatabase: function () {

            return new Promise((resolve, reject) => {
                axios.post(this.$apiUrl + '/install/database', this.database).then((response) => {
                    var data = response.data;
                    if(data.status){
                        this.count = 0
                        resolve(true)
                    }else{
                        this.count++
                        reject(data.message);
                    }
                }).catch(error => {
                    this.count++
                    reject(error.toString())
                });

            });


        },

        purchaseCode: function () {

            return new Promise((resolve, reject) => {
                let data = { 'purchase_code':this.purchase_code};
                axios.post(this.$apiUrl + '/install/purchase_code',data).then((response) => {
                    var data = response.data;
                    if(data.status){
                        this.count = 0
                        resolve(true)
                    }else{
                        this.count++
                        reject(data.message);
                    }
                }).catch(error => {
                    this.count++
                    reject(error.toString())
                });

            });


        },

        finish: function () {
            window.location.reload();
            this.$router.push({path: '/login'});
        },
    }
}
</script>

<style scoped>

.auth-card {
    max-width: 100% !important;
}

span.error{
    color:#e74c3c;
    font-size:20px;
    display:flex;
    justify-content:center;
}
a{
    color: rgb(55, 162, 121);
}
</style>
