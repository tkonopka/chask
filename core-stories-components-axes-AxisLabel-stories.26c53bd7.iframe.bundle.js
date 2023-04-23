"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4091],{"./packages/core/stories/components/axes/AxisLabel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alignment:()=>Alignment,BottomAxis:()=>BottomAxis,LeftAxis:()=>LeftAxis,NegativeDistance:()=>NegativeDistance,TopLabelOnBottomAxis:()=>TopLabelOnBottomAxis,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _BottomAxis$parameter,_BottomAxis$parameter2,_BottomAxis$parameter3,_LeftAxis$parameters,_LeftAxis$parameters2,_LeftAxis$parameters3,_TopLabelOnBottomAxis,_TopLabelOnBottomAxis2,_TopLabelOnBottomAxis3,_NegativeDistance$par,_NegativeDistance$par2,_NegativeDistance$par3,_Alignment$parameters,_Alignment$parameters2,_Alignment$parameters3,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/stories/components/axes/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Axes/AxisLabel",component:_src__WEBPACK_IMPORTED_MODULE_0__.kpH};var BottomAxis={name:"bottom axis",args:{variant:"bottom",children:"axis label"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.j]},LeftAxis={name:"left axis",args:{variant:"left",children:"axis label"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.l]},TopLabelOnBottomAxis={name:"top label on bottom axis",args:{variant:"top",children:"axis label"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.j]},NegativeDistance={name:"negative distance",args:{variant:"bottom",children:"axis label",distance:-10},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.j]},Alignment={name:"alignment",args:{variant:"bottom",children:"axis label",align:1,style:{textAnchor:"end"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.j]};BottomAxis.parameters=_extends({},BottomAxis.parameters,{docs:_extends({},null==(_BottomAxis$parameter=BottomAxis.parameters)?void 0:_BottomAxis$parameter.docs,{source:_extends({originalSource:"{\n  name: 'bottom axis',\n  args: {\n    variant: 'bottom',\n    children: 'axis label'\n  },\n  decorators: [ChartBottomAxisDecorator]\n}"},null==(_BottomAxis$parameter2=BottomAxis.parameters)||null==(_BottomAxis$parameter3=_BottomAxis$parameter2.docs)?void 0:_BottomAxis$parameter3.source)})}),LeftAxis.parameters=_extends({},LeftAxis.parameters,{docs:_extends({},null==(_LeftAxis$parameters=LeftAxis.parameters)?void 0:_LeftAxis$parameters.docs,{source:_extends({originalSource:"{\n  name: 'left axis',\n  args: {\n    variant: 'left',\n    children: 'axis label'\n  },\n  decorators: [ChartLeftAxisDecorator]\n}"},null==(_LeftAxis$parameters2=LeftAxis.parameters)||null==(_LeftAxis$parameters3=_LeftAxis$parameters2.docs)?void 0:_LeftAxis$parameters3.source)})}),TopLabelOnBottomAxis.parameters=_extends({},TopLabelOnBottomAxis.parameters,{docs:_extends({},null==(_TopLabelOnBottomAxis=TopLabelOnBottomAxis.parameters)?void 0:_TopLabelOnBottomAxis.docs,{source:_extends({originalSource:"{\n  name: 'top label on bottom axis',\n  args: {\n    variant: 'top',\n    children: 'axis label'\n  },\n  decorators: [ChartBottomAxisDecorator]\n}"},null==(_TopLabelOnBottomAxis2=TopLabelOnBottomAxis.parameters)||null==(_TopLabelOnBottomAxis3=_TopLabelOnBottomAxis2.docs)?void 0:_TopLabelOnBottomAxis3.source)})}),NegativeDistance.parameters=_extends({},NegativeDistance.parameters,{docs:_extends({},null==(_NegativeDistance$par=NegativeDistance.parameters)?void 0:_NegativeDistance$par.docs,{source:_extends({originalSource:"{\n  name: 'negative distance',\n  args: {\n    variant: 'bottom',\n    children: 'axis label',\n    distance: -10\n  },\n  decorators: [ChartBottomAxisDecorator]\n}"},null==(_NegativeDistance$par2=NegativeDistance.parameters)||null==(_NegativeDistance$par3=_NegativeDistance$par2.docs)?void 0:_NegativeDistance$par3.source)})}),Alignment.parameters=_extends({},Alignment.parameters,{docs:_extends({},null==(_Alignment$parameters=Alignment.parameters)?void 0:_Alignment$parameters.docs,{source:_extends({originalSource:"{\n  name: 'alignment',\n  args: {\n    variant: 'bottom',\n    children: 'axis label',\n    align: 1,\n    style: {\n      textAnchor: 'end'\n    }\n  },\n  decorators: [ChartBottomAxisDecorator]\n}"},null==(_Alignment$parameters2=Alignment.parameters)||null==(_Alignment$parameters3=_Alignment$parameters2.docs)?void 0:_Alignment$parameters3.source)})});var __namedExportsOrder=["BottomAxis","LeftAxis","TopLabelOnBottomAxis","NegativeDistance","Alignment"]},"./packages/core/stories/components/axes/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>ChartBottomAxisDecorator,l:()=>ChartLeftAxisDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartBottomAxisDecorator=function ChartBottomAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom",children:Story()})]})})};ChartBottomAxisDecorator.displayName="ChartBottomAxisDecorator";var ChartLeftAxisDecorator=function ChartLeftAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",children:Story()})]})})};ChartLeftAxisDecorator.displayName="ChartLeftAxisDecorator";try{ChartBottomAxisDecorator.displayName="ChartBottomAxisDecorator",ChartBottomAxisDecorator.__docgenInfo={description:"",displayName:"ChartBottomAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/axes/decorators.tsx#ChartBottomAxisDecorator"]={docgenInfo:ChartBottomAxisDecorator.__docgenInfo,name:"ChartBottomAxisDecorator",path:"packages/core/stories/components/axes/decorators.tsx#ChartBottomAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLeftAxisDecorator.displayName="ChartLeftAxisDecorator",ChartLeftAxisDecorator.__docgenInfo={description:"",displayName:"ChartLeftAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/axes/decorators.tsx#ChartLeftAxisDecorator"]={docgenInfo:ChartLeftAxisDecorator.__docgenInfo,name:"ChartLeftAxisDecorator",path:"packages/core/stories/components/axes/decorators.tsx#ChartLeftAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);