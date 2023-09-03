"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[5390,297],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/filters/BlurFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BlurFilter_stories});var _Small$parameters,_Small$parameters2,_Large$parameters,_Large$parameters2,chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BlurFilter=function BlurFilter(_ref){var id=_ref.id,_ref$blurStdDeviation=_ref.blurStdDeviation,blurStdDeviation=void 0===_ref$blurStdDeviation?5:_ref$blurStdDeviation;return(0,jsx_runtime.jsx)("filter",{id,children:(0,jsx_runtime.jsx)("feGaussianBlur",{stdDeviation:blurStdDeviation})})};BlurFilter.displayName="BlurFilter";try{BlurFilter.displayName="BlurFilter",BlurFilter.__docgenInfo={description:"",displayName:"BlurFilter",props:{blurStdDeviation:{defaultValue:{value:"5"},description:"",name:"blurStdDeviation",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/BlurFilter.tsx#BlurFilter"]={docgenInfo:BlurFilter.__docgenInfo,name:"BlurFilter",path:"packages/annotation/src/filters/BlurFilter.tsx#BlurFilter"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const BlurFilter_stories={title:"Addons/Annotation/Filters/BlurFilter",component:BlurFilter};var Small={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(BlurFilter,{id:"small-blur",blurStdDeviation:1}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999"}}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999",filter:"url(#small-blur)"}})]})},name:"small"},Large={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(BlurFilter,{id:"large-blur",blurStdDeviation:4}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999"}}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999",filter:"url(#large-blur)"}})]})},name:"large"};Small.parameters=_extends({},Small.parameters,{docs:_extends({},null==(_Small$parameters=Small.parameters)?void 0:_Small$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <BlurFilter id={'small-blur'} blurStdDeviation={1} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999',\n      filter: 'url(#small-blur)'\n    }} />\n        </Chart>,\n  name: 'small'\n}"},null==(_Small$parameters2=Small.parameters)||null==(_Small$parameters2=_Small$parameters2.docs)?void 0:_Small$parameters2.source)})}),Large.parameters=_extends({},Large.parameters,{docs:_extends({},null==(_Large$parameters=Large.parameters)?void 0:_Large$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <BlurFilter id={'large-blur'} blurStdDeviation={4} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999',\n      filter: 'url(#large-blur)'\n    }} />\n        </Chart>,\n  name: 'large'\n}"},null==(_Large$parameters2=Large.parameters)||null==(_Large$parameters2=_Large$parameters2.docs)?void 0:_Large$parameters2.source)})});var __namedExportsOrder=["Small","Large"]},"./packages/annotation/stories/filters/BlurFilter.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_BlurFilter_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/annotation/stories/filters/BlurFilter.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_BlurFilter_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"blurfilter",children:"BlurFilter"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BlurFilter"})," creates an svg filter that applies a blur effect."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_BlurFilter_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["(",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BlurFilter"})," is a simple a wrapper for svg's ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"feGaussianBlur"}),".\nThe filter is provided as a distinct component for consistency in notation with other library filters.)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"blur",children:"Blur"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"blurStdDeviation"})," determines the amount of blur."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BlurFilter_stories__WEBPACK_IMPORTED_MODULE_4__.Small}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_BlurFilter_stories__WEBPACK_IMPORTED_MODULE_4__.Large})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);