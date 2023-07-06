"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9052],{"./packages/core/stories/components/typography/Counter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomFormat:()=>CustomFormat,CustomFormatTspan:()=>CustomFormatTspan,Position:()=>Position,Speed:()=>Speed,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Counter_stories});var animate=__webpack_require__("./node_modules/framer-motion/dist/es/animation/animate.mjs"),react=__webpack_require__("./node_modules/react/index.js"),math=__webpack_require__("./packages/core/src/general/math.ts"),Label=__webpack_require__("./packages/core/src/typography/Label.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","nDecimalPlaces","format","component","valueTransition","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var CounterContent=function CounterContent(_ref){var valueTransition=_ref.valueTransition,_ref$nDecimalPlaces=_ref.nDecimalPlaces,nDecimalPlaces=void 0===_ref$nDecimalPlaces?0:_ref$nDecimalPlaces,_ref$format=_ref.format,format=void 0===_ref$format?function(v){return String(v)}:_ref$format,children=_ref.children,_useState=(0,react.useState)((0,math.DJ)(Number(children),nDecimalPlaces)),value=_useState[0],setValue=_useState[1],_useState2=(0,react.useState)(!1),working=_useState2[0],setWorking=_useState2[1];return value===Number(children)||working||(0,animate.j)(value,Number(children),_extends({},valueTransition,{onPlay:function onPlay(){setWorking(!0)},onUpdate:function onUpdate(latest){setValue((0,math.DJ)(latest,nDecimalPlaces))},onComplete:function onComplete(){setWorking(!1)}})),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:format(value)})},Counter=function Counter(_ref2){var _ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?"counter":_ref2$variant,nDecimalPlaces=_ref2.nDecimalPlaces,format=_ref2.format,_ref2$component=_ref2.component,component=void 0===_ref2$component?Label._:_ref2$component,valueTransition=_ref2.valueTransition,children=_ref2.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref2,_excluded),content=(0,jsx_runtime.jsx)(CounterContent,{valueTransition,nDecimalPlaces,format,children});return(0,react.createElement)(component,_extends({variant},props),content)};try{Counter.displayName="Counter",Counter.__docgenInfo={description:"",displayName:"Counter",props:{nDecimalPlaces:{defaultValue:{value:"0"},description:"number of decimal places",name:"nDecimalPlaces",required:!1,type:{name:"number"}},format:{defaultValue:{value:"(v: number) => String(v)"},description:"format",name:"format",required:!1,type:{name:"((v: number) => ReactNode)"}},component:{defaultValue:{value:"({\n    position = zeroPosition,\n    variant = 'label',\n    initial,\n    animate,\n    angle,\n    size = [20, 20],\n    padding = zeroPadding,\n    align = centerAlign,\n    anchor = centerAlign,\n    offset = zeroPosition,\n    style,\n    className,\n    setRole = true,\n    children,\n    ...props\n}: LabelProps) => {\n    if (children === undefined || children === '') return null\n    const corner = getAnchoredOrigin(position, size, anchor)\n    const [x, y] = getAlignPosition(corner, size, align, padding, offset)\n    const compositeClassName = getClassName(variant, className)\n    const config = { x, y, rotate: angle, originX: '0px', originY: '0px' }\n    return (\n        <m.text\n            role={setRole ? variant : undefined}\n            initial={mergeTargets(config, initial)}\n            animate={mergeTargets(config, animate)}\n            style={ssrCompatible(style, config)}\n            className={compositeClassName}\n            {...props}\n        >\n            {children}\n        </m.text>\n    )\n}"},description:"component to replace default text",name:"component",required:!1,type:{name:"FC<LabelProps>"}},valueTransition:{defaultValue:null,description:"transition for animation of counter value",name:"valueTransition",required:!1,type:{name:"TransitionSpec"}},position:{defaultValue:null,description:"position (absolute coordinates)\nposition",name:"position",required:!1,type:{name:"NumericPositionSpec"}},variant:{defaultValue:{value:"counter"},description:"variant",name:"variant",required:!1,type:{name:"string"}},angle:{defaultValue:null,description:"rotation (degrees)",name:"angle",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial transition state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target transition state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},size:{defaultValue:null,description:"size of bounding container",name:"size",required:!1,type:{name:"SizeSpec"}},padding:{defaultValue:null,description:"space between container and label",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},anchor:{defaultValue:null,description:"position of anchor point relative to box size",name:"anchor",required:!1,type:{name:"AlignSpec"}},align:{defaultValue:null,description:"alignment of content within the bounding container",name:"align",required:!1,type:{name:"AlignSpec"}},offset:{defaultValue:null,description:"position offset added after anchoring and alignment",name:"offset",required:!1,type:{name:"NumericPositionSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/typography/Counter.tsx#Counter"]={docgenInfo:Counter.__docgenInfo,name:"Counter",path:"packages/core/src/typography/Counter.tsx#Counter"})}catch(__react_docgen_typescript_loader_error){}var _Position$parameters,_Position$parameters2,_Position$parameters3,_CustomFormat$paramet,_CustomFormat$paramet2,_CustomFormat$paramet3,_CustomFormatTspan$pa,_CustomFormatTspan$pa2,_CustomFormatTspan$pa3,_Speed$parameters,_Speed$parameters2,_Speed$parameters2$do,Chart=__webpack_require__("./packages/core/src/charts/Chart.tsx"),Surface=__webpack_require__("./packages/core/src/views/Surface.tsx"),View=__webpack_require__("./packages/core/src/views/View.tsx"),randomUniformValue=function randomUniformValue(min,max){return min+Math.random()*(max-min)},CounterController=function CounterController(_ref){var _ref$position=_ref.position,position=void 0===_ref$position?[0,0]:_ref$position,_ref$nDecimalPlaces=_ref.nDecimalPlaces,nDecimalPlaces=void 0===_ref$nDecimalPlaces?0:_ref$nDecimalPlaces,component=_ref.component,_ref$format=_ref.format,format=void 0===_ref$format?function(v){return String(v)}:_ref$format,valueTransition=_ref.valueTransition,_useState=(0,react.useState)(randomUniformValue(0,100)),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return function updateValue(){setValue(randomUniformValue(0,100))}()},children:"Update value"})}),(0,jsx_runtime.jsxs)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},children:[(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"}),(0,jsx_runtime.jsx)(View.G,{children:(0,jsx_runtime.jsx)(Counter,{position,format,style:{fontSize:32},nDecimalPlaces,component,valueTransition,children:value})})]})]})};try{CounterController.displayName="CounterController",CounterController.__docgenInfo={description:"",displayName:"CounterController",props:{component:{defaultValue:null,description:"component to replace default text",name:"component",required:!1,type:{name:"FC<LabelProps>"}},position:{defaultValue:{value:"[0, 0]"},description:"position (absolute coordinates)\nposition",name:"position",required:!1,type:{name:"NumericPositionSpec"}},format:{defaultValue:{value:"(v: number) => String(v)"},description:"format",name:"format",required:!1,type:{name:"((v: number) => ReactNode)"}},nDecimalPlaces:{defaultValue:{value:"0"},description:"number of decimal places",name:"nDecimalPlaces",required:!1,type:{name:"number"}},valueTransition:{defaultValue:null,description:"transition for animation of counter value",name:"valueTransition",required:!1,type:{name:"TransitionSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/typography/CounterController.tsx#CounterController"]={docgenInfo:CounterController.__docgenInfo,name:"CounterController",path:"packages/core/stories/components/typography/CounterController.tsx#CounterController"})}catch(__react_docgen_typescript_loader_error){}function Counter_stories_extends(){return Counter_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Counter_stories_extends.apply(this,arguments)}const Counter_stories={title:"Core/Components/Text/Counter",component:Counter};var Position={name:"counter",render:function render(){return(0,jsx_runtime.jsx)(CounterController,{position:[80,40]})}},CustomFormat={name:"custom format",render:function render(){return(0,jsx_runtime.jsx)(CounterController,{position:[80,40],format:function format(v){return String(v)+"%"},nDecimalPlaces:1})}},CustomFormatTspan={name:"custom styling",render:function render(){return(0,jsx_runtime.jsx)(CounterController,{position:[80,40],format:function format(v){return(0,jsx_runtime.jsxs)("tspan",{children:[String(v),(0,jsx_runtime.jsx)("tspan",{style:{fontSize:14,dominantBaseline:"text-before-edge"},children:"%"})]})},nDecimalPlaces:1})}},Speed={name:"speed",render:function render(){return(0,jsx_runtime.jsx)(CounterController,{position:[80,40],valueTransition:{type:"tween",duration:3,delay:0},nDecimalPlaces:1})}};Position.parameters=Counter_stories_extends({},Position.parameters,{docs:Counter_stories_extends({},null==(_Position$parameters=Position.parameters)?void 0:_Position$parameters.docs,{source:Counter_stories_extends({originalSource:"{\n  name: 'counter',\n  render: () => <CounterController position={[80, 40]} />\n}"},null==(_Position$parameters2=Position.parameters)||null==(_Position$parameters3=_Position$parameters2.docs)?void 0:_Position$parameters3.source)})}),CustomFormat.parameters=Counter_stories_extends({},CustomFormat.parameters,{docs:Counter_stories_extends({},null==(_CustomFormat$paramet=CustomFormat.parameters)?void 0:_CustomFormat$paramet.docs,{source:Counter_stories_extends({originalSource:"{\n  name: 'custom format',\n  render: () => <CounterController position={[80, 40]} format={v => String(v) + '%'} nDecimalPlaces={1} />\n}"},null==(_CustomFormat$paramet2=CustomFormat.parameters)||null==(_CustomFormat$paramet3=_CustomFormat$paramet2.docs)?void 0:_CustomFormat$paramet3.source)})}),CustomFormatTspan.parameters=Counter_stories_extends({},CustomFormatTspan.parameters,{docs:Counter_stories_extends({},null==(_CustomFormatTspan$pa=CustomFormatTspan.parameters)?void 0:_CustomFormatTspan$pa.docs,{source:Counter_stories_extends({originalSource:"{\n  name: 'custom styling',\n  render: () => <CounterController position={[80, 40]} format={v => <tspan>\n                    {String(v)}\n                    <tspan style={{\n      fontSize: 14,\n      dominantBaseline: 'text-before-edge'\n    }}>%</tspan>\n                </tspan>} nDecimalPlaces={1} />\n}"},null==(_CustomFormatTspan$pa2=CustomFormatTspan.parameters)||null==(_CustomFormatTspan$pa3=_CustomFormatTspan$pa2.docs)?void 0:_CustomFormatTspan$pa3.source)})}),Speed.parameters=Counter_stories_extends({},Speed.parameters,{docs:Counter_stories_extends({},null==(_Speed$parameters=Speed.parameters)?void 0:_Speed$parameters.docs,{source:Counter_stories_extends({originalSource:"{\n  name: 'speed',\n  render: () => <CounterController position={[80, 40]} valueTransition={{\n    type: 'tween',\n    duration: 3,\n    delay: 0\n  }} nDecimalPlaces={1} />\n}"},null==(_Speed$parameters2=Speed.parameters)||null==(_Speed$parameters2$do=_Speed$parameters2.docs)?void 0:_Speed$parameters2$do.source)})});var __namedExportsOrder=["Position","CustomFormat","CustomFormatTspan","Speed"]},"./packages/core/src/typography/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_general__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/utils.ts"),_general__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/general/constants.ts"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/themes/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["position","variant","initial","animate","angle","size","padding","align","anchor","offset","style","className","setRole","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Label=function Label(_ref){var _ref$position=_ref.position,position=void 0===_ref$position?_general__WEBPACK_IMPORTED_MODULE_1__.rv:_ref$position,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"label":_ref$variant,initial=_ref.initial,animate=_ref.animate,angle=_ref.angle,_ref$size=_ref.size,size=void 0===_ref$size?[20,20]:_ref$size,_ref$padding=_ref.padding,padding=void 0===_ref$padding?_general__WEBPACK_IMPORTED_MODULE_1__.xe:_ref$padding,_ref$align=_ref.align,align=void 0===_ref$align?_general__WEBPACK_IMPORTED_MODULE_1__.WF:_ref$align,_ref$anchor=_ref.anchor,anchor=void 0===_ref$anchor?_general__WEBPACK_IMPORTED_MODULE_1__.WF:_ref$anchor,_ref$offset=_ref.offset,offset=void 0===_ref$offset?_general__WEBPACK_IMPORTED_MODULE_1__.rv:_ref$offset,style=_ref.style,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);if(void 0===children||""===children)return null;var corner=(0,_general__WEBPACK_IMPORTED_MODULE_2__.ji)(position,size,anchor),_getAlignPosition=(0,_general__WEBPACK_IMPORTED_MODULE_2__.ue)(corner,size,align,padding,offset),x=_getAlignPosition[0],y=_getAlignPosition[1],compositeClassName=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.gj)(variant,className),config={x,y,rotate:angle,originX:"0px",originY:"0px"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.text,_extends({role:setRole?variant:void 0,initial:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,initial),animate:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,animate),style:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.dJ)(style,config),className:compositeClassName},props,{children}))};Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{position:{defaultValue:{value:"[0, 0]"},description:"position (absolute coordinates)\nposition",name:"position",required:!1,type:{name:"NumericPositionSpec"}},variant:{defaultValue:{value:"label"},description:"variant",name:"variant",required:!1,type:{name:"string"}},angle:{defaultValue:null,description:"rotation (degrees)",name:"angle",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial transition state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target transition state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},size:{defaultValue:{value:"[20, 20]"},description:"size of bounding container",name:"size",required:!1,type:{name:"SizeSpec"}},padding:{defaultValue:{value:"[0, 0, 0, 0]"},description:"space between container and label",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},anchor:{defaultValue:{value:"[0.5, 0.5]"},description:"position of anchor point relative to box size",name:"anchor",required:!1,type:{name:"AlignSpec"}},align:{defaultValue:{value:"[0.5, 0.5]"},description:"alignment of content within the bounding container",name:"align",required:!1,type:{name:"AlignSpec"}},offset:{defaultValue:{value:"[0, 0]"},description:"position offset added after anchoring and alignment",name:"offset",required:!1,type:{name:"NumericPositionSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/typography/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"packages/core/src/typography/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}}}]);