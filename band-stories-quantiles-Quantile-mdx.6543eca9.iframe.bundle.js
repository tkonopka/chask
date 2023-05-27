"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4092],{"./packages/band/stories/quantiles/Quantile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Horizontal:()=>Horizontal,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Vertical$parameters,_Vertical$parameters2,_Vertical$parameters3,_Horizontal$parameter,_Horizontal$parameter2,_Horizontal$parameter3,_chsk_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/quantiles/Quantile.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/quantiles/Quantiles.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/band/stories/decorators.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/quantiles/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var quantilesProps={medianStyle:{strokeWidth:3,stroke:"#444444"},whiskerStyle:{strokeWidth:2}};const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Quantiles/Quantile",component:_src__WEBPACK_IMPORTED_MODULE_1__.c};var Vertical={name:"vertical",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.VX,{horizontal:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.R,_extends({},quantilesProps)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.RDh,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.RDh,{variant:"bottom"})]})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_5__.e]},Horizontal={name:"horizontal",args:_extends({},_decorators__WEBPACK_IMPORTED_MODULE_2__.VX,{horizontal:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.R,_extends({},quantilesProps)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.RDh,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.RDh,{variant:"bottom"})]})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_5__.e]};Vertical.parameters=_extends({},Vertical.parameters,{docs:_extends({},null==(_Vertical$parameters=Vertical.parameters)?void 0:_Vertical$parameters.docs,{source:_extends({originalSource:"{\n  name: 'vertical',\n  args: {\n    ...commonQuantileProps,\n    horizontal: false,\n    children: <>\n                <Quantiles {...quantilesProps} />\n                <Axis variant={'left'} />\n                <Axis variant={'bottom'} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Vertical$parameters2=Vertical.parameters)||null==(_Vertical$parameters3=_Vertical$parameters2.docs)?void 0:_Vertical$parameters3.source)})}),Horizontal.parameters=_extends({},Horizontal.parameters,{docs:_extends({},null==(_Horizontal$parameter=Horizontal.parameters)?void 0:_Horizontal$parameter.docs,{source:_extends({originalSource:"{\n  name: 'horizontal',\n  args: {\n    ...commonQuantileProps,\n    horizontal: true,\n    children: <>\n                <Quantiles {...quantilesProps} />\n                <Axis variant={'left'} />\n                <Axis variant={'bottom'} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Horizontal$parameter2=Horizontal.parameters)||null==(_Horizontal$parameter3=_Horizontal$parameter2.docs)?void 0:_Horizontal$parameter3.source)})});var __namedExportsOrder=["Vertical","Horizontal"]},"./packages/band/stories/quantiles/Quantile.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Quantile_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/stories/quantiles/Quantile.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"quantile",children:"Quantile"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Quantile_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Quantile"})," sets up a view to summarize distributions, for example, using a box-and-whisker plot.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Quantile"})," itself does not draw any visible elements, but it pre-processes a dataset so that the data can be visualized by other components, for example ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Quantiles"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Quantile_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data",children:"Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Data should be prepared as an array of objects.\nAll objects should contain a string identifier ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'id'"}),".\nOther keys can hold arrays of numeric values."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The pseudocode below shows one data item with an identifier and two numeric arrays.\nIn this form, the numeric arrays will be treated as raw data points, and the component will compute appropriate quantiles."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:'\n  [\n  {\n   "id": "alpha",\n   "x": [1, 2, 3, ,...],\n   "y": [2, 4, 6, ...],\n  },\n  ...\n  ]\n  '}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Alternatively, the data can be provided as precomputed objects.\nIn this format, the keys should hold objects with five numeric values in field ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"values"}),",\nfive numeric quantile levels in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"quantiles"}),", and two numeric values in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"extrema"}),".\nThere should also be a numeric field ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"n"}),", representing the number of values in the original dataset.\nThe pseudocode below is an example."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Hw,{language:"javascript",code:'\n  [\n  {\n   "id": "beta",\n   "x": {\n     "n": 10,\n     "values": [1, 2, 3, 4, 5],\n     "quantiles": [0.05, 0.25, 0.5, 0.75, 0.95],\n     "extrema": [0, 6],\n   }\n  },\n  ...\n  ]\n  '}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"orientation",children:"Orientation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"horizontal"})," determines whether the boxes appear in the vertical or horizontal direction."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Quantile_stories__WEBPACK_IMPORTED_MODULE_4__.Vertical}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Quantile_stories__WEBPACK_IMPORTED_MODULE_4__.Horizontal}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"other-features",children:"Other features"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Quantile"})," supports many of the same features as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Bar"}),", for example, for adjusting padding.\nSee the documentation for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Bar"})," for examples."]})]})}}}}]);