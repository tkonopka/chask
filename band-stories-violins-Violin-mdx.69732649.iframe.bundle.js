"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9489,749],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/band/stories/violins/Violin.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BreaksArray:()=>BreaksArray,BreaksNumber:()=>BreaksNumber,Horizontal:()=>Horizontal,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Vertical$parameters,_Vertical$parameters2,_Vertical$parameters3,_Horizontal$parameter,_Horizontal$parameter2,_Horizontal$parameter3,_BreaksNumber$paramet,_BreaksNumber$paramet2,_BreaksNumber$paramet3,_BreaksArray$paramete,_BreaksArray$paramete2,_BreaksArray$paramete3,_src_violins__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/violins/Violin.tsx"),_src_violins__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/violins/Violins.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/stories/decorators.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/violins/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Violins/Violin",component:_src_violins__WEBPACK_IMPORTED_MODULE_1__.B};var Vertical={name:"vertical",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.X,{breaks:[0,2,4,6,8,10,12,14,16,18,20],horizontal:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_violins__WEBPACK_IMPORTED_MODULE_3__.K,{})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.e]},Horizontal={name:"horizontal",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.X,{breaks:[0,2,4,6,8,10,12,14,16,18,20],horizontal:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_violins__WEBPACK_IMPORTED_MODULE_3__.K,{})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.e]},BreaksNumber={name:"breaks, number",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.X,{breaks:20,horizontal:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_violins__WEBPACK_IMPORTED_MODULE_3__.K,{})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.e]},BreaksArray={name:"breaks, array",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.X,{breaks:[0,4,8,12,16,20,24],horizontal:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_violins__WEBPACK_IMPORTED_MODULE_3__.K,{})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.e]};Vertical.parameters=_extends({},Vertical.parameters,{docs:_extends({},null==(_Vertical$parameters=Vertical.parameters)?void 0:_Vertical$parameters.docs,{source:_extends({originalSource:"{\n  name: 'vertical',\n  args: {\n    ...commonViolinProps,\n    breaks: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],\n    horizontal: false,\n    children: <Violins />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Vertical$parameters2=Vertical.parameters)||null==(_Vertical$parameters3=_Vertical$parameters2.docs)?void 0:_Vertical$parameters3.source)})}),Horizontal.parameters=_extends({},Horizontal.parameters,{docs:_extends({},null==(_Horizontal$parameter=Horizontal.parameters)?void 0:_Horizontal$parameter.docs,{source:_extends({originalSource:"{\n  name: 'horizontal',\n  args: {\n    ...commonViolinProps,\n    breaks: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],\n    horizontal: true,\n    children: <Violins />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Horizontal$parameter2=Horizontal.parameters)||null==(_Horizontal$parameter3=_Horizontal$parameter2.docs)?void 0:_Horizontal$parameter3.source)})}),BreaksNumber.parameters=_extends({},BreaksNumber.parameters,{docs:_extends({},null==(_BreaksNumber$paramet=BreaksNumber.parameters)?void 0:_BreaksNumber$paramet.docs,{source:_extends({originalSource:"{\n  name: 'breaks, number',\n  args: {\n    ...commonViolinProps,\n    breaks: 20,\n    horizontal: false,\n    children: <Violins />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_BreaksNumber$paramet2=BreaksNumber.parameters)||null==(_BreaksNumber$paramet3=_BreaksNumber$paramet2.docs)?void 0:_BreaksNumber$paramet3.source)})}),BreaksArray.parameters=_extends({},BreaksArray.parameters,{docs:_extends({},null==(_BreaksArray$paramete=BreaksArray.parameters)?void 0:_BreaksArray$paramete.docs,{source:_extends({originalSource:"{\n  name: 'breaks, array',\n  args: {\n    ...commonViolinProps,\n    breaks: [0, 4, 8, 12, 16, 20, 24],\n    horizontal: false,\n    children: <Violins />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_BreaksArray$paramete2=BreaksArray.parameters)||null==(_BreaksArray$paramete3=_BreaksArray$paramete2.docs)?void 0:_BreaksArray$paramete3.source)})});var __namedExportsOrder=["Vertical","Horizontal","BreaksNumber","BreaksArray"]},"./packages/band/src/bands/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>isBandProcessedDataArray});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),isBandProcessedDataArray=function isBandProcessedDataArray(data,predicate){var result=data.map((function(item){return"object"==typeof item&&null!==item&&(!!("id"in item&&"index"in item&&"data"in item&&"domain"in item)&&((0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kJL)(item.data)&&item.data.map(predicate).every(Boolean)))}));return result.length>0&&result.every(Boolean)}},"./packages/band/src/violins/Violin.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Violin});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_context__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/band/src/violins/context.tsx"),_bars_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/src/bars/utils.ts"),_predicates__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/violins/predicates.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","variant","data","keys","breaks","horizontal","autoRescale","paddingInternal","scaleIndex","scaleValue","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Violin=function Violin(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.WdC:_ref$container,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"grouped":_ref$variant,data=_ref.data,keys=_ref.keys,_ref$breaks=_ref.breaks,breaks=void 0===_ref$breaks?20:_ref$breaks,_ref$horizontal=_ref.horizontal,horizontal=void 0!==_ref$horizontal&&_ref$horizontal,_ref$autoRescale=_ref.autoRescale,autoRescale=void 0===_ref$autoRescale||_ref$autoRescale,_ref$paddingInternal=_ref.paddingInternal,paddingInternal=void 0===_ref$paddingInternal?0:_ref$paddingInternal,_ref$scaleIndex=_ref.scaleIndex,scaleIndex=void 0===_ref$scaleIndex?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Us:_ref$scaleIndex,_ref$scaleValue=_ref.scaleValue,scaleValue=void 0===_ref$scaleValue?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tx9:_ref$scaleValue,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FgM)(),_useContainer=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,disabled=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gKR)(keys).disabled,seriesIndexes=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.snp)(data)}),[data]),processedData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function processData(data,keys){var accessors=keys.map((function(k){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(k)}));return data.map((function(seriesData,index){var summaries=accessors.map((function(f){var raw=f(seriesData);if(raw){if((0,_predicates__WEBPACK_IMPORTED_MODULE_3__.ku)(raw))return{n:raw.n,values:raw.values,breaks:raw.breaks};if((0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kJL)(raw))return{n:raw.length,values:raw}}})),domain=summaries.map((function(summary){if(summary)return summary.breaks?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FG_)(summary.breaks):(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FG_)(summary.values)}));return{id:seriesData.id,index,data:summaries,domain}}))}(data,keys)}),[data,keys]),_getScaleProps=(0,_bars_utils__WEBPACK_IMPORTED_MODULE_4__.P)(processedData.map((function(d){return d.id})),processedData.map((function(d){return d.domain})),scaleIndex,scaleValue,innerSize,horizontal,autoRescale?disabled:Array(keys.length).fill(!1)),indexProps=_getScaleProps.index,valueProps=_getScaleProps.value,xProps=horizontal?valueProps:indexProps,yProps=horizontal?indexProps:valueProps,colorProps=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.NVB)(null!=scaleColor?scaleColor:theme.Color.categorical,keys),scalesContextValue=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.cT_)({x:xProps,y:yProps,color:colorProps}),scales=scalesContextValue.scales,indexScale=horizontal?scales.y:scales.x,valueScale=horizontal?scales.x:scales.y,_getInternalWidthAndG=(0,_bars_utils__WEBPACK_IMPORTED_MODULE_4__.u)(indexScale,keys,paddingInternal,variant),internalWidth=_getInternalWidthAndG[0],internalOffset=_getInternalWidthAndG[1],internalGap=_getInternalWidthAndG[2],preparedData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function prepareData(data,indexScale,valueScale,horizontal,width,offset,gap,breaks){var breaksArray,fullScaled=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FG_)(data.map((function(d){return d.domain.flat().filter((function(v){return void 0!==v}))})).flat()).map((function(v){return valueScale(v)}));return breaksArray=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kJL)(breaks)?breaks.map((function(v){return valueScale(v)})):(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Sye)(fullScaled,Number(breaks)),data.map((function(seriesData){var bandStart=indexScale(seriesData.id)-indexScale.bandwidth()/2+offset,summaries=seriesData.data.map((function(summary){if(bandStart+=width+gap,summary){var scaledRawValues=summary.breaks?[]:summary.values.map((function(v){return valueScale(v)})),scaledBreaks=summary.breaks?summary.breaks.map((function(v){return valueScale(v)})):breaksArray;return scaledBreaks.sort((function(a,b){return a-b})),{n:summary.n,breaks:summary.breaks?summary.breaks.map((function(v){return valueScale(v)})):scaledBreaks,values:summary.breaks?summary.values:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.NYs)(scaledRawValues,scaledBreaks,!1),bandStart:bandStart-width-gap,bandWidth:width}}}));return{id:seriesData.id,index:seriesData.index,data:summaries}}))}(processedData,indexScale,valueScale,0,internalWidth,internalOffset,internalGap,breaks)}),[processedData,horizontal,indexScale,valueScale,internalWidth,internalOffset,internalGap,breaks]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.PzT,_extends({variant:"violin",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys,scalesContextValue},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_context__WEBPACK_IMPORTED_MODULE_5__.lA,{data:preparedData,seriesIndexes,keys,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.X,{features:framer_motion__WEBPACK_IMPORTED_MODULE_7__.H,children})})}))};Violin.displayName="Violin";try{Violin.displayName="Violin",Violin.__docgenInfo={description:"",displayName:"Violin",props:{variant:{defaultValue:{value:"grouped"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grouped"'},{value:'"layered"'}]}},breaks:{defaultValue:{value:"20"},description:"breaks to determine violin resolution",name:"breaks",required:!1,type:{name:"number | number[]"}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"ViolinDataItem[]"}},keys:{defaultValue:null,description:"list of all keys associated with a band",name:"keys",required:!0,type:{name:"string[]"}},horizontal:{defaultValue:{value:"false"},description:"display bands horizontally",name:"horizontal",required:!1,type:{name:"boolean"}},paddingInternal:{defaultValue:{value:"0"},description:"padding between bands in the same group/index",name:"paddingInternal",required:!1,type:{name:"number"}},scaleIndex:{defaultValue:null,description:"scale for axis with discrete indexes",name:"scaleIndex",required:!1,type:{name:"ScaleWithBandwidthSpec"}},scaleValue:{defaultValue:null,description:"scale for axis with continuous values",name:"scaleValue",required:!1,type:{name:"ContinuousScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}},autoRescale:{defaultValue:{value:"true"},description:"automatically adjust scales if/when data subsets become disabled",name:"autoRescale",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/violins/Violin.tsx#Violin"]={docgenInfo:Violin.__docgenInfo,name:"Violin",path:"packages/band/src/violins/Violin.tsx#Violin"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/violins/Violins.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Violins});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/band/src/violins/context.tsx"),react=__webpack_require__("./node_modules/react/index.js"),predicates=__webpack_require__("./packages/band/src/violins/predicates.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","ids","keys","component","componentProps","dataComponent","style","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Violins=function Violins(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"smooth":_ref$variant,ids=_ref.ids,keys=_ref.keys,_ref$component=_ref.component,component=void 0===_ref$component?chsk_core_es.y$t:_ref$component,componentProps=_ref.componentProps,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?chsk_core_es.oKN:_ref$dataComponent,style=_ref.style,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),processedData=(0,chsk_core_es.wIO)().data,preparedData=(0,context.Im)(),scales=(0,chsk_core_es.kE1)().scales,colorScale=scales.color,data=preparedData.data,_useDisabledKeys=(0,chsk_core_es.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender,horizontal=(0,chsk_core_es.y7R)(scales.y),_useIdsKeys=(0,chsk_core_es.lRm)(ids,keys,preparedData),idSet=_useIdsKeys.idSet,keySet=_useIdsKeys.keySet;if(!(0,predicates.fV)(processedData))return null;var allKeys=preparedData.keys,pathStyles=(0,react.useMemo)((function(){return allKeys.map((function(k,i){return(0,chsk_core_es.hIX)(style,colorScale(i))}))}),[allKeys,style,colorScale]),commonProps=_extends({variant:"violin",setRole:!1},componentProps,{curve:"step"===variant?"Step":"BasisClosed",closed:!0,className}),result=preparedData.keys.map((function(k,i){if(!keySet.has(k))return null;var visible=!disabledKeys.has(k),items=data.map((function(seriesData){var _seriesProcessedData$;if(!idSet.has(seriesData.id))return null;var summary=seriesData.data[i];if(!summary)return null;var points=function violinPoints(_ref){var values=_ref.values,breaks=_ref.breaks,bandStart=_ref.bandStart,bandWidth=_ref.bandWidth,horizontal=_ref.horizontal,maxValue=(0,chsk_core_es.Fp7)(values);if(maxValue<=0)return[];var _trimIndexes=function trimIndexes(values){for(var start=0,end=values.length;0===values[start]&&start<end;)start+=1;for(;0===values[end-1]&&end>start;)end-=1;return[start,end]}(values),start=_trimIndexes[0],end=_trimIndexes[1],histogram=(0,chsk_core_es.LM9)(values.slice(start,end),breaks.slice(start,end+1)),halfWidth=bandWidth/2,midBand=bandStart+halfWidth,multiplier=halfWidth/maxValue,fwd=histogram.map((function(xy){return[xy[0],midBand+xy[1]*multiplier]})),rev=histogram.map((function(xy){return[xy[0],midBand-xy[1]*multiplier]})).reverse(),result=fwd.concat(rev);return horizontal?result:result.map((function(xy){return[xy[1],xy[0]]}))}(_extends({},summary,{horizontal}));if(0===points.length)return null;var seriesProcessedData=processedData[seriesData.index].data[i];return(0,react.createElement)(dataComponent,_extends({key:"v-"+seriesData.index+"-"+i,data:{id:seriesData.id,key:k,n:null!=(_seriesProcessedData$=null==seriesProcessedData?void 0:seriesProcessedData.n)?_seriesProcessedData$:0},component,props:_extends({},commonProps,{points,style:pathStyles[i]})},props))})).filter(Boolean);return(0,jsx_runtime.jsx)(chsk_core_es.JjT,{role:setRole?"violins":void 0,visible,firstRender,children:items},"v-"+i)}));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:result})};try{Violins.displayName="Violins",Violins.__docgenInfo={description:"",displayName:"Violins",props:{variant:{defaultValue:{value:"smooth"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"smooth"'},{value:'"step"'}]}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},keys:{defaultValue:null,description:"keys to display (default to all keys)",name:"keys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<ViolinInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<ViolinInteractiveDataItem, PathProps>>"}},component:{defaultValue:null,description:"function used to draw individual components",name:"component",required:!1,type:{name:"FC<PathProps>"}},componentProps:{defaultValue:null,description:"props passed to each component",name:"componentProps",required:!1,type:{name:"Partial<PathProps>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/violins/Violins.tsx#Violins"]={docgenInfo:Violins.__docgenInfo,name:"Violins",path:"packages/band/src/violins/Violins.tsx#Violins"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/violins/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Im:()=>useViolinPreparedData,lA:()=>ViolinPreparedDataProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ViolinPreparedDataContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({data:[],seriesIndexes:{},keys:[]}),ViolinPreparedDataProvider=function ViolinPreparedDataProvider(_ref){var data=_ref.data,seriesIndexes=_ref.seriesIndexes,keys=_ref.keys,children=_ref.children,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{data,seriesIndexes,keys}}),[data]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ViolinPreparedDataContext.Provider,{value,children})};ViolinPreparedDataProvider.displayName="ViolinPreparedDataProvider";var useViolinPreparedData=function useViolinPreparedData(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ViolinPreparedDataContext)};try{ViolinPreparedDataProvider.displayName="ViolinPreparedDataProvider",ViolinPreparedDataProvider.__docgenInfo={description:"",displayName:"ViolinPreparedDataProvider",props:{keys:{defaultValue:null,description:"list of keys",name:"keys",required:!0,type:{name:"string[]"}},seriesIndexes:{defaultValue:null,description:"map from series ids to indexes",name:"seriesIndexes",required:!0,type:{name:"Record<string, number>"}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"ViolinPreparedDataItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/violins/context.tsx#ViolinPreparedDataProvider"]={docgenInfo:ViolinPreparedDataProvider.__docgenInfo,name:"ViolinPreparedDataProvider",path:"packages/band/src/violins/context.tsx#ViolinPreparedDataProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/violins/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fV:()=>isViolinProcessedData,ku:()=>isViolinProcessedSummary});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_bands_predicates__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/bands/predicates.ts"),isViolinProcessedSummary=function isViolinProcessedSummary(x){return!x||"object"==typeof x&&("n"in x&&("values"in x&&(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kJL)(x.values)))},isViolinProcessedData=function isViolinProcessedData(data){return(0,_bands_predicates__WEBPACK_IMPORTED_MODULE_1__.y)(data,isViolinProcessedSummary)}},"./packages/band/stories/violins/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>ChartViolinDecorator,X:()=>commonViolinProps});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/violins/Violin.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonViolinProps={data:_decorators__WEBPACK_IMPORTED_MODULE_1__.A,keys:["x","y"],scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]},paddingInternal:.2},ChartViolinDecorator=function ChartViolinDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.B,_extends({},commonViolinProps,{horizontal:!1,breaks:12,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartViolinDecorator.displayName="ChartViolinDecorator";try{ChartViolinDecorator.displayName="ChartViolinDecorator",ChartViolinDecorator.__docgenInfo={description:"",displayName:"ChartViolinDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/violins/decorators.tsx#ChartViolinDecorator"]={docgenInfo:ChartViolinDecorator.__docgenInfo,name:"ChartViolinDecorator",path:"packages/band/stories/violins/decorators.tsx#ChartViolinDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/violins/Violin.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Violin_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/stories/violins/Violin.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"violin",children:"Violin"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Violin_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Violin"})," sets up a view for a violin chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Violin_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data",children:"Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Data should be prepared as an array of objects.\nAll objects should contain a string identifier ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'id'"}),". Other keys with numeric values can be used to display distributions."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The pseudocode below shows one data item with an identifier and two numeric arrays."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:'\n  [\n  {\n   "id": "alpha",\n   "x": [1, 2, 3, ,...],\n   "y": [2, 4, 6, ...],\n  },\n  ...\n  ]\n  '}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"orientation",children:"Orientation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"horizontal"})," arranges the strips in the horizontal direction."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Violin_stories__WEBPACK_IMPORTED_MODULE_4__.Vertical}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Violin_stories__WEBPACK_IMPORTED_MODULE_4__.Horizontal}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"breaks",children:"Breaks"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"breaks"})," determines the resolution of the violin shape.\nThis can be specified as a number, which indicates the number of bins, or as an array of breakpoints."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Violin_stories__WEBPACK_IMPORTED_MODULE_4__.BreaksNumber}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Violin_stories__WEBPACK_IMPORTED_MODULE_4__.BreaksArray}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"other-features",children:"Other features"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Violin"})," supports many of the same features as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Bar"}),", for example, for adjusting padding.\nSee the documentation for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Bar"})," for examples."]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);