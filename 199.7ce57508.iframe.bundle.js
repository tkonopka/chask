"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[199],{"./packages/band/src/quantiles/BoxAndWhiskers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>BoxAndWhiskers});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["data","horizontal","boxStyle","whiskerStyle","middleStyle","whiskerCapWidth","className","style","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var BoxAndWhiskers=function BoxAndWhiskers(_ref){var data=_ref.data,horizontal=_ref.horizontal,boxStyle=_ref.boxStyle,whiskerStyle=_ref.whiskerStyle,middleStyle=_ref.middleStyle,_ref$whiskerCapWidth=_ref.whiskerCapWidth,whiskerCapWidth=void 0===_ref$whiskerCapWidth?0:_ref$whiskerCapWidth,className=_ref.className,style=_ref.style,setRole=_ref.setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);if(!data)return null;var halfBand=data.bandWidth/2,halfCap=whiskerCapWidth*halfBand,coords=data.values,cx=data.bandStart+halfBand,cy=data.values[2],commonProps={className,setRole:!1},box=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.AeJ,_extends({variant:"box",x:-halfBand,y:-cy+coords[3],width:data.bandWidth,height:coords[1]-coords[3],style:boxStyle},commonProps),"box"),lines=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"median",x1:-halfBand,x2:+halfBand,y1:0,y2:0,style:middleStyle},commonProps),"median"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker",x1:0,x2:0,y1:-cy+coords[3],y2:-cy+coords[4],style:whiskerStyle},commonProps),"whisker-upper"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker",x1:0,x2:0,y1:-cy+coords[1],y2:-cy+coords[0],style:whiskerStyle},commonProps),"whisker-lower")],caps=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker-cap",x1:-halfCap,x2:halfCap,y1:-cy+coords[4],y2:-cy+coords[4],style:whiskerStyle},commonProps),"whisker-upper-cap"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker-cap",x1:-halfCap,x2:halfCap,y1:-cy+coords[0],y2:-cy+coords[0],style:whiskerStyle},commonProps),"whisker-lower-cap")],config={x:horizontal?cy:cx,y:horizontal?cx:cy,rotate:horizontal?-90:0,originX:"0px",originY:"0px"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.g,_extends({initial:config,animate:config,role:setRole?"box-and-whiskers":void 0,style:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.dJS)(style,config)},props,{children:[box,lines,whiskerCapWidth>0?caps:null]}))};BoxAndWhiskers.displayName="BoxAndWhiskers";try{BoxAndWhiskers.displayName="BoxAndWhiskers",BoxAndWhiskers.__docgenInfo={description:"",displayName:"BoxAndWhiskers",props:{data:{defaultValue:null,description:"information with coordinates",name:"data",required:!0,type:{name:"QuantilePreparedSummary"}},horizontal:{defaultValue:null,description:"orientation of the chart",name:"horizontal",required:!0,type:{name:"boolean"}},boxStyle:{defaultValue:null,description:"style for box",name:"boxStyle",required:!1,type:{name:"Partial<CSSProperties>"}},whiskerStyle:{defaultValue:null,description:"style for whiskers",name:"whiskerStyle",required:!1,type:{name:"Partial<CSSProperties>"}},middleStyle:{defaultValue:null,description:"style for line representing the distribution center",name:"middleStyle",required:!1,type:{name:"Partial<CSSProperties>"}},whiskerCapWidth:{defaultValue:{value:"0"},description:"width of whisker cap",name:"whiskerCapWidth",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/quantiles/BoxAndWhiskers.tsx#BoxAndWhiskers"]={docgenInfo:BoxAndWhiskers.__docgenInfo,name:"BoxAndWhiskers",path:"packages/band/src/quantiles/BoxAndWhiskers.tsx#BoxAndWhiskers"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/quantiles/Quantile.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Quantile});var react=__webpack_require__("./node_modules/react/index.js"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/band/src/quantiles/context.tsx"),utils=__webpack_require__("./packages/band/src/bars/utils.ts"),getQuantiles=function getQuantiles(values,quantiles){var n1=values.length-1,sortedValues=[].concat(values).sort((function(a,b){return a-b}));return quantiles.map((function(v){return function getQuantile(values,quantile,n){var realIndex=n*Math.max(0,Math.min(1,quantile)),intIndex=Math.floor(realIndex);if(realIndex===intIndex)return values[intIndex];var v1=values[intIndex];return v1+(values[intIndex+1]-v1)*(realIndex-intIndex)}(sortedValues,v,n1)}))},predicates=__webpack_require__("./packages/band/src/quantiles/predicates.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","variant","data","keys","quantiles","horizontal","autoRescale","paddingInternal","scaleIndex","scaleValue","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Quantile=function Quantile(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?chsk_core_es.WdC:_ref$container,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"grouped":_ref$variant,data=_ref.data,keys=_ref.keys,_ref$quantiles=_ref.quantiles,quantiles=void 0===_ref$quantiles?[.05,.25,.5,.75,.95]:_ref$quantiles,_ref$horizontal=_ref.horizontal,horizontal=void 0!==_ref$horizontal&&_ref$horizontal,_ref$autoRescale=_ref.autoRescale,autoRescale=void 0===_ref$autoRescale||_ref$autoRescale,_ref$paddingInternal=_ref.paddingInternal,paddingInternal=void 0===_ref$paddingInternal?0:_ref$paddingInternal,_ref$scaleIndex=_ref.scaleIndex,scaleIndex=void 0===_ref$scaleIndex?chsk_core_es.Us:_ref$scaleIndex,_ref$scaleValue=_ref.scaleValue,scaleValue=void 0===_ref$scaleValue?chsk_core_es.Tx9:_ref$scaleValue,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,chsk_core_es.FgM)(),_useContainer=(0,chsk_core_es.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,disabled=(0,chsk_core_es.gKR)(keys).disabled,seriesIndexes=(0,react.useMemo)((function(){return(0,chsk_core_es.snp)(data)}),[data]),processedData=(0,react.useMemo)((function(){return function processData(data,keys,quantiles){var accessors=keys.map((function(k){return(0,chsk_core_es.wIU)(k)}));return data.map((function(seriesData,index){var summaries=accessors.map((function(f){var raw=f(seriesData);if(raw){if((0,predicates.U5)(raw))return{n:raw.n,moments:raw.moments,interval:raw.interval,values:raw.values,quantiles:raw.quantiles,extrema:raw.extrema};if(Array.isArray(raw)){var _moments=(0,chsk_core_es.Gi7)(raw),mean=_moments[0],variance=_moments[1],sd=isFinite(variance)?Math.sqrt(variance):0;return{n:raw.length,moments:[mean,variance],interval:[mean-sd,mean+sd],values:getQuantiles(raw,quantiles),quantiles,extrema:(0,chsk_core_es.FG_)(raw)}}}}));return{id:seriesData.id,index,data:summaries,domain:summaries.map((function(summary){return summary?(0,chsk_core_es.FG_)(summary.extrema):void 0}))}}))}(data,keys,quantiles)}),[data,keys,quantiles]),_getScaleProps=(0,utils.P)(processedData.map((function(d){return d.id})),processedData.map((function(d){return d.domain})),scaleIndex,scaleValue,innerSize,horizontal,autoRescale?disabled:Array(keys.length).fill(!1)),indexProps=_getScaleProps.index,valueProps=_getScaleProps.value,xProps=horizontal?valueProps:indexProps,yProps=horizontal?indexProps:valueProps,colorProps=(0,chsk_core_es.NVB)(null!=scaleColor?scaleColor:theme.Colors.categorical,keys),scalesContextValue=(0,chsk_core_es.cT_)({x:xProps,y:yProps,color:colorProps}),scales=scalesContextValue.scales,indexScale=horizontal?scales.y:scales.x,valueScale=horizontal?scales.x:scales.y,_getInternalWidthAndG=(0,utils.u)(indexScale,keys,paddingInternal,variant),boxWidth=_getInternalWidthAndG[0],boxOffset=_getInternalWidthAndG[1],boxGap=_getInternalWidthAndG[2],preparedData=(0,react.useMemo)((function(){return function prepareData(data,indexScale,valueScale,horizontal,width,offset,gap){return data.map((function(seriesData){var bandStart=indexScale(seriesData.id)-indexScale.bandwidth()/2+offset,summaries=seriesData.data.map((function(summary){var _summary$moments,_summary$interval;if(bandStart+=width+gap,void 0!==summary)return{n:summary.values.length,moments:null==(_summary$moments=summary.moments)?void 0:_summary$moments.map((function(v){return valueScale(Number(v))})),interval:null==(_summary$interval=summary.interval)?void 0:_summary$interval.map((function(v){return valueScale(Number(v))})),values:summary.values.map((function(v){return valueScale(v)})),quantiles:summary.quantiles,extrema:summary.extrema.map((function(v){return valueScale(v)})),bandStart:bandStart-width-gap,bandWidth:width}}));return{id:seriesData.id,index:seriesData.index,data:summaries}}))}(processedData,indexScale,valueScale,0,boxWidth,boxOffset,boxGap)}),[processedData,indexScale,valueScale,horizontal,boxWidth,boxOffset,boxGap]);return(0,jsx_runtime.jsx)(chsk_core_es.PzT,_extends({variant:"distribution",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys,scalesContextValue},props,{children:(0,jsx_runtime.jsx)(context.Eq,{data:preparedData,seriesIndexes,keys,children:(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children})})}))};Quantile.displayName="Quantile";try{Quantile.displayName="Quantile",Quantile.__docgenInfo={description:"",displayName:"Quantile",props:{variant:{defaultValue:{value:"grouped"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grouped"'},{value:'"layered"'}]}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"QuantileDataItem[]"}},quantiles:{defaultValue:{value:"[0.05, 0.25, 0.5, 0.75, 0.95]"},description:"five quantiles for whiskers bounds, box bounds, and central line",name:"quantiles",required:!1,type:{name:"[number, number, number, number, number]"}},keys:{defaultValue:null,description:"list of all keys associated with a band",name:"keys",required:!0,type:{name:"string[]"}},horizontal:{defaultValue:{value:"false"},description:"display bands horizontally",name:"horizontal",required:!1,type:{name:"boolean"}},paddingInternal:{defaultValue:{value:"0"},description:"padding between bands in the same group/index",name:"paddingInternal",required:!1,type:{name:"number"}},scaleIndex:{defaultValue:null,description:"scale for axis with discrete indexes",name:"scaleIndex",required:!1,type:{name:"ScaleWithBandwidthSpec"}},scaleValue:{defaultValue:null,description:"scale for axis with continuous values",name:"scaleValue",required:!1,type:{name:"ContinuousScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}},autoRescale:{defaultValue:{value:"true"},description:"automatically adjust scales if/when data subsets become disabled",name:"autoRescale",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/quantiles/Quantile.tsx#Quantile"]={docgenInfo:Quantile.__docgenInfo,name:"Quantile",path:"packages/band/src/quantiles/Quantile.tsx#Quantile"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/quantiles/Quantiles.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>Quantiles});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/quantiles/context.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_BoxAndWhiskers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/band/src/quantiles/BoxAndWhiskers.tsx"),_predicates__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/src/quantiles/predicates.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","keys","component","className","setRole","boxStyle","whiskerStyle","middleStyle","whiskerCapWidth","dataComponent"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Quantiles=function Quantiles(_ref){var ids=_ref.ids,keys=_ref.keys,component=_ref.component,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,boxStyle=_ref.boxStyle,whiskerStyle=_ref.whiskerStyle,middleStyle=_ref.middleStyle,whiskerCapWidth=_ref.whiskerCapWidth,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.oKN:_ref$dataComponent,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),processedData=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIO)().data,preparedData=(0,_context__WEBPACK_IMPORTED_MODULE_3__.Ct)(),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales,colorScale=scales.color,data=preparedData.data,_useDisabledKeys=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender,horizontal=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.y7R)(scales.y),_useIdsKeys=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.lRm)(ids,keys,preparedData),idSet=_useIdsKeys.idSet,keySet=_useIdsKeys.keySet;if(!(0,_predicates__WEBPACK_IMPORTED_MODULE_4__.ep)(processedData))return null;var allKeys=preparedData.keys,boxStyles=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return allKeys.map((function(k,i){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.hIX)(boxStyle,colorScale(i))}))}),[allKeys,boxStyle,colorScale]),whiskerStyles=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return allKeys.map((function(k,i){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.hIX)(whiskerStyle,colorScale(i))}))}),[allKeys,whiskerStyle,colorScale]),middleStyles=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return allKeys.map((function(k,i){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.hIX)(middleStyle,colorScale(i))}))}),[allKeys,middleStyle,colorScale]),result=preparedData.keys.map((function(k,i){if(!keySet.has(k))return null;var visible=!disabledKeys.has(k),items=data.map((function(seriesData){if(!idSet.has(seriesData.id))return null;var summary=seriesData.data[i],processedSummary=processedData[seriesData.index].data[i];return processedSummary?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(dataComponent,_extends({key:"quantiles-"+seriesData.index+"-"+i,data:_extends({id:seriesData.id,key:k},processedSummary),component:null!=component?component:_BoxAndWhiskers__WEBPACK_IMPORTED_MODULE_5__.m,props:{data:summary,horizontal,className,boxStyle:boxStyles[i],whiskerStyle:whiskerStyles[i],middleStyle:middleStyles[i],whiskerCapWidth,setRole}},props)):null})).filter(Boolean);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.JjT,{role:"distributions",visible,firstRender,children:items},"distributions-"+i)})).filter(Boolean);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:result})};try{Quantiles.displayName="Quantiles",Quantiles.__docgenInfo={description:"",displayName:"Quantiles",props:{component:{defaultValue:null,description:"component used to draw box and whiskers",name:"component",required:!1,type:{name:"FC<BoxAndWhiskersProps>"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},keys:{defaultValue:null,description:"keys to display (default to all keys)",name:"keys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<QuantileInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<QuantileInteractiveDataItem, BoxAndWhiskersProps>>"}},boxStyle:{defaultValue:null,description:"style for box",name:"boxStyle",required:!1,type:{name:"Partial<CSSProperties>"}},whiskerStyle:{defaultValue:null,description:"style for whiskers",name:"whiskerStyle",required:!1,type:{name:"Partial<CSSProperties>"}},middleStyle:{defaultValue:null,description:"style for line representing the distribution center",name:"middleStyle",required:!1,type:{name:"Partial<CSSProperties>"}},whiskerCapWidth:{defaultValue:null,description:"width of whisker cap",name:"whiskerCapWidth",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/quantiles/Quantiles.tsx#Quantiles"]={docgenInfo:Quantiles.__docgenInfo,name:"Quantiles",path:"packages/band/src/quantiles/Quantiles.tsx#Quantiles"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/quantiles/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ct:()=>useQuantilePreparedData,Eq:()=>QuantilePreparedDataProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),QuantilePreparedDataContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({data:[],seriesIndexes:{},keys:[]}),QuantilePreparedDataProvider=function QuantilePreparedDataProvider(_ref){var data=_ref.data,seriesIndexes=_ref.seriesIndexes,keys=_ref.keys,children=_ref.children,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{data,seriesIndexes,keys}}),[data]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(QuantilePreparedDataContext.Provider,{value,children})};QuantilePreparedDataProvider.displayName="QuantilePreparedDataProvider";var useQuantilePreparedData=function useQuantilePreparedData(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(QuantilePreparedDataContext)};try{QuantilePreparedDataProvider.displayName="QuantilePreparedDataProvider",QuantilePreparedDataProvider.__docgenInfo={description:"",displayName:"QuantilePreparedDataProvider",props:{data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"QuantilePreparedDataItem[]"}},seriesIndexes:{defaultValue:null,description:"map from series ids to indexes",name:"seriesIndexes",required:!0,type:{name:"Record<string, number>"}},keys:{defaultValue:null,description:"list of keys",name:"keys",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/quantiles/context.tsx#QuantilePreparedDataProvider"]={docgenInfo:QuantilePreparedDataProvider.__docgenInfo,name:"QuantilePreparedDataProvider",path:"packages/band/src/quantiles/context.tsx#QuantilePreparedDataProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/quantiles/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U5:()=>isQuantileProcessedSummary,ep:()=>isQuantileProcessedData});var isArray=Array.isArray,isQuantileProcessedSummary=function isQuantileProcessedSummary(x){if("object"!=typeof x||null===x)return!1;if(!("n"in x))return!1;var sizes=[5,5,2];return["values","quantiles","extrema"].map((function(k,i){return isArray(x[k])&&x[k].length===sizes[i]})).every(Boolean)},isQuantileProcessedData=function isQuantileProcessedData(data){var result=data.map((function(item){return"object"==typeof item&&null!==item&&("id"in item&&"index"in item&&"data"in item&&"domain"in item)}));return result.length>0&&result.every(Boolean)}},"./packages/band/stories/quantiles/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ar:()=>ChartQuantileDecorator,Bz:()=>ChartQuantileWithTooltipDecorator,Di:()=>onQuantilesClick,E$:()=>ChartHorizontalQuantileDecorator,VX:()=>commonQuantileProps});var _src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/quantiles/Quantile.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/src/quantiles/Quantiles.tsx"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonQuantileProps={data:_decorators__WEBPACK_IMPORTED_MODULE_1__.A,keys:["x","y"],paddingInternal:0,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},ChartQuantileDecorator=function ChartQuantileDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.c,_extends({},commonQuantileProps,{horizontal:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartQuantileDecorator.displayName="ChartQuantileDecorator";var ChartHorizontalQuantileDecorator=function ChartHorizontalQuantileDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.c,_extends({},commonQuantileProps,{horizontal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"bottom",label:"Values (a.u.)"}),Story()]}))})};ChartHorizontalQuantileDecorator.displayName="ChartHorizontalQuantileDecorator";var onQuantilesClick=function onQuantilesClick(data){console.log("clicked: "+JSON.stringify(data))},round2dp=function round2dp(x){return String(roundDecimalPlaces(x,2))},ChartQuantileWithTooltipDecorator=function ChartQuantileWithTooltipDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.c,_extends({},commonQuantileProps,{horizontal:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"left",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.R,{middleStyle:{stroke:"#000000",strokeWidth:2}}),Story()]}))})};ChartQuantileWithTooltipDecorator.displayName="ChartQuantileWithTooltipDecorator";try{ChartQuantileDecorator.displayName="ChartQuantileDecorator",ChartQuantileDecorator.__docgenInfo={description:"",displayName:"ChartQuantileDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/quantiles/decorators.tsx#ChartQuantileDecorator"]={docgenInfo:ChartQuantileDecorator.__docgenInfo,name:"ChartQuantileDecorator",path:"packages/band/stories/quantiles/decorators.tsx#ChartQuantileDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalQuantileDecorator.displayName="ChartHorizontalQuantileDecorator",ChartHorizontalQuantileDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalQuantileDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/quantiles/decorators.tsx#ChartHorizontalQuantileDecorator"]={docgenInfo:ChartHorizontalQuantileDecorator.__docgenInfo,name:"ChartHorizontalQuantileDecorator",path:"packages/band/stories/quantiles/decorators.tsx#ChartHorizontalQuantileDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onQuantilesClick.displayName="onQuantilesClick",onQuantilesClick.__docgenInfo={description:"",displayName:"onQuantilesClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"FiveNumbers"}},quantiles:{defaultValue:null,description:"",name:"quantiles",required:!0,type:{name:"FiveNumbers"}},extrema:{defaultValue:null,description:"",name:"extrema",required:!0,type:{name:"[number, number]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/quantiles/decorators.tsx#onQuantilesClick"]={docgenInfo:onQuantilesClick.__docgenInfo,name:"onQuantilesClick",path:"packages/band/stories/quantiles/decorators.tsx#onQuantilesClick"})}catch(__react_docgen_typescript_loader_error){}try{round2dp.displayName="round2dp",round2dp.__docgenInfo={description:"",displayName:"round2dp",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/quantiles/decorators.tsx#round2dp"]={docgenInfo:round2dp.__docgenInfo,name:"round2dp",path:"packages/band/stories/quantiles/decorators.tsx#round2dp"})}catch(__react_docgen_typescript_loader_error){}try{ChartQuantileWithTooltipDecorator.displayName="ChartQuantileWithTooltipDecorator",ChartQuantileWithTooltipDecorator.__docgenInfo={description:"",displayName:"ChartQuantileWithTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/quantiles/decorators.tsx#ChartQuantileWithTooltipDecorator"]={docgenInfo:ChartQuantileWithTooltipDecorator.__docgenInfo,name:"ChartQuantileWithTooltipDecorator",path:"packages/band/stories/quantiles/decorators.tsx#ChartQuantileWithTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);