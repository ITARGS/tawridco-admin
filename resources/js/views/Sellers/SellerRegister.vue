<template>
  <div class="auth" :style="{ backgroundImage: 'url(' + $panelLoginBackgroundImg + ')' }">
    <lang />
    <div class="login-wrapper">
      <div class="detail-card">
        <div class="auth-logo">
          <a
            href="javascript:void(0)"
            style="display: flex; align-items: center; justify-content: flex-start"
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

                <div class="row">
                  <div class="form-group col-md-4">
                    <div class="form-group">
                      <label>{{ __("user_name") }} <i class="text-danger">*</i></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="name"
                        :placeholder="__('enter_name')"
                      />
                    </div>
                  </div>
                  <div class="form-group col-md-4">
                    <div class="form-group">
                      <label>{{ __("email") }} <i class="text-danger">*</i></label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="email"
                        :placeholder="__('enter_email')"
                      />
                    </div>
                  </div>

                  <div class="form-group col-md-4">
                    <div class="form-group">
                      <label>{{ __("mobile") }} <i class="text-danger">*</i></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="mobile"
                        :placeholder="__('enter_mobile')"
                        inputmode="numeric"
                        @input="validateMobileNumber"
                      />
                      <span v-if="mobilevalidationError" class="error">{{
                        mobilevalidationError
                      }}</span>
                    </div>
                  </div>

                  <div class="form-group col-md-4">
                    <div class="form-group">
                      <label
                        >{{ __("password") }}
                        <i v-if="!id" class="text-danger">*</i></label
                      >
                      <div class="input-group">
                        <input
                          :type="showPassword ? 'text' : 'password'"
                          class="form-control"
                          v-model="password"
                          :placeholder="__('enter_passord')"
                        />
                        <button
                          type="button"
                          v-on:click="showPassword = !showPassword"
                          class="btn btn-primary font-bold"
                        >
                          <i
                            v-if="showPassword"
                            class="fa fa-eye-slash"
                            aria-hidden="true"
                          ></i>
                          <i v-else class="fa fa-eye" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="form-group col-md-4">
                    <div class="form-group">
                      <label
                        >{{ __("confirm_password") }}
                        <i v-if="!id" class="text-danger">*</i></label
                      >
                      <div class="input-group">
                        <input
                          :type="showConfirmPassword ? 'text' : 'password'"
                          class="form-control"
                          v-model="confirm_password"
                          :placeholder="__('enter_confirm_password')"
                        />
                        <button
                          type="button"
                          v-on:click="showConfirmPassword = !showConfirmPassword"
                          class="btn btn-primary font-bold"
                        >
                          <i
                            v-if="showConfirmPassword"
                            class="fa fa-eye-slash"
                            aria-hidden="true"
                          ></i>
                          <i v-else class="fa fa-eye" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="form-group col-md-4">
                    <div class="form-group">
                      <label>{{ __("categories") }} <i class="text-danger">*</i></label>
                      <Select2
                        v-model="categories_ids"
                        :placeholder="__('select_categories')"
                        :options="categories_options"
                        :settings="{ multiple: 'multiple' }"
                      />
                    </div>
                  </div>
                </div>
                <!--
                 <div class="row">
                  <div class="form-group col-md-4">
                    <label>{{ __("register_number") }}<i class="text-danger">*</i></label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="record_number"
                      :placeholder="__('register_number')"
                      required
                    />
                  </div>

                  <div class="form-group col-md-4">
                    <label>
                      {{ __("register_expiry_date") }} <i class="text-danger">*</i></label
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
                      >{{ __("municipality_number") }}<i class="text-danger">*</i></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="municipality_license_number"
                      :placeholder="__('municipality_number')"
                      required
                    />
                  </div>

                  <div class="form-group col-md-4">
                    <label>
                      {{ __("municipality_expire_number") }}
                      <i class="text-danger">*</i></label
                    >
                    <input
                      type="date"
                      class="form-control"
                      v-model="municipality_license_expiry_date"
                      required
                    />
                  </div>

                  <div class="form-group col-md-4">
                    <label> {{ __("register_coby") }} <i class="text-danger">*</i></label>
                    <input
                      type="file"
                      class="form-control"
                      ref="file_record_image"
                      v-on:change="handleFileRecordImage"
                      required
                    />
                  </div>

                  <div class="form-group col-md-4">
                    <label>
                      {{ __("municipality_copt") }} <i class="text-danger">*</i></label
                    >
                    <input
                      type="file"
                      class="form-control"
                      ref="file_municipality_license_image"
                      v-on:change="handleFileMunicipalityLicenseImage"
                      required
                    />
                  </div>

                  <div class="form-group col-md-4">
                    <label> {{ __("tax_copy") }} <i class="text-danger">*</i></label>
                    <input
                      type="file"
                      class="form-control"
                      ref="file_tax_certificate_image"
                      v-on:change="handleFileTaxCertificateImage"
                      required
                    />
                  </div>

                  <div class="form-group col-md-4">
                    <label> {{ __("addres_copy") }} <i class="text-danger">*</i></label>
                    <input
                      type="file"
                      class="form-control"
                      ref="file_national_address_image"
                      v-on:change="handleFileNationalAddressImage"
                      required
                    />
                  </div>

                  <div class="form-group col-md-4">
                    <label> {{ __("iban_cer") }} <i class="text-danger">*</i></label>
                    <input
                      type="file"
                      class="form-control"
                      ref="file_iban_certificate"
                      v-on:change="handleFileIbanCertificate"
                      required
                    />
                  </div>

                  <div class="form-group col-md-4">
                    <label> {{ __("store_owners") }} <i class="text-danger">*</i></label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="owner_birth_date"
                      required
                    />
                  </div>

                  <div class="form-group col-md-4">
                    <label> {{ __("tax_name") }} <i class="text-danger">*</i></label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="tax_name"
                      :placeholder="__('tax_name')"
                      required
                    />
                  </div>
                </div>
                 -->

                <div class="row">
                  <div class="form-group col-md-4">
                    <div class="form-group">
                      <label>{{ __("store_name") }} <i class="text-danger">*</i></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="store_name"
                        required
                        :placeholder="__('enter_store-name')"
                      />
                    </div>
                  </div>
                  <div class="form-group col-md-4">
                    <div class="form-group">
                      <label>{{ __("store_url") }}</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="store_url"
                        :placeholder="__('enter_store_url')"
                      />
                    </div>
                  </div>

                  <div class="col-md-4">
                    <label for="city_name"
                      >{{ __("select_or_search_city")
                      }}<i class="text-danger">*</i></label
                    >
                    <multiselect
                      v-model="city"
                      :options="cities"
                      @close="setCityId"
                      :placeholder="__('select_search')"
                      label="name"
                      track-by="name"
                      id="city_name"
                      required
                    >
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
                  <div class="form-group col-md-3">
                    <div class="form-group">
                      <label>{{ __("tax_name") }}</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="tax_name"
                        :placeholder="__('enter_tax')"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group col-md-3">
                    <div class="form-group">
                      <label>{{ __("tax_number") }}</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="tax_number"
                        :placeholder="__('enter_tax_number')"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group col-md-3">
                    <div class="form-group">
                      <label>{{ __("pan_number") }}<i class="text-danger">*</i></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="pan_number"
                        :placeholder="__('enter_pan_number')"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group col-md-3">
                    <label>{{ __("commission") }} (%) <i class="text-danger">*</i></label>
                    <input
                      type="number"
                      class="form-control"
                      v-model="commission"
                      :placeholder="__('enter_commission')"
                      readonly
                    />
                    <p v-if="commissionvalidationError" class="error">
                      {{ commissionvalidationError }}
                    </p>
                  </div>

                  <div class="form-group col-md-4">
                    <div class="form-group">
                      <label
                        >{{ __("national_identity_card") }}
                        <i class="text-danger">*</i></label
                      >

                      <input
                        type="file"
                        class="file-input"
                        ref="file_national_id_card"
                        v-on:change="handleFileNationalIdCard"
                        required
                      />

                      <div
                        class="file-input-div bg-gray-100"
                        @click="$refs.file_national_id_card.click()"
                        @drop="dropFileNationalIdCard"
                        @dragover="$dragoverFile"
                        @dragleave="$dragleaveFile"
                      >
                        <template v-if="national_id_card && national_id_card.name !== ''">
                          <label
                            >{{ __("selected_file_name") }}:-
                            {{ national_id_card.name }}</label
                          >
                        </template>
                        <template v-else>
                          <label><i class="fa fa-cloud-upload-alt fa-2x"></i></label>
                          <label>{{ __("drop_files_here_or_click_to_upload") }}</label>
                        </template>
                      </div>

                      <div class="row" v-if="national_id_card_url">
                        <div v-if="isImage(national_id_card_url)" class="col-md-2">
                          <img
                            class="custom-image"
                            :src="national_id_card_url"
                            title="Identity Card"
                            alt="Identity Card"
                          />
                        </div>
                        <div v-else class="col-md-2 mt-2">
                          <a
                            target="_blank"
                            :href="national_id_card_url"
                            class="badge bg-success"
                          >
                            <i class="fa fa-eye"></i> {{ __("identity") }}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-md-4">
                    <div class="form-group">
                      <label
                        >{{ __("address_proof") }} <i class="text-danger">*</i></label
                      >
                      <input
                        type="file"
                        class="file-input"
                        ref="file_address_proof"
                        v-on:change="handleFileAddressProof"
                        required
                      />

                      <div
                        class="file-input-div bg-gray-100"
                        @click="$refs.file_address_proof.click()"
                        @drop="dropFileAddressProof"
                        @dragover="$dragoverFile"
                        @dragleave="$dragleaveFile"
                      >
                        <template v-if="address_proof_name == ''">
                          <label><i class="fa fa-cloud-upload-alt fa-2x"></i></label>
                          <label>{{ __("drop_files_here_or_click_to_upload") }}</label>
                        </template>
                        <template v-else>
                          <label
                            >{{ __("selected_file_name") }}
                            {{ address_proof_name }}</label
                          >
                        </template>
                      </div>

                      <div class="row" v-if="address_proof_url">
                        <div v-if="isImage(address_proof_url)" class="col-md-2">
                          <img
                            class="custom-image"
                            :src="address_proof_url"
                            title="Address Proof"
                            alt="Address Proof"
                          />
                        </div>
                        <div v-else class="col-md-2 mt-2">
                          <a
                            target="_blank"
                            :href="address_proof_url"
                            class="badge bg-success"
                          >
                            <i class="fa fa-eye"></i> {{ __("address_proof") }}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group col-md-4">
                    <label for="logo"
                      >{{ __("logo") }} <i class="text-danger">*</i></label
                    >
                    <input
                      type="file"
                      id="logo"
                      accept="image/*"
                      class="file-input"
                      ref="file_store_logo"
                      v-on:change="handleFileStoreLogo"
                      required
                    />
                    <div
                      class="file-input-div bg-gray-100"
                      @click="$refs.file_store_logo.click()"
                      @drop="dropFileStoreLogo"
                      @dragover="$dragoverFile"
                      @dragleave="$dragleaveFile"
                    >
                      <template v-if="store_logo && store_logo.name !== ''">
                        <label>
                          {{ __("selected_file_name") }} {{ store_logo.name }}</label
                        >
                      </template>
                      <template v-else>
                        <label><i class="fa fa-cloud-upload-alt fa-2x"></i></label>
                        <label>{{ __("drop_files_here_or_click_to_upload") }}</label>
                      </template>
                    </div>
                    <div class="row" v-if="store_logo_url">
                      <div class="col-md-2">
                        <img
                          class="custom-image"
                          :src="store_logo_url"
                          title="Store Logo"
                          alt="Store Logo"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-md-12">
                    <label
                      >{{ __("store_description") }} : <i class="text-danger">*</i></label
                    >
                    <editor
                      :placeholder="__('enter_store_desc')"
                      v-model="store_description"
                      :init="{
                        height: 200,
                        plugins: this.$editorPlugins,
                        toolbar: this.$editorToolbar,
                        font_size_formats: this.$editorFont_size_formats,
                      }"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-primary btn-block btn-lg shadow-lg mt-1">
              {{ __("complete") }}
              <b-spinner v-if="isLoading" small label="Spinning"></b-spinner>
            </button>
          </div>
        </form>
        <div class="auth-copyright">
          <a href="javascript:void(0)" class="text-primary font-weight-normal">
            {{ $copyrightDetails }}</a
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

      categories_ids: [],

      tax_name: "",
      tax_number: "",
      pan_number: "",

      store_description: "",

      status: 0,
      store_logo: "",
      store_logo_url: "",
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
    };
  },
  created: function () {
    this.getCategories();
    this.getCities();
    this.getSellerCommission();
  },
  mounted() {},
  computed: {
    categories_options: function () {
      var temp = [];
      this.categories.forEach((category) => {
        //Only Main Categories
        if (category.parent_id == 0) {
          temp.push({ id: category.id, text: category.name });
        }
      });
      return temp;
    },
  },
  methods: {
    getCategories() {
      axios.get(this.$sellerApiUrl + "/categories").then((response) => {
        let data = response.data;
        this.categories = data.data;
        console.log(this.categories);
      });
    },
    getSellerCommission() {
      axios.get(this.$sellerApiUrl + "/seller_commission").then((response) => {
        let data = response.data;
        this.commission = data.data.value;
      });
    },

    validateMobileNumber() {
      const mobileNumber = this.mobile;
      if (!/^\d{1,16}$/.test(mobileNumber)) {
        this.mobilevalidationError = "Mobile Number must be maximum 16 digits numbers.";
        this.mobile = null;
      } else {
        this.mobilevalidationError = null;
      }
    },

    handleFileStoreLogo() {
      this.store_logo = this.$refs.file_store_logo.files[0];
      this.store_logo_url = URL.createObjectURL(this.store_logo);
    },
    dropFileStoreLogo(event) {
      event.preventDefault();
      this.$refs.file_store_logo.files = event.dataTransfer.files;
      this.handleFileStoreLogo(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },

    handleFileNationalIdCard() {
      this.national_id_card = this.$refs.file_national_id_card.files[0];
      this.national_id_card_url = URL.createObjectURL(this.national_id_card);
    },
    dropFileNationalIdCard(event) {
      event.preventDefault();
      this.$refs.file_national_id_card.files = event.dataTransfer.files;
      this.handleFileNationalIdCard(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },

    handleFileAddressProof() {
      this.address_proof = this.$refs.file_address_proof.files[0];
      this.address_proof_url = URL.createObjectURL(this.address_proof);
      this.address_proof_name = this.address_proof.name;
    },
    dropFileAddressProof(event) {
      event.preventDefault();
      this.$refs.file_address_proof.files = event.dataTransfer.files;
      this.handleFileAddressProof(); // Trigger the onChange event manually
      // Clean up
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
      this.city_id = this.city && this.city.id !== undefined ? this.city.id : 0;
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
              //Auth.logout();
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
