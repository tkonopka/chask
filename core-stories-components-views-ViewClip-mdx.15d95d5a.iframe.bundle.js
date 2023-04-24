"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3739,3703],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/views/ViewClip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Expansion:()=>Expansion,WithClip:()=>WithClip,WithoutClip:()=>WithoutClip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _WithClip$parameters,_WithClip$parameters2,_WithClip$parameters3,_WithoutClip$paramete,_WithoutClip$paramete2,_WithoutClip$paramete3,_Expansion$parameters,_Expansion$parameters2,_Expansion$parameters3,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/stories/components/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Views/ViewClip",component:_src__WEBPACK_IMPORTED_MODULE_0__.g_k};var WithClip={name:"clipped",args:{id:"clipped",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle",{cx:0,cy:0,r:30,style:{fill:"#dd0000"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.OR]},WithoutClip={name:"unclipped",args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle",{cx:0,cy:0,r:30,style:{fill:"#dd0000"}})},component:function component(_ref){var children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("g",{children})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.OR]},Expansion={name:"expansion",args:{id:"clip-expansion",expansion:[10,10,10,10],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle",{cx:0,cy:0,r:30,style:{fill:"#dd0000"}})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.OR]};WithClip.parameters=_extends({},WithClip.parameters,{docs:_extends({},null==(_WithClip$parameters=WithClip.parameters)?void 0:_WithClip$parameters.docs,{source:_extends({originalSource:"{\n  name: 'clipped',\n  args: {\n    id: 'clipped',\n    children: <circle cx={0} cy={0} r={30} style={{\n      fill: '#dd0000'\n    }} />\n  },\n  decorators: [ChartViewDecorator]\n}"},null==(_WithClip$parameters2=WithClip.parameters)||null==(_WithClip$parameters3=_WithClip$parameters2.docs)?void 0:_WithClip$parameters3.source)})}),WithoutClip.parameters=_extends({},WithoutClip.parameters,{docs:_extends({},null==(_WithoutClip$paramete=WithoutClip.parameters)?void 0:_WithoutClip$paramete.docs,{source:_extends({originalSource:"{\n  name: 'unclipped',\n  args: {\n    children: <circle cx={0} cy={0} r={30} style={{\n      fill: '#dd0000'\n    }} />\n  },\n  component: ({\n    children\n  }: {\n    children: ReactNode;\n  }) => <g>{children}</g>,\n  decorators: [ChartViewDecorator]\n}"},null==(_WithoutClip$paramete2=WithoutClip.parameters)||null==(_WithoutClip$paramete3=_WithoutClip$paramete2.docs)?void 0:_WithoutClip$paramete3.source)})}),Expansion.parameters=_extends({},Expansion.parameters,{docs:_extends({},null==(_Expansion$parameters=Expansion.parameters)?void 0:_Expansion$parameters.docs,{source:_extends({originalSource:"{\n  name: 'expansion',\n  args: {\n    id: 'clip-expansion',\n    expansion: [10, 10, 10, 10],\n    children: <circle cx={0} cy={0} r={30} style={{\n      fill: '#dd0000'\n    }} />\n  },\n  decorators: [ChartViewDecorator]\n}"},null==(_Expansion$parameters2=Expansion.parameters)||null==(_Expansion$parameters3=_Expansion$parameters2.docs)?void 0:_Expansion$parameters3.source)})});var __namedExportsOrder=["WithClip","WithoutClip","Expansion"]},"./packages/core/stories/components/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lh:()=>ChartPlainDecorator,OR:()=>ChartViewDecorator,VK:()=>ChartBandViewDecorator,ee:()=>ChartDecorator,ke:()=>viewSeriesIndexesKeys,z5:()=>DivDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),viewSeriesIndexesKeys={seriesIndexes:{X:0,Y:1},keys:["alpha","beta","gamma"]},DivDecorator=function DivDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:Story()})};DivDecorator.displayName="DivDecorator";var ChartPlainDecorator=function ChartPlainDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:Story()})};ChartPlainDecorator.displayName="ChartPlainDecorator";var ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartViewDecorator=function ChartViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})})};ChartViewDecorator.displayName="ChartViewDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,40,60,80],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},scaleY:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"})]})})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";try{DivDecorator.displayName="DivDecorator",DivDecorator.__docgenInfo={description:"",displayName:"DivDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#DivDecorator"]={docgenInfo:DivDecorator.__docgenInfo,name:"DivDecorator",path:"packages/core/stories/components/decorators.tsx#DivDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartPlainDecorator.displayName="ChartPlainDecorator",ChartPlainDecorator.__docgenInfo={description:"",displayName:"ChartPlainDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartPlainDecorator"]={docgenInfo:ChartPlainDecorator.__docgenInfo,name:"ChartPlainDecorator",path:"packages/core/stories/components/decorators.tsx#ChartPlainDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/core/stories/components/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartViewDecorator.displayName="ChartViewDecorator",ChartViewDecorator.__docgenInfo={description:"",displayName:"ChartViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartViewDecorator"]={docgenInfo:ChartViewDecorator.__docgenInfo,name:"ChartViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/views/ViewClip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ViewClip_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/stories/components/views/ViewClip.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"viewclip",children:"ViewClip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_ViewClip_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ViewClip"})," is an organizational component that restrict content to the bounds of a single view."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_ViewClip_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ViewClip"})," does not generate visible content.\nHowever, it creates a clip mask and restricts all child elements to create content within that mask.\nThis can be useful for drawing views with bespoke scales, for example when using zoom operations."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"identifier",children:"Identifier"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"id"})," assigns a unique identifier to a clip region.\nThis identifier is important when there are multiple clip regions in the same graphic\n(e.g. in a chart with multiple views) or on the same page (in a web context)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Below are examples where a circle is drawn in a view without and with clipping."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ViewClip_stories__WEBPACK_IMPORTED_MODULE_2__.WithoutClip}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ViewClip_stories__WEBPACK_IMPORTED_MODULE_2__.WithClip}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"expansion",children:"Expansion"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["While the default clip region coincides with a view, prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"expansion"})," extends the region in the\ntop, right, bottom, and left directions by a fixed distance."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ViewClip_stories__WEBPACK_IMPORTED_MODULE_2__.Expansion})]})}}}}]);