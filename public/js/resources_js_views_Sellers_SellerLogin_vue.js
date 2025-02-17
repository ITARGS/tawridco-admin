"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Sellers_SellerLogin_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sellers/SellerLogin.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sellers/SellerLogin.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Auth.js */ "./resources/js/Auth.js");
/* harmony import */ var _lang_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lang.vue */ "./resources/js/views/lang.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    lang: _lang_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      user: {
        email: this.$isDemo === 1 || this.$isDemo === "1" ? "seller@gmail.com" : "",
        password: this.$isDemo === 1 || this.$isDemo === "1" ? "123456" : "",
        type: 3
      },
      showPassword: false,
      loggedUser: _Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].user,
      setting: "",
      selectedLanguage: {}
    };
  },
  mounted: function mounted() {
    if (this.loggedUser) {
      this.$router.push("/seller/login");
    }
    this.getLanguage();
  },
  computed: {
    isRTL: {
      // Getter
      get: function get() {
        return localStorage.getItem("isRTL"); // Example for RTL languages
      },
      // Setter
      set: function set(value) {
        // Update the underlying data based on the new value
        localStorage.setItem("isRTL", value); // Example for RTL languages
      }
    }
  },
  methods: {
    // getLanguage() {
    //   this.isLoading = true;
    //   let data = {
    //     params: {
    //       system_type: 4,
    //     },
    //   };
    //   axios
    //     .get(this.$apiUrl + "/system_languages", data)
    //     .then((response) => {
    //
    //       this.isLoading = false;
    //       let data = response.data;
    //       if (data && Array.isArray(data.data)) {
    //         this.languages = data.data;
    //         this.totalRows = this.languages.length;
    //       } else {
    //         this.languages = [];
    //         this.totalRows = 0;
    //       }

    //       // Find the default language and set it as the initial value of selectedLanguage
    //       const defaultLanguage = this.languages.find(
    //         (language) => language.is_default === 1
    //       );

    //       if (defaultLanguage) {
    //         this.selectedLanguage = defaultLanguage.code;
    //         window.localStorage.setItem("lang", this.selectedLanguage);
    //         const isRTL = defaultLanguage.code === "ar"; // Check if the new language is RTL
    //         localStorage.setItem("isRTL", isRTL);
    //         this.isRTL = localStorage.getItem("isRTL") === "true";
    //       }
    //     })
    //     .catch((error) => {
    //
    //       this.isLoading = false;
    //       console.error("Error fetching languages:", error);
    //     });
    // },
    loginCheck: function loginCheck() {
      var _this = this;
      var vm = this;
      this.isLoading = true;
      var url = this.$apiUrl + "/login";
      axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, this.user).then(function (res) {
        vm.isLoading = false;
        var data = res.data;
        if (data.status === 1) {
          _Auth_js__WEBPACK_IMPORTED_MODULE_1__["default"].login(data.data.access_token, data.data.user);
          _this.$router.push("/seller");
        } else {
          vm.showError(data.message);
        }
      })["catch"](function (error) {
        vm.isLoading = false;
        if (error.request.statusText) {
          _this.showError(error.request.statusText);
        } else if (error.message) {
          _this.showError(error.message);
        } else {
          _this.showError("Something went wrong!");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/lang.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/lang.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Auth.js */ "./resources/js/Auth.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      isLoading: false,
      lang: "",
      languages: [],
      showPassword: false,
      loggedUser: _Auth_js__WEBPACK_IMPORTED_MODULE_0__["default"].user,
      setting: "",
      copyrightDetails: window.copyrightDetails,
      selectedLanguage: {}
    };
  },
  computed: {
    isRTL: {
      // Getter
      get: function get() {
        return localStorage.getItem("isRTL"); // Example for RTL languages
      },
      // Setter
      set: function set(value) {
        // Update the underlying data based on the new value
        localStorage.setItem("isRTL", value); // Example for RTL languages
      }
    }
  },
  mounted: function mounted() {
    this.getLanguage();
  },
  methods: {
    setDirection: function setDirection(isRTL) {
      var htmlElement = document.documentElement;
      htmlElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    },
    getLanguage: function getLanguage() {
      var _this = this;
      this.isLoading = true;
      var data = {
        params: {
          system_type: 4
        }
      };
      this.lang = localStorage.getItem("lang");
      axios.get(this.$apiUrl + "/system_languages", data).then(function (response) {
        _this.isLoading = false;
        var data = response.data;
        if (data && Array.isArray(data.data)) {
          _this.languages = data.data;
          _this.totalRows = _this.languages.length;
        } else {
          _this.languages = [];
          _this.totalRows = 0;
        }
        if (!_this.isRTL) {
          // Find the default language and set it as the initial value of selectedLanguage
          var defaultLanguage = _this.languages.find(function (language) {
            return language.is_default === 1;
          });
          if (defaultLanguage) {
            _this.selectedLanguage = defaultLanguage.code;
            window.localStorage.setItem("lang", _this.selectedLanguage);
            var isRTL = defaultLanguage.code === "ar"; // Check if the new language is RTL

            localStorage.setItem("isRTL", isRTL);
          }
        }
      })["catch"](function (error) {
        _this.isLoading = false;
        console.error("Error fetching languages:", error);
      });
    },
    changeLanguage: function changeLanguage(event) {
      var _this2 = this;
      // Update the selected language based on the change event

      this.lang = event.target.value;
      window.localStorage.setItem("lang", this.lang);
      this.isLoading = true;
      var data = {
        language: this.lang
      };
      if (this.lang === "ar") {
        localStorage.setItem("isRTL", true);
        document.body.classList.add("rtl");
      } else {
        localStorage.setItem("isRTL", false);
        document.body.classList.remove("rtl");
      } // Check if the new language is RTL
      this.setDirection(this.isRTL);
      axios.post(this.$apiUrl + "/change_language", data).then(function (response) {
        _this2.isLoading = false;

        // No need to reload the page, just update the default language
        _this2.updateDefaultLanguage(_this2.lang);
        window.location.reload();
      });
    },
    updateDefaultLanguage: function updateDefaultLanguage(newDefaultLanguage) {
      // Update the default language in the languages array
      this.languages.forEach(function (language) {
        if (language.code === newDefaultLanguage) {
          language.is_default = 1;
        } else {
          language.is_default = 0;
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Sellers/SellerLogin.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Sellers/SellerLogin.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SellerLogin_vue_vue_type_template_id_0d08c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SellerLogin.vue?vue&type=template&id=0d08c580&scoped=true */ "./resources/js/views/Sellers/SellerLogin.vue?vue&type=template&id=0d08c580&scoped=true");
/* harmony import */ var _SellerLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellerLogin.vue?vue&type=script&lang=js */ "./resources/js/views/Sellers/SellerLogin.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SellerLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SellerLogin_vue_vue_type_template_id_0d08c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _SellerLogin_vue_vue_type_template_id_0d08c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0d08c580",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Sellers/SellerLogin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/lang.vue":
/*!*************************************!*\
  !*** ./resources/js/views/lang.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lang_vue_vue_type_template_id_f2053326__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang.vue?vue&type=template&id=f2053326 */ "./resources/js/views/lang.vue?vue&type=template&id=f2053326");
/* harmony import */ var _lang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang.vue?vue&type=script&lang=js */ "./resources/js/views/lang.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _lang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _lang_vue_vue_type_template_id_f2053326__WEBPACK_IMPORTED_MODULE_0__.render,
  _lang_vue_vue_type_template_id_f2053326__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/lang.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Sellers/SellerLogin.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Sellers/SellerLogin.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerLogin.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sellers/SellerLogin.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerLogin_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/lang.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/views/lang.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./lang.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/lang.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lang_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Sellers/SellerLogin.vue?vue&type=template&id=0d08c580&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Sellers/SellerLogin.vue?vue&type=template&id=0d08c580&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerLogin_vue_vue_type_template_id_0d08c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerLogin_vue_vue_type_template_id_0d08c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerLogin_vue_vue_type_template_id_0d08c580_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SellerLogin.vue?vue&type=template&id=0d08c580&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sellers/SellerLogin.vue?vue&type=template&id=0d08c580&scoped=true");


/***/ }),

/***/ "./resources/js/views/lang.vue?vue&type=template&id=f2053326":
/*!*******************************************************************!*\
  !*** ./resources/js/views/lang.vue?vue&type=template&id=f2053326 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lang_vue_vue_type_template_id_f2053326__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lang_vue_vue_type_template_id_f2053326__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lang_vue_vue_type_template_id_f2053326__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./lang.vue?vue&type=template&id=f2053326 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/lang.vue?vue&type=template&id=f2053326");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sellers/SellerLogin.vue?vue&type=template&id=0d08c580&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sellers/SellerLogin.vue?vue&type=template&id=0d08c580&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "auth",
      style: { backgroundImage: "url(" + _vm.$panelLoginBackgroundImg + ")" },
    },
    [
      _c("lang"),
      _vm._v(" "),
      _c("div", { staticClass: "login-wrapper" }, [
        _c("div", { staticClass: "auth-section" }, [
          _c(
            "div",
            { staticClass: "auth-card" },
            [
              _c("div", { staticClass: "auth-logo" }, [
                _c(
                  "a",
                  {
                    staticStyle: {
                      display: "flex",
                      "align-items": "center",
                      "justify-content": "flex-start",
                    },
                    attrs: { href: "javascript:void(0)" },
                  },
                  [
                    _vm.$appLogo != ""
                      ? _c("img", {
                          staticStyle: { height: "70px", width: "70px" },
                          attrs: {
                            src: _vm.$storageUrl + _vm.$appLogo,
                            alt: "Logo",
                          },
                        })
                      : _c("img", {
                          staticStyle: { height: "70px", width: "70px" },
                          attrs: {
                            src: _vm.$baseUrl + "/images/logo.png",
                            alt: "Logo",
                          },
                        }),
                    _vm._v(" "),
                    _c("h2", { staticStyle: { margin: "10px" } }, [
                      _vm._v(_vm._s(_vm.$appName) + " :" + _vm._s(_vm.isRTL)),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("h4", [_vm._v(_vm._s(_vm.__("welcome")))]),
              _vm._v(" "),
              _c("p", { staticClass: "auth-subtitle text-primary" }, [
                _vm._v(_vm._s(_vm.__("seller_login_message"))),
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.loginCheck()
                    },
                  },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "form-group position-relative has-icon-left mb-4",
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.email,
                            expression: "user.email",
                          },
                        ],
                        staticClass: "form-control form-control-xl",
                        attrs: {
                          type: "email",
                          placeholder: _vm.__("email_address"),
                          required: "",
                        },
                        domProps: { value: _vm.user.email },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "email", $event.target.value)
                          },
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "form-group position-relative has-icon-left",
                    },
                    [
                      (_vm.showPassword ? "text" : "password") === "checkbox"
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password,
                                expression: "user.password",
                              },
                            ],
                            staticClass: "form-control form-control-xl",
                            attrs: {
                              placeholder: _vm.__("password"),
                              required: "",
                              type: "checkbox",
                            },
                            domProps: {
                              checked: Array.isArray(_vm.user.password)
                                ? _vm._i(_vm.user.password, null) > -1
                                : _vm.user.password,
                            },
                            on: {
                              change: function ($event) {
                                var $$a = _vm.user.password,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.user,
                                        "password",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.user,
                                        "password",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.user, "password", $$c)
                                }
                              },
                            },
                          })
                        : (_vm.showPassword ? "text" : "password") === "radio"
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password,
                                expression: "user.password",
                              },
                            ],
                            staticClass: "form-control form-control-xl",
                            attrs: {
                              placeholder: _vm.__("password"),
                              required: "",
                              type: "radio",
                            },
                            domProps: {
                              checked: _vm._q(_vm.user.password, null),
                            },
                            on: {
                              change: function ($event) {
                                return _vm.$set(_vm.user, "password", null)
                              },
                            },
                          })
                        : _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password,
                                expression: "user.password",
                              },
                            ],
                            staticClass: "form-control form-control-xl",
                            attrs: {
                              placeholder: _vm.__("password"),
                              required: "",
                              type: _vm.showPassword ? "text" : "password",
                            },
                            domProps: { value: _vm.user.password },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "password",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-sm btn-outline-light font-bold text-primary",
                          staticStyle: {
                            position: "absolute",
                            "margin-top": "-45px",
                          },
                          style:
                            _vm.isRTL === "true"
                              ? "left: 10px;"
                              : "right: 10px;",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              _vm.showPassword = !_vm.showPassword
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(
                                _vm.showPassword
                                  ? _vm.__("hide")
                                  : _vm.__("show")
                              ) +
                              "\n            "
                          ),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "mb-4 text-end",
                      staticStyle: { "margin-top": "35px" },
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "font-bold",
                          attrs: { to: "/forgot-password" },
                        },
                        [
                          _c("span", [
                            _vm._v(_vm._s(_vm.__("forgot_password?"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "btn btn-primary btn-block btn-lg shadow-lg mt-5 auth-btn",
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.__("login")) +
                          "\n            "
                      ),
                      _vm.isLoading
                        ? _c("b-spinner", {
                            attrs: { small: "", label: "Spinning" },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass:
                    "btn btn-primary btn-block btn-lg shadow-lg mt-2 auth-btn",
                  attrs: { to: "/seller/register" },
                },
                [
                  _vm._v(
                    "\n          " + _vm._s(_vm.__("register")) + "\n        "
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass:
                    "btn btn-primary btn-block btn-lg shadow-lg mt-5 auth-btn",
                  attrs: { to: "/login" },
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.__("admin_panel")) +
                      "\n        "
                  ),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "auth-copyright" }, [
                _c(
                  "a",
                  {
                    staticClass: "text-primary font-weight-normal",
                    attrs: { href: "javascript:void(0)" },
                  },
                  [_vm._v("\n            " + _vm._s(_vm.$copyrightDetails))]
                ),
              ]),
            ],
            1
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/lang.vue?vue&type=template&id=f2053326":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/lang.vue?vue&type=template&id=f2053326 ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { position: "absolute", top: "0rem", left: "2rem" } },
    [
      _c("div", { staticClass: "lang_div" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.lang,
                expression: "lang",
              },
            ],
            staticClass: "form-control form-select",
            on: {
              change: [
                function ($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function (o) {
                      return o.selected
                    })
                    .map(function (o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.lang = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                },
                function ($event) {
                  return _vm.changeLanguage($event)
                },
              ],
            },
          },
          [
            _vm.languages.length === 0
              ? [
                  _c("option", { attrs: { value: "en" } }, [
                    _vm._v(_vm._s(_vm.__("english"))),
                  ]),
                ]
              : _vm._l(_vm.languages, function (language) {
                  return _c(
                    "option",
                    {
                      key: language.code,
                      domProps: {
                        value: language.code,
                        selected: language.code === _vm.selectedLanguage,
                      },
                    },
                    [
                      _vm._v(
                        "\n          " + _vm._s(language.name) + "\n        "
                      ),
                    ]
                  )
                }),
          ],
          2
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);