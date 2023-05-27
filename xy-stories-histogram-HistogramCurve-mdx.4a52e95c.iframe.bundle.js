"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7452],{"./packages/xy/stories/histogram/HistogramCurve.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LinearCurve:()=>LinearCurve,MultipleSeries:()=>MultipleSeries,StepCurve:()=>StepCurve,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _LinearCurve$paramete,_LinearCurve$paramete2,_LinearCurve$paramete3,_StepCurve$parameters,_StepCurve$parameters2,_StepCurve$parameters3,_MultipleSeries$param,_MultipleSeries$param2,_MultipleSeries$param3,_chsk_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/xy/src/histogram/HistogramCurve.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/src/histogram/Histogram.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/xy/stories/histogram/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/XY/Histograms/HistogramCurve",component:_src__WEBPACK_IMPORTED_MODULE_1__.L};var LinearCurve={name:"linear curve",args:{curve:"MonotoneX"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Nu]},StepCurve={name:"step curve",args:{curve:"Step"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Nu]},MultipleSeries={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_4__.b,{data:_decorators__WEBPACK_IMPORTED_MODULE_2__.m,breaks:[-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7],scaleX:{variant:"linear",domain:"auto"},scaleY:{variant:"linear",domain:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_3__.RDh,{variant:"left",label:"counts"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.L,{ids:["A"],curve:"Step",style:{strokeWidth:3}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.L,{ids:["B"],curve:"MonotoneX",style:{strokeDasharray:"6 6",strokeWidth:2}})]})})},name:"multiple series"};LinearCurve.parameters=_extends({},LinearCurve.parameters,{docs:_extends({},null==(_LinearCurve$paramete=LinearCurve.parameters)?void 0:_LinearCurve$paramete.docs,{source:_extends({originalSource:"{\n  name: 'linear curve',\n  args: {\n    curve: 'MonotoneX'\n  },\n  decorators: [ChartHistogramDecorator]\n}"},null==(_LinearCurve$paramete2=LinearCurve.parameters)||null==(_LinearCurve$paramete3=_LinearCurve$paramete2.docs)?void 0:_LinearCurve$paramete3.source)})}),StepCurve.parameters=_extends({},StepCurve.parameters,{docs:_extends({},null==(_StepCurve$parameters=StepCurve.parameters)?void 0:_StepCurve$parameters.docs,{source:_extends({originalSource:"{\n  name: 'step curve',\n  args: {\n    curve: 'Step'\n  },\n  decorators: [ChartHistogramDecorator]\n}"},null==(_StepCurve$parameters2=StepCurve.parameters)||null==(_StepCurve$parameters3=_StepCurve$parameters2.docs)?void 0:_StepCurve$parameters3.source)})}),MultipleSeries.parameters=_extends({},MultipleSeries.parameters,{docs:_extends({},null==(_MultipleSeries$param=MultipleSeries.parameters)?void 0:_MultipleSeries$param.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{\n    display: 'inline-block'\n  }}>\n            <Histogram data={sampleData} breaks={[-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]} scaleX={{\n      variant: 'linear',\n      domain: 'auto'\n    }} scaleY={{\n      variant: 'linear',\n      domain: 'auto'\n    }}>\n                <Axis variant={'bottom'} label={'x (a.u.)'} />\n                <Axis variant={'left'} label={'counts'} />\n                <HistogramCurve ids={['A']} curve=\"Step\" style={{\n        strokeWidth: 3\n      }} />\n                <HistogramCurve ids={['B']} curve=\"MonotoneX\" style={{\n        strokeDasharray: '6 6',\n        strokeWidth: 2\n      }} />\n            </Histogram>\n        </Chart>,\n  name: 'multiple series'\n}"},null==(_MultipleSeries$param2=MultipleSeries.parameters)||null==(_MultipleSeries$param3=_MultipleSeries$param2.docs)?void 0:_MultipleSeries$param3.source)})});var __namedExportsOrder=["LinearCurve","StepCurve","MultipleSeries"]},"./packages/xy/src/histogram/Histogram.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Histogram});var react=__webpack_require__("./node_modules/react/index.js"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/xy/src/histogram/context.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","container","data","breaks","scaleX","scaleY","scaleColor","autoRescale","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Histogram=function Histogram(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"count":_ref$variant,_ref$container=_ref.container,container=void 0===_ref$container?chsk_core_es.WdC:_ref$container,data=_ref.data,breaks=_ref.breaks,_ref$scaleX=_ref.scaleX,scaleX=void 0===_ref$scaleX?chsk_core_es.Bs3:_ref$scaleX,_ref$scaleY=_ref.scaleY,scaleY=void 0===_ref$scaleY?chsk_core_es.Bs3:_ref$scaleY,scaleColor=_ref.scaleColor,_ref$autoRescale=_ref.autoRescale,autoRescale=void 0===_ref$autoRescale||_ref$autoRescale,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,chsk_core_es.FgM)(),_useContainer=(0,chsk_core_es.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,seriesIndexes=(0,react.useMemo)((function(){return(0,chsk_core_es.snp)(data)}),[data]),seriesIds=(0,react.useMemo)((function(){return data.map((function(item){return item.id}))}),[data]),disabled=(0,chsk_core_es.gKR)(seriesIds).disabled,breaksArray=(0,react.useMemo)((function(){return Array.isArray(breaks)?breaks:function getBreaksArray(data,n){var values=(0,chsk_core_es.FG_)(data.map((function(seriesData){return(0,chsk_core_es.FG_)(seriesData.data)})).flat());return(0,chsk_core_es.Sye)(values,n)}(data,breaks)}),[data,breaks]),processedData=(0,react.useMemo)((function(){return function processData(data,breaks,density){return data.map((function(seriesData,index){var _moments=(0,chsk_core_es.Gi7)(seriesData.data),mean=_moments[0],variance=_moments[1],bins=(0,chsk_core_es.NYs)(seriesData.data,breaks,density);return{id:seriesData.id,index,points:(0,chsk_core_es.LM9)(bins,breaks),breaks,n:seriesData.data.length,mean,sd:Math.sqrt(variance)}}))}(data,breaksArray,"density"===variant)}),[data,breaksArray,variant]),_getHistogramScalePro=function getHistogramScaleProps(data,scaleSpecX,scaleSpecY,size,disabled){var result={x:(0,chsk_core_es.BRZ)(scaleSpecX),y:(0,chsk_core_es.BRZ)(scaleSpecY)},filterDisabled=function filterDisabled(v,i){return!disabled[i]};if(!(0,chsk_core_es.HBl)(scaleSpecX)){var x=data.filter(filterDisabled).map((function(seriesData){return seriesData.points.map((function(point){return point[chsk_core_es.X]}))})).flat();result.x=(0,chsk_core_es.zAC)(scaleSpecX,(0,chsk_core_es.FG_)(x))}if(!(0,chsk_core_es.HBl)(scaleSpecY)){var y=data.filter(filterDisabled).map((function(seriesData){return seriesData.points.map((function(point){return point[chsk_core_es.Y]}))})).flat();result.y=(0,chsk_core_es.zAC)(scaleSpecY,(0,chsk_core_es.FG_)(y))}return result.x.size=size[chsk_core_es.X],result.y.size=size[chsk_core_es.Y],result}(processedData,scaleX,scaleY,innerSize,autoRescale?disabled:Array(seriesIds.length).fill(!1)),xProps=_getHistogramScalePro.x,yProps=_getHistogramScalePro.y,colorProps=(0,chsk_core_es.NVB)(null!=scaleColor?scaleColor:theme.Colors.categorical,seriesIds),scalesContextValue=(0,chsk_core_es.cT_)({x:xProps,y:yProps,color:colorProps}),scales=scalesContextValue.scales,preparedData=processedData.map((function(seriesData){return function prepareData(seriesData,scaleX,scaleY){return{id:seriesData.id,index:seriesData.index,points:seriesData.points.map((function(point){return[scaleX(point[chsk_core_es.X]),scaleY(point[chsk_core_es.Y])]})),breaks:seriesData.breaks,n:seriesData.n}}(seriesData,scales.x,scales.y)}));return(0,jsx_runtime.jsx)(chsk_core_es.PzT,_extends({variant:"histogram",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys:seriesIds,scalesContextValue},props,{children:(0,jsx_runtime.jsx)(context.Jg,{data:preparedData,seriesIndexes,keys:seriesIds,children:(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children})})}))};Histogram.displayName="Histogram";try{Histogram.displayName="Histogram",Histogram.__docgenInfo={description:"",displayName:"Histogram",props:{variant:{defaultValue:{value:"count"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"count"'},{value:'"density"'}]}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"HistogramDataItem[]"}},breaks:{defaultValue:null,description:"breakpoints for bins",name:"breaks",required:!0,type:{name:"number | number[]"}},scaleX:{defaultValue:null,description:"scale for horizontal axis",name:"scaleX",required:!1,type:{name:"ContinuousScaleSpec"}},scaleY:{defaultValue:null,description:"scale for vertical axis",name:"scaleY",required:!1,type:{name:"ContinuousScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}},autoRescale:{defaultValue:{value:"true"},description:"automatically adjust scales if/when data subsets become disabled",name:"autoRescale",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/histogram/Histogram.tsx#Histogram"]={docgenInfo:Histogram.__docgenInfo,name:"Histogram",path:"packages/xy/src/histogram/Histogram.tsx#Histogram"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/histogram/HistogramCurve.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>HistogramCurve});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/src/histogram/context.tsx"),_predicates__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/src/histogram/predicates.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","curve","style","setRole","dataComponent"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var HistogramCurve=function HistogramCurve(_ref){var ids=_ref.ids,_ref$curve=_ref.curve,curve=void 0===_ref$curve?"MonotoneX":_ref$curve,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Aj5:_ref$dataComponent,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),processedData=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIO)().data,preparedData=(0,_context__WEBPACK_IMPORTED_MODULE_3__.cT)(),colorScale=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales.color,_useDisabledKeys=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender;if(!(0,_predicates__WEBPACK_IMPORTED_MODULE_4__.j)(processedData))return null;var result=(null!=ids?ids:preparedData.keys).map((function(id){var visible=!disabledKeys.has(id),seriesIndex=preparedData.seriesIndexes[id];if(void 0===seriesIndex)return null;var seriesStyle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.hIX)(style,colorScale(seriesIndex));seriesStyle.fill=void 0;var element=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(dataComponent,_extends({data:processedData[seriesIndex],component:_chsk_core__WEBPACK_IMPORTED_MODULE_2__.y$t,props:{variant:"histogram-curve",points:preparedData.data[seriesIndex].points,curve,style:seriesStyle,setRole}},props));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.JjT,{role:setRole?"histogram-curve-presence":void 0,visible,firstRender,children:element},"curve-"+seriesIndex)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:result.filter(Boolean)})};try{HistogramCurve.displayName="HistogramCurve",HistogramCurve.__docgenInfo={description:"",displayName:"HistogramCurve",props:{ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},curve:{defaultValue:{value:"MonotoneX"},description:"curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<HistogramInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<HistogramInteractiveDataItem, PathProps>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/histogram/HistogramCurve.tsx#HistogramCurve"]={docgenInfo:HistogramCurve.__docgenInfo,name:"HistogramCurve",path:"packages/xy/src/histogram/HistogramCurve.tsx#HistogramCurve"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/histogram/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Jg:()=>HistogramPreparedDataProvider,cT:()=>useHistogramPreparedData});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),HistogramPreparedDataContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({data:[],seriesIndexes:{},keys:[]}),HistogramPreparedDataProvider=function HistogramPreparedDataProvider(_ref){var data=_ref.data,seriesIndexes=_ref.seriesIndexes,keys=_ref.keys,children=_ref.children,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{data,seriesIndexes,keys}}),[data]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(HistogramPreparedDataContext.Provider,{value,children})};HistogramPreparedDataProvider.displayName="HistogramPreparedDataProvider";var useHistogramPreparedData=function useHistogramPreparedData(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(HistogramPreparedDataContext)};try{HistogramPreparedDataProvider.displayName="HistogramPreparedDataProvider",HistogramPreparedDataProvider.__docgenInfo={description:"",displayName:"HistogramPreparedDataProvider",props:{data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"RecordWithId[] & HistogramProcessedDataItem[]"}},seriesIndexes:{defaultValue:null,description:"map from series ids to indexes",name:"seriesIndexes",required:!0,type:{name:"Record<string, number>"}},keys:{defaultValue:null,description:"list of keys",name:"keys",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/histogram/context.tsx#HistogramPreparedDataProvider"]={docgenInfo:HistogramPreparedDataProvider.__docgenInfo,name:"HistogramPreparedDataProvider",path:"packages/xy/src/histogram/context.tsx#HistogramPreparedDataProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/src/histogram/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>isHistogramProcessedData});var isHistogramProcessedData=function isHistogramProcessedData(data){return data.map((function(item){return"object"==typeof item&&null!==item&&("id"in item&&"index"in item&&"points"in item)})).every(Boolean)}},"./packages/xy/stories/histogram/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ee:()=>ChartDecorator,Nu:()=>ChartHistogramDecorator,iT:()=>ChartWithLegendSpaceDecorator,m:()=>sampleData});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateHistogramSeries=function generateHistogramSeries(id,n,generator){return{id,data:Array(n).fill(0).map((function(){return generator()}))}},randomNormalValue=function randomNormalValue(mean,sd){void 0===sd&&(sd=1);var u=1-Math.random(),v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)*sd+mean};try{randomNormalValue.displayName="randomNormalValue",randomNormalValue.__docgenInfo={description:"generate a random number from normal distribution\nmodified from:\nhttps://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve",displayName:"randomNormalValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/generators.tsx#randomNormalValue"]={docgenInfo:randomNormalValue.__docgenInfo,name:"randomNormalValue",path:"packages/xy/stories/histogram/generators.tsx#randomNormalValue"})}catch(__react_docgen_typescript_loader_error){}var Histogram=__webpack_require__("./packages/xy/src/histogram/Histogram.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),sampleData=[generateHistogramSeries("A",150,(function(){return(0,chsk_core_es.DJC)(randomNormalValue(-2,.8),4)})),generateHistogramSeries("B",120,(function(){return(0,chsk_core_es.DJC)(randomNormalValue(2,1.6),4)}))],ChartHistogramDecorator=function ChartHistogramDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(Histogram.b,{data:sampleData,breaks:[-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7],scaleX:{variant:"linear",domain:"auto"},scaleY:{variant:"linear",domain:"auto"},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"counts"}),Story()]})})};ChartHistogramDecorator.displayName="ChartHistogramDecorator";var ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:Story()})};ChartDecorator.displayName="ChartDecorator";var ChartWithLegendSpaceDecorator=function ChartWithLegendSpaceDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:Story()})};ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator";try{ChartHistogramDecorator.displayName="ChartHistogramDecorator",ChartHistogramDecorator.__docgenInfo={description:"",displayName:"ChartHistogramDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/decorators.tsx#ChartHistogramDecorator"]={docgenInfo:ChartHistogramDecorator.__docgenInfo,name:"ChartHistogramDecorator",path:"packages/xy/stories/histogram/decorators.tsx#ChartHistogramDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/xy/stories/histogram/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator",ChartWithLegendSpaceDecorator.__docgenInfo={description:"",displayName:"ChartWithLegendSpaceDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/decorators.tsx#ChartWithLegendSpaceDecorator"]={docgenInfo:ChartWithLegendSpaceDecorator.__docgenInfo,name:"ChartWithLegendSpaceDecorator",path:"packages/xy/stories/histogram/decorators.tsx#ChartWithLegendSpaceDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/stories/histogram/HistogramCurve.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_HistogramCurve_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/stories/histogram/HistogramCurve.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"histogramcurve",children:"HistogramCurve"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_HistogramCurve_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HistogramCurve"})," draws curves that represent histograms."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_HistogramCurve_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"curves",children:"Curves"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["All histograms are computed from a binned representation of data. Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"curve"})," controls the type of interpolation between bins."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The curve settings that are most appropriate for histograms are 'MonotoneX' and 'Step'.\nThese interpolations guarantee that the the outline will remain above the baseline, i.e. convey positive counts/densities.\nThe ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Step"})," curve type conveys the binning strategy."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HistogramCurve_stories__WEBPACK_IMPORTED_MODULE_4__.LinearCurve}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HistogramCurve_stories__WEBPACK_IMPORTED_MODULE_4__.StepCurve}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HistogramCurve"})," multiple times to overlay multiple series.\nEach series can have a distinct curve setting and css style."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_HistogramCurve_stories__WEBPACK_IMPORTED_MODULE_4__.MultipleSeries})]})}}}}]);