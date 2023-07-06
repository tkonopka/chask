"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3428,2846],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/xy/stories/scatter/ScatterInterval.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Interval:()=>Interval,SignalProcessing:()=>SignalProcessing,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ScatterInterval_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),context=__webpack_require__("./packages/xy/src/scatter/context.tsx"),react=__webpack_require__("./node_modules/react/index.js"),signals=__webpack_require__("./packages/xy/src/scatter/signals.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","lower","upper","convolutionMask","convolutionOffset","downsampleFactor","downsampleIndex","curve","style","className","setRole","dataComponent"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ScatterInterval=function ScatterInterval(_ref2){var ids=_ref2.ids,lower=_ref2.lower,upper=_ref2.upper,convolutionMask=_ref2.convolutionMask,convolutionOffset=_ref2.convolutionOffset,downsampleFactor=_ref2.downsampleFactor,downsampleIndex=_ref2.downsampleIndex,_ref2$curve=_ref2.curve,curve=void 0===_ref2$curve?"Linear":_ref2$curve,style=_ref2.style,className=_ref2.className,_ref2$setRole=_ref2.setRole,setRole=void 0===_ref2$setRole||_ref2$setRole,_ref2$dataComponent=_ref2.dataComponent,dataComponent=void 0===_ref2$dataComponent?chsk_core_es.Aj5:_ref2$dataComponent,pathProps=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref2,_excluded),preparedData=(0,context.DP)(),rawData=(0,chsk_core_es.W3B)(),scales=(0,chsk_core_es.kE1)().scales,yScale=scales.y,colorScale=scales.color,_useDisabledKeys=(0,chsk_core_es.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender;if(!(0,chsk_core_es.z0X)(yScale))return null;var signalProps={convolutionMask,convolutionOffset,downsampleFactor,downsampleIndex},result=(null!=ids?ids:preparedData.keys).map((function(id){var visible=!disabledKeys.has(id),seriesIndex=preparedData.seriesIndexes[id];if(void 0===seriesIndex)return null;var seriesStyle=(0,chsk_core_es.hIX)(style,colorScale(seriesIndex)),d=(0,react.useMemo)((function(){return function getScatterIntervalD(_ref){var _generator,seriesIndex=_ref.seriesIndex,rawData=_ref.rawData,preparedData=_ref.preparedData,yScale=_ref.yScale,lower=_ref.lower,upper=_ref.upper,curve=_ref.curve,convolutionMask=_ref.convolutionMask,convolutionOffset=_ref.convolutionOffset,downsampleFactor=_ref.downsampleFactor,downsampleIndex=_ref.downsampleIndex,getLower=(0,chsk_core_es.wIU)(lower),getUpper=(0,chsk_core_es.wIU)(upper),originalSeriesData=rawData.data[seriesIndex].data,lowerValues=originalSeriesData.map((function(item){return yScale(getLower(item))})),upperValues=originalSeriesData.map((function(item){return yScale(getUpper(item))})),x=preparedData.data[seriesIndex].x,signalProps={convolutionMask,convolutionOffset,downsampleFactor,downsampleIndex},lowerPoints=(0,signals.ee)(_extends({x,y:lowerValues},signalProps)),upperPoints=(0,signals.ee)(_extends({x,y:upperValues},signalProps)),pointIntervals=lowerPoints.map((function(p,i){return[p[chsk_core_es.X],p[chsk_core_es.Y],upperPoints[i][chsk_core_es.Y]]}));return null!=(_generator=(0,chsk_core_es.DmD)(curve)(pointIntervals))?_generator:""}(_extends({seriesIndex,rawData,preparedData,yScale,lower,upper,curve},signalProps))}),[seriesIndex,rawData,preparedData,yScale,lower,upper,curve]),element=(0,react.createElement)(dataComponent,_extends({data:{id},component:chsk_core_es.y$t,props:{variant:"scatter-interval",d,setRole,style:seriesStyle,className}},pathProps));return(0,jsx_runtime.jsx)(chsk_core_es.JjT,{role:setRole?"scatter-interval-presence":void 0,visible,firstRender,children:element},"interval-"+seriesIndex)}));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:result.filter(Boolean)})};try{ScatterInterval.displayName="ScatterInterval",ScatterInterval.__docgenInfo={description:"",displayName:"ScatterInterval",props:{lower:{defaultValue:null,description:"key or function to extract lower bound for interval",name:"lower",required:!0,type:{name:"string | AccessorFunction<number>"}},upper:{defaultValue:null,description:"key or function to extract upper bound for interval",name:"upper",required:!0,type:{name:"string | AccessorFunction<number>"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},curve:{defaultValue:{value:"Linear"},description:"curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<ScatterInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<ScatterInteractiveDataItem, PathProps>>"}},component:{defaultValue:null,description:"function used to draw individual components",name:"component",required:!1,type:{name:"FC<PathProps>"}},componentProps:{defaultValue:null,description:"props passed to each component",name:"componentProps",required:!1,type:{name:"Partial<PathProps>"}},convolutionMask:{defaultValue:null,description:"convolution mask",name:"convolutionMask",required:!1,type:{name:"number[]"}},convolutionOffset:{defaultValue:null,description:"offset used during convolution",name:"convolutionOffset",required:!1,type:{name:"number"}},downsampleFactor:{defaultValue:null,description:"down-sampling factor [0, 1]",name:"downsampleFactor",required:!1,type:{name:"number"}},downsampleIndex:{defaultValue:null,description:"offset used during down-sampling",name:"downsampleIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/scatter/ScatterInterval.tsx#ScatterInterval"]={docgenInfo:ScatterInterval.__docgenInfo,name:"ScatterInterval",path:"packages/xy/src/scatter/ScatterInterval.tsx#ScatterInterval"})}catch(__react_docgen_typescript_loader_error){}var _Interval$parameters,_Interval$parameters2,_Interval$parameters3,_SignalProcessing$par,_SignalProcessing$par2,_SignalProcessing$par3,decorators=__webpack_require__("./packages/xy/stories/scatter/decorators.tsx");function ScatterInterval_stories_extends(){return ScatterInterval_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},ScatterInterval_stories_extends.apply(this,arguments)}const ScatterInterval_stories={title:"Addons/XY/Scatter/ScatterInterval",component:ScatterInterval};var Interval={name:"interval",args:{ids:["A"],curve:"Natural",lower:"lo",upper:"hi",style:{fill:"#dd4444",strokeWidth:0,fillOpacity:.5}},decorators:[decorators.UQ]},SignalProcessing={name:"signal processing",args:{ids:["A"],curve:"Natural",lower:"lo",upper:"hi",style:{fill:"#dd4444",strokeWidth:0,fillOpacity:.5},convolutionMask:[1,1,1],downsampleFactor:.5},decorators:[decorators.UQ]};Interval.parameters=ScatterInterval_stories_extends({},Interval.parameters,{docs:ScatterInterval_stories_extends({},null==(_Interval$parameters=Interval.parameters)?void 0:_Interval$parameters.docs,{source:ScatterInterval_stories_extends({originalSource:"{\n  name: 'interval',\n  args: {\n    ids: ['A'],\n    curve: 'Natural',\n    lower: 'lo',\n    upper: 'hi',\n    style: {\n      fill: '#dd4444',\n      strokeWidth: 0,\n      fillOpacity: 0.5\n    }\n  },\n  decorators: [ChartForIntervalDecorator]\n}"},null==(_Interval$parameters2=Interval.parameters)||null==(_Interval$parameters3=_Interval$parameters2.docs)?void 0:_Interval$parameters3.source)})}),SignalProcessing.parameters=ScatterInterval_stories_extends({},SignalProcessing.parameters,{docs:ScatterInterval_stories_extends({},null==(_SignalProcessing$par=SignalProcessing.parameters)?void 0:_SignalProcessing$par.docs,{source:ScatterInterval_stories_extends({originalSource:"{\n  name: 'signal processing',\n  args: {\n    ids: ['A'],\n    curve: 'Natural',\n    lower: 'lo',\n    upper: 'hi',\n    style: {\n      fill: '#dd4444',\n      strokeWidth: 0,\n      fillOpacity: 0.5\n    },\n    convolutionMask: [1, 1, 1],\n    downsampleFactor: 0.5\n  },\n  decorators: [ChartForIntervalDecorator]\n}"},null==(_SignalProcessing$par2=SignalProcessing.parameters)||null==(_SignalProcessing$par3=_SignalProcessing$par2.docs)?void 0:_SignalProcessing$par3.source)})});var __namedExportsOrder=["Interval","SignalProcessing"]},"./packages/xy/stories/scatter/ScatterInterval.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ScatterInterval_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/stories/scatter/ScatterInterval.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"scatterinterval",children:"ScatterInterval"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_ScatterInterval_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterInterval"})," draws a polygon intended as an interval around a curve"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_ScatterInterval_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"interval-bounds",children:"Interval bounds"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterInterval"})," shapes are characterized, for value along the x-axis, with a lower- and an upper value on the y-axis.\nThese bounds are extracted from data using keys set with props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"lower"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"upper"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ScatterInterval_stories__WEBPACK_IMPORTED_MODULE_4__.Interval}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"convolution-and-down-sampling",children:"Convolution and down-sampling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Similarly to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterCurve"}),", ScatterInterval` accepts signal-processing props related to convolution and down-sampling.\nThe example below shows the same data as before, with a moving average of three points and down-sampling by a factor of 0.5."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ScatterInterval_stories__WEBPACK_IMPORTED_MODULE_4__.SignalProcessing})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);