"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[5277],{"./packages/core/stories/components/shapes/Square.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Styled:()=>Styled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Styled$parameters,_Styled$parameters2,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/shapes/Square.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/stories/components/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Shapes/Square",component:_src__WEBPACK_IMPORTED_MODULE_0__.b};var Styled={name:"styled",args:{style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"},cx:160,cy:110,r:20},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]};Styled.parameters=_extends({},Styled.parameters,{docs:_extends({},null==(_Styled$parameters=Styled.parameters)?void 0:_Styled$parameters.docs,{source:_extends({originalSource:"{\n  name: 'styled',\n  args: {\n    style: {\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    },\n    cx: 160,\n    cy: 110,\n    r: 20\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Styled$parameters2=Styled.parameters)||null==(_Styled$parameters2=_Styled$parameters2.docs)?void 0:_Styled$parameters2.source)})});var __namedExportsOrder=["Styled"]},"./packages/core/src/shapes/Square.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Square});var framer_motion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/themes/utils.ts"),_general__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","initial","animate","exit","cx","cy","r","className","style","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var squareHalfSide=.5*Math.sqrt(Math.PI)*.96,Square=function Square(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,initial=_ref.initial,animate=_ref.animate,exit=_ref.exit,_ref$cx=_ref.cx,cx=void 0===_ref$cx?0:_ref$cx,_ref$cy=_ref.cy,cy=void 0===_ref$cy?0:_ref$cy,_ref$r=_ref.r,r=void 0===_ref$r?1:_ref$r,className=_ref.className,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),scaledHalfSide=squareHalfSide*r,config={x:cx-scaledHalfSide,y:cy-scaledHalfSide,width:2*scaledHalfSide,height:2*scaledHalfSide};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.rect,_extends({role:setRole&&"default"!==variant?variant:void 0,initial:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,initial),animate:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,animate),exit:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,exit),className:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.gj)(variant,className),style:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.dJ)(style,config)},props))};Square.displayName="Square";try{Square.displayName="Square",Square.__docgenInfo={description:"",displayName:"Square",props:{cx:{defaultValue:{value:"0"},description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:{value:"0"},description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:{value:"1"},description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/shapes/Square.tsx#Square"]={docgenInfo:Square.__docgenInfo,name:"Square",path:"packages/core/src/shapes/Square.tsx#Square"})}catch(__react_docgen_typescript_loader_error){}}}]);