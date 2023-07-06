"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3328,9737],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/tooltips/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnchoredMiddleLeft:()=>AnchoredMiddleLeft,AnchoredTopRight:()=>AnchoredTopRight,CustomStyle:()=>CustomStyle,LargeItemPadding:()=>LargeItemPadding,LargeOverhang:()=>LargeOverhang,OnlyTitle:()=>OnlyTitle,OverhangShiftX:()=>OverhangShiftX,OverhangShiftY:()=>OverhangShiftY,Position:()=>Position,SmallItemPadding:()=>SmallItemPadding,SmallOverhang:()=>SmallOverhang,Title:()=>Title,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Position$parameters,_Position$parameters2,_Position$parameters3,_AnchoredMiddleLeft$p,_AnchoredMiddleLeft$p2,_AnchoredMiddleLeft$p3,_AnchoredTopRight$par,_AnchoredTopRight$par2,_AnchoredTopRight$par3,_LargeOverhang$parame,_LargeOverhang$parame2,_LargeOverhang$parame3,_SmallOverhang$parame,_SmallOverhang$parame2,_SmallOverhang$parame3,_OverhangShiftX$param,_OverhangShiftX$param2,_OverhangShiftX$param3,_OverhangShiftY$param,_OverhangShiftY$param2,_OverhangShiftY$param3,_SmallItemPadding$par,_SmallItemPadding$par2,_SmallItemPadding$par3,_LargeItemPadding$par,_LargeItemPadding$par2,_LargeItemPadding$par3,_Title$parameters,_Title$parameters2,_Title$parameters2$do,_OnlyTitle$parameters,_OnlyTitle$parameters2,_OnlyTitle$parameters3,_CustomStyle$paramete,_CustomStyle$paramete2,_CustomStyle$paramete3,_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/tooltips/Tooltip.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/views/Surface.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/shapes/Circle.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/stories/components/tooltips/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Tooltips/Tooltip",component:_src__WEBPACK_IMPORTED_MODULE_1__.u};var Position={name:"position",args:{offset:[0,-10],size:[80,40],anchor:[.5,1],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},AnchoredMiddleLeft={name:"anchored middle-left",args:{offset:[0,0],size:[80,40],anchor:[0,.5],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},AnchoredTopRight={name:"anchored top-right",args:{offset:[0,0],size:[80,120],anchor:[1,0],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},LargeOverhang={name:"large overhang",args:{offset:[0,0],size:[80,80],anchor:[0,1],maxOverhang:[60,60,60,60],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},SmallOverhang={name:"small overhang",args:{offset:[0,0],size:[80,80],anchor:[0,1],maxOverhang:[0,0,0,0],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},OverhangShiftX={name:"overhang shift",args:{offset:[0,0],size:[160,40],anchor:[.5,1],maxOverhang:[20,20,20,20],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},OverhangShiftY={name:"overhang shift",args:{offset:[0,0],size:[40,120],anchor:[1,.5],maxOverhang:[20,20,20,20],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{style:{fill:"#aabbee"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.mh]},SmallItemPadding={name:"small item padding",args:{offset:[10,0],anchor:[0,.5],itemSize:[100,20],itemPadding:[2,2,2,2]},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.a5]},LargeItemPadding={name:"large item padding",args:{offset:[10,0],anchor:[0,.5],itemSize:[100,28],itemPadding:[6,6,6,6]},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.a5]},Title={name:"title",args:{offset:[10,0],anchor:[0,.5],itemPadding:[4,6,4,6],title:"Tooltip title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.a5]},OnlyTitle={name:"only title",args:{offset:[10,0],anchor:[0,.5],itemSize:[100,20],itemPadding:[2,0,0,6],title:"Tooltip title",labelFormat:null},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.a5]},CustomStyle={name:"custom style",args:{offset:[10,0],anchor:[0,.5],itemSize:[100,28],itemPadding:[6,6,6,6],symbol:_src__WEBPACK_IMPORTED_MODULE_4__.C,rx:5,ry:5,style:{fill:"#fff8f8",strokeWidth:1,stroke:"#000000",filter:"drop-shadow(3px 5px 5px #22222299)"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.a5]};Position.parameters=_extends({},Position.parameters,{docs:_extends({},null==(_Position$parameters=Position.parameters)?void 0:_Position$parameters.docs,{source:_extends({originalSource:"{\n  name: 'position',\n  args: {\n    offset: [0, -10],\n    size: [80, 40],\n    anchor: [0.5, 1],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}"},null==(_Position$parameters2=Position.parameters)||null==(_Position$parameters3=_Position$parameters2.docs)?void 0:_Position$parameters3.source)})}),AnchoredMiddleLeft.parameters=_extends({},AnchoredMiddleLeft.parameters,{docs:_extends({},null==(_AnchoredMiddleLeft$p=AnchoredMiddleLeft.parameters)?void 0:_AnchoredMiddleLeft$p.docs,{source:_extends({originalSource:"{\n  name: 'anchored middle-left',\n  args: {\n    offset: [0, 0],\n    size: [80, 40],\n    anchor: [0, 0.5],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}"},null==(_AnchoredMiddleLeft$p2=AnchoredMiddleLeft.parameters)||null==(_AnchoredMiddleLeft$p3=_AnchoredMiddleLeft$p2.docs)?void 0:_AnchoredMiddleLeft$p3.source)})}),AnchoredTopRight.parameters=_extends({},AnchoredTopRight.parameters,{docs:_extends({},null==(_AnchoredTopRight$par=AnchoredTopRight.parameters)?void 0:_AnchoredTopRight$par.docs,{source:_extends({originalSource:"{\n  name: 'anchored top-right',\n  args: {\n    offset: [0, 0],\n    size: [80, 120],\n    anchor: [1, 0],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}"},null==(_AnchoredTopRight$par2=AnchoredTopRight.parameters)||null==(_AnchoredTopRight$par3=_AnchoredTopRight$par2.docs)?void 0:_AnchoredTopRight$par3.source)})}),LargeOverhang.parameters=_extends({},LargeOverhang.parameters,{docs:_extends({},null==(_LargeOverhang$parame=LargeOverhang.parameters)?void 0:_LargeOverhang$parame.docs,{source:_extends({originalSource:"{\n  name: 'large overhang',\n  args: {\n    offset: [0, 0],\n    size: [80, 80],\n    anchor: [0, 1],\n    maxOverhang: [60, 60, 60, 60],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}"},null==(_LargeOverhang$parame2=LargeOverhang.parameters)||null==(_LargeOverhang$parame3=_LargeOverhang$parame2.docs)?void 0:_LargeOverhang$parame3.source)})}),SmallOverhang.parameters=_extends({},SmallOverhang.parameters,{docs:_extends({},null==(_SmallOverhang$parame=SmallOverhang.parameters)?void 0:_SmallOverhang$parame.docs,{source:_extends({originalSource:"{\n  name: 'small overhang',\n  args: {\n    offset: [0, 0],\n    size: [80, 80],\n    anchor: [0, 1],\n    maxOverhang: [0, 0, 0, 0],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}"},null==(_SmallOverhang$parame2=SmallOverhang.parameters)||null==(_SmallOverhang$parame3=_SmallOverhang$parame2.docs)?void 0:_SmallOverhang$parame3.source)})}),OverhangShiftX.parameters=_extends({},OverhangShiftX.parameters,{docs:_extends({},null==(_OverhangShiftX$param=OverhangShiftX.parameters)?void 0:_OverhangShiftX$param.docs,{source:_extends({originalSource:"{\n  name: 'overhang shift',\n  args: {\n    offset: [0, 0],\n    size: [160, 40],\n    anchor: [0.5, 1],\n    maxOverhang: [20, 20, 20, 20],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}"},null==(_OverhangShiftX$param2=OverhangShiftX.parameters)||null==(_OverhangShiftX$param3=_OverhangShiftX$param2.docs)?void 0:_OverhangShiftX$param3.source)})}),OverhangShiftY.parameters=_extends({},OverhangShiftY.parameters,{docs:_extends({},null==(_OverhangShiftY$param=OverhangShiftY.parameters)?void 0:_OverhangShiftY$param.docs,{source:_extends({originalSource:"{\n  name: 'overhang shift',\n  args: {\n    offset: [0, 0],\n    size: [40, 120],\n    anchor: [1, 0.5],\n    maxOverhang: [20, 20, 20, 20],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}"},null==(_OverhangShiftY$param2=OverhangShiftY.parameters)||null==(_OverhangShiftY$param3=_OverhangShiftY$param2.docs)?void 0:_OverhangShiftY$param3.source)})}),SmallItemPadding.parameters=_extends({},SmallItemPadding.parameters,{docs:_extends({},null==(_SmallItemPadding$par=SmallItemPadding.parameters)?void 0:_SmallItemPadding$par.docs,{source:_extends({originalSource:"{\n  name: 'small item padding',\n  args: {\n    offset: [10, 0],\n    anchor: [0, 0.5],\n    itemSize: [100, 20],\n    itemPadding: [2, 2, 2, 2]\n  },\n  decorators: [ChartForShapesTooltipDecorator]\n}"},null==(_SmallItemPadding$par2=SmallItemPadding.parameters)||null==(_SmallItemPadding$par3=_SmallItemPadding$par2.docs)?void 0:_SmallItemPadding$par3.source)})}),LargeItemPadding.parameters=_extends({},LargeItemPadding.parameters,{docs:_extends({},null==(_LargeItemPadding$par=LargeItemPadding.parameters)?void 0:_LargeItemPadding$par.docs,{source:_extends({originalSource:"{\n  name: 'large item padding',\n  args: {\n    offset: [10, 0],\n    anchor: [0, 0.5],\n    itemSize: [100, 28],\n    itemPadding: [6, 6, 6, 6]\n  },\n  decorators: [ChartForShapesTooltipDecorator]\n}"},null==(_LargeItemPadding$par2=LargeItemPadding.parameters)||null==(_LargeItemPadding$par3=_LargeItemPadding$par2.docs)?void 0:_LargeItemPadding$par3.source)})}),Title.parameters=_extends({},Title.parameters,{docs:_extends({},null==(_Title$parameters=Title.parameters)?void 0:_Title$parameters.docs,{source:_extends({originalSource:"{\n  name: 'title',\n  args: {\n    offset: [10, 0],\n    anchor: [0, 0.5],\n    itemPadding: [4, 6, 4, 6],\n    title: 'Tooltip title'\n  },\n  decorators: [ChartForShapesTooltipDecorator]\n}"},null==(_Title$parameters2=Title.parameters)||null==(_Title$parameters2$do=_Title$parameters2.docs)?void 0:_Title$parameters2$do.source)})}),OnlyTitle.parameters=_extends({},OnlyTitle.parameters,{docs:_extends({},null==(_OnlyTitle$parameters=OnlyTitle.parameters)?void 0:_OnlyTitle$parameters.docs,{source:_extends({originalSource:"{\n  name: 'only title',\n  args: {\n    offset: [10, 0],\n    anchor: [0, 0.5],\n    itemSize: [100, 20],\n    itemPadding: [2, 0, 0, 6],\n    title: 'Tooltip title',\n    labelFormat: null\n  },\n  decorators: [ChartForShapesTooltipDecorator]\n}"},null==(_OnlyTitle$parameters2=OnlyTitle.parameters)||null==(_OnlyTitle$parameters3=_OnlyTitle$parameters2.docs)?void 0:_OnlyTitle$parameters3.source)})}),CustomStyle.parameters=_extends({},CustomStyle.parameters,{docs:_extends({},null==(_CustomStyle$paramete=CustomStyle.parameters)?void 0:_CustomStyle$paramete.docs,{source:_extends({originalSource:"{\n  name: 'custom style',\n  args: {\n    offset: [10, 0],\n    anchor: [0, 0.5],\n    itemSize: [100, 28],\n    itemPadding: [6, 6, 6, 6],\n    symbol: Circle,\n    rx: 5,\n    ry: 5,\n    style: {\n      fill: '#fff8f8',\n      strokeWidth: 1,\n      stroke: '#000000',\n      filter: 'drop-shadow(3px 5px 5px #22222299)'\n    }\n  },\n  decorators: [ChartForShapesTooltipDecorator]\n}"},null==(_CustomStyle$paramete2=CustomStyle.parameters)||null==(_CustomStyle$paramete3=_CustomStyle$paramete2.docs)?void 0:_CustomStyle$paramete3.source)})});var __namedExportsOrder=["Position","AnchoredMiddleLeft","AnchoredTopRight","LargeOverhang","SmallOverhang","OverhangShiftX","OverhangShiftY","SmallItemPadding","LargeItemPadding","Title","OnlyTitle","CustomStyle"]},"./packages/core/src/shapes/Circle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Circle});var framer_motion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/themes/utils.ts"),_general__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","initial","animate","cx","cy","r","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Circle=function Circle(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,initial=_ref.initial,animate=_ref.animate,cx=_ref.cx,cy=_ref.cy,r=_ref.r,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),config={cx,cy,r};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.circle,_extends({role:setRole&&"default"!==variant?variant:void 0,initial:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,initial),animate:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,animate),className:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.gj)(variant,className)},props))};Circle.displayName="Circle";try{Circle.displayName="Circle",Circle.__docgenInfo={description:"",displayName:"Circle",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial transition state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target transition state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/shapes/Circle.tsx#Circle"]={docgenInfo:Circle.__docgenInfo,name:"Circle",path:"packages/core/src/shapes/Circle.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/tooltips/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mh:()=>ChartForDetectorTooltipDecorator,a5:()=>ChartForShapesTooltipDecorator,fe:()=>ChartWithDetectorWithTooltipDecorator});var Chart=__webpack_require__("./packages/core/src/charts/Chart.tsx"),View=__webpack_require__("./packages/core/src/views/View.tsx"),Surface=__webpack_require__("./packages/core/src/views/Surface.tsx"),contexts=__webpack_require__("./packages/core/src/tooltips/contexts.tsx"),Tooltip=__webpack_require__("./packages/core/src/tooltips/Tooltip.tsx"),decorators=__webpack_require__("./packages/core/stories/components/decorators.tsx"),general_contexts=__webpack_require__("./packages/core/src/general/contexts.tsx"),constants=__webpack_require__("./packages/core/src/general/constants.ts"),context=__webpack_require__("./packages/core/src/scales/context.tsx"),Circle=__webpack_require__("./packages/core/src/shapes/Circle.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DetectorWithTooltip=function DetectorWithTooltip(){var setTooltipData=(0,contexts.lL)().setData,_useDimensions=(0,general_contexts.Bs)(),size=_useDimensions.size,ref=_useDimensions.ref;return(0,jsx_runtime.jsx)("rect",{x:0,y:0,width:size[constants.X],height:size[constants.Y],onMouseMove:function handleMouseMove(event){var _ref$current,clientRect=null==ref||null==(_ref$current=ref.current)?void 0:_ref$current.getBoundingClientRect();if(void 0!==clientRect){var x=Math.round(event.clientX-(null==clientRect?void 0:clientRect.x)),y=Math.round(event.clientY-(null==clientRect?void 0:clientRect.y));setTooltipData({x,y})}},onMouseLeave:function handleMouseLeave(){setTooltipData({})},style:{opacity:0}})};DetectorWithTooltip.displayName="DetectorWithTooltip";var ShapesWithTooltip=function ShapesWithTooltip(){var setTooltipData=(0,contexts.lL)().setData,colorScale=(0,context.kE)().scales.color,ref=(0,general_contexts.Bs)().ref,keys=["alpha","beta","gamma"],handleMouseMove=function handleMouseMove(event,indexes){var _ref$current2,clientRect=null==ref||null==(_ref$current2=ref.current)?void 0:_ref$current2.getBoundingClientRect();if(void 0!==clientRect){var x=Math.round(event.clientX-(null==clientRect?void 0:clientRect.x)),y=Math.round(event.clientY-(null==clientRect?void 0:clientRect.y));setTooltipData({x,y,data:indexes.map((function(i){return{id:"X",key:keys[i],label:keys[i]}}))})}},handleMouseLeave=function handleMouseLeave(){};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Circle.C,{cx:80,cy:50,r:25,style:{fill:colorScale(0)},onMouseMove:function onMouseMove(event){return handleMouseMove(event,[0])},onMouseLeave:handleMouseLeave}),(0,jsx_runtime.jsx)(Circle.C,{cx:80,cy:110,r:25,style:{fill:colorScale(1)},onMouseMove:function onMouseMove(event){return handleMouseMove(event,[1])},onMouseLeave:handleMouseLeave}),(0,jsx_runtime.jsx)(Circle.C,{cx:80,cy:170,r:25,style:{fill:colorScale(2)},onMouseMove:function onMouseMove(event){return handleMouseMove(event,[2])},onMouseLeave:handleMouseLeave}),(0,jsx_runtime.jsx)(Circle.C,{cx:200,cy:110,r:25,style:{fill:"#444444"},onMouseMove:function onMouseMove(event){return handleMouseMove(event,[0,1,2])},onMouseLeave:handleMouseLeave})]})},ChartForDetectorTooltipDecorator=function ChartForDetectorTooltipDecorator(Story){return(0,jsx_runtime.jsx)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,jsx_runtime.jsxs)(View.G,{data:decorators.ke,children:[(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"},"surface"),(0,jsx_runtime.jsxs)(contexts.pn,{children:[(0,jsx_runtime.jsx)(DetectorWithTooltip,{},"detector"),Story()]},"provider")]})})};ChartForDetectorTooltipDecorator.displayName="ChartForDetectorTooltipDecorator";var ChartForShapesTooltipDecorator=function ChartForShapesTooltipDecorator(Story){return(0,jsx_runtime.jsx)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,jsx_runtime.jsxs)(View.G,{data:decorators.ke,children:[(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"},"surface"),(0,jsx_runtime.jsxs)(contexts.pn,{children:[(0,jsx_runtime.jsx)(ShapesWithTooltip,{},"shapes"),Story()]},"provider")]})})};ChartForShapesTooltipDecorator.displayName="ChartForShapesTooltipDecorator";var ChartWithDetectorWithTooltipDecorator=function ChartWithDetectorWithTooltipDecorator(Story){return(0,jsx_runtime.jsx)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,jsx_runtime.jsxs)(View.G,{data:decorators.ke,children:[(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"},"surface"),(0,jsx_runtime.jsxs)(contexts.pn,{children:[(0,jsx_runtime.jsx)(DetectorWithTooltip,{},"detector"),(0,jsx_runtime.jsx)(Tooltip.u,{size:[100,48],style:{strokeWidth:.5,stroke:"#222222",fill:"#ffffff"},children:Story()})]},"provider")]})})};ChartWithDetectorWithTooltipDecorator.displayName="ChartWithDetectorWithTooltipDecorator";try{ChartForDetectorTooltipDecorator.displayName="ChartForDetectorTooltipDecorator",ChartForDetectorTooltipDecorator.__docgenInfo={description:"",displayName:"ChartForDetectorTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/tooltips/decorators.tsx#ChartForDetectorTooltipDecorator"]={docgenInfo:ChartForDetectorTooltipDecorator.__docgenInfo,name:"ChartForDetectorTooltipDecorator",path:"packages/core/stories/components/tooltips/decorators.tsx#ChartForDetectorTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForShapesTooltipDecorator.displayName="ChartForShapesTooltipDecorator",ChartForShapesTooltipDecorator.__docgenInfo={description:"",displayName:"ChartForShapesTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/tooltips/decorators.tsx#ChartForShapesTooltipDecorator"]={docgenInfo:ChartForShapesTooltipDecorator.__docgenInfo,name:"ChartForShapesTooltipDecorator",path:"packages/core/stories/components/tooltips/decorators.tsx#ChartForShapesTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithDetectorWithTooltipDecorator.displayName="ChartWithDetectorWithTooltipDecorator",ChartWithDetectorWithTooltipDecorator.__docgenInfo={description:"",displayName:"ChartWithDetectorWithTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/tooltips/decorators.tsx#ChartWithDetectorWithTooltipDecorator"]={docgenInfo:ChartWithDetectorWithTooltipDecorator.__docgenInfo,name:"ChartWithDetectorWithTooltipDecorator",path:"packages/core/stories/components/tooltips/decorators.tsx#ChartWithDetectorWithTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/tooltips/Tooltip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/tooltips/Tooltip.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tooltip",children:"Tooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," is a container component for tooltips."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," is meant to display information intermittently as the mouse pointer hovers over chart elements.\nIt determines its location and information content using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useTooltip"})," hook.\nAs such, it should be used alongside components that sets data for the tooltip context."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The examples in this documentation page use custom elements that set tooltip data manually."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"position",children:"Position"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," determines its position from the tooltip context via the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useTooltip"})," hook.\nFurther, the tooltip can be offset with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"offset"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.Position}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"size-and-anchor",children:"Size and anchor"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," requires information about its size and how it should be anchored to the target position.\nThe relevant props are ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"anchor"}),".\nHover on the examples below to display a tooltip anchored at different location relative to the mouse pointer."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.AnchoredMiddleLeft}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.AnchoredTopRight}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overhang",children:"Overhang"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A tooltip created within a view may hover beyond the view boundary, and sometimes, that is acceptable.\nHowever, when the tooltip moves beyond the entire chart boundary, it may become clipped."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To avoid clipping, use prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"maxOverhang"})," to set a margin around the view.\nTooltips that move beyond the overhang will flip direction."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.LargeOverhang}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.SmallOverhang}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"If a tooltip still overhangs even after a flip, then it is shifted.\nIn practice, the shift is most noticeable for tooltips with anchor values are set to 0.5,\nwhich typically center the tooltip horizontally or vertically.\nIn such cases, when a tooltip is created near the edges of a view, flipping may not prevent overhang,\nang shifting overrides the anchoring recipe to avoid overhang."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.OverhangShiftX}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.OverhangShiftY}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"tooltip-content",children:"Tooltip content"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The content of the tooltip consists of a number of distinct pieces.\nThese pieces can be tuned with props such as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"itemSize"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"itemPadding"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The examples below display tooltips that have: compact padding, ample padding, and a title line.\n(Note that the tooltips do not disappear when the mouse moves away.\nIn these examples, this behavior is intentional -\nit facilitates inspection of the tooltip using developer tools ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Ctrl Shift C"}),".)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.SmallItemPadding}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.LargeItemPadding}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.Title}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To create a tooltip with only a title, i.e. without entries with a symbol and label, set prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"labelFormat"})," to null."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.OnlyTitle}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"custom-style",children:"Custom style"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The tooltip can be styled using css."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__.CustomStyle})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);