"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6793],{6793:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});const a={data:function(){return{fields:[{key:"id",label:__("id"),sortable:!0,sortDirection:"desc"},{key:"name",label:__("name"),sortable:!0,class:"text-center"},{key:"short_code",label:__("short_code"),sortable:!0,class:"text-center"},{key:"parent_id",label:__("parent_id"),class:"text-center"},{key:"conversion",label:__("conversion"),class:"text-center"}],totalRows:1,currentPage:1,perPage:this.$perPage,pageOptions:this.$pageOptions,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],page:1,units:[],isLoading:!1,sectionStyle:"style_1",max_visible_units:12,max_col_in_single_row:3,create_new:null,edit_record:null}},computed:{sortOptions:function(){return this.fields.filter((function(t){return t.sortable})).map((function(t){return{text:t.label,value:t.key}}))}},mounted:function(){this.totalRows=this.units.length},created:function(){var t=this;this.$eventBus.$on("unitSaved",(function(e){t.showMessage("success",e),t.getUnits(),t.create_new=null})),this.getUnits()},methods:{getUnits:function(){var t=this;this.isLoading=!0,axios.get(this.$apiUrl+"/units").then((function(e){t.isLoading=!1;var s=e.data;t.units=s.data,t.totalRows=t.units.length}))}}};const r=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-heading"},[s("div",{staticClass:"page-title"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[s("h3",[t._v(t._s(t.__("store_settings")))])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[s("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/seller/dashboard"}},[t._v(t._s(t.__("dashboard")))])],1),t._v(" "),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.__("store_settings")))])])])])])]),t._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.__("units")))])]),t._v(" "),s("div",{staticClass:"card-body"},[s("b-row",{staticClass:"mb-2"},[s("b-col",{attrs:{md:"3","offset-md":"8"}},[s("h6",{staticClass:"box-title"},[t._v(t._s(t.__("search")))]),t._v(" "),s("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:t.__("search")},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t._v(" "),s("b-col",{staticClass:"text-center",attrs:{md:"1"}},[s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-primary btn_refresh",attrs:{title:t.__("refresh")},on:{click:function(e){return t.getUnits()}}},[s("i",{staticClass:"fa fa-refresh",attrs:{"aria-hidden":"true"}})])])],1),t._v(" "),s("b-table",{attrs:{items:t.units,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,bordered:!0,busy:t.isLoading,stacked:"md","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-black my-2"},[s("b-spinner",{staticClass:"align-middle"}),t._v(" "),s("strong",[t._v(t._s(t.__("loading"))+"...")])],1)]},proxy:!0},{key:"cell(parent_id)",fn:function(e){return[null!==e.item.parent_id?s("p",[t._v(t._s(e.item.parent_id))]):s("p",[t._v("-")])]}},{key:"cell(conversion)",fn:function(e){return[null!==e.item.conversion?s("p",[t._v(t._s(e.item.conversion))]):s("p",[t._v("-")])]}}])}),t._v(" "),s("b-row",[s("b-col",{staticClass:"my-1",attrs:{md:"2"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:t.__("per_page"),"label-for":"per-page-select","label-align-sm":"right","label-size":"sm"}},[s("b-form-select",{staticClass:"form-control form-select",attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"4","offset-md":"6"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)])])])])}),[],!1,null,null,null).exports}}]);