"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[1832,7282],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/shapes/Line.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,Dasharray:()=>Dasharray,Grid:()=>Grid,Tick:()=>Tick,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Tick$parameters,_Tick$parameters2,_Tick$parameters2$doc,_Grid$parameters,_Grid$parameters2,_Grid$parameters2$doc,_Color$parameters,_Color$parameters2,_Color$parameters2$do,_Dasharray$parameters,_Dasharray$parameters2,_Dasharray$parameters3,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/shapes/Line.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/stories/components/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Shapes/Line",component:_src__WEBPACK_IMPORTED_MODULE_0__.x};var Tick={name:"tick",args:{variant:"tick",x1:140,y1:80,x2:140,y2:86},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]},Grid={name:"grid",args:{variant:"grid",x1:0,y1:40,x2:320,y2:40},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]},Color={name:"color",args:{variant:"default",x1:0,y1:80,x2:280,y2:0,style:{stroke:"#dd4444"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]},Dasharray={name:"dasharray",args:{variant:"default",x1:40,y1:0,x2:320,y2:80,style:{stroke:"#222222",strokeDasharray:"15,15",strokeLinecap:"round",strokeWidth:5}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.ee]};Tick.parameters=_extends({},Tick.parameters,{docs:_extends({},null==(_Tick$parameters=Tick.parameters)?void 0:_Tick$parameters.docs,{source:_extends({originalSource:"{\n  name: 'tick',\n  args: {\n    variant: 'tick',\n    x1: 140,\n    y1: 80,\n    x2: 140,\n    y2: 86\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Tick$parameters2=Tick.parameters)||null==(_Tick$parameters2$doc=_Tick$parameters2.docs)?void 0:_Tick$parameters2$doc.source)})}),Grid.parameters=_extends({},Grid.parameters,{docs:_extends({},null==(_Grid$parameters=Grid.parameters)?void 0:_Grid$parameters.docs,{source:_extends({originalSource:"{\n  name: 'grid',\n  args: {\n    variant: 'grid',\n    x1: 0,\n    y1: 40,\n    x2: 320,\n    y2: 40\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Grid$parameters2=Grid.parameters)||null==(_Grid$parameters2$doc=_Grid$parameters2.docs)?void 0:_Grid$parameters2$doc.source)})}),Color.parameters=_extends({},Color.parameters,{docs:_extends({},null==(_Color$parameters=Color.parameters)?void 0:_Color$parameters.docs,{source:_extends({originalSource:"{\n  name: 'color',\n  args: {\n    variant: 'default',\n    x1: 0,\n    y1: 80,\n    x2: 280,\n    y2: 0,\n    style: {\n      stroke: '#dd4444'\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Color$parameters2=Color.parameters)||null==(_Color$parameters2$do=_Color$parameters2.docs)?void 0:_Color$parameters2$do.source)})}),Dasharray.parameters=_extends({},Dasharray.parameters,{docs:_extends({},null==(_Dasharray$parameters=Dasharray.parameters)?void 0:_Dasharray$parameters.docs,{source:_extends({originalSource:"{\n  name: 'dasharray',\n  args: {\n    variant: 'default',\n    x1: 40,\n    y1: 0,\n    x2: 320,\n    y2: 80,\n    style: {\n      stroke: '#222222',\n      strokeDasharray: '15,15',\n      strokeLinecap: 'round',\n      strokeWidth: 5\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Dasharray$parameters2=Dasharray.parameters)||null==(_Dasharray$parameters3=_Dasharray$parameters2.docs)?void 0:_Dasharray$parameters3.source)})});var __namedExportsOrder=["Tick","Grid","Color","Dasharray"]},"./packages/core/stories/components/shapes/Line.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Line_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/shapes/Line.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"line",children:"Line"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Line_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Line"})," draws a single line on a chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Line_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," applies pre-defined styles to a line.\nThe examples below show variants ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tick"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"grid"}),", which apply styling suitable for axis tick marks\nand for grid lines, respectively."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Line_stories__WEBPACK_IMPORTED_MODULE_4__.Tick}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Line_stories__WEBPACK_IMPORTED_MODULE_4__.Grid}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styles",children:"Styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"It is possible to adjust individual lines using inline styles."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Line_stories__WEBPACK_IMPORTED_MODULE_4__.Color}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Line_stories__WEBPACK_IMPORTED_MODULE_4__.Dasharray})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);