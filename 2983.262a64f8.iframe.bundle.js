"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2983],{"./node_modules/d3-color/src/color.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B8:()=>rgb,Il:()=>Color,SU:()=>rgbConvert,Ss:()=>Rgb,ZP:()=>color});var _define_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-color/src/define.js");function Color(){}var brighter=1/.7,reI="\\s*([+-]?\\d+)\\s*",reN="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",reP="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",reHex=/^#([0-9a-f]{3,8})$/,reRgbInteger=new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),reRgbPercent=new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),reRgbaInteger=new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),reRgbaPercent=new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),reHslPercent=new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),reHslaPercent=new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`),named={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function color_formatHex(){return this.rgb().formatHex()}function color_formatRgb(){return this.rgb().formatRgb()}function color(format){var m,l;return format=(format+"").trim().toLowerCase(),(m=reHex.exec(format))?(l=m[1].length,m=parseInt(m[1],16),6===l?rgbn(m):3===l?new Rgb(m>>8&15|m>>4&240,m>>4&15|240&m,(15&m)<<4|15&m,1):8===l?rgba(m>>24&255,m>>16&255,m>>8&255,(255&m)/255):4===l?rgba(m>>12&15|m>>8&240,m>>8&15|m>>4&240,m>>4&15|240&m,((15&m)<<4|15&m)/255):null):(m=reRgbInteger.exec(format))?new Rgb(m[1],m[2],m[3],1):(m=reRgbPercent.exec(format))?new Rgb(255*m[1]/100,255*m[2]/100,255*m[3]/100,1):(m=reRgbaInteger.exec(format))?rgba(m[1],m[2],m[3],m[4]):(m=reRgbaPercent.exec(format))?rgba(255*m[1]/100,255*m[2]/100,255*m[3]/100,m[4]):(m=reHslPercent.exec(format))?hsla(m[1],m[2]/100,m[3]/100,1):(m=reHslaPercent.exec(format))?hsla(m[1],m[2]/100,m[3]/100,m[4]):named.hasOwnProperty(format)?rgbn(named[format]):"transparent"===format?new Rgb(NaN,NaN,NaN,0):null}function rgbn(n){return new Rgb(n>>16&255,n>>8&255,255&n,1)}function rgba(r,g,b,a){return a<=0&&(r=g=b=NaN),new Rgb(r,g,b,a)}function rgbConvert(o){return o instanceof Color||(o=color(o)),o?new Rgb((o=o.rgb()).r,o.g,o.b,o.opacity):new Rgb}function rgb(r,g,b,opacity){return 1===arguments.length?rgbConvert(r):new Rgb(r,g,b,null==opacity?1:opacity)}function Rgb(r,g,b,opacity){this.r=+r,this.g=+g,this.b=+b,this.opacity=+opacity}function rgb_formatHex(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}`}function rgb_formatRgb(){const a=clampa(this.opacity);return`${1===a?"rgb(":"rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${1===a?")":`, ${a})`}`}function clampa(opacity){return isNaN(opacity)?1:Math.max(0,Math.min(1,opacity))}function clampi(value){return Math.max(0,Math.min(255,Math.round(value)||0))}function hex(value){return((value=clampi(value))<16?"0":"")+value.toString(16)}function hsla(h,s,l,a){return a<=0?h=s=l=NaN:l<=0||l>=1?h=s=NaN:s<=0&&(h=NaN),new Hsl(h,s,l,a)}function hslConvert(o){if(o instanceof Hsl)return new Hsl(o.h,o.s,o.l,o.opacity);if(o instanceof Color||(o=color(o)),!o)return new Hsl;if(o instanceof Hsl)return o;var r=(o=o.rgb()).r/255,g=o.g/255,b=o.b/255,min=Math.min(r,g,b),max=Math.max(r,g,b),h=NaN,s=max-min,l=(max+min)/2;return s?(h=r===max?(g-b)/s+6*(g<b):g===max?(b-r)/s+2:(r-g)/s+4,s/=l<.5?max+min:2-max-min,h*=60):s=l>0&&l<1?0:h,new Hsl(h,s,l,o.opacity)}function Hsl(h,s,l,opacity){this.h=+h,this.s=+s,this.l=+l,this.opacity=+opacity}function clamph(value){return(value=(value||0)%360)<0?value+360:value}function clampt(value){return Math.max(0,Math.min(1,value||0))}function hsl2rgb(h,m1,m2){return 255*(h<60?m1+(m2-m1)*h/60:h<180?m2:h<240?m1+(m2-m1)*(240-h)/60:m1)}(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.Z)(Color,color,{copy(channels){return Object.assign(new this.constructor,this,channels)},displayable(){return this.rgb().displayable()},hex:color_formatHex,formatHex:color_formatHex,formatHex8:function color_formatHex8(){return this.rgb().formatHex8()},formatHsl:function color_formatHsl(){return hslConvert(this).formatHsl()},formatRgb:color_formatRgb,toString:color_formatRgb}),(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.Z)(Rgb,rgb,(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.l)(Color,{brighter(k){return k=null==k?brighter:Math.pow(brighter,k),new Rgb(this.r*k,this.g*k,this.b*k,this.opacity)},darker(k){return k=null==k?.7:Math.pow(.7,k),new Rgb(this.r*k,this.g*k,this.b*k,this.opacity)},rgb(){return this},clamp(){return new Rgb(clampi(this.r),clampi(this.g),clampi(this.b),clampa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:rgb_formatHex,formatHex:rgb_formatHex,formatHex8:function rgb_formatHex8(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:rgb_formatRgb,toString:rgb_formatRgb})),(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.Z)(Hsl,(function hsl(h,s,l,opacity){return 1===arguments.length?hslConvert(h):new Hsl(h,s,l,null==opacity?1:opacity)}),(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.l)(Color,{brighter(k){return k=null==k?brighter:Math.pow(brighter,k),new Hsl(this.h,this.s,this.l*k,this.opacity)},darker(k){return k=null==k?.7:Math.pow(.7,k),new Hsl(this.h,this.s,this.l*k,this.opacity)},rgb(){var h=this.h%360+360*(this.h<0),s=isNaN(h)||isNaN(this.s)?0:this.s,l=this.l,m2=l+(l<.5?l:1-l)*s,m1=2*l-m2;return new Rgb(hsl2rgb(h>=240?h-240:h+120,m1,m2),hsl2rgb(h,m1,m2),hsl2rgb(h<120?h+240:h-120,m1,m2),this.opacity)},clamp(){return new Hsl(clamph(this.h),clampt(this.s),clampt(this.l),clampa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const a=clampa(this.opacity);return`${1===a?"hsl(":"hsla("}${clamph(this.h)}, ${100*clampt(this.s)}%, ${100*clampt(this.l)}%${1===a?")":`, ${a})`}`}}))},"./node_modules/d3-color/src/define.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function __WEBPACK_DEFAULT_EXPORT__(constructor,factory,prototype){constructor.prototype=factory.prototype=prototype,prototype.constructor=constructor}function extend(parent,definition){var prototype=Object.create(parent.prototype);for(var key in definition)prototype[key]=definition[key];return prototype}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,l:()=>extend})},"./node_modules/d3-interpolate/src/color.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>nogamma,yi:()=>gamma});var _constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-interpolate/src/constant.js");function linear(a,d){return function(t){return a+t*d}}function gamma(y){return 1==(y=+y)?nogamma:function(a,b){return b-a?function exponential(a,b,y){return a=Math.pow(a,y),b=Math.pow(b,y)-a,y=1/y,function(t){return Math.pow(a+t*b,y)}}(a,b,y):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(isNaN(a)?b:a)}}function nogamma(a,b){var d=b-a;return d?linear(a,d):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(isNaN(a)?b:a)}},"./node_modules/d3-interpolate/src/constant.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=x=>()=>x},"./node_modules/d3-interpolate/src/rgb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>rgb,hD:()=>rgbBasis});var src_color=__webpack_require__("./node_modules/d3-color/src/color.js");function basis(t1,v0,v1,v2,v3){var t2=t1*t1,t3=t2*t1;return((1-3*t1+3*t2-t3)*v0+(4-6*t2+3*t3)*v1+(1+3*t1+3*t2-3*t3)*v2+t3*v3)/6}var d3_interpolate_src_color=__webpack_require__("./node_modules/d3-interpolate/src/color.js");const rgb=function rgbGamma(y){var color=(0,d3_interpolate_src_color.yi)(y);function rgb(start,end){var r=color((start=(0,src_color.B8)(start)).r,(end=(0,src_color.B8)(end)).r),g=color(start.g,end.g),b=color(start.b,end.b),opacity=(0,d3_interpolate_src_color.ZP)(start.opacity,end.opacity);return function(t){return start.r=r(t),start.g=g(t),start.b=b(t),start.opacity=opacity(t),start+""}}return rgb.gamma=rgbGamma,rgb}(1);function rgbSpline(spline){return function(colors){var i,color,n=colors.length,r=new Array(n),g=new Array(n),b=new Array(n);for(i=0;i<n;++i)color=(0,src_color.B8)(colors[i]),r[i]=color.r||0,g[i]=color.g||0,b[i]=color.b||0;return r=spline(r),g=spline(g),b=spline(b),color.opacity=1,function(t){return color.r=r(t),color.g=g(t),color.b=b(t),color+""}}}var rgbBasis=rgbSpline((function src_basis(values){var n=values.length-1;return function(t){var i=t<=0?t=0:t>=1?(t=1,n-1):Math.floor(t*n),v1=values[i],v2=values[i+1],v0=i>0?values[i-1]:2*v1-v2,v3=i<n-1?values[i+2]:2*v2-v1;return basis((t-i/n)*n,v0,v1,v2,v3)}}));rgbSpline((function basisClosed(values){var n=values.length;return function(t){var i=Math.floor(((t%=1)<0?++t:t)*n),v0=values[(i+n-1)%n],v1=values[i%n],v2=values[(i+1)%n],v3=values[(i+2)%n];return basis((t-i/n)*n,v0,v1,v2,v3)}}))},"./node_modules/d3-scale-chromatic/src/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function __WEBPACK_DEFAULT_EXPORT__(specifier){for(var n=specifier.length/6|0,colors=new Array(n),i=0;i<n;)colors[i]="#"+specifier.slice(6*i,6*++i);return colors}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})},"./node_modules/d3-scale-chromatic/src/diverging/BrBG.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-scale-chromatic/src/colors.js"),_ramp_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-scale-chromatic/src/ramp.js"),scheme=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(_colors_js__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=(0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__.Z)(scheme)},"./node_modules/d3-scale-chromatic/src/ramp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-interpolate/src/rgb.js");const __WEBPACK_DEFAULT_EXPORT__=scheme=>(0,d3_interpolate__WEBPACK_IMPORTED_MODULE_0__.hD)(scheme[scheme.length-1])},"./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-scale-chromatic/src/colors.js"),_ramp_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-scale-chromatic/src/ramp.js"),scheme=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(_colors_js__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=(0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__.Z)(scheme)},"./node_modules/framer-motion/dist/es/animation/animate.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>animate});var _index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/index.mjs"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function animate(from,to,transition={}){const value=(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(from)?from:(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(from);return value.start((0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Z)("",value,to,transition)),{stop:()=>value.stop(),isAnimating:()=>value.isAnimating()}}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/framer-motion/dist/es/utils/process.mjs"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs"),warn_once=__webpack_require__("./node_modules/framer-motion/dist/es/utils/warn-once.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{exitBeforeEnter&&(mode="wait",(0,warn_once.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[forceRender]=function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Z_.postRender(forceRender)),[forceRender]),forcedRenderCount]}();const forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);const isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exiting=new Set,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),(0,use_unmount_effect.z)((()=>{isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return"wait"===mode&&exiting.size&&(childrenToRender=[]),exiting.forEach((key=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:()=>{allChildren.delete(key),exiting.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout,mode},child))})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),"production"!==process.O&&"wait"===mode&&childrenToRender.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);