(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2a9da9f4"],{"149c":function(t,e,n){"use strict";n("2158")},2158:function(t,e,n){},"24b2":function(t,e,n){"use strict";n("a9e3");var a=n("80d2"),i=n("2b0e");e.a=i.a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(a.f)(this.height),n=Object(a.f)(this.minHeight),i=Object(a.f)(this.minWidth),s=Object(a.f)(this.maxHeight),r=Object(a.f)(this.maxWidth),o=Object(a.f)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),i&&(t.minWidth=i),s&&(t.maxHeight=s),r&&(t.maxWidth=r),o&&(t.width=o),t}}})},"25a8":function(t,e,n){},"2db4":function(t,e,n){"use strict";var a=n("ade3"),i=(n("a9e3"),n("caad"),n("ca71"),n("8dd9")),s=n("a9ad"),r=n("7560"),o=n("f2e7"),c=n("fe6c"),u=n("58df"),l=n("80d2"),h=n("d9bd");e.a=Object(u.a)(i.a,s.a,o.a,Object(c.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:r.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,a=t.footer,i=t.insetFooter,s=t.left,r=t.right,o=t.top;return{paddingBottom:Object(l.f)(n+a+i),paddingLeft:this.app?Object(l.f)(s):void 0,paddingRight:this.app?Object(l.f)(r):void 0,paddingTop:Object(l.f)(e+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(h.e)("auto-height",this),0==this.timeout&&Object(h.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l.l)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(a.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(l.l)(this)])},genWrapper:function(){var t=this,e=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:i.a.options.computed.classes.call(this),style:i.a.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"7e2b":function(t,e,n){"use strict";var a=n("2b0e");function i(t){return function(e,n){for(var a in n)Object.prototype.hasOwnProperty.call(e,a)||this.$delete(this.$data[t],a);for(var i in e)this.$set(this.$data[t],i,e[i])}}e.a=a.a.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",i("attrs$"),{immediate:!0}),this.$watch("$listeners",i("listeners$"),{immediate:!0})}})},"8dd9":function(t,e,n){"use strict";var a=n("5530"),i=(n("25a8"),n("7e2b")),s=n("a9ad"),r=n("c995"),o=n("24b2"),c=n("a236"),u=n("7560"),l=n("58df");e.a=Object(l.a)(i.a,s.a,r.a,o.a,c.a,u.a).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return Object(a.a)(Object(a.a)(Object(a.a)({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},a236:function(t,e,n){"use strict";var a=n("ade3"),i=n("b85c"),s=(n("ac1f"),n("1276"),n("a15b"),n("2b0e"));e.a=s.a.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],e="string"==typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"==typeof e){var n,s=e.split(" "),r=Object(i.a)(s);try{for(r.s();!(n=r.n()).done;){var o=n.value;t.push("rounded-".concat(o))}}catch(t){r.e(t)}finally{r.f()}}else e&&t.push("rounded");return t.length>0?Object(a.a)({},t.join(" "),!0):{}}}})},a93e:function(t,e,n){"use strict";n.r(e);var a=n("1da1"),i=(n("96cf"),n("2b0e").a.extend({name:"Show",data:function(){return{content:"",snackbar:!1}},created:function(){this.reqText()},methods:{reqText:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$route.query.v,!Array.isArray(n)){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,t.$http.getText(n);case 6:if(0===(a=e.sent).code){e.next=10;break}throw"发生了错误";case 10:t.content=a.data,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),t.snackbar=!0;case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))()}}})),s=(n("149c"),n("2877")),r=n("6544"),o=n.n(r),c=n("2db4"),u=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show"},[n("div",{staticClass:"main",domProps:{innerHTML:t._s(t.formatWord(t.content))}}),n("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(){return[n("span",[t._v("😳")])]},proxy:!0}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" 糟糕，服务器开小差啦~~ ")])],1)}),[],!1,null,"e2c71cb4",null);e.default=u.exports,o()(u,{VSnackbar:c.a})},a9ad:function(t,e,n){"use strict";var a=n("3835"),i=n("ade3"),s=n("5530"),r=(n("ac1f"),n("1276"),n("498a"),n("d3b7"),n("25f0"),n("2b0e")),o=n("d9bd"),c=n("7bc6");e.a=r.a.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e.style?(Object(o.b)("style must be an object",this),e):"string"==typeof e.class?(Object(o.b)("class must be an object",this),e):(Object(c.d)(t)?e.style=Object(s.a)(Object(s.a)({},e.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(e.class=Object(s.a)(Object(s.a)({},e.class),{},Object(i.a)({},t,!0))),e)},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof e.style)return Object(o.b)("style must be an object",this),e;if("string"==typeof e.class)return Object(o.b)("class must be an object",this),e;if(Object(c.d)(t))e.style=Object(s.a)(Object(s.a)({},e.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var n=t.toString().trim().split(" ",2),r=Object(a.a)(n,2),u=r[0],l=r[1];e.class=Object(s.a)(Object(s.a)({},e.class),{},Object(i.a)({},u+"--text",!0)),l&&(e.class["text--"+l]=!0)}return e}}})},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");var a=n("06c5");function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(a.a)(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,s=function(){};return{s:s,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw r}}}}},c995:function(t,e,n){"use strict";var a=n("ade3"),i=(n("a9e3"),n("2b0e"));e.a=i.a.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:Object(a.a)({},"elevation-".concat(this.elevation),!0)}}})},ca71:function(t,e,n){},f2e7:function(t,e,n){"use strict";n.d(e,"b",(function(){return s}));var a=n("ade3"),i=n("2b0e");function s(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return i.a.extend({name:"toggleable",model:{prop:e,event:n},props:Object(a.a)({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(a.a)(t,e,(function(t){this.isActive=!!t})),Object(a.a)(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(n,t)})),t)})}var r=s();e.a=r},fe6c:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));var a=n("2b0e"),i=n("80d2"),s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a.a.extend({name:"positionable",props:t.length?Object(i.i)(s,t):s})}e.a=r()}}]);