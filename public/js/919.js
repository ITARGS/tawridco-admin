"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[919],{919:(t,s,e)=>{e.r(s),e.d(s,{default:()=>n});var a=e(9669),i=e.n(a);const r={data:function(){return{isLoading:!1,notification_settings:{fcm_server_key:""},record:null}},created:function(){this.getNotificationSettings()},methods:{getNotificationSettings:function(){var t=this;i().get(this.$apiUrl+"/notification_settings").then((function(s){s.data.data&&(t.record=s.data.data,t.notification_settings.fcm_server_key=t.record.value)}))},saveRecord:function(){var t=this,s=this.notification_settings,e=this.$apiUrl+"/notification_settings/save",a=this;a.isLoading=!0,i().post(e,s).then((function(s){var e=s.data;1===e.status?(t.showMessage("success",e.message),setTimeout((function(){a.$swal.close(),a.$router.push({path:"/notification_settings"}),a.isLoading=!1}),100)):(a.showError(e.message),a.isLoading=!1)})).catch((function(s){s.request.statusText?t.showError(s.request.statusText):s.message?t.showError(s.message):t.showError("Something went wrong!"),a.isLoading=!1}))}}};const n=(0,e(1900).Z)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"page-heading"},[e("div",{staticClass:"page-title"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[e("h3",[t._v(" "+t._s(t.__("notification_settings")))])]),t._v(" "),e("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[e("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:"/dashboard"}},[t._v(t._s(t.__("dashboard")))])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.__("notification_settings")))])])])])])]),t._v(" "),e("section",{staticClass:"section"},[e("form",{attrs:{id:"notification_settings_form",method:"post",enctype:"multipart/form-data"},on:{submit:function(s){return s.preventDefault(),t.saveRecord.apply(null,arguments)}}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("h4",{staticClass:"card-title"},[t._v(t._s(t.__("update_notification_settings")))])]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"fcm_server_key"}},[t._v(" "+t._s(t.__("fcm_server_key"))+" : ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.notification_settings.fcm_server_key,expression:"notification_settings.fcm_server_key"}],staticClass:"form-control",attrs:{name:"fcm_server_key",id:"fcm_server_key",placeholder:t.__("fcm_server_key"),rows:"5"},domProps:{value:t.notification_settings.fcm_server_key},on:{input:function(s){s.target.composing||t.$set(t.notification_settings,"fcm_server_key",s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"card-footer"},[e("b-button",{attrs:{type:"submit",variant:"primary",disabled:t.isLoading}},[t._v(" "+t._s(t.__("update"))+"\n                            "),t.isLoading?e("b-spinner",{attrs:{small:"",label:"Spinning"}}):t._e()],1)],1)])])])])])}),[],!1,null,null,null).exports}}]);