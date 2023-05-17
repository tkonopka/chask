"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9766,9546],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/matrix/stories/upsets/UpSetGrid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomStyles:()=>CustomStyles,CustomSymbol:()=>CustomSymbol,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_CustomSymbol$paramet,_CustomSymbol$paramet2,_CustomSymbol$paramet3,_CustomStyles$paramet,_CustomStyles$paramet2,_CustomStyles$paramet3,_chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/matrix/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/matrix/stories/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Matrix/UpSets/UpSetGrid",component:_src__WEBPACK_IMPORTED_MODULE_1__.hI};var Default={name:"default",args:{},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.b7]},CustomSymbol={name:"custom symbol",args:{symbol:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.bK0,symbolStyle:{strokeWidth:5}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.b7]},CustomStyles={name:"custom styles",args:{symbolStyle:{fill:"#ddd",stroke:"#aaa",strokeWidth:1}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.b7]};Default.parameters=_extends({},Default.parameters,{docs:_extends({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:_extends({originalSource:"{\n  name: 'default',\n  args: {},\n  decorators: [ChartUpSetDecorator]\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2$=_Default$parameters2.docs)?void 0:_Default$parameters2$.source)})}),CustomSymbol.parameters=_extends({},CustomSymbol.parameters,{docs:_extends({},null==(_CustomSymbol$paramet=CustomSymbol.parameters)?void 0:_CustomSymbol$paramet.docs,{source:_extends({originalSource:"{\n  name: 'custom symbol',\n  args: {\n    symbol: Square,\n    symbolStyle: {\n      strokeWidth: 5\n    }\n  },\n  decorators: [ChartUpSetDecorator]\n}"},null==(_CustomSymbol$paramet2=CustomSymbol.parameters)||null==(_CustomSymbol$paramet3=_CustomSymbol$paramet2.docs)?void 0:_CustomSymbol$paramet3.source)})}),CustomStyles.parameters=_extends({},CustomStyles.parameters,{docs:_extends({},null==(_CustomStyles$paramet=CustomStyles.parameters)?void 0:_CustomStyles$paramet.docs,{source:_extends({originalSource:"{\n  name: 'custom styles',\n  args: {\n    symbolStyle: {\n      fill: '#ddd',\n      stroke: '#aaa',\n      strokeWidth: 1\n    }\n  },\n  decorators: [ChartUpSetDecorator]\n}"},null==(_CustomStyles$paramet2=CustomStyles.parameters)||null==(_CustomStyles$paramet3=_CustomStyles$paramet2.docs)?void 0:_CustomStyles$paramet3.source)})});var __namedExportsOrder=["Default","CustomSymbol","CustomStyles"]},"./packages/matrix/stories/upsets/UpSetGrid.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_UpSetGrid_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/matrix/stories/upsets/UpSetGrid.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"upsetgrid",children:"UpSetGrid"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_UpSetGrid_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"UpSetGrid"})," draws a grid of symbols on an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"UpSet"})," view."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_UpSetGrid_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"custom-symbols",children:"Custom symbols"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The default grid displays a matrix of circles.\nOther shapes can be set using prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"symbol"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_UpSetGrid_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_UpSetGrid_stories__WEBPACK_IMPORTED_MODULE_2__.CustomSymbol}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Symbols can be styled using prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"symbolStyle"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_UpSetGrid_stories__WEBPACK_IMPORTED_MODULE_2__.CustomStyles})]})}}}}]);