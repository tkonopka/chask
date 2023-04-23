"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[5518,7490],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/typography/BracketLabel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LongTicks:()=>LongTicks,ShortTicks:()=>ShortTicks,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ShortTicks$parameter,_ShortTicks$parameter2,_ShortTicks$parameter3,_LongTicks$parameters,_LongTicks$parameters2,_LongTicks$parameters3,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/annotation/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/stories/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Typography/BracketLabel",component:_src__WEBPACK_IMPORTED_MODULE_0__.d5};var ShortTicks={name:"short ticks",args:{start:["C",108],end:["F",108],expansion:[.5,.5],tickSize:7,lineStyle:{fillOpacity:0},textStyle:{textAnchor:"middle"},children:"selection"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.I8]},LongTicks={name:"long ticks",args:{start:["C",90],end:["E",20],units:["view","view"],expansion:[.5,.5],tickSize:20,offset:[20,-20],lineStyle:{fillOpacity:0},textStyle:{textAnchor:"middle"},children:"selection"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.I8]};ShortTicks.parameters=_extends({},ShortTicks.parameters,{docs:_extends({},null==(_ShortTicks$parameter=ShortTicks.parameters)?void 0:_ShortTicks$parameter.docs,{source:_extends({originalSource:"{\n  name: 'short ticks',\n  args: {\n    start: ['C', 108],\n    end: ['F', 108],\n    expansion: [0.5, 0.5],\n    tickSize: 7,\n    lineStyle: {\n      fillOpacity: 0\n    },\n    textStyle: {\n      textAnchor: 'middle'\n    },\n    children: 'selection'\n  },\n  decorators: [ChartBandViewAxisDecorator]\n}"},null==(_ShortTicks$parameter2=ShortTicks.parameters)||null==(_ShortTicks$parameter3=_ShortTicks$parameter2.docs)?void 0:_ShortTicks$parameter3.source)})}),LongTicks.parameters=_extends({},LongTicks.parameters,{docs:_extends({},null==(_LongTicks$parameters=LongTicks.parameters)?void 0:_LongTicks$parameters.docs,{source:_extends({originalSource:"{\n  name: 'long ticks',\n  args: {\n    start: ['C', 90],\n    end: ['E', 20],\n    units: ['view', 'view'],\n    expansion: [0.5, 0.5],\n    tickSize: 20,\n    offset: [20, -20],\n    lineStyle: {\n      fillOpacity: 0\n    },\n    textStyle: {\n      textAnchor: 'middle'\n    },\n    children: 'selection'\n  },\n  decorators: [ChartBandViewAxisDecorator]\n}"},null==(_LongTicks$parameters2=LongTicks.parameters)||null==(_LongTicks$parameters3=_LongTicks$parameters2.docs)?void 0:_LongTicks$parameters3.source)})});var __namedExportsOrder=["ShortTicks","LongTicks"]},"./packages/annotation/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>barProps,I8:()=>ChartBandViewAxisDecorator,VK:()=>ChartBandViewDecorator,cK:()=>ChartLinearViewDecorator,ee:()=>ChartDecorator,vr:()=>ChartLinearViewAxisDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2,paddingOuter:0},scaleY:{variant:"linear",domain:[0,100]},children:[Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"})]})]})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";var ChartBandViewAxisDecorator=function ChartBandViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]})]})};ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator";var ChartLinearViewDecorator=function ChartLinearViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"})]})]})};ChartLinearViewDecorator.displayName="ChartLinearViewDecorator";var ChartLinearViewAxisDecorator=function ChartLinearViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]})]})};ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator";var barProps={data:[{id:"alpha",x:10},{id:"beta",x:20}],keys:["x"],horizontal:!0,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}};try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/annotation/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator",ChartBandViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartBandViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"]={docgenInfo:ChartBandViewAxisDecorator.__docgenInfo,name:"ChartBandViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewDecorator.displayName="ChartLinearViewDecorator",ChartLinearViewDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"]={docgenInfo:ChartLinearViewDecorator.__docgenInfo,name:"ChartLinearViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator",ChartLinearViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"]={docgenInfo:ChartLinearViewAxisDecorator.__docgenInfo,name:"ChartLinearViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/typography/BracketLabel.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_BracketLabel_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/annotation/stories/typography/BracketLabel.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_BracketLabel_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"bracketlabel",children:"BracketLabel"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BracketLabel"})," displays a bracket and a text label. A 'bracket' is a line that forms a shape like '[' or ']'."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_BracketLabel_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"ticks",children:"Ticks"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The feature that distinguishes ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BracketLabel"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LineLabel"})," is the presence of ticks at the ends of the line.\nThe length of these ticks is determined by prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tickSize"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BracketLabel_stories__WEBPACK_IMPORTED_MODULE_2__.ShortTicks}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BracketLabel_stories__WEBPACK_IMPORTED_MODULE_2__.LongTicks}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"other-settings",children:"Other settings"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BracketLabel"})," shares many props and features with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LineLabel"}),", for example with regard to orientation of text, rotations, and styling.\nSee documentation for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"LineLabel"})," for details."]})]})}}}}]);