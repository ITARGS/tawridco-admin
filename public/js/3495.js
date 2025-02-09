"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3495],{3495:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var r=s(9669),a=s.n(r),i=s(3023);const n={props:["record"],data:function(){return{isLoading:!1,login_user:i.Z.user,deliveryBoys:"",delivery_boy_id:"",returnRequest:{id:this.record?this.record.id:null,status:this.record?this.record.status:"",order_id:this.record?this.record.order_id:"",delivery_boy_id:this.record?this.record.delivery_boy_id:0,remark:this.record?this.record.remarks:""}}},computed:{modal_title:function(){var e=this.returnRequest.id?"Edit":"Add";return e+=" Return Request"}},methods:{showModal:function(){this.$refs["my-modal"].show(),this.getOrder()},hideModal:function(){this.$refs["my-modal"].hide()},getOrder:function(){var e=this;this.isLoading=!0,a().get(this.$apiUrl+"/orders/view/"+this.record.order_id).then((function(t){e.isLoading=!1;var s=t.data;1===s.status?e.deliveryBoys=t.data.data.deliveryBoys:(e.showError(s.message),setTimeout((function(){e.$router.back()}),1e3))})).catch((function(t){e.isLoading=!1,t.request.statusText?e.showError(t.request.statusText):t.message?e.showError(t.message):e.showError("Something went wrong!")}))},saveRecord:function(){var e=this,t=this;this.isLoading=!0;var s=this.returnRequest,r=new FormData;for(var i in s)r.append(i,s[i]);var n=this.$apiUrl+"/return_requests/save";this.returnRequest.id&&(n=this.$apiUrl+"/return_requests/update"),a().post(n,r).then((function(s){var r=s.data;1===r.status?(e.$eventBus.$emit("returnRequestSaved",r.message),e.hideModal()):(t.showError(r.message),t.isLoading=!1)})).catch((function(s){t.isLoading=!1,s.request.statusText?e.showError(s.request.statusText):s.message?e.showError(s.message):e.showError("Something went wrong!")}))}},mounted:function(){this.showModal()}};var o=s(1900);const l={components:{"app-edit-record":(0,o.Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-modal",{ref:"my-modal",attrs:{title:e.modal_title,"no-fade":"",static:""},on:{hidden:function(t){return e.$emit("modalClose")}}},[s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{variant:"primary",disabled:e.isLoading},on:{click:function(t){return e.$refs.dummy_submit.click()}}},[e._v(e._s(e.__("save"))+"\n            "),e.isLoading?s("b-spinner",{attrs:{small:"",label:"Spinning"}}):e._e()],1),e._v(" "),s("b-button",{attrs:{variant:"secondary"},on:{click:e.hideModal}},[e._v(e._s(e.__("cancel")))])],1),e._v(" "),s("form",{ref:"my-form",on:{submit:function(t){return t.preventDefault(),e.saveRecord.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"status"}},[e._v("Status")]),s("br"),e._v(" "),s("div",{staticClass:"btn-group",attrs:{id:"status"}},[s("label",{staticClass:"btn btn-warning",attrs:{"data-toggle-class":"btn-warning","data-toggle-passive-class":"btn-default"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.returnRequest.status,expression:"returnRequest.status"}],staticClass:"form-check-input",attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.returnRequest.status,"1")},on:{change:function(t){return e.$set(e.returnRequest,"status","1")}}}),e._v(" "+e._s(e.__("pending"))+"\n                        ")]),e._v(" "),s("label",{staticClass:"btn btn-success",attrs:{"data-toggle-class":"btn-success","data-toggle-passive-class":"btn-default"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.returnRequest.status,expression:"returnRequest.status"}],staticClass:"form-check-input",attrs:{type:"radio",value:"2"},domProps:{checked:e._q(e.returnRequest.status,"2")},on:{change:function(t){return e.$set(e.returnRequest,"status","2")}}}),e._v(" "+e._s(e.__("approved"))+"\n                        ")]),e._v(" "),s("label",{staticClass:"btn btn-danger",attrs:{"data-toggle-class":"btn-danger","data-toggle-passive-class":"btn-default"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.returnRequest.status,expression:"returnRequest.status"}],staticClass:"form-check-input",attrs:{type:"radio",value:"3"},domProps:{checked:e._q(e.returnRequest.status,"3")},on:{change:function(t){return e.$set(e.returnRequest,"status","3")}}}),e._v(" "+e._s(e.__("reject"))+"\n                        ")])])]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.returnRequest.order_id,expression:"returnRequest.order_id"}],attrs:{type:"hidden"},domProps:{value:e.returnRequest.order_id},on:{input:function(t){t.target.composing||e.$set(e.returnRequest,"order_id",t.target.value)}}}),e._v(" "),2==e.returnRequest.status?s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"assign delivery boy"}},[e._v(e._s(e.__("assign_delivery_boy")))]),e._v(" "),s("form",{ref:"my-form",staticClass:"row g-3 align-items-center"},[s("div",{staticClass:"input-group"},[s("label",{staticClass:"visually-hidden",attrs:{for:"delivery_boy_id"}},[e._v(e._s(e.__("delivery_boy")))]),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.returnRequest.delivery_boy_id,expression:"returnRequest.delivery_boy_id"}],staticClass:"form-control form-select",attrs:{id:"delivery_boy_id",name:"delivery_boy_id",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.returnRequest,"delivery_boy_id",t.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[e._v(e._s(e.__("select_delivery_boy")))]),e._v(" "),e._l(e.deliveryBoys,(function(t){return s("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)])])]):e._e()]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"remark"}},[e._v(e._s(e.__("remark")))]),e._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.returnRequest.remark,expression:"returnRequest.remark"}],staticClass:"form-control",attrs:{name:"remark",id:"remark",placeholder:e.__("remark")},domProps:{value:e.returnRequest.remark},on:{input:function(t){t.target.composing||e.$set(e.returnRequest,"remark",t.target.value)}}})])]),e._v(" "),s("button",{ref:"dummy_submit",staticStyle:{display:"none"}})])])}),[],!1,null,"28e99472",null).exports},data:function(){return{fields:[{key:"id",label:__("id"),sortable:!0,sortDirection:"desc"},{key:"user_id",label:__("user_id"),sortable:!0,class:"text-center"},{key:"name",label:__("name"),sortable:!0,class:"text-center"},{key:"product_name",label:__("product_name"),sortable:!0,class:"text-center"},{key:"price",label:__("price"),sortable:!0,class:"text-center"},{key:"discounted_price",label:__("discounted_price"),sortable:!0,class:"text-center"},{key:"quantity",label:__("quantity"),sortable:!0,class:"text-center"},{key:"sub_total",label:__("total"),sortable:!0,class:"text-center"},{key:"status",label:__("status"),sortable:!0,class:"text-center"},{key:"created_at",label:__("date"),sortable:!0,class:"text-center"},{key:"actions",label:__("actions")}],totalRows:1,currentPage:1,perPage:this.$perPage,pageOptions:this.$pageOptions,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],page:1,isLoading:!1,sectionStyle:"style_1",max_visible_units:12,max_col_in_single_row:3,create_new:null,edit_record:null,returnRequests:[]}},computed:{sortOptions:function(){return this.fields.filter((function(e){return e.sortable})).map((function(e){return{text:e.label,value:e.key}}))}},mounted:function(){this.totalRows=this.returnRequests.length},created:function(){var e=this;this.$eventBus.$on("returnRequestSaved",(function(t){e.showMessage("success",t),e.getReturnRequests(),e.create_new=null})),this.getReturnRequests()},methods:{getReturnRequests:function(){var e=this;this.isLoading=!0,axios.get(this.$apiUrl+"/return_requests").then((function(t){e.returnRequests=t.data.data,e.totalRows=e.returnRequests.length,e.isLoading=!1}))},deleteReturnRequests:function(e,t){var s=this;this.$swal.fire({title:"Are you Sure?",text:"You want be able to revert this",confirmButtonText:"Yes, Sure",cancelButtonText:"Cancel",icon:"warning",showCancelButton:!0,confirmButtonColor:"#37a279",cancelButtonColor:"#d33"}).then((function(r){if(r.value){s.isLoading=!0;var a={id:t};axios.post(s.$apiUrl+"/return_requests/delete",a).then((function(t){s.isLoading=!1,s.returnRequests.splice(e,1),s.showSuccess(t.data.message)}))}}))},hideModal:function(){this.create_new=!1,this.edit_record=!1}}};const u=(0,o.Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-heading"},[s("div",{staticClass:"page-title"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[s("h3",[e._v(e._s(e.__("return_requests")))])]),e._v(" "),s("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[s("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/dashboard"}},[e._v(e._s(e.__("dashboard")))])],1),e._v(" "),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v("\n                "+e._s(e.__("return_requests"))+"\n              ")])])])])])]),e._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",{staticClass:"card-title"},[e._v(e._s(e.__("return_requests")))])]),e._v(" "),s("div",{staticClass:"card-body"},[s("b-row",{staticClass:"mb-2"},[s("b-col",{attrs:{md:"3","offset-md":"8"}},[s("h6",{staticClass:"box-title"},[e._v(e._s(e.__("search")))]),e._v(" "),s("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:e.__("search")},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),e._v(" "),s("b-col",{staticClass:"text-center",attrs:{md:"1"}},[s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-primary btn_refresh",attrs:{title:e.__("refresh")},on:{click:function(t){return e.getReturnRequests()}}},[s("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])])],1),e._v(" "),s("b-table",{attrs:{items:e.returnRequests,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,"filter-included-fields":e.filterOn,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-direction":e.sortDirection,bordered:!0,busy:e.isLoading,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t}},scopedSlots:e._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-black my-2"},[s("b-spinner",{staticClass:"align-middle"}),e._v(" "),s("strong",[e._v(e._s(e.__("loading"))+"...")])],1)]},proxy:!0},{key:"head(price)",fn:function(t){return[e._v("\n            "+e._s(e.__("price"))+"  "+e._s("("+e.$currency+")")+"\n            ")]}},{key:"head(discounted_price)",fn:function(t){return[e._v("\n              "+e._s(e.__("discounted_price"))+e._s("("+e.$currency+")")+"\n            ")]}},{key:"cell(status)",fn:function(t){return[1===t.item.status?s("span",{staticClass:"badge bg-warning"},[e._v(e._s(e.__("pending")))]):2===t.item.status?s("span",{staticClass:"badge bg-success"},[e._v(e._s(e.__("approved")))]):3===t.item.status?s("span",{staticClass:"badge bg-danger"},[e._v(e._s(e.__("rejected")))]):s("span",{staticClass:"badge bg-danger"},[e._v(e._s(e.__("undefine")))])]}},{key:"cell(created_at)",fn:function(t){return[e._v("\n              "+e._s(new Date(t.item.created_at).toLocaleString())+"\n            ")]}},{key:"cell(actions)",fn:function(t){return[e.$can("return_request_update")?s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-secondary",attrs:{title:e.__("edit")},on:{click:function(s){e.edit_record=t.item}}},[s("i",{staticClass:"fa fa-pencil-alt"})]):e._e(),e._v(" "),e.$can("return_request_delete")?s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-danger",attrs:{title:e.__("delete")},on:{click:function(s){return e.deleteReturnRequests(t.index,t.item.id)}}},[s("i",{staticClass:"fa fa-trash"})]):e._e()]}}])}),e._v(" "),s("b-row",[s("b-col",{staticClass:"my-1",attrs:{md:"2"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:e.__("per_page"),"label-for":"per-page-select","label-align-sm":"right","label-size":"sm"}},[s("b-form-select",{staticClass:"form-control form-select",attrs:{id:"per-page-select",options:e.pageOptions,size:"sm"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),e._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"4","offset-md":"6"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)])])]),e._v(" "),e.create_new||e.edit_record?s("app-edit-record",{attrs:{record:e.edit_record},on:{modalClose:function(t){return e.hideModal()}}}):e._e()],1)}),[],!1,null,null,null).exports}}]);