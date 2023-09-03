"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7513,2934],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/misc/Stripe.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BandWithShift:()=>BandWithShift,BandWithoutShift:()=>BandWithoutShift,Expansion:()=>Expansion,Units:()=>Units,X:()=>X,Y:()=>Y,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Stripe_stories});var react=__webpack_require__("./node_modules/react/index.js"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_excluded=["variant","domain","domainUnits","expansion","shift","shiftUnit","component"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Stripe=function Stripe(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"x":_ref$variant,domain=_ref.domain,_ref$domainUnits=_ref.domainUnits,domainUnits=void 0===_ref$domainUnits?"view":_ref$domainUnits,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?[0,0]:_ref$expansion,_ref$shift=_ref.shift,shift=void 0===_ref$shift?[0,0]:_ref$shift,_ref$shiftUnit=_ref.shiftUnit,shiftUnit=void 0===_ref$shiftUnit?"step":_ref$shiftUnit,_ref$component=_ref.component,component=void 0===_ref$component?chsk_core_es.AeJ:_ref$component,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),scales=(0,chsk_core_es.kE1)().scales,size=(0,chsk_core_es.Bs9)().size,isX="x"===variant,scale=isX?scales.x:scales.y,scaleSize=isX?size[chsk_core_es.X]:size[chsk_core_es.Y],shiftMultiplier="step"===shiftUnit?scale.step():scale.bandwidth(),units=(0,chsk_core_es.OYb)(domainUnits),coordinates=[(0,chsk_core_es.Oc9)(domain[0],units[0],scaleSize,scale)+shift[0]*shiftMultiplier,(0,chsk_core_es.Oc9)(domain[1],units[1],scaleSize,scale)+shift[1]*shiftMultiplier],_numberPair=(0,chsk_core_es.Ryh)(expansion),e1=_numberPair[0],e2=_numberPair[1],rectProps=isX?{x:coordinates[0],width:coordinates[1]-coordinates[0],y:-e1,height:size[chsk_core_es.Y]+e1+e2}:{x:-e1,width:size[chsk_core_es.X]+e1+e2,y:coordinates[0],height:coordinates[1]-coordinates[0]};return(0,react.createElement)(component,_extends({variant:"stripe"},rectProps,props))};try{Stripe.displayName="Stripe",Stripe.__docgenInfo={description:"",displayName:"Stripe",props:{variant:{defaultValue:{value:"x"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'}]}},domain:{defaultValue:null,description:"domain interval",name:"domain",required:!0,type:{name:"PositionSpec"}},domainUnits:{defaultValue:{value:"view"},description:"units for domain",name:"domainUnits",required:!1,type:{name:"PositionUnits"}},shift:{defaultValue:{value:"[0, 0]"},description:"shifts for domain boundaries",name:"shift",required:!1,type:{name:"NumericPositionSpec"}},component:{defaultValue:null,description:"component used to draw individual stripes",name:"component",required:!1,type:{name:"FC<RectangleProps>"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},expansion:{defaultValue:{value:"[0, 0]"},description:"expansion of lines at the start and end of the scale",name:"expansion",required:!1,type:{name:"number | TwoSideSizeSpec"}},shiftUnit:{defaultValue:{value:"step"},description:"unit for shift values",name:"shiftUnit",required:!1,type:{name:"enum",value:[{value:'"band"'},{value:'"step"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/misc/Stripe.tsx#Stripe"]={docgenInfo:Stripe.__docgenInfo,name:"Stripe",path:"packages/annotation/src/misc/Stripe.tsx#Stripe"})}catch(__react_docgen_typescript_loader_error){}var _X$parameters,_X$parameters2,_Y$parameters,_Y$parameters2,_Units$parameters,_Units$parameters2,_Expansion$parameters,_Expansion$parameters2,_BandWithoutShift$par,_BandWithoutShift$par2,_BandWithShift$parame,_BandWithShift$parame2,decorators=__webpack_require__("./packages/annotation/stories/decorators.tsx");function Stripe_stories_extends(){return Stripe_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Stripe_stories_extends.apply(this,arguments)}const Stripe_stories={title:"Addons/Annotation/Misc/Stripe",component:Stripe};var X={name:"x",args:{variant:"x",domain:[20,60],style:{fill:"#ffdddd"}},decorators:[decorators.cK]},Y={name:"y",args:{variant:"y",domain:[20,60],style:{fill:"#ffdddd"}},decorators:[decorators.cK]},Units={name:"units",args:{variant:"x",domain:[0,.5],domainUnits:"relative",style:{fill:"#ffdddd"}},decorators:[decorators.cK]},Expansion={name:"expansion",args:{variant:"y",domain:[25,75],expansion:[30,20],style:{fill:"#ffdddd"}},decorators:[decorators.cK]},BandWithoutShift={name:"band without shift",args:{variant:"x",domain:["C","E"],style:{fill:"#ffdddd"}},decorators:[decorators.VK]},BandWithShift={name:"band with shift",args:{variant:"x",domain:["C","E"],shift:[-.5,.5],style:{fill:"#ffdddd"}},decorators:[decorators.VK]};X.parameters=Stripe_stories_extends({},X.parameters,{docs:Stripe_stories_extends({},null==(_X$parameters=X.parameters)?void 0:_X$parameters.docs,{source:Stripe_stories_extends({originalSource:"{\n  name: 'x',\n  args: {\n    variant: 'x',\n    domain: [20, 60],\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartLinearViewDecorator]\n}"},null==(_X$parameters2=X.parameters)||null==(_X$parameters2=_X$parameters2.docs)?void 0:_X$parameters2.source)})}),Y.parameters=Stripe_stories_extends({},Y.parameters,{docs:Stripe_stories_extends({},null==(_Y$parameters=Y.parameters)?void 0:_Y$parameters.docs,{source:Stripe_stories_extends({originalSource:"{\n  name: 'y',\n  args: {\n    variant: 'y',\n    domain: [20, 60],\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartLinearViewDecorator]\n}"},null==(_Y$parameters2=Y.parameters)||null==(_Y$parameters2=_Y$parameters2.docs)?void 0:_Y$parameters2.source)})}),Units.parameters=Stripe_stories_extends({},Units.parameters,{docs:Stripe_stories_extends({},null==(_Units$parameters=Units.parameters)?void 0:_Units$parameters.docs,{source:Stripe_stories_extends({originalSource:"{\n  name: 'units',\n  args: {\n    variant: 'x',\n    domain: [0, 0.5],\n    domainUnits: 'relative',\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartLinearViewDecorator]\n}"},null==(_Units$parameters2=Units.parameters)||null==(_Units$parameters2=_Units$parameters2.docs)?void 0:_Units$parameters2.source)})}),Expansion.parameters=Stripe_stories_extends({},Expansion.parameters,{docs:Stripe_stories_extends({},null==(_Expansion$parameters=Expansion.parameters)?void 0:_Expansion$parameters.docs,{source:Stripe_stories_extends({originalSource:"{\n  name: 'expansion',\n  args: {\n    variant: 'y',\n    domain: [25, 75],\n    expansion: [30, 20],\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartLinearViewDecorator]\n}"},null==(_Expansion$parameters2=Expansion.parameters)||null==(_Expansion$parameters2=_Expansion$parameters2.docs)?void 0:_Expansion$parameters2.source)})}),BandWithoutShift.parameters=Stripe_stories_extends({},BandWithoutShift.parameters,{docs:Stripe_stories_extends({},null==(_BandWithoutShift$par=BandWithoutShift.parameters)?void 0:_BandWithoutShift$par.docs,{source:Stripe_stories_extends({originalSource:"{\n  name: 'band without shift',\n  args: {\n    variant: 'x',\n    domain: ['C', 'E'],\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartBandViewDecorator]\n}"},null==(_BandWithoutShift$par2=BandWithoutShift.parameters)||null==(_BandWithoutShift$par2=_BandWithoutShift$par2.docs)?void 0:_BandWithoutShift$par2.source)})}),BandWithShift.parameters=Stripe_stories_extends({},BandWithShift.parameters,{docs:Stripe_stories_extends({},null==(_BandWithShift$parame=BandWithShift.parameters)?void 0:_BandWithShift$parame.docs,{source:Stripe_stories_extends({originalSource:"{\n  name: 'band with shift',\n  args: {\n    variant: 'x',\n    domain: ['C', 'E'],\n    shift: [-0.5, 0.5],\n    style: {\n      fill: '#ffdddd'\n    }\n  },\n  decorators: [ChartBandViewDecorator]\n}"},null==(_BandWithShift$parame2=BandWithShift.parameters)||null==(_BandWithShift$parame2=_BandWithShift$parame2.docs)?void 0:_BandWithShift$parame2.source)})});var __namedExportsOrder=["X","Y","Units","Expansion","BandWithoutShift","BandWithShift"]},"./packages/annotation/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>barProps,I8:()=>ChartBandViewAxisDecorator,VK:()=>ChartBandViewDecorator,cK:()=>ChartLinearViewDecorator,ee:()=>ChartDecorator,vr:()=>ChartLinearViewAxisDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,40,40],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2,paddingOuter:0},scaleY:{variant:"linear",domain:[0,100]},children:[Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"})]})]})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";var ChartBandViewAxisDecorator=function ChartBandViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"}),Story()]})]})};ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator";var ChartLinearViewDecorator=function ChartLinearViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"})]})]})};ChartLinearViewDecorator.displayName="ChartLinearViewDecorator";var ChartLinearViewAxisDecorator=function ChartLinearViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"}),Story()]})]})};ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator";var barProps={data:[{id:"alpha",x:10},{id:"beta",x:20}],keys:["x"],horizontal:!0,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}};try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/annotation/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator",ChartBandViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartBandViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"]={docgenInfo:ChartBandViewAxisDecorator.__docgenInfo,name:"ChartBandViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewDecorator.displayName="ChartLinearViewDecorator",ChartLinearViewDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"]={docgenInfo:ChartLinearViewDecorator.__docgenInfo,name:"ChartLinearViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator",ChartLinearViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"]={docgenInfo:ChartLinearViewAxisDecorator.__docgenInfo,name:"ChartLinearViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/misc/Stripe.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Stripe_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/annotation/stories/misc/Stripe.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Stripe_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"stripe",children:"Stripe"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Stripe"})," displays a rectangle that stretches across one of the view axes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Stripe_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"placement",children:"Placement"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"}),", which accepts values ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"x"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"y"}),", toggles between vertical and horizontal shapes.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"domain"})," defines the stripe boundaries."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Stripe_stories__WEBPACK_IMPORTED_MODULE_4__.X}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Stripe_stories__WEBPACK_IMPORTED_MODULE_4__.Y}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The domain can be specified in view coordinates or as relative values; the units are specified with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"domainUnits"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Stripe_stories__WEBPACK_IMPORTED_MODULE_4__.Units}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"expansion",children:"Expansion"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Stripe"})," rectangle spans across the entire view in the direction orthogonal to the domain axis.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"expansion"})," adjusts that span. The units are always absolute svg coordinates."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Stripe_stories__WEBPACK_IMPORTED_MODULE_4__.Expansion}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"shift",children:"Shift"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["On band axes, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"domain"})," values are interpreted to coincide with the tick marks.\nTo make the stripe capture an entire band, use prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"shift"})," to adjust the boundaries.\nShift values are interpreted as multiples of the band width or step width (default)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Stripe_stories__WEBPACK_IMPORTED_MODULE_4__.BandWithoutShift}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Stripe_stories__WEBPACK_IMPORTED_MODULE_4__.BandWithShift})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);