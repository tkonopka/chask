"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9877],{"./packages/core/stories/components/legends/LinearGradient.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:()=>Custom,Horizontal:()=>Horizontal,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Horizontal$parameter,_Horizontal$parameter2,_Horizontal$parameter3,_Vertical$parameters,_Vertical$parameters2,_Vertical$parameters3,_Custom$parameters,_Custom$parameters2,_Custom$parameters2$d,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/stories/components/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Legends/LinearGradient",component:_src__WEBPACK_IMPORTED_MODULE_0__.oas};var Horizontal={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.oas,{id:"gradient-horizontal",start:[0,0],end:[1,0],stops:["#dddddd","#ffdddd"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner",style:{fill:"url(#gradient-horizontal)"}})]})},name:"horizontal",decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.z5]},Vertical={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.oas,{id:"gradient-vertical",start:[0,0],end:[0,1],stops:["#dddddd","#ddddff"]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner",style:{fill:"url(#gradient-vertical)"}})]})},name:"vertical",decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.z5]},Custom={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.oas,{id:"gradient-custom",start:[0,1],end:[1,0],stops:["#dddddd","#44ffdd","#ffff44"],offsets:[0,.3,.7]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner",style:{fill:"url(#gradient-custom)"}})]})},name:"custom",decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.z5]};Horizontal.parameters=_extends({},Horizontal.parameters,{docs:_extends({},null==(_Horizontal$parameter=Horizontal.parameters)?void 0:_Horizontal$parameter.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]}>\n            <defs>\n                <LinearGradient id=\"gradient-horizontal\" start={[0, 0]} end={[1, 0]} stops={['#dddddd', '#ffdddd']} />\n            </defs>\n            <Surface variant={'inner'} style={{\n      fill: 'url(#gradient-horizontal)'\n    }} />\n        </Chart>,\n  name: 'horizontal',\n  decorators: [DivDecorator]\n}"},null==(_Horizontal$parameter2=Horizontal.parameters)||null==(_Horizontal$parameter3=_Horizontal$parameter2.docs)?void 0:_Horizontal$parameter3.source)})}),Vertical.parameters=_extends({},Vertical.parameters,{docs:_extends({},null==(_Vertical$parameters=Vertical.parameters)?void 0:_Vertical$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]}>\n            <defs>\n                <LinearGradient id=\"gradient-vertical\" start={[0, 0]} end={[0, 1]} stops={['#dddddd', '#ddddff']} />\n            </defs>\n            <Surface variant={'inner'} style={{\n      fill: 'url(#gradient-vertical)'\n    }} />\n        </Chart>,\n  name: 'vertical',\n  decorators: [DivDecorator]\n}"},null==(_Vertical$parameters2=Vertical.parameters)||null==(_Vertical$parameters3=_Vertical$parameters2.docs)?void 0:_Vertical$parameters3.source)})}),Custom.parameters=_extends({},Custom.parameters,{docs:_extends({},null==(_Custom$parameters=Custom.parameters)?void 0:_Custom$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]}>\n            <defs>\n                <LinearGradient id=\"gradient-custom\" start={[0, 1]} end={[1, 0]} stops={['#dddddd', '#44ffdd', '#ffff44']} offsets={[0, 0.3, 0.7]} />\n            </defs>\n            <Surface variant={'inner'} style={{\n      fill: 'url(#gradient-custom)'\n    }} />\n        </Chart>,\n  name: 'custom',\n  decorators: [DivDecorator]\n}"},null==(_Custom$parameters2=Custom.parameters)||null==(_Custom$parameters2$d=_Custom$parameters2.docs)?void 0:_Custom$parameters2$d.source)})});var __namedExportsOrder=["Horizontal","Vertical","Custom"]},"./packages/core/stories/components/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lh:()=>ChartPlainDecorator,OR:()=>ChartViewDecorator,VK:()=>ChartBandViewDecorator,ee:()=>ChartDecorator,ke:()=>viewSeriesIndexesKeys,z5:()=>DivDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),viewSeriesIndexesKeys={seriesIndexes:{X:0,Y:1},keys:["alpha","beta","gamma"]},DivDecorator=function DivDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:Story()})};DivDecorator.displayName="DivDecorator";var ChartPlainDecorator=function ChartPlainDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:Story()})};ChartPlainDecorator.displayName="ChartPlainDecorator";var ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartViewDecorator=function ChartViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})})};ChartViewDecorator.displayName="ChartViewDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,40,60,80],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},scaleY:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"})]})})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";try{DivDecorator.displayName="DivDecorator",DivDecorator.__docgenInfo={description:"",displayName:"DivDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#DivDecorator"]={docgenInfo:DivDecorator.__docgenInfo,name:"DivDecorator",path:"packages/core/stories/components/decorators.tsx#DivDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartPlainDecorator.displayName="ChartPlainDecorator",ChartPlainDecorator.__docgenInfo={description:"",displayName:"ChartPlainDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartPlainDecorator"]={docgenInfo:ChartPlainDecorator.__docgenInfo,name:"ChartPlainDecorator",path:"packages/core/stories/components/decorators.tsx#ChartPlainDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/core/stories/components/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartViewDecorator.displayName="ChartViewDecorator",ChartViewDecorator.__docgenInfo={description:"",displayName:"ChartViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartViewDecorator"]={docgenInfo:ChartViewDecorator.__docgenInfo,name:"ChartViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);