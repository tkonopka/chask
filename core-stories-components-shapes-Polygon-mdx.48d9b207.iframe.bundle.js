"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[6375,9002],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/shapes/Polygon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Filled:()=>Filled,Transparent:()=>Transparent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Polygon_stories});var motion_minimal=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),utils=__webpack_require__("./packages/core/src/themes/utils.ts"),math=__webpack_require__("./packages/core/src/general/math.ts"),general_utils=__webpack_require__("./packages/core/src/general/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","initial","animate","exit","points","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Polygon=function Polygon(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,initial=_ref.initial,animate=_ref.animate,exit=_ref.exit,points=_ref.points,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),config={points:points.map((function(coords){return(0,math.DJ)(coords[0],2)+","+(0,math.DJ)(coords[1],2)})).join(" ")};return(0,jsx_runtime.jsx)(motion_minimal.m.polygon,_extends({role:setRole&&"default"!==variant?variant:void 0,initial:(0,general_utils.$d)(config,initial),animate:(0,general_utils.$d)(config,animate),exit:(0,general_utils.$d)(config,exit),className:(0,utils.gj)(variant,className)},props))};Polygon.displayName="Polygon";try{Polygon.displayName="Polygon",Polygon.__docgenInfo={description:"",displayName:"Polygon",props:{points:{defaultValue:null,description:"points",name:"points",required:!0,type:{name:"NumericPositionSpec[]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/shapes/Polygon.tsx#Polygon"]={docgenInfo:Polygon.__docgenInfo,name:"Polygon",path:"packages/core/src/shapes/Polygon.tsx#Polygon"})}catch(__react_docgen_typescript_loader_error){}var _Transparent$paramete,_Transparent$paramete2,_Transparent$paramete3,_Filled$parameters,_Filled$parameters2,_Filled$parameters2$d,decorators=__webpack_require__("./packages/core/stories/components/decorators.tsx");function Polygon_stories_extends(){return Polygon_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Polygon_stories_extends.apply(this,arguments)}const Polygon_stories={title:"Core/Components/Shapes/Polygon",component:Polygon};var points=[[50,120],[140,50],[270,90],[200,190],[100,100]],Transparent={name:"transparent",args:{points,style:{stroke:"#993333",strokeWidth:2,fillOpacity:0}},decorators:[decorators.ee]},Filled={name:" filled",args:{points,style:{stroke:"#993333",strokeWidth:2,fill:"#993333",fillOpacity:.5}},decorators:[decorators.ee]};Transparent.parameters=Polygon_stories_extends({},Transparent.parameters,{docs:Polygon_stories_extends({},null==(_Transparent$paramete=Transparent.parameters)?void 0:_Transparent$paramete.docs,{source:Polygon_stories_extends({originalSource:"{\n  name: 'transparent',\n  args: {\n    points: points,\n    style: {\n      stroke: '#993333',\n      strokeWidth: 2,\n      fillOpacity: 0\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Transparent$paramete2=Transparent.parameters)||null==(_Transparent$paramete3=_Transparent$paramete2.docs)?void 0:_Transparent$paramete3.source)})}),Filled.parameters=Polygon_stories_extends({},Filled.parameters,{docs:Polygon_stories_extends({},null==(_Filled$parameters=Filled.parameters)?void 0:_Filled$parameters.docs,{source:Polygon_stories_extends({originalSource:"{\n  name: ' filled',\n  args: {\n    points: points,\n    style: {\n      stroke: '#993333',\n      strokeWidth: 2,\n      fill: '#993333',\n      fillOpacity: 0.5\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Filled$parameters2=Filled.parameters)||null==(_Filled$parameters2$d=_Filled$parameters2.docs)?void 0:_Filled$parameters2$d.source)})});var __namedExportsOrder=["Transparent","Filled"]},"./packages/core/stories/components/shapes/Polygon.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Polygon_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/shapes/Polygon.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"polygon",children:"Polygon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Polygon_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Polygon"})," displays a closed shape composed of straight-line segments."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Polygon_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"style",children:"Style"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Polygons are defined by a series of points. The resulting shape can be styled with css."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Polygon_stories__WEBPACK_IMPORTED_MODULE_4__.Transparent}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Polygon_stories__WEBPACK_IMPORTED_MODULE_4__.Filled})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);