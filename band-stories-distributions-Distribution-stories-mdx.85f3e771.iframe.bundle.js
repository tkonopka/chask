"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[382],{"./packages/band/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ChartDecorator,A:()=>dataRawValues});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateUniformValues=function generateUniformValues(n,interval){var size=interval[1]-interval[0];return Array(n).fill(0).map((function(){return interval[0]+Math.random()*size}))},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsxs)(chsk_core_es.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tg,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var dataRawValues=[{id:"alpha",x:generateUniformValues(30,[0,10]),y:generateUniformValues(30,[2,16])},{id:"beta",x:generateUniformValues(30,[5,15]),y:generateUniformValues(30,[10,20])}];try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/band/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/distributions/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TM:()=>ChartHorizontalDistributionDecorator,aY:()=>onDistributionsClick,i3:()=>commonDistributionProps,t3:()=>ChartDistributionDecorator,xT:()=>ChartDistributionWithTooltipDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/band/src/index.tsx"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonDistributionProps={data:_decorators__WEBPACK_IMPORTED_MODULE_2__.A,keys:["x","y"],paddingInternal:0,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},ChartDistributionDecorator=function ChartDistributionDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.vf,_extends({},commonDistributionProps,{horizontal:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJ,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RD,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RD,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartDistributionDecorator.displayName="ChartDistributionDecorator";var ChartHorizontalDistributionDecorator=function ChartHorizontalDistributionDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.vf,_extends({},commonDistributionProps,{horizontal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJ,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RD,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RD,{variant:"bottom",label:"Values (a.u.)"}),Story()]}))})};ChartHorizontalDistributionDecorator.displayName="ChartHorizontalDistributionDecorator";var onDistributionsClick=function onDistributionsClick(data){console.log("clicked: "+JSON.stringify(data))},round2dp=function round2dp(x){return String(roundDecimalPlaces(x,2))},ChartDistributionWithTooltipDecorator=function ChartDistributionWithTooltipDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.vf,_extends({},commonDistributionProps,{horizontal:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJ,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RD,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RD,{variant:"left",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.dp,{middleStyle:{stroke:"#000000",strokeWidth:2}}),Story()]}))})};ChartDistributionWithTooltipDecorator.displayName="ChartDistributionWithTooltipDecorator";try{ChartDistributionDecorator.displayName="ChartDistributionDecorator",ChartDistributionDecorator.__docgenInfo={description:"",displayName:"ChartDistributionDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#ChartDistributionDecorator"]={docgenInfo:ChartDistributionDecorator.__docgenInfo,name:"ChartDistributionDecorator",path:"packages/band/stories/distributions/decorators.tsx#ChartDistributionDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalDistributionDecorator.displayName="ChartHorizontalDistributionDecorator",ChartHorizontalDistributionDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalDistributionDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#ChartHorizontalDistributionDecorator"]={docgenInfo:ChartHorizontalDistributionDecorator.__docgenInfo,name:"ChartHorizontalDistributionDecorator",path:"packages/band/stories/distributions/decorators.tsx#ChartHorizontalDistributionDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onDistributionsClick.displayName="onDistributionsClick",onDistributionsClick.__docgenInfo={description:"",displayName:"onDistributionsClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"FiveNumbers"}},quantiles:{defaultValue:null,description:"",name:"quantiles",required:!0,type:{name:"FiveNumbers"}},extrema:{defaultValue:null,description:"",name:"extrema",required:!0,type:{name:"[number, number]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#onDistributionsClick"]={docgenInfo:onDistributionsClick.__docgenInfo,name:"onDistributionsClick",path:"packages/band/stories/distributions/decorators.tsx#onDistributionsClick"})}catch(__react_docgen_typescript_loader_error){}try{round2dp.displayName="round2dp",round2dp.__docgenInfo={description:"",displayName:"round2dp",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#round2dp"]={docgenInfo:round2dp.__docgenInfo,name:"round2dp",path:"packages/band/stories/distributions/decorators.tsx#round2dp"})}catch(__react_docgen_typescript_loader_error){}try{ChartDistributionWithTooltipDecorator.displayName="ChartDistributionWithTooltipDecorator",ChartDistributionWithTooltipDecorator.__docgenInfo={description:"",displayName:"ChartDistributionWithTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#ChartDistributionWithTooltipDecorator"]={docgenInfo:ChartDistributionWithTooltipDecorator.__docgenInfo,name:"ChartDistributionWithTooltipDecorator",path:"packages/band/stories/distributions/decorators.tsx#ChartDistributionWithTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/distributions/Distribution.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,horizontal:()=>horizontal,quantilesProps:()=>quantilesProps,vertical:()=>vertical});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/stories/decorators.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/band/stories/distributions/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.vf,{...args}),quantilesProps={medianStyle:{strokeWidth:3,stroke:"#444444"},whiskerStyle:{strokeWidth:2}};const vertical=Template.bind({});vertical.storyName="vertical",vertical.args={..._decorators__WEBPACK_IMPORTED_MODULE_5__.i3,horizontal:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.dp,{...quantilesProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"bottom"})]})},vertical.parameters={storySource:{source:"args => <Distribution {...args} />"}},vertical.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.e];const horizontal=Template.bind({});horizontal.storyName="horizontal",horizontal.args={..._decorators__WEBPACK_IMPORTED_MODULE_5__.i3,horizontal:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.dp,{...quantilesProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"bottom"})]})},horizontal.parameters={storySource:{source:"args => <Distribution {...args} />"}},horizontal.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.e];const componentMeta={title:"Addons/Band/Distributions/Distribution",tags:["stories-mdx"],includeStories:["vertical","horizontal"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h1,{id:"distribution",children:"Distribution"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/Band/Distributions/Distribution"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"Distribution"})," sets up a view to summarize distributions, for example, using a box-and-whisker plot.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"Distribution"})," itself does not draw any visible elements, but it pre-processes a dataset so that the data can be visualized by other components, for example ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"Distributions"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_3__.vf}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"data",children:"Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["Data should be prepared as an array of objects. All objects should contain a string identifier ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"'id'"}),". Other keys can hold arrays of numeric values."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.p,{children:"The pseudocode below shows one data item with an identifier and two numeric arrays. In this form, the numeric arrays will be treated as raw data points, and the component will compute appropriate quantiles."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"javascript",code:'\n[\n  {\n    "id": "alpha",\n    "x": [1, 2, 3, ,...],\n    "y": [2, 4, 6, ...],\n  },\n  ...\n]\n'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["Alternatively, the data can be provided as precomputed objects.\nIn this format, the keys should hold objects with five numeric values in field ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"values"}),",\nfive numeric quantile levels in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"quantiles"}),", and two numeric values in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"extrema"}),".\nThere should also be a numeric field ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"n"}),", representing the number of values in the original dataset.\nThe pseudocode below is an example."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"javascript",code:'\n[\n  {\n    "id": "beta",\n    "x": {\n      "n": 10,\n      "values": [1, 2, 3, 4, 5],\n      "quantiles": [0.05, 0.25, 0.5, 0.75, 0.95],\n      "extrema": [0, 6],\n    }\n  },\n  ...\n]\n'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"orientation",children:"Orientation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"horizontal"})," determines whether the boxes appear in the vertical or horizontal direction."]}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"vertical",args:{..._decorators__WEBPACK_IMPORTED_MODULE_5__.i3,horizontal:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.dp,{...quantilesProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"bottom"})]})},component:_src__WEBPACK_IMPORTED_MODULE_3__.vf,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.e],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"horizontal",args:{..._decorators__WEBPACK_IMPORTED_MODULE_5__.i3,horizontal:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.dp,{...quantilesProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"bottom"})]})},component:_src__WEBPACK_IMPORTED_MODULE_3__.vf,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.e],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"other-features",children:"Other features"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"Distribution"})," supports many of the same features as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"Bar"}),", for example, for adjusting padding. See the documentation for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.code,{children:"Bar"})," for examples."]})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);