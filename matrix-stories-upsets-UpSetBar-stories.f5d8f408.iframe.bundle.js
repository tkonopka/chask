"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9152],{"./packages/matrix/stories/upsets/UpSetBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Horizontal:()=>Horizontal,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UpSetBar_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),chsk_band_es=__webpack_require__("./packages/band/dist/chsk-band.es.js"),predicates=__webpack_require__("./packages/matrix/src/upset/predicates.ts"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","padding","scaleIndex","scaleValue","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var UpSetBar=function UpSetBar(_ref){var size=_ref.size,_ref$padding=_ref.padding,padding=void 0===_ref$padding?[0,0,0,0]:_ref$padding,_ref$scaleIndex=_ref.scaleIndex,scaleIndex=void 0===_ref$scaleIndex?chsk_core_es.Us:_ref$scaleIndex,_ref$scaleValue=_ref.scaleValue,scaleValue=void 0===_ref$scaleValue?chsk_core_es.Tx9:_ref$scaleValue,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),processedData=(0,chsk_core_es.wIO)(),dimensions=(0,chsk_core_es.Bs9)(),scales=(0,chsk_core_es.kE1)().scales,data=processedData.data;if(!(0,predicates.B)(data)||0==data.length)return null;var horizontal=data[0].horizontal,barData=(0,react.useMemo)((function(){return function getBarData(data,keys){var result=[];return keys.map((function(k,i){var value=0;data.map((function(seriesData){seriesData.data[i]&&(value=seriesData.data[i])})),result.push({id:k,value})})),result}(data,processedData.keys)}),[data,processedData]),barLayout=(0,react.useMemo)((function(){return function getBarViewLayout(horizontal,size,viewSize){return{position:horizontal?[0,-size]:[viewSize[chsk_core_es.X],0],size:horizontal?[viewSize[chsk_core_es.X],size]:[size,viewSize[chsk_core_es.Y]]}}(horizontal,size,dimensions.size)}),[horizontal,dimensions]),container={position:barLayout.position,positionUnits:"absolute",size:barLayout.size,sizeUnits:"absolute",padding};return(0,jsx_runtime.jsx)(chsk_band_es.$Q,_extends({container,data:barData,keys:["value"],horizontal:!horizontal,scaleIndex,scaleValue,scaleColor:null!=scaleColor?scaleColor:{variant:"categorical",domain:scales.color.domain(),colors:[scales.color(0)]}},props,{children}))};UpSetBar.displayName="UpSetBar";try{UpSetBar.displayName="UpSetBar",UpSetBar.__docgenInfo={description:"",displayName:"UpSetBar",props:{padding:{defaultValue:{value:"[0, 0, 0, 0]"},description:"padding",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},size:{defaultValue:null,description:"size of view along the value axis",name:"size",required:!0,type:{name:"number"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},scaleIndex:{defaultValue:null,description:"scale for axis with discrete indexes",name:"scaleIndex",required:!1,type:{name:"ScaleWithBandwidthSpec"}},scaleValue:{defaultValue:null,description:"scale for axis with continuous values",name:"scaleValue",required:!1,type:{name:"LinearScaleSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/upset/UpSetBar.tsx#UpSetBar"]={docgenInfo:UpSetBar.__docgenInfo,name:"UpSetBar",path:"packages/matrix/src/upset/UpSetBar.tsx#UpSetBar"})}catch(__react_docgen_typescript_loader_error){}var _Horizontal$parameter,_Horizontal$parameter2,_Horizontal$parameter3,_Vertical$parameters,_Vertical$parameters2,_Vertical$parameters3,UpSet=__webpack_require__("./packages/matrix/src/upset/UpSet.tsx"),UpSetGrid=__webpack_require__("./packages/matrix/src/upset/UpSetGrid.tsx"),UpSetMemberships=__webpack_require__("./packages/matrix/src/upset/UpSetMemberships.tsx"),decorators=__webpack_require__("./packages/matrix/stories/decorators.tsx");function UpSetBar_stories_extends(){return UpSetBar_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},UpSetBar_stories_extends.apply(this,arguments)}const UpSetBar_stories={title:"Addons/Matrix/UpSets/UpSetBar",component:UpSetBar};var Horizontal={render:function render(){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[170,40,40,80],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(UpSet.F,UpSetBar_stories_extends({},decorators.w,{horizontal:!0,children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"}),(0,jsx_runtime.jsx)(UpSetGrid.h,{symbolStyle:{fill:"#ccc"}}),(0,jsx_runtime.jsx)(UpSetMemberships.i,{lineStyle:{strokeWidth:3}}),(0,jsx_runtime.jsxs)(UpSetBar,{size:150,padding:[0,0,10,0],children:[(0,jsx_runtime.jsxs)(chsk_core_es.RDh,{variant:"left",children:[(0,jsx_runtime.jsx)(chsk_core_es.yAs,{variant:"left"}),(0,jsx_runtime.jsx)(chsk_core_es.$Co,{variant:"left",style:{visibility:"visible"}}),(0,jsx_runtime.jsx)(chsk_core_es.kpH,{variant:"left",children:"Intersection size"})]}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",children:(0,jsx_runtime.jsx)(chsk_core_es.$Co,{variant:"bottom",style:{visibility:"visible"}})}),(0,jsx_runtime.jsx)(chsk_band_es.Ll,{})]})]}))})},name:"horizontal"},Vertical={render:function render(){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[60,200,40,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(UpSet.F,UpSetBar_stories_extends({},decorators.w,{horizontal:!1,children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"top",children:(0,jsx_runtime.jsx)(chsk_core_es.yAs,{variant:"top",labelAngle:-70,labelStyle:{dominantBaseline:"middle",textAnchor:"start"}})}),(0,jsx_runtime.jsx)(UpSetGrid.h,{symbolStyle:{fill:"#ccc"}}),(0,jsx_runtime.jsx)(UpSetMemberships.i,{lineStyle:{strokeWidth:3}}),(0,jsx_runtime.jsxs)(UpSetBar,{size:180,padding:[0,0,0,10],children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",children:(0,jsx_runtime.jsx)(chsk_core_es.$Co,{variant:"left",style:{visibility:"visible"}})}),(0,jsx_runtime.jsxs)(chsk_core_es.RDh,{variant:"top",children:[(0,jsx_runtime.jsx)(chsk_core_es.yAs,{variant:"top"}),(0,jsx_runtime.jsx)(chsk_core_es.$Co,{variant:"top",style:{visibility:"visible"}}),(0,jsx_runtime.jsx)(chsk_core_es.kpH,{variant:"top",children:"Intersection size"})]}),(0,jsx_runtime.jsx)(chsk_band_es.Ll,{})]})]}))})},name:"vertical"};Horizontal.parameters=UpSetBar_stories_extends({},Horizontal.parameters,{docs:UpSetBar_stories_extends({},null==(_Horizontal$parameter=Horizontal.parameters)?void 0:_Horizontal$parameter.docs,{source:UpSetBar_stories_extends({originalSource:'{\n  render: () => <Chart size={[400, 300]} padding={[170, 40, 40, 80]} style={{\n    display: \'inline-block\'\n  }}>\n            <UpSet {...commonUpSetProps} horizontal={true}>\n                <Axis variant="left" />\n                <UpSetGrid symbolStyle={{\n        fill: \'#ccc\'\n      }} />\n                <UpSetMemberships lineStyle={{\n        strokeWidth: 3\n      }} />\n                <UpSetBar size={150} padding={[0, 0, 10, 0]}>\n                    <Axis variant="left">\n                        <AxisTicks variant="left" />\n                        <AxisLine variant="left" style={{\n            visibility: \'visible\'\n          }} />\n                        <AxisLabel variant="left">Intersection size</AxisLabel>\n                    </Axis>\n                    <Axis variant="bottom">\n                        <AxisLine variant="bottom" style={{\n            visibility: \'visible\'\n          }} />\n                    </Axis>\n                    <Bars />\n                </UpSetBar>\n            </UpSet>\n        </Chart>,\n  name: \'horizontal\'\n}'},null==(_Horizontal$parameter2=Horizontal.parameters)||null==(_Horizontal$parameter3=_Horizontal$parameter2.docs)?void 0:_Horizontal$parameter3.source)})}),Vertical.parameters=UpSetBar_stories_extends({},Vertical.parameters,{docs:UpSetBar_stories_extends({},null==(_Vertical$parameters=Vertical.parameters)?void 0:_Vertical$parameters.docs,{source:UpSetBar_stories_extends({originalSource:'{\n  render: () => <Chart size={[400, 300]} padding={[60, 200, 40, 60]} style={{\n    display: \'inline-block\'\n  }}>\n            <UpSet {...commonUpSetProps} horizontal={false}>\n                <Axis variant="top">\n                    <AxisTicks variant="top" labelAngle={-70} labelStyle={{\n          dominantBaseline: \'middle\',\n          textAnchor: \'start\'\n        }} />\n                </Axis>\n                <UpSetGrid symbolStyle={{\n        fill: \'#ccc\'\n      }} />\n                <UpSetMemberships lineStyle={{\n        strokeWidth: 3\n      }} />\n                <UpSetBar size={180} padding={[0, 0, 0, 10]}>\n                    <Axis variant="left">\n                        <AxisLine variant="left" style={{\n            visibility: \'visible\'\n          }} />\n                    </Axis>\n                    <Axis variant="top">\n                        <AxisTicks variant="top" />\n                        <AxisLine variant="top" style={{\n            visibility: \'visible\'\n          }} />\n                        <AxisLabel variant="top">Intersection size</AxisLabel>\n                    </Axis>\n                    <Bars />\n                </UpSetBar>\n            </UpSet>\n        </Chart>,\n  name: \'vertical\'\n}'},null==(_Vertical$parameters2=Vertical.parameters)||null==(_Vertical$parameters3=_Vertical$parameters2.docs)?void 0:_Vertical$parameters3.source)})});var __namedExportsOrder=["Horizontal","Vertical"]},"./packages/matrix/src/upset/UpSetMembership.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>UpSetMembership});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),UpSetMembership=function UpSetMembership(_ref){var positions=_ref.positions,r=_ref.r,_ref$symbol=_ref.symbol,symbol=void 0===_ref$symbol?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Cdc:_ref$symbol,_ref$line=_ref.line,line=void 0===_ref$line?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.x12:_ref$line,symbolStyle=_ref.symbolStyle,lineStyle=_ref.lineStyle,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0!==_ref$setRole&&_ref$setRole,xCoordinates=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FG_)(positions.map((function(coords){return coords[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.X]}))),yCoordinates=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FG_)(positions.map((function(coords){return coords[_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Y]}))),drawLine=xCoordinates[0]!=xCoordinates[1]||yCoordinates[0]!=yCoordinates[1],compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)("upSetMembership",className),lineElement=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(line,{key:"line",x1:xCoordinates[0],x2:xCoordinates[1],y1:yCoordinates[0],y2:yCoordinates[1],style:lineStyle,className:compositeClassName,setRole}),symbolElements=positions.map((function(position,index){return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(symbol,{key:"symbol-"+index,cx:position[0],cy:position[1],r,style:symbolStyle,className:compositeClassName,setRole})}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g",{role:"upset-membership",children:[drawLine?lineElement:null,symbolElements]})};UpSetMembership.displayName="UpSetMembership";try{UpSetMembership.displayName="UpSetMembership",UpSetMembership.__docgenInfo={description:"",displayName:"UpSetMembership",props:{positions:{defaultValue:null,description:"coordinates for symbols",name:"positions",required:!0,type:{name:"NumericPositionSpec[]"}},r:{defaultValue:null,description:"radius of symbol",name:"r",required:!0,type:{name:"number"}},line:{defaultValue:null,description:"component drawing a line",name:"line",required:!1,type:{name:"FC<LineProps>"}},lineStyle:{defaultValue:null,description:"styles for line",name:"lineStyle",required:!1,type:{name:"Partial<CSSProperties>"}},symbol:{defaultValue:null,description:"component drawing a symbol for line edges",name:"symbol",required:!1,type:{name:"FC<SymbolProps>"}},symbolStyle:{defaultValue:null,description:"styles for symbol",name:"symbolStyle",required:!1,type:{name:"Partial<CSSProperties>"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"false"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"activate interactive features",name:"interactive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/upset/UpSetMembership.tsx#UpSetMembership"]={docgenInfo:UpSetMembership.__docgenInfo,name:"UpSetMembership",path:"packages/matrix/src/upset/UpSetMembership.tsx#UpSetMembership"})}catch(__react_docgen_typescript_loader_error){}},"./packages/matrix/src/upset/UpSetMemberships.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>UpSetMemberships});var _chsk_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_predicates__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/matrix/src/upset/predicates.ts"),_UpSetMembership__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/matrix/src/upset/UpSetMembership.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),UpSetMemberships=function UpSetMemberships(_ref){var _ref$component=_ref.component,component=void 0===_ref$component?_UpSetMembership__WEBPACK_IMPORTED_MODULE_2__.V:_ref$component,symbol=_ref.symbol,line=_ref.line,symbolStyle=_ref.symbolStyle,lineStyle=_ref.lineStyle,style=_ref.style,className=_ref.className,setRole=_ref.setRole,processedData=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.wIO)(),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.kE1)().scales,data=processedData.data;if(!(0,_predicates__WEBPACK_IMPORTED_MODULE_4__.B)(data)||0==data.length)return null;var horizontal=data[0].horizontal,scaleIndex=horizontal?scales.y:scales.x,scaleKeys=horizontal?scales.x:scales.y,scaleColor=scales.color,r=Math.min(scaleIndex.bandwidth(),scaleKeys.bandwidth())/2,ids=data.map((function(x){return x.id})),compositeSymbolStyle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.hIX)(symbolStyle,scaleColor("")),compositeLineStyle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.hIX)(lineStyle,scaleColor("")),cells=processedData.keys.map((function(k,i){var positions=[];return ids.map((function(seriesId,seriesIndex){data[seriesIndex].data[i]>0&&positions.push([scaleIndex(seriesId),scaleKeys(k)])})),horizontal&&(positions=positions.map((function(x){return[x[1],x[0]]}))),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component,{key:"membership-"+k,positions,r,symbol,symbolStyle:compositeSymbolStyle,line,lineStyle:compositeLineStyle,className,setRole})}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{role:"upset-memberships",style,children:cells})};UpSetMemberships.displayName="UpSetMemberships";try{UpSetMemberships.displayName="UpSetMemberships",UpSetMemberships.__docgenInfo={description:"",displayName:"UpSetMemberships",props:{component:{defaultValue:{value:"({\n    positions,\n    r,\n    symbol = Circle,\n    line = Line,\n    symbolStyle,\n    lineStyle,\n    className,\n    setRole = false,\n}: UpSetMembershipProps) => {\n    const xCoordinates = interval(positions.map(coords => coords[X]))\n    const yCoordinates = interval(positions.map(coords => coords[Y]))\n    const drawLine = xCoordinates[0] != xCoordinates[1] || yCoordinates[0] != yCoordinates[1]\n    const compositeClassName = getClassName('upSetMembership', className)\n    const lineElement = createElement(line, {\n        key: 'line',\n        x1: xCoordinates[0],\n        x2: xCoordinates[1],\n        y1: yCoordinates[0],\n        y2: yCoordinates[1],\n        style: lineStyle,\n        className: compositeClassName,\n        setRole,\n    })\n    const symbolElements = positions.map((position, index) =>\n        createElement(symbol, {\n            key: 'symbol-' + index,\n            cx: position[0],\n            cy: position[1],\n            r,\n            style: symbolStyle,\n            className: compositeClassName,\n            setRole,\n        })\n    )\n\n    return (\n        <g role={'upset-membership'}>\n            {drawLine ? lineElement : null}\n            {symbolElements}\n        </g>\n    )\n}"},description:"component to draw one set intersection",name:"component",required:!1,type:{name:"FC<UpSetMembershipProps>"}},symbol:{defaultValue:null,description:"component drawing a symbol for line edges",name:"symbol",required:!1,type:{name:"FC<SymbolProps>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},symbolStyle:{defaultValue:null,description:"styles for symbol",name:"symbolStyle",required:!1,type:{name:"Partial<CSSProperties>"}},line:{defaultValue:null,description:"component drawing a line",name:"line",required:!1,type:{name:"FC<LineProps>"}},lineStyle:{defaultValue:null,description:"styles for line",name:"lineStyle",required:!1,type:{name:"Partial<CSSProperties>"}},interactive:{defaultValue:null,description:"activate interactive features",name:"interactive",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/upset/UpSetMemberships.tsx#UpSetMemberships"]={docgenInfo:UpSetMemberships.__docgenInfo,name:"UpSetMemberships",path:"packages/matrix/src/upset/UpSetMemberships.tsx#UpSetMemberships"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/d3-scale-chromatic/src/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function __WEBPACK_DEFAULT_EXPORT__(specifier){for(var n=specifier.length/6|0,colors=new Array(n),i=0;i<n;)colors[i]="#"+specifier.slice(6*i,6*++i);return colors}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})},"./node_modules/framer-motion/dist/es/animation/animate.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>animate});var _index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/index.mjs"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function animate(from,to,transition={}){const value=(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(from)?from:(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(from);return value.start((0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Z)("",value,to,transition)),{stop:()=>value.stop(),isAnimating:()=>value.isAnimating()}}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/framer-motion/dist/es/utils/process.mjs"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs"),warn_once=__webpack_require__("./node_modules/framer-motion/dist/es/utils/warn-once.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{exitBeforeEnter&&(mode="wait",(0,warn_once.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[forceRender]=function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Z_.postRender(forceRender)),[forceRender]),forcedRenderCount]}();const forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);const isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exiting=new Set,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),(0,use_unmount_effect.z)((()=>{isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return"wait"===mode&&exiting.size&&(childrenToRender=[]),exiting.forEach((key=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:()=>{allChildren.delete(key),exiting.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout,mode},child))})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),"production"!==process.O&&"wait"===mode&&childrenToRender.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);