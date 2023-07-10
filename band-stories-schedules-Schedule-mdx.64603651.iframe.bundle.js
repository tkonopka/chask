"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9883,9579],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/band/stories/schedules/Schedule.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Vertical$parameters,_Vertical$parameters2,_Vertical$parameters3,_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/schedules/Schedule.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/schedules/Schedules.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/stories/decorators.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/schedules/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Schedules/Schedule",component:_src__WEBPACK_IMPORTED_MODULE_1__.P};var Default={name:"default",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.DV,{variant:"default",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.G,{})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.e]},Vertical={name:"vertical",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.DV,{horizontal:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.G,{})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.e]};Default.parameters=_extends({},Default.parameters,{docs:_extends({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:_extends({originalSource:"{\n  name: 'default',\n  args: {\n    ...commonScheduleProps,\n    variant: 'default',\n    children: <Schedules />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2$=_Default$parameters2.docs)?void 0:_Default$parameters2$.source)})}),Vertical.parameters=_extends({},Vertical.parameters,{docs:_extends({},null==(_Vertical$parameters=Vertical.parameters)?void 0:_Vertical$parameters.docs,{source:_extends({originalSource:"{\n  name: 'vertical',\n  args: {\n    ...commonScheduleProps,\n    horizontal: false,\n    children: <Schedules />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Vertical$parameters2=Vertical.parameters)||null==(_Vertical$parameters3=_Vertical$parameters2.docs)?void 0:_Vertical$parameters3.source)})});var __namedExportsOrder=["Default","Vertical"]},"./packages/band/src/bands/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>isBandProcessedDataArray});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),isBandProcessedDataArray=function isBandProcessedDataArray(data,predicate){var result=data.map((function(item){return"object"==typeof item&&null!==item&&(!!("id"in item&&"index"in item&&"data"in item&&"domain"in item)&&((0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kJL)(item.data)&&item.data.map(predicate).every(Boolean)))}));return result.length>0&&result.every(Boolean)}},"./packages/band/src/schedules/Schedule.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Schedule});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),framer_motion__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/src/schedules/context.tsx"),_bars_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/bars/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","data","keys","intervalStart","intervalEnd","intervalKey","horizontal","autoRescale","scaleIndex","scaleValue","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Schedule=function Schedule(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.WdC:_ref$container,data=_ref.data,keys=_ref.keys,_ref$intervalStart=_ref.intervalStart,intervalStart=void 0===_ref$intervalStart?"start":_ref$intervalStart,_ref$intervalEnd=_ref.intervalEnd,intervalEnd=void 0===_ref$intervalEnd?"end":_ref$intervalEnd,_ref$intervalKey=_ref.intervalKey,intervalKey=void 0===_ref$intervalKey?"key":_ref$intervalKey,_ref$horizontal=_ref.horizontal,horizontal=void 0===_ref$horizontal||_ref$horizontal,_ref$autoRescale=_ref.autoRescale,autoRescale=void 0===_ref$autoRescale||_ref$autoRescale,_ref$scaleIndex=_ref.scaleIndex,scaleIndex=void 0===_ref$scaleIndex?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Us:_ref$scaleIndex,_ref$scaleValue=_ref.scaleValue,scaleValue=void 0===_ref$scaleValue?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tx9:_ref$scaleValue,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FgM)(),_useContainer=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,disabled=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gKR)(keys).disabled,seriesIndexes=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.snp)(data)}),[data]),processedData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function processData(data,intervalStart,intervalEnd,intervalKey,keys){var startAccessor=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(intervalStart),endAccessor=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(intervalEnd),keyAccessor=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(intervalKey);return data.map((function(seriesData,index){var summaries=seriesData.data.map((function(itemData){var key=String(keyAccessor(itemData));return{start:Number(startAccessor(itemData)),end:Number(endAccessor(itemData)),key}})).filter((function(item){return keys.indexOf(item.key)>=0}));return{id:seriesData.id,index,data:summaries,domain:summaries.map((function(item){return[item.start,item.end]}))}}))}(data,intervalStart,intervalEnd,intervalKey,keys)}),[data,intervalStart,intervalEnd,intervalKey,keys]),_getScaleProps=(0,_bars_utils__WEBPACK_IMPORTED_MODULE_3__.P)(processedData.map((function(d){return d.id})),processedData.map((function(d){return d.domain})),scaleIndex,scaleValue,innerSize,horizontal,autoRescale?disabled:Array(keys.length).fill(!1)),indexProps=_getScaleProps.index,valueProps=_getScaleProps.value,xProps=horizontal?valueProps:indexProps,yProps=horizontal?indexProps:valueProps,colorProps=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.NVB)(null!=scaleColor?scaleColor:theme.Color.categorical,keys),scalesContextValue=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.cT_)({x:xProps,y:yProps,color:colorProps}),scales=scalesContextValue.scales,indexScale=horizontal?scales.y:scales.x,valueScale=horizontal?scales.x:scales.y,_getInternalWidthAndG=(0,_bars_utils__WEBPACK_IMPORTED_MODULE_3__.u)(indexScale,keys,0,"layered"),boxWidth=_getInternalWidthAndG[0],boxOffset=_getInternalWidthAndG[1],boxGap=_getInternalWidthAndG[2],preparedData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function prepareData(data,indexScale,valueScale,horizontal,width,offset,gap){return data.map((function(seriesData){var bandStart=indexScale(seriesData.id)-indexScale.bandwidth()/2+offset,summaries=seriesData.data.map((function(summary){bandStart+=width+gap;var start=valueScale(summary.start),end=valueScale(summary.end);return _extends({},summary,{bandStart:bandStart-width-gap,bandWidth:width,size:horizontal?[end-start,width]:[width,end-start],position:horizontal?[start,bandStart-width-gap]:[bandStart-width-gap,start]})}));return{id:seriesData.id,index:seriesData.index,data:summaries}}))}(processedData,indexScale,valueScale,horizontal,boxWidth,boxOffset,boxGap)}),[processedData,indexScale,valueScale,horizontal,boxWidth,boxOffset,boxGap]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.PzT,_extends({variant:"schedule",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys,scalesContextValue},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_context__WEBPACK_IMPORTED_MODULE_4__.P7,{data:preparedData,seriesIndexes,keys,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.X,{features:framer_motion__WEBPACK_IMPORTED_MODULE_6__.H,children})})}))};Schedule.displayName="Schedule";try{Schedule.displayName="Schedule",Schedule.__docgenInfo={description:"",displayName:"Schedule",props:{data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"ScheduleDataItem[]"}},intervalStart:{defaultValue:{value:"start"},description:"accessor for schedule interval start",name:"intervalStart",required:!1,type:{name:"string"}},intervalEnd:{defaultValue:{value:"end"},description:"accessor for schedule interval end",name:"intervalEnd",required:!1,type:{name:"string"}},intervalKey:{defaultValue:{value:"key"},description:"accessor for schedule interval key",name:"intervalKey",required:!1,type:{name:"string"}},scaleValue:{defaultValue:null,description:"scale for axis with continuous values",name:"scaleValue",required:!1,type:{name:"TimeScaleSpec | LinearScaleSpec"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},horizontal:{defaultValue:{value:"true"},description:"display bands horizontally",name:"horizontal",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}},autoRescale:{defaultValue:{value:"true"},description:"automatically adjust scales if/when data subsets become disabled",name:"autoRescale",required:!1,type:{name:"boolean"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},scaleIndex:{defaultValue:null,description:"scale for axis with discrete indexes",name:"scaleIndex",required:!1,type:{name:"ScaleWithBandwidthSpec"}},keys:{defaultValue:null,description:"list of all keys associated with a band",name:"keys",required:!0,type:{name:"string[]"}},paddingInternal:{defaultValue:null,description:"padding between bands in the same group/index",name:"paddingInternal",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/schedules/Schedule.tsx#Schedule"]={docgenInfo:Schedule.__docgenInfo,name:"Schedule",path:"packages/band/src/schedules/Schedule.tsx#Schedule"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/schedules/Schedules.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>Schedules});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/band/src/schedules/context.tsx"),react=__webpack_require__("./node_modules/react/index.js"),predicates=__webpack_require__("./packages/band/src/bands/predicates.ts"),isScheduleProcessedSummary=function isScheduleProcessedSummary(x){if(!x)return!0;if("object"!=typeof x)return!1;return["start","end","key"].map((function(k){return void 0!==x[k]})).every(Boolean)},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","keys","component","componentProps","className","setRole","dataComponent","style"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Schedules=function Schedules(_ref){var ids=_ref.ids,keys=_ref.keys,_ref$component=_ref.component,component=void 0===_ref$component?chsk_core_es.AeJ:_ref$component,componentProps=_ref.componentProps,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?chsk_core_es.oKN:_ref$dataComponent,style=_ref.style,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),processedData=(0,chsk_core_es.wIO)().data,preparedData=(0,context.Xy)(),colorScale=(0,chsk_core_es.kE1)().scales.color,data=preparedData.data,_useDisabledKeys=(0,chsk_core_es.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender,_useIdsKeys=(0,chsk_core_es.lRm)(ids,keys,preparedData),idSet=_useIdsKeys.idSet,keySet=_useIdsKeys.keySet;if(!function isScheduleProcessedData(data){return(0,predicates.y)(data,isScheduleProcessedSummary)}(processedData))return null;var styles=(0,react.useMemo)((function(){return preparedData.keys.map((function(k,i){var keyColor=colorScale(i);return(0,chsk_core_es.hIX)(style,keyColor)}))}),[preparedData,style,colorScale]),allKeys=preparedData.keys,commonProps=_extends({variant:"schedule",setRole:!1},componentProps,{className}),result=preparedData.keys.map((function(k,i){if(!keySet.has(k))return null;var visible=!disabledKeys.has(k),items=[];return data.map((function(seriesData){if(!idSet.has(seriesData.id))return null;seriesData.data.map((function(dataItem){if(!keySet.has(dataItem.key)||dataItem.key!=k)return null;var keyIndex=allKeys.indexOf(dataItem.key),_dataItem$position=dataItem.position,x=_dataItem$position[0],y=_dataItem$position[1],_dataItem$size=dataItem.size,width=_dataItem$size[0],height=_dataItem$size[1],el=(0,react.createElement)(dataComponent,_extends({key:"s-"+seriesData.index+"-"+i,data:_extends({id:seriesData.id},dataItem),component,props:_extends({},commonProps,{x,y,width,height,style:styles[keyIndex]})},props));items.push(el)}))})),(0,jsx_runtime.jsx)(chsk_core_es.JjT,{role:setRole?"schedules":void 0,visible,firstRender,children:items.filter(Boolean)},"s-"+i)})).filter(Boolean);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:result})};try{Schedules.displayName="Schedules",Schedules.__docgenInfo={description:"",displayName:"Schedules",props:{ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},keys:{defaultValue:null,description:"keys to display (default to all keys)",name:"keys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<ScheduleInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<ScheduleInteractiveDataItem, RectangleProps>>"}},component:{defaultValue:null,description:"function used to draw individual components",name:"component",required:!1,type:{name:"FC<RectangleProps>"}},componentProps:{defaultValue:null,description:"props passed to each component",name:"componentProps",required:!1,type:{name:"Partial<RectangleProps>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/schedules/Schedules.tsx#Schedules"]={docgenInfo:Schedules.__docgenInfo,name:"Schedules",path:"packages/band/src/schedules/Schedules.tsx#Schedules"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/schedules/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P7:()=>SchedulePreparedDataProvider,Xy:()=>useSchedulePreparedData});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SchedulePreparedDataContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({data:[],seriesIndexes:{},keys:[]}),SchedulePreparedDataProvider=function SchedulePreparedDataProvider(_ref){var data=_ref.data,seriesIndexes=_ref.seriesIndexes,keys=_ref.keys,children=_ref.children,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{data,seriesIndexes,keys}}),[data]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SchedulePreparedDataContext.Provider,{value,children})};SchedulePreparedDataProvider.displayName="SchedulePreparedDataProvider";var useSchedulePreparedData=function useSchedulePreparedData(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SchedulePreparedDataContext)};try{SchedulePreparedDataProvider.displayName="SchedulePreparedDataProvider",SchedulePreparedDataProvider.__docgenInfo={description:"",displayName:"SchedulePreparedDataProvider",props:{keys:{defaultValue:null,description:"list of keys",name:"keys",required:!0,type:{name:"string[]"}},seriesIndexes:{defaultValue:null,description:"map from series ids to indexes",name:"seriesIndexes",required:!0,type:{name:"Record<string, number>"}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"SchedulePreparedDataItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/schedules/context.tsx#SchedulePreparedDataProvider"]={docgenInfo:SchedulePreparedDataProvider.__docgenInfo,name:"SchedulePreparedDataProvider",path:"packages/band/src/schedules/context.tsx#SchedulePreparedDataProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/schedules/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QP:()=>ChartScheduleDecorator,DV:()=>commonScheduleProps,xE:()=>onSchedulesClick});var Schedule=__webpack_require__("./packages/band/src/schedules/Schedule.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js");const dataSchedules_namespaceObject=JSON.parse('[{"id":"alpha","data":[{"key":"x","start":1,"end":3},{"key":"y","start":4,"end":6},{"key":"z","start":7,"end":9}]},{"id":"beta","data":[{"key":"x","start":7,"end":10},{"key":"y","start":3,"end":7},{"key":"z","start":0,"end":3}]}]');var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonScheduleProps={data:dataSchedules_namespaceObject,keys:["x","y","z"],scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},ChartScheduleDecorator=function ChartScheduleDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(Schedule.P,_extends({},commonScheduleProps,{horizontal:!1,children:[(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartScheduleDecorator.displayName="ChartScheduleDecorator";var onSchedulesClick=function onSchedulesClick(data){console.log("clicked: "+JSON.stringify(data))};try{ChartScheduleDecorator.displayName="ChartScheduleDecorator",ChartScheduleDecorator.__docgenInfo={description:"",displayName:"ChartScheduleDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/schedules/decorators.tsx#ChartScheduleDecorator"]={docgenInfo:ChartScheduleDecorator.__docgenInfo,name:"ChartScheduleDecorator",path:"packages/band/stories/schedules/decorators.tsx#ChartScheduleDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onSchedulesClick.displayName="onSchedulesClick",onSchedulesClick.__docgenInfo={description:"",displayName:"onSchedulesClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},start:{defaultValue:null,description:"",name:"start",required:!0,type:{name:"number"}},end:{defaultValue:null,description:"",name:"end",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/schedules/decorators.tsx#onSchedulesClick"]={docgenInfo:onSchedulesClick.__docgenInfo,name:"onSchedulesClick",path:"packages/band/stories/schedules/decorators.tsx#onSchedulesClick"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/schedules/Schedule.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Schedule_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/stories/schedules/Schedule.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"schedule",children:"Schedule"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Schedule_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Schedule"})," sets up a view for a chart displaying intervals (also referred to as 'Gantt chart').\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Schedule"})," itself does not draw any visible elements, but it pre-processes a dataset so that the data can be visualized by other components, for example ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Schedules"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Schedule_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data",children:"Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Data should be prepared as an array of objects.\nAll objects should contain a string identifier ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'id'"})," and an array ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'data'"}),".\nThe data array should contain objects that define a key string, as well as interval start- and end-points.\nThe key string can be used to toggle visibility of certain intervals."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The pseudocode below shows one data item with an array of three intervals."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:'\n  [\n  {\n   "id": "alpha",\n   "data": [\n     {"key": "x", "start": 1, "end": 3},\n     {"key": "y", "start": 4, "end": 6},\n     {"key": "z", "start": 7, "end": 9}\n   ],\n  },\n  ...\n  ]\n  '}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"orientation",children:"Orientation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"horizontal"})," determines the orientation of the intervals."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Schedule_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Schedule_stories__WEBPACK_IMPORTED_MODULE_4__.Vertical}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"other-features",children:"Other features"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Schedule"})," supports many of the same features as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Bar"}),", for example, for adjusting padding.\nSee the documentation for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Bar"})," for examples."]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);