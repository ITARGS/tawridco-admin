<template>
  <div>
    <div class="page-heading">
      <div class="row">
        <div class="col-12 col-md-6 order-md-1 order-last">
          <h3>{{ __("view_product") }}</h3>
        </div>
        <div class="col-12 col-md-6 order-md-2 order-first">
          <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" v-if="isSellerRoute">
                <router-link to="/seller/dashboard">{{ __("dashboard") }}</router-link>
              </li>
              <li class="breadcrumb-item" v-else>
                <router-link to="/dashboard">{{ __("dashboard") }}</router-link>
              </li>

              <li class="breadcrumb-item" v-if="isSellerRoute">
                <router-link to="/seller/manage_products">{{ __("manage_products") }}</router-link>
              </li>
              <li class="breadcrumb-item" v-else>
                <router-link to="/manage_products">{{ __("manage_products") }}</router-link>
              </li>

              <li class="breadcrumb-item active" aria-current="page">{{ __("product_details") }}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-12 order-md-1 order-last">
          <div class="card">
            <div class="card-header">
              <h4>{{ __("product_details") }}</h4>
              <span class="pull-right">
                <router-link to="/manage_products" class="btn btn-primary"
                  >{{ __("manage_products") }}</router-link
                >
              </span>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12 table-responsive">
                  <table class="table table-bordered table-responsive">
                    <tbody>
                      <tr>
                        <th class="th-width">{{ __("name") }}</th>
                        <td>{{ record.name }}</td>
                        <th class="th-width">{{ __("sellers") }}</th>
                        <td>{{ record.seller.name }}</td>
                      </tr>
                      <tr>
                        <th class="th-width">{{ __("product_id") }}</th>
                        <td>{{ record.id }}</td>
                        <th class="th-width">{{ __("indicator") }}</th>
                        <td>
                          <span v-if="record.status === 0" class="badge bg-info"
                            >{{ __("none") }}</span
                          >
                          <span v-if="record.status === 1" class="badge bg-success"
                            >{{ __("veg") }}</span
                          >
                          <span v-if="record.status === 2" class="badge bg-danger"
                            >{{ __("non_veg") }}</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <th class="th-width">{{ __("tax") }}</th>
                        <td>
                          <template v-if="record.tax">
                            {{ record.tax.title }} {{ record.tax.percentage }}%
                          </template>
                        </td>
                        <th class="th-width">{{ __("made_in") }}</th>
                        <td>
                          <template v-if="record.made_in_country">
                            {{ record.made_in_country.name }}
                          </template>
                        </td>
                      </tr>
                      <tr>
                        <th class="th-width">{{ __("status") }}</th>
                        <td>
                          <span v-if="record.status === 1" class="badge bg-success"
                            >{{ __("active") }}</span
                          >
                          <span v-if="record.status === 0" class="badge bg-danger"
                            >{{ __("deactive") }}</span
                          >
                        </td>
                        <th class="th-width">{{ __("return") }}</th>
                        <td>
                          <span class="badge bg-danger" v-if="record.return_status === 0"
                            >{{ __("not_allowed") }}</span
                          >
                          <span class="badge bg-success" v-if="record.return_status === 1"
                            >{{ __("allowed") }}</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <th class="th-width">Manufacturer</th>
                        <td>
                          {{ record.manufacturer }}
                        </td>
                        <th class="th-width">{{ __("till_status") }}</th>
                        <td>
                          <span class="badge bg-danger" v-if="record.till_status == 0"
                            >{{ __("not_applicable") }}</span
                          >
                          <span class="badge bg-success" v-if="record.till_status == 2"
                            >{{ __("received") }}</span
                          >
                          <span class="badge bg-success" v-if="record.till_status == 3"
                            >{{ __("processed") }}</span
                          >
                          <span class="badge bg-success" v-if="record.till_status == 4"
                            >{{ __("shipped") }}</span
                          >
                          <span class="badge bg-success" v-if="record.till_status == 5"
                            >{{ __("delivered") }}</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <th class="th-width">{{ __("is_approved") }}</th>
                        <td>
                          <span
                            class="badge bg-success"
                            v-if="record.is_approved === 1"
                            >{{ __("approve") }}</span
                          >
                          <span class="badge bg-danger" v-if="record.is_approved === 0">{{
                            __("not-approved")
                          }}</span>
                        </td>
                        <th class="th-width">{{ __("main_image") }}</th>
                        <td>
                          <img
                            :src="$storageUrl + record.image"
                            height="75"
                            v-if="record.image"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th class="th-width">{{ __("cancellation") }}</th>
                        <td>
                          <span
                            class="badge bg-danger"
                            v-if="record.cancelable_status === 0"
                            >{{ __("not_allowed") }}</span
                          >
                          <span
                            class="badge bg-success"
                            v-if="record.cancelable_status === 1"
                            >{{ __("allowed") }}</span
                          >
                        </td>
                        <th class="th-width">{{ __("category") }}</th>
                        <td>
                          <template v-if="record.category">
                            {{ record.category.name }}
                          </template>
                        </td>
                      </tr>
                      <tr>
                        <th class="th-width">{{ __("other_images") }}</th>
                        <td colspan="3">
                          <template v-if="other_images" v-for="image in other_images">
                            <img
                              :src="$storageUrl + image.image"
                              height="75"
                              style="margin-right: 2px"
                            />
                          </template>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h4>{{ __("product_description") }}</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <editor
                    :placeholder="__('enter_product_description')"
                    v-model="record.description"
                    readonly="true"
                    disabled="true"
                    :init="{
                      height: 400,
                      readonly: true,
                      disabled: true,
                    }"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h4>{{ __("variants_list") }}</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div
                  class="col-md-12 table-responsive"
                  v-for="variant in record.variants"
                >
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <th class="th-width">{{ __("product_name") }}</th>
                        <th class="th-width">{{ __("variant_id") }}</th>
                        <th class="th-width">{{ __("measurement") }}</th>
                        <th class="th-width">{{ __("stock") }}</th>
                        <th class="th-width"> {{ __("price") }} ({{ $currency }})</th>
                        <th class="th-width"> {{ __("discounted_price") }} ({{ $currency }})</th>
                      </tr>
                      <tr>
                        <td>
                          <template v-if="variant.unit">
                            {{
                              record.name +
                              " " +
                              variant.measurement +
                              " " +
                              variant.unit.short_code
                            }}
                          </template>
                          <template v-else>
                            {{ record.name + " " + variant.measurement }}
                          </template>
                        </td>
                        <td>{{ variant.id }}</td>
                        <td>
                          <template v-if="variant.unit">
                            {{ variant.measurement + " " + variant.unit.short_code }}
                          </template>
                          <template v-else>
                            {{ variant.measurement }}
                          </template>
                        </td>
                        <td>{{ variant.stock }}</td>
                        <td>{{ variant.price }}</td>
                        <td>{{ variant.discounted_price }}</td>
                      </tr>
                      <tr>
                        <th class="th-width">{{ __("images") }}</th>
                        <td colspan="5">
                          <template v-if="variant.images" v-for="image in variant.images">
                            <img
                              :src="$storageUrl + image.image"
                              height="75"
                              style="margin-right: 2px"
                            />
                          </template>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Editor from "@tinymce/tinymce-vue";
