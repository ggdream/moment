(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a2d0d3e"],{"26b7":function(t,e,i){},3408:function(t,e,i){},"5e23":function(t,e,i){},"8b0d":function(t,e,i){},b3d7:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("nav-bar",{attrs:{url:t.data.avatar}}),i("ui-play",{attrs:{data:t.data.show}})],1)},o=[],n=i("1da1"),s=(i("96cf"),i("2b0e")),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar"},[i("v-app-bar",{attrs:{app:"",dark:""}},[i("v-spacer"),i("v-btn",{staticClass:"mr-2",attrs:{href:"https://github.com/ggdream/moment",target:"_blank"}},[i("span",[t._v("回家")])]),i("v-btn",{attrs:{to:"/record"}},[i("span",[t._v("瞬间")])]),i("v-avatar",{staticClass:"ml-8"},[i("img",{attrs:{src:t.src,alt:""}})])],1)],1)},l=[],c=s["a"].extend({name:"NavBar",data:function(){return{src:""}},props:{url:{type:String,default:""}},watch:{url:{handler:function(t){this.src=t}}}}),h=c,d=i("2877"),p=i("6544"),u=i.n(p),f=i("5530"),v=(i("c7cd"),i("a9e3"),i("8b0d"),i("3835")),m=(i("0481"),i("5e23"),i("8dd9")),g=i("adda"),b=i("80d2"),S=i("d9bd"),O=m["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(f["a"])(Object(f["a"])({},m["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(f["a"])(Object(f["a"])({},this.measurableStyles),{},{height:Object(b["d"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(v["a"])(e,2),r=i[0],o=i[1];t.$attrs.hasOwnProperty(r)&&Object(S["a"])(r,o,t)}))},methods:{genBackground:function(){var t={height:Object(b["d"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(g["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(b["d"])(this.computedContentHeight)}},Object(b["i"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(b["d"])(this.extensionHeight)}},Object(b["i"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}}),y=i("53ca");function x(t,e){var i=e.modifiers||{},r=i.self,o=void 0!==r&&r,n=e.value,s="object"===Object(y["a"])(n)&&n.options||{passive:!0},a="function"===typeof n||"handleEvent"in n?n:n.handler,l=o?t:e.arg?document.querySelector(e.arg):window;l&&(l.addEventListener("scroll",a,s),t._onScroll={handler:a,options:s,target:o?void 0:l})}function j(t){if(t._onScroll){var e=t._onScroll,i=e.handler,r=e.options,o=e.target,n=void 0===o?t:o;n.removeEventListener("scroll",i,r),delete t._onScroll}}var B={inserted:x,unbind:j},T=B,w=i("fe6c"),C=i("58df");function $(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(C["a"])(Object(w["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}var _=s["a"].extend({name:"scrollable",directives:{Scroll:B},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(S["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),E=i("d10f"),k=i("f2e7"),A=Object(C["a"])(O,_,E["a"],k["a"],$("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),H=A.extend({name:"v-app-bar",directives:{Scroll:T},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return _.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(f["a"])(Object(f["a"])({},O.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return O.options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=O.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:O.options.computed.isCollapsed.call(this)},isProminent:function(){return O.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(f["a"])(Object(f["a"])({},O.options.computed.styles.call(this)),{},{fontSize:Object(b["d"])(this.computedFontSize,"rem"),marginTop:Object(b["d"])(this.computedMarginTop),transform:"translateY(".concat(Object(b["d"])(this.computedTransform),")"),left:Object(b["d"])(this.computedLeft),right:Object(b["d"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=O.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=O.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),P=(i("3408"),i("a9ad")),U=i("24b2"),R=i("a236"),I=Object(C["a"])(P["a"],U["a"],R["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(f["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(f["a"])({height:Object(b["d"])(this.size),minWidth:Object(b["d"])(this.size),width:Object(b["d"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),L=i("8336"),M=i("2fa4"),N=Object(d["a"])(h,a,l,!1,null,null,null),z=N.exports;u()(N,{VAppBar:H,VAvatar:I,VBtn:L["a"],VSpacer:M["a"]});var V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"play"},t._l(t.data,(function(t){return i("div",{key:t,staticClass:"iter"},[i("image-box",{attrs:{url:t}})],1)})),0)},q=[],F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"imagebox",style:{background:"url("+t.url+")"}})},J=[],Y=s["a"].extend({name:"ImageBox",props:{url:{type:String,required:!0}}}),D=Y,W=(i("e66a"),Object(d["a"])(D,F,J,!1,null,"3cd1fe9e",null)),G=W.exports,K=i("3d2a"),Q=s["a"].extend({name:"UiPlay",components:{ImageBox:G},data:function(){return{baseURL:K["a"].baseURL}},props:{data:{type:Array,default:function(){return[]}}}}),X=Q,Z=Object(d["a"])(X,V,q,!1,null,null,null),tt=Z.exports,et=s["a"].extend({name:"Home",components:{NavBar:z,UiPlay:tt},data:function(){return{data:{}}},created:function(){this.getMetaInfo()},methods:{getMetaInfo:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.getMetaInfo();case 2:if(i=e.sent,0===i.code){e.next=5;break}return e.abrupt("return");case 5:t.data=i.data;case 6:case"end":return e.stop()}}),e)})))()}}}),it=et,rt=Object(d["a"])(it,r,o,!1,null,null,null);e["default"]=rt.exports},e66a:function(t,e,i){"use strict";i("26b7")}}]);
//# sourceMappingURL=chunk-2a2d0d3e.316cb6bf.js.map