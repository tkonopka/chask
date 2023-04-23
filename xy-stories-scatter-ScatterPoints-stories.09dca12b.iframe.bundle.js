"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7909],{"./packages/xy/stories/scatter/ScatterPoints.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EntireDataset:()=>EntireDataset,MouseClick:()=>MouseClick,SingleSeries:()=>SingleSeries,Symbol:()=>Symbol,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _EntireDataset$parame,_EntireDataset$parame2,_EntireDataset$parame3,_SingleSeries$paramet,_SingleSeries$paramet2,_SingleSeries$paramet3,_Symbol$parameters,_Symbol$parameters2,_Symbol$parameters2$d,_MouseClick$parameter,_MouseClick$parameter2,_MouseClick$parameter3,_chsk_annotation__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/annotation/dist/chsk-annotation.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/xy/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/xy/stories/scatter/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/XY/Scatter/ScatterPoints",component:_src__WEBPACK_IMPORTED_MODULE_1__.cG};var EntireDataset={name:"entire dataset",args:{symbolStyle:{stroke:"#333333",strokeWidth:1}},component:_src__WEBPACK_IMPORTED_MODULE_1__.cG,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.WC]},SingleSeries={name:"single series",args:{ids:["quadratic"],symbolStyle:{stroke:"#333333",strokeWidth:1}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.WC]},Symbol={name:"symbol",args:{ids:["quadratic"],symbolStyle:{stroke:"#222222",strokeWidth:1},symbol:_chsk_annotation__WEBPACK_IMPORTED_MODULE_0__.CJ},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.WC]},MouseClick={name:"mouse click",args:{onClick:_decorators__WEBPACK_IMPORTED_MODULE_2__.eC},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.WC]};EntireDataset.parameters=_extends({},EntireDataset.parameters,{docs:_extends({},null==(_EntireDataset$parame=EntireDataset.parameters)?void 0:_EntireDataset$parame.docs,{source:_extends({originalSource:"{\n  name: 'entire dataset',\n  args: {\n    symbolStyle: {\n      stroke: '#333333',\n      strokeWidth: 1\n    }\n  },\n  component: ScatterPoints,\n  decorators: [ChartScatterDecorator]\n}"},null==(_EntireDataset$parame2=EntireDataset.parameters)||null==(_EntireDataset$parame3=_EntireDataset$parame2.docs)?void 0:_EntireDataset$parame3.source)})}),SingleSeries.parameters=_extends({},SingleSeries.parameters,{docs:_extends({},null==(_SingleSeries$paramet=SingleSeries.parameters)?void 0:_SingleSeries$paramet.docs,{source:_extends({originalSource:"{\n  name: 'single series',\n  args: {\n    ids: ['quadratic'],\n    symbolStyle: {\n      stroke: '#333333',\n      strokeWidth: 1\n    }\n  },\n  decorators: [ChartScatterDecorator]\n}"},null==(_SingleSeries$paramet2=SingleSeries.parameters)||null==(_SingleSeries$paramet3=_SingleSeries$paramet2.docs)?void 0:_SingleSeries$paramet3.source)})}),Symbol.parameters=_extends({},Symbol.parameters,{docs:_extends({},null==(_Symbol$parameters=Symbol.parameters)?void 0:_Symbol$parameters.docs,{source:_extends({originalSource:"{\n  name: 'symbol',\n  args: {\n    ids: ['quadratic'],\n    symbolStyle: {\n      stroke: '#222222',\n      strokeWidth: 1\n    },\n    symbol: Triangle\n  },\n  decorators: [ChartScatterDecorator]\n}"},null==(_Symbol$parameters2=Symbol.parameters)||null==(_Symbol$parameters2$d=_Symbol$parameters2.docs)?void 0:_Symbol$parameters2$d.source)})}),MouseClick.parameters=_extends({},MouseClick.parameters,{docs:_extends({},null==(_MouseClick$parameter=MouseClick.parameters)?void 0:_MouseClick$parameter.docs,{source:_extends({originalSource:"{\n  name: 'mouse click',\n  args: {\n    onClick: onScatterClick\n  },\n  decorators: [ChartScatterDecorator]\n}"},null==(_MouseClick$parameter2=MouseClick.parameters)||null==(_MouseClick$parameter3=_MouseClick$parameter2.docs)?void 0:_MouseClick$parameter3.source)})});var __namedExportsOrder=["EntireDataset","SingleSeries","Symbol","MouseClick"]},"./packages/xy/stories/scatter/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XU:()=>ChartForErrorsDecorator,UQ:()=>ChartForIntervalDecorator,oJ:()=>ChartForRegressionDecorator,WC:()=>ChartScatterDecorator,xB:()=>ChartScatterQuadraticDecorator,iT:()=>ChartWithLegendSpaceDecorator,qb:()=>ChartWithNoisyPointsDecorator,ig:()=>ChartWithTooltipDecorator,AR:()=>DoubleSquare,B2:()=>dataBubbles,eC:()=>onScatterClick});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),src=__webpack_require__("./packages/xy/src/index.tsx"),dataPolynomials=__webpack_require__("./packages/xy/stories/scatter/dataPolynomials.json");const dataNoisy_namespaceObject=JSON.parse('[{"id":"A","label":"noisy series","data":[{"x":1,"y":1.785},{"x":2,"y":2.558},{"x":3,"y":1.575},{"x":4,"y":1.792},{"x":5,"y":0.977},{"x":6,"y":0.844},{"x":7,"y":0.382},{"x":8,"y":1.998},{"x":9,"y":3.017},{"x":10,"y":1.521},{"x":11,"y":2.691},{"x":12,"y":2.531},{"x":13,"y":2.436},{"x":14,"y":5.875},{"x":15,"y":3.591},{"x":16,"y":4.681}]}]');var generators=__webpack_require__("./packages/xy/stories/scatter/generators.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ChartScatterDecorator=function ChartScatterDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataPolynomials,x:"x",y:"y",valueSize:5,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)"}),Story()]})})};ChartScatterDecorator.displayName="ChartScatterDecorator";var ChartScatterQuadraticDecorator=function ChartScatterQuadraticDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataPolynomials,x:"x",y:"y",valueSize:5,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(src.nr,{ids:["quadratic"]}),Story()]})})};ChartScatterQuadraticDecorator.displayName="ChartScatterQuadraticDecorator";var ChartWithLegendSpaceDecorator=function ChartWithLegendSpaceDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:Story()})};ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator";var round3dp=function round3dp(x){return Math.round(1e3*x)/1e3},dataRegression=[(0,generators.Z)("A",Array(16).fill(0).map((function(v,i){return round3dp(i/2+Math.random())})),(function(x){return round3dp(5+1.1*x+5*Math.random())})),(0,generators.Z)("B",Array(16).fill(0).map((function(v,i){return round3dp(i/2+Math.random())})),(function(x){return round3dp(3+.3*x+4*Math.random())}))],ChartForRegressionDecorator=function ChartForRegressionDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataRegression,x:"x",y:"y",valueSize:4,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(src.cG,{}),Story(),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{position:[220,160],anchor:[0,.5],positionUnits:"absolute",symbol:chsk_core_es.Cdc})]})})};ChartForRegressionDecorator.displayName="ChartForRegressionDecorator";var generateBubbles=function generateBubbles(n,xyInterval,vInterval){void 0===xyInterval&&(xyInterval=[.5,10]),void 0===vInterval&&(vInterval=[1,12]);var xySize=xyInterval[1]-xyInterval[0],vSize=vInterval[1]-vInterval[0];return Array(n).fill(0).map((function(){return{x:xyInterval[0]+xySize*Math.random(),y:xyInterval[0]+xySize*Math.random(),value:vInterval[0]+vSize*Math.random()}}))},dataBubbles=[{id:"A",data:generateBubbles(8)},{id:"B",data:generateBubbles(8)}],onScatterClick=function onScatterClick(data){console.log("clicked: "+JSON.stringify(data))},DoubleSquare=function DoubleSquare(props){var _props$r,_props$r2;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(chsk_core_es.bK0,_extends({},props,{r:4*(null!=(_props$r=props.r)?_props$r:1)})),(0,jsx_runtime.jsx)(chsk_core_es.bK0,_extends({},props,{r:1.5*(null!=(_props$r2=props.r)?_props$r2:1),style:_extends({},props.style,{fill:"#fff"})}))]})},ChartWithTooltipDecorator=function ChartWithTooltipDecorator(){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataRegression,x:"x",y:"y",valueSize:4,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(src.cG,{}),(0,jsx_runtime.jsx)(src.XG,{style:{stroke:"#444",strokeWidth:1,strokeDasharray:6}}),(0,jsx_runtime.jsx)(chsk_core_es.ua7,{offset:[0,-10],anchor:[.5,1],itemSize:[160,32],itemPadding:[8,8,8,8],style:{stroke:"#222222",strokeWidth:1}}),(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{position:[220,160],positionUnits:"absolute",anchor:[0,.5],symbol:chsk_core_es.Cdc})]})})};ChartWithTooltipDecorator.displayName="ChartWithTooltipDecorator";var ChartWithNoisyPointsDecorator=function ChartWithNoisyPointsDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataNoisy_namespaceObject,x:"x",y:"y",valueSize:3,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(src.cG,{}),Story()]})})};ChartWithNoisyPointsDecorator.displayName="ChartWithNoisyPointsDecorator";var dataWithInterval=[(0,generators.H)("A",Array(16).fill(0).map((function(v,i){return i})),(function(x){return 1+.3*x+1.5*Math.random()}),[-.8,1])],ChartForIntervalDecorator=function ChartForIntervalDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[500,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataWithInterval,x:"x",y:"y",valueSize:6,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"],nice:!0},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)",ticks:5}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y",values:5}),Story()]})})};ChartForIntervalDecorator.displayName="ChartForIntervalDecorator";var dataWithErrors=[(0,generators.Z)("A",Array(16).fill(0).map((function(v,i){return i+1})),(function(x){return 1+.3*x+1.5*Math.random()}))];dataWithErrors[0].data=dataWithErrors[0].data.map((function(item){return _extends({},item,{ylo:item.y-.5,yhi:item.y+.5,xlo:item.x-.5,xhi:item.x+.5})}));var ChartForErrorsDecorator=function ChartForErrorsDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataWithErrors,x:"x",y:"y",valueSize:3,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"],nice:!0},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"y (a.u.)",ticks:5}),Story(),(0,jsx_runtime.jsx)(src.cG,{})]})})};ChartForErrorsDecorator.displayName="ChartForErrorsDecorator";try{ChartScatterDecorator.displayName="ChartScatterDecorator",ChartScatterDecorator.__docgenInfo={description:"",displayName:"ChartScatterDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartScatterDecorator"]={docgenInfo:ChartScatterDecorator.__docgenInfo,name:"ChartScatterDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartScatterDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartScatterQuadraticDecorator.displayName="ChartScatterQuadraticDecorator",ChartScatterQuadraticDecorator.__docgenInfo={description:"",displayName:"ChartScatterQuadraticDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartScatterQuadraticDecorator"]={docgenInfo:ChartScatterQuadraticDecorator.__docgenInfo,name:"ChartScatterQuadraticDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartScatterQuadraticDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator",ChartWithLegendSpaceDecorator.__docgenInfo={description:"",displayName:"ChartWithLegendSpaceDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartWithLegendSpaceDecorator"]={docgenInfo:ChartWithLegendSpaceDecorator.__docgenInfo,name:"ChartWithLegendSpaceDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartWithLegendSpaceDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForRegressionDecorator.displayName="ChartForRegressionDecorator",ChartForRegressionDecorator.__docgenInfo={description:"",displayName:"ChartForRegressionDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartForRegressionDecorator"]={docgenInfo:ChartForRegressionDecorator.__docgenInfo,name:"ChartForRegressionDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartForRegressionDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onScatterClick.displayName="onScatterClick",onScatterClick.__docgenInfo={description:"",displayName:"onScatterClick",props:{id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},point:{defaultValue:null,description:"",name:"point",required:!1,type:{name:"NumericPositionSpec"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"number"}},original:{defaultValue:null,description:"",name:"original",required:!1,type:{name:"Record<string, unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#onScatterClick"]={docgenInfo:onScatterClick.__docgenInfo,name:"onScatterClick",path:"packages/xy/stories/scatter/decorators.tsx#onScatterClick"})}catch(__react_docgen_typescript_loader_error){}try{DoubleSquare.displayName="DoubleSquare",DoubleSquare.__docgenInfo={description:"",displayName:"DoubleSquare",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#DoubleSquare"]={docgenInfo:DoubleSquare.__docgenInfo,name:"DoubleSquare",path:"packages/xy/stories/scatter/decorators.tsx#DoubleSquare"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithNoisyPointsDecorator.displayName="ChartWithNoisyPointsDecorator",ChartWithNoisyPointsDecorator.__docgenInfo={description:"",displayName:"ChartWithNoisyPointsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartWithNoisyPointsDecorator"]={docgenInfo:ChartWithNoisyPointsDecorator.__docgenInfo,name:"ChartWithNoisyPointsDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartWithNoisyPointsDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForIntervalDecorator.displayName="ChartForIntervalDecorator",ChartForIntervalDecorator.__docgenInfo={description:"",displayName:"ChartForIntervalDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartForIntervalDecorator"]={docgenInfo:ChartForIntervalDecorator.__docgenInfo,name:"ChartForIntervalDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartForIntervalDecorator"})}catch(__react_docgen_typescript_loader_error){}try{dataWithErrors.displayName="dataWithErrors",dataWithErrors.__docgenInfo={description:"error bars",displayName:"dataWithErrors",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#dataWithErrors"]={docgenInfo:dataWithErrors.__docgenInfo,name:"dataWithErrors",path:"packages/xy/stories/scatter/decorators.tsx#dataWithErrors"})}catch(__react_docgen_typescript_loader_error){}try{ChartForErrorsDecorator.displayName="ChartForErrorsDecorator",ChartForErrorsDecorator.__docgenInfo={description:"",displayName:"ChartForErrorsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartForErrorsDecorator"]={docgenInfo:ChartForErrorsDecorator.__docgenInfo,name:"ChartForErrorsDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartForErrorsDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/stories/scatter/generators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>generateScatterSeriesWithInterval,Z:()=>generateScatterSeries});var generateScatterSeriesWithInterval=function generateScatterSeriesWithInterval(id,x,y,interval){return{id,data:x.map((function(xVal){var yVal=y(xVal);return{x:xVal,y:yVal,lo:yVal+interval[0]*Math.sqrt(yVal),hi:yVal+interval[1]*Math.sqrt(yVal)}}))}},generateScatterSeries=function generateScatterSeries(id,x,y){return{id,data:x.map((function(xVal){return{x:xVal,y:y(xVal)}}))}}},"./packages/xy/stories/scatter/dataPolynomials.json":module=>{module.exports=JSON.parse('[{"id":"linear","label":"linear (y = 2*x)","data":[{"x":1,"y":2},{"x":2,"y":4},{"x":3,"y":6},{"x":4,"y":8},{"x":5,"y":10},{"x":6,"y":12},{"x":7,"y":14},{"x":8,"y":16}]},{"id":"quadratic","label":"quadratic [y = x^2]","data":[{"x":1,"y":1},{"x":2,"y":4},{"x":3,"y":9},{"x":4,"y":16},{"x":5,"y":25},{"x":6,"y":36},{"x":7,"y":49},{"x":8,"y":64}]}]')}}]);