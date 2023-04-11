"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3557],{"./packages/band/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ChartDecorator,A:()=>dataRawValues});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateUniformValues=function generateUniformValues(n,interval){var size=interval[1]-interval[0];return Array(n).fill(0).map((function(){return interval[0]+Math.random()*size}))},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsxs)(chsk_core_es.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tg,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var dataRawValues=[{id:"alpha",x:generateUniformValues(30,[0,10]),y:generateUniformValues(30,[2,16])},{id:"beta",x:generateUniformValues(30,[5,15]),y:generateUniformValues(30,[10,20])}];try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/band/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/distributions/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{TM:()=>ChartHorizontalDistributionDecorator,aY:()=>onDistributionsClick,i3:()=>commonDistributionProps,t3:()=>ChartDistributionDecorator,xT:()=>ChartDistributionWithTooltipDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/band/src/index.tsx"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonDistributionProps={data:_decorators__WEBPACK_IMPORTED_MODULE_2__.A,keys:["x","y"],paddingInternal:0,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},ChartDistributionDecorator=function ChartDistributionDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.vf,_extends({},commonDistributionProps,{horizontal:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJ,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RD,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RD,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartDistributionDecorator.displayName="ChartDistributionDecorator";var ChartHorizontalDistributionDecorator=function ChartHorizontalDistributionDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.vf,_extends({},commonDistributionProps,{horizontal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJ,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RD,{variant:"left"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RD,{variant:"bottom",label:"Values (a.u.)"}),Story()]}))})};ChartHorizontalDistributionDecorator.displayName="ChartHorizontalDistributionDecorator";var onDistributionsClick=function onDistributionsClick(data){console.log("clicked: "+JSON.stringify(data))},round2dp=function round2dp(x){return String(roundDecimalPlaces(x,2))},ChartDistributionWithTooltipDecorator=function ChartDistributionWithTooltipDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.vf,_extends({},commonDistributionProps,{horizontal:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.VJ,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RD,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.RD,{variant:"left",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.dp,{middleStyle:{stroke:"#000000",strokeWidth:2}}),Story()]}))})};ChartDistributionWithTooltipDecorator.displayName="ChartDistributionWithTooltipDecorator";try{ChartDistributionDecorator.displayName="ChartDistributionDecorator",ChartDistributionDecorator.__docgenInfo={description:"",displayName:"ChartDistributionDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#ChartDistributionDecorator"]={docgenInfo:ChartDistributionDecorator.__docgenInfo,name:"ChartDistributionDecorator",path:"packages/band/stories/distributions/decorators.tsx#ChartDistributionDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalDistributionDecorator.displayName="ChartHorizontalDistributionDecorator",ChartHorizontalDistributionDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalDistributionDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#ChartHorizontalDistributionDecorator"]={docgenInfo:ChartHorizontalDistributionDecorator.__docgenInfo,name:"ChartHorizontalDistributionDecorator",path:"packages/band/stories/distributions/decorators.tsx#ChartHorizontalDistributionDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onDistributionsClick.displayName="onDistributionsClick",onDistributionsClick.__docgenInfo={description:"",displayName:"onDistributionsClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"FiveNumbers"}},quantiles:{defaultValue:null,description:"",name:"quantiles",required:!0,type:{name:"FiveNumbers"}},extrema:{defaultValue:null,description:"",name:"extrema",required:!0,type:{name:"[number, number]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#onDistributionsClick"]={docgenInfo:onDistributionsClick.__docgenInfo,name:"onDistributionsClick",path:"packages/band/stories/distributions/decorators.tsx#onDistributionsClick"})}catch(__react_docgen_typescript_loader_error){}try{round2dp.displayName="round2dp",round2dp.__docgenInfo={description:"",displayName:"round2dp",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#round2dp"]={docgenInfo:round2dp.__docgenInfo,name:"round2dp",path:"packages/band/stories/distributions/decorators.tsx#round2dp"})}catch(__react_docgen_typescript_loader_error){}try{ChartDistributionWithTooltipDecorator.displayName="ChartDistributionWithTooltipDecorator",ChartDistributionWithTooltipDecorator.__docgenInfo={description:"",displayName:"ChartDistributionWithTooltipDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/distributions/decorators.tsx#ChartDistributionWithTooltipDecorator"]={docgenInfo:ChartDistributionWithTooltipDecorator.__docgenInfo,name:"ChartDistributionWithTooltipDecorator",path:"packages/band/stories/distributions/decorators.tsx#ChartDistributionWithTooltipDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/distributions/DistributionTooltip.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,tableFormat:()=>tableFormat,tooltip:()=>tooltip});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/stories/distributions/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.tQ,{...args});const tooltip=Template.bind({});tooltip.storyName="tooltip",tooltip.args={offset:[8,0],padding:[8,8,8,8],anchor:[0,.5],labelFormat:d=>d.id+" - "+d.key,labelStyle:{fontWeight:600},valueFormat:x=>Math.round(100*x)/100,cellStyle:{textAnchor:"start",dominantBaseline:"central"}},tooltip.parameters={storySource:{source:"args => <DistributionTooltip {...args} />"}},tooltip.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.xT];const tableFormat=Template.bind({});tableFormat.storyName="table format",tableFormat.args={offset:[8,0],padding:[8,8,8,8],anchor:[.5,1],cellSize:[60,20],cellPadding:50,labelFormat:d=>d.id+" - "+d.key,labelStyle:{fontWeight:600},valueFormat:x=>Math.round(100*x)/100,cellStyle:{textAnchor:"start",dominantBaseline:"central"}},tableFormat.parameters={storySource:{source:"args => <DistributionTooltip {...args} />"}},tableFormat.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.xT];const componentMeta={title:"Addons/Band/Distributions/DistributionTooltip",tags:["stories-mdx"],includeStories:["tooltip","tableFormat"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"distributiontooltip",children:"DistributionTooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/Band/Distributions/DistributionTooltip"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"DistributionTooltip"})," creates a tooltip summarizing a distribution."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_2__.tQ}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"tooltip-configuration",children:"Tooltip configuration"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"DistributionTooltip"})," creates a tooltip with information about a data distribution.\nThe component shares many props with the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Tooltip"})," component from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"@chsk/core"}),".\nFor example, the position of the tooltip is configured with props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"offset"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"anchor"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"tooltip",args:{offset:[8,0],padding:[8,8,8,8],anchor:[0,.5],labelFormat:d=>d.id+" - "+d.key,labelStyle:{fontWeight:600},valueFormat:x=>Math.round(100*x)/100,cellStyle:{textAnchor:"start",dominantBaseline:"central"}},component:_src__WEBPACK_IMPORTED_MODULE_2__.tQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.xT],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"table-format",children:"Table format"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"DistributionTooltip"})," differs from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Tooltip"})," in that it displays summary statistics for a data distribution in a\ntable-like layout."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["The table layout is configured with props with prefix ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"cell"}),".\nNotably, for the text elements in the table to display correctly, it may be necessary to set styles with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"cellStyle"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Other cell props are ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"cellSize"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"cellPadding"}),", which control the space allocated to each label / value\nin the table, and the spacing between the two columns."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"table format",args:{offset:[8,0],padding:[8,8,8,8],anchor:[.5,1],cellSize:[60,20],cellPadding:50,labelFormat:d=>d.id+" - "+d.key,labelStyle:{fontWeight:600},valueFormat:x=>Math.round(100*x)/100,cellStyle:{textAnchor:"start",dominantBaseline:"central"}},component:_src__WEBPACK_IMPORTED_MODULE_2__.tQ,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.xT],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"The component does not offer further tuning props in order to keep its implementation and interface at a manageable\ncomplexity. To create a different type of tooltip, replace the component with a bespoke component."})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);