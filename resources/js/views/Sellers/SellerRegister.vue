<template>
    <div
        class="auth"
        :style="{ backgroundImage: 'url(' + $panelLoginBackgroundImg + ')' }"
    >
        <lang />
        <div class="login-wrapper">
            <div class="detail-card">
                <div class="auth-logo">
                    <a
                        href="javascript:void(0)"
                        style="
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                        "
                    >
                        <img
                            v-if="$appLogo != ''"
                            :src="$storageUrl + $appLogo"
                            style="height: 70px; width: 70px"
                            alt="Logo"
                        />
                        <img
                            v-else
                            :src="$baseUrl + '/images/logo.png'"
                            style="height: 70px; width: 70px"
                            alt="Logo"
                        />
                        <h2 style="margin: 10px">{{ $appName }}</h2>
                    </a>
                </div>
                <h4>{{ __("register_message") }}</h4>
                <p class="auth-subtitle text-primary">
                    {{ __("seller_register_message") }}
                </p>
                <form ref="my-form" @submit.prevent="sellerRegister" novalidate>
                    <div class="row">
                        <div class="content">
                            <div class="card-body">
                                <label
                                    ><span class="text-danger text-xs">*</span>
                                    {{ __("required_fields") }}.</label
                                >

                                <!-- الحقول الأساسية -->
                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label
                                                >{{ __("user_name") }}
                                                <i class="text-danger"
                                                    >*</i
                                                ></label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="name"
                                                :placeholder="__('enter_name')"
                                                @change="validateName"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label
                                                >{{ __("email") }}
                                                <i class="text-danger"
                                                    >*</i
                                                ></label
                                            >
                                            <input
                                                type="email"
                                                class="form-control"
                                                v-model="email"
                                                :placeholder="__('enter_email')"
                                                @change="validateEmail"
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label
                                                >{{ __("mobile") }}
                                                <i class="text-danger"
                                                    >*</i
                                                ></label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="mobile"
                                                :placeholder="
                                                    __('enter_mobile')
                                                "
                                                inputmode="numeric"
                                                @input="validateMobileNumber"
                                            />
                                            <span
                                                v-if="mobilevalidationError"
                                                class="error"
                                                >{{
                                                    mobilevalidationError
                                                }}</span
                                            >
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label
                                                >{{ __("password") }}
                                                <i
                                                    v-if="!id"
                                                    class="text-danger"
                                                    >*</i
                                                ></label
                                            >
                                            <div class="input-group">
                                                <input
                                                    :type="
                                                        showPassword
                                                            ? 'text'
                                                            : 'password'
                                                    "
                                                    class="form-control"
                                                    v-model="password"
                                                    :placeholder="
                                                        __('enter_passord')
                                                    "
                                                    @change="validatePassword"
                                                />
                                                <button
                                                    type="button"
                                                    v-on:click="
                                                        showPassword =
                                                            !showPassword
                                                    "
                                                    class="btn btn-primary font-bold"
                                                >
                                                    <i
                                                        v-if="showPassword"
                                                        class="fa fa-eye-slash"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <i
                                                        v-else
                                                        class="fa fa-eye"
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label
                                                >{{ __("confirm_password") }}
                                                <i
                                                    v-if="!id"
                                                    class="text-danger"
                                                    >*</i
                                                ></label
                                            >
                                            <div class="input-group">
                                                <input
                                                    :type="
                                                        showConfirmPassword
                                                            ? 'text'
                                                            : 'password'
                                                    "
                                                    class="form-control"
                                                    v-model="confirm_password"
                                                    :placeholder="
                                                        __(
                                                            'enter_confirm_password'
                                                        )
                                                    "
                                                    @change="
                                                        validateConfirmPassword
                                                    "
                                                />
                                                <button
                                                    type="button"
                                                    v-on:click="
                                                        showConfirmPassword =
                                                            !showConfirmPassword
                                                    "
                                                    class="btn btn-primary font-bold"
                                                >
                                                    <i
                                                        v-if="
                                                            showConfirmPassword
                                                        "
                                                        class="fa fa-eye-slash"
                                                        aria-hidden="true"
                                                    ></i>
                                                    <i
                                                        v-else
                                                        class="fa fa-eye"
                                                        aria-hidden="true"
                                                    ></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label
                                                >{{ __("name_company") }}
                                                <i class="text-danger"
                                                    >*</i
                                                ></label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="company_name"
                                                :placeholder="__('enter_name')"
                                                @change="validateCompanyName"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <!-- الحقول الإضافية -->
                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <label
                                            >{{ __("register_number")
                                            }}<i class="text-danger"
                                                >*</i
                                            ></label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="record_number"
                                            :placeholder="__('register_number')"
                                            required
                                        />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label
                                            >{{ __("register_expiry_date") }}
                                            <i class="text-danger">*</i></label
                                        >
                                        <input
                                            type="date"
                                            class="form-control"
                                            v-model="record_expiry_date"
                                            required
                                        />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label
                                            >{{ __("municipality_number")
                                            }}<i class="text-danger"
                                                >*</i
                                            ></label
                                        >
                                        <input
                                            type="text"
                                            class="form-control"
                                            v-model="
                                                municipality_license_number
                                            "
                                            :placeholder="
                                                __('municipality_number')
                                            "
                                            required
                                        />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label
                                            >{{
                                                __("municipality_expire_number")
                                            }}
                                            <i class="text-danger">*</i></label
                                        >
                                        <input
                                            type="date"
                                            class="form-control"
                                            v-model="
                                                municipality_license_expiry_date
                                            "
                                            required
                                        />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label>{{
                                                __("tax_number")
                                            }}</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="tax_number"
                                                :placeholder="
                                                    __('enter_tax_number')
                                                "
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label>{{
                                                __("national_address")
                                            }}</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="national_address"
                                                :placeholder="
                                                    __('national_address')
                                                "
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label>{{
                                                __("iban_number")
                                            }}</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                v-model="iban_number"
                                                :placeholder="__('iban_number')"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label
                                                >{{ __("municipality_photo") }}
                                                <i class="text-danger"
                                                    >*</i
                                                ></label
                                            >
                                            <input
                                                type="file"
                                                class="file-input"
                                                ref="file_municipality_photo"
                                                v-on:change="
                                                    handleFileMunicipalityPhoto
                                                "
                                                required
                                            />
                                            <div
                                                class="file-input-div bg-gray-100"
                                                @click="
                                                    $refs.file_municipality_photo.click()
                                                "
                                                @drop="
                                                    dropFileMunicipalityPhoto
                                                "
                                                @dragover="$dragoverFile"
                                                @dragleave="$dragleaveFile"
                                            >
                                                <template
                                                    v-if="
                                                        municipality_photo &&
                                                        municipality_photo.name !==
                                                            ''
                                                    "
                                                >
                                                    <label
                                                        >{{
                                                            __(
                                                                "selected_file_name"
                                                            )
                                                        }}:-
                                                        {{
                                                            municipality_photo.name
                                                        }}</label
                                                    >
                                                </template>
                                                <template v-else>
                                                    <label
                                                        ><i
                                                            class="fa fa-cloud-upload-alt fa-2x"
                                                        ></i
                                                    ></label>
                                                    <label>{{
                                                        __(
                                                            "drop_files_here_or_click_to_upload"
                                                        )
                                                    }}</label>
                                                </template>
                                            </div>
                                            <div
                                                class="row"
                                                v-if="municipality_photo_url"
                                            >
                                                <div
                                                    v-if="
                                                        isImage(
                                                            municipality_photo_url
                                                        )
                                                    "
                                                    class="col-md-2"
                                                >
                                                    <img
                                                        class="custom-image"
                                                        :src="
                                                            municipality_photo_url
                                                        "
                                                        title="Municipality Photo"
                                                        alt="Municipality Photo"
                                                    />
                                                </div>
                                                <div
                                                    v-else
                                                    class="col-md-2 mt-2"
                                                >
                                                    <a
                                                        target="_blank"
                                                        :href="
                                                            municipality_photo_url
                                                        "
                                                        class="badge bg-success"
                                                    >
                                                        <i
                                                            class="fa fa-eye"
                                                        ></i>
                                                        {{
                                                            __(
                                                                "municipality_photo"
                                                            )
                                                        }}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label
                                                >{{ __("commercial_photo") }}
                                                <i class="text-danger"
                                                    >*</i
                                                ></label
                                            >
                                            <input
                                                type="file"
                                                class="file-input"
                                                ref="file_commercial_photo"
                                                v-on:change="
                                                    handleFileCommercialPhoto
                                                "
                                                required
                                            />
                                            <div
                                                class="file-input-div bg-gray-100"
                                                @click="
                                                    $refs.file_commercial_photo.click()
                                                "
                                                @drop="dropFileCommercialPhoto"
                                                @dragover="$dragoverFile"
                                                @dragleave="$dragleaveFile"
                                            >
                                                <template
                                                    v-if="
                                                        commercial_photo &&
                                                        commercial_photo.name !==
                                                            ''
                                                    "
                                                >
                                                    <label
                                                        >{{
                                                            __(
                                                                "selected_file_name"
                                                            )
                                                        }}:-
                                                        {{
                                                            commercial_photo.name
                                                        }}</label
                                                    >
                                                </template>
                                                <template v-else>
                                                    <label
                                                        ><i
                                                            class="fa fa-cloud-upload-alt fa-2x"
                                                        ></i
                                                    ></label>
                                                    <label>{{
                                                        __(
                                                            "drop_files_here_or_click_to_upload"
                                                        )
                                                    }}</label>
                                                </template>
                                            </div>
                                            <div
                                                class="row"
                                                v-if="commercial_photo_url"
                                            >
                                                <div
                                                    v-if="
                                                        isImage(
                                                            commercial_photo_url
                                                        )
                                                    "
                                                    class="col-md-2"
                                                >
                                                    <img
                                                        class="custom-image"
                                                        :src="
                                                            commercial_photo_url
                                                        "
                                                        title="Commercial Photo"
                                                        alt="Commercial Photo"
                                                    />
                                                </div>
                                                <div
                                                    v-else
                                                    class="col-md-2 mt-2"
                                                >
                                                    <a
                                                        target="_blank"
                                                        :href="
                                                            commercial_photo_url
                                                        "
                                                        class="badge bg-success"
                                                    >
                                                        <i
                                                            class="fa fa-eye"
                                                        ></i>
                                                        {{
                                                            __(
                                                                "commercial_photo"
                                                            )
                                                        }}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label
                                                >{{ __("tax_number_photo") }}
                                                <i class="text-danger"
                                                    >*</i
                                                ></label
                                            >
                                            <input
                                                type="file"
                                                class="file-input"
                                                ref="file_tax_photo"
                                                v-on:change="handleFileTaxPhoto"
                                                required
                                            />
                                            <div
                                                class="file-input-div bg-gray-100"
                                                @click="
                                                    $refs.file_tax_photo.click()
                                                "
                                                @drop="dropFileTaxPhoto"
                                                @dragover="$dragoverFile"
                                                @dragleave="$dragleaveFile"
                                            >
                                                <template
                                                    v-if="
                                                        tax_photo &&
                                                        tax_photo.name !== ''
                                                    "
                                                >
                                                    <label
                                                        >{{
                                                            __(
                                                                "selected_file_name"
                                                            )
                                                        }}:-
                                                        {{
                                                            tax_photo.name
                                                        }}</label
                                                    >
                                                </template>
                                                <template v-else>
                                                    <label
                                                        ><i
                                                            class="fa fa-cloud-upload-alt fa-2x"
                                                        ></i
                                                    ></label>
                                                    <label>{{
                                                        __(
                                                            "drop_files_here_or_click_to_upload"
                                                        )
                                                    }}</label>
                                                </template>
                                            </div>
                                            <div
                                                class="row"
                                                v-if="tax_photo_url"
                                            >
                                                <div
                                                    v-if="
                                                        isImage(tax_photo_url)
                                                    "
                                                    class="col-md-2"
                                                >
                                                    <img
                                                        class="custom-image"
                                                        :src="tax_photo_url"
                                                        title="Tax Photo"
                                                        alt="Tax Photo"
                                                    />
                                                </div>
                                                <div
                                                    v-else
                                                    class="col-md-2 mt-2"
                                                >
                                                    <a
                                                        target="_blank"
                                                        :href="tax_photo_url"
                                                        class="badge bg-success"
                                                    >
                                                        <i
                                                            class="fa fa-eye"
                                                        ></i>
                                                        {{
                                                            __(
                                                                "tax_number_photo"
                                                            )
                                                        }}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label
                                                >{{ __("national_photo") }}
                                                <i class="text-danger"
                                                    >*</i
                                                ></label
                                            >
                                            <input
                                                type="file"
                                                class="file-input"
                                                ref="file_national_photo"
                                                v-on:change="
                                                    handleFileNationalPhoto
                                                "
                                                required
                                            />
                                            <div
                                                class="file-input-div bg-gray-100"
                                                @click="
                                                    $refs.file_national_photo.click()
                                                "
                                                @drop="dropFileNationalPhoto"
                                                @dragover="$dragoverFile"
                                                @dragleave="$dragleaveFile"
                                            >
                                                <template
                                                    v-if="
                                                        national_photo &&
                                                        national_photo.name !==
                                                            ''
                                                    "
                                                >
                                                    <label
                                                        >{{
                                                            __(
                                                                "selected_file_name"
                                                            )
                                                        }}:-
                                                        {{
                                                            national_photo.name
                                                        }}</label
                                                    >
                                                </template>
                                                <template v-else>
                                                    <label
                                                        ><i
                                                            class="fa fa-cloud-upload-alt fa-2x"
                                                        ></i
                                                    ></label>
                                                    <label>{{
                                                        __(
                                                            "drop_files_here_or_click_to_upload"
                                                        )
                                                    }}</label>
                                                </template>
                                            </div>
                                            <div
                                                class="row"
                                                v-if="national_photo_url"
                                            >
                                                <div
                                                    v-if="
                                                        isImage(
                                                            national_photo_url
                                                        )
                                                    "
                                                    class="col-md-2"
                                                >
                                                    <img
                                                        class="custom-image"
                                                        :src="
                                                            national_photo_url
                                                        "
                                                        title="National Photo"
                                                        alt="National Photo"
                                                    />
                                                </div>
                                                <div
                                                    v-else
                                                    class="col-md-2 mt-2"
                                                >
                                                    <a
                                                        target="_blank"
                                                        :href="
                                                            national_photo_url
                                                        "
                                                        class="badge bg-success"
                                                    >
                                                        <i
                                                            class="fa fa-eye"
                                                        ></i>
                                                        {{
                                                            __("national_photo")
                                                        }}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <div class="form-group">
                                            <label
                                                >{{ __("iban_photo") }}
                                                <i class="text-danger"
                                                    >*</i
                                                ></label
                                            >
                                            <input
                                                type="file"
                                                class="file-input"
                                                ref="file_iban_photo"
                                                v-on:change="
                                                    handleFileIbanPhoto
                                                "
                                                required
                                            />
                                            <div
                                                class="file-input-div bg-gray-100"
                                                @click="
                                                    $refs.file_iban_photo.click()
                                                "
                                                @drop="dropFileIbanPhoto"
                                                @dragover="$dragoverFile"
                                                @dragleave="$dragleaveFile"
                                            >
                                                <template
                                                    v-if="
                                                        iban_photo &&
                                                        iban_photo.name !== ''
                                                    "
                                                >
                                                    <label
                                                        >{{
                                                            __(
                                                                "selected_file_name"
                                                            )
                                                        }}:-
                                                        {{
                                                            iban_photo.name
                                                        }}</label
                                                    >
                                                </template>
                                                <template v-else>
                                                    <label
                                                        ><i
                                                            class="fa fa-cloud-upload-alt fa-2x"
                                                        ></i
                                                    ></label>
                                                    <label>{{
                                                        __(
                                                            "drop_files_here_or_click_to_upload"
                                                        )
                                                    }}</label>
                                                </template>
                                            </div>
                                            <div
                                                class="row"
                                                v-if="iban_photo_url"
                                            >
                                                <div
                                                    v-if="
                                                        isImage(iban_photo_url)
                                                    "
                                                    class="col-md-2"
                                                >
                                                    <img
                                                        class="custom-image"
                                                        :src="iban_photo_url"
                                                        title="IBAN Photo"
                                                        alt="IBAN Photo"
                                                    />
                                                </div>
                                                <div
                                                    v-else
                                                    class="col-md-2 mt-2"
                                                >
                                                    <a
                                                        target="_blank"
                                                        :href="iban_photo_url"
                                                        class="badge bg-success"
                                                    >
                                                        <i
                                                            class="fa fa-eye"
                                                        ></i>
                                                        {{ __("iban_photo") }}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    class="btn btn-primary btn-block btn-lg shadow-lg mt-1"
                                >
                                    {{ __("complete") }}
                                    <b-spinner
                                        v-if="isLoading"
                                        small
                                        label="Spinning"
                                    ></b-spinner>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="auth-copyright">
                    <a
                        href="javascript:void(0)"
                        class="text-primary font-weight-normal"
                        >{{ $copyrightDetails }}</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { VuejsDatatableFactory } from "vuejs-datatable";
