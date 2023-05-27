"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7575,7599,939,3392,5912,7231,3289,1435,5973,2113,2460,7382,1844,9579,204,9594,749,8176,5063,8954],{"./packages/matrix/stories/upsets/UpSetMemberships.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomStyles:()=>CustomStyles,CustomSymbol:()=>CustomSymbol,Default:()=>Default,WithGrid:()=>WithGrid,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_WithGrid$parameters,_WithGrid$parameters2,_WithGrid$parameters3,_CustomSymbol$paramet,_CustomSymbol$paramet2,_CustomSymbol$paramet3,_CustomStyles$paramet,_CustomStyles$paramet2,_CustomStyles$paramet3,_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/matrix/src/upset/UpSetMemberships.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/matrix/stories/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Matrix/UpSets/UpSetMemberships",component:_src__WEBPACK_IMPORTED_MODULE_0__.i};var Default={name:"default",args:{},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.b7]},WithGrid={name:"with grid",args:{},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__._0]},CustomSymbol={name:"custom symbol",args:{symbol:_chsk_core__WEBPACK_IMPORTED_MODULE_2__.bK0,symbolStyle:{strokeWidth:5}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__._0]},CustomStyles={name:"custom styles",args:{lineStyle:{stroke:"#b33",strokeWidth:5},symbolStyle:{fill:"#b33"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__._0]};Default.parameters=_extends({},Default.parameters,{docs:_extends({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:_extends({originalSource:"{\n  name: 'default',\n  args: {},\n  decorators: [ChartUpSetDecorator]\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2$=_Default$parameters2.docs)?void 0:_Default$parameters2$.source)})}),WithGrid.parameters=_extends({},WithGrid.parameters,{docs:_extends({},null==(_WithGrid$parameters=WithGrid.parameters)?void 0:_WithGrid$parameters.docs,{source:_extends({originalSource:"{\n  name: 'with grid',\n  args: {},\n  decorators: [ChartUpSetGridDecorator]\n}"},null==(_WithGrid$parameters2=WithGrid.parameters)||null==(_WithGrid$parameters3=_WithGrid$parameters2.docs)?void 0:_WithGrid$parameters3.source)})}),CustomSymbol.parameters=_extends({},CustomSymbol.parameters,{docs:_extends({},null==(_CustomSymbol$paramet=CustomSymbol.parameters)?void 0:_CustomSymbol$paramet.docs,{source:_extends({originalSource:"{\n  name: 'custom symbol',\n  args: {\n    symbol: Square,\n    symbolStyle: {\n      strokeWidth: 5\n    }\n  },\n  decorators: [ChartUpSetGridDecorator]\n}"},null==(_CustomSymbol$paramet2=CustomSymbol.parameters)||null==(_CustomSymbol$paramet3=_CustomSymbol$paramet2.docs)?void 0:_CustomSymbol$paramet3.source)})}),CustomStyles.parameters=_extends({},CustomStyles.parameters,{docs:_extends({},null==(_CustomStyles$paramet=CustomStyles.parameters)?void 0:_CustomStyles$paramet.docs,{source:_extends({originalSource:"{\n  name: 'custom styles',\n  args: {\n    lineStyle: {\n      stroke: '#b33',\n      strokeWidth: 5\n    },\n    symbolStyle: {\n      fill: '#b33'\n    }\n  },\n  decorators: [ChartUpSetGridDecorator]\n}"},null==(_CustomStyles$paramet2=CustomStyles.parameters)||null==(_CustomStyles$paramet3=_CustomStyles$paramet2.docs)?void 0:_CustomStyles$paramet3.source)})});var __namedExportsOrder=["Default","WithGrid","CustomSymbol","CustomStyles"]},"./packages/matrix/src/upset/UpSetMembership.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>UpSetMembership});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),UpSetMembership=function UpSetMembership(_ref){var positions=_ref.positions,r=_ref.r,_ref$symbol=_ref.symbol,symbol=void 0===_ref$symbol?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Cdc:_ref$symbol,_ref$line=_ref.line,line=void 0===_ref$line?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.x12:_ref$line,symbolStyle=_ref.symbolStyle,lineStyle=_ref.lineStyle,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0!==_ref$setRole&&_ref$setRole,xCoordinates=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FG_)(positions.map((function(coords){return coords[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X]}))),yCoordinates=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FG_)(positions.map((function(coords){return coords[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]}))),drawLine=xCoordinates[0]!=xCoordinates[1]||yCoordinates[0]!=yCoordinates[1],compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)("upSetMembership",className),lineElement=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(line,{key:"line",x1:xCoordinates[0],x2:xCoordinates[1],y1:yCoordinates[0],y2:yCoordinates[1],style:lineStyle,className:compositeClassName,setRole}),symbolElements=positions.map((function(position,index){return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(symbol,{key:"symbol-"+index,cx:position[0],cy:position[1],r,style:symbolStyle,className:compositeClassName,setRole})}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g",{role:"upset-membership",children:[drawLine?lineElement:null,symbolElements]})};UpSetMembership.displayName="UpSetMembership";try{UpSetMembership.displayName="UpSetMembership",UpSetMembership.__docgenInfo={description:"",displayName:"UpSetMembership",props:{positions:{defaultValue:null,description:"coordinates for symbols",name:"positions",required:!0,type:{name:"NumericPositionSpec[]"}},r:{defaultValue:null,description:"radius of symbol",name:"r",required:!0,type:{name:"number"}},line:{defaultValue:null,description:"component drawing a line",name:"line",required:!1,type:{name:"FC<LineProps>"}},lineStyle:{defaultValue:null,description:"styles for line",name:"lineStyle",required:!1,type:{name:"Partial<CSSProperties>"}},symbol:{defaultValue:null,description:"component drawing a symbol for line edges",name:"symbol",required:!1,type:{name:"FC<SymbolProps>"}},symbolStyle:{defaultValue:null,description:"styles for symbol",name:"symbolStyle",required:!1,type:{name:"Partial<CSSProperties>"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"false"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"activate interactive features",name:"interactive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/upset/UpSetMembership.tsx#UpSetMembership"]={docgenInfo:UpSetMembership.__docgenInfo,name:"UpSetMembership",path:"packages/matrix/src/upset/UpSetMembership.tsx#UpSetMembership"})}catch(__react_docgen_typescript_loader_error){}},"./packages/matrix/src/upset/UpSetMemberships.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>UpSetMemberships});var _chsk_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_predicates__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/matrix/src/upset/predicates.ts"),_UpSetMembership__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/matrix/src/upset/UpSetMembership.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),UpSetMemberships=function UpSetMemberships(_ref){var _ref$component=_ref.component,component=void 0===_ref$component?_UpSetMembership__WEBPACK_IMPORTED_MODULE_2__.V:_ref$component,symbol=_ref.symbol,line=_ref.line,symbolStyle=_ref.symbolStyle,lineStyle=_ref.lineStyle,style=_ref.style,className=_ref.className,setRole=_ref.setRole,processedData=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.wIO)(),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.kE1)().scales,data=processedData.data;if(!(0,_predicates__WEBPACK_IMPORTED_MODULE_4__.B)(data)||0==data.length)return null;var horizontal=data[0].horizontal,scaleIndex=horizontal?scales.y:scales.x,scaleKeys=horizontal?scales.x:scales.y,scaleColor=scales.color,r=Math.min(scaleIndex.bandwidth(),scaleKeys.bandwidth())/2,ids=data.map((function(x){return x.id})),compositeSymbolStyle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.hIX)(symbolStyle,scaleColor("")),compositeLineStyle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.hIX)(lineStyle,scaleColor("")),cells=processedData.keys.map((function(k,i){var positions=[];return ids.map((function(seriesId,seriesIndex){data[seriesIndex].data[i]>0&&positions.push([scaleIndex(seriesId),scaleKeys(k)])})),horizontal&&(positions=positions.map((function(x){return[x[1],x[0]]}))),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component,{key:"membership-"+k,positions,r,symbol,symbolStyle:compositeSymbolStyle,line,lineStyle:compositeLineStyle,className,setRole})}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{role:"upset-memberships",style,children:cells})};UpSetMemberships.displayName="UpSetMemberships";try{UpSetMemberships.displayName="UpSetMemberships",UpSetMemberships.__docgenInfo={description:"",displayName:"UpSetMemberships",props:{component:{defaultValue:{value:"({\n    positions,\n    r,\n    symbol = Circle,\n    line = Line,\n    symbolStyle,\n    lineStyle,\n    className,\n    setRole = false,\n}: UpSetMembershipProps) => {\n    const xCoordinates = interval(positions.map(coords => coords[X]))\n    const yCoordinates = interval(positions.map(coords => coords[Y]))\n    const drawLine = xCoordinates[0] != xCoordinates[1] || yCoordinates[0] != yCoordinates[1]\n    const compositeClassName = getClassName('upSetMembership', className)\n    const lineElement = createElement(line, {\n        key: 'line',\n        x1: xCoordinates[0],\n        x2: xCoordinates[1],\n        y1: yCoordinates[0],\n        y2: yCoordinates[1],\n        style: lineStyle,\n        className: compositeClassName,\n        setRole,\n    })\n    const symbolElements = positions.map((position, index) =>\n        createElement(symbol, {\n            key: 'symbol-' + index,\n            cx: position[0],\n            cy: position[1],\n            r,\n            style: symbolStyle,\n            className: compositeClassName,\n            setRole,\n        })\n    )\n\n    return (\n        <g role={'upset-membership'}>\n            {drawLine ? lineElement : null}\n            {symbolElements}\n        </g>\n    )\n}"},description:"component to draw one set intersection",name:"component",required:!1,type:{name:"FC<UpSetMembershipProps>"}},symbol:{defaultValue:null,description:"component drawing a symbol for line edges",name:"symbol",required:!1,type:{name:"FC<SymbolProps>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},symbolStyle:{defaultValue:null,description:"styles for symbol",name:"symbolStyle",required:!1,type:{name:"Partial<CSSProperties>"}},line:{defaultValue:null,description:"component drawing a line",name:"line",required:!1,type:{name:"FC<LineProps>"}},lineStyle:{defaultValue:null,description:"styles for line",name:"lineStyle",required:!1,type:{name:"Partial<CSSProperties>"}},interactive:{defaultValue:null,description:"activate interactive features",name:"interactive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/upset/UpSetMemberships.tsx#UpSetMemberships"]={docgenInfo:UpSetMemberships.__docgenInfo,name:"UpSetMemberships",path:"packages/matrix/src/upset/UpSetMemberships.tsx#UpSetMemberships"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/animation/animate.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>animate});var _index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/index.mjs"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function animate(from,to,transition={}){const value=(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(from)?from:(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(from);return value.start((0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Z)("",value,to,transition)),{stop:()=>value.stop(),isAnimating:()=>value.isAnimating()}}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/framer-motion/dist/es/utils/process.mjs"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs"),warn_once=__webpack_require__("./node_modules/framer-motion/dist/es/utils/warn-once.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{exitBeforeEnter&&(mode="wait",(0,warn_once.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[forceRender]=function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Z_.postRender(forceRender)),[forceRender]),forcedRenderCount]}();const forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);const isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exiting=new Set,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),(0,use_unmount_effect.z)((()=>{isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return"wait"===mode&&exiting.size&&(childrenToRender=[]),exiting.forEach((key=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:()=>{allChildren.delete(key),exiting.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout,mode},child))})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),"production"!==process.O&&"wait"===mode&&childrenToRender.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);