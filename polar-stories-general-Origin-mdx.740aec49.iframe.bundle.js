"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[5414,4900],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/polar/stories/general/Origin.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithOrigin:()=>WithOrigin,WithoutOrigin:()=>WithoutOrigin,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _WithoutOrigin$parame,_WithoutOrigin$parame2,_WithOrigin$parameter,_WithOrigin$parameter2,_chsk_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/polar/src/pie/Pie.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/polar/src/pie/Slices.tsx"),_src__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/polar/src/general/Origin.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/polar/stories/decorators.tsx"),_pie_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/polar/stories/pie/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Polar/Polar/Origin",component:_src__WEBPACK_IMPORTED_MODULE_1__.b};var WithoutOrigin={name:"without origin",args:_extends({},_pie_decorators__WEBPACK_IMPORTED_MODULE_2__.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.i,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.Tgp,{variant:"inner",style:{stroke:"#222222",strokeWidth:1,fillOpacity:0}})]})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_5__.e]},WithOrigin={name:"with origin",args:_extends({},_pie_decorators__WEBPACK_IMPORTED_MODULE_2__.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.Tgp,{variant:"inner",style:{stroke:"#222222",strokeWidth:1,fillOpacity:0}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_6__.a,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.i,{})})]})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_5__.e]};WithoutOrigin.parameters=_extends({},WithoutOrigin.parameters,{docs:_extends({},null==(_WithoutOrigin$parame=WithoutOrigin.parameters)?void 0:_WithoutOrigin$parame.docs,{source:_extends({originalSource:"{\n  name: 'without origin',\n  args: {\n    ...commonPieProps,\n    children: <>\n                <Slices />\n                <Surface variant={'inner'} style={{\n        stroke: '#222222',\n        strokeWidth: 1,\n        fillOpacity: 0\n      }} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_WithoutOrigin$parame2=WithoutOrigin.parameters)||null==(_WithoutOrigin$parame2=_WithoutOrigin$parame2.docs)?void 0:_WithoutOrigin$parame2.source)})}),WithOrigin.parameters=_extends({},WithOrigin.parameters,{docs:_extends({},null==(_WithOrigin$parameter=WithOrigin.parameters)?void 0:_WithOrigin$parameter.docs,{source:_extends({originalSource:"{\n  name: 'with origin',\n  args: {\n    ...commonPieProps,\n    children: <>\n                <Surface variant={'inner'} style={{\n        stroke: '#222222',\n        strokeWidth: 1,\n        fillOpacity: 0\n      }} />\n                <Origin>\n                    <Slices />\n                </Origin>\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_WithOrigin$parameter2=WithOrigin.parameters)||null==(_WithOrigin$parameter2=_WithOrigin$parameter2.docs)?void 0:_WithOrigin$parameter2.source)})});var __namedExportsOrder=["WithoutOrigin","WithOrigin"]},"./packages/polar/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ChartDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:Story()})};ChartDecorator.displayName="ChartDecorator";try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/polar/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/stories/general/Origin.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Origin_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/polar/stories/general/Origin.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"origin",children:"Origin"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Origin_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Origin"})," moves the svg coordinate system."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Origin_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Origin"})," is intended to be used as an immediate child of a view component, e.g. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Pie"}),".\nWhereas svg coordinates in a view are centered on the top-left corner of the view,\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Origin"})," introduces an svg ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"g"})," element that moves the origin of the coordinate system to the center.\nThis is important for components such as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Slices"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Origin_stories__WEBPACK_IMPORTED_MODULE_4__.WithoutOrigin}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Origin_stories__WEBPACK_IMPORTED_MODULE_4__.WithOrigin})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);