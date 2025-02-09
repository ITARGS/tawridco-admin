"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4290],{4290:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});const a={components:{VuejsDatatableFactory:s(1585).dc},data:function(){return{fields:[{key:"id",label:__("id"),class:"text-center",sortable:!0,sortDirection:"desc"},{key:"name",label:__("name"),class:"text-center"},{key:"image",label:__("image"),class:"text-center"},{key:"status",label:__("status"),class:"text-center"}],totalRows:1,currentPage:1,perPage:this.$perPage,pageOptions:this.$pageOptions,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],page:1,isLoading:!1,sectionStyle:"style_1",max_visible_units:12,max_col_in_single_row:3,brands:[],create_new:null,edit_record:null}},created:function(){var t=this;this.$eventBus.$on("recordSaved",(function(e){t.showMessage("success",e),t.getRecords()})),this.getRecords()},methods:{getRecords:function(){var t=this;this.isLoading=!0,axios.get(this.$apiUrl+"/products/brands").then((function(e){t.isLoading=!1;var s=e.data;t.brands=s.data}))},deleteRecord:function(t,e){var s=this;this.$swal.fire({title:"Are you Sure?",text:"You want be able to revert this",confirmButtonText:"Yes, Sure",cancelButtonText:"Cancel",icon:"warning",showCancelButton:!0,confirmButtonColor:"#37a279",cancelButtonColor:"#d33"}).then((function(a){if(a.value){s.isLoading=!0;var r={id:e};axios.post(s.$apiUrl+"/products/brands/delete",r).then((function(e){s.isLoading=!1;var a=e.data;s.brands.splice(t,1),s.showMessage("success",a.message)}))}}))}}};const r=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-heading"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[s("h3",[t._v(t._s(t.__("brands")))])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[s("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/seller/dashboard"}},[t._v(t._s(t.__("dashboard")))])],1),t._v(" "),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.__("brands")))])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-12 order-md-1 order-last"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",[t._v(t._s(t.__("brands")))])]),t._v(" "),s("div",{staticClass:"card-body"},[s("b-row",{staticClass:"mb-2"},[s("b-col",{attrs:{md:"3","offset-md":"8"}},[s("h6",{staticClass:"box-title"},[t._v(t._s(t.__("search")))]),t._v(" "),s("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:t.__("search")},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t._v(" "),s("b-col",{staticClass:"text-center",attrs:{md:"1"}},[s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-primary btn_refresh",attrs:{title:t.__("refresh")},on:{click:function(e){return t.getRecords()}}},[s("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])])],1),t._v(" "),s("b-table",{attrs:{items:t.brands,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,bordered:!0,busy:t.isLoading,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-black my-2"},[s("b-spinner",{staticClass:"align-middle"}),t._v(" "),s("strong",[t._v(t._s(t.__("loading"))+"...")])],1)]},proxy:!0},{key:"cell(id)",fn:function(e){return[t._v("\n                                "+t._s(e.item.id)+"\n                            ")]}},{key:"cell(image)",fn:function(e){return[""===e.item.image?s("p",[t._v(t._s(t.__("no_image")))]):s("img",{attrs:{src:t.$storageUrl+e.item.image,height:"50"}})]}},{key:"cell(status)",fn:function(e){return[1==e.item.status?s("span",{staticClass:"badge bg-success"},[t._v(t._s(t.__("active")))]):s("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.__("deactive")))])]}},{key:"cell(actions)",fn:function(e){return[s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-primary",attrs:{title:t.__("edit")},on:{click:function(s){t.edit_record=e.item}}},[s("i",{staticClass:"fa fa-pencil-alt"})]),t._v(" "),s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-danger",attrs:{title:t.__("delete")},on:{click:function(s){return t.deleteRecord(e.index,e.item.id)}}},[s("i",{staticClass:"fa fa-trash"})])]}}])}),t._v(" "),s("b-row",[s("b-col",{staticClass:"my-1",attrs:{md:"2"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:t.__("per_page"),"label-for":"per-page-select","label-align-sm":"right","label-size":"sm"}},[s("b-form-select",{staticClass:"form-control form-select",attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"4","offset-md":"6"}},[s("label",[t._v(t._s(t.__("total_records"))+" :- "+t._s(t.totalRows)+" ")]),t._v(" "),s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)])])])])])}),[],!1,null,null,null).exports}}]);