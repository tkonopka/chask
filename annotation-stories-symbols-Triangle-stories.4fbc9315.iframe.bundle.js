"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9651],{"./packages/annotation/stories/symbols/Triangle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Styled:()=>Styled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Styled$parameters,_Styled$parameters2,_Styled$parameters2$d,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/annotation/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/stories/symbols/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Symbols/Triangle",component:_src__WEBPACK_IMPORTED_MODULE_0__.CJ};var Styled={name:"styled",args:{style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"},cx:80,cy:50,r:20},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.J4]};Styled.parameters=_extends({},Styled.parameters,{docs:_extends({},null==(_Styled$parameters=Styled.parameters)?void 0:_Styled$parameters.docs,{source:_extends({originalSource:"{\n  name: 'styled',\n  args: {\n    style: {\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    },\n    cx: 80,\n    cy: 50,\n    r: 20\n  },\n  decorators: [ChartSymbolDecorator]\n}"},null==(_Styled$parameters2=Styled.parameters)||null==(_Styled$parameters2$d=_Styled$parameters2.docs)?void 0:_Styled$parameters2$d.source)})});var __namedExportsOrder=["Styled"]},"./packages/annotation/stories/symbols/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J4:()=>ChartSymbolDecorator,SZ:()=>ConcentricCirclesFg,dY:()=>ConcentricHybrid,ke:()=>viewSeriesIndexesKeys,oW:()=>ConcentricSquares,ql:()=>ConcentricCirclesBg});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src_symbols__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/symbols/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),viewSeriesIndexesKeys={seriesIndexes:{X:0,Y:1},keys:["alpha","beta","gamma"]},ChartSymbolDecorator=function ChartSymbolDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[200,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartSymbolDecorator.displayName="ChartSymbolDecorator";var ConcentricCirclesBg=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_1__.by)({variant:"background",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Cdc,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Cdc,rMultiplier:1.4,styleModifier:{fill:"#ffffff"}}),ConcentricCirclesFg=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_1__.by)({variant:"foreground",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Cdc,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Cdc,rMultiplier:.6,styleModifier:{fill:"#ffffff"}}),ConcentricSquares=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_1__.by)({variant:"foreground",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.bK0,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.bK0,rMultiplier:.6,styleModifier:{fill:"#ffffff"}}),ConcentricHybrid=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_1__.by)({variant:"foreground",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.bK0,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Cdc,rMultiplier:.4,styleModifier:{fill:"#ffffff"}});try{ChartSymbolDecorator.displayName="ChartSymbolDecorator",ChartSymbolDecorator.__docgenInfo={description:"",displayName:"ChartSymbolDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ChartSymbolDecorator"]={docgenInfo:ChartSymbolDecorator.__docgenInfo,name:"ChartSymbolDecorator",path:"packages/annotation/stories/symbols/decorators.tsx#ChartSymbolDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricCirclesBg.displayName="ConcentricCirclesBg",ConcentricCirclesBg.__docgenInfo={description:"",displayName:"ConcentricCirclesBg",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesBg"]={docgenInfo:ConcentricCirclesBg.__docgenInfo,name:"ConcentricCirclesBg",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesBg"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricCirclesFg.displayName="ConcentricCirclesFg",ConcentricCirclesFg.__docgenInfo={description:"",displayName:"ConcentricCirclesFg",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesFg"]={docgenInfo:ConcentricCirclesFg.__docgenInfo,name:"ConcentricCirclesFg",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesFg"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricSquares.displayName="ConcentricSquares",ConcentricSquares.__docgenInfo={description:"",displayName:"ConcentricSquares",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricSquares"]={docgenInfo:ConcentricSquares.__docgenInfo,name:"ConcentricSquares",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricSquares"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricHybrid.displayName="ConcentricHybrid",ConcentricHybrid.__docgenInfo={description:"",displayName:"ConcentricHybrid",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricHybrid"]={docgenInfo:ConcentricHybrid.__docgenInfo,name:"ConcentricHybrid",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricHybrid"})}catch(__react_docgen_typescript_loader_error){}}}]);