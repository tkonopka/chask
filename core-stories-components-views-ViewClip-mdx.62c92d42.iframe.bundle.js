"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3739,3703],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/views/ViewClip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Expansion:()=>Expansion,WithClip:()=>WithClip,WithoutClip:()=>WithoutClip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ViewClip_stories});var contexts=__webpack_require__("./packages/core/src/general/contexts.tsx"),constants=__webpack_require__("./packages/core/src/general/constants.ts"),utils=__webpack_require__("./packages/core/src/general/utils.ts"),hooks=__webpack_require__("./packages/core/src/themes/hooks.tsx"),defaults=__webpack_require__("./packages/core/src/views/defaults.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var UnthemedViewClip=function UnthemedViewClip(_ref){var id=_ref.id,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?defaults.YL.expansion:_ref$expansion,children=_ref.children,size=(0,contexts.Bs)().size;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("clipPath",{id,children:(0,jsx_runtime.jsx)("rect",{x:-expansion[constants.RL],y:-expansion[constants.GS],width:size[constants.X]+expansion[constants.RL]+expansion[constants.pX],height:size[constants.Y]+expansion[constants.GS]+expansion[constants.D]})},"clipPath"),(0,jsx_runtime.jsx)("g",{clipPath:(0,utils.HQ)(id),children},"content")]})},ViewClip=function ViewClip(props){return(0,jsx_runtime.jsx)(UnthemedViewClip,_extends({},(0,hooks.m)(props,"ViewClip")))};ViewClip.displayName="ViewClip";try{UnthemedViewClip.displayName="UnthemedViewClip",UnthemedViewClip.__docgenInfo={description:"",displayName:"UnthemedViewClip",props:{variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"id for clip path",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},expansion:{defaultValue:{value:"defaultSurfaceProps.expansion"},description:"expansion of background surface",name:"expansion",required:!1,type:{name:"FourSideSizeSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/views/ViewClip.tsx#UnthemedViewClip"]={docgenInfo:UnthemedViewClip.__docgenInfo,name:"UnthemedViewClip",path:"packages/core/src/views/ViewClip.tsx#UnthemedViewClip"})}catch(__react_docgen_typescript_loader_error){}try{ViewClip.displayName="ViewClip",ViewClip.__docgenInfo={description:"",displayName:"ViewClip",props:{variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"id for clip path",name:"id",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},expansion:{defaultValue:{value:"defaultSurfaceProps.expansion"},description:"expansion of background surface",name:"expansion",required:!1,type:{name:"FourSideSizeSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/views/ViewClip.tsx#ViewClip"]={docgenInfo:ViewClip.__docgenInfo,name:"ViewClip",path:"packages/core/src/views/ViewClip.tsx#ViewClip"})}catch(__react_docgen_typescript_loader_error){}var _WithClip$parameters,_WithClip$parameters2,_WithClip$parameters3,_WithoutClip$paramete,_WithoutClip$paramete2,_WithoutClip$paramete3,_Expansion$parameters,_Expansion$parameters2,_Expansion$parameters3,decorators=__webpack_require__("./packages/core/stories/components/decorators.tsx");function ViewClip_stories_extends(){return ViewClip_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},ViewClip_stories_extends.apply(this,arguments)}const ViewClip_stories={title:"Core/Components/Views/ViewClip",component:ViewClip};var WithClip={name:"clipped",args:{id:"clipped",children:(0,jsx_runtime.jsx)("circle",{cx:0,cy:0,r:30,style:{fill:"#dd0000"}})},decorators:[decorators.OR]},WithoutClip={name:"unclipped",args:{children:(0,jsx_runtime.jsx)("circle",{cx:0,cy:0,r:30,style:{fill:"#dd0000"}})},component:function component(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)("g",{children})},decorators:[decorators.OR]},Expansion={name:"expansion",args:{id:"clip-expansion",expansion:[10,10,10,10],children:(0,jsx_runtime.jsx)("circle",{cx:0,cy:0,r:30,style:{fill:"#dd0000"}})},decorators:[decorators.OR]};WithClip.parameters=ViewClip_stories_extends({},WithClip.parameters,{docs:ViewClip_stories_extends({},null==(_WithClip$parameters=WithClip.parameters)?void 0:_WithClip$parameters.docs,{source:ViewClip_stories_extends({originalSource:"{\n  name: 'clipped',\n  args: {\n    id: 'clipped',\n    children: <circle cx={0} cy={0} r={30} style={{\n      fill: '#dd0000'\n    }} />\n  },\n  decorators: [ChartViewDecorator]\n}"},null==(_WithClip$parameters2=WithClip.parameters)||null==(_WithClip$parameters3=_WithClip$parameters2.docs)?void 0:_WithClip$parameters3.source)})}),WithoutClip.parameters=ViewClip_stories_extends({},WithoutClip.parameters,{docs:ViewClip_stories_extends({},null==(_WithoutClip$paramete=WithoutClip.parameters)?void 0:_WithoutClip$paramete.docs,{source:ViewClip_stories_extends({originalSource:"{\n  name: 'unclipped',\n  args: {\n    children: <circle cx={0} cy={0} r={30} style={{\n      fill: '#dd0000'\n    }} />\n  },\n  component: ({\n    children\n  }: {\n    children: ReactNode;\n  }) => <g>{children}</g>,\n  decorators: [ChartViewDecorator]\n}"},null==(_WithoutClip$paramete2=WithoutClip.parameters)||null==(_WithoutClip$paramete3=_WithoutClip$paramete2.docs)?void 0:_WithoutClip$paramete3.source)})}),Expansion.parameters=ViewClip_stories_extends({},Expansion.parameters,{docs:ViewClip_stories_extends({},null==(_Expansion$parameters=Expansion.parameters)?void 0:_Expansion$parameters.docs,{source:ViewClip_stories_extends({originalSource:"{\n  name: 'expansion',\n  args: {\n    id: 'clip-expansion',\n    expansion: [10, 10, 10, 10],\n    children: <circle cx={0} cy={0} r={30} style={{\n      fill: '#dd0000'\n    }} />\n  },\n  decorators: [ChartViewDecorator]\n}"},null==(_Expansion$parameters2=Expansion.parameters)||null==(_Expansion$parameters3=_Expansion$parameters2.docs)?void 0:_Expansion$parameters3.source)})});var __namedExportsOrder=["WithClip","WithoutClip","Expansion"]},"./packages/core/stories/components/views/ViewClip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ViewClip_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/views/ViewClip.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"viewclip",children:"ViewClip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_ViewClip_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ViewClip"})," is an organizational component that restrict content to the bounds of a single view."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_ViewClip_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ViewClip"})," does not generate visible content.\nHowever, it creates a clip mask and restricts all child elements to create content within that mask.\nThis can be useful for drawing views with bespoke scales, for example when using zoom operations."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"identifier",children:"Identifier"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"id"})," assigns a unique identifier to a clip region.\nThis identifier is important when there are multiple clip regions in the same graphic\n(e.g. in a chart with multiple views) or on the same page (in a web context)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Below are examples where a circle is drawn in a view without and with clipping."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ViewClip_stories__WEBPACK_IMPORTED_MODULE_4__.WithoutClip}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ViewClip_stories__WEBPACK_IMPORTED_MODULE_4__.WithClip}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"expansion",children:"Expansion"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["While the default clip region coincides with a view, prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"expansion"})," extends the region in the\ntop, right, bottom, and left directions by a fixed distance."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ViewClip_stories__WEBPACK_IMPORTED_MODULE_4__.Expansion})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);