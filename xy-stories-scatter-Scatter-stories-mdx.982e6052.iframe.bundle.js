"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3119],{"./packages/xy/stories/scatter/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XU:()=>ChartForErrorsDecorator,UQ:()=>ChartForIntervalDecorator,oJ:()=>ChartForRegressionDecorator,WC:()=>ChartScatterDecorator,xB:()=>ChartScatterQuadraticDecorator,iT:()=>ChartWithLegendSpaceDecorator,qb:()=>ChartWithNoisyPointsDecorator,ig:()=>ChartWithTooltipDecorator,AR:()=>DoubleSquare,B2:()=>dataBubbles,eC:()=>onScatterClick});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),src=__webpack_require__("./packages/xy/src/index.tsx"),dataPolynomials=__webpack_require__("./packages/xy/stories/scatter/dataPolynomials.json");const dataNoisy_namespaceObject=JSON.parse('[{"id":"A","label":"noisy series","data":[{"x":1,"y":1.785},{"x":2,"y":2.558},{"x":3,"y":1.575},{"x":4,"y":1.792},{"x":5,"y":0.977},{"x":6,"y":0.844},{"x":7,"y":0.382},{"x":8,"y":1.998},{"x":9,"y":3.017},{"x":10,"y":1.521},{"x":11,"y":2.691},{"x":12,"y":2.531},{"x":13,"y":2.436},{"x":14,"y":5.875},{"x":15,"y":3.591},{"x":16,"y":4.681}]}]');var generators=__webpack_require__("./packages/xy/stories/scatter/generators.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ChartScatterDecorator=function ChartScatterDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataPolynomials,x:"x",y:"y",valueSize:5,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"left",label:"y (a.u.)"}),Story()]})})};ChartScatterDecorator.displayName="ChartScatterDecorator";var ChartScatterQuadraticDecorator=function ChartScatterQuadraticDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataPolynomials,x:"x",y:"y",valueSize:5,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(src.nr,{ids:["quadratic"]}),Story()]})})};ChartScatterQuadraticDecorator.displayName="ChartScatterQuadraticDecorator";var ChartWithLegendSpaceDecorator=function ChartWithLegendSpaceDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:Story()})};ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator";var round3dp=function round3dp(x){return Math.round(1e3*x)/1e3},dataRegression=[(0,generators.Z)("A",Array(16).fill(0).map((function(v,i){return round3dp(i/2+Math.random())})),(function(x){return round3dp(5+1.1*x+5*Math.random())})),(0,generators.Z)("B",Array(16).fill(0).map((function(v,i){return round3dp(i/2+Math.random())})),(function(x){return round3dp(3+.3*x+4*Math.random())}))],ChartForRegressionDecorator=function ChartForRegressionDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataRegression,x:"x",y:"y",valueSize:4,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(src.cG,{}),Story(),(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.De,{position:[220,160],anchor:[0,.5],positionUnits:"absolute",symbol:chsk_core_es.Cd})]})})};ChartForRegressionDecorator.displayName="ChartForRegressionDecorator";var generateBubbles=function generateBubbles(n,xyInterval,vInterval){void 0===xyInterval&&(xyInterval=[.5,10]),void 0===vInterval&&(vInterval=[1,12]);var xySize=xyInterval[1]-xyInterval[0],vSize=vInterval[1]-vInterval[0];return Array(n).fill(0).map((function(){return{x:xyInterval[0]+xySize*Math.random(),y:xyInterval[0]+xySize*Math.random(),value:vInterval[0]+vSize*Math.random()}}))},dataBubbles=[{id:"A",data:generateBubbles(8)},{id:"B",data:generateBubbles(8)}],onScatterClick=function onScatterClick(data){console.log("clicked: "+JSON.stringify(data))},DoubleSquare=function DoubleSquare(props){var _props$r,_props$r2;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(chsk_core_es.bK,_extends({},props,{r:4*(null!=(_props$r=props.r)?_props$r:1)})),(0,jsx_runtime.jsx)(chsk_core_es.bK,_extends({},props,{r:1.5*(null!=(_props$r2=props.r)?_props$r2:1),style:_extends({},props.style,{fill:"#fff"})}))]})},ChartWithTooltipDecorator=function ChartWithTooltipDecorator(){return(0,jsx_runtime.jsx)(chsk_core_es.kL,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataRegression,x:"x",y:"y",valueSize:4,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(src.cG,{}),(0,jsx_runtime.jsx)(src.XG,{style:{stroke:"#444",strokeWidth:1,strokeDasharray:6}}),(0,jsx_runtime.jsx)(chsk_core_es.u,{offset:[0,-10],anchor:[.5,1],itemSize:[160,32],itemPadding:[8,8,8,8],style:{stroke:"#222222",strokeWidth:1}}),(0,jsx_runtime.jsx)(chsk_core_es.De,{position:[220,160],positionUnits:"absolute",anchor:[0,.5],symbol:chsk_core_es.Cd})]})})};ChartWithTooltipDecorator.displayName="ChartWithTooltipDecorator";var ChartWithNoisyPointsDecorator=function ChartWithNoisyPointsDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataNoisy_namespaceObject,x:"x",y:"y",valueSize:3,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"left",label:"y (a.u.)"}),(0,jsx_runtime.jsx)(src.cG,{}),Story()]})})};ChartWithNoisyPointsDecorator.displayName="ChartWithNoisyPointsDecorator";var dataWithInterval=[(0,generators.H)("A",Array(16).fill(0).map((function(v,i){return i})),(function(x){return 1+.3*x+1.5*Math.random()}),[-.8,1])],ChartForIntervalDecorator=function ChartForIntervalDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL,{size:[500,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataWithInterval,x:"x",y:"y",valueSize:6,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"],nice:!0},children:[(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"left",label:"y (a.u.)",ticks:5}),(0,jsx_runtime.jsx)(chsk_core_es.VJ,{variant:"y",values:5}),Story()]})})};ChartForIntervalDecorator.displayName="ChartForIntervalDecorator";var dataWithErrors=[(0,generators.Z)("A",Array(16).fill(0).map((function(v,i){return i+1})),(function(x){return 1+.3*x+1.5*Math.random()}))];dataWithErrors[0].data=dataWithErrors[0].data.map((function(item){return _extends({},item,{ylo:item.y-.5,yhi:item.y+.5,xlo:item.x-.5,xhi:item.x+.5})}));var ChartForErrorsDecorator=function ChartForErrorsDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.bp,{data:dataWithErrors,x:"x",y:"y",valueSize:3,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"],nice:!0},children:[(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"left",label:"y (a.u.)",ticks:5}),Story(),(0,jsx_runtime.jsx)(src.cG,{})]})})};ChartForErrorsDecorator.displayName="ChartForErrorsDecorator";try{ChartScatterDecorator.displayName="ChartScatterDecorator",ChartScatterDecorator.__docgenInfo={description:"",displayName:"ChartScatterDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartScatterDecorator"]={docgenInfo:ChartScatterDecorator.__docgenInfo,name:"ChartScatterDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartScatterDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartScatterQuadraticDecorator.displayName="ChartScatterQuadraticDecorator",ChartScatterQuadraticDecorator.__docgenInfo={description:"",displayName:"ChartScatterQuadraticDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartScatterQuadraticDecorator"]={docgenInfo:ChartScatterQuadraticDecorator.__docgenInfo,name:"ChartScatterQuadraticDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartScatterQuadraticDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator",ChartWithLegendSpaceDecorator.__docgenInfo={description:"",displayName:"ChartWithLegendSpaceDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartWithLegendSpaceDecorator"]={docgenInfo:ChartWithLegendSpaceDecorator.__docgenInfo,name:"ChartWithLegendSpaceDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartWithLegendSpaceDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForRegressionDecorator.displayName="ChartForRegressionDecorator",ChartForRegressionDecorator.__docgenInfo={description:"",displayName:"ChartForRegressionDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartForRegressionDecorator"]={docgenInfo:ChartForRegressionDecorator.__docgenInfo,name:"ChartForRegressionDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartForRegressionDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onScatterClick.displayName="onScatterClick",onScatterClick.__docgenInfo={description:"",displayName:"onScatterClick",props:{id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},point:{defaultValue:null,description:"",name:"point",required:!1,type:{name:"NumericPositionSpec"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"number"}},original:{defaultValue:null,description:"",name:"original",required:!1,type:{name:"Record<string, unknown>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#onScatterClick"]={docgenInfo:onScatterClick.__docgenInfo,name:"onScatterClick",path:"packages/xy/stories/scatter/decorators.tsx#onScatterClick"})}catch(__react_docgen_typescript_loader_error){}try{DoubleSquare.displayName="DoubleSquare",DoubleSquare.__docgenInfo={description:"",displayName:"DoubleSquare",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#DoubleSquare"]={docgenInfo:DoubleSquare.__docgenInfo,name:"DoubleSquare",path:"packages/xy/stories/scatter/decorators.tsx#DoubleSquare"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithNoisyPointsDecorator.displayName="ChartWithNoisyPointsDecorator",ChartWithNoisyPointsDecorator.__docgenInfo={description:"",displayName:"ChartWithNoisyPointsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartWithNoisyPointsDecorator"]={docgenInfo:ChartWithNoisyPointsDecorator.__docgenInfo,name:"ChartWithNoisyPointsDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartWithNoisyPointsDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForIntervalDecorator.displayName="ChartForIntervalDecorator",ChartForIntervalDecorator.__docgenInfo={description:"",displayName:"ChartForIntervalDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartForIntervalDecorator"]={docgenInfo:ChartForIntervalDecorator.__docgenInfo,name:"ChartForIntervalDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartForIntervalDecorator"})}catch(__react_docgen_typescript_loader_error){}try{dataWithErrors.displayName="dataWithErrors",dataWithErrors.__docgenInfo={description:"error bars",displayName:"dataWithErrors",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#dataWithErrors"]={docgenInfo:dataWithErrors.__docgenInfo,name:"dataWithErrors",path:"packages/xy/stories/scatter/decorators.tsx#dataWithErrors"})}catch(__react_docgen_typescript_loader_error){}try{ChartForErrorsDecorator.displayName="ChartForErrorsDecorator",ChartForErrorsDecorator.__docgenInfo={description:"",displayName:"ChartForErrorsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/scatter/decorators.tsx#ChartForErrorsDecorator"]={docgenInfo:ChartForErrorsDecorator.__docgenInfo,name:"ChartForErrorsDecorator",path:"packages/xy/stories/scatter/decorators.tsx#ChartForErrorsDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/stories/scatter/generators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>generateScatterSeriesWithInterval,Z:()=>generateScatterSeries});var generateScatterSeriesWithInterval=function generateScatterSeriesWithInterval(id,x,y,interval){return{id,data:x.map((function(xVal){var yVal=y(xVal);return{x:xVal,y:yVal,lo:yVal+interval[0]*Math.sqrt(yVal),hi:yVal+interval[1]*Math.sqrt(yVal)}}))}},generateScatterSeries=function generateScatterSeries(id,x,y){return{id,data:x.map((function(xVal){return{x:xVal,y:y(xVal)}}))}}},"./packages/xy/stories/scatter/Scatter.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PointsAndLegend:()=>PointsAndLegend,Template:()=>Template,autoRescaling:()=>autoRescaling,baseSymbolSize:()=>baseSymbolSize,bubbleColor:()=>bubbleColor,bubbleSize:()=>bubbleSize,default:()=>__WEBPACK_DEFAULT_EXPORT__,fixedScales:()=>fixedScales,withClipping:()=>withClipping,withoutClipping:()=>withoutClipping});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/stories/scatter/decorators.tsx"),_dataPolynomials_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/xy/stories/scatter/dataPolynomials.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.bp,{...args}),PointsAndLegend=({title="Polynomials",legend=!0,controller=!1,id="id",clip=!1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"left",label:"y (a.u.)"}),clip?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.g_,{id,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.cG,{})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.cG,{}),legend?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.De,{position:[220,60],anchor:[0,.5],positionUnits:"absolute",title}):null,controller?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.N5,{itemStyle:{textAnchor:"start"}}):null]});const autoRescaling=Template.bind({});autoRescaling.storyName="auto-rescaling",autoRescaling.args={data:_dataPolynomials_json__WEBPACK_IMPORTED_MODULE_5__,x:"x",y:"y",valueSize:5,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},autoRescale:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{})},autoRescaling.parameters={storySource:{source:"args => <Scatter {...args} />"}},autoRescaling.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT];const fixedScales=Template.bind({});fixedScales.storyName="fixed scales",fixedScales.args={data:_dataPolynomials_json__WEBPACK_IMPORTED_MODULE_5__,x:"x",y:"y",valueSize:5,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},autoRescale:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{})},fixedScales.parameters={storySource:{source:"args => <Scatter {...args} />"}},fixedScales.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT];const baseSymbolSize=Template.bind({});baseSymbolSize.storyName="base symbol size",baseSymbolSize.args={data:_dataPolynomials_json__WEBPACK_IMPORTED_MODULE_5__,x:"x",y:"y",valueSize:9,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},autoRescale:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{})},baseSymbolSize.parameters={storySource:{source:"args => <Scatter {...args} />"}},baseSymbolSize.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT];const bubbleSize=Template.bind({});bubbleSize.storyName="bubble size",bubbleSize.args={data:_decorators__WEBPACK_IMPORTED_MODULE_4__.B2,x:"x",y:"y",valueSize:"value",scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},scaleSize:{variant:"sqrt",domain:[0,"auto"],size:10},autoRescale:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{title:"Series"})},bubbleSize.parameters={storySource:{source:"args => <Scatter {...args} />"}},bubbleSize.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT];const bubbleColor=Template.bind({});bubbleColor.storyName="bubble color",bubbleColor.args={data:_decorators__WEBPACK_IMPORTED_MODULE_4__.B2,x:"x",y:"y",valueSize:8,valueColor:"value",scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},scaleColor:{variant:"sequential",colors:"Reds",domain:"auto"},autoRescale:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{title:"Series",legend:!1})},bubbleColor.parameters={storySource:{source:"args => <Scatter {...args} />"}},bubbleColor.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT];const withoutClipping=Template.bind({});withoutClipping.storyName="without clipping",withoutClipping.args={data:_decorators__WEBPACK_IMPORTED_MODULE_4__.B2,x:"x",y:"y",valueSize:8,valueColor:"value",scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},scaleColor:{variant:"sequential",colors:"Reds",domain:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{title:"Series",legend:!1,id:"clip0",clip:!1,controller:!0})},withoutClipping.parameters={storySource:{source:"args => <Scatter {...args} />"}},withoutClipping.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT];const withClipping=Template.bind({});withClipping.storyName="with clipping",withClipping.args={data:_decorators__WEBPACK_IMPORTED_MODULE_4__.B2,x:"x",y:"y",valueSize:8,valueColor:"value",scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},scaleColor:{variant:"sequential",colors:"Reds",domain:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{title:"Series",legend:!1,id:"clip1",clip:!0,controller:!0})},withClipping.parameters={storySource:{source:"args => <Scatter {...args} />"}},withClipping.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT];const componentMeta={title:"Addons/XY/Scatter/Scatter",tags:["stories-mdx"],includeStories:["autoRescaling","fixedScales","baseSymbolSize","bubbleSize","bubbleColor","withoutClipping","withClipping"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h1,{id:"scatter",children:"Scatter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/XY/Scatter/Scatter"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"Scatter"})," sets up a view for a scatter plot."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"Scatter"})," is an organizational component and it does not actually draw any visual elements. However, it manages data representations that can be visualized with other components, for example ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"ScatterPoints"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"ScatterCurve"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_3__.bp}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"data",children:"Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["Data should be prepared as an array of objects. All objects should contain a string identifier ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"'id'"})," and an object called ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"data"})," that itself consists of an array of records. The records in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"data"})," array will constitute the individual data points for plotting."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.p,{children:"The pseudocode below demonstrates the required format."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"javascript",code:'\n[\n  {\n    "id": "alpha",\n    "data": [\n      {\n        "a": 1,\n        "b": 2,\n        "c": 3\n      },\n      {\n        "a": 2,\n        "b": 4,\n        "c": 6\n      }\n    ]\n  },\n  ...\n]\n'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["The above dataset has a series identifier ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"alpha"}),". Points associated with this id will be drawn in the same color.\nThe nested data array consists of two records with three keys each (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"a"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"b"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"c"}),").\nThese keys can be used to extract values for x- and y-axes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"axis-scaling",children:"Axis scaling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"Scatter"})," can set up x- and y-axes according to manual specifications, or determine relevant settings based on data. To demonstrate this, the examples below use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"Scatter"})," (which doesn't create any visual elements) together with components that visualize axes and an example dataset."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["When the scales on the axes are determined automatically, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"Scatter"})," automatically adjusts the scales when the data changes, for example when certain data series are toggled via a legend (below, left). The automatic rescaling can be disabled via prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"autoRescale"})," (below, right)."]}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"auto-rescaling",args:{data:_dataPolynomials_json__WEBPACK_IMPORTED_MODULE_5__,x:"x",y:"y",valueSize:5,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},autoRescale:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{})},component:_src__WEBPACK_IMPORTED_MODULE_3__.bp,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"fixed scales",args:{data:_dataPolynomials_json__WEBPACK_IMPORTED_MODULE_5__,x:"x",y:"y",valueSize:5,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},autoRescale:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{})},component:_src__WEBPACK_IMPORTED_MODULE_3__.bp,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"symbol-size",children:"Symbol size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"Scatter"})," assumes all data points should have equal size. The base size is determined by prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"valueSize"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"base symbol size",args:{data:_dataPolynomials_json__WEBPACK_IMPORTED_MODULE_5__,x:"x",y:"y",valueSize:9,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},autoRescale:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{})},component:_src__WEBPACK_IMPORTED_MODULE_3__.bp,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["To apply different symbol sizes to each point, set ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"valueSize"})," to a string key that carries a size value in the original data. Each point's size value is used together with the chart's size scale, specified with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"scaleSize"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"bubble size",args:{data:_decorators__WEBPACK_IMPORTED_MODULE_4__.B2,x:"x",y:"y",valueSize:"value",scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},scaleSize:{variant:"sqrt",domain:[0,"auto"],size:10},autoRescale:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{title:"Series"})},component:_src__WEBPACK_IMPORTED_MODULE_3__.bp,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["Note that size is interpreted as a quantity that is proportional to the area of a symbol. To visualize the size scale, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"LegendSizeScale"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"symbol-color",children:"Symbol color"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["By default, symbol colors are determined automatically using a categorical color scheme. Thus, colors are determined by the data series (see examples above). The color scheme can be adjusted using prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"scaleColor"})," - use a categorical scale variant."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["It is possible to apply colors to individual points by setting prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"valueColor"}),". Values extracted with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"valueColor"})," will be transformed into colors using a color scale specified via prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"scaleColor"})," - use a sequential or diverging scale variant. The example below shows points in shades of red."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"bubble color",args:{data:_decorators__WEBPACK_IMPORTED_MODULE_4__.B2,x:"x",y:"y",valueSize:8,valueColor:"value",scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},scaleColor:{variant:"sequential",colors:"Reds",domain:"auto"},autoRescale:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{title:"Series",legend:!1})},component:_src__WEBPACK_IMPORTED_MODULE_3__.bp,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["The data in the example above are the same as in the bubble size example. Thus, large bubbles in the earlier examples appear as dark dots above. To visualize the color scale, see ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"LegendColorScale"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"clipping",children:"Clipping"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["To restrict view content to the intended dimensions, use a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"ViewClip"})," component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.p,{children:"The two examples below demonstrate the effects of clipping.\n(Use the toolbar to zoom in and out.)\nThe first example does not use clipping, and the data points can appear beyond the axes upon zoom.\nThe second example uses clipping, and the data are always constrained."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"without clipping",args:{data:_decorators__WEBPACK_IMPORTED_MODULE_4__.B2,x:"x",y:"y",valueSize:8,valueColor:"value",scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},scaleColor:{variant:"sequential",colors:"Reds",domain:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{title:"Series",legend:!1,id:"clip0",clip:!1,controller:!0})},component:_src__WEBPACK_IMPORTED_MODULE_3__.bp,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"with clipping",args:{data:_decorators__WEBPACK_IMPORTED_MODULE_4__.B2,x:"x",y:"y",valueSize:8,valueColor:"value",scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},scaleColor:{variant:"sequential",colors:"Reds",domain:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PointsAndLegend,{title:"Series",legend:!1,id:"clip1",clip:!0,controller:!0})},component:_src__WEBPACK_IMPORTED_MODULE_3__.bp,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.iT],children:Template.bind({})})]})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./packages/xy/stories/scatter/dataPolynomials.json":module=>{module.exports=JSON.parse('[{"id":"linear","label":"linear (y = 2*x)","data":[{"x":1,"y":2},{"x":2,"y":4},{"x":3,"y":6},{"x":4,"y":8},{"x":5,"y":10},{"x":6,"y":12},{"x":7,"y":14},{"x":8,"y":16}]},{"id":"quadratic","label":"quadratic [y = x^2]","data":[{"x":1,"y":1},{"x":2,"y":4},{"x":3,"y":9},{"x":4,"y":16},{"x":5,"y":25},{"x":6,"y":36},{"x":7,"y":49},{"x":8,"y":64}]}]')}}]);