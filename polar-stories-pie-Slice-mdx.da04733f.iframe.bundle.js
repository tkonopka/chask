"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[898,9533],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/polar/stories/pie/Slice.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HalfCircleRadians:()=>HalfCircleRadians,LargeAnglePadding:()=>LargeAnglePadding,QuarterCircleDegrees:()=>QuarterCircleDegrees,RoundedCorners:()=>RoundedCorners,SmallAnglePadding:()=>SmallAnglePadding,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _QuarterCircleDegrees,_QuarterCircleDegrees2,_HalfCircleRadians$pa,_HalfCircleRadians$pa2,_RoundedCorners$param,_RoundedCorners$param2,_SmallAnglePadding$pa,_SmallAnglePadding$pa2,_LargeAnglePadding$pa,_LargeAnglePadding$pa2,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/polar/src/pie/Slice.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/polar/stories/pie/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Polar/Pie/Slice",component:_src__WEBPACK_IMPORTED_MODULE_0__.p};var QuarterCircleDegrees={name:"quarter circle, degrees",args:{innerRadius:40,outerRadius:80,startAngle:0,endAngle:90,angleUnit:"degree"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ez]},HalfCircleRadians={name:"half circle radians",args:{innerRadius:40,outerRadius:80,startAngle:0,endAngle:Math.PI,angleUnit:"radian"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ez]},RoundedCorners={name:"rounded corners",args:{innerRadius:40,outerRadius:80,r:8,startAngle:0,endAngle:1.4*Math.PI},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ez]},SmallAnglePadding={name:"small angle padding",args:{innerRadius:40,outerRadius:80,padAngle:.1,startAngle:-Math.PI/2,endAngle:Math.PI/2},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ez]},LargeAnglePadding={name:"large angle padding",args:{innerRadius:40,outerRadius:80,padAngle:1,startAngle:-Math.PI/2,endAngle:Math.PI/2},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ez]};QuarterCircleDegrees.parameters=_extends({},QuarterCircleDegrees.parameters,{docs:_extends({},null==(_QuarterCircleDegrees=QuarterCircleDegrees.parameters)?void 0:_QuarterCircleDegrees.docs,{source:_extends({originalSource:"{\n  name: 'quarter circle, degrees',\n  args: {\n    innerRadius: 40,\n    outerRadius: 80,\n    startAngle: 0,\n    endAngle: 90,\n    angleUnit: 'degree'\n  },\n  decorators: [ChartPieDecorator]\n}"},null==(_QuarterCircleDegrees2=QuarterCircleDegrees.parameters)||null==(_QuarterCircleDegrees2=_QuarterCircleDegrees2.docs)?void 0:_QuarterCircleDegrees2.source)})}),HalfCircleRadians.parameters=_extends({},HalfCircleRadians.parameters,{docs:_extends({},null==(_HalfCircleRadians$pa=HalfCircleRadians.parameters)?void 0:_HalfCircleRadians$pa.docs,{source:_extends({originalSource:"{\n  name: 'half circle radians',\n  args: {\n    innerRadius: 40,\n    outerRadius: 80,\n    startAngle: 0,\n    endAngle: Math.PI,\n    angleUnit: 'radian'\n  },\n  decorators: [ChartPieDecorator]\n}"},null==(_HalfCircleRadians$pa2=HalfCircleRadians.parameters)||null==(_HalfCircleRadians$pa2=_HalfCircleRadians$pa2.docs)?void 0:_HalfCircleRadians$pa2.source)})}),RoundedCorners.parameters=_extends({},RoundedCorners.parameters,{docs:_extends({},null==(_RoundedCorners$param=RoundedCorners.parameters)?void 0:_RoundedCorners$param.docs,{source:_extends({originalSource:"{\n  name: 'rounded corners',\n  args: {\n    innerRadius: 40,\n    outerRadius: 80,\n    r: 8,\n    startAngle: 0,\n    endAngle: Math.PI * 1.4\n  },\n  decorators: [ChartPieDecorator]\n}"},null==(_RoundedCorners$param2=RoundedCorners.parameters)||null==(_RoundedCorners$param2=_RoundedCorners$param2.docs)?void 0:_RoundedCorners$param2.source)})}),SmallAnglePadding.parameters=_extends({},SmallAnglePadding.parameters,{docs:_extends({},null==(_SmallAnglePadding$pa=SmallAnglePadding.parameters)?void 0:_SmallAnglePadding$pa.docs,{source:_extends({originalSource:"{\n  name: 'small angle padding',\n  args: {\n    innerRadius: 40,\n    outerRadius: 80,\n    padAngle: 0.1,\n    startAngle: -Math.PI / 2,\n    endAngle: Math.PI / 2\n  },\n  decorators: [ChartPieDecorator]\n}"},null==(_SmallAnglePadding$pa2=SmallAnglePadding.parameters)||null==(_SmallAnglePadding$pa2=_SmallAnglePadding$pa2.docs)?void 0:_SmallAnglePadding$pa2.source)})}),LargeAnglePadding.parameters=_extends({},LargeAnglePadding.parameters,{docs:_extends({},null==(_LargeAnglePadding$pa=LargeAnglePadding.parameters)?void 0:_LargeAnglePadding$pa.docs,{source:_extends({originalSource:"{\n  name: 'large angle padding',\n  args: {\n    innerRadius: 40,\n    outerRadius: 80,\n    padAngle: 1,\n    startAngle: -Math.PI / 2,\n    endAngle: Math.PI / 2\n  },\n  decorators: [ChartPieDecorator]\n}"},null==(_LargeAnglePadding$pa2=LargeAnglePadding.parameters)||null==(_LargeAnglePadding$pa2=_LargeAnglePadding$pa2.docs)?void 0:_LargeAnglePadding$pa2.source)})});var __namedExportsOrder=["QuarterCircleDegrees","HalfCircleRadians","RoundedCorners","SmallAnglePadding","LargeAnglePadding"]},"./packages/polar/stories/pie/Slice.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Slice_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/polar/stories/pie/Slice.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"slice",children:"Slice"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Slice_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Slice"})," draws one piece of a pie / doughnut chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Slice"})," components are typically not used as standalone objects, but rather used as a prop to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Slices"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Slice_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"position-and-size",children:"Position and size"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["A slice is defined by two radii (props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"innerRadius"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"outerRadius"}),")\nand two angles (props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"startAngle"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"endAngle"}),").\nThe angles can be specified in degrees or radians, the unit declared in prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"angleUnit"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Slice_stories__WEBPACK_IMPORTED_MODULE_4__.QuarterCircleDegrees}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Slice_stories__WEBPACK_IMPORTED_MODULE_4__.HalfCircleRadians}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"corners",children:"Corners"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"r"})," sets a radius for rounded corners."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Slice_stories__WEBPACK_IMPORTED_MODULE_4__.RoundedCorners}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"padding",children:"Padding"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"padAngle"})," shrinks the effective shape to create empty space at the slice boundaries.\nThe examples below display semi-circular slices.\nNon-zero ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"padAngle"})," values make the slices appear slightly smaller."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Slice_stories__WEBPACK_IMPORTED_MODULE_4__.SmallAnglePadding}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Slice_stories__WEBPACK_IMPORTED_MODULE_4__.LargeAnglePadding})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);