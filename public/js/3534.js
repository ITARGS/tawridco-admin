"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3534],{9164:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(3645),a=s.n(r)()((function(e){return e[1]}));a.push([e.id,'.switch[data-v-ad0dcee2]{display:inline-block;height:34px;position:relative;width:60px}.switch input[data-v-ad0dcee2]{display:none}.slider[data-v-ad0dcee2]{background-color:#ccc;bottom:0;cursor:pointer;left:0;right:0;top:0}.slider[data-v-ad0dcee2],.slider[data-v-ad0dcee2]:before{position:absolute;transition:.4s}.slider[data-v-ad0dcee2]:before{background-color:#fff;bottom:4px;content:"";height:26px;left:4px;width:26px}input:checked+.slider[data-v-ad0dcee2]{background-color:#66bb6a}input:checked+.slider[data-v-ad0dcee2]:before{transform:translateX(26px)}.slider.round[data-v-ad0dcee2]{border-radius:34px}.slider.round[data-v-ad0dcee2]:before{border-radius:50%}.form-check[data-v-ad0dcee2]{display:inline-flex!important}',""]);const i=a},3534:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var r=s(1585),a=s(9669),i=s.n(a);const o={props:["record"],data:function(){return{isLoading:!1,printName:this.record?this.record.name:null,id:this.record?this.record.id:null,name:this.record?this.record.name:null,categories:[],user_permissions:[]}},computed:{modal_title:function(){var e=this.id?"Edit":"Add";return e+=" Role"}},created:function(){this.getRecords()},methods:{getRecords:function(){var e=this;this.isLoading=!0;var t=this.$apiUrl+"/role/permissions";this.id&&(t=this.$apiUrl+"/role/edit/"+this.record.id),i().get(t).then((function(t){e.isLoading=!1;var s=t.data;e.categories=s.data.categories,e.id&&(e.user_permissions=s.data.user_permissions)}))},showModal:function(){this.$refs["my-modal"].show()},hideModal:function(){this.$refs["my-modal"].hide()},saveRecord:function(){var e=this,t=this;this.isLoading=!0;var s=new FormData;for(var r in this.id&&s.append("id",this.id),s.append("name",this.name),this.user_permissions)s.append("permissions[]",this.user_permissions[r]);var a=this.$apiUrl+"/role/save";this.id&&(a=this.$apiUrl+"/role/update"),i().post(a,s).then((function(s){var r=s.data;1===r.status?(e.$eventBus.$emit("recordSaved",r.message),e.hideModal()):(t.showError(r.message),t.isLoading=!1)})).catch((function(s){t.isLoading=!1,s.request.statusText?e.showError(s.request.statusText):s.message?e.showError(s.message):e.showError("Something went wrong!")}))},formattedName:function(e){var t=e.replace(/_/g," ");return t=t.toLowerCase().replace(/(?<= )[^\s]|^./g,(function(e){return e.toUpperCase()}))}},mounted:function(){this.showModal()}};var n=s(3379),l=s.n(n),c=s(9164),d={insert:"head",singleton:!1};l()(c.Z,d);c.Z.locals;var u=s(1900);const m=(0,u.Z)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-modal",{ref:"my-modal",attrs:{title:e.modal_title,size:"xl",scrollable:"","no-close-on-backdrop":"","no-fade":"",static:""},on:{hidden:function(t){return e.$emit("modalClose")}},scopedSlots:e._u([{key:"modal-header",fn:function(t){var r=t.close;return[e.id?s("h5",{staticClass:"modal-title"},[e._v(e._s(e.modal_title)+" & "+e._s(e.__("permission_access"))+" : "),s("strong",[e._v(" "+e._s(e.printName)+" ")])]):s("h5",{staticClass:"modal-title"},[e._v(e._s(e.modal_title))]),e._v(" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return r()}}},[e._v("×")])]}}])},[s("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[s("b-button",{attrs:{variant:"primary",disabled:e.isLoading},on:{click:function(t){return e.$refs.dummy_submit.click()}}},[e._v(e._s(e.__("save"))+"\n            "),e.isLoading?s("b-spinner",{attrs:{small:"",label:"Spinning"}}):e._e()],1),e._v(" "),s("b-button",{attrs:{variant:"secondary"},on:{click:e.hideModal}},[e._v(e._s(e.__("cancel")))])],1),e._v(" "),e._v(" "),s("form",{ref:"my-form",on:{submit:function(t){return t.preventDefault(),e.saveRecord.apply(null,arguments)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"form-group"},[s("label",[e._v(e._s(e.__("title")))]),e._v(" "),s("i",{staticClass:"text-danger"},[e._v("*")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:e.__("enter_role_title")},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-lg table-bordered"},[s("tbody",e._l(e.categories,(function(t,r){return s("tr",[s("th",{staticClass:"table-active"},[e._v(" "+e._s(e.formattedName(t.name))+" ")]),e._v(" "),s("td",[s("div",{staticClass:"row"},[e.id?e._l(t.permissions,(function(t){return s("div",{staticClass:"col-6 col-md-4 mb-2"},[s("div",{staticClass:"form-check form-switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user_permissions,expression:"user_permissions"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkbox_"+t.id},domProps:{value:t.id,checked:Array.isArray(e.user_permissions)?e._i(e.user_permissions,t.id)>-1:e.user_permissions},on:{change:function(s){var r=e.user_permissions,a=s.target,i=!!a.checked;if(Array.isArray(r)){var o=t.id,n=e._i(r,o);a.checked?n<0&&(e.user_permissions=r.concat([o])):n>-1&&(e.user_permissions=r.slice(0,n).concat(r.slice(n+1)))}else e.user_permissions=i}}}),e._v(" "),s("label",{staticStyle:{"margin-left":"5px"},attrs:{for:"checkbox_"+t.id}},[e._v(" "+e._s(e.formattedName(t.name))+" ")])])])})):e._l(t.permissions,(function(t){return s("div",{staticClass:"col-6 col-md-4 mb-2"},[s("div",{staticClass:"form-check form-switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user_permissions,expression:"user_permissions"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"checkbox_"+t.id},domProps:{value:t.id,checked:e.user_permissions.includes(t.id),checked:Array.isArray(e.user_permissions)?e._i(e.user_permissions,t.id)>-1:e.user_permissions},on:{change:function(s){var r=e.user_permissions,a=s.target,i=!!a.checked;if(Array.isArray(r)){var o=t.id,n=e._i(r,o);a.checked?n<0&&(e.user_permissions=r.concat([o])):n>-1&&(e.user_permissions=r.slice(0,n).concat(r.slice(n+1)))}else e.user_permissions=i}}}),e._v(" "),s("label",{staticStyle:{"margin-left":"5px"},attrs:{for:"checkbox_"+t.id}},[e._v(" "+e._s(e.formattedName(t.name))+" ")])])])}))],2)])])})),0)])])]),e._v(" "),s("button",{ref:"dummy_submit",staticStyle:{display:"none"}})])])}),[],!1,null,"ad0dcee2",null).exports,p={components:{VuejsDatatableFactory:r.dc,"app-edit-record":m},data:function(){return{roles:[],nonDeleteAbleRoles:[this.$roleSuperAdmin,this.$roleSeller,this.$roleDeliveryBoy],isLoading:!1,edit_record:null,create_new:null,fields:[{key:"id",label:__("id"),sortable:!0,sortDirection:"desc"},{key:"name",label:__("name"),sortable:!0,class:"text-center"},{key:"actions",label:__("actions")}],totalRows:1,currentPage:1,perPage:this.$perPage,pageOptions:this.$pageOptions,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],page:1}},created:function(){var e=this;this.category_id=this.$route.params.id,this.$eventBus.$on("recordSaved",(function(t){e.showMessage("success",t),e.getRecords()})),this.getRecords()},methods:{getRecords:function(){var e=this;this.isLoading=!0,axios.get(this.$apiUrl+"/role").then((function(t){e.isLoading=!1;var s=t.data;e.roles=s.data,e.totalRows=e.roles.length}))},deleteRecord:function(e,t){var s=this;this.$swal.fire({title:"Are you Sure?",text:"You want be able to revert this",confirmButtonText:"Yes, Sure",cancelButtonText:"Cancel",icon:"warning",showCancelButton:!0,confirmButtonColor:"#37a279",cancelButtonColor:"#d33"}).then((function(r){if(r.value){s.isLoading=!0;var a={id:t};axios.post(s.$apiUrl+"/role/delete",a).then((function(t){var r=t.data;s.isLoading=!1,1===r.status?(s.roles.splice(e,1),s.showSuccess(r.message)):s.showError(r.message)}))}}))},hideModal:function(){this.create_new=!1,this.edit_record=!1}}};const _=(0,u.Z)(p,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"page-heading"},[s("div",{staticClass:"row"},[e._m(0),e._v(" "),s("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[s("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/dashboard"}},[e._v(e._s(e.__("dashboard")))])],1),e._v(" "),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v("Role")])])])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-12 order-md-1 order-last"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",[e._v("Role")]),e._v(" "),s("span",{staticClass:"pull-right"},[s("button",{staticClass:"btn btn-primary",on:{click:function(t){e.create_new=!0}}},[e._v("Add New")])])]),e._v(" "),s("div",{staticClass:"card-body"},[s("b-row",{staticClass:"mb-2"},[s("b-col",{attrs:{md:"3","offset-md":"8"}},[s("h6",{staticClass:"box-title"},[e._v(e._s(e.__("search")))]),e._v(" "),s("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:e.__("search")},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),e._v(" "),s("b-col",{staticClass:"text-center",attrs:{md:"1"}},[s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-primary btn_refresh",attrs:{title:e.__("refresh")},on:{click:function(t){return e.getRecords()}}},[s("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])])],1),e._v(" "),s("b-table",{attrs:{items:e.roles,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,"filter-included-fields":e.filterOn,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-direction":e.sortDirection,bordered:!0,busy:e.isLoading,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t}},scopedSlots:e._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-black my-2"},[s("b-spinner",{staticClass:"align-middle"}),e._v(" "),s("strong",[e._v(e._s(e.__("loading"))+"...")])],1)]},proxy:!0},{key:"cell(actions)",fn:function(t){return[e.nonDeleteAbleRoles.includes(t.item.name)?e._e():s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-primary",attrs:{title:e.__("edit")},on:{click:function(s){e.edit_record=t.item}}},[s("i",{staticClass:"fa fa-pencil-alt"})]),e._v(" "),e.nonDeleteAbleRoles.includes(t.item.name)?e._e():s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-danger",attrs:{title:e.__("delete")},on:{click:function(s){return e.deleteRecord(t.index,t.item.id)}}},[s("i",{staticClass:"fa fa-trash"})])]}}])}),e._v(" "),s("b-row",[s("b-col",{staticClass:"my-1",attrs:{md:"2"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:e.__("per_page"),"label-for":"per-page-select","label-align-sm":"right","label-size":"sm"}},[s("b-form-select",{staticClass:"form-control form-select",attrs:{id:"per-page-select",options:e.pageOptions,size:"sm"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),e._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"4","offset-md":"6"}},[s("label",[e._v(e._s(e.__("total_records"))+" :- "+e._s(e.totalRows)+" ")]),e._v(" "),s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)])])])]),e._v(" "),e.create_new||e.edit_record?s("app-edit-record",{attrs:{record:e.edit_record},on:{modalClose:function(t){return e.hideModal()}}}):e._e()],1)}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[s("h3",[e._v("Role")])])}],!1,null,null,null).exports}}]);