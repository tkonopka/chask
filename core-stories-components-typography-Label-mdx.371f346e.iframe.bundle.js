"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3890,916],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/typography/Label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlignedMiddleLeft:()=>AlignedMiddleLeft,AlignedMiddleRight:()=>AlignedMiddleRight,AnchoredTopLeft:()=>AnchoredTopLeft,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Label_stories});var Label=__webpack_require__("./packages/core/src/typography/Label.tsx"),decorators=__webpack_require__("./packages/core/stories/components/decorators.tsx"),Chart=__webpack_require__("./packages/core/src/charts/Chart.tsx"),Surface=__webpack_require__("./packages/core/src/views/Surface.tsx"),Circle=__webpack_require__("./packages/core/src/shapes/Circle.tsx"),Rectangle=__webpack_require__("./packages/core/src/shapes/Rectangle.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),labelsTheme={rect:{box:{fillOpacity:0,stroke:"#222222",strokeWidth:1},padding:{fillOpacity:0,stroke:"#777777",strokeWidth:1,strokeDasharray:4}},circle:{default:{fill:"#222222"}}},ChartForLabelDecorator=function ChartForLabelDecorator(Story){return(0,jsx_runtime.jsxs)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},theme:labelsTheme,children:[(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"}),(0,jsx_runtime.jsx)(Circle.C,{cx:160,cy:110,r:3}),(0,jsx_runtime.jsx)(Rectangle.A,{x:160,y:110,width:160,height:50,className:"box",center:!0}),(0,jsx_runtime.jsx)(Rectangle.A,{x:160,y:110,width:130,height:40,className:"padding",center:!0}),Story()]})};ChartForLabelDecorator.displayName="ChartForLabelDecorator";var _Default$parameters,_Default$parameters2,_AlignedMiddleLeft$pa,_AlignedMiddleLeft$pa2,_AlignedMiddleRight$p,_AlignedMiddleRight$p2,_AnchoredTopLeft$para,_AnchoredTopLeft$para2,ChartForAnchoredLabelDecorator=function ChartForAnchoredLabelDecorator(Story){return(0,jsx_runtime.jsxs)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"}),(0,jsx_runtime.jsx)(Circle.C,{cx:160,cy:110,r:3}),(0,jsx_runtime.jsx)(Rectangle.A,{x:160,y:110,width:160,height:50,style:{fillOpacity:0,stroke:"#222222",strokeWidth:1},center:!1}),(0,jsx_runtime.jsx)(Rectangle.A,{x:175,y:115,width:130,height:40,style:{fillOpacity:0,stroke:"#777777",strokeWidth:1,strokeDasharray:4},center:!1}),Story()]})};ChartForAnchoredLabelDecorator.displayName="ChartForAnchoredLabelDecorator";try{ChartForLabelDecorator.displayName="ChartForLabelDecorator",ChartForLabelDecorator.__docgenInfo={description:"",displayName:"ChartForLabelDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/typography/decorators.tsx#ChartForLabelDecorator"]={docgenInfo:ChartForLabelDecorator.__docgenInfo,name:"ChartForLabelDecorator",path:"packages/core/stories/components/typography/decorators.tsx#ChartForLabelDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForAnchoredLabelDecorator.displayName="ChartForAnchoredLabelDecorator",ChartForAnchoredLabelDecorator.__docgenInfo={description:"",displayName:"ChartForAnchoredLabelDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/typography/decorators.tsx#ChartForAnchoredLabelDecorator"]={docgenInfo:ChartForAnchoredLabelDecorator.__docgenInfo,name:"ChartForAnchoredLabelDecorator",path:"packages/core/stories/components/typography/decorators.tsx#ChartForAnchoredLabelDecorator"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Label_stories={title:"Core/Components/Text/Label",component:Label._};var Default={name:"default",args:{position:[0,0],children:"label"},decorators:[decorators.ee]},AlignedMiddleLeft={name:"aligned middle-left",args:{position:[160,110],size:[160,50],padding:[5,15,5,15],align:[0,.5],style:{textAnchor:"start"},children:"abc abc"},decorators:[ChartForLabelDecorator]},AlignedMiddleRight={name:"aligned middle-right",args:{position:[160,110],size:[160,50],padding:[5,15,5,15],align:[1,.5],style:{textAnchor:"end"},children:"abc abc"},decorators:[ChartForLabelDecorator]},AnchoredTopLeft={name:"anchored top-left",args:{position:[160,110],size:[160,50],padding:[5,15,5,15],align:[0,.5],anchor:[0,0],style:{textAnchor:"start"},children:"abc abc"},decorators:[ChartForAnchoredLabelDecorator]};Default.parameters=_extends({},Default.parameters,{docs:_extends({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:_extends({originalSource:"{\n  name: 'default',\n  args: {\n    position: [0, 0],\n    children: 'label'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2=_Default$parameters2.docs)?void 0:_Default$parameters2.source)})}),AlignedMiddleLeft.parameters=_extends({},AlignedMiddleLeft.parameters,{docs:_extends({},null==(_AlignedMiddleLeft$pa=AlignedMiddleLeft.parameters)?void 0:_AlignedMiddleLeft$pa.docs,{source:_extends({originalSource:"{\n  name: 'aligned middle-left',\n  args: {\n    position: [160, 110],\n    size: [160, 50],\n    padding: [5, 15, 5, 15],\n    align: [0, 0.5],\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'abc abc'\n  },\n  decorators: [ChartForLabelDecorator]\n}"},null==(_AlignedMiddleLeft$pa2=AlignedMiddleLeft.parameters)||null==(_AlignedMiddleLeft$pa2=_AlignedMiddleLeft$pa2.docs)?void 0:_AlignedMiddleLeft$pa2.source)})}),AlignedMiddleRight.parameters=_extends({},AlignedMiddleRight.parameters,{docs:_extends({},null==(_AlignedMiddleRight$p=AlignedMiddleRight.parameters)?void 0:_AlignedMiddleRight$p.docs,{source:_extends({originalSource:"{\n  name: 'aligned middle-right',\n  args: {\n    position: [160, 110],\n    size: [160, 50],\n    padding: [5, 15, 5, 15],\n    align: [1, 0.5],\n    style: {\n      textAnchor: 'end'\n    },\n    children: 'abc abc'\n  },\n  decorators: [ChartForLabelDecorator]\n}"},null==(_AlignedMiddleRight$p2=AlignedMiddleRight.parameters)||null==(_AlignedMiddleRight$p2=_AlignedMiddleRight$p2.docs)?void 0:_AlignedMiddleRight$p2.source)})}),AnchoredTopLeft.parameters=_extends({},AnchoredTopLeft.parameters,{docs:_extends({},null==(_AnchoredTopLeft$para=AnchoredTopLeft.parameters)?void 0:_AnchoredTopLeft$para.docs,{source:_extends({originalSource:"{\n  name: 'anchored top-left',\n  args: {\n    position: [160, 110],\n    size: [160, 50],\n    padding: [5, 15, 5, 15],\n    align: [0, 0.5],\n    anchor: [0, 0],\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'abc abc'\n  },\n  decorators: [ChartForAnchoredLabelDecorator]\n}"},null==(_AnchoredTopLeft$para2=AnchoredTopLeft.parameters)||null==(_AnchoredTopLeft$para2=_AnchoredTopLeft$para2.docs)?void 0:_AnchoredTopLeft$para2.source)})});var __namedExportsOrder=["Default","AlignedMiddleLeft","AlignedMiddleRight","AnchoredTopLeft"]},"./packages/core/src/shapes/Circle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Circle});var framer_motion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/themes/utils.ts"),_general__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","initial","animate","exit","cx","cy","r","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Circle=function Circle(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,initial=_ref.initial,animate=_ref.animate,exit=_ref.exit,cx=_ref.cx,cy=_ref.cy,r=_ref.r,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),config={cx,cy,r};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.circle,_extends({role:setRole&&"default"!==variant?variant:void 0,initial:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,initial),animate:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,animate),exit:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,exit),className:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.gj)(variant,className)},props))};Circle.displayName="Circle";try{Circle.displayName="Circle",Circle.__docgenInfo={description:"",displayName:"Circle",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/shapes/Circle.tsx#Circle"]={docgenInfo:Circle.__docgenInfo,name:"Circle",path:"packages/core/src/shapes/Circle.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/src/shapes/Rectangle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Rectangle});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/themes/utils.ts"),_general__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/general/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","initial","animate","exit","x","y","width","height","center","className","setRole","stroke","strokeWidth","fill","fillOpacity","opacity","style"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Rectangle=function Rectangle(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,initial=_ref.initial,animate=_ref.animate,exit=_ref.exit,x=_ref.x,y=_ref.y,width=_ref.width,height=_ref.height,_ref$center=_ref.center,center=void 0!==_ref$center&&_ref$center,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,stroke=_ref.stroke,strokeWidth=_ref.strokeWidth,fill=_ref.fill,fillOpacity=_ref.fillOpacity,opacity=_ref.opacity,style=_ref.style,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);width<0&&(x-=width=Math.abs(width)),height<0&&(y-=height=Math.abs(height));var config=(0,_general__WEBPACK_IMPORTED_MODULE_1__.Bx)({x:center?x-width/2:x,y:center?y-height/2:y,width,height,stroke,strokeWidth,fill,fillOpacity,opacity});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.rect,_extends({role:setRole&&"default"!==variant?variant:void 0,initial:(0,_general__WEBPACK_IMPORTED_MODULE_1__.$d)(config,initial),animate:(0,_general__WEBPACK_IMPORTED_MODULE_1__.$d)(config,animate),exit:(0,_general__WEBPACK_IMPORTED_MODULE_1__.$d)(config,exit),className:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.gj)(variant,className),style:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.dJ)(style,config)},props))};Rectangle.displayName="Rectangle";try{Rectangle.displayName="Rectangle",Rectangle.__docgenInfo={description:"",displayName:"Rectangle",props:{x:{defaultValue:null,description:"x coordinate",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"y coordinate",name:"y",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"width",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"height",name:"height",required:!0,type:{name:"number"}},rx:{defaultValue:null,description:"horizontal corner radius",name:"rx",required:!1,type:{name:"number"}},ry:{defaultValue:null,description:"vertical corner radius",name:"ry",required:!1,type:{name:"number"}},center:{defaultValue:{value:"false"},description:"center the rectangle around (x, y)",name:"center",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/shapes/Rectangle.tsx#Rectangle"]={docgenInfo:Rectangle.__docgenInfo,name:"Rectangle",path:"packages/core/src/shapes/Rectangle.tsx#Rectangle"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/src/typography/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_general__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/utils.ts"),_general__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/general/constants.ts"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/themes/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["position","variant","initial","animate","exit","angle","size","padding","align","anchor","offset","style","className","setRole","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Label=function Label(_ref){var _ref$position=_ref.position,position=void 0===_ref$position?_general__WEBPACK_IMPORTED_MODULE_1__.rv:_ref$position,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"label":_ref$variant,initial=_ref.initial,animate=_ref.animate,exit=_ref.exit,angle=_ref.angle,_ref$size=_ref.size,size=void 0===_ref$size?[20,20]:_ref$size,_ref$padding=_ref.padding,padding=void 0===_ref$padding?_general__WEBPACK_IMPORTED_MODULE_1__.xe:_ref$padding,_ref$align=_ref.align,align=void 0===_ref$align?_general__WEBPACK_IMPORTED_MODULE_1__.WF:_ref$align,_ref$anchor=_ref.anchor,anchor=void 0===_ref$anchor?_general__WEBPACK_IMPORTED_MODULE_1__.WF:_ref$anchor,_ref$offset=_ref.offset,offset=void 0===_ref$offset?_general__WEBPACK_IMPORTED_MODULE_1__.rv:_ref$offset,style=_ref.style,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);if(void 0===children||""===children)return null;var corner=(0,_general__WEBPACK_IMPORTED_MODULE_2__.ji)(position,size,anchor),_getAlignPosition=(0,_general__WEBPACK_IMPORTED_MODULE_2__.ue)(corner,size,align,padding,offset),x=_getAlignPosition[0],y=_getAlignPosition[1],compositeClassName=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.gj)(variant,className),config={x,y,rotate:angle,originX:"0px",originY:"0px"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.text,_extends({role:setRole?variant:void 0,initial:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,initial),animate:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,animate),exit:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,exit),style:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.dJ)(style,config),className:compositeClassName},props,{children}))};Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{position:{defaultValue:{value:"[0, 0]"},description:"position (absolute coordinates)\nposition",name:"position",required:!1,type:{name:"NumericPositionSpec"}},variant:{defaultValue:{value:"label"},description:"variant",name:"variant",required:!1,type:{name:"string"}},angle:{defaultValue:null,description:"rotation (degrees)",name:"angle",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},size:{defaultValue:{value:"[20, 20]"},description:"size of bounding container",name:"size",required:!1,type:{name:"SizeSpec"}},padding:{defaultValue:{value:"[0, 0, 0, 0]"},description:"space between container and label",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},anchor:{defaultValue:{value:"[0.5, 0.5]"},description:"position of anchor point relative to box size",name:"anchor",required:!1,type:{name:"AlignSpec"}},align:{defaultValue:{value:"[0.5, 0.5]"},description:"alignment of content within the bounding container",name:"align",required:!1,type:{name:"AlignSpec"}},offset:{defaultValue:{value:"[0, 0]"},description:"position offset added after anchoring and alignment",name:"offset",required:!1,type:{name:"NumericPositionSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/typography/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"packages/core/src/typography/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/typography/Label.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Label_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/typography/Label.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"label",children:"Label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Label_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Label"}),", similarly to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Typography"}),", places a text element on a chart.\nIt differs from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Typography"})," in how the props determine the localisation of the text element."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Label_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"base-position",children:"Base position"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"})," determines the location of the label anchor point.\nBy default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Label"})," creates text that is centered around the anchor point.\nThus, the result is very similar as that produced by ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Typography"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Label_stories__WEBPACK_IMPORTED_MODULE_4__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"alignment",children:"Alignment"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Label"})," provides props other than ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"})," that tune the position of the text.\nTo understand how the placement is computed, imagine a rectangle centered around ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"}),".\nThe size of the rectangle is determined by prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"}),". The internal padding is set\nwith prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"padding"}),". The text label is then placed within the accessible rectangle,\nand aligned according to prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"align"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["In each of examples below, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"})," is marked with a small circle.\nTwo concentric rectangles enclose the circle.\nThe dimensions of the outer rectangle correspond to prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"}),".\nThe inner rectangle is offset from the outer rectangle according to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"padding"}),".\nFinally, the text element is aligned at a location within the inner rectangle."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["In the first example below, the text is aligned ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"[0, 0.5]"}),", i.e. to left side in the middle of the inner rectangle.\nThe style of the text element uses ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"textAnchor: 'start'"}),".\nIn the second example, prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"align=[1, 0.5]"})," to align the text on the right side of the inner rectangle.\nThe style of that text element uses ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"textAnchor: 'end'"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Label_stories__WEBPACK_IMPORTED_MODULE_4__.AlignedMiddleLeft}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Label_stories__WEBPACK_IMPORTED_MODULE_4__.AlignedMiddleRight}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"anchor",children:"Anchor"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The examples above explain how the position of the text is calculated with the aid of a rectangle centered around ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"}),".\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"anchor"})," changes how that rectangle is positioned relative to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"}),".\nIn the example below, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"anchor"})," is set to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"[0, 0]"})," so that the rectangle's top-left corner matches with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Label_stories__WEBPACK_IMPORTED_MODULE_4__.AnchoredTopLeft})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);