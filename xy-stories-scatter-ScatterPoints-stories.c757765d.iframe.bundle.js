"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7909,9e3],{"./packages/xy/stories/scatter/ScatterPoints.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EntireDataset:()=>EntireDataset,MouseClick:()=>MouseClick,SingleSeries:()=>SingleSeries,Symbol:()=>Symbol,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _EntireDataset$parame,_EntireDataset$parame2,_SingleSeries$paramet,_SingleSeries$paramet2,_Symbol$parameters,_Symbol$parameters2,_MouseClick$parameter,_MouseClick$parameter2,_chsk_annotation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/annotation/dist/chsk-annotation.es.js"),_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/xy/src/scatter/ScatterPoints.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/xy/stories/scatter/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/XY/Scatter/ScatterPoints",component:_src__WEBPACK_IMPORTED_MODULE_0__.c};var EntireDataset={name:"entire dataset",args:{symbolStyle:{stroke:"#333333",strokeWidth:1}},component:_src__WEBPACK_IMPORTED_MODULE_0__.c,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.WC]},SingleSeries={name:"single series",args:{ids:["quadratic"],symbolStyle:{stroke:"#333333",strokeWidth:1}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.WC]},Symbol={name:"symbol",args:{ids:["quadratic"],symbolStyle:{stroke:"#222222",strokeWidth:1},symbol:_chsk_annotation__WEBPACK_IMPORTED_MODULE_2__.CJ},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.WC]},MouseClick={name:"mouse click",args:{onClick:_decorators__WEBPACK_IMPORTED_MODULE_1__.eC},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.WC]};EntireDataset.parameters=_extends({},EntireDataset.parameters,{docs:_extends({},null==(_EntireDataset$parame=EntireDataset.parameters)?void 0:_EntireDataset$parame.docs,{source:_extends({originalSource:"{\n  name: 'entire dataset',\n  args: {\n    symbolStyle: {\n      stroke: '#333333',\n      strokeWidth: 1\n    }\n  },\n  component: ScatterPoints,\n  decorators: [ChartScatterDecorator]\n}"},null==(_EntireDataset$parame2=EntireDataset.parameters)||null==(_EntireDataset$parame2=_EntireDataset$parame2.docs)?void 0:_EntireDataset$parame2.source)})}),SingleSeries.parameters=_extends({},SingleSeries.parameters,{docs:_extends({},null==(_SingleSeries$paramet=SingleSeries.parameters)?void 0:_SingleSeries$paramet.docs,{source:_extends({originalSource:"{\n  name: 'single series',\n  args: {\n    ids: ['quadratic'],\n    symbolStyle: {\n      stroke: '#333333',\n      strokeWidth: 1\n    }\n  },\n  decorators: [ChartScatterDecorator]\n}"},null==(_SingleSeries$paramet2=SingleSeries.parameters)||null==(_SingleSeries$paramet2=_SingleSeries$paramet2.docs)?void 0:_SingleSeries$paramet2.source)})}),Symbol.parameters=_extends({},Symbol.parameters,{docs:_extends({},null==(_Symbol$parameters=Symbol.parameters)?void 0:_Symbol$parameters.docs,{source:_extends({originalSource:"{\n  name: 'symbol',\n  args: {\n    ids: ['quadratic'],\n    symbolStyle: {\n      stroke: '#222222',\n      strokeWidth: 1\n    },\n    symbol: Triangle\n  },\n  decorators: [ChartScatterDecorator]\n}"},null==(_Symbol$parameters2=Symbol.parameters)||null==(_Symbol$parameters2=_Symbol$parameters2.docs)?void 0:_Symbol$parameters2.source)})}),MouseClick.parameters=_extends({},MouseClick.parameters,{docs:_extends({},null==(_MouseClick$parameter=MouseClick.parameters)?void 0:_MouseClick$parameter.docs,{source:_extends({originalSource:"{\n  name: 'mouse click',\n  args: {\n    onClick: onScatterClick\n  },\n  decorators: [ChartScatterDecorator]\n}"},null==(_MouseClick$parameter2=MouseClick.parameters)||null==(_MouseClick$parameter2=_MouseClick$parameter2.docs)?void 0:_MouseClick$parameter2.source)})});var __namedExportsOrder=["EntireDataset","SingleSeries","Symbol","MouseClick"]},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/d3-shape/src/curve/bundle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _basis_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/curve/basis.js");function Bundle(context,beta){this._basis=new _basis_js__WEBPACK_IMPORTED_MODULE_0__.fE(context),this._beta=beta}Bundle.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var x=this._x,y=this._y,j=x.length-1;if(j>0)for(var t,x0=x[0],y0=y[0],dx=x[j]-x0,dy=y[j]-y0,i=-1;++i<=j;)t=i/j,this._basis.point(this._beta*x[i]+(1-this._beta)*(x0+t*dx),this._beta*y[i]+(1-this._beta)*(y0+t*dy));this._x=this._y=null,this._basis.lineEnd()},point:function(x,y){this._x.push(+x),this._y.push(+y)}};const __WEBPACK_DEFAULT_EXPORT__=function custom(beta){function bundle(context){return 1===beta?new _basis_js__WEBPACK_IMPORTED_MODULE_0__.fE(context):new Bundle(context,beta)}return bundle.beta=function(beta){return custom(+beta)},bundle}(.85)},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var frameloop_frame=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/frame.mjs");var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop_frame.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);