export default {
  components: { editor: Editor },
  data: function () {
    return {
      editor: ClassicEditor,
      editorConfig: { toolbar: [] },
      image: null,
      main_image_path: "",
      other_images: null,
      id: null,
      record: null,
    };
  },
  computed: {
    isSellerRoute() {
      // Use this.$route to access the current route
      return this.$route.path.startsWith("/seller/");
    },
  },
  created: function () {
    this.id = this.$route.params.id;
    if (this.id) {
      this.getProduct();
    }
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      axios
        .get(this.$apiUrl + "/products/edit/" + this.id)
        .then((response) => {
          this.isLoading = false;
          let data = response.data;
          if (data.status === 1) {
            this.record = data.data;
            this.main_image_path = this.record.image;
            this.other_images = this.record.images;
          } else {
            this.showError(data.message);
            setTimeout(() => {
              this.$router.back();
            }, 1000);
          }
        })
        .catch((error) => {
          this.isLoading = false;
          if (error.request.statusText) {
            this.showError(error.request.statusText);
          } else if (error.message) {
            this.showError(error.message);
          } else {
            this.showError("Something went wrong!");
          }
        });
    },
    deleteRecord(variant_id) {
      this.$swal
        .fire({
          title: "Are you Sure?",
          text: "You want be able to revert this",
          confirmButtonText: "Yes, Sure",
          cancelButtonText: "Cancel",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#37a279",
          cancelButtonColor: "#d33",
        })
        .then((result) => {
          if (result.value) {
            let postData = {
              id: variant_id,
            };
            axios.post(this.$apiUrl + "/products/delete", postData).then((response) => {
              let data = response.data;
              this.getProduct();
              //this.showSuccess(data.message);
              this.showMessage("success", data.message);
            });
          }
        });
    },
  },
};
</script>
<style scoped>
.th-width {
  width: 170px;
}
</style>
