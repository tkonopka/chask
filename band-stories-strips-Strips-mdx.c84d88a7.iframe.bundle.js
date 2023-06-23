"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4197,9594],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/band/stories/strips/Strips.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MouseClick:()=>MouseClick,SelectedIds:()=>SelectedIds,SelectedKeys:()=>SelectedKeys,Symbols:()=>Symbols,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _SelectedIds$paramete,_SelectedIds$paramete2,_SelectedIds$paramete3,_SelectedKeys$paramet,_SelectedKeys$paramet2,_SelectedKeys$paramet3,_Symbols$parameters,_Symbols$parameters2,_Symbols$parameters2$,_MouseClick$parameter,_MouseClick$parameter2,_MouseClick$parameter3,_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/band/src/strips/Strips.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/stories/strips/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Strips/Strips",component:_src__WEBPACK_IMPORTED_MODULE_0__.i};var SelectedIds={name:"selected ids",args:{ids:["alpha"],symbolStyle:{strokeWidth:1,stroke:"#222222"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.sb]},SelectedKeys={name:"selected keys",args:{keys:["x"],symbolStyle:{strokeWidth:1,stroke:"#222222"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.sb]},Symbols={name:"symbols",args:{component:_chsk_core__WEBPACK_IMPORTED_MODULE_2__.bK0,symbolStyle:{strokeWidth:1,stroke:"#222222"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.sb]},MouseClick={name:"mouse click",args:{handlers:{onClick:_decorators__WEBPACK_IMPORTED_MODULE_1__.PB}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.sb]};SelectedIds.parameters=_extends({},SelectedIds.parameters,{docs:_extends({},null==(_SelectedIds$paramete=SelectedIds.parameters)?void 0:_SelectedIds$paramete.docs,{source:_extends({originalSource:"{\n  name: 'selected ids',\n  args: {\n    ids: ['alpha'],\n    symbolStyle: {\n      strokeWidth: 1,\n      stroke: '#222222'\n    }\n  },\n  decorators: [ChartStripDecorator]\n}"},null==(_SelectedIds$paramete2=SelectedIds.parameters)||null==(_SelectedIds$paramete3=_SelectedIds$paramete2.docs)?void 0:_SelectedIds$paramete3.source)})}),SelectedKeys.parameters=_extends({},SelectedKeys.parameters,{docs:_extends({},null==(_SelectedKeys$paramet=SelectedKeys.parameters)?void 0:_SelectedKeys$paramet.docs,{source:_extends({originalSource:"{\n  name: 'selected keys',\n  args: {\n    keys: ['x'],\n    symbolStyle: {\n      strokeWidth: 1,\n      stroke: '#222222'\n    }\n  },\n  decorators: [ChartStripDecorator]\n}"},null==(_SelectedKeys$paramet2=SelectedKeys.parameters)||null==(_SelectedKeys$paramet3=_SelectedKeys$paramet2.docs)?void 0:_SelectedKeys$paramet3.source)})}),Symbols.parameters=_extends({},Symbols.parameters,{docs:_extends({},null==(_Symbols$parameters=Symbols.parameters)?void 0:_Symbols$parameters.docs,{source:_extends({originalSource:"{\n  name: 'symbols',\n  args: {\n    component: Square,\n    symbolStyle: {\n      strokeWidth: 1,\n      stroke: '#222222'\n    }\n  },\n  decorators: [ChartStripDecorator]\n}"},null==(_Symbols$parameters2=Symbols.parameters)||null==(_Symbols$parameters2$=_Symbols$parameters2.docs)?void 0:_Symbols$parameters2$.source)})}),MouseClick.parameters=_extends({},MouseClick.parameters,{docs:_extends({},null==(_MouseClick$parameter=MouseClick.parameters)?void 0:_MouseClick$parameter.docs,{source:_extends({originalSource:"{\n  name: 'mouse click',\n  args: {\n    handlers: {\n      onClick: onStripsClick\n    }\n  },\n  decorators: [ChartStripDecorator]\n}"},null==(_MouseClick$parameter2=MouseClick.parameters)||null==(_MouseClick$parameter3=_MouseClick$parameter2.docs)?void 0:_MouseClick$parameter3.source)})});var __namedExportsOrder=["SelectedIds","SelectedKeys","Symbols","MouseClick"]},"./packages/band/src/strips/Strip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Strip});var react=__webpack_require__("./node_modules/react/index.js"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/band/src/strips/context.tsx"),utils=__webpack_require__("./packages/band/src/bars/utils.ts"),getStripInternalOrder=function getStripInternalOrder(jitter,values){var indexes=values.map((function(v,i){return i}));if("none"===jitter)return indexes;if("random"===jitter)return indexes.sort((function(){return Math.random()-.5}));if("middle"===jitter)return Array(values.length).fill((values.length+1)/2);var aux=values.map((function(v,i){return[v,i]}));return"increasing"===jitter||"ascending"===jitter?aux.sort((function ascendingComparator(a,b){return a[0]-b[0]})).forEach((function(vi,j){return indexes[vi[1]]=j})):aux.sort((function descendingComparator(a,b){return b[0]-a[0]})).forEach((function(vi,j){return indexes[vi[1]]=j})),indexes},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","variant","data","keys","jitter","valueSize","horizontal","autoRescale","paddingInternal","scaleIndex","scaleValue","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Strip=function Strip(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?chsk_core_es.WdC:_ref$container,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"grouped":_ref$variant,data=_ref.data,keys=_ref.keys,_ref$jitter=_ref.jitter,jitter=void 0===_ref$jitter?"none":_ref$jitter,_ref$valueSize=_ref.valueSize,valueSize=void 0===_ref$valueSize?3:_ref$valueSize,_ref$horizontal=_ref.horizontal,horizontal=void 0!==_ref$horizontal&&_ref$horizontal,_ref$autoRescale=_ref.autoRescale,autoRescale=void 0===_ref$autoRescale||_ref$autoRescale,_ref$paddingInternal=_ref.paddingInternal,paddingInternal=void 0===_ref$paddingInternal?0:_ref$paddingInternal,_ref$scaleIndex=_ref.scaleIndex,scaleIndex=void 0===_ref$scaleIndex?chsk_core_es.Us:_ref$scaleIndex,_ref$scaleValue=_ref.scaleValue,scaleValue=void 0===_ref$scaleValue?chsk_core_es.Tx9:_ref$scaleValue,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,chsk_core_es.FgM)(),_useContainer=(0,chsk_core_es.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,disabled=(0,chsk_core_es.gKR)(keys).disabled,seriesIndexes=(0,react.useMemo)((function(){return(0,chsk_core_es.snp)(data)}),[data]),processedData=(0,react.useMemo)((function(){return function processData(data,keys,valueSize,jitter){var accessors=keys.map((function(k){return(0,chsk_core_es.wIU)(k)}));return data.map((function(seriesData,index){var summaries=accessors.map((function(f){var raw=f(seriesData);if(raw&&Array.isArray(raw))return{value:raw,internal:getStripInternalOrder(jitter,raw),valueSize:Array(raw.length).fill(valueSize)}}));return{id:seriesData.id,index,data:summaries,domain:summaries.map((function(summary){return summary?(0,chsk_core_es.FG_)(null==summary?void 0:summary.value):void 0}))}}))}(data,keys,valueSize,jitter)}),[data,keys,valueSize,jitter]),_getScaleProps=(0,utils.P)(processedData.map((function(d){return d.id})),processedData.map((function(d){return d.domain})),scaleIndex,scaleValue,innerSize,horizontal,autoRescale?disabled:Array(keys.length).fill(!1)),indexProps=_getScaleProps.index,valueProps=_getScaleProps.value,xProps=horizontal?valueProps:indexProps,yProps=horizontal?indexProps:valueProps,colorProps=(0,chsk_core_es.NVB)(null!=scaleColor?scaleColor:theme.Colors.categorical,keys),scalesContextValue=(0,chsk_core_es.cT_)({x:xProps,y:yProps,color:colorProps}),scales=scalesContextValue.scales,indexScale=horizontal?scales.y:scales.x,valueScale=horizontal?scales.x:scales.y,_getInternalWidthAndG=(0,utils.u)(indexScale,keys,paddingInternal,variant),stripWidth=_getInternalWidthAndG[0],stripOffset=_getInternalWidthAndG[1],stripGap=_getInternalWidthAndG[2],preparedData=(0,react.useMemo)((function(){return function prepareData(data,indexScale,valueScale,horizontal,width,offset,gap){return data.map((function(seriesData){var bandStart=indexScale(seriesData.id)-indexScale.bandwidth()/2+offset,summaries=seriesData.data.map((function(summary){if(bandStart+=width+gap,summary){var n=summary.value.length,internalInterval=n<=1?width:width/(summary.value.length-1),internalStart=bandStart-width-gap+(n<=1?width/2:0);return{value:summary.value.map((function(v){return valueScale(v)})),internal:summary.internal.map((function(v){return internalStart+v*internalInterval})),valueSize:summary.valueSize.map((function(v){return v})),bandStart:bandStart-width-gap,bandWidth:width}}}));return{id:seriesData.id,index:seriesData.index,data:summaries}}))}(processedData,indexScale,valueScale,0,stripWidth,stripOffset,stripGap)}),[processedData,horizontal,indexScale,valueScale,stripWidth,stripOffset,stripGap]);return(0,jsx_runtime.jsx)(chsk_core_es.PzT,_extends({variant:"strip",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys,scalesContextValue},props,{children:(0,jsx_runtime.jsx)(context.nQ,{data:preparedData,seriesIndexes,keys,children:(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children})})}))};Strip.displayName="Strip";try{Strip.displayName="Strip",Strip.__docgenInfo={description:"",displayName:"Strip",props:{variant:{defaultValue:{value:"grouped"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grouped"'},{value:'"layered"'}]}},jitter:{defaultValue:{value:"none"},description:"determines how points are arranged within a strip",name:"jitter",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"none"'},{value:'"random"'},{value:'"ascending"'},{value:'"increasing"'},{value:'"descending"'},{value:'"decreasing"'}]}},data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"StripDataItem[]"}},valueSize:{defaultValue:{value:"3"},description:"size of dots",name:"valueSize",required:!1,type:{name:"number"}},keys:{defaultValue:null,description:"list of all keys associated with a band",name:"keys",required:!0,type:{name:"string[]"}},horizontal:{defaultValue:{value:"false"},description:"display bands horizontally",name:"horizontal",required:!1,type:{name:"boolean"}},paddingInternal:{defaultValue:{value:"0"},description:"padding between bands in the same group/index",name:"paddingInternal",required:!1,type:{name:"number"}},scaleIndex:{defaultValue:null,description:"scale for axis with discrete indexes",name:"scaleIndex",required:!1,type:{name:"ScaleWithBandwidthSpec"}},scaleValue:{defaultValue:null,description:"scale for axis with continuous values",name:"scaleValue",required:!1,type:{name:"ContinuousScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}},autoRescale:{defaultValue:{value:"true"},description:"automatically adjust scales if/when data subsets become disabled",name:"autoRescale",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/strips/Strip.tsx#Strip"]={docgenInfo:Strip.__docgenInfo,name:"Strip",path:"packages/band/src/strips/Strip.tsx#Strip"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/strips/Strips.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Strips});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/band/src/strips/context.tsx"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","keys","component","className","symbolStyle","dataComponent"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Strips=function Strips(_ref){var ids=_ref.ids,keys=_ref.keys,_ref$component=_ref.component,component=void 0===_ref$component?chsk_core_es.Cdc:_ref$component,className=_ref.className,symbolStyle=_ref.symbolStyle,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?chsk_core_es.Aj5:_ref$dataComponent,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),processedData=(0,chsk_core_es.wIO)().data,preparedData=(0,context.xh)(),scales=(0,chsk_core_es.kE1)().scales,colorScale=scales.color,data=preparedData.data,_useDisabledKeys=(0,chsk_core_es.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender,horizontal=(0,chsk_core_es.y7R)(scales.y),_useIdsKeys=(0,chsk_core_es.lRm)(ids,keys,preparedData),idSet=_useIdsKeys.idSet,keySet=_useIdsKeys.keySet;if(!function isStripProcessedData(data){var result=data.map((function(item){return"object"==typeof item&&null!==item&&"id"in item&&"index"in item&&"data"in item&&"domain"in item}));return result.length>0&&result.every(Boolean)}(processedData))return null;var allKeys=preparedData.keys,symbolStyles=(0,react.useMemo)((function(){return allKeys.map((function(k,i){return(0,chsk_core_es.hIX)(symbolStyle,colorScale(i))}))}),[allKeys,symbolStyle,colorScale]),result=preparedData.keys.map((function(k,i){if(!keySet.has(k))return null;var visible=!disabledKeys.has(k),items=data.map((function(seriesData){if(!idSet.has(seriesData.id))return null;var summary=seriesData.data[i];if(!summary)return null;var x=horizontal?summary.value:summary.internal,y=horizontal?summary.internal:summary.value,seriesProcessedData=processedData[seriesData.index].data[i];return summary.valueSize.map((function(valueSize,j){return(0,react.createElement)(dataComponent,_extends({key:"point-"+seriesData.index+"-"+i+"-"+j,data:{id:seriesData.id,key:k,index:j,value:null==seriesProcessedData?void 0:seriesProcessedData.value[j],valueSize:null==seriesProcessedData?void 0:seriesProcessedData.valueSize[j]},component,props:{cx:x[j],cy:y[j],r:valueSize,className,style:symbolStyles[i],setRole:!1}},props))}))})).filter(Boolean).flat();return(0,jsx_runtime.jsx)(chsk_core_es.JjT,{role:"strips",visible,firstRender,children:items},"strips-"+i)}));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:result})};try{Strips.displayName="Strips",Strips.__docgenInfo={description:"",displayName:"Strips",props:{component:{defaultValue:null,description:"component used to draw box and whiskers",name:"component",required:!1,type:{name:"FC<SymbolProps>"}},symbolStyle:{defaultValue:null,description:"style for symbols",name:"symbolStyle",required:!1,type:{name:"Partial<CSSProperties>"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},keys:{defaultValue:null,description:"keys to display (default to all keys)",name:"keys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<StripInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<StripInteractiveDataItem, SymbolProps>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/strips/Strips.tsx#Strips"]={docgenInfo:Strips.__docgenInfo,name:"Strips",path:"packages/band/src/strips/Strips.tsx#Strips"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/strips/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nQ:()=>StripPreparedDataProvider,xh:()=>useStripPreparedData});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),StripPreparedDataContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({data:[],seriesIndexes:{},keys:[]}),StripPreparedDataProvider=function StripPreparedDataProvider(_ref){var data=_ref.data,seriesIndexes=_ref.seriesIndexes,keys=_ref.keys,children=_ref.children,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{data,seriesIndexes,keys}}),[data]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StripPreparedDataContext.Provider,{value,children})};StripPreparedDataProvider.displayName="StripPreparedDataProvider";var useStripPreparedData=function useStripPreparedData(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StripPreparedDataContext)};try{StripPreparedDataProvider.displayName="StripPreparedDataProvider",StripPreparedDataProvider.__docgenInfo={description:"",displayName:"StripPreparedDataProvider",props:{data:{defaultValue:null,description:"data",name:"data",required:!0,type:{name:"StripPreparedDataItem[]"}},seriesIndexes:{defaultValue:null,description:"map from series ids to indexes",name:"seriesIndexes",required:!0,type:{name:"Record<string, number>"}},keys:{defaultValue:null,description:"list of keys",name:"keys",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/strips/context.tsx#StripPreparedDataProvider"]={docgenInfo:StripPreparedDataProvider.__docgenInfo,name:"StripPreparedDataProvider",path:"packages/band/src/strips/context.tsx#StripPreparedDataProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/strips/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JA:()=>commonStripProps,PB:()=>onStripsClick,sb:()=>ChartStripDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/strips/Strip.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonStripProps={data:_decorators__WEBPACK_IMPORTED_MODULE_1__.A,keys:["x","y"],valueSize:4,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]},paddingInternal:.2},ChartStripDecorator=function ChartStripDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.D,_extends({},commonStripProps,{horizontal:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartStripDecorator.displayName="ChartStripDecorator";var onStripsClick=function onStripsClick(data){console.log("clicked: "+JSON.stringify(data))};try{ChartStripDecorator.displayName="ChartStripDecorator",ChartStripDecorator.__docgenInfo={description:"",displayName:"ChartStripDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/strips/decorators.tsx#ChartStripDecorator"]={docgenInfo:ChartStripDecorator.__docgenInfo,name:"ChartStripDecorator",path:"packages/band/stories/strips/decorators.tsx#ChartStripDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onStripsClick.displayName="onStripsClick",onStripsClick.__docgenInfo={description:"",displayName:"onStripsClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},valueSize:{defaultValue:null,description:"",name:"valueSize",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/strips/decorators.tsx#onStripsClick"]={docgenInfo:onStripsClick.__docgenInfo,name:"onStripsClick",path:"packages/band/stories/strips/decorators.tsx#onStripsClick"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/strips/Strips.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Strips_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/stories/strips/Strips.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"strips",children:"Strips"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Strips_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Strips"})," draws data points on a strip chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Strips"})," is intended to be used within a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Strip"})," view.\nNote that while the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Strips"})," component is the one that draws data points, much of the chart layout is determined by the parent view ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Strip"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Strips_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data-subsets",children:"Data subsets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Strips"})," draws the entire dataset. To draw subsets, set the props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ids"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"keys"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Strips_stories__WEBPACK_IMPORTED_MODULE_4__.SelectedIds}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Strips_stories__WEBPACK_IMPORTED_MODULE_4__.SelectedKeys}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"symbols",children:"Symbols"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"component"})," accepts a function for rendering individual data points.\nThe default function draws circles, but this can be replaced, for example, to create squares or other symbols."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Strips_stories__WEBPACK_IMPORTED_MODULE_4__.Symbols}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["See documentation in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@chsk/core"})," for symbols ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Circle"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Diamond"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Square"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Triangle"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"InvertedTriangle"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"mouse-events",children:"Mouse events"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To make points respond to mouse events, set prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"handlers"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Strips_stories__WEBPACK_IMPORTED_MODULE_4__.MouseClick}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["(Click on the data points, then check the browser console with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Ctrl Shift J"})," for output.)"]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);