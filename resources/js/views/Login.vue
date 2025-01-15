<template>
  <div
    class="auth"
    :style="{
      backgroundImage: 'url(' + $panelLoginBackgroundImg + ')',
    }"
  >
    <div class="login-wrapper">
      <div class="auth-section">
        <div class="auth-card">
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
          <h4>{{ __("welcome") }}</h4>
          <p class="auth-subtitle text-primary">
            {{ __("Please_login_to_your_Account") }}
          </p>
          <form @submit.prevent="loginCheck()">
            <div class="form-group position-relative mb-4">
              <input
                type="email"
                class="form-control form-control-xl"
                :placeholder="__('email_address')"
                required
                v-model="user.email"
              />
            </div>
            <div class="form-group position-relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                class="form-control form-control-xl"
                :placeholder="__('password')"
                required
                v-model="user.password"
              />

              <button
                type="button"
                v-on:click="showPassword = !showPassword"
                class="btn btn-sm btn-outline-light font-bold text-primary"
                style="position: absolute; margin-top: -45px"
                :style="isRTL === 'true' ? 'left: 10px;' : 'right: 10px;'"
              >
                {{ showPassword ? __("hide") : __("show") }}
              </button>
            </div>
            <div class="mb-4 text-end" style="margin-top: 35px">
              <router-link class="font-bold" to="/forgot-password"
                ><span>{{ __("forgot_password") }}</span></router-link
              >
            </div>

            <button class="btn btn-primary btn-block btn-lg shadow-lg mt-5 auth-btn">
              {{ __("login") }}
              <b-spinner v-if="isLoading" small label="Spinning"></b-spinner>
            </button>

            <hr />
            <router-link
              to="/seller/login"
              class="btn btn-primary btn-block btn-lg shadow-lg mt-2"
            >
              {{ __("seller_panel") }}</router-link
            >
            <router-link
              to="/delivery_boy/login"
              class="btn btn-primary btn-block btn-lg shadow-lg mt-2"
            >
              {{ __("delivery_boy_panel") }}</router-link
            >
          </form>
          <div class="auth-copyright">
            <a
              href="javascript:void(0)"
              class="text-primary font-weight-normal"
              v-html="copyrightDetails"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <lang />
  </div>
</template>
<script>
import axios from "axios";
import Auth from "../Auth.js";
import Dashboard from "./Dashboard.vue";
import lang from "./lang.vue";

export default {
  components: {
    lang,
  },
  data: function () {
    return {
      isLoading: false,
      lang: localStorage.getItem("lang"),
      languages: [],
      user: {
        email: this.$isDemo === 1 || this.$isDemo === "1" ? "admin@gmail.com" : "",
        password: this.$isDemo === 1 || this.$isDemo === "1" ? "123456" : "",
        type: 1,
      },
      showPassword: false,
      loggedUser: Auth.user,
      setting: "",
      copyrightDetails: window.copyrightDetails,
    };
  },
  computed: {
    isRTL: {
      // Getter
      get() {
        return localStorage.getItem("isRTL"); // Example for RTL languages
      },
      // Setter
      set(value) {
        // Update the underlying data based on the new value
        localStorage.setItem("isRTL", value); // Example for RTL languages
      },
    },
  },

  mounted() {
    if (this.loggedUser) {
      this.$router.push("/dashboard");
    } else {
      this.$router.push("/login").catch(() => {});
    }
    let user_theme = sessionStorage.getItem("user-theme");
    this.userTheme = user_theme;
    document.body.className = user_theme;
    // this.getLanguage();
  },
  methods: {
    loginCheck: function () {
      let vm = this;
      this.isLoading = true;

      let url = this.$apiUrl + "/login";
      axios
        .post(url, this.user)
        .then((res) => {
          vm.isLoading = false;
          let data = res.data;
          if (data.status === 1) {
            Auth.login(data.data.access_token, data.data.user);
            this.$router.push("/dashboard");
          } else {
            vm.showError(data.message);
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
<style scoped></style>
