<template>
  <b-modal
    ref="my-modal"
    :title="modal_title"
    @hidden="$emit('modalClose')"
    size="lg"
    scrollable
    no-close-on-backdrop
    no-fade
    static
  >
    <div slot="modal-footer">
      <b-button
        variant="primary"
        @click="$refs['dummy_submit'].click()"
        :disabled="isLoading"
        >Save
        <b-spinner v-if="isLoading" small label="Spinning"></b-spinner>
      </b-button>
      <b-button variant="secondary" @click="hideModal">{{ __("cancel") }}</b-button>
    </div>
    <form ref="my-form" @submit.prevent="saveRecord">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="name">{{ __("name") }}</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="deliveryBoys.name"
              class="form-control"
              :placeholder="__('name')"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="dob">{{ __("date_of_birth") }}</label>
            <input
              type="date"
              name="dob"
              id="dob"
              v-model="deliveryBoys.dob"
              required
              class="form-control"
              :placeholder="__('date_of_birth')"
              @input="validateDateOfBirth"
            />
            <span v-if="validationError" class="error">{{ validationError }}</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="mobile">{{ __("mobile_no") }}</label>
            <input
              type="number"
              name="mobile"
              id="mobile"
              v-model="deliveryBoys.mobile"
              class="form-control"
              :placeholder="__('mobile_no')"
              @input="validateMobileNumber"
            />
            <span v-if="validationError" class="error">{{ validationError }}</span>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="email">{{ __("email") }}</label>
            <input
              type="text"
              name="email"
              id="email"
              v-model="deliveryBoys.email"
              class="form-control"
              :placeholder="__('email')"
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="password">{{ __("password") }}</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="deliveryBoys.password"
              class="form-control"
              :placeholder="__('password')"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="confirm_password">{{ __("confirm_password") }}</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              v-model="deliveryBoys.confirm_password"
              class="form-control"
              :placeholder="__('confirm_password')"
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="driving_license">{{ __("driving_licence") }}</label>
            <input
              type="file"
              name="driving_license"
              id="driving_license"
              v-on:change="handleFileUploadLicense"
              ref="file_license"
              :required="!deliveryBoys.id"
              class="file-input"
            />

            <div
              class="file-input-div bg-gray-100"
              @click="$refs.file_license.click()"
              @drop="dropFileUploadLicense"
              @dragover="$dragoverFile"
              @dragleave="$dragleaveFile"
            >
              <template
                v-if="
                  deliveryBoys.driving_license && deliveryBoys.driving_license.name !== ''
                "
              >
                <label
                  >{{ __("selected_file_name") }}:- {{ deliveryBoys.driving_license.name }}</label
                >
              </template>
              <template v-else>
                <label><i class="fa fa-cloud-upload-alt fa-2x"></i></label>
                <label>{{ __("drop_files_here_or_click_to_upload") }}</label>
              </template>
            </div>

            <div class="row" v-if="deliveryBoys.driving_license_url">
              <div v-if="isImage(deliveryBoys.driving_license_url)" class="col-md-2">
                <img
                  class="custom-image"
                  :src="deliveryBoys.driving_license_url"
                  title="Driving License"
                  alt="Driving License"
                />
              </div>
              <div v-else class="col-md-2 mt-2">
                <a
                  target="_blank"
                  :href="deliveryBoys.driving_license_url"
                  class="badge bg-success"
                >
                  <i class="fa fa-eye"></i> {{ __("identity") }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="national_identity_card">{{ _("national_identity_card") }}</label>
            <input
              type="file"
              name="national_identity_card"
              id="national_identity_card"
              v-on:change="handleFileUploadCard"
              ref="file_card"
              :required="!deliveryBoys.id"
              class="file-input"
            />

            <div
              class="file-input-div bg-gray-100"
              @click="$refs.file_card.click()"
              @drop="dropFileUploadCard"
              @dragover="$dragoverFile"
              @dragleave="$dragleaveFile"
            >
              <template
                v-if="
                  deliveryBoys.national_identity_card &&
                  deliveryBoys.national_identity_card.name !== ''
                "
              >
                <label
                  >{{ __("selected_file_name") }}
                  {{ deliveryBoys.national_identity_card.name }}</label
                >
              </template>
              <template v-else>
                <label><i class="fa fa-cloud-upload-alt fa-2x"></i></label>
                <label>{{ __("drop_files_here_or_click_to_upload") }}</label>
              </template>
            </div>

            <div class="row" v-if="deliveryBoys.national_identity_card_url">
              <div
                v-if="isImage(deliveryBoys.national_identity_card_url)"
                class="col-md-2"
              >
                <img
                  class="custom-image"
                  :src="deliveryBoys.national_identity_card_url"
                  title="National Identity Card"
                  alt="National Identity Card"
                />
              </div>
              <div v-else class="col-md-2 mt-2">
                <a
                  target="_blank"
                  :href="deliveryBoys.national_identity_card_url"
                  class="badge bg-success"
                >
                  <i class="fa fa-eye"></i> {{ __("identity") }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="bonus">{{ __("bonus") }}</label>
            <input
              type="number"
              name="bonus"
              id="bonus"
              v-model="deliveryBoys.bonus"
              class="form-control"
              :placeholder="__('bonus')"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="ifsc_code">{{ __("bank_ifsc_code") }}</label>
            <input
              type="text"
              name="ifsc_code"
              id="ifsc_code"
              v-model="deliveryBoys.ifsc_code"
              required
              class="form-control"
              :placeholder="__('bank_ifsc_code')"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="bank_name">{{ __("bank_name") }}</label>
            <input
              type="text"
              name="bank_name"
              id="bank_name"
              v-model="deliveryBoys.bank_name"
              required
              class="form-control"
              :placeholder="__('bank_name')"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="account_number">{{ __("account_number") }}</label>
            <input
              type="number"
              name="account_number"
              id="account_number"
              v-model="deliveryBoys.bank_account_number"
              required
              class="form-control"
              :placeholder="__('account_number')"
              @input="validateAccountNumber"
            />
            <span v-if="validationError" class="error">{{ validationError }}</span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="account_name">{{ __("bank_account_name") }}</label>
            <input
              type="text"
              name="account_name"
              id="account_name"
              v-model="deliveryBoys.account_name"
              required
              class="form-control"
              :placeholder="__('bank_account_name')"
            />
          </div>
        </div>
        <div class="col-md-6">
          <label for="city_name">{{ __("select_or_search_city") }}</label>
          <multiselect
            v-model="city"
            :options="cities"
            @close="setCityId"
            :placeholder="__('select_or_search_city')"
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
                <span class="option__title">{{ props.option.formatted_address }}</span>
              </div>
            </template>
          </multiselect>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="address">{{ __("address") }}</label>
            <textarea
              name="address"
              id="address"
              v-model="deliveryBoys.address"
              rows="3"
              class="form-control"
              :placeholder="__('address')"
            ></textarea>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="other_payment_info">{{ __("other_payment_information") }}</label>
            <textarea
              name="other_payment_info"
              id="other_payment_info"
              v-model="deliveryBoys.other_payment_information"
              rows="3"
              class="form-control"
              :placeholder="__('other_payment_information')"
            ></textarea>
          </div>
        </div>

        <div class="col-md-12" v-if="deliveryBoys.id">
          <div class="form-group">
            <label>{{ __("status") }}</label><br />
            <b-form-radio-group
              v-model="deliveryBoys.status"
              :options="[
                { text: __('registered'), value: 0 },
                { text: __('activated'), value: 1 },
                { text: __('not-approved'), value: 2 },
                { text: __('deactivated'), value: 3 },
              ]"
              buttons
              button-variant="outline-primary"
              required
            ></b-form-radio-group>
          </div>
        </div>
        <div v-if="[2, 3].includes(deliveryBoys.status)" class="form-group col-md-12">
          <div class="form-group">
            <label for="remark">{{ __("remark") }}</label>
            <textarea
              class="form-control"
              name="remark"
              id="remark"
              required
              v-model="deliveryBoys.remark"
              :placeholder="__('add_mark')"
            ></textarea>
          </div>
        </div>
      </div>
      <button ref="dummy_submit" style="display: none"></button>
    </form>
  </b-modal>
</template>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";

export default {
  props: ["record"],
  components: {
    Multiselect,
  },
  data: function () {
    return {
      isLoading: false,
      city: "",
      cities: [],
      deliveryBoys: {
        id: this.record ? this.record.id : null,
        admin_id: this.record ? this.record.admin_id : "",
        name: this.record ? this.record.name : "",
        mobile: this.record ? this.record.mobile : "",
        email: this.record ? this.record.admin.email : "",
        password: "",
        confirm_password: "",
        dob: this.record ? this.record.dob : "",
        bonus: this.record ? this.record.bonus : "",

        driving_license: "",
        driving_license_url: this.record
          ? this.$storageUrl + this.record.driving_license
          : "",
        national_identity_card: "",
        national_identity_card_url: this.record
          ? this.$storageUrl + this.record.national_identity_card
          : "",

        ifsc_code: this.record ? this.record.ifsc_code : "",
        bank_name: this.record ? this.record.bank_name : "",
        bank_account_number: this.record ? this.record.bank_account_number : "",
        account_name: this.record ? this.record.account_name : "",
        address: this.record ? this.record.address : "",
        other_payment_information: this.record
          ? this.record.other_payment_information
          : "",
        city_id: this.record ? this.record.city_id : "",
        status: this.record ? this.record.status : 0,
        remark: this.record ? this.record.remark : "",
      },
      validationError: null,
    };
  },
  created: function () {
    this.getCities();
  },
  computed: {
    modal_title: function () {
      let title = this.deliveryBoys.id ? "Edit" : "Add";
      title += " Delivery Boys";
      return title;
    },
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    handleFileUploadLicense() {
      this.deliveryBoys.driving_license = this.$refs.file_license.files[0];
      this.deliveryBoys.driving_license_url = URL.createObjectURL(
        this.deliveryBoys.driving_license
      );
    },
    dropFileUploadLicense(event) {
      event.preventDefault();
      this.$refs.file_license.files = event.dataTransfer.files;
      this.handleFileUploadLicense(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
    handleFileUploadCard() {
      this.deliveryBoys.national_identity_card = this.$refs.file_card.files[0];
      this.deliveryBoys.national_identity_card_url = URL.createObjectURL(
        this.deliveryBoys.national_identity_card
      );
    },
    dropFileUploadCard(event) {
      event.preventDefault();
      this.$refs.file_card.files = event.dataTransfer.files;
      this.handleFileUploadCard(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
    validateDateOfBirth() {
      const selectedDate = new Date(this.deliveryBoys.dob);
      const currentDate = new Date();
      if (selectedDate > currentDate) {
        this.validationError = "Date of Birth cannot be in the future.";
      } else {
        this.validationError = null;
      }
    },
    validateMobileNumber() {
      if (this.deliveryBoys.mobile < 0) {
        this.validationError = "Mobile Number must be numeric value.";
        this.deliveryBoys.mobile = null;
      } else {
        this.validationError = null;
      }
    },
    validateAccountNumber() {
      if (this.deliveryBoys.bank_account_number < 1) {
        this.validationError = "Account Number must be numeric value.";
        this.deliveryBoys.bank_account_number = null;
      } else {
        this.validationError = null;
      }
    },
    getCities() {
      this.isLoading = true;
      axios.get(this.$apiUrl + "/cities").then((response) => {
        this.isLoading = false;
        let data = response.data;
        this.cities = data.data;

        if (this.deliveryBoys.id) {
          this.city = this.cities.filter((item) => {
            return item.id === this.record.city_id;
          });
        }
      });
    },
    setCityId() {
      this.deliveryBoys.city_id = this.city.id;
    },

    saveRecord: function () {
      let vm = this;
      this.isLoading = true;
      let formObject = this.deliveryBoys;
      let formData = new FormData();
      for (let key in formObject) {
        formData.append(key, formObject[key]);
      }
      let url = this.$apiUrl + "/delivery_boys/save";
      if (this.deliveryBoys.id) {
        url = this.$apiUrl + "/delivery_boys/update";
      }

      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          let data = res.data;
          if (data.status === 1) {
            this.$eventBus.$emit("deliveryBoysSaved", data.message);
            this.hideModal();
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
  mounted() {
    this.showModal();
  },
};
</script>

<style scoped>
@import "../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css";
</style>
