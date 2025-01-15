<template>
  <div style="position: absolute; top: 0rem; left: 2rem">
    <div class="lang_div">
      <select
        class="form-control form-select"
        @change="changeLanguage($event)"
        v-model="lang"
      >
        <!-- If languages array is empty, display default option -->
        <template v-if="languages.length === 0">
          <option value="en">{{ __("english") }}</option>
        </template>
        <!-- Otherwise, display options from the languages array -->
        <template v-else>
          <option
            v-for="language in languages"
            :key="language.code"
            :value="language.code"
            :selected="language.code === selectedLanguage"
          >
            {{ language.name }}
          </option>
        </template>
      </select>
    </div>
  </div>
</template>

<script>
import Auth from "../Auth.js";
export default {
  components: {},
  data: function () {
    return {
      isLoading: false,
      lang: localStorage.getItem("lang"),
      languages: [],
      showPassword: false,
      loggedUser: Auth.user,
      setting: "",
      copyrightDetails: window.copyrightDetails,
      selectedLanguage: {},
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
    this.getLanguage();
  },
  methods: {
    setDirection(isRTL) {
      const htmlElement = document.documentElement;
      htmlElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    },
    getLanguage() {
      this.isLoading = true;
      let data = {
        params: {
          system_type: 4,
        },
      };
      axios
        .get(this.$apiUrl + "/system_languages", data)
        .then((response) => {
          this.isLoading = false;
          let data = response.data;
          if (data && Array.isArray(data.data)) {
            this.languages = data.data;
            this.totalRows = this.languages.length;
          } else {
            this.languages = [];
            this.totalRows = 0;
          }
          if (!this.isRTL) {
            // Find the default language and set it as the initial value of selectedLanguage
            const defaultLanguage = this.languages.find(
              (language) => language.is_default === 1
            );

            if (defaultLanguage) {
              this.selectedLanguage = defaultLanguage.code;
              window.localStorage.setItem("lang", this.selectedLanguage);
              const isRTL = defaultLanguage.code === "ar"; // Check if the new language is RTL

              localStorage.setItem("isRTL", isRTL);
            }
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.error("Error fetching languages:", error);
        });
    },
    changeLanguage(event) {
      // Update the selected language based on the change event

      this.lang = event.target.value;
      window.localStorage.setItem("lang", this.lang);
      this.isLoading = true;
      let data = {
        language: this.lang,
      };

      if (this.lang === "ar") {

        localStorage.setItem("isRTL", true);
        document.body.classList.add("rtl");
      } else {

        localStorage.setItem("isRTL", false);
        document.body.classList.remove("rtl");
      } // Check if the new language is RTL
      this.setDirection(this.isRTL);

      axios.post(this.$apiUrl + "/change_language", data).then((response) => {
        this.isLoading = false;

        // No need to reload the page, just update the default language
        this.updateDefaultLanguage(this.lang);
        window.location.reload();
      });
    },
    updateDefaultLanguage(newDefaultLanguage) {
      // Update the default language in the languages array
      this.languages.forEach((language) => {
        if (language.code === newDefaultLanguage) {
          language.is_default = 1;
        } else {
          language.is_default = 0;
        }
      });
    },
  },
};
</script>

<style></style>