import Select2 from "v-select2-component";
import Multiselect from "vue-multiselect";
import Editor from "@tinymce/tinymce-vue";
import lang from "../lang.vue";

export default {
    components: {
        VuejsDatatableFactory,
        Select2,
        Multiselect,
        editor: Editor,
        lang,
    },
    delimiters: ["${", "}"], // Avoid Twig conflicts
    data: function () {
        return {
            isLoading: false,
            name: "",
            username: "",
            email: "",
            mobile: "",
            store_url: "",
            password: "",
            showPassword: false,
            confirm_password: "",
            showConfirmPassword: false,
            store_name: "",
            company_name: "",
            record_expiry_date: "",
            record_number: "",
            municipality_license_number: "",
            municipality_license_expiry_date: "",
            tax_number: "",
            national_address: "",
            iban_number: "",
            national_id_card: "",
            national_id_card_url: "",
            address_proof: "",
            address_proof_url: "",
            address_proof_name: "",
            categories: [],
            id: null,
            record: null,
            id_card: "",
            proof: "",
            mobilevalidationError: null,
            city: "",
            cities: [],
            city_id: "",
            commission: "",
            commissionvalidationError: null,
            municipality_photo: null,
            municipality_photo_url: "",
            commercial_photo: null,
            commercial_photo_url: "",
            tax_photo: null,
            tax_photo_url: "",
            national_photo: null,
            national_photo_url: "",
            iban_photo: null,
            iban_photo_url: "",
        };
    },
    created: function () {
        this.getCategories();
        this.getCities();
        this.getSellerCommission();
    },
    methods: {
        getCategories() {
            axios.get(this.$sellerApiUrl + "/categories").then((response) => {
                let data = response.data;
                this.categories = data.data;
            });
        },
        getSellerCommission() {
            axios
                .get(this.$sellerApiUrl + "/seller_commission")
                .then((response) => {
                    let data = response.data;
                    this.commission = data.data.value;
                });
        },
        validateMobileNumber() {
            const mobileNumber = this.mobile;
            if (!/^\d{1,16}$/.test(mobileNumber)) {
                this.mobilevalidationError = __("error_message");
                this.mobile = null;
            } else {
                this.mobilevalidationError = null;
            }
        },
        handleFileMunicipalityPhoto() {
            this.municipality_photo =
                this.$refs.file_municipality_photo.files[0];
            this.municipality_photo_url = URL.createObjectURL(
                this.municipality_photo
            );
        },
        dropFileMunicipalityPhoto(event) {
            event.preventDefault();
            this.$refs.file_municipality_photo.files = event.dataTransfer.files;
            this.handleFileMunicipalityPhoto();
            event.currentTarget.classList.add("bg-gray-100");
            event.currentTarget.classList.remove("bg-green-300");
        },
        handleFileCommercialPhoto() {
            this.commercial_photo = this.$refs.file_commercial_photo.files[0];
            this.commercial_photo_url = URL.createObjectURL(
                this.commercial_photo
            );
        },
        dropFileCommercialPhoto(event) {
            event.preventDefault();
            this.$refs.file_commercial_photo.files = event.dataTransfer.files;
            this.handleFileCommercialPhoto();
            event.currentTarget.classList.add("bg-gray-100");
            event.currentTarget.classList.remove("bg-green-300");
        },
        handleFileTaxPhoto() {
            this.tax_photo = this.$refs.file_tax_photo.files[0];
            this.tax_photo_url = URL.createObjectURL(this.tax_photo);
        },
        dropFileTaxPhoto(event) {
            event.preventDefault();
            this.$refs.file_tax_photo.files = event.dataTransfer.files;
            this.handleFileTaxPhoto();
            event.currentTarget.classList.add("bg-gray-100");
            event.currentTarget.classList.remove("bg-green-300");
        },
        handleFileNationalPhoto() {
            this.national_photo = this.$refs.file_national_photo.files[0];
            this.national_photo_url = URL.createObjectURL(this.national_photo);
        },
        dropFileNationalPhoto(event) {
            event.preventDefault();
            this.$refs.file_national_photo.files = event.dataTransfer.files;
            this.handleFileNationalPhoto();
            event.currentTarget.classList.add("bg-gray-100");
            event.currentTarget.classList.remove("bg-green-300");
        },
        handleFileIbanPhoto() {
            this.iban_photo = this.$refs.file_iban_photo.files[0];
            this.iban_photo_url = URL.createObjectURL(this.iban_photo);
        },
        dropFileIbanPhoto(event) {
            event.preventDefault();
            this.$refs.file_iban_photo.files = event.dataTransfer.files;
            this.handleFileIbanPhoto();
            event.currentTarget.classList.add("bg-gray-100");
            event.currentTarget.classList.remove("bg-green-300");
        },
        getCities() {
            axios.get(this.$sellerApiUrl + "/cities").then((response) => {
                this.isLoading = false;
                let data = response.data;
                this.cities = data.data;
            });
        },
        setCityId() {
            this.city_id =
                this.city && this.city.id !== undefined ? this.city.id : 0;
        },
        sellerRegister: function () {
            let vm = this;
            this.isLoading = true;

            let formData = new FormData();

            formData.append("username", this.username);
            formData.append("name", this.name);
            formData.append("email", this.email);
            formData.append("mobile", this.mobile);
            formData.append("store_url", this.store_url);
            formData.append("password", this.password);
            formData.append("confirm_password", this.confirm_password);
            formData.append("store_name", this.store_name);
            formData.append("categories_ids", this.categories_ids);
            formData.append("tax_name", this.tax_name);
            formData.append("tax_number", this.tax_number);
            formData.append("pan_number", this.pan_number);
            formData.append("store_description", this.store_description);
            formData.append("store_logo", this.store_logo);
            formData.append("national_id_card", this.national_id_card);
            formData.append("address_proof", this.address_proof);
            formData.append("city_id", this.city_id);
            formData.append("commission", this.commission);
            formData.append("record_number", this.record_number);
            formData.append("company_name", this.company_name);
            formData.append("record_expiry_date", this.record_expiry_date);
            formData.append(
                "municipality_license_number",
                this.municipality_license_number
            );
            formData.append(
                "municipality_license_expiry_date",
                this.municipality_license_expiry_date
            );
            formData.append("tax_number", this.tax_number);
            formData.append("national_address", this.national_address);
            formData.append("iban_number", this.iban_number);
            formData.append("municipality_photo", this.municipality_photo);
            formData.append("commercial_photo", this.commercial_photo);
            formData.append("tax_photo", this.tax_photo);
            formData.append("national_photo", this.national_photo);
            formData.append("iban_photo", this.iban_photo);

            let url = this.$apiUrl + "/seller/register";
            axios
                .post(url, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    let data = res.data;
                    if (data.status === 1) {
                        this.showMessage("success", data.message);
                        setTimeout(function () {
                            vm.$swal.close();
                            vm.$router.push({ path: "/seller/login" });
                        }, 2000);
                    } else {
                        vm.showError(data.message);
                        vm.isLoading = false;
                    }
                })
                .catch((error) => {
                    vm.isLoading = false;
                    if (error.request.statusText) {
                        this.showError(error.request.statusText);
                    } else if (error.message) {
                        this.showError(error.message);
                    } else {
                        this.showError("Something went wrong!");
                    }
                });
        },
    },
};
</script>

<style scoped>
@import "../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css";
#auth {
    overflow: auto !important;
}
.auth {
    overflow-x: hidden !important;
}
.auth-logo {
    padding-bottom: 10px;
}
</style>
