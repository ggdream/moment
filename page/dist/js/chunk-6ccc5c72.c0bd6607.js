(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6ccc5c72"],{"26b7":function(t,e,i){},3408:function(t,e,i){},"36a7":function(t,e,i){},"5e23":function(t,e,i){},"8a79":function(t,e,i){"use strict";var s,r=i("23e7"),n=i("06cf").f,a=i("50c4"),o=i("5a34"),c=i("1d80"),l=i("ab13"),h=i("c430"),d="".endsWith,u=Math.min,p=l("endsWith");r({target:"String",proto:!0,forced:!(!h&&!p&&(s=n(String.prototype,"endsWith"),s&&!s.writable))&&!p},{endsWith:function(t){var e=String(c(this));o(t);var i=arguments.length>1?arguments[1]:void 0,s=a(e.length),r=void 0===i?s:u(a(i),s),n=String(t);return d?d.call(e,n,r):e.slice(r-n.length,r)===n}})},"8b0d":function(t,e,i){},"8efc":function(t,e,i){},adda:function(t,e,i){"use strict";var s=i("53ca"),r=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("8efc"),i("90a2")),n=(i("36a7"),i("24b2")),a=i("58df"),o=Object(a.a)(n.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=i("7560"),l=i("d9f7"),h=i("d9bd"),d="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(a.a)(o,c.a).extend({name:"v-img",directives:{intersect:r.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(s.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(h.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var r=t.naturalHeight,n=t.naturalWidth;r||n?(e.naturalWidth=n,e.calculatedAspectRatio=n/r):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(s,i)};s()},genContent:function(){var t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t),i=Object(l.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},b3d7:function(t,e,i){"use strict";i.r(e);var s=i("1da1"),r=(i("96cf"),i("2b0e")),n=r.a.extend({name:"NavBar",data:function(){return{src:""}},props:{url:{type:String,default:""}},watch:{url:{handler:function(t){this.src=t}}}}),a=i("2877"),o=i("6544"),c=i.n(o),l=i("5530"),h=(i("c7cd"),i("a9e3"),i("8b0d"),i("3835")),d=(i("0481"),i("5e23"),i("8dd9")),u=i("adda"),p=i("80d2"),f=i("d9bd"),m=d.a.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(l.a)(Object(l.a)({},d.a.options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(l.a)(Object(l.a)({},this.measurableStyles),{},{height:Object(p.f)(this.computedHeight)})}},created:function(){var t=this;[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]].forEach((function(e){var i=Object(h.a)(e,2),s=i[0],r=i[1];t.$attrs.hasOwnProperty(s)&&Object(f.a)(s,r,t)}))},methods:{genBackground:function(){var t={height:Object(p.f)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(u.a,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(p.f)(this.computedContentHeight)}},Object(p.l)(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(p.f)(this.extensionHeight)}},Object(p.l)(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}}),g=i("53ca"),v={inserted:function(t,e){var i=(e.modifiers||{}).self,s=void 0!==i&&i,r=e.value,n="object"===Object(g.a)(r)&&r.options||{passive:!0},a="function"==typeof r||"handleEvent"in r?r:r.handler,o=s?t:e.arg?document.querySelector(e.arg):window;o&&(o.addEventListener("scroll",a,n),t._onScroll={handler:a,options:n,target:s?void 0:o})},unbind:function(t){if(t._onScroll){var e=t._onScroll,i=e.handler,s=e.options,r=e.target;(void 0===r?t:r).removeEventListener("scroll",i,s),delete t._onScroll}}},S=v,b=i("fe6c"),y=i("58df"),O=r.a.extend({name:"scrollable",directives:{Scroll:v},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!=typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(f.c)("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),_=i("d10f"),x=i("f2e7"),j=Object(y.a)(m,O,_.a,x.a,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(y.a)(Object(b.b)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])).extend({name:"v-app-bar",directives:{Scroll:S},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return O.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(l.a)(Object(l.a)({},m.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return m.options.computed.computedContentHeight.call(this);var t=this.dense?48:56;return t+(this.computedOriginalHeight-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent)return 1.25+.25*this.scrollRatio},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=m.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:m.options.computed.isCollapsed.call(this)},isProminent:function(){return m.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(l.a)(Object(l.a)({},m.options.computed.styles.call(this)),{},{fontSize:Object(p.f)(this.computedFontSize,"rem"),marginTop:Object(p.f)(this.computedMarginTop),transform:"translateY(".concat(Object(p.f)(this.computedTransform),")"),left:Object(p.f)(this.computedLeft),right:Object(p.f)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=m.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=m.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),C=(i("3408"),i("a9ad")),B=i("24b2"),$=i("a236"),w=Object(y.a)(C.a,B.a,$.a).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(l.a)({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(l.a)({height:Object(p.f)(this.size),minWidth:Object(p.f)(this.size),width:Object(p.f)(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),E=i("8336"),T=i("2fa4"),A=Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar"},[e("v-app-bar",{attrs:{app:"",dark:""}},[e("v-spacer"),e("v-btn",{staticClass:"mr-2",attrs:{href:"https://github.com/ggdream/moment",target:"_blank"}},[e("span",[this._v("回家")])]),e("v-btn",{attrs:{to:"/record"}},[e("span",[this._v("瞬间")])]),e("v-avatar",{staticClass:"ml-8"},[e("img",{attrs:{src:this.src,alt:""}})])],1)],1)}),[],!1,null,null,null),R=A.exports;c()(A,{VAppBar:j,VAvatar:w,VBtn:E.a,VSpacer:T.a});var z=r.a.extend({name:"ImageBox",props:{url:{type:String,required:!0}}}),k=(i("e66a"),Object(a.a)(z,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"imagebox",style:{background:"url("+this.url+")"}})}),[],!1,null,"3cd1fe9e",null).exports),H=i("3d2a"),L=r.a.extend({name:"UiPlay",components:{ImageBox:k},data:function(){return{baseURL:H.a.baseURL}},props:{data:{type:Array,default:function(){return[]}}}}),I=Object(a.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"play"},this._l(this.data,(function(t){return e("div",{key:t,staticClass:"iter"},[e("image-box",{attrs:{url:t}})],1)})),0)}),[],!1,null,null,null).exports,P=r.a.extend({name:"Home",components:{NavBar:R,UiPlay:I},data:function(){return{data:{}}},created:function(){this.getMetaInfo()},methods:{getMetaInfo:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.getMetaInfo();case 2:if(0===(i=e.sent).code){e.next=5;break}return e.abrupt("return");case 5:t.data=i.data;case 6:case"end":return e.stop()}}),e)})))()}}}),U=Object(a.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("nav-bar",{attrs:{url:this.data.avatar}}),e("ui-play",{attrs:{data:this.data.show}})],1)}),[],!1,null,null,null);e.default=U.exports},e66a:function(t,e,i){"use strict";i("26b7")}}]);