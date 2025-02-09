"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5636],{8370:(a,t,s)=>{s.d(t,{Z:()=>o});var e=s(3645),r=s.n(e)()((function(a){return a[1]}));r.push([a.id,".auth-card[data-v-2d8e8a2c]{max-width:100%!important}span.error[data-v-2d8e8a2c]{color:#e74c3c;display:flex;font-size:20px;justify-content:center}a[data-v-2d8e8a2c]{color:#37a279}",""]);const o=r},5636:(a,t,s)=>{s.r(t),s.d(t,{default:()=>_});var e=s(9669),r=s.n(e),o=s(5498);s(1700);const i={components:{FormWizard:o.FormWizard,TabContent:o.TabContent},data:function(){return{loadingWizard:!1,errorMsg:null,count:0,phpSupportInfo:[],requirements:[],permissions:[],database:{database_host:"127.0.0.1",database_port:3306,database_name:"",database_username:"root",database_password:"",admin_email:"",admin_password:""},showAdminPassword:!1,purchase_code:""}},mounted:function(){this.loggedUser&&this.$router.push("/dashboard")},created:function(){this.getRequirements()},methods:{getRequirements:function(){var a=this,t=this;r().get(this.$apiUrl+"/install/requirements").then((function(t){a.isLoading=!1;var s=t.data.data;a.phpSupportInfo=s.phpSupportInfo,a.requirements=s.requirements,a.permissions=s.permissions})).catch((function(s){var e;t.isLoading=!1,null!=s&&null!==(e=s.request)&&void 0!==e&&e.statusText?a.showError(s.request.statusText):s.message?a.showError(s.message):a.showError("Something went wrong!")}))},onComplete:function(){},setLoading:function(a){this.loadingWizard=a},handleValidation:function(a,t){},handleErrorMessage:function(a){this.errorMsg=a},validateAsync:function(){var a=this;return new Promise((function(t,s){!0!==a.requirements.errors&&a.phpSupportInfo.supported&&!0!==a.permissions.errors&&!1!==a.permissions.permissions[0].permission?(a.count=0,t(!0)):(a.count++,s("Please Check the requirements and Try again after fixing it."))}))},onCreateDatabase:function(){var a=this;return new Promise((function(t,s){r().post(a.$apiUrl+"/install/database",a.database).then((function(e){var r=e.data;r.status?(a.count=0,t(!0)):(a.count++,s(r.message))})).catch((function(t){a.count++,s(t.toString())}))}))},purchaseCode:function(){var a=this;return new Promise((function(t,s){var e={purchase_code:a.purchase_code};r().post(a.$apiUrl+"/install/purchase_code",e).then((function(e){var r=e.data;r.status?(a.count=0,t(!0)):(a.count++,s(r.message))})).catch((function(t){a.count++,s(t.toString())}))}))},finish:function(){window.location.reload(),this.$router.push({path:"/login"})}}};var n=s(3379),d=s.n(n),l=s(8370),c={insert:"head",singleton:!1};d()(l.Z,c);l.Z.locals;const _=(0,s(1900).Z)(i,(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"auth",style:{backgroundImage:"url("+a.$baseUrl+"/images/panel_login_background_img.jpg)"}},[s("div",{staticClass:"login-wrapper"},[s("div",{staticClass:"auth-section col-lg-6 mt-5"},[s("div",{staticClass:"auth-card"},[s("form-wizard",{attrs:{shape:"circle",color:"#37a279","error-color":"#e74c3c",title:"",subtitle:""},on:{"on-complete":a.onComplete,"on-loading":a.setLoading,"on-validate":a.handleValidation,"on-error":a.handleErrorMessage}},[s("tab-content",{attrs:{title:"Welcome"}},[s("div",{staticClass:"text-center"},[s("p",{staticClass:"display-4 py-3"},[a._v("🙌")]),a._v(" "),s("p",[a._v(a._s(a.__("thank_wrTeam")))]),a._v(" "),s("p",[a._v(" "+a._s(a.__("this_website"))+" ")]),a._v(" "),s("p",[a._v(a._s(a.__("It_minutes")))])])]),a._v(" "),s("tab-content",{attrs:{title:"Requirements","before-change":a.validateAsync}},[a._l(a.requirements.requirements,(function(t,e){return s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",{staticClass:"ps-2"},[a._v("PHP >= "+a._s(a.phpSupportInfo.minimum))]),a._v(" "),s("th",{staticClass:"text-end pe-2"},[s("strong",[a._v(a._s(a.phpSupportInfo.current))]),a._v(" "),s("i",{staticClass:"fa fa-fw",class:a.phpSupportInfo.supported?"fa-check-circle text-success":"fa-exclamation-circle text-danger"})])])]),a._v(" "),s("tbody",a._l(a.requirements.requirements[e],(function(t,e){return s("tr",{class:t?"":"text-danger"},[s("td",[a._v(a._s(e))]),a._v(" "),s("td",{staticClass:"text-end"},[s("i",{staticClass:"fa fa-fw",class:t?"fa-check-circle text-success":"fa-exclamation-circle text-danger"})])])})),0)])})),a._v(" "),s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",{staticClass:"ps-2",attrs:{colspan:"2"}},[a._v(a._s(a.__("permissions")))])])]),a._v(" "),s("tbody",[a._l(a.permissions.permissions,(function(t){return[".env"==t.folder?[s("tr",{class:t.permission?"":"text-danger"},[s("td",[s("input",{staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.folder}})]),a._v(" "),s("td",{staticClass:"text-end align-middle"},[s("strong",[a._v(a._s(t.permission?"":a.__("The file is not writable!")))]),a._v(" "),s("i",{staticClass:"fa fa-fw",class:t.permission?"fa-check-circle text-success":"fa-exclamation-circle text-danger"})])])]:[s("tr",{class:t.isSet?"":"text-danger"},[s("td",[s("input",{staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.folder}})]),a._v(" "),s("td",{staticClass:"text-end align-middle"},[s("strong",[a._v(a._s(t.permission))]),a._v(" "),s("i",{staticClass:"fa fa-fw",class:t.isSet?"fa-check-circle text-success":"fa-exclamation-circle text-danger"})])])]]}))],2)])],2),a._v(" "),s("tab-content",{attrs:{title:"Database","before-change":a.onCreateDatabase}},[s("div",[s("p",{staticClass:"text-center"},[a._v(a._s(a.__("below_host")))]),a._v(" "),s("form",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"database_host"}},[a._v(a._s(a.__("database_host"))),s("span",{staticClass:"text-danger text-xs"},[a._v("*")])]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.database.database_host,expression:"database.database_host"}],staticClass:"form-control",attrs:{type:"text",placeholder:a.__("database_host"),id:"database_host",required:""},domProps:{value:a.database.database_host},on:{input:function(t){t.target.composing||a.$set(a.database,"database_host",t.target.value)}}})])]),a._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"database_port"}},[a._v(a._s(a.__("database_port"))),s("span",{staticClass:"text-danger text-xs"},[a._v("*")])]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.database.database_port,expression:"database.database_port"}],staticClass:"form-control",attrs:{type:"text",placeholder:a.__("database_port"),id:"database_port",required:""},domProps:{value:a.database.database_port},on:{input:function(t){t.target.composing||a.$set(a.database,"database_port",t.target.value)}}})])]),a._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"database_name"}},[a._v(a._s(a.__("database_name"))),s("span",{staticClass:"text-danger text-xs"},[a._v("*")])]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.database.database_name,expression:"database.database_name"}],staticClass:"form-control ",attrs:{type:"text",placeholder:a.__("database_name"),id:"database_name",required:""},domProps:{value:a.database.database_name},on:{input:function(t){t.target.composing||a.$set(a.database,"database_name",t.target.value)}}})])]),a._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"database_username"}},[a._v(a._s(a.__("database_username"))),s("span",{staticClass:"text-danger text-xs"},[a._v("*")])]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.database.database_username,expression:"database.database_username"}],staticClass:"form-control",attrs:{type:"text",placeholder:a.__("database_username"),id:"database_username",required:""},domProps:{value:a.database.database_username},on:{input:function(t){t.target.composing||a.$set(a.database,"database_username",t.target.value)}}})])]),a._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"database_password"}},[a._v(a._s(a.__("database_password"))),s("span",{staticClass:"text-danger text-xs"},[a._v("*")])]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.database.database_password,expression:"database.database_password"}],staticClass:"form-control",attrs:{type:"password",placeholder:a.__("database_password"),id:"database_password",required:"",autocomplete:"off"},domProps:{value:a.database.database_password},on:{input:function(t){t.target.composing||a.$set(a.database,"database_password",t.target.value)}}})])]),a._v(" "),s("div",{staticClass:"divider"},[s("div",{staticClass:"divider-text"},[a._v(a._s(a.__("admin_details")))])]),a._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"admin_email"}},[a._v(a._s(a.__("admin_email"))),s("span",{staticClass:"text-danger text-xs"},[a._v("*")])]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.database.admin_email,expression:"database.admin_email"}],staticClass:"form-control",attrs:{type:"email",placeholder:a.__("admin_email"),id:"admin_email",required:""},domProps:{value:a.database.admin_email},on:{input:function(t){t.target.composing||a.$set(a.database,"admin_email",t.target.value)}}})])]),a._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group mb-3"},[s("label",{staticClass:"form-label",attrs:{for:"admin_password"}},[a._v(a._s(a.__("admin_password"))),s("span",{staticClass:"text-danger text-xs"},[a._v("*")])]),a._v(" "),s("div",{staticClass:"input-group"},["checkbox"==(a.showAdminPassword?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:a.database.admin_password,expression:"database.admin_password"}],staticClass:"form-control",attrs:{placeholder:a.__("admin_password"),name:"admin_password",id:"admin_password",required:"",autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(a.database.admin_password)?a._i(a.database.admin_password,null)>-1:a.database.admin_password},on:{change:function(t){var s=a.database.admin_password,e=t.target,r=!!e.checked;if(Array.isArray(s)){var o=a._i(s,null);e.checked?o<0&&a.$set(a.database,"admin_password",s.concat([null])):o>-1&&a.$set(a.database,"admin_password",s.slice(0,o).concat(s.slice(o+1)))}else a.$set(a.database,"admin_password",r)}}}):"radio"==(a.showAdminPassword?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:a.database.admin_password,expression:"database.admin_password"}],staticClass:"form-control",attrs:{placeholder:a.__("admin_password"),name:"admin_password",id:"admin_password",required:"",autocomplete:"off",type:"radio"},domProps:{checked:a._q(a.database.admin_password,null)},on:{change:function(t){return a.$set(a.database,"admin_password",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:a.database.admin_password,expression:"database.admin_password"}],staticClass:"form-control",attrs:{placeholder:a.__("admin_password"),name:"admin_password",id:"admin_password",required:"",autocomplete:"off",type:a.showAdminPassword?"text":"password"},domProps:{value:a.database.admin_password},on:{input:function(t){t.target.composing||a.$set(a.database,"admin_password",t.target.value)}}}),a._v(" "),s("button",{staticClass:"btn btn-primary font-bold",attrs:{type:"button"},on:{click:function(t){a.showAdminPassword=!a.showAdminPassword}}},[a.showAdminPassword?s("i",{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"}}):s("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])])])])])])])]),a._v(" "),s("tab-content",{attrs:{title:"Finish","before-change":a.finish}},[s("div",{staticClass:"text-center"},[s("i",{staticClass:"fa fa-check-circle fa-5x text-success mx-auto my-3"}),a._v(" "),s("h1",{staticClass:"text-success my-3"},[a._v(a._s(a.__("congratulations")))]),a._v(" "),s("p",[a._v(a._s(a.__("your_needs"))+".")]),a._v(" "),s("p",[a._v(a._s(a.__("please_and"))),s("a",{staticClass:"text-primary",attrs:{href:"https://codecanyon.net/item/egrocer-online-grocery-store-ecommerce-marketplace-flutter-full-app-with-admin-panel/reviews/41423150"}},[a._v(a._s(a.__("leave_rating"))+" ")]),a._v(" "+a._s(a.__("if_script")))]),a._v(" "),s("small",{staticClass:"form-hint"},[a._v(a._s(a.__("for_automatically")))])])]),a._v(" "),a.loadingWizard?s("div",{staticClass:"loader"}):a._e(),a._v(" "),a.errorMsg?s("div",[s("span",{staticClass:"error"},[a._v(a._s(a.errorMsg))])]):a._e()],1)],1)])])])}),[],!1,null,"2d8e8a2c",null).exports}}]);