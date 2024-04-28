"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[6830,4799],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/tooltips/TooltipTitle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Title:()=>Title,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Title$parameters,_Title$parameters2,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/tooltips/TooltipTitle.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/stories/components/tooltips/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Tooltips/TooltipTitle",component:_src__WEBPACK_IMPORTED_MODULE_0__.C};var Title={name:"tooltip title",args:{position:[0,12],size:[100,28],children:"Tooltip title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.fe]};Title.parameters=_extends({},Title.parameters,{docs:_extends({},null==(_Title$parameters=Title.parameters)?void 0:_Title$parameters.docs,{source:_extends({originalSource:"{\n  name: 'tooltip title',\n  args: {\n    position: [0, 12],\n    size: [100, 28],\n    children: 'Tooltip title'\n  },\n  decorators: [ChartWithDetectorWithTooltipDecorator]\n}"},null==(_Title$parameters2=Title.parameters)||null==(_Title$parameters2=_Title$parameters2.docs)?void 0:_Title$parameters2.source)})});var __namedExportsOrder=["Title"]},"./packages/core/src/shapes/Circle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Circle});var framer_motion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/themes/utils.ts"),_general__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","initial","animate","exit","cx","cy","r","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Circle=function Circle(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,initial=_ref.initial,animate=_ref.animate,exit=_ref.exit,cx=_ref.cx,cy=_ref.cy,r=_ref.r,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),config={cx,cy,r};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.circle,_extends({role:setRole&&"default"!==variant?variant:void 0,initial:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,initial),animate:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,animate),exit:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,exit),className:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.gj)(variant,className)},props))};Circle.displayName="Circle";try{Circle.displayName="Circle",Circle.__docgenInfo={description:"",displayName:"Circle",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/shapes/Circle.tsx#Circle"]={docgenInfo:Circle.__docgenInfo,name:"Circle",path:"packages/core/src/shapes/Circle.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/tooltips/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mh:()=>ChartForDetectorTooltipDecorator,a5:()=>ChartForShapesTooltipDecorator,fe:()=>ChartWithDetectorWithTooltipDecorator});var Chart=__webpack_require__("./packages/core/src/charts/Chart.tsx"),View=__webpack_require__("./packages/core/src/views/View.tsx"),Surface=__webpack_require__("./packages/core/src/views/Surface.tsx"),contexts=__webpack_require__("./packages/core/src/tooltips/contexts.tsx"),Tooltip=__webpack_require__("./packages/core/src/tooltips/Tooltip.tsx"),decorators=__webpack_require__("./packages/core/stories/components/decorators.tsx"),general_contexts=__webpack_require__("./packages/core/src/general/contexts.tsx"),constants=__webpack_require__("./packages/core/src/general/constants.ts"),context=__webpack_require__("./packages/core/src/scales/context.tsx"),Circle=__webpack_require__("./packages/core/src/shapes/Circle.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DetectorWithTooltip=function DetectorWithTooltip(){var setTooltipData=(0,contexts.lL)().setData,_useDimensions=(0,general_contexts.Bs)(),size=_useDimensions.size,ref=_useDimensions.ref;return(0,jsx_runtime.jsx)("rect",{x:0,y:0,width:size[constants.X],height:size[constants.Y],onMouseMove:function handleMouseMove(event){var _ref$current,clientRect=null==ref||null==(_ref$current=ref.current)?void 0:_ref$current.getBoundingClientRect();if(void 0!==clientRect){var x=Math.round(event.clientX-(null==clientRect?void 0:clientRect.x)),y=Math.round(event.clientY-(null==clientRect?void 0:clientRect.y));setTooltipData({x,y})}},onMouseLeave:function handleMouseLeave(){setTooltipData({})},style:{opacity:0}})};DetectorWithTooltip.displayName="DetectorWithTooltip";var ShapesWithTooltip=function ShapesWithTooltip(){var setTooltipData=(0,contexts.lL)().setData,colorScale=(0,context.kE)().scales.color,ref=(0,general_contexts.Bs)().ref,keys=["alpha","beta","gamma"],handleMouseMove=function handleMouseMove(event,indexes){var _ref$current2,clientRect=null==ref||null==(_ref$current2=ref.current)?void 0:_ref$current2.getBoundingClientRect();if(void 0!==clientRect){var x=Math.round(event.clientX-(null==clientRect?void 0:clientRect.x)),y=Math.round(event.clientY-(null==clientRect?void 0:clientRect.y));setTooltipData({x,y,data:indexes.map((function(i){return{id:"X",key:keys[i],label:keys[i]}}))})}},handleMouseLeave=function handleMouseLeave(){};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Circle.C,{cx:80,cy:50,r:25,style:{fill:colorScale(0)},onMouseMove:function onMouseMove(event){return handleMouseMove(event,[0])},onMouseLeave:handleMouseLeave}),(0,jsx_runtime.jsx)(Circle.C,{cx:80,cy:110,r:25,style:{fill:colorScale(1)},onMouseMove:function onMouseMove(event){return handleMouseMove(event,[1])},onMouseLeave:handleMouseLeave}),(0,jsx_runtime.jsx)(Circle.C,{cx:80,cy:170,r:25,style:{fill:colorScale(2)},onMouseMove:function onMouseMove(event){return handleMouseMove(event,[2])},onMouseLeave:handleMouseLeave}),(0,jsx_runtime.jsx)(Circle.C,{cx:200,cy:110,r:25,style:{fill:"#444444"},onMouseMove:function onMouseMove(event){return handleMouseMove(event,[0,1,2])},onMouseLeave:handleMouseLeave})]})},ChartForDetectorTooltipDecorator=function ChartForDetectorTooltipDecorator(Story){return(0,jsx_runtime.jsx)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,jsx_runtime.jsxs)(View.G,{data:decorators.ke,children:[(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"},"surface"),(0,jsx_runtime.jsxs)(contexts.pn,{children:[(0,jsx_runtime.jsx)(DetectorWithTooltip,{},"detector"),Story()]},"provider")]})})};ChartForDetectorTooltipDecorator.displayName="ChartForDetectorTooltipDecorator";var ChartForShapesTooltipDecorator=function ChartForShapesTooltipDecorator(Story){return(0,jsx_runtime.jsx)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,jsx_runtime.jsxs)(View.G,{data:decorators.ke,children:[(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"},"surface"),(0,jsx_runtime.jsxs)(contexts.pn,{children:[(0,jsx_runtime.jsx)(ShapesWithTooltip,{},"shapes"),Story()]},"provider")]})})};ChartForShapesTooltipDecorator.displayName="ChartForShapesTooltipDecorator";var ChartWithDetectorWithTooltipDecorator=function ChartWithDetectorWithTooltipDecorator(Story){return(0,jsx_runtime.jsx)(Chart.k,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,jsx_runtime.jsxs)(View.G,{data:decorators.ke,children:[(0,jsx_runtime.jsx)(Surface.T,{variant:"inner"},"surface"),(0,jsx_runtime.jsxs)(contexts.pn,{children:[(0,jsx_runtime.jsx)(DetectorWithTooltip,{},"detector"),(0,jsx_runtime.jsx)(Tooltip.u,{size:[100,48],style:{strokeWidth:.5,stroke:"#222222",fill:"#ffffff"},children:Story()})]},"provider")]})})};ChartWithDetectorWithTooltipDecorator.displayName="ChartWithDetectorWithTooltipDecorator";try{ChartForDetectorTooltipDecorator.displayName="ChartForDetectorTooltipDecorator",ChartForDetectorTooltipDecorator.__docgenInfo={description:"",displayName:"ChartForDetectorTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/tooltips/decorators.tsx#ChartForDetectorTooltipDecorator"]={docgenInfo:ChartForDetectorTooltipDecorator.__docgenInfo,name:"ChartForDetectorTooltipDecorator",path:"packages/core/stories/components/tooltips/decorators.tsx#ChartForDetectorTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForShapesTooltipDecorator.displayName="ChartForShapesTooltipDecorator",ChartForShapesTooltipDecorator.__docgenInfo={description:"",displayName:"ChartForShapesTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/tooltips/decorators.tsx#ChartForShapesTooltipDecorator"]={docgenInfo:ChartForShapesTooltipDecorator.__docgenInfo,name:"ChartForShapesTooltipDecorator",path:"packages/core/stories/components/tooltips/decorators.tsx#ChartForShapesTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithDetectorWithTooltipDecorator.displayName="ChartWithDetectorWithTooltipDecorator",ChartWithDetectorWithTooltipDecorator.__docgenInfo={description:"",displayName:"ChartWithDetectorWithTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/tooltips/decorators.tsx#ChartWithDetectorWithTooltipDecorator"]={docgenInfo:ChartWithDetectorWithTooltipDecorator.__docgenInfo,name:"ChartWithDetectorWithTooltipDecorator",path:"packages/core/stories/components/tooltips/decorators.tsx#ChartWithDetectorWithTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/tooltips/TooltipTitle.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_TooltipTitle_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/tooltips/TooltipTitle.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"tooltiptitle",children:"TooltipTitle"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_TooltipTitle_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"TooltipTitle"})," draws a text component intended as a tooltip title."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_TooltipTitle_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"position",children:"Position"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Positioning of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"TooltipTitle"})," text works in the same way as for ordinary ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Typography"})," components,\nbut the coordinates are measured from the top-left corner or the tooltip container."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_TooltipTitle_stories__WEBPACK_IMPORTED_MODULE_4__.Title})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);