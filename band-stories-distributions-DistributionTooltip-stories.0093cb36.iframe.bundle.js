"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9436],{"./packages/band/stories/distributions/DistributionTooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TableFormat:()=>TableFormat,Tooltip:()=>Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Tooltip$parameters,_Tooltip$parameters2,_Tooltip$parameters2$,_TableFormat$paramete,_TableFormat$paramete2,_TableFormat$paramete3,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/band/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/stories/distributions/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Distributions/DistributionTooltip",component:_src__WEBPACK_IMPORTED_MODULE_0__.tQ};var Tooltip={name:"tooltip",args:{offset:[8,0],padding:[8,8,8,8],anchor:[0,.5],labelFormat:function labelFormat(d){return d.id+" - "+d.key},labelStyle:{fontWeight:600},valueFormat:function valueFormat(x){return Math.round(100*x)/100},cellStyle:{textAnchor:"start",dominantBaseline:"central"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.xT]},TableFormat={name:"table format",args:{offset:[8,0],padding:[8,8,8,8],anchor:[.5,1],cellSize:[60,20],cellPadding:50,labelFormat:function labelFormat(d){return d.id+" - "+d.key},labelStyle:{fontWeight:600},valueFormat:function valueFormat(x){return Math.round(100*x)/100},cellStyle:{textAnchor:"start",dominantBaseline:"central"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.xT]};Tooltip.parameters=_extends({},Tooltip.parameters,{docs:_extends({},null==(_Tooltip$parameters=Tooltip.parameters)?void 0:_Tooltip$parameters.docs,{source:_extends({originalSource:"{\n  name: 'tooltip',\n  args: {\n    offset: [8, 0],\n    padding: [8, 8, 8, 8],\n    anchor: [0, 0.5],\n    labelFormat: (d: TooltipDataItem) => d.id + ' - ' + d.key,\n    labelStyle: {\n      fontWeight: 600\n    },\n    valueFormat: (x: number) => Math.round(x * 100) / 100,\n    cellStyle: {\n      textAnchor: 'start',\n      dominantBaseline: 'central'\n    }\n  },\n  decorators: [ChartDistributionWithTooltipDecorator]\n}"},null==(_Tooltip$parameters2=Tooltip.parameters)||null==(_Tooltip$parameters2$=_Tooltip$parameters2.docs)?void 0:_Tooltip$parameters2$.source)})}),TableFormat.parameters=_extends({},TableFormat.parameters,{docs:_extends({},null==(_TableFormat$paramete=TableFormat.parameters)?void 0:_TableFormat$paramete.docs,{source:_extends({originalSource:"{\n  name: 'table format',\n  args: {\n    offset: [8, 0],\n    padding: [8, 8, 8, 8],\n    anchor: [0.5, 1],\n    cellSize: [60, 20],\n    cellPadding: 50,\n    labelFormat: (d: TooltipDataItem) => d.id + ' - ' + d.key,\n    labelStyle: {\n      fontWeight: 600\n    },\n    valueFormat: (x: number) => Math.round(x * 100) / 100,\n    cellStyle: {\n      textAnchor: 'start',\n      dominantBaseline: 'central'\n    }\n  },\n  decorators: [ChartDistributionWithTooltipDecorator]\n}"},null==(_TableFormat$paramete2=TableFormat.parameters)||null==(_TableFormat$paramete3=_TableFormat$paramete2.docs)?void 0:_TableFormat$paramete3.source)})});var __namedExportsOrder=["Tooltip","TableFormat"]},"./packages/band/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ChartDecorator,A:()=>dataRawValues});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateUniformValues=function generateUniformValues(n,interval){var size=interval[1]-interval[0];return Array(n).fill(0).map((function(){return interval[0]+Math.random()*size}))},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var dataRawValues=[{id:"alpha",x:generateUniformValues(30,[0,10]).map((function(v){return(0,chsk_core_es.DJC)(v,4)})),y:generateUniformValues(30,[2,16]).map((function(v){return(0,chsk_core_es.DJC)(v,4)}))},{id:"beta",x:generateUniformValues(30,[5,15]).map((function(v){return(0,chsk_core_es.DJC)(v,4)})),y:generateUniformValues(30,[10,20]).map((function(v){return(0,chsk_core_es.DJC)(v,4)}))}];try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/band/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/distributions/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TM:()=>ChartHorizontalDistributionDecorator,aY:()=>onDistributionsClick,i3:()=>commonDistributionProps,t3:()=>ChartDistributionDecorator,xT:()=>ChartDistributionWithTooltipDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/band/src/index.tsx"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonDistributionProps={data:_decorators__WEBPACK_IMPORTED_MODULE_2__.A,keys:["x","y"],paddingInternal:0,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},ChartDistributionDecorator=function ChartDistributionDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.vf,_extends({},commonDistributionProps,{horizontal:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartDistributionDecorator.displayName="ChartDistributionDecorator";var ChartHorizontalDistributionDecorator=function ChartHorizontalDistributionDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.vf,_extends({},commonDistributionProps,{horizontal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom",label:"Values (a.u.)"}),Story()]}))})};ChartHorizontalDistributionDecorator.displayName="ChartHorizontalDistributionDecorator";var onDistributionsClick=function onDistributionsClick(data){console.log("clicked: "+JSON.stringify(data))},round2dp=function round2dp(x){return String(roundDecimalPlaces(x,2))},ChartDistributionWithTooltipDecorator=function ChartDistributionWithTooltipDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.vf,_extends({},commonDistributionProps,{horizontal:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RDh,{variant:"left",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.dp,{middleStyle:{stroke:"#000000",strokeWidth:2}}),Story()]}))})};ChartDistributionWithTooltipDecorator.displayName="ChartDistributionWithTooltipDecorator";try{ChartDistributionDecorator.displayName="ChartDistributionDecorator",ChartDistributionDecorator.__docgenInfo={description:"",displayName:"ChartDistributionDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#ChartDistributionDecorator"]={docgenInfo:ChartDistributionDecorator.__docgenInfo,name:"ChartDistributionDecorator",path:"packages/band/stories/distributions/decorators.tsx#ChartDistributionDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalDistributionDecorator.displayName="ChartHorizontalDistributionDecorator",ChartHorizontalDistributionDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalDistributionDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#ChartHorizontalDistributionDecorator"]={docgenInfo:ChartHorizontalDistributionDecorator.__docgenInfo,name:"ChartHorizontalDistributionDecorator",path:"packages/band/stories/distributions/decorators.tsx#ChartHorizontalDistributionDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onDistributionsClick.displayName="onDistributionsClick",onDistributionsClick.__docgenInfo={description:"",displayName:"onDistributionsClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"FiveNumbers"}},quantiles:{defaultValue:null,description:"",name:"quantiles",required:!0,type:{name:"FiveNumbers"}},extrema:{defaultValue:null,description:"",name:"extrema",required:!0,type:{name:"[number, number]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#onDistributionsClick"]={docgenInfo:onDistributionsClick.__docgenInfo,name:"onDistributionsClick",path:"packages/band/stories/distributions/decorators.tsx#onDistributionsClick"})}catch(__react_docgen_typescript_loader_error){}try{round2dp.displayName="round2dp",round2dp.__docgenInfo={description:"",displayName:"round2dp",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#round2dp"]={docgenInfo:round2dp.__docgenInfo,name:"round2dp",path:"packages/band/stories/distributions/decorators.tsx#round2dp"})}catch(__react_docgen_typescript_loader_error){}try{ChartDistributionWithTooltipDecorator.displayName="ChartDistributionWithTooltipDecorator",ChartDistributionWithTooltipDecorator.__docgenInfo={description:"",displayName:"ChartDistributionWithTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#ChartDistributionWithTooltipDecorator"]={docgenInfo:ChartDistributionWithTooltipDecorator.__docgenInfo,name:"ChartDistributionWithTooltipDecorator",path:"packages/band/stories/distributions/decorators.tsx#ChartDistributionWithTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);