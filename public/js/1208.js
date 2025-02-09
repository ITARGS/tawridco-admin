"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1208],{1208:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var i=a(9669),s=a.n(i),r=a(6292);const o={data:function(){return{center:{lat:0,lng:0},currentPlace:null,markers:[],city:{id:"",latitude:"",longitude:"",name:"",state:"",zone:"",formatted_address:"",time_to_travel:"",min_amount_for_free_delivery:"",max_deliverable_distance:"",delivery_charge_method:"",fixed_charge:"",per_km_charge:"",range_wise_charges:[{from_range:"",to_range:"",price:""}],boundary_points:"",geolocation_type:"",radius:""},boundary_points:"",formatted_address:"",infoWindow:{position:{lat:0,lng:0},open:!1,template:""},map:"",drawingManager:"",vertices:"",geolocation_type:"",googleMapsLoaded:!1}},mounted:function(){var e=this,t=this;this.$refs.mapRef.$mapPromise.then((function(a){t.map=a,t.drawingManager=new google.maps.drawing.DrawingManager({drawingMode:google.maps.drawing.OverlayType.POLYGON,drawingControl:!0,drawingControlOptions:{position:google.maps.ControlPosition.TOP_CENTER,drawingModes:[google.maps.drawing.OverlayType.POLYGON,google.maps.drawing.OverlayType.CIRCLE]},polygonOptions:{editable:!0},circleOptions:{fillColor:"#666666",fillOpacity:.5,strokeWeight:1,clickable:!0,editable:!0,draggable:!0,zIndex:1}}),t.drawingManager.setMap(t.map),google.maps.event.addListener(t.drawingManager,"overlaycomplete",(function(e){e.overlay.type=e.type})),google.maps.event.addListener(t.drawingManager,"overlaycomplete",(function(e){if("circle"==e.type){var a=[];t.radius=e.overlay.getRadius();var i=e.overlay.getCenter().lat(),s=e.overlay.getCenter().lng();a.push({lat:i,lng:s}),t.geolocation_type=e.type,t.vertices=JSON.stringify(a)}else t.geolocation_type=e.type,t.vertices=e.overlay.getPath().getArray(),t.overlayClickListener(e.overlay)})),google.maps.event.addListener(e.drawingManager,"overlaycomplete",(function(e){t.overlayRemoveListener(e.overlay,!1)}))})),this.waitForGoogleMaps()},computed:{google:function(){return(0,r.gmapApi)()}},created:function(){this.city.id=this.$route.params.id,this.cityRecord=this.$route.params.record,this.city.id&&this.getCity()},methods:{addRow:function(){this.city.range_wise_charges.push({from_range:"",to_range:"",price:""})},remove:function(e){this.city.range_wise_charges.splice(e,1)},setPlace:function(e){this.currentPlace=e,this.addMarker()},addMarker:function(){if(this.currentPlace){var e={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:e}),this.center=e,this.city.latitude=this.currentPlace.geometry.location.lat(),this.city.longitude=this.currentPlace.geometry.location.lng(),this.city.name=this.currentPlace.name;var t=this.currentPlace.formatted_address.split(",");this.city.state=t[t.length-2],this.city.formatted_address=this.currentPlace.formatted_address,this.infoWindow.position={lat:this.city.latitude,lng:this.city.longitude},this.infoWindow.template="<b>".concat(this.city.name,"</b><br>").concat(this.city.formatted_address),this.infoWindow.open=!0,this.currentPlace=null}},getCity:function(){var e=this;this.isLoading=!0,s().get(this.$apiUrl+"/cities/edit/"+this.city.id).then((function(t){e.isLoading=!1;var a=t.data.data;for(var i in e.city)e.city[i]="range_wise_charges"===i?JSON.parse(a[i]):a[i];var s={lat:parseFloat(a.latitude),lng:parseFloat(a.longitude)};e.markers.push({position:s}),e.center=s,e.infoWindow.position={lat:parseFloat(a.latitude),lng:parseFloat(a.longitude)},e.infoWindow.template="<b>".concat(a.name,"</b><br>").concat(e.city.formatted_address),e.infoWindow.open=!0,e.boundary_points=e.city.boundary_points,e.setMap()}))},overlayClickListener:function(e){google.maps.event.addListener(e,"mouseup",(function(t){this.vertices=e.getPath().getArray()}))},overlayRemoveListener:function(e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=this;1==(arguments.length>1&&void 0!==arguments[1]&&arguments[1])&&document.getElementById("add-line").addEventListener("click",(function(){""!=t?e.setMap(t):e.setMap(map);s.vertices=i})),document.getElementById("clear-line").addEventListener("click",(function(){e.setMap(null),s.vertices=""})),0==a&&document.getElementById("remove-line").addEventListener("click",(function(){e.setMap(null),s.vertices=""}))},waitForGoogleMaps:function(){var e=this,t=setInterval((function(){(0,r.gmapApi)()&&(0,r.gmapApi)().maps&&(e.googleMapsLoaded=!0,clearInterval(t),e.setMap())}),100)},setMap:function(){this.id=this.city.id;var e={lat:parseFloat(this.city.latitude),lng:parseFloat(this.city.longitude)};this.markers.push({position:e}),this.center=e,this.infoWindow.position={lat:parseFloat(this.city.latitude),lng:parseFloat(this.city.longitude)},this.infoWindow.template="<b>".concat(this.city.name,"</b><br>").concat(this.city.formatted_address),this.infoWindow.open=!0;var t=this.boundary_points?JSON.parse(this.boundary_points):[];if(this.city.geolocation_type){var a=(0,r.gmapApi)();if(this.geolocation_type=this.city.geolocation_type,this.radius=this.city.radius,"polygon"===this.city.geolocation_type){console.log(t),this.vertices=t;var i=new a.maps.Polygon({paths:t,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,editable:!0,geodesic:!0});i.setMap(this.map),this.overlayRemoveListener(i,!0,this.map,!0,t)}else if("circle"===this.city.geolocation_type){this.vertices=this.city.boundary_points;var s=new a.maps.Circle({strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,map:this.map,center:t[0],radius:Number(this.city.radius)});this.overlayRemoveListener(s,!0,this.map,!0,this.city.boundary_points)}}},saveRecord:function(){var e=this,t=this;if(this.isLoading=!0,this.vertices){var a=this.city,i=new FormData;for(var r in a)"range_wise_charges"===r?i.append(r,JSON.stringify(a[r])):i.append(r,a[r]);i.append("geolocation_type",this.geolocation_type),i.append("radius",this.radius),"circle"===this.geolocation_type?i.append("boundary_points",this.vertices):i.append("boundary_points",JSON.stringify(this.vertices));var o=this.$apiUrl+"/cities/save";this.city.id&&(o=this.$apiUrl+"/cities/update"),s().post(o,i).then((function(a){var i=a.data;1===i.status?(e.showMessage("success",i.message),setTimeout((function(){t.$swal.close(),t.$router.push({path:"/cities"})}),2e3)):(t.showError(i.message),t.isLoading=!1)})).catch((function(a){t.isLoading=!1,a.request.statusText?e.showError(a.request.statusText):a.message?e.showError(a.message):e.showError("Something went wrong!")}))}else t.isLoading=!1,this.showError("Draw Deliverable area on Map")}}};const n=(0,a(1900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-heading"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6 order-md-1 order-last"},[a("h3",[e._v(e._s(e.__("manage_city")))])]),e._v(" "),a("div",{staticClass:"col-12 col-md-6 order-md-2 order-first"},[a("nav",{staticClass:"breadcrumb-header float-start float-lg-end",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/dashboard"}},[e._v(e._s(e.__("dashboard")))])],1),e._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e.city.id?[e._v("\n                                "+e._s(e.__("edit"))+"\n                            ")]:[e._v("\n                                "+e._s(e.__("create"))+"\n                            ")],e._v("\n                            "+e._s(e.__("city"))+"\n                        ")],2)])])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-sm-12 order-md-1 order-last"},[a("div",{staticClass:"card h-100"},[a("div",{staticClass:"card-header"},[a("h4",[e.city.id?[e._v(e._s(e.__("edit")))]:[e._v(e._s(e.__("create")))],e._v("\n                            "+e._s(e.__("city"))+"\n                        ")],2)]),e._v(" "),a("div",{staticClass:"card-body"},[a("form",{ref:"my-form",on:{submit:function(t){return t.preventDefault(),e.saveRecord.apply(null,arguments)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"city_name"}},[e._v(" "+e._s(e.__("search_city")))]),e._v(" "),a("GmapAutocomplete",{staticClass:"form-control",attrs:{type:"search",placeholder:e.__("search_city_on_map"),options:{fields:["address_components","formatted_address","geometry","name","place_id","plus_code","types"],strictBounds:!1},id:"city_name"},on:{place_changed:e.setPlace}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city.formatted_address,expression:"city.formatted_address"}],attrs:{type:"hidden"},domProps:{value:e.city.formatted_address},on:{input:function(t){t.target.composing||e.$set(e.city,"formatted_address",t.target.value)}}}),e._v(" "),a("span",{staticClass:"text text-primary"},[e._v(e._s(e.__("search_your_city_where_you_will_deliver_the_food_and_to_find_co_ordinates")))])],1),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"latitude"}},[e._v(e._s(e.__("latitude"))+" "),a("span",{staticClass:"text-danger text-sm"},[e._v("*")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city.latitude,expression:"city.latitude"}],staticClass:"form-control",attrs:{type:"text",name:"latitude",id:"latitude",placeholder:e.__("enter_latitude"),required:"",readonly:""},domProps:{value:e.city.latitude},on:{input:function(t){t.target.composing||e.$set(e.city,"latitude",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"longitude"}},[e._v(" "+e._s(e.__("longitude"))),a("span",{staticClass:"text-danger text-sm"},[e._v("*")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city.longitude,expression:"city.longitude"}],staticClass:"form-control",attrs:{type:"text",name:"longitude",id:"longitude",placeholder:e.__("enter_longitude"),required:"",readonly:""},domProps:{value:e.city.longitude},on:{input:function(t){t.target.composing||e.$set(e.city,"longitude",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v(" "+e._s(e.__("city_name"))),a("span",{staticClass:"text-danger text-sm"},[e._v("*")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city.name,expression:"city.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name",placeholder:e.__("enter_city_name"),required:"",readonly:""},domProps:{value:e.city.name},on:{input:function(t){t.target.composing||e.$set(e.city,"name",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"state"}},[e._v(" "+e._s(e.__("state_name"))),a("span",{staticClass:"text-danger text-sm"},[e._v("*")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city.state,expression:"city.state"}],staticClass:"form-control",attrs:{type:"text",name:"state",id:"state",placeholder:e.__("enter_state_name"),required:"",readonly:""},domProps:{value:e.city.state},on:{input:function(t){t.target.composing||e.$set(e.city,"state",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"state"}},[e._v(" "+e._s(e.__("zone_name"))),a("span",{staticClass:"text-danger text-sm"},[e._v("*")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city.zone,expression:"city.zone"}],staticClass:"form-control",attrs:{type:"text",name:"zone",id:"zone",placeholder:e.__("enter_zone_name"),required:""},domProps:{value:e.city.zone},on:{input:function(t){t.target.composing||e.$set(e.city,"zone",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"time_to_travel"}},[e._v(e._s(e.__("time_to_travel_1km"))+" "),a("span",{staticClass:"text-danger text-sm"},[e._v("*")]),e._v(" "),a("small",[e._v(e._s(e.__("enter_in_minutes")))])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city.time_to_travel,expression:"city.time_to_travel"}],staticClass:"form-control",attrs:{type:"number",name:"time_to_travel",id:"time_to_travel",min:"0",max:"999999999",placeholder:e.__("enter_time_travel"),required:""},domProps:{value:e.city.time_to_travel},on:{input:function(t){t.target.composing||e.$set(e.city,"time_to_travel",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"min_amount_for_free_delivery"}},[e._v(e._s(e.__("minimum_amount_for_free_delivery"))),a("span",{staticClass:"text-danger text-xs"},[e._v("*")]),e._v(" "),a("small",[e._v("[ "+e._s(e.$currency)+" ]")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city.min_amount_for_free_delivery,expression:"city.min_amount_for_free_delivery"}],staticClass:"form-control",attrs:{type:"number",name:"min_amount_for_free_delivery",id:"min_amount_for_free_delivery",placeholder:e.__("minimum_amount_for_free_delivery"),min:"0",max:"999999999",required:""},domProps:{value:e.city.min_amount_for_free_delivery},on:{input:function(t){t.target.composing||e.$set(e.city,"min_amount_for_free_delivery",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group d-none"},[a("label",{attrs:{for:"max_deliverable_distance"}},[e._v(" "+e._s(e.__("maximum_delivarable_distance"))),a("span",{staticClass:"text-danger text-xs"},[e._v("*")]),e._v(" "),a("small",[e._v("["+e._s(e.__("kilometre"))+"]")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city.max_deliverable_distance,expression:"city.max_deliverable_distance"}],staticClass:"form-control",attrs:{type:"number",name:"max_deliverable_distance",placeholder:e.__("minimum_amount_for_free_delivery"),min:"0",max:"999999999"},domProps:{value:e.city.max_deliverable_distance},on:{input:function(t){t.target.composing||e.$set(e.city,"max_deliverable_distance",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:" col-12 col-form-label",attrs:{for:"delivery_charge_method"}},[e._v(e._s(e.__("delivery_charge_methods"))+" "),a("span",{staticClass:"text-danger text-sm"},[e._v("*")])]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.city.delivery_charge_method,expression:"city.delivery_charge_method"}],staticClass:"form-control form-select",attrs:{name:"delivery_charge_method",id:"delivery_charge_method",required:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.city,"delivery_charge_method",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[e._v(e._s(e.__("select_method")))]),e._v(" "),a("option",{attrs:{value:"fixed_charge"}},[e._v(e._s(e.__("fixed_delivery_charges")))]),e._v(" "),a("option",{attrs:{value:"per_km_charge"}},[e._v(e._s(e.__("per_km_delivery_charges")))]),e._v(" "),a("option",{attrs:{value:"range_wise_charges"}},[e._v(e._s(e.__("range_wise_delivery_charges")))])])]),e._v(" "),"fixed_charge"===e.city.delivery_charge_method?a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"fixed_charge"}},[e._v(" "+e._s(e.__("fix_delivery_charges"))),a("span",{staticClass:"text-danger text-sm"},[e._v("*")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city.fixed_charge,expression:"city.fixed_charge"}],staticClass:"form-control",attrs:{type:"number",name:"fixed_charge",id:"fixed_charge",placeholder:e.__("global_flat_charges"),min:"0",max:"999999999",step:"any"},domProps:{value:e.city.fixed_charge},on:{input:function(t){t.target.composing||e.$set(e.city,"fixed_charge",t.target.value)}}})]):e._e(),e._v(" "),"per_km_charge"===e.city.delivery_charge_method?a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"per_km_charge"}},[e._v(e._s(e.__("per_km_delivery_charges"))),a("span",{staticClass:"text-danger text-sm"},[e._v("*")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city.per_km_charge,expression:"city.per_km_charge"}],staticClass:"form-control",attrs:{type:"number",name:"per_km_charge",id:"per_km_charge",placeholder:e.__("per_km_delivery_charges"),min:"0",max:"999999999",step:"any"},domProps:{value:e.city.per_km_charge},on:{input:function(t){t.target.composing||e.$set(e.city,"per_km_charge",t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.city.boundary_points,expression:"city.boundary_points"}],staticClass:"form-control d-none",attrs:{type:"text",name:"boundary_points",id:"boundary_points",placeholder:e.__("boundary_points")},domProps:{value:e.city.boundary_points},on:{input:function(t){t.target.composing||e.$set(e.city,"boundary_points",t.target.value)}}})]):e._e(),e._v(" "),"range_wise_charges"===e.city.delivery_charge_method?a("div",{staticClass:"form-group col-sm-12"},[a("label",[e._v(e._s(e.__("range_wise_delivery_charges"))),a("span",{staticClass:"text-danger text-sm"},[e._v("* ")]),e._v(" "),a("span",{staticClass:"text-secondary text-sm"},[e._v(e._s(e.__("handel_message")))])]),e._v(" "),e._l(e.city.range_wise_charges,(function(t,i){return a("div",{key:e.key=i+1,staticClass:"form-group row"},[a("div",{staticClass:"col-sm-1"},[e._v(e._s(e.key)+".")]),e._v(" "),a("div",{staticClass:"col-sm-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.from_range,expression:"range.from_range"}],staticClass:"form-control",attrs:{type:"number",name:"from_range[]",id:"from_range",placeholder:e.__("from_range"),min:"0",max:"999999999"},domProps:{value:t.from_range},on:{input:function(a){a.target.composing||e.$set(t,"from_range",a.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-sm-1 btn btn-secondary"},[e._v("To")]),e._v(" "),a("div",{staticClass:"col-sm-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.to_range,expression:"range.to_range"}],staticClass:"form-control",attrs:{type:"number",name:"to_range[]",id:"to_range",placeholder:e.__("to_range"),min:"0",max:"999999999"},domProps:{value:t.to_range},on:{input:function(a){a.target.composing||e.$set(t,"to_range",a.target.value)}}})]),e._v(" "),a("div",{staticClass:"col-sm-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"range.price"}],staticClass:"form-control",attrs:{type:"number",name:"price[]",id:"price",placeholder:e.__("price"),min:"0",max:"999999999",step:"any"},domProps:{value:t.price},on:{input:function(a){a.target.composing||e.$set(t,"price",a.target.value)}}})]),e._v(" "),0===i?a("div",{staticClass:"col-sm-1"},[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticStyle:{cursor:"pointer"},attrs:{title:"Add Row"},on:{click:e.addRow}},[a("i",{staticClass:"fa fa-plus-square fa-2x"})])]):e._e(),e._v(" "),0!==i?a("div",{staticClass:"col-sm-1"},[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticStyle:{cursor:"pointer"},attrs:{title:"Remove Row"},on:{click:function(t){return e.remove(i)}}},[a("i",{staticClass:"fa fa-times fa-2x"})])]):e._e()])}))],2):e._e(),e._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(" "+e._s(e.__("save")))]),e._v(" "),a("button",{staticClass:"btn btn-secondary",attrs:{type:"reset"}},[e._v(e._s(e.__("clear")))])])])])])]),e._v(" "),a("div",{staticClass:"col-6 col-md-6 order-md-1 order-last map_view_desktop"},[a("div",{staticClass:"card h-100"},[a("div",{staticClass:"card-header"},[a("h4",[e._v(e._s(e.__("map_view")))])]),e._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"offset-3 mt-1"},[a("button",{staticClass:"badge bg-primary",attrs:{type:"button",id:"remove-line"}},[e._v(e._s(e.__("remove_newly_added_line")))]),e._v(" "),a("button",{staticClass:"badge bg-danger",attrs:{type:"button",id:"clear-line"}},[e._v(e._s(e.__("clear_map")))]),e._v(" "),a("button",{staticClass:"badge bg-success",attrs:{type:"button",id:"add-line"}},[e._v(e._s(e.__("restore_old_map")))])]),e._v(" "),a("div",{staticStyle:{position:"relative",overflow:"hidden"},attrs:{id:"map"}},[a("GmapMap",{ref:"mapRef",staticStyle:{width:"100%",height:"700px","margin-top":"5px"},attrs:{zoom:13,center:e.center,mapTypeControl:!0,drawingControl:!0}},[e._l(e.markers,(function(t,i){return a("GmapMarker",{key:i,attrs:{position:e.google&&t.position,clickable:!0,draggable:!0},on:{click:function(a){e.center=t.position}}})})),e._v(" "),a("gmap-info-window",{attrs:{options:{maxWidth:300,pixelOffset:{width:0,height:-35}},position:e.infoWindow.position,opened:e.infoWindow.open},on:{closeclick:function(t){e.infoWindow.open=!1}}},[a("div",{domProps:{innerHTML:e._s(e.infoWindow.template)}})])],2)],1),e._v(" "),e.city.formatted_address?a("div",[a("span",{staticClass:"title font-weight-bolder"},[e._v(e._s(e.city.formatted_address))])]):e._e(),e._v(" "),a("div",{staticClass:"form-group d-none"},[a("label",{staticClass:"control-label",attrs:{for:"vertices"}},[e._v(e._s(e.__("boundary_points"))),a("span",{staticClass:"text-danger text-xs"},[e._v("*")])]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.vertices,expression:"vertices"}],staticClass:"form-control",attrs:{name:"vertices",id:"vertices",placeholder:e.__("here_longitude"),cols:"10",rows:"2"},domProps:{value:e.vertices},on:{input:function(t){t.target.composing||(e.vertices=t.target.value)}}})])])])])])])])}),[],!1,null,null,null).exports}}]);