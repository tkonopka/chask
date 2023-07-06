"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8202],{"./packages/core/stories/components/axes/GridLines.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Band:()=>Band,BetweenBands:()=>BetweenBands,CustomPositions:()=>CustomPositions,DashedGridLines:()=>DashedGridLines,GridX:()=>GridX,GridY:()=>GridY,LineExtent:()=>LineExtent,NegativeLines:()=>NegativeLines,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _GridX$parameters,_GridX$parameters2,_GridX$parameters2$do,_GridY$parameters,_GridY$parameters2,_GridY$parameters2$do,_DashedGridLines$para,_DashedGridLines$para2,_DashedGridLines$para3,_NegativeLines$parame,_NegativeLines$parame2,_NegativeLines$parame3,_CustomPositions$para,_CustomPositions$para2,_CustomPositions$para3,_LineExtent$parameter,_LineExtent$parameter2,_LineExtent$parameter3,_Band$parameters,_Band$parameters2,_Band$parameters2$doc,_BetweenBands$paramet,_BetweenBands$paramet2,_BetweenBands$paramet3,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/axes/GridLines.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/stories/components/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Axes/GridLines",component:_src__WEBPACK_IMPORTED_MODULE_0__.V};var GridX={name:"grid x",args:{variant:"x"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.OR]},GridY={name:"grid y",args:{variant:"y"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.OR]},DashedGridLines={name:"dashed grid lines",args:{variant:"y",values:4,style:{strokeDasharray:"4 4",stroke:"#222222"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.OR]},NegativeLines={name:"negative lines",args:{variant:"y",values:5,style:{strokeWidth:2,stroke:"#ffffff"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.OR]},CustomPositions={name:"custom positions",args:{variant:"x",values:[0,65,85,95,100],style:{stroke:"#777777"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.OR]},LineExtent={name:"line extent",args:{expansion:[10,25],style:{stroke:"#555555"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.OR]},Band={name:"band",args:{variant:"y",style:{stroke:"#aaaaaa"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.VK]},BetweenBands={name:"between bands",args:{variant:"y",shift:[-.5,.5],style:{stroke:"#aaaaaa"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.VK]};GridX.parameters=_extends({},GridX.parameters,{docs:_extends({},null==(_GridX$parameters=GridX.parameters)?void 0:_GridX$parameters.docs,{source:_extends({originalSource:"{\n  name: 'grid x',\n  args: {\n    variant: 'x'\n  },\n  decorators: [ChartViewDecorator]\n}"},null==(_GridX$parameters2=GridX.parameters)||null==(_GridX$parameters2$do=_GridX$parameters2.docs)?void 0:_GridX$parameters2$do.source)})}),GridY.parameters=_extends({},GridY.parameters,{docs:_extends({},null==(_GridY$parameters=GridY.parameters)?void 0:_GridY$parameters.docs,{source:_extends({originalSource:"{\n  name: 'grid y',\n  args: {\n    variant: 'y'\n  },\n  decorators: [ChartViewDecorator]\n}"},null==(_GridY$parameters2=GridY.parameters)||null==(_GridY$parameters2$do=_GridY$parameters2.docs)?void 0:_GridY$parameters2$do.source)})}),DashedGridLines.parameters=_extends({},DashedGridLines.parameters,{docs:_extends({},null==(_DashedGridLines$para=DashedGridLines.parameters)?void 0:_DashedGridLines$para.docs,{source:_extends({originalSource:"{\n  name: 'dashed grid lines',\n  args: {\n    variant: 'y',\n    values: 4,\n    style: {\n      strokeDasharray: '4 4',\n      stroke: '#222222'\n    }\n  },\n  decorators: [ChartViewDecorator]\n}"},null==(_DashedGridLines$para2=DashedGridLines.parameters)||null==(_DashedGridLines$para3=_DashedGridLines$para2.docs)?void 0:_DashedGridLines$para3.source)})}),NegativeLines.parameters=_extends({},NegativeLines.parameters,{docs:_extends({},null==(_NegativeLines$parame=NegativeLines.parameters)?void 0:_NegativeLines$parame.docs,{source:_extends({originalSource:"{\n  name: 'negative lines',\n  args: {\n    variant: 'y',\n    values: 5,\n    style: {\n      strokeWidth: 2,\n      stroke: '#ffffff'\n    }\n  },\n  decorators: [ChartViewDecorator]\n}"},null==(_NegativeLines$parame2=NegativeLines.parameters)||null==(_NegativeLines$parame3=_NegativeLines$parame2.docs)?void 0:_NegativeLines$parame3.source)})}),CustomPositions.parameters=_extends({},CustomPositions.parameters,{docs:_extends({},null==(_CustomPositions$para=CustomPositions.parameters)?void 0:_CustomPositions$para.docs,{source:_extends({originalSource:"{\n  name: 'custom positions',\n  args: {\n    variant: 'x',\n    values: [0, 65, 85, 95, 100],\n    style: {\n      stroke: '#777777'\n    }\n  },\n  decorators: [ChartViewDecorator]\n}"},null==(_CustomPositions$para2=CustomPositions.parameters)||null==(_CustomPositions$para3=_CustomPositions$para2.docs)?void 0:_CustomPositions$para3.source)})}),LineExtent.parameters=_extends({},LineExtent.parameters,{docs:_extends({},null==(_LineExtent$parameter=LineExtent.parameters)?void 0:_LineExtent$parameter.docs,{source:_extends({originalSource:"{\n  name: 'line extent',\n  args: {\n    expansion: [10, 25],\n    style: {\n      stroke: '#555555'\n    }\n  },\n  decorators: [ChartViewDecorator]\n}"},null==(_LineExtent$parameter2=LineExtent.parameters)||null==(_LineExtent$parameter3=_LineExtent$parameter2.docs)?void 0:_LineExtent$parameter3.source)})}),Band.parameters=_extends({},Band.parameters,{docs:_extends({},null==(_Band$parameters=Band.parameters)?void 0:_Band$parameters.docs,{source:_extends({originalSource:"{\n  name: 'band',\n  args: {\n    variant: 'y',\n    style: {\n      stroke: '#aaaaaa'\n    }\n  },\n  decorators: [ChartBandViewDecorator]\n}"},null==(_Band$parameters2=Band.parameters)||null==(_Band$parameters2$doc=_Band$parameters2.docs)?void 0:_Band$parameters2$doc.source)})}),BetweenBands.parameters=_extends({},BetweenBands.parameters,{docs:_extends({},null==(_BetweenBands$paramet=BetweenBands.parameters)?void 0:_BetweenBands$paramet.docs,{source:_extends({originalSource:"{\n  name: 'between bands',\n  args: {\n    variant: 'y',\n    shift: [-0.5, 0.5],\n    style: {\n      stroke: '#aaaaaa'\n    }\n  },\n  decorators: [ChartBandViewDecorator]\n}"},null==(_BetweenBands$paramet2=BetweenBands.parameters)||null==(_BetweenBands$paramet3=_BetweenBands$paramet2.docs)?void 0:_BetweenBands$paramet3.source)})});var __namedExportsOrder=["GridX","GridY","DashedGridLines","NegativeLines","CustomPositions","LineExtent","Band","BetweenBands"]},"./packages/core/src/axes/GridLines.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>GridLines});var _scales__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/scales/context.tsx"),_scales__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/scales/ticks.ts"),_general__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/general/contexts.tsx"),_general__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/core/src/general/utils.ts"),_general__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/core/src/general/constants.ts"),_shapes__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/core/src/shapes/Line.tsx"),_themes__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/core/src/themes/hooks.tsx"),_defaults__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/axes/defaults.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var UnthemedGridLines=function UnthemedGridLines(_ref){var variant=_ref.variant,values=_ref.values,_ref$shift=_ref.shift,shift=void 0===_ref$shift?_defaults__WEBPACK_IMPORTED_MODULE_1__.ni.shift:_ref$shift,_ref$shiftUnit=_ref.shiftUnit,shiftUnit=void 0===_ref$shiftUnit?_defaults__WEBPACK_IMPORTED_MODULE_1__.ni.shiftUnit:_ref$shiftUnit,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?_defaults__WEBPACK_IMPORTED_MODULE_1__.ni.expansion:_ref$expansion,className=_ref.className,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,scales=(0,_scales__WEBPACK_IMPORTED_MODULE_2__.kE)().scales,size=(0,_general__WEBPACK_IMPORTED_MODULE_3__.Bs)().size,isX="x"===variant,scale=isX?scales.x:scales.y,tickValues=Array.isArray(values)?values:(0,_scales__WEBPACK_IMPORTED_MODULE_4__.f)(scale,values),coordinates=new Set,tickCoordinates=[],shiftMultiplier="band"===shiftUnit?1:scale.step()/scale.bandwidth();shift.forEach((function(s){(0,_scales__WEBPACK_IMPORTED_MODULE_4__.P)(scale,tickValues,s*shiftMultiplier).map((function(v,i){coordinates.has(v)||(tickCoordinates.push([String(tickValues[i])+s,v]),coordinates.add(v))}))}));var _numberPair=(0,_general__WEBPACK_IMPORTED_MODULE_5__.Ry)(expansion),e1=_numberPair[0],e2=_numberPair[1],lineProps={variant:"grid",className,style,setRole:!1},result=isX?tickCoordinates.map((function(kv){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shapes__WEBPACK_IMPORTED_MODULE_6__.x,_extends({},lineProps,{x1:kv[1],x2:kv[1],y1:-e1,y2:size[_general__WEBPACK_IMPORTED_MODULE_7__.Y]+e2}),kv[0])})):tickCoordinates.map((function(kv){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shapes__WEBPACK_IMPORTED_MODULE_6__.x,_extends({},lineProps,{x1:-e1,x2:size[_general__WEBPACK_IMPORTED_MODULE_7__.X]+e2,y1:kv[1],y2:kv[1]}),kv[0])}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{role:setRole?"grid-lines":void 0,children:result})};UnthemedGridLines.displayName="UnthemedGridLines";var GridLines=function GridLines(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UnthemedGridLines,_extends({},(0,_themes__WEBPACK_IMPORTED_MODULE_8__.m)(props,"GridLines")))};GridLines.displayName="GridLines";try{GridLines.displayName="GridLines",GridLines.__docgenInfo={description:"",displayName:"GridLines",props:{variant:{defaultValue:null,description:"variant",name:"variant",required:!0,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'}]}},values:{defaultValue:null,description:"positions for grid lines",name:"values",required:!1,type:{name:"number | string[] | number[]"}},shift:{defaultValue:{value:"defaultGridLinesProps.shift"},description:"shift compared to natural tick position",name:"shift",required:!1,type:{name:"number[]"}},shiftUnit:{defaultValue:{value:"defaultGridLinesProps.shiftUnit"},description:"unit for shift values",name:"shiftUnit",required:!1,type:{name:"enum",value:[{value:'"band"'},{value:'"step"'}]}},expansion:{defaultValue:{value:"defaultGridLinesProps.expansion"},description:"expansion of lines at the start and end of the scale",name:"expansion",required:!1,type:{name:"number | TwoSideSizeSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/axes/GridLines.tsx#GridLines"]={docgenInfo:GridLines.__docgenInfo,name:"GridLines",path:"packages/core/src/axes/GridLines.tsx#GridLines"})}catch(__react_docgen_typescript_loader_error){}}}]);