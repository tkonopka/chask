"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2934,7599,939,3392,5912,7231,3289,1435,5973,2113,2460,7382,1844,9579,204,9594,749,8176,5063,8954],{"./packages/annotation/stories/misc/Stripe.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BandWithShift:()=>BandWithShift,BandWithoutShift:()=>BandWithoutShift,Expansion:()=>Expansion,Units:()=>Units,X:()=>X,Y:()=>Y,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Stripe_stories});var react=__webpack_require__("./node_modules/react/index.js"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_excluded=["variant","domain","domainUnits","expansion","shift","shiftUnit","component"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Stripe=function Stripe(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"x":_ref$variant,domain=_ref.domain,_ref$domainUnits=_ref.domainUnits,domainUnits=void 0===_ref$domainUnits?"view":_ref$domainUnits,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?[0,0]:_ref$expansion,_ref$shift=_ref.shift,shift=void 0===_ref$shift?[0,0]:_ref$shift,_ref$shiftUnit=_ref.shiftUnit,shiftUnit=void 0===_ref$shiftUnit?"step":_ref$shiftUnit,_ref$component=_ref.component,component=void 0===_ref$component?chsk_core_es.AeJ:_ref$component,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),scales=(0,chsk_core_es.kE1)().scales,size=(0,chsk_core_es.Bs9)().size,isX="x"===variant,scale=isX?scales.x:scales.y,shiftMultiplier="step"===shiftUnit?scale.step():scale.bandwidth(),units=(0,chsk_core_es.OYb)(domainUnits),coordinates=[(0,chsk_core_es.Oc9)(domain[0],units[0],isX?size[chsk_core_es.X]:size[chsk_core_es.Y],scale)+shift[0]*shiftMultiplier,(0,chsk_core_es.Oc9)(domain[1],units[1],isX?size[chsk_core_es.X]:size[chsk_core_es.Y],scale)+shift[1]*shiftMultiplier],_numberPair=(0,chsk_core_es.Ryh)(expansion),e1=_numberPair[0],e2=_numberPair[1],rectProps=isX?{x:coordinates[0],width:coordinates[1]-coordinates[0],y:-e1,height:size[chsk_core_es.Y]+e1+e2}:{x:-e1,width:size[chsk_core_es.X]+e1+e2,y:coordinates[0],height:coordinates[1]-coordinates[0]};return(0,react.createElement)(component,_extends({variant:"stripe"},rectProps,props))};try{Stripe.displayName="Stripe",Stripe.__docgenInfo={description:"",displayName:"Stripe",props:{variant:{defaultValue:{value:"x"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'}]}},domain:{defaultValue:null,description:"domain interval",name:"domain",required:!0,type:{name:"PositionSpec"}},domainUnits:{defaultValue:{value:"view"},description:"units for domain",name:"domainUnits",required:!1,type:{name:"PositionUnits"}},shift:{defaultValue:{value:"[0, 0]"},description:"shifts for domain boundaries",name:"shift",required:!1,type:{name:"NumericPositionSpec"}},component:{defaultValue:null,description:"component used to draw individual stripes",name:"component",required:!1,type:{name:"FC<RectangleProps>"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},expansion:{defaultValue:{value:"[0, 0]"},description:"expansion of lines at the start and end of the scale",name:"expansion",required:!1,type:{name:"number | TwoSideSizeSpec"}},shiftUnit:{defaultValue:{value:"step"},description:"unit for shift values",name:"shiftUnit",required:!1,type:{name:"enum",value:[{value:'"band"'},{value:'"step"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/misc/Stripe.tsx#Stripe"]={docgenInfo:Stripe.__docgenInfo,name:"Stripe",path:"packages/annotation/src/misc/Stripe.tsx#Stripe"})}catch(__react_docgen_typescript_loader_error){}var _X$parameters,_X$parameters2,_X$parameters2$docs,_Y$parameters,_Y$parameters2,_Y$parameters2$docs,_Units$parameters,_Units$parameters2,_Units$parameters2$do,_Expansion$parameters,_Expansion$parameters2,_Expansion$parameters3,_BandWithoutShift$par,_BandWithoutShift$par2,_BandWithoutShift$par3,_BandWithShift$parame,_BandWithShift$parame2,_BandWithShift$parame3,decorators=__webpack_require__("./packages/annotation/stories/decorators.tsx");function Stripe_stories_extends(){return Stripe_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Stripe_stories_extends.apply(this,arguments)}const Stripe_stories={title:"Addons/Annotation/Misc/Stripe",component:Stripe};var X={name:"x",args:{variant:"x",domain:[20,60],style:{fill:"#ffdddd"}},decorators:[decorators.cK]},Y={name:"y",args:{variant:"y",domain:[20,60],style:{fill:"#ffdddd"}},decorators:[decorators.cK]},Units={name:"units",args:{variant:"x",domain:[0,.5],domainUnits:"relative",style:{fill:"#ffdddd"}},decorators:[decorators.cK]},Expansion={name:"expansion",args:{variant:"y",domain:[25,75],expansion:[30,20],style:{fill:"#ffdddd"}},decorators:[decorators.cK]},BandWithoutShift={name:"band without shift",args:{variant:"x",domain:["C","E"],style:{fill:"#ffdddd"}},decorators:[decorators.VK]},BandWithShift={name:"band with shift",args:{variant:"x",domain:["C","E"],shift:[-.5,.5],style:{fill:"#ffdddd"}},decorators:[decorators.VK]};X.parameters=Stripe_stories_extends({},X.parameters,{docs:Stripe_stories_extends({},null==(_X$parameters=X.parameters)?void 0:_X$parameters.docs,{source:Stripe_stories_extends({originalSource:"{\n  name: 'x',\n  args: {\n    variant: 'x',\n    domain: [20, 60],\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartLinearViewDecorator]\n}"},null==(_X$parameters2=X.parameters)||null==(_X$parameters2$docs=_X$parameters2.docs)?void 0:_X$parameters2$docs.source)})}),Y.parameters=Stripe_stories_extends({},Y.parameters,{docs:Stripe_stories_extends({},null==(_Y$parameters=Y.parameters)?void 0:_Y$parameters.docs,{source:Stripe_stories_extends({originalSource:"{\n  name: 'y',\n  args: {\n    variant: 'y',\n    domain: [20, 60],\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartLinearViewDecorator]\n}"},null==(_Y$parameters2=Y.parameters)||null==(_Y$parameters2$docs=_Y$parameters2.docs)?void 0:_Y$parameters2$docs.source)})}),Units.parameters=Stripe_stories_extends({},Units.parameters,{docs:Stripe_stories_extends({},null==(_Units$parameters=Units.parameters)?void 0:_Units$parameters.docs,{source:Stripe_stories_extends({originalSource:"{\n  name: 'units',\n  args: {\n    variant: 'x',\n    domain: [0, 0.5],\n    domainUnits: 'relative',\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartLinearViewDecorator]\n}"},null==(_Units$parameters2=Units.parameters)||null==(_Units$parameters2$do=_Units$parameters2.docs)?void 0:_Units$parameters2$do.source)})}),Expansion.parameters=Stripe_stories_extends({},Expansion.parameters,{docs:Stripe_stories_extends({},null==(_Expansion$parameters=Expansion.parameters)?void 0:_Expansion$parameters.docs,{source:Stripe_stories_extends({originalSource:"{\n  name: 'expansion',\n  args: {\n    variant: 'y',\n    domain: [25, 75],\n    expansion: [30, 20],\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartLinearViewDecorator]\n}"},null==(_Expansion$parameters2=Expansion.parameters)||null==(_Expansion$parameters3=_Expansion$parameters2.docs)?void 0:_Expansion$parameters3.source)})}),BandWithoutShift.parameters=Stripe_stories_extends({},BandWithoutShift.parameters,{docs:Stripe_stories_extends({},null==(_BandWithoutShift$par=BandWithoutShift.parameters)?void 0:_BandWithoutShift$par.docs,{source:Stripe_stories_extends({originalSource:"{\n  name: 'band without shift',\n  args: {\n    variant: 'x',\n    domain: ['C', 'E'],\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartBandViewDecorator]\n}"},null==(_BandWithoutShift$par2=BandWithoutShift.parameters)||null==(_BandWithoutShift$par3=_BandWithoutShift$par2.docs)?void 0:_BandWithoutShift$par3.source)})}),BandWithShift.parameters=Stripe_stories_extends({},BandWithShift.parameters,{docs:Stripe_stories_extends({},null==(_BandWithShift$parame=BandWithShift.parameters)?void 0:_BandWithShift$parame.docs,{source:Stripe_stories_extends({originalSource:"{\n  name: 'band with shift',\n  args: {\n    variant: 'x',\n    domain: ['C', 'E'],\n    shift: [-0.5, 0.5],\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartBandViewDecorator]\n}"},null==(_BandWithShift$parame2=BandWithShift.parameters)||null==(_BandWithShift$parame3=_BandWithShift$parame2.docs)?void 0:_BandWithShift$parame3.source)})});var __namedExportsOrder=["X","Y","Units","Expansion","BandWithoutShift","BandWithShift"]},"./packages/annotation/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>barProps,I8:()=>ChartBandViewAxisDecorator,VK:()=>ChartBandViewDecorator,cK:()=>ChartLinearViewDecorator,ee:()=>ChartDecorator,vr:()=>ChartLinearViewAxisDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,40,40],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2,paddingOuter:0},scaleY:{variant:"linear",domain:[0,100]},children:[Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"})]})]})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";var ChartBandViewAxisDecorator=function ChartBandViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"}),Story()]})]})};ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator";var ChartLinearViewDecorator=function ChartLinearViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"})]})]})};ChartLinearViewDecorator.displayName="ChartLinearViewDecorator";var ChartLinearViewAxisDecorator=function ChartLinearViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"}),Story()]})]})};ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator";var barProps={data:[{id:"alpha",x:10},{id:"beta",x:20}],keys:["x"],horizontal:!0,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}};try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/annotation/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator",ChartBandViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartBandViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"]={docgenInfo:ChartBandViewAxisDecorator.__docgenInfo,name:"ChartBandViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewDecorator.displayName="ChartLinearViewDecorator",ChartLinearViewDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"]={docgenInfo:ChartLinearViewDecorator.__docgenInfo,name:"ChartLinearViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator",ChartLinearViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"]={docgenInfo:ChartLinearViewAxisDecorator.__docgenInfo,name:"ChartLinearViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/animation/animate.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>animate});var _index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/index.mjs"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function animate(from,to,transition={}){const value=(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(from)?from:(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(from);return value.start((0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Z)("",value,to,transition)),{stop:()=>value.stop(),isAnimating:()=>value.isAnimating()}}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/framer-motion/dist/es/utils/process.mjs"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs"),warn_once=__webpack_require__("./node_modules/framer-motion/dist/es/utils/warn-once.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{exitBeforeEnter&&(mode="wait",(0,warn_once.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[forceRender]=function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Z_.postRender(forceRender)),[forceRender]),forcedRenderCount]}();const forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);const isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exiting=new Set,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),(0,use_unmount_effect.z)((()=>{isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return"wait"===mode&&exiting.size&&(childrenToRender=[]),exiting.forEach((key=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:()=>{allChildren.delete(key),exiting.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout,mode},child))})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),"production"!==process.O&&"wait"===mode&&childrenToRender.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);