"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[914],{"./packages/annotation/stories/typography/FlowTypography.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SlowText:()=>SlowText,Styled:()=>Styled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FlowTypography_stories});var react=__webpack_require__("./node_modules/react/index.js"),animate=__webpack_require__("./node_modules/framer-motion/dist/es/animation/animate.mjs"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),motion_minimal=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),utils=__webpack_require__("./packages/annotation/src/typography/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),FlowTypography=function FlowTypography(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"flow-typography":_ref$variant,_ref$position=_ref.position,position=void 0===_ref$position?chsk_core_es.rv1:_ref$position,angle=_ref.angle,duration=_ref.duration,_ref$rate=_ref.rate,rate=void 0===_ref$rate?20:_ref$rate,className=_ref.className,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,_useState=(0,react.useState)(""),value=_useState[0],setValue=_useState[1],_useState2=(0,react.useState)(!1),working=_useState2[0],setWorking=_useState2[1],childrenString=(0,utils.FB)(children);value===childrenString||working||(0,animate.j)(0,childrenString.length,{type:"tween",duration:null!=duration?duration:childrenString.length/rate,ease:function ease(latest){return latest},onPlay:function onPlay(){setWorking(!0)},onUpdate:function onUpdate(latest){setValue(childrenString.slice(0,Math.ceil(latest)))},onComplete:function onComplete(){setWorking(!1)}});var compositeClassName=(0,chsk_core_es.gjB)(variant,className),config={x:position[0],y:position[1],rotate:angle,originX:"0px",originY:"0px"};return(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children:(0,jsx_runtime.jsx)(motion_minimal.m.text,{initial:config,animate:config,role:setRole?variant:void 0,style:(0,chsk_core_es.dJS)(style,config),className:compositeClassName,children:value})})};FlowTypography.displayName="FlowTypography";try{FlowTypography.displayName="FlowTypography",FlowTypography.__docgenInfo={description:"",displayName:"FlowTypography",props:{duration:{defaultValue:null,description:"duration of animation (seconds)",name:"duration",required:!1,type:{name:"number"}},rate:{defaultValue:{value:"20"},description:"animation rate (seconds per character)",name:"rate",required:!1,type:{name:"number"}},position:{defaultValue:null,description:"position (absolute coordinates)",name:"position",required:!1,type:{name:"NumericPositionSpec"}},variant:{defaultValue:{value:"flow-typography"},description:"variant",name:"variant",required:!1,type:{name:"string"}},angle:{defaultValue:null,description:"rotation (degrees)",name:"angle",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/typography/FlowTypography.tsx#FlowTypography"]={docgenInfo:FlowTypography.__docgenInfo,name:"FlowTypography",path:"packages/annotation/src/typography/FlowTypography.tsx#FlowTypography"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_SlowText$parameters,_SlowText$parameters2,_Styled$parameters,_Styled$parameters2,BackgroundColorFilter=__webpack_require__("./packages/annotation/src/filters/BackgroundColorFilter.tsx"),FlowTypographyDemo=function FlowTypographyDemo(_ref){var _ref$position=_ref.position,position=void 0===_ref$position?[60,60]:_ref$position,rate=_ref.rate,style=_ref.style,children=_ref.children,ref=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return function toggleMilestone(m){var _ref$current;null==(_ref$current=ref.current)||_ref$current.toggleMilestone(m)}("A")},children:"Toggle milestone"})}),(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{fref:ref,size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},children:[(0,jsx_runtime.jsx)(BackgroundColorFilter.o,{id:"bg",floodColor:"#333333",expansion:[.3,0,.3,0]}),(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsx)(chsk_core_es.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"A",children:(0,jsx_runtime.jsx)(FlowTypography,{position,rate,style,children})})})]})]})};try{FlowTypographyDemo.displayName="FlowTypographyDemo",FlowTypographyDemo.__docgenInfo={description:"",displayName:"FlowTypographyDemo",props:{style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},position:{defaultValue:{value:"[60, 60]"},description:"position (absolute coordinates)",name:"position",required:!1,type:{name:"NumericPositionSpec"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},rate:{defaultValue:null,description:"animation rate (seconds per character)",name:"rate",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/typography/FlowTypographyDemo.tsx#FlowTypographyDemo"]={docgenInfo:FlowTypographyDemo.__docgenInfo,name:"FlowTypographyDemo",path:"packages/annotation/stories/typography/FlowTypographyDemo.tsx#FlowTypographyDemo"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const FlowTypography_stories={title:"Addons/Annotation/Typography/FlowTypography",component:FlowTypography};var Default={render:function render(){return(0,jsx_runtime.jsx)(FlowTypographyDemo,{style:{textAnchor:"start",fontSize:"18px"},children:"This is an example."})},name:"default"},SlowText={render:function render(){return(0,jsx_runtime.jsx)(FlowTypographyDemo,{rate:2,style:{textAnchor:"start",fontSize:"18px"},children:"This is an example."})},name:"slow text"},Styled={render:function render(){return(0,jsx_runtime.jsx)(FlowTypographyDemo,{style:{textAnchor:"start",fontSize:"18px",fill:"#ffffff",filter:"url(#bg)"},children:"This is an example."})},name:"styled"};Default.parameters=_extends({},Default.parameters,{docs:_extends({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <FlowTypographyDemo style={{\n    textAnchor: 'start',\n    fontSize: '18px'\n  }}>\n            This is an example.\n        </FlowTypographyDemo>,\n  name: 'default'\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2=_Default$parameters2.docs)?void 0:_Default$parameters2.source)})}),SlowText.parameters=_extends({},SlowText.parameters,{docs:_extends({},null==(_SlowText$parameters=SlowText.parameters)?void 0:_SlowText$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <FlowTypographyDemo rate={2} style={{\n    textAnchor: 'start',\n    fontSize: '18px'\n  }}>\n            This is an example.\n        </FlowTypographyDemo>,\n  name: 'slow text'\n}"},null==(_SlowText$parameters2=SlowText.parameters)||null==(_SlowText$parameters2=_SlowText$parameters2.docs)?void 0:_SlowText$parameters2.source)})}),Styled.parameters=_extends({},Styled.parameters,{docs:_extends({},null==(_Styled$parameters=Styled.parameters)?void 0:_Styled$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <FlowTypographyDemo style={{\n    textAnchor: 'start',\n    fontSize: '18px',\n    fill: '#ffffff',\n    filter: 'url(#bg)'\n  }}>\n            This is an example.\n        </FlowTypographyDemo>,\n  name: 'styled'\n}"},null==(_Styled$parameters2=Styled.parameters)||null==(_Styled$parameters2=_Styled$parameters2.docs)?void 0:_Styled$parameters2.source)})});var __namedExportsOrder=["Default","SlowText","Styled"]},"./packages/annotation/src/filters/BackgroundColorFilter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>BackgroundColorFilter});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),BackgroundColorFilter=function BackgroundColorFilter(_ref){var id=_ref.id,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?[0,0,0,0]:_ref$expansion,_ref$floodColor=_ref.floodColor,floodColor=void 0===_ref$floodColor?"#000000":_ref$floodColor,_ref$floodOpacity=_ref.floodOpacity,floodOpacity=void 0===_ref$floodOpacity?1:_ref$floodOpacity;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter",{id,x:-expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RLj],y:-expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.GSB],width:1+expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RLj]+expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.pXp],height:1+expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.GSB]+expansion[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.DaS],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood",{floodColor,floodOpacity}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite",{operator:"over",in:"SourceGraphic"})]})};BackgroundColorFilter.displayName="BackgroundColorFilter";try{BackgroundColorFilter.displayName="BackgroundColorFilter",BackgroundColorFilter.__docgenInfo={description:"",displayName:"BackgroundColorFilter",props:{expansion:{defaultValue:{value:"[0, 0, 0, 0]"},description:"",name:"expansion",required:!1,type:{name:"FourSideSizeSpec"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"1"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/BackgroundColorFilter.tsx#BackgroundColorFilter"]={docgenInfo:BackgroundColorFilter.__docgenInfo,name:"BackgroundColorFilter",path:"packages/annotation/src/filters/BackgroundColorFilter.tsx#BackgroundColorFilter"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/src/typography/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FB:()=>getTextContent,PF:()=>splitText,h$:()=>getLetterProfile});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),getLetterProfile=function getLetterProfile(profile,adjustment){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.dGq)((0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.BRZ)(profile),null!=adjustment?adjustment:{})},getTextContent=function getTextContent(node){return node?"string"==typeof node?node:"object"!=typeof node?String(node).toString():(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kJL)(node)?node.map((function(x){return getTextContent(x)})).join(""):String(node.props.children).toString():""},splitText=function splitText(content,widths,lineWidth,separator){var _widths$2,lines=separator?content.split(separator):[content];if(lines.length>1)return lines.map((function(line){return splitText(line,widths,lineWidth)})).flat();var result=[],words=String(lines[0]).replace(/\n/g," ").split(" ").filter((function(word){return word.length>0})),wordLengths=words.map((function(word){return function wordLength(word,widths){var _widths$,fallback=null!=(_widths$=widths[" "])?_widths$:0;return word.split("").reduce((function(total,letter){var _widths$letter;return total+(null!=(_widths$letter=widths[letter])?_widths$letter:fallback)}),0)}(word,widths)})),spaceLength=null!=(_widths$2=widths[" "])?_widths$2:0,line="",lineLength=0;return words.forEach((function(word,index){var wordLength=Number(wordLengths[index]);lineLength+spaceLength+wordLength<lineWidth?(lineLength+=(line.length>0?spaceLength:0)+wordLength,line+=(line.length>0?" ":"")+word):(result.push(line),line=word,lineLength=wordLength)})),result.push(line),result.filter((function(word){return word.length>0}))}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var frameloop_frame=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/frame.mjs");var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");var errors=__webpack_require__("./node_modules/framer-motion/dist/es/utils/errors.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{(0,errors.k)(!exitBeforeEnter,"Replace exitBeforeEnter with mode='wait'");const forceRender=(0,react.useContext)(LayoutGroupContext.p).forceRender||function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop_frame.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}()[0],isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exitingChildren=(0,react.useRef)(new Map).current,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),function useUnmountEffect(callback){return(0,react.useEffect)((()=>()=>callback()),[])}((()=>{isInitialRender.current=!0,allChildren.clear(),exitingChildren.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1!==targetKeys.indexOf(key)||exitingChildren.has(key)||exitingChildren.set(key,void 0)}return"wait"===mode&&exitingChildren.size&&(childrenToRender=[]),exitingChildren.forEach(((component,key)=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);let exitingComponent=component;if(!exitingComponent){const onExit=()=>{allChildren.delete(key),exitingChildren.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exitingChildren.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}};exitingComponent=react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:onExit,custom,presenceAffectsLayout,mode},child),exitingChildren.set(key,exitingComponent)}childrenToRender.splice(insertionIndex,0,exitingComponent)})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exitingChildren.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),react.createElement(react.Fragment,null,exitingChildren.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);