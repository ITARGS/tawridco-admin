"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7215],{7215:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var i=a(9669),s=a.n(i);const o={props:["record"],data:function(){return{isLoading:!1,socialMedia:{id:this.record?this.record.id:null,icon:this.record?this.record.icon:"",link:this.record?this.record.link:""}}},computed:{modal_title:function(){var t=this.socialMedia.id?"Edit":"Add";return t+=" Social Media"}},methods:{showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},saveRecord:function(){var t=this,e=this;this.isLoading=!0;var a=this.socialMedia,i=new FormData;for(var o in a)i.append(o,a[o]);var r=this.$apiUrl+"/social_media/save";this.socialMedia.id&&(r=this.$apiUrl+"/social_media/update"),s().post(r,i).then((function(a){var i=a.data;1===i.status?(t.$eventBus.$emit("socialMediaSaved",i.message),t.hideModal()):(e.showError(i.message),e.isLoading=!1)})).catch((function(a){e.isLoading=!1,a.request.statusText?t.showError(a.request.statusText):a.message?t.showError(a.message):t.showError("Something went wrong!")}))}},mounted:function(){this.showModal()}};var r=a(1900);const n={components:{"app-edit-record":(0,r.Z)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"my-modal",attrs:{title:t.modal_title,"no-fade":"",static:""},on:{hidden:function(e){return t.$emit("modalClose")}}},[a("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("b-button",{attrs:{variant:"primary",disabled:t.isLoading},on:{click:function(e){return t.$refs.dummy_submit.click()}}},[t._v("Save\n            "),t.isLoading?a("b-spinner",{attrs:{small:"",label:"Spinning"}}):t._e()],1),t._v(" "),a("b-button",{attrs:{variant:"secondary"},on:{click:t.hideModal}},[t._v("Cancel")])],1),t._v(" "),a("form",{ref:"my-form",on:{submit:function(e){return e.preventDefault(),t.saveRecord.apply(null,arguments)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"icon"}},[t._v("Icon")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.socialMedia.icon,expression:"socialMedia.icon"}],staticClass:"form-control form-select social_media",attrs:{name:"icon",id:"icon"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.socialMedia,"icon",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("Select Icon")]),t._v(" "),a("option",{attrs:{value:"fab fa-facebook"}},[t._v(" Facebook")]),t._v(" "),a("option",{attrs:{value:"fab fa-linkedin"}},[t._v(" LinkedIn")]),t._v(" "),a("option",{attrs:{value:"fab fa-instagram"}},[t._v(" Instagram")]),t._v(" "),a("option",{attrs:{value:"fab fa-twitter"}},[t._v(" Twitter")]),t._v(" "),a("option",{attrs:{value:"fab fa-whatsapp"}},[t._v(" Whatsapp")]),t._v(" "),a("option",{attrs:{value:"fab fa-youtube"}},[t._v(" Youtube")]),t._v(" "),a("option",{attrs:{value:"fab fa-qq"}},[t._v(" QQ")]),t._v(" "),a("option",{attrs:{value:"fab fa-wechat"}},[t._v(" WeChat")]),t._v(" "),a("option",{attrs:{value:"fab fa-tumblr"}},[t._v(" Tumblr")]),t._v(" "),a("option",{attrs:{value:"fab fa-google-plus"}},[t._v(" Google+")]),t._v(" "),a("option",{attrs:{value:"fab fa-skype"}},[t._v("  Skype")]),t._v(" "),a("option",{attrs:{value:"fab fa-flickr"}},[t._v(" fa-flickr")]),t._v(" "),a("option",{attrs:{value:"fab fa-pinterest"}},[t._v(" Pinterest")]),t._v(" "),a("option",{attrs:{value:"fab fa-reddit"}},[t._v(" Reddit")]),t._v(" "),a("option",{attrs:{value:"fab fa-foursquare"}},[t._v(" Foursquare")]),t._v(" "),a("option",{attrs:{value:"fab fa-renren"}},[t._v("  Renren")]),t._v(" "),a("option",{attrs:{value:"fab fa-delicious"}},[t._v(" Delicious ")])])]),t._v(" "),a("div",{staticClass:"form-group "},[a("label",{attrs:{for:"link"}},[t._v("Link")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.socialMedia.link,expression:"socialMedia.link"}],staticClass:"form-control",attrs:{type:"url",name:"link",id:"link",placeholder:"link"},domProps:{value:t.socialMedia.link},on:{input:function(e){e.target.composing||t.$set(t.socialMedia,"link",e.target.value)}}})])]),t._v(" "),a("button",{ref:"dummy_submit",staticStyle:{display:"none"}})])])}),[],!1,null,"60c36007",null).exports},data:function(){return{fields:[{key:"id",label:__("id"),sortable:!0,sortDirection:"desc"},{key:"icon",label:__("icon"),sortable:!0,class:"text-center"},{key:"link",label:__("link"),sortable:!0,class:"text-center"},{key:"actions",label:__("actions")}],totalRows:1,currentPage:1,perPage:this.$perPage,pageOptions:this.$pageOptions,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],page:1,per_page:10,isLoading:!1,sectionStyle:"style_1",max_visible_units:12,max_col_in_single_row:3,create_new:null,edit_record:null,socialMedia:[]}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){this.totalRows=this.socialMedia.length},created:function(){var t=this;this.$eventBus.$on("socialMediaSaved",(function(e){t.showMessage("success",e),t.getSocialMedia(),t.create_new=null})),this.getSocialMedia()},methods:{getSocialMedia:function(){var t=this;this.isLoading=!0,axios.get(this.$apiUrl+"/social_media").then((function(e){t.socialMedia=e.data.data,t.totalRows=t.socialMedia.length,t.isLoading=!1}))},deleteSocialMedia:function(t,e){var a=this;this.$swal.fire({title:"Are you Sure?",text:"You want be able to revert this",confirmButtonText:"Yes, Sure",cancelButtonText:"Cancel",icon:"warning",showCancelButton:!0,confirmButtonColor:"#37a279",cancelButtonColor:"#d33"}).then((function(i){if(i.value){a.isLoading=!0;var s={id:e};axios.post(a.$apiUrl+"/social_media/delete",s).then((function(e){a.isLoading=!1,a.socialMedia.splice(t,1),a.showSuccess(e.data.message)}))}}))},hideModal:function(){this.create_new=!1,this.edit_record=!1}}};const l=(0,r.Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-heading"},[a("div",{staticClass:"page-title"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[a("h3",[t._v("Social Media"+t._s(t.__("social_media")))])]),t._v(" "),a("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[a("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/dashboard"}},[t._v(t._s(t.__("dashboard")))])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" "+t._s(t.__("social_media")))])])])])])]),t._v(" "),a("section",{staticClass:"section"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h4",{staticClass:"card-title"},[t._v(t._s(t.__("social_media")))]),t._v(" "),a("span",{staticClass:"pull-right"},[t.$can("manage_social_media_create")?a("button",{staticClass:"btn btn-primary",on:{click:function(e){t.create_new=!0}}},[t._v(t._s(t.__("add")))]):t._e()])]),t._v(" "),a("div",{staticClass:"card-body"},[a("b-row",{staticClass:"mb-2"},[a("b-col",{attrs:{md:"3","offset-md":"8"}},[a("h6",{staticClass:"box-title"},[t._v(t._s(t.__("search")))]),t._v(" "),a("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t._v(" "),a("b-col",{staticClass:"text-center",attrs:{md:"1"}},[a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-primary btn_refresh",attrs:{title:t.__("refresh")},on:{click:function(e){return t.getSocialMedia()}}},[a("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])])],1),t._v(" "),a("b-table",{attrs:{items:t.socialMedia,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,bordered:!0,busy:t.isLoading,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-black my-2"},[a("b-spinner",{staticClass:"align-middle"}),t._v(" "),a("strong",[t._v(t._s(t.__("loading"))+"...")])],1)]},proxy:!0},{key:"cell(icon)",fn:function(e){return[a("i",{class:e.item.icon}),t._v(" "+t._s(e.item.icon)+"\n                        ")]}},{key:"cell(actions)",fn:function(e){return[t.$can("manage_social_media_update")?a("button",{staticClass:"btn btn-sm btn-secondary",on:{click:function(a){t.edit_record=e.item}}},[t._v(t._s(t.__("edit")))]):t._e(),t._v(" "),t.$can("manage_social_media_delete")?a("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(a){return t.deleteSocialMedia(e.index,e.item.id)}}},[t._v(t._s(t.__("delete")))]):t._e()]}}])}),t._v(" "),a("b-row",[a("b-col",{staticClass:"my-1",attrs:{md:"2"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:t.__("per_page"),"label-for":"per-page-select","label-align-sm":"right","label-size":"sm"}},[a("b-form-select",{staticClass:"form-control form-select",attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),a("b-col",{staticClass:"my-1",attrs:{md:"4","offset-md":"6"}},[a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)])])]),t._v(" "),t.create_new||t.edit_record?a("app-edit-record",{attrs:{record:t.edit_record},on:{modalClose:function(e){return t.hideModal()}}}):t._e()],1)}),[],!1,null,null,null).exports}}]);