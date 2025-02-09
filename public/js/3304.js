"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3304],{1911:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(3645),a=i.n(s)()((function(e){return e[1]}));a.push([e.id,".SideBarStyle[data-v-7d43fc8f]{position:fixed;z-index:1}.fade-enter-active[data-v-7d43fc8f],.fade-leave-active[data-v-7d43fc8f]{transition:opacity .3s}.fade-enter[data-v-7d43fc8f],.fade-leave-to[data-v-7d43fc8f]{opacity:0}.main-dir[data-v-7d43fc8f]:after{color:#ccc;display:block;left:15px!important;position:absolute;right:0!important;top:17px!important}",""]);const n=a},987:(e,t,i)=>{i.d(t,{Z:()=>n});var s=i(3645),a=i.n(s)()((function(e){return e[1]}));a.push([e.id,".switch-checkbox{display:none}:root{--background-color-primary:#ebebeb;--background-color-secondary:#fafafa;--accent-color:#cacaca;--text-primary-color:#222;--element-size:4rem}.switch-label{align-items:center;background:var(--text-primary-color);border:calc(var(--element-size)*.025) solid var(--accent-color);border-radius:var(--element-size);cursor:pointer;display:flex;font-size:calc(var(--element-size)*.3);height:calc(var(--element-size)*.35);justify-content:space-between;padding:calc(var(--element-size)*.1);position:relative;transition:background .5s ease;width:var(--element-size);z-index:1}.switch-toggle{background-color:var(--background-color-primary);border-radius:50%;height:calc(var(--element-size)*.4);left:calc(var(--element-size)*.07);position:absolute;top:calc(var(--element-size)*.07);transform:translateX(0);transition:transform .3s ease,background-color .5s ease;width:calc(var(--element-size)*.4)}.switch-toggle-checked{transform:translateX(calc(var(--element-size)*.6))!important}",""]);const n=a},3304:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var s=i(2154),a=i(4269),n=i(7827),r=i(3023),o=i(9669),l=i.n(o);const c={name:"TheContainer",components:{TheSidebar:s.Z,TheFooter:a.Z,VerticalHeader:n.Z},created:function(){this.closeSideBarMenu(),this.checkPermissions()},watch:{$route:"checkPermissions"},mounted:function(){function e(e,t,i,s){void 0===t&&(t=400),void 0===s&&(s=!1),e.style.overflow="hidden",s&&(e.style.display="block");var a,n=window.getComputedStyle(e),r=parseFloat(n.getPropertyValue("height")),o=parseFloat(n.getPropertyValue("padding-top")),l=parseFloat(n.getPropertyValue("padding-bottom")),c=parseFloat(n.getPropertyValue("margin-top")),d=parseFloat(n.getPropertyValue("margin-bottom")),m=r/t,u=o/t,_=l/t,g=c/t,p=d/t;window.requestAnimationFrame((function n(f){void 0===a&&(a=f);var h=f-a;s?(e.style.height=m*h+"px",e.style.paddingTop=u*h+"px",e.style.paddingBottom=_*h+"px",e.style.marginTop=g*h+"px",e.style.marginBottom=p*h+"px"):(e.style.height=r-m*h+"px",e.style.paddingTop=o-u*h+"px",e.style.paddingBottom=l-_*h+"px",e.style.marginTop=c-g*h+"px",e.style.marginBottom=d-p*h+"px"),h>=t?(e.style.height="",e.style.paddingTop="",e.style.paddingBottom="",e.style.marginTop="",e.style.marginBottom="",e.style.overflow="",s||(e.style.display="none"),"function"==typeof i&&i()):window.requestAnimationFrame(n)}))}window.localStorage.getItem("lang")&&(this.lang=window.localStorage.getItem("lang"));for(var t=document.querySelectorAll(".sidebar-item.has-sub"),i=function(){var i=t[s];t[s].querySelector(".sidebar-link").addEventListener("click",(function(t){var s,a,n;t.preventDefault();var r=i.querySelector(".submenu");null!=r&&null!==(s=r.classList)&&void 0!==s&&s.contains("active")&&(r.style.display="block"),"none"==r.style.display?null==r||null===(a=r.classList)||void 0===a||a.add("active"):null==r||null===(n=r.classList)||void 0===n||n.remove("active"),function(t,i,s){0===t.clientHeight?e(t,i,s,!0):e(t,i,s)}(r,300)}))},s=0;s<t.length;s++)i();if(window.addEventListener("DOMContentLoaded",(function(e){var t,i;window.innerWidth<1200&&(null===(t=document.getElementById("sidebar"))||void 0===t||null===(i=t.classList)||void 0===i||i.remove("active"))})),window.addEventListener("resize",(function(e){var t,i,s,a;window.innerWidth<1200?null===(t=document.getElementById("sidebar"))||void 0===t||null===(i=t.classList)||void 0===i||i.remove("active"):null===(s=document.getElementById("sidebar"))||void 0===s||null===(a=s.classList)||void 0===a||a.add("active")})),document.querySelector(".burger-btn").addEventListener("click",(function(){var e,t;null===(e=document.getElementById("sidebar"))||void 0===e||null===(t=e.classList)||void 0===t||t.toggle("active")})),document.querySelector(".sidebar-hide").addEventListener("click",(function(){var e,t;null===(e=document.getElementById("sidebar"))||void 0===e||null===(t=e.classList)||void 0===t||t.toggle("active")})),"function"==typeof PerfectScrollbar.default){var a=document.querySelector(".sidebar-wrapper");new PerfectScrollbar.default(a,{wheelPropagation:!1})}document.querySelector(".sidebar-item.active")&&document.querySelector(".sidebar-item.active").scrollIntoView(!1)},data:function(){return{lang:"en",search:"",isLoading:!1,suspecious:null,sidebarItems:[{name:__("dashboard"),icon:"tachometer-alt",url:"/dashboard",permission:"manage_dashboard"},{name:__("orders"),icon:"shopping-cart",url:"/orders",permission:"order_list"},{name:__("categories"),icon:"bullseye",permission:"category_list",submenu:[{name:__("add_category"),icon:"grid-fill",url:"/manage_categories/create",permission:"category_create"},{name:__("manage_categories"),icon:"grid-fill",url:"/manage_categories",permission:"category_list"},{name:__("order_categories"),icon:"grid-fill",url:"/categories_order",permission:"manage_categories_order"}]},{name:__("products"),icon:"cubes",permission:"product_list",submenu:[{name:__("add_product"),icon:"grid-fill",url:"/manage_products/create",permission:"product_create"},{name:__("manage_products"),icon:"grid-fill",url:"/manage_products",permission:"product_list"},{name:__("approve_requests"),icon:"grid-fill",url:"/approve_requests",permission:"product_list"},{name:__("units"),icon:"grid-fill",url:"/units",permission:"manage_units"},{name:__("product_ratings"),icon:"grid-fill",url:"/product_ratings",permission:"product_list"},{name:__("media"),icon:"grid-fill",url:"/media",permission:"manage_media"},{name:__("bulk_upload"),icon:"grid-fill",url:"/bulk_upload",permission:"manage_product_bulk_upload"},{name:__("bulk_update"),icon:"grid-fill",url:"/bulk_update",permission:"manage_product_bulk_upload"},{name:__("taxes"),icon:"grid-fill",url:"/taxes",permission:"product_list"},{name:__("brands"),icon:"grid-fill",url:"/brands",permission:"product_list"},{name:__("product_order"),icon:"grid-fill",url:"/product_order",permission:"manage_product_order"}]},{name:__("stock_management"),icon:"cubes",url:"/manage_stock",permission:"product_list"},{name:__("sellers"),icon:"male",permission:"seller_list",submenu:[{name:__("add_seller"),icon:"grid-fill",url:"/sellers/create",permission:"seller_create"},{name:__("seller_requests"),icon:"grid-fill",url:"/registered_sellers",permission:"seller_list"},{name:__("manage_sellers"),icon:"grid-fill",url:"/sellers",permission:"seller_list"},{name:__("seller_wallet_transactions"),icon:"grid-fill",url:"/seller_wallet_transactions",permission:"seller_list"},{name:__("policies_seller"),icon:"grid-fill",url:"/privacy_policy_seller",permission:"manage_privacy_policy_seller_app"}]},{name:__("home_sliders"),icon:"picture-o",permission:"home_slider_image_list",submenu:[{name:__("add_home_slider"),icon:"grid-fill",url:"/home_sliders/create",permission:"home_slider_image_create"},{name:__("manager_home_sliders"),icon:"grid-fill",url:"/home_sliders",permission:"home_slider_image_list"}]},{name:__("offer_image"),icon:"gift",permission:"new_offer_image_list",submenu:[{name:__("add_offer_image"),icon:"grid-fill",url:"/offers/create",permission:"new_offer_image_create"},{name:__("manage_offer_images"),icon:"grid-fill",url:"/offers",permission:"new_offer_image_list"},{name:__("manage_popup_offer"),icon:"grid-fill",url:"/popup",permission:"new_offer_image_list"}]},{name:__("promo_code"),icon:"gift",permission:"promo_code_list",submenu:[{name:__("add_promo_code"),icon:"grid-fill",url:"/promo_code/create",permission:"promo_code_create"},{name:__("manage_promo_code"),icon:"grid-fill",url:"/promo_code",permission:"promo_code_list"}]},{name:__("featured_sections"),icon:"puzzle-piece",permission:"featured_section_list",submenu:[{name:__("add_section"),icon:"grid-fill",url:"/sections/create",permission:"featured_section_create"},{name:__("manage_section"),icon:"grid-fill",url:"/sections",permission:"featured_section_list"}]},{name:__("return_requests"),icon:"retweet",url:"/return_requests",permission:"return_request_list"},{name:__("withdrawal_requests"),icon:"credit-card",url:"/withdrawal_requests",permission:"withdrawal_request_list"},{name:__("delivery_boys"),icon:"male",permission:"delivery_boy_list",submenu:[{name:__("add_delivery_boy"),icon:"grid-fill",url:"/delivery_boys/create",permission:"delivery_boy_create"},{name:__("dlivery_boy_requests"),icon:"grid-fill",url:"/registered_delivery_boys",permission:"delivery_boy_list"},{name:__("manage_delivery_boys"),icon:"grid-fill",url:"/delivery_boys",permission:"delivery_boy_list"},{name:__("fund_transfers"),icon:"grid-fill",url:"/fund_transfers",permission:"fund_transfers_list"},{name:__("delivery_boy_cash"),icon:"grid-fill",url:"/cash_collection",permission:"cash_collection_list"},{name:__("delivery_boy_policies"),icon:"grid-fill",url:"/privacy_policy_delivery_boy",permission:"manage_privacy_policy_delivery_boy"}]},{name:__("notifications"),icon:"share-square",url:"/notifications",permission:"notification_list",submenu:[{name:__("send_notifications"),icon:"grid-fill",url:"/notifications/create",permission:"notification_create"},{name:__("manage_notifications"),icon:"grid-fill",url:"/notifications",permission:"notification_list"}]},{name:__("system"),icon:"wrench",permission:"manage_time_slots",submenu:[{name:__("store_settings"),icon:"grid-fill",url:"/store_settings",permission:"manage_store_settings"},{name:__("delivery_settings"),icon:"grid-fill",url:"/delivery_settings",permission:"manage_time_slots"},{name:__("payment_methods"),icon:"grid-fill",url:"/payment_methods",permission:"manage_payment_methods"},{name:__("contact_us"),icon:"grid-fill",url:"/contact_us",permission:"manage_contact_us"},{name:__("about_us"),icon:"grid-fill",url:"/about_us",permission:"manage_about_us"},{name:__("firebase_settings"),icon:"grid-fill",url:"/firebase-settings",permission:"manage_store_settings"},{name:__("sms_settings"),icon:"grid-fill",url:"/sms-settings",permission:"manage_store_settings"},{name:__("sms_templates"),icon:"grid-fill",url:"/sms-templates",permission:"manage_store_settings"}]},{name:__("web_settings"),icon:"gear",permission:"general_settings",submenu:[{name:__("general_web_settings"),icon:"grid-fill",url:"/general_settings",permission:"general_settings"},{name:__("social_media"),icon:"grid-fill",url:"/social_media",permission:"manage_social_media_list"}]},{name:__("languages"),icon:"language",permission:"city_list",submenu:[{name:__("add_language"),icon:"grid-fill",url:"/languages/create",permission:"manage_dashboard"},{name:__("manage_languages"),icon:"grid-fill",url:"/languages",permission:"manage_dashboard"}]},{name:__("countries"),icon:"globe-asia",permission:"city_list",submenu:[{name:__("add_country"),icon:"grid-fill",url:"/countries/create",permission:"manage_dashboard"},{name:__("manage_countries"),icon:"grid-fill",url:"/countries",permission:"manage_dashboard"}]},{name:__("location"),icon:"map",permission:"city_list",submenu:[{name:__("add_city"),icon:"grid-fill",url:"/cities/create",permission:"manage_dashboard"},{name:__("manage_cities"),icon:"grid-fill",url:"/cities",permission:"manage_dashboard"}]},{name:__("customers"),icon:"male",permission:"customer_list",submenu:[{name:__("customers"),icon:"grid-fill",url:"/users",permission:"customer_list"},{name:__("wishlists"),icon:"grid-fill",url:"/wishlists",permission:"manage_wishlists"},{name:__("wallet_transactions"),icon:"grid-fill",url:"/wallet_transactions",permission:"transaction_list"},{name:__("transactions"),icon:"grid-fill",url:"/transactions",permission:"transaction_list"},{name:__("customer_policies"),icon:"grid-fill",url:"/privacy_policy",permission:"manage_privacy_policy"}]},{name:__("reports"),icon:"folder-open",permission:"product_sales_reports",submenu:[{name:__("product_sales_report"),icon:"grid-fill",url:"/product_sales_reports",permission:"product_sales_reports"},{name:__("sales_reports"),icon:"grid-fill",url:"/sales_reports",permission:"sales_reports"}]},{name:__("system_users"),icon:"users",url:"/system_users",role:!0},{name:__("role"),icon:"user-secret",url:"/role",role:!0},{name:__("faqs"),icon:"info",url:"/faqs",permission:"faq_list"}],databasedownloadBtn:[{name:__("database_backup"),icon:"info",permission:"database_backup_download"}]}},computed:{filteredSidebarItems:function(){return this.sidebarItems},filteredDatabaseDownloadBtn:function(){return this.databasedownloadBtn}},methods:{filterItem:function(){var e=this.search;$(".sidebar-menu li:not(.sidebar-search)").each((function(t,i){var s=$(i),a=s.closest("ul").hasClass("submenu");s.text().match(new RegExp(e,"gi"))?(s.fadeIn(),a&&s.closest("ul").removeClass("active")):(s.fadeOut(),a&&s.closest("ul").addClass("active"))}))},subIsActive:function(e){var t=this;return(Array.isArray(e.submenu)?e.submenu:[]).some((function(e){return 0===t.$route.path.indexOf(e.url)}))},isActive:function(e){return this.$route.path==e},isHasSub:function(e){return!!(e.hasOwnProperty("submenu")&&e.submenu.length>0)},checkPermissions:function(){var e=this.$route.path,t="";this.sidebarItems.forEach((function(i){i.submenu&&i.submenu.length>0?i.submenu.forEach((function(i){i.url===e&&(t=i.permission)})):i.url===e&&(t=i.permission)})),r.Z.check()&&0===UserPermissions.length?(1==window.localStorage.getItem("loginCheck")&&r.Z.logout(),window.localStorage.setItem("loginCheck",1),window.location.reload()):r.Z.check()&&t&&!this.$can(t)&&this.$router.push({path:"/unauthorized"})},closeSideBarMenu:function(){var e,t;window.innerWidth<1200&&(null===(e=document.getElementById("sidebar"))||void 0===e||null===(t=e.classList)||void 0===t||t.remove("active"))},downloadDatabase:function(){var e=this;this.isLoading=!0,l()({method:"get",url:this.$apiUrl+"/database_backup_download",responseType:"blob"}).then((function(t){var i=new Blob([t.data]),s=document.createElement("a");s.href=window.URL.createObjectURL(i);var a=t.headers["content-disposition"],n=a&&a.match(/filename="(.+?)"/),r=n?n[1]:"downloaded-database-backup.sql";s.download=r,s.click(),e.showMessage("success",__("database_downloaded_successfully")),e.isLoading=!1})).catch((function(e){console.error("Error downloading file:",e)}))}}};var d=i(3379),m=i.n(d),u=i(1911),_={insert:"head",singleton:!1};m()(u.Z,_);u.Z.locals;const g=(0,i(1900).Z)(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"SideBarStyle active",attrs:{id:"sidebar"}},[i("div",{staticClass:"sidebar-wrapper active"},[i("div",{staticClass:"sidebar-header"},[i("div",{staticClass:"d-flex flex-row justify-content-center"},[i("div",{staticClass:"logo"},[i("router-link",{staticClass:"d-flex flex-column align-items-center justify-content-center align-content-center flex-wrap",attrs:{to:"/"}},[""!=e.$appLogo?i("img",{staticClass:"container-logo",attrs:{src:e.$storageUrl+e.$appLogo,alt:"Logo",srcset:""}}):i("img",{staticClass:"container-logo",attrs:{src:e.$baseUrl+"/images/logo.png",alt:"Logo",srcset:""}})])],1),e._v(" "),e._m(0)])]),e._v(" "),i("div",{staticClass:"sidebar-menu"},[i("ul",{staticClass:"menu"},[i("li",{staticClass:"sidebar-item sidebar-search"},[i("b-form-input",{attrs:{type:"search",placeholder:e.__("search")},on:{keyup:e.filterItem,search:e.filterItem},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),e._l(e.filteredSidebarItems,(function(t){return[(1==t.role?e.$role("Super Admin")&&("Role"==t.name||"System Users"==t.name):t.permission&&e.$can(t.permission))?i("li",{key:t.name,staticClass:"sidebar-item",class:{active:e.isActive(t.url)||e.subIsActive(t),"has-sub":e.isHasSub(t)}},[e.isHasSub(t)?[i("a",{staticClass:"sidebar-link main-dir"},[i("i",{class:"fa fa-"+t.icon+" p-2 "}),e._v(" "),i("span",[e._v(e._s(t.name))])]),e._v(" "),i("ul",{staticClass:"submenu",class:{active:e.subIsActive(t)}},[e._l(t.submenu,(function(s){return[(s.role?e.$role("Super Admin")&&("Role"===t.name||"System Users"===t.name):s.permission&&e.$can(s.permission))?i("li",{key:s.key,staticClass:"submenu-item",class:{active:e.isActive(s.url)}},[i("router-link",{attrs:{to:s.url},on:{click:function(t){return e.closeSideBarMenu()}}},[e._v("\n                        "+e._s(s.name)+"\n                      ")])],1):e._e()]}))],2)]:[i("router-link",{staticClass:"sidebar-link",attrs:{to:t.url},on:{click:function(t){return e.closeSideBarMenu()}}},[i("i",{class:"fa fa-"+t.icon+" p-2"}),e._v(" "),i("span",[e._v(e._s(t.name))])])]],2):e._e()]})),e._v(" "),e._l(e.filteredDatabaseDownloadBtn,(function(t){return[(1==t.role?e.$role("Super Admin")&&("Role"==t.name||"System Users"==t.name):t.permission&&e.$can(t.permission))?i("div",{key:t},[i("button",{staticClass:"btn btn-primary",on:{click:e.downloadDatabase}},[i("i",{class:"fa fa-download"}),e._v(" "),e.isLoading?i("b-spinner",{attrs:{small:"",label:"Spinning"}}):e._e(),e._v("\n                "+e._s(e.__("download_database"))+"\n              ")],1)]):e._e()]}))],2)]),e._v(" "),e._m(1)])]),e._v(" "),i("vertical-header"),e._v(" "),i("div",{attrs:{id:"main"}},[i("div",{staticStyle:{"min-height":"700px"}},[i("router-view")],1),e._v(" "),i("the-footer")],1)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"toggler"},[t("a",{staticClass:"sidebar-hide d-xl-none d-block",attrs:{href:"javascript:void(0)"}},[t("i",{staticClass:"bi bi-x bi-middle"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"sidebar-toggler btn x"},[t("i",{attrs:{"data-feather":"x"}})])}],!1,null,"7d43fc8f",null).exports},4269:(e,t,i)=>{i.d(t,{Z:()=>a});const s={name:"TheFooter",data:function(){return{copyrightDetails:window.copyrightDetails,currentVersion:window.currentVersion}}};const a=(0,i(1900).Z)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",[i("div",{staticClass:"footer clearfix mb-0 text-muted"},[i("div",{staticClass:"float-start"},[i("a",{staticClass:"text-primary font-weight-normal",attrs:{href:"javascript:void(0)"},domProps:{innerHTML:e._s(e.copyrightDetails)}})]),e._v(" "),""!==e.currentVersion?i("div",{staticClass:"float-end"},[i("p",[e._v("\n        "+e._s(e.__("version"))+":-\n        "),i("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s(e.$currentVersion))])])]):e._e()])])}),[],!1,null,null,null).exports},2154:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(9669),a=i.n(s);const n={name:"TheSidebar",data:function(){return{nav:[],buffor:[]}},computed:{show:function(){},minimize:function(){}},methods:{dropdown:function(e){for(var t={_name:"CSidebarNavDropdown",name:e.name,route:e.href,icon:e.icon,_children:[]},i=0;i<e.elements.length;i++)"dropdown"==e.elements[i].slug?t._children.push(this.dropdown(e.elements[i])):t._children.push({_name:"CSidebarNavItem",name:e.elements[i].name,to:e.elements[i].href,icon:e.elements[i].icon});return t},rebuildData:function(e){this.buffor=[{_name:"CSidebarNav",_children:[]}];for(var t=0;t<e.length;t++)switch(e[t].slug){case"link":-1!==e[t].href.indexOf("http")?this.buffor[0]._children.push({_name:"CSidebarNavItem",name:e[t].name,href:e[t].href,icon:e[t].icon,target:"_blank"}):this.buffor[0]._children.push({_name:"CSidebarNavItem",name:e[t].name,to:e[t].href,icon:e[t].icon});break;case"title":this.buffor[0]._children.push({_name:"CSidebarNavTitle",_children:[e[t].name]});break;case"dropdown":this.buffor[0]._children.push(this.dropdown(e[t]))}return this.buffor}},mounted:function(){var e=this;this.$root.$on("toggle-sidebar",(function(){var t=!0===e.show||"responsive"===e.show;e.show=!t&&"responsive"})),this.$root.$on("toggle-sidebar-mobile",(function(){var t="responsive"===e.show||!1===e.show;e.show=!!t||"responsive"}));var t=this;a().get(this.$apiAdress+"/api/menu?token="+localStorage.getItem("api_token")).then((function(e){t.nav=t.rebuildData(e.data)})).catch((function(e){t.$router.push({path:"/login"})}))}};const r=(0,i(1900).Z)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("CSidebar",{attrs:{fixed:"",minimize:e.minimize,show:e.show},on:{"update:show":function(t){return e.$store.commit("set",["sidebarShow",t])}}},[i("CSidebarBrand",{staticClass:"d-md-down-none",attrs:{to:"/"}},[i("CIcon",{staticClass:"d-block",attrs:{name:"logo",size:"custom-size",height:35,viewBox:"0 0 "+(e.minimize?110:556)+" 134"}})],1),e._v(" "),i("CRenderFunction",{attrs:{flat:"","content-to-render":e.nav}}),e._v(" "),i("CSidebarMinimizer",{staticClass:"d-md-down-none",nativeOn:{click:function(t){return e.$store.commit("set",["sidebarMinimize",!e.minimize])}}})],1)}),[],!1,null,null,null).exports},7827:(e,t,i)=>{i.d(t,{Z:()=>m});var s=i(3023),a=i(9669),n=i.n(a);const r={data:function(){return{lang:"en",languages:[],user:s.Z.user,role:Role,profile_url:this.$baseUrl+"/images/admin_logo.png",notifications:[],userTheme:"theme-light",isToggle:!1,popoverShow:!1,isSystemRefreshing:!1,windowHeight:window.innerHeight,windowWidth:window.innerWidth,notifications_unread_count:0,selectedLanguage:{}}},beforeDestroy:function(){window.removeEventListener("resize",this.onResize),window.removeEventListener("DOMContentLoaded",this.onResize)},computed:{isRTL:{get:function(){return localStorage.getItem("isRTL")},set:function(e){localStorage.setItem("isRTL",e)}},mainStyle:function(){return"true"===this.isRTL?1==this.isToggle?" width:100%;transition:0.7s;position: relative;right:0rem;":" width:80%;transition:0.8s;position: relative;right:0rem;":"false"===this.isRTL?1==this.isToggle?" width:100%;transition:0.7s;position: relative; right:0rem;":" width:80%;transition:0.8s;position: relative;right:-19rem;":void 0}},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.onResize),window.addEventListener("DOMContentLoaded",e.onResize)}));var t=this.getTheme();this.setTheme(t),window.localStorage.getItem("lang")&&(this.lang=window.localStorage.getItem("lang")),this.timer=setInterval((function(){e.getNotifications()}),4e4),this.getLanguage()},created:function(){this.getNotifications()},methods:{openBAR:function(){this.isToggle=!this.isToggle},logout:function(){var e=this,t=s.Z.user.role_id;s.Z.logout(),setTimeout((function(){3===t?e.$router.push("/seller/login"):4===t?e.$router.push("/delivery_boy/login"):e.$router.push("/login")}),500)},setDirection:function(e){document.documentElement.setAttribute("dir",e?"rtl":"ltr")},getLanguage:function(){var e=this;this.isLoading=!0;n().get(this.$apiUrl+"/system_languages",{params:{system_type:4}}).then((function(t){e.isLoading=!1;var i=t.data;if(i&&Array.isArray(i.data)?(e.languages=i.data,e.totalRows=e.languages.length):(e.languages=[],e.totalRows=0),!e.isRTL){var s=e.languages.find((function(e){return 1===e.is_default}));if(s){e.selectedLanguage=s.code,window.localStorage.setItem("lang",e.selectedLanguage);var a="ar"===s.code;localStorage.setItem("isRTL",a)}}})).catch((function(t){e.isLoading=!1,console.error("Error fetching languages:",t)}))},changeLanguage:function(e){var t=this;this.lang=e.target.value,window.localStorage.setItem("lang",this.lang),this.isLoading=!0;var i={language:this.lang};"ar"===this.lang?(localStorage.setItem("isRTL",!0),document.body.classList.add("rtl")):(localStorage.setItem("isRTL",!1),document.body.classList.remove("rtl")),this.setDirection(this.isRTL),n().post(this.$apiUrl+"/change_language",i).then((function(e){t.isLoading=!1,t.updateDefaultLanguage(t.lang),window.location.reload()}))},updateDefaultLanguage:function(e){this.languages.forEach((function(t){t.code===e?t.is_default=1:t.is_default=0}))},getNotifications:function(e){var t=this;n().get(this.$apiUrl+"/get_top_notifications").then((function(e){t.notifications=e.data.data.notifications,t.notifications_unread_count=e.data.data.unread}))},markAsReadNotification:function(e){var t=this;null==e.read_at&&n().get(this.$apiUrl+"/notification_read?id="+e.id).then((function(e){t.getNotifications()}))},changeDateTime:function(e){return moment(e).fromNow()},setTheme:function(e){sessionStorage.setItem("user-theme",e),this.userTheme=e,document.body.className=e},getMediaPreference:function(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"theme-dark":"theme-light"},getTheme:function(){var e=sessionStorage.getItem("user-theme");return this.userTheme=e,e},toggleTheme:function(){var e=sessionStorage.getItem("user-theme");"theme-light"===e||""==e||"undefined"==e||"null"==e?this.setTheme("theme-dark"):this.setTheme("theme-light")},onResize:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth},clearCache:function(){var e=this;e.isSystemRefreshing=!0,n().get(this.$baseUrl+"/clear").then((function(t){var i=t.data;1===i.status?setTimeout((function(){e.showMessage("success",i.message),e.isSystemRefreshing=!1,e.popoverShow=!1,window.location.reload()}),2e3):(e.showError(i.message),e.isSystemRefreshing=!1)})).catch((function(t){var i;e.isSystemRefreshing=!1,null!=t&&null!==(i=t.request)&&void 0!==i&&i.statusText?e.showError(t.request.statusText):t.message?e.showError(t.message):e.showError(__("something_went_wrong"))}))}}};var o=i(3379),l=i.n(o),c=i(987),d={insert:"head",singleton:!1};l()(c.Z,d);c.Z.locals;const m=(0,i(1900).Z)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"mb-3",style:e.mainStyle},[i("nav",{staticClass:"navbar navbar-expand-lg"},[i("div",{staticClass:"container-fluid"},[i("a",{staticClass:"burger-btn d-block",attrs:{href:"javascript:void(0)"},on:{click:e.openBAR}},[i("i",{staticClass:"fa fa-bars",attrs:{"aria-hidden":"true"}})]),e._v(" "),i("div",{staticClass:"d-flex justify-content-start align-items-center"},[1==e.$isDemo&&e.windowWidth<this.$mobileWidth?i("div",{staticClass:"me-2"},[i("span",{staticClass:"badge bg-danger"},[e._v(e._s(e.__("demo_mode")))])]):e._e(),e._v(" "),i("a",{staticClass:"navbar-toggler navbar-toggler",attrs:{href:"javascript:void(0)","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(t){e.isToggle=!e.isToggle}}},[!0===e.isToggle?i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}}):i("i",{staticClass:"fa fa-ellipsis-h",attrs:{"aria-hidden":"true"}})])]),e._v(" "),i("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[i("ul",{staticClass:"navbar-nav ms-auto mb-2 mb-lg-0"},[1==e.$isDemo&&e.windowWidth>this.$mobileWidth?i("li",{staticClass:"nav-item dropdown me-2"},[i("div",{staticClass:"d-flex gap-2 align-items-center mt-2"},[i("span",{staticClass:"badge bg-danger"},[e._v(e._s(e.__("demo_mode")))])])]):e._e(),e._v(" "),i("li",{staticClass:"nav-item dropdown me-1"},[i("div",{staticClass:"theme-toggle d-flex gap-2 align-items-center mt-2"},[i("label",{staticStyle:{cursor:"pointer"},attrs:{for:"userTheme"}},["theme-dark"===e.userTheme?[i("svg",{staticClass:"iconify iconify--mdi",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"20",height:"20",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[i("path",{attrs:{fill:"currentColor",d:"m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"}})])]:[i("svg",{staticClass:"iconify iconify--system-uicons",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"20",height:"20",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 21 21"}},[i("g",{attrs:{fill:"none","fill-rule":"evenodd",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}},[i("path",{attrs:{d:"M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2",opacity:".3"}}),e._v(" "),i("g",{attrs:{transform:"translate(-210 -1)"}},[i("path",{attrs:{d:"M220.5 2.5v2m6.5.5l-1.5 1.5"}}),e._v(" "),i("circle",{attrs:{cx:"220.5",cy:"11.5",r:"4"}}),e._v(" "),i("path",{attrs:{d:"m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"}})])])])]],2),e._v(" "),i("div",{staticClass:"form-check form-switch fs-6"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.userTheme,expression:"userTheme"}],staticClass:"form-check-input me-0",staticStyle:{cursor:"pointer"},attrs:{type:"checkbox",id:"userTheme","true-value":"theme-dark","false-value":"theme-light"},domProps:{checked:Array.isArray(e.userTheme)?e._i(e.userTheme,null)>-1:e._q(e.userTheme,"theme-dark")},on:{change:[function(t){var i=e.userTheme,s=t.target,a=s.checked?"theme-dark":"theme-light";if(Array.isArray(i)){var n=e._i(i,null);s.checked?n<0&&(e.userTheme=i.concat([null])):n>-1&&(e.userTheme=i.slice(0,n).concat(i.slice(n+1)))}else e.userTheme=a},e.toggleTheme]}}),e._v(" "),i("label",{staticClass:"form-check-label"})])])]),e._v(" "),i("li",{staticClass:"nav-item dropdown me-2"},[i("div",{staticClass:"d-flex gap-2 align-items-center mt-2"},[i("button",{ref:"confirmButton",staticClass:"badge bg-success",attrs:{type:"button",id:"confirmButton",title:"Clear"},on:{click:function(t){e.popoverShow=!0}}},[e.isSystemRefreshing?i("b-spinner",{attrs:{small:"",label:"Spinning"}}):i("i",{staticClass:"fa fa-refresh",class:{"fa-spin":e.isSystemRefreshing}})],1),e._v(" "),i("b-popover",{ref:"popover",attrs:{target:"confirmButton",triggers:"click",show:e.popoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(t){e.popoverShow=t}},scopedSlots:e._u([{key:"title",fn:function(){return[i("div",{staticClass:"d-flex align-content-center justify-content-sm-between"},[i("span",[e._v(" "+e._s(e.__("confirmation")))]),e._v(" "),i("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(t){e.popoverShow=!1}}},[i("span",{staticClass:"d-inline-block",attrs:{"aria-hidden":"true"}},[e._v("×")])])])]},proxy:!0},{key:"default",fn:function(){return[i("h6",[e._v(e._s(e.__("welcome_message")))]),e._v(" "),i("span",[e._v(e._s(e.__("cache_clear")))]),e._v(", "),i("span",[e._v(e._s(e.__("config_clear")))]),e._v(", "),i("span",[e._v(e._s(e.__("route_clear")))]),e._v(", "),i("span",[e._v(e._s(e.__("view_clear")))]),e._v(",\n\n                  "),e.isSystemRefreshing?i("b-spinner",{attrs:{small:"",label:"Spinning"}}):e._e(),e._v(" "),i("hr"),e._v(" "),i("div",{staticClass:"d-flex align-content-center justify-content-sm-between"},[i("b-button",{attrs:{size:"sm",variant:"outline-danger"},on:{click:function(t){e.popoverShow=!1}}},[e._v(e._s(e.__("cancel")))]),e._v(" "),i("b-button",{attrs:{size:"sm",variant:"primary",disabled:e.isSystemRefreshing},on:{click:e.clearCache}},[e.isSystemRefreshing?i("b-spinner",{attrs:{small:"",label:"Spinning"}}):e._e(),e._v("\n                      "+e._s(e.__("submit"))+"\n                    ")],1)],1)]},proxy:!0}])})],1)]),e._v(" "),this.$websiteUrl?i("li",{staticClass:"nav-item dropdown me-2"},[i("a",{staticClass:"nav-link",attrs:{href:this.$websiteUrl,target:"__blank"}},[i("i",{staticClass:"fa fa-solid fa-globe fs-4 text-gray-600"})])]):e._e(),e._v(" "),i("li",{staticClass:"nav-item dropdown me-1"},[e._m(0),e._v(" "),i("ul",{staticClass:"dropdown-menu dropdown-menu-lg-end",attrs:{"aria-labelledby":"dropdownMenuButton"}},[i("li",[i("h6",{staticClass:"dropdown-header"},[e._v(e._s(e.__("messages")))])]),e._v(" "),i("li",[i("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[e._v(e._s(e.__("no_new_message")))])])])]),e._v(" "),i("li",{staticClass:"nav-item dropdown me-1"},[i("a",{staticClass:"nav-link active dropdown-toggle",attrs:{href:"#","data-bs-toggle":"dropdown","aria-expanded":"false"}},[i("i",{staticClass:"bi bi-bell fs-4 text-gray-600"}),i("span",{staticClass:"badge bg-success rounded-circle position-absolute translate-middle p-2",staticStyle:{bottom:"20px",left:"30px"}},[e._v(e._s(e.notifications_unread_count))])]),e._v(" "),i("ul",{staticClass:"dropdown-menu dropdown-menu-end notification-dropdown",attrs:{"aria-labelledby":"dropdownMenuButton"}},[i("li",[i("h6",{staticClass:"dropdown-header"},[e._v(e._s(e.__("notifications")))])]),e._v(" "),e._l(e.notifications.slice(0,4),(function(t){return i("li",{staticClass:"dropdown-item notification-item"},[i("a",{staticClass:"d-flex align-items-center",on:{click:function(i){return e.markAsReadNotification(t)}}},[i("div",{staticClass:"notification-text ms-4"},[i("p",{staticClass:"notification-title font-bold"},[i("router-link",{attrs:{to:"/orders/view/"+t.data.order_id}},[e._v("\n                        "+e._s(t.data.text))])],1),e._v(" "),i("p",{staticClass:"notification-subtitle font-thin text-sm"},[e._v("\n                      "+e._s(e.changeDateTime(t.created_at))+"\n                    ")])])])])})),e._v(" "),e.notifications.length>0?i("li",[i("p",{staticClass:"text-center py-2 mb-0"},[i("router-link",{attrs:{to:"/notification_panel"}},[e._v(e._s(e.__("all_notification")))])],1)]):e._e(),e._v(" "),i("li",[0==e.notifications.length?i("a",{staticClass:"dropdown-item"},[e._v(e._s(e.__("no_notification")))]):e._e()])],2)]),e._v(" "),i("li",{staticClass:"nav-item dropdown me-3"},[i("div",{staticClass:"lang_div"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],staticClass:"form-control form-select",on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.lang=t.target.multiple?i:i[0]},function(t){return e.changeLanguage(t)}]}},[0===e.languages.length?[i("option",{attrs:{value:"en"}},[e._v(e._s(e.__("english")))])]:e._l(e.languages,(function(t){return i("option",{key:t.code,domProps:{value:t.code,selected:t.code===e.selectedLanguage}},[e._v("\n                    "+e._s(t.name)+"\n                  ")])}))],2)])])]),e._v(" "),i("div",{staticClass:"dropdown"},[i("a",{attrs:{href:"#","data-bs-toggle":"dropdown","aria-expanded":"false"}},[i("div",{staticClass:"user-menu d-flex"},[i("div",{staticClass:"user-name text-end me-3"},[i("h6",{staticClass:"mb-0 text-gray-600"},[e._v(e._s(e.user.username))]),e._v(" "),i("p",{staticClass:"mb-0 text-sm text-gray-600"},[e._v(e._s(e.role))])]),e._v(" "),i("div",{staticClass:"user-img d-flex align-items-center"},[i("div",{staticClass:"avatar avatar-md"},[i("img",{attrs:{src:e.profile_url}})])])])]),e._v(" "),i("ul",{staticClass:"dropdown-menu dropdown-menu-lg-end mr-5",staticStyle:{"margin-right":"-7rem"},attrs:{"aria-labelledby":"dropdownMenuButton"}},[i("li",[i("h6",{staticClass:"dropdown-header"},[e._v(e._s(e.__("hello"))+", "+e._s(e.user.username)+"!")])]),e._v(" "),i("li",[e.role==this.$roleSeller?i("router-link",{staticClass:"dropdown-item",attrs:{to:"/seller/profile"}},[i("i",{staticClass:"icon-mid bi bi-person me-2"}),e._v(e._s(e.__("my_profile"))+"\n              ")]):e._e(),e._v(" "),e.role==this.$roleDeliveryBoy?i("router-link",{staticClass:"dropdown-item",attrs:{to:"/delivery_boy/profile"}},[i("i",{staticClass:"icon-mid bi bi-person me-2"}),e._v(e._s(e.__("my_profile"))+"\n              ")]):e._e()],1),e._v(" "),i("li",[e.role==this.$roleSuperAdmin?i("router-link",{staticClass:"dropdown-item",attrs:{to:"/settings"}},[i("i",{staticClass:"icon-mid bi bi-gear me-2"}),e._v(e._s(e.__("settings"))+"\n              ")]):e._e(),e._v(" "),e.role==this.$roleSeller?i("router-link",{staticClass:"dropdown-item",attrs:{to:"/seller/settings"}},[i("i",{staticClass:"icon-mid bi bi-gear me-2"}),e._v(e._s(e.__("settings"))+"\n              ")]):e._e(),e._v(" "),e.role==this.$roleDeliveryBoy?i("router-link",{staticClass:"dropdown-item",attrs:{to:"/delivery_boy/settings"}},[i("i",{staticClass:"icon-mid bi bi-gear me-2"}),e._v(e._s(e.__("settings"))+"\n              ")]):e._e()],1),e._v(" "),e._m(1),e._v(" "),i("li",[i("a",{staticClass:"dropdown-item",on:{click:function(t){return e.logout()}}},[i("i",{staticClass:"icon-mid bi bi-box-arrow-left me-2"}),e._v("\n                "+e._s(e.__("logout")))])])])])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{staticClass:"nav-link active dropdown-toggle",attrs:{href:"#","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t("i",{staticClass:"bi bi-envelope fs-4 text-gray-600"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("hr",{staticClass:"dropdown-divider"})])}],!1,null,null,null).exports}}]);