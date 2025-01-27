"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1784],{1784:(t,a,s)=>{s.r(a),s.d(a,{default:()=>o});var e=s(9669),r=s.n(e);const i={data:function(){return{isLoading:!1,isLoadingDownload:!1,sampleFileurl:this.$baseUrl+"/sample-file/products.csv",instructionsFileurl:this.$baseUrl+"/sample-file/products.txt",file:null}},computed:{isSellerRoute:function(){return this.$route.path.startsWith("/seller/")}},created:function(){},mounted:function(){},methods:{handleFileUpload:function(){this.file=this.$refs.file_csv.files[0]},downloadProductDataExcel:function(){var t=this;r()({url:this.$apiUrl+"/products/download_product_data_excel",method:"get",responseType:"blob"}).then((function(a){t.isLoadingDownload=!1;var s=window.URL.createObjectURL(new Blob([a.data])),e=document.createElement("a");e.href=s,e.setAttribute("download","products_data.csv"),document.body.appendChild(e),e.click(),e.parentNode.removeChild(e)})).catch((function(a){a.request.statusText?t.showError(a.request.statusText):a.message?t.showError(a.message):t.showError("Something went wrong!"),t.isLoading=!1}))},saveRecord:function(){var t=this,a=this;this.isLoading=!0;var s=new FormData;s.append("file",this.file);var e=this.$apiUrl+"/products/bulk_update";r().post(e,s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(s){var e=s.data;1===e.status?(t.showMessage("success",e.message),t.$refs.file_csv.value=null,t.file=null,a.isLoading=!1):(a.showError(e.message),a.isLoading=!1)})).catch((function(s){a.isLoading=!1,s.request.statusText?t.showError(s.request.statusText):s.message?t.showError(s.message):t.showError("Something went wrong!")}))}}};const o=(0,s(1900).Z)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"page-heading"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[s("h3",[t._v(t._s(t.__("bulk_update")))])]),t._v(" "),s("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[s("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[t.isSellerRoute?s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/seller/dashboard"}},[t._v(t._s(t.__("dashboard")))])],1):s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"/dashboard"}},[t._v(t._s(t.__("dashboard")))])],1),t._v(" "),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n              "+t._s(t.__("bulk_update"))+"\n            ")])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-12 order-md-1 order-last"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",[t._v(t._s(t.__("product_bulk_upload_form")))])]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"alert alert-info"},[s("p",[t._v("\n                "+t._s(t.__("always_download_and_use_new_sample_file_if_you_did_updated_admin_panel_version"))+"\n              ")]),t._v(" "),s("p",[t._v(t._s(t.__("read_and_follow_instructions_carefully_before_proceed")))]),t._v(" "),s("p",[s("b",[t._v(t._s(t.__("instruction"))+":")])]),t._v("\n              -- "+t._s(t.__("download_product"))),s("br"),t._v("\n              -- "+t._s(t.__("change_product"))+"\n            ")]),t._v(" "),s("div",{staticClass:"row"},[s("form",{ref:"my-form",attrs:{method:"post",enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.saveRecord.apply(null,arguments)}}},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"upload_file"}},[t._v(t._s(t.__("csv_file")))]),t._v(" "),s("input",{ref:"file_csv",staticClass:"form-control",attrs:{type:"file",name:"upload_file",id:"upload_file",required:"",accept:".csv"},on:{change:t.handleFileUpload}})])]),t._v(" "),s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"submit_btn",name:"btnAdd",disabled:t.isLoading}},[t.isLoading?t._e():s("i",{staticClass:"fa fa-upload"}),t._v(" "+t._s(t.__("update"))+"\n                    "),t.isLoading?s("b-spinner",{attrs:{small:"",label:"Spinning"}}):t._e()],1),t._v(" "),s("button",{staticClass:"btn btn btn-secondary",attrs:{type:"reset"}},[s("i",{staticClass:"fa fa-undo",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.__("clear"))+"\n                  ")]),t._v(" "),s("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-info",attrs:{title:"Download Excel",disabled:t.isLoadingDownload},on:{click:t.downloadProductDataExcel}},[t.isLoadingDownload?[s("b-spinner",{attrs:{small:"",label:"Spinning"}}),t._v(" Downloading...\n                    ")]:[s("i",{staticClass:"fa fa-download"}),t._v("\n                      "+t._s(t.__("download_product_data_file"))+"\n                    ")]],2)])])])])])])])])])}),[],!1,null,null,null).exports}}]);