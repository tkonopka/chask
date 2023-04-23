"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9594],{"./packages/band/stories/strips/Strips.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MouseClick:()=>MouseClick,SelectedIds:()=>SelectedIds,SelectedKeys:()=>SelectedKeys,Symbols:()=>Symbols,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _SelectedIds$paramete,_SelectedIds$paramete2,_SelectedIds$paramete3,_SelectedKeys$paramet,_SelectedKeys$paramet2,_SelectedKeys$paramet3,_Symbols$parameters,_Symbols$parameters2,_Symbols$parameters2$,_MouseClick$parameter,_MouseClick$parameter2,_MouseClick$parameter3,_chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/strips/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Strips/Strips",component:_src__WEBPACK_IMPORTED_MODULE_1__.iP};var SelectedIds={name:"selected ids",args:{ids:["alpha"],symbolStyle:{strokeWidth:1,stroke:"#222222"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.sb]},SelectedKeys={name:"selected keys",args:{keys:["x"],symbolStyle:{strokeWidth:1,stroke:"#222222"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.sb]},Symbols={name:"symbols",args:{component:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.bK0,symbolStyle:{strokeWidth:1,stroke:"#222222"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.sb]},MouseClick={name:"mouse click",args:{handlers:{onClick:_decorators__WEBPACK_IMPORTED_MODULE_2__.PB}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.sb]};SelectedIds.parameters=_extends({},SelectedIds.parameters,{docs:_extends({},null==(_SelectedIds$paramete=SelectedIds.parameters)?void 0:_SelectedIds$paramete.docs,{source:_extends({originalSource:"{\n  name: 'selected ids',\n  args: {\n    ids: ['alpha'],\n    symbolStyle: {\n      strokeWidth: 1,\n      stroke: '#222222'\n    }\n  },\n  decorators: [ChartStripDecorator]\n}"},null==(_SelectedIds$paramete2=SelectedIds.parameters)||null==(_SelectedIds$paramete3=_SelectedIds$paramete2.docs)?void 0:_SelectedIds$paramete3.source)})}),SelectedKeys.parameters=_extends({},SelectedKeys.parameters,{docs:_extends({},null==(_SelectedKeys$paramet=SelectedKeys.parameters)?void 0:_SelectedKeys$paramet.docs,{source:_extends({originalSource:"{\n  name: 'selected keys',\n  args: {\n    keys: ['x'],\n    symbolStyle: {\n      strokeWidth: 1,\n      stroke: '#222222'\n    }\n  },\n  decorators: [ChartStripDecorator]\n}"},null==(_SelectedKeys$paramet2=SelectedKeys.parameters)||null==(_SelectedKeys$paramet3=_SelectedKeys$paramet2.docs)?void 0:_SelectedKeys$paramet3.source)})}),Symbols.parameters=_extends({},Symbols.parameters,{docs:_extends({},null==(_Symbols$parameters=Symbols.parameters)?void 0:_Symbols$parameters.docs,{source:_extends({originalSource:"{\n  name: 'symbols',\n  args: {\n    component: Square,\n    symbolStyle: {\n      strokeWidth: 1,\n      stroke: '#222222'\n    }\n  },\n  decorators: [ChartStripDecorator]\n}"},null==(_Symbols$parameters2=Symbols.parameters)||null==(_Symbols$parameters2$=_Symbols$parameters2.docs)?void 0:_Symbols$parameters2$.source)})}),MouseClick.parameters=_extends({},MouseClick.parameters,{docs:_extends({},null==(_MouseClick$parameter=MouseClick.parameters)?void 0:_MouseClick$parameter.docs,{source:_extends({originalSource:"{\n  name: 'mouse click',\n  args: {\n    handlers: {\n      onClick: onStripsClick\n    }\n  },\n  decorators: [ChartStripDecorator]\n}"},null==(_MouseClick$parameter2=MouseClick.parameters)||null==(_MouseClick$parameter3=_MouseClick$parameter2.docs)?void 0:_MouseClick$parameter3.source)})});var __namedExportsOrder=["SelectedIds","SelectedKeys","Symbols","MouseClick"]},"./packages/band/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ChartDecorator,A:()=>dataRawValues});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateUniformValues=function generateUniformValues(n,interval){var size=interval[1]-interval[0];return Array(n).fill(0).map((function(){return interval[0]+Math.random()*size}))},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var dataRawValues=[{id:"alpha",x:generateUniformValues(30,[0,10]),y:generateUniformValues(30,[2,16])},{id:"beta",x:generateUniformValues(30,[5,15]),y:generateUniformValues(30,[10,20])}];try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/band/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/strips/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JA:()=>commonStripProps,PB:()=>onStripsClick,sb:()=>ChartStripDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonStripProps={data:_decorators__WEBPACK_IMPORTED_MODULE_2__.A,keys:["x","y"],valueSize:4,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]},paddingInternal:.2},ChartStripDecorator=function ChartStripDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.D_,_extends({},commonStripProps,{horizontal:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartStripDecorator.displayName="ChartStripDecorator";var onStripsClick=function onStripsClick(data){console.log("clicked: "+JSON.stringify(data))};try{ChartStripDecorator.displayName="ChartStripDecorator",ChartStripDecorator.__docgenInfo={description:"",displayName:"ChartStripDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/strips/decorators.tsx#ChartStripDecorator"]={docgenInfo:ChartStripDecorator.__docgenInfo,name:"ChartStripDecorator",path:"packages/band/stories/strips/decorators.tsx#ChartStripDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onStripsClick.displayName="onStripsClick",onStripsClick.__docgenInfo={description:"",displayName:"onStripsClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},valueSize:{defaultValue:null,description:"",name:"valueSize",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/strips/decorators.tsx#onStripsClick"]={docgenInfo:onStripsClick.__docgenInfo,name:"onStripsClick",path:"packages/band/stories/strips/decorators.tsx#onStripsClick"})}catch(__react_docgen_typescript_loader_error){}}}]);