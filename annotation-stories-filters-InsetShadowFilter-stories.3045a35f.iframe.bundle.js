"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2875],{"./packages/annotation/stories/filters/InsetShadowFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Light:()=>Light,Narrow:()=>Narrow,Wide:()=>Wide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Narrow$parameters,_Narrow$parameters2,_Wide$parameters,_Wide$parameters2,_Light$parameters,_Light$parameters2,_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src_filters__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/filters/InsetShadowFilter.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Filters/InsetShadowFilter",component:_src_filters__WEBPACK_IMPORTED_MODULE_1__.O};var Narrow={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_1__.O,{id:"narrow-shadow",blurStdDeviation:6}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999",filter:"url(#narrow-shadow)"}})]})},name:"narrow"},Wide={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_1__.O,{id:"wide-shadow",blurStdDeviation:18}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999",filter:"url(#wide-shadow)"}})]})},name:"wide"},Light={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tgp,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_filters__WEBPACK_IMPORTED_MODULE_1__.O,{id:"light-shadow",blurStdDeviation:6,floodColor:"#ffffff",floodOpacity:.8}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999",filter:"url(#light-shadow)"}})]})},name:"light"};Narrow.parameters=_extends({},Narrow.parameters,{docs:_extends({},null==(_Narrow$parameters=Narrow.parameters)?void 0:_Narrow$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetShadowFilter id={'narrow-shadow'} blurStdDeviation={6} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999',\n      filter: 'url(#narrow-shadow)'\n    }} />\n        </Chart>,\n  name: 'narrow'\n}"},null==(_Narrow$parameters2=Narrow.parameters)||null==(_Narrow$parameters2=_Narrow$parameters2.docs)?void 0:_Narrow$parameters2.source)})}),Wide.parameters=_extends({},Wide.parameters,{docs:_extends({},null==(_Wide$parameters=Wide.parameters)?void 0:_Wide$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetShadowFilter id={'wide-shadow'} blurStdDeviation={18} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999',\n      filter: 'url(#wide-shadow)'\n    }} />\n        </Chart>,\n  name: 'wide'\n}"},null==(_Wide$parameters2=Wide.parameters)||null==(_Wide$parameters2=_Wide$parameters2.docs)?void 0:_Wide$parameters2.source)})}),Light.parameters=_extends({},Light.parameters,{docs:_extends({},null==(_Light$parameters=Light.parameters)?void 0:_Light$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetShadowFilter id={'light-shadow'} blurStdDeviation={6} floodColor={'#ffffff'} floodOpacity={0.8} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999',\n      filter: 'url(#light-shadow)'\n    }} />\n        </Chart>,\n  name: 'light'\n}"},null==(_Light$parameters2=Light.parameters)||null==(_Light$parameters2=_Light$parameters2.docs)?void 0:_Light$parameters2.source)})});var __namedExportsOrder=["Narrow","Wide","Light"]},"./packages/annotation/src/filters/InsetShadowFilter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>InsetShadowFilter});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),InsetShadowFilter=function InsetShadowFilter(_ref){var id=_ref.id,_ref$blurStdDeviation=_ref.blurStdDeviation,blurStdDeviation=void 0===_ref$blurStdDeviation?5:_ref$blurStdDeviation,_ref$floodColor=_ref.floodColor,floodColor=void 0===_ref$floodColor?"#000000":_ref$floodColor,_ref$floodOpacity=_ref.floodOpacity,floodOpacity=void 0===_ref$floodOpacity?.9:_ref$floodOpacity;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter",{id,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur",{stdDeviation:blurStdDeviation,result:id+"-blur"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"out",in:"SourceGraphic",in2:id+"-blur",result:id+"-inverse"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood",{floodColor,floodOpacity,result:id+"-color"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"in",in:id+"-color",in2:id+"-inverse",result:id+"-shadow"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"over",in:id+"-shadow",in2:"SourceGraphic"})]})};InsetShadowFilter.displayName="InsetShadowFilter";try{InsetShadowFilter.displayName="InsetShadowFilter",InsetShadowFilter.__docgenInfo={description:"",displayName:"InsetShadowFilter",props:{blurStdDeviation:{defaultValue:{value:"5"},description:"",name:"blurStdDeviation",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"0.9"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/InsetShadowFilter.tsx#InsetShadowFilter"]={docgenInfo:InsetShadowFilter.__docgenInfo,name:"InsetShadowFilter",path:"packages/annotation/src/filters/InsetShadowFilter.tsx#InsetShadowFilter"})}catch(__react_docgen_typescript_loader_error){}}}]);