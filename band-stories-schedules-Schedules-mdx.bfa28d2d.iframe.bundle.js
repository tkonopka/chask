"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4936],{"./packages/band/stories/schedules/Schedules.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MouseClick:()=>MouseClick,SelectedIds:()=>SelectedIds,SelectedKeys:()=>SelectedKeys,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _SelectedIds$paramete,_SelectedIds$paramete2,_SelectedIds$paramete3,_SelectedKeys$paramet,_SelectedKeys$paramet2,_SelectedKeys$paramet3,_MouseClick$parameter,_MouseClick$parameter2,_MouseClick$parameter3,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/band/src/schedules/Schedules.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/stories/schedules/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Schedules/Schedules",component:_src__WEBPACK_IMPORTED_MODULE_0__.G};var SelectedIds={name:"selected ids",args:{ids:["alpha"]},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.QP]},SelectedKeys={name:"selected keys",args:{keys:["x"]},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.QP]},MouseClick={name:"mouse click",args:{handlers:{onClick:_decorators__WEBPACK_IMPORTED_MODULE_1__.xE}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.QP]};SelectedIds.parameters=_extends({},SelectedIds.parameters,{docs:_extends({},null==(_SelectedIds$paramete=SelectedIds.parameters)?void 0:_SelectedIds$paramete.docs,{source:_extends({originalSource:"{\n  name: 'selected ids',\n  args: {\n    ids: ['alpha']\n  },\n  decorators: [ChartScheduleDecorator]\n}"},null==(_SelectedIds$paramete2=SelectedIds.parameters)||null==(_SelectedIds$paramete3=_SelectedIds$paramete2.docs)?void 0:_SelectedIds$paramete3.source)})}),SelectedKeys.parameters=_extends({},SelectedKeys.parameters,{docs:_extends({},null==(_SelectedKeys$paramet=SelectedKeys.parameters)?void 0:_SelectedKeys$paramet.docs,{source:_extends({originalSource:"{\n  name: 'selected keys',\n  args: {\n    keys: ['x']\n  },\n  decorators: [ChartScheduleDecorator]\n}"},null==(_SelectedKeys$paramet2=SelectedKeys.parameters)||null==(_SelectedKeys$paramet3=_SelectedKeys$paramet2.docs)?void 0:_SelectedKeys$paramet3.source)})}),MouseClick.parameters=_extends({},MouseClick.parameters,{docs:_extends({},null==(_MouseClick$parameter=MouseClick.parameters)?void 0:_MouseClick$parameter.docs,{source:_extends({originalSource:"{\n  name: 'mouse click',\n  args: {\n    handlers: {\n      onClick: onSchedulesClick\n    }\n  },\n  decorators: [ChartScheduleDecorator]\n}"},null==(_MouseClick$parameter2=MouseClick.parameters)||null==(_MouseClick$parameter3=_MouseClick$parameter2.docs)?void 0:_MouseClick$parameter3.source)})});var __namedExportsOrder=["SelectedIds","SelectedKeys","MouseClick"]},"./packages/band/src/bars/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>getScaleProps,u:()=>getInternalWidthAndGap});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),getScaleProps=function getScaleProps(ids,data,scaleSpecIndex,scaleSpecValue,size,horizontal,disabled,stacked){void 0===stacked&&(stacked=!1);var result={index:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.BRZ)(scaleSpecIndex),value:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.BRZ)(scaleSpecValue)};if((0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.HBl)(scaleSpecIndex)||(result.index.domain=ids),!(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.HBl)(scaleSpecValue)){var filterDisabled=function filterDisabled(v,i){return!disabled[i]},isValue=function isValue(v){return void 0!==v&&isFinite(Number(v))},values=data.map((function(d){return d.filter(filterDisabled).flat().filter(isValue)})),domain=stacked?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.FG_)(values.map((function sumValues(values){var positive=values.reduce((function(acc,v){return isFinite(v)&&v>0?acc+v:acc}),0);return[values.reduce((function(acc,v){return isFinite(v)&&v<0?acc+v:acc}),0),positive]})).flat()):(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.FG_)(values.flat());result.value=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.zAC)(scaleSpecValue,domain)}return result.index.size=horizontal?size[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]:size[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],result.value.size=horizontal?size[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]:size[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y],result},getInternalWidthAndGap=function getInternalWidthAndGap(indexScale,keys,paddingInternal,variant){var bandwidth=indexScale.bandwidth(),nKeys=keys.length,padInternal=paddingInternal||0,width="grouped"===variant?bandwidth/nKeys:bandwidth,advance=width*padInternal;return"grouped"===variant?[width*(1-padInternal),advance/2,advance]:[width*(1-padInternal),advance/2,-width*(1-padInternal)]}},"./packages/band/src/schedules/Schedule.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Schedule});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),framer_motion__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/src/schedules/context.tsx"),_bars_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/bars/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","data","keys","intervalStart","intervalEnd","intervalKey","horizontal","autoRescale","scaleIndex","scaleValue","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Schedule=function Schedule(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.WdC:_ref$container,data=_ref.data,keys=_ref.keys,_ref$intervalStart=_ref.intervalStart,intervalStart=void 0===_ref$intervalStart?"start":_ref$intervalStart,_ref$intervalEnd=_ref.intervalEnd,intervalEnd=void 0===_ref$intervalEnd?"end":_ref$intervalEnd,_ref$intervalKey=_ref.intervalKey,intervalKey=void 0===_ref$intervalKey?"key":_ref$intervalKey,_ref$horizontal=_ref.horizontal,horizontal=void 0===_ref$horizontal||_ref$horizontal,_ref$autoRescale=_ref.autoRescale,autoRescale=void 0===_ref$autoRescale||_ref$autoRescale,_ref$scaleIndex=_ref.scaleIndex,scaleIndex=void 0===_ref$scaleIndex?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Us:_ref$scaleIndex,_ref$scaleValue=_ref.scaleValue,scaleValue=void 0===_ref$scaleValue?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Tx9:_ref$scaleValue,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FgM)(),_useContainer=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,disabled=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gKR)(keys).disabled,seriesIndexes=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.snp)(data)}),[data]),accessors=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return[(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(intervalStart),(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(intervalEnd)]}),[intervalStart,intervalEnd,intervalKey]),keyAccessor=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.wIU)(intervalKey)}),[intervalKey]),processedData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function processData(data,accessors,keyAccessor,keys){return data.map((function(seriesData,index){var summaries=seriesData.data.map((function(itemData){var key=String(keyAccessor(itemData));return{start:Number(accessors[0](itemData)),end:Number(accessors[1](itemData)),key}})).filter((function(item){return keys.indexOf(item.key)>=0}));return{id:seriesData.id,index,data:summaries,domain:summaries.map((function(item){return[item.start,item.end]}))}}))}(data,accessors,keyAccessor,keys)}),[data,accessors,keyAccessor,keys]),_getScaleProps=(0,_bars_utils__WEBPACK_IMPORTED_MODULE_3__.P)(processedData.map((function(d){return d.id})),processedData.map((function(d){return d.domain})),scaleIndex,scaleValue,innerSize,horizontal,autoRescale?disabled:Array(keys.length).fill(!1)),indexProps=_getScaleProps.index,valueProps=_getScaleProps.value,xProps=horizontal?valueProps:indexProps,yProps=horizontal?indexProps:valueProps,colorProps=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.NVB)(null!=scaleColor?scaleColor:theme.Colors.categorical,keys),scalesContextValue=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.cT_)({x:xProps,y:yProps,color:colorProps}),scales=scalesContextValue.scales,indexScale=horizontal?scales.y:scales.x,valueScale=horizontal?scales.x:scales.y,_getInternalWidthAndG=(0,_bars_utils__WEBPACK_IMPORTED_MODULE_3__.u)(indexScale,keys,0,"layered"),boxWidth=_getInternalWidthAndG[0],boxOffset=_getInternalWidthAndG[1],boxGap=_getInternalWidthAndG[2],preparedData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function prepareData(data,indexScale,valueScale,horizontal,width,offset,gap){return data.map((function(seriesData){var bandStart=indexScale(seriesData.id)-indexScale.bandwidth()/2+offset,summaries=seriesData.data.map((function(summary){bandStart+=width+gap;var start=valueScale(summary.start),end=valueScale(summary.end);return _extends({},summary,{bandStart:bandStart-width-gap,bandWidth:width,size:horizontal?[end-start,width]:[width,end-start],position:horizontal?[start,bandStart-width-gap]:[bandStart-width-gap,start]})}));return{id:seriesData.id,index:seriesData.index,data:summaries}}))}(processedData,indexScale,valueScale,horizontal,boxWidth,boxOffset,boxGap)}),[processedData,indexScale,valueScale,horizontal,boxWidth,boxOffset,boxGap]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.PzT,_extends({variant:"schedule",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys,scalesContextValue},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_context__WEBPACK_IMPORTED_MODULE_4__.P7,{data:preparedData,seriesIndexes,keys,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.X,{features:framer_motion__WEBPACK_IMPORTED_MODULE_6__.H,children})})}))};Schedule.displayName="Schedule";try{Schedule.displayName="Schedule",Schedule.__docgenInfo={description:"",displayName:"Schedule",props:{data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"ScheduleDataItem[]"}},intervalStart:{defaultValue:{value:"start"},description:"accessor for schedule interval start",name:"intervalStart",required:!1,type:{name:"string"}},intervalEnd:{defaultValue:{value:"end"},description:"accessor for schedule interval end",name:"intervalEnd",required:!1,type:{name:"string"}},intervalKey:{defaultValue:{value:"key"},description:"accessor for schedule interval key",name:"intervalKey",required:!1,type:{name:"string"}},scaleValue:{defaultValue:null,description:"scale for axis with continuous values",name:"scaleValue",required:!1,type:{name:"TimeScaleSpec | LinearScaleSpec"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},horizontal:{defaultValue:{value:"true"},description:"display bands horizontally",name:"horizontal",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}},autoRescale:{defaultValue:{value:"true"},description:"automatically adjust scales if/when data subsets become disabled",name:"autoRescale",required:!1,type:{name:"boolean"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},scaleIndex:{defaultValue:null,description:"scale for axis with discrete indexes",name:"scaleIndex",required:!1,type:{name:"ScaleWithBandwidthSpec"}},keys:{defaultValue:null,description:"list of all keys associated with a band",name:"keys",required:!0,type:{name:"string[]"}},paddingInternal:{defaultValue:null,description:"padding between bands in the same group/index",name:"paddingInternal",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/schedules/Schedule.tsx#Schedule"]={docgenInfo:Schedule.__docgenInfo,name:"Schedule",path:"packages/band/src/schedules/Schedule.tsx#Schedule"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/schedules/Schedules.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>Schedules});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/band/src/schedules/context.tsx"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","keys","component","className","setRole","dataComponent","style"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Schedules=function Schedules(_ref){var ids=_ref.ids,keys=_ref.keys,_ref$component=_ref.component,component=void 0===_ref$component?chsk_core_es.AeJ:_ref$component,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?chsk_core_es.oKN:_ref$dataComponent,style=_ref.style,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),processedData=(0,chsk_core_es.wIO)().data,preparedData=(0,context.Xy)(),colorScale=(0,chsk_core_es.kE1)().scales.color,data=preparedData.data,_useDisabledKeys=(0,chsk_core_es.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender;if(!function isScheduleProcessedData(data){var result=data.map((function(item){return"object"==typeof item&&null!==item&&"id"in item&&"index"in item&&"data"in item&&"domain"in item}));return result.length>0&&result.every(Boolean)}(processedData))return null;var _useMemo=(0,react.useMemo)((function(){return(0,chsk_core_es.pP)(ids,keys,preparedData)}),[ids,keys,preparedData]),idSet=_useMemo.idSet,keySet=_useMemo.keySet,styles=(0,react.useMemo)((function(){return preparedData.keys.map((function(k,i){var keyColor=colorScale(i);return(0,chsk_core_es.hIX)(style,keyColor)}))}),[preparedData,style,colorScale]),allKeys=preparedData.keys,result=preparedData.keys.map((function(k,i){if(!keySet.has(k))return null;var visible=!disabledKeys.has(k),items=[];return data.map((function(seriesData){if(!idSet.has(seriesData.id))return null;seriesData.data.map((function(dataItem){if(!keySet.has(dataItem.key)||dataItem.key!=k)return null;var keyIndex=allKeys.indexOf(dataItem.key),pos=dataItem.position,size=dataItem.size,el=(0,react.createElement)(dataComponent,_extends({key:"interval-"+seriesData.index+"-"+i,data:_extends({id:seriesData.id},dataItem),component,props:{x:pos[0],y:pos[1],width:size[0],height:size[1],className,style:styles[keyIndex],variant:"interval",setRole}},props));items.push(el)}))})),(0,jsx_runtime.jsx)(chsk_core_es.JjT,{role:"intervals",visible,firstRender,children:items.filter(Boolean)},"intervals-"+i)})).filter(Boolean);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:result})};try{Schedules.displayName="Schedules",Schedules.__docgenInfo={description:"",displayName:"Schedules",props:{component:{defaultValue:null,description:"component used to schedule interval box",name:"component",required:!1,type:{name:"FC<RectangleProps>"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},keys:{defaultValue:null,description:"keys to display (default to all keys)",name:"keys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<ScheduleInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<ScheduleInteractiveDataItem, RectangleProps>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/schedules/Schedules.tsx#Schedules"]={docgenInfo:Schedules.__docgenInfo,name:"Schedules",path:"packages/band/src/schedules/Schedules.tsx#Schedules"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/schedules/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P7:()=>SchedulePreparedDataProvider,Xy:()=>useSchedulePreparedData});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SchedulePreparedDataContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({data:[],seriesIndexes:{},keys:[]}),SchedulePreparedDataProvider=function SchedulePreparedDataProvider(_ref){var data=_ref.data,seriesIndexes=_ref.seriesIndexes,keys=_ref.keys,children=_ref.children,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{data,seriesIndexes,keys}}),[data]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SchedulePreparedDataContext.Provider,{value,children})};SchedulePreparedDataProvider.displayName="SchedulePreparedDataProvider";var useSchedulePreparedData=function useSchedulePreparedData(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SchedulePreparedDataContext)};try{SchedulePreparedDataProvider.displayName="SchedulePreparedDataProvider",SchedulePreparedDataProvider.__docgenInfo={description:"",displayName:"SchedulePreparedDataProvider",props:{data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"SchedulePreparedDataItem[]"}},seriesIndexes:{defaultValue:null,description:"map from series ids to indexes",name:"seriesIndexes",required:!0,type:{name:"Record<string, number>"}},keys:{defaultValue:null,description:"list of keys",name:"keys",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/schedules/context.tsx#SchedulePreparedDataProvider"]={docgenInfo:SchedulePreparedDataProvider.__docgenInfo,name:"SchedulePreparedDataProvider",path:"packages/band/src/schedules/context.tsx#SchedulePreparedDataProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/schedules/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QP:()=>ChartScheduleDecorator,DV:()=>commonScheduleProps,xE:()=>onSchedulesClick});var Schedule=__webpack_require__("./packages/band/src/schedules/Schedule.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js");const dataSchedules_namespaceObject=JSON.parse('[{"id":"alpha","data":[{"key":"x","start":1,"end":3},{"key":"y","start":4,"end":6},{"key":"z","start":7,"end":9}]},{"id":"beta","data":[{"key":"x","start":7,"end":10},{"key":"y","start":3,"end":7},{"key":"z","start":0,"end":3}]}]');var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonScheduleProps={data:dataSchedules_namespaceObject,keys:["x","y","z"],scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},ChartScheduleDecorator=function ChartScheduleDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(Schedule.P,_extends({},commonScheduleProps,{horizontal:!1,children:[(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartScheduleDecorator.displayName="ChartScheduleDecorator";var onSchedulesClick=function onSchedulesClick(data){console.log("clicked: "+JSON.stringify(data))};try{ChartScheduleDecorator.displayName="ChartScheduleDecorator",ChartScheduleDecorator.__docgenInfo={description:"",displayName:"ChartScheduleDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/schedules/decorators.tsx#ChartScheduleDecorator"]={docgenInfo:ChartScheduleDecorator.__docgenInfo,name:"ChartScheduleDecorator",path:"packages/band/stories/schedules/decorators.tsx#ChartScheduleDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onSchedulesClick.displayName="onSchedulesClick",onSchedulesClick.__docgenInfo={description:"",displayName:"onSchedulesClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},start:{defaultValue:null,description:"",name:"start",required:!0,type:{name:"number"}},end:{defaultValue:null,description:"",name:"end",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/schedules/decorators.tsx#onSchedulesClick"]={docgenInfo:onSchedulesClick.__docgenInfo,name:"onSchedulesClick",path:"packages/band/stories/schedules/decorators.tsx#onSchedulesClick"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/schedules/Schedules.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Schedules_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/stories/schedules/Schedules.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"schedules",children:"Schedules"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Schedules_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Schedules"})," draws intervals on a schedule chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Schedules"})," is intended to be used within a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Schedule"})," view. Note that while the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Schedules"})," component is the one that draws visual elements, much of the chart layout is determined by the parent view",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Schedule"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Schedules_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data-subsets",children:"Data subsets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Schedules"})," draws the entire dataset. To draw subsets, set the props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ids"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"keys"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Schedules_stories__WEBPACK_IMPORTED_MODULE_4__.SelectedIds}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Schedules_stories__WEBPACK_IMPORTED_MODULE_4__.SelectedKeys}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"mouse-events",children:"Mouse events"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To make elements respond to mouse events, set prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"handlers"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Schedules_stories__WEBPACK_IMPORTED_MODULE_4__.MouseClick}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["(Click on the boxes, then check the browser console with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Ctrl Shift J"})," for output.)"]})]})}}}}]);