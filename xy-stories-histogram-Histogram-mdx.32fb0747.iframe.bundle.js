"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2351,8425],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/xy/stories/histogram/Histogram.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoRescaling:()=>AutoRescaling,Counts:()=>Counts,Densities:()=>Densities,FixedScales:()=>FixedScales,HighResolution:()=>HighResolution,LowResolution:()=>LowResolution,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Counts$parameters,_Counts$parameters2,_Counts$parameters2$d,_Densities$parameters,_Densities$parameters2,_Densities$parameters3,_LowResolution$parame,_LowResolution$parame2,_LowResolution$parame3,_HighResolution$param,_HighResolution$param2,_HighResolution$param3,_AutoRescaling$parame,_AutoRescaling$parame2,_AutoRescaling$parame3,_FixedScales$paramete,_FixedScales$paramete2,_FixedScales$paramete3,_chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/xy/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/xy/stories/histogram/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var AreaAndLegend=function AreaAndLegend(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"counts"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.dA,{style:{fillOpacity:1}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.DeQ,{position:[220,60],positionUnits:"absolute",anchor:[0,.5],title:"Distributions"})]})};const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/XY/Histograms/Histogram",component:_src__WEBPACK_IMPORTED_MODULE_1__.b5};var Counts={name:"counts",args:{variant:"count",data:_decorators__WEBPACK_IMPORTED_MODULE_2__.m,breaks:12,scaleX:{variant:"linear",domain:["auto","auto"]},scaleY:{variant:"linear",domain:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"counts"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.dA,{style:{fillOpacity:1}})]})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},Densities={name:"densities",args:{variant:"density",data:_decorators__WEBPACK_IMPORTED_MODULE_2__.m,breaks:12,scaleX:{variant:"linear",domain:"auto"},scaleY:{variant:"linear",domain:"auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"density"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.dA,{style:{fillOpacity:1}})]})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},LowResolution={name:"low resolution",args:{data:_decorators__WEBPACK_IMPORTED_MODULE_2__.m,breaks:5,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"counts"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.LY,{curve:"Step",style:{fillOpacity:0,strokeWidth:3}})]})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},HighResolution={name:"high resolution",args:{data:_decorators__WEBPACK_IMPORTED_MODULE_2__.m,breaks:40,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"counts"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.LY,{curve:"Step",style:{fillOpacity:0,strokeWidth:3}})]})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},AutoRescaling={name:"auto-rescaling",args:{data:_decorators__WEBPACK_IMPORTED_MODULE_2__.m,breaks:12,scaleX:{variant:"linear",domain:["auto","auto"]},scaleY:{variant:"linear",domain:"auto"},autoRescale:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AreaAndLegend,{})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.iT]},FixedScales={name:"fixed scales",args:{data:_decorators__WEBPACK_IMPORTED_MODULE_2__.m,breaks:12,scaleX:{variant:"linear",domain:"auto"},scaleY:{variant:"linear",domain:"auto"},autoRescale:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(AreaAndLegend,{})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.iT]};Counts.parameters=_extends({},Counts.parameters,{docs:_extends({},null==(_Counts$parameters=Counts.parameters)?void 0:_Counts$parameters.docs,{source:_extends({originalSource:"{\n  name: 'counts',\n  args: {\n    variant: 'count',\n    data: sampleData,\n    breaks: 12,\n    scaleX: {\n      variant: 'linear',\n      domain: ['auto', 'auto']\n    },\n    scaleY: {\n      variant: 'linear',\n      domain: 'auto'\n    },\n    children: <>\n                <Axis variant={'bottom'} label={'x (a.u.)'} />\n                <Axis variant={'left'} label={'counts'} />\n                <HistogramArea style={{\n        fillOpacity: 1\n      }} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Counts$parameters2=Counts.parameters)||null==(_Counts$parameters2$d=_Counts$parameters2.docs)?void 0:_Counts$parameters2$d.source)})}),Densities.parameters=_extends({},Densities.parameters,{docs:_extends({},null==(_Densities$parameters=Densities.parameters)?void 0:_Densities$parameters.docs,{source:_extends({originalSource:"{\n  name: 'densities',\n  args: {\n    variant: 'density',\n    data: sampleData,\n    breaks: 12,\n    scaleX: {\n      variant: 'linear',\n      domain: 'auto'\n    },\n    scaleY: {\n      variant: 'linear',\n      domain: 'auto'\n    },\n    children: <>\n                <Axis variant={'bottom'} label={'x (a.u.)'} />\n                <Axis variant={'left'} label={'density'} />\n                <HistogramArea style={{\n        fillOpacity: 1\n      }} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Densities$parameters2=Densities.parameters)||null==(_Densities$parameters3=_Densities$parameters2.docs)?void 0:_Densities$parameters3.source)})}),LowResolution.parameters=_extends({},LowResolution.parameters,{docs:_extends({},null==(_LowResolution$parame=LowResolution.parameters)?void 0:_LowResolution$parame.docs,{source:_extends({originalSource:"{\n  name: 'low resolution',\n  args: {\n    data: sampleData,\n    breaks: 5,\n    children: <>\n                <Axis variant={'bottom'} label={'x (a.u.)'} />\n                <Axis variant={'left'} label={'counts'} />\n                <HistogramCurve curve=\"Step\" style={{\n        fillOpacity: 0,\n        strokeWidth: 3\n      }} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_LowResolution$parame2=LowResolution.parameters)||null==(_LowResolution$parame3=_LowResolution$parame2.docs)?void 0:_LowResolution$parame3.source)})}),HighResolution.parameters=_extends({},HighResolution.parameters,{docs:_extends({},null==(_HighResolution$param=HighResolution.parameters)?void 0:_HighResolution$param.docs,{source:_extends({originalSource:"{\n  name: 'high resolution',\n  args: {\n    data: sampleData,\n    breaks: 40,\n    children: <>\n                <Axis variant={'bottom'} label={'x (a.u.)'} />\n                <Axis variant={'left'} label={'counts'} />\n                <HistogramCurve curve=\"Step\" style={{\n        fillOpacity: 0,\n        strokeWidth: 3\n      }} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_HighResolution$param2=HighResolution.parameters)||null==(_HighResolution$param3=_HighResolution$param2.docs)?void 0:_HighResolution$param3.source)})}),AutoRescaling.parameters=_extends({},AutoRescaling.parameters,{docs:_extends({},null==(_AutoRescaling$parame=AutoRescaling.parameters)?void 0:_AutoRescaling$parame.docs,{source:_extends({originalSource:"{\n  name: 'auto-rescaling',\n  args: {\n    data: sampleData,\n    breaks: 12,\n    scaleX: {\n      variant: 'linear',\n      domain: ['auto', 'auto']\n    },\n    scaleY: {\n      variant: 'linear',\n      domain: 'auto'\n    },\n    autoRescale: true,\n    children: <AreaAndLegend />\n  },\n  decorators: [ChartWithLegendSpaceDecorator]\n}"},null==(_AutoRescaling$parame2=AutoRescaling.parameters)||null==(_AutoRescaling$parame3=_AutoRescaling$parame2.docs)?void 0:_AutoRescaling$parame3.source)})}),FixedScales.parameters=_extends({},FixedScales.parameters,{docs:_extends({},null==(_FixedScales$paramete=FixedScales.parameters)?void 0:_FixedScales$paramete.docs,{source:_extends({originalSource:"{\n  name: 'fixed scales',\n  args: {\n    data: sampleData,\n    breaks: 12,\n    scaleX: {\n      variant: 'linear',\n      domain: 'auto'\n    },\n    scaleY: {\n      variant: 'linear',\n      domain: 'auto'\n    },\n    autoRescale: false,\n    children: <AreaAndLegend />\n  },\n  decorators: [ChartWithLegendSpaceDecorator]\n}"},null==(_FixedScales$paramete2=FixedScales.parameters)||null==(_FixedScales$paramete3=_FixedScales$paramete2.docs)?void 0:_FixedScales$paramete3.source)})});var __namedExportsOrder=["Counts","Densities","LowResolution","HighResolution","AutoRescaling","FixedScales"]},"./packages/xy/stories/histogram/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ee:()=>ChartDecorator,Nu:()=>ChartHistogramDecorator,iT:()=>ChartWithLegendSpaceDecorator,m:()=>sampleData});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateHistogramSeries=function generateHistogramSeries(id,n,generator){return{id,data:Array(n).fill(0).map((function(){return generator()}))}},randomNormalValue=function randomNormalValue(mean,sd){void 0===sd&&(sd=1);var u=1-Math.random(),v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)*sd+mean};try{randomNormalValue.displayName="randomNormalValue",randomNormalValue.__docgenInfo={description:"generate a random number from normal distribution\nmodified from:\nhttps://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve",displayName:"randomNormalValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/generators.tsx#randomNormalValue"]={docgenInfo:randomNormalValue.__docgenInfo,name:"randomNormalValue",path:"packages/xy/stories/histogram/generators.tsx#randomNormalValue"})}catch(__react_docgen_typescript_loader_error){}var src=__webpack_require__("./packages/xy/src/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),sampleData=[generateHistogramSeries("A",150,(function(){return randomNormalValue(-2,.8)})),generateHistogramSeries("B",120,(function(){return randomNormalValue(2,1.6)}))],ChartHistogramDecorator=function ChartHistogramDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.b5,{data:sampleData,breaks:[-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7],scaleX:{variant:"linear",domain:"auto"},scaleY:{variant:"linear",domain:"auto"},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"counts"}),Story()]})})};ChartHistogramDecorator.displayName="ChartHistogramDecorator";var ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:Story()})};ChartDecorator.displayName="ChartDecorator";var ChartWithLegendSpaceDecorator=function ChartWithLegendSpaceDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:Story()})};ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator";try{ChartHistogramDecorator.displayName="ChartHistogramDecorator",ChartHistogramDecorator.__docgenInfo={description:"",displayName:"ChartHistogramDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/decorators.tsx#ChartHistogramDecorator"]={docgenInfo:ChartHistogramDecorator.__docgenInfo,name:"ChartHistogramDecorator",path:"packages/xy/stories/histogram/decorators.tsx#ChartHistogramDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/xy/stories/histogram/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator",ChartWithLegendSpaceDecorator.__docgenInfo={description:"",displayName:"ChartWithLegendSpaceDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/decorators.tsx#ChartWithLegendSpaceDecorator"]={docgenInfo:ChartWithLegendSpaceDecorator.__docgenInfo,name:"ChartWithLegendSpaceDecorator",path:"packages/xy/stories/histogram/decorators.tsx#ChartWithLegendSpaceDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/stories/histogram/Histogram.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Histogram_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/xy/stories/histogram/Histogram.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"histogram",children:"Histogram"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Histogram_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Histogram"})," sets up a view for a scatter plot."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Histogram"})," is an organizational component and it does not actually draw any visual elements. However, it manages data representations that can be visualized with other components, for example ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HistogramPoints"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"HistogramCurve"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_Histogram_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data",children:"Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Data should be prepared as an array of objects. Each object should contain a string identifier ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"'id'"})," and an array ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"data"})," with numeric values. The pseudocode below demonstrates the required format."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{language:"javascript",code:'\n  [\n  {\n   "id": "alpha",\n   "data": [ 0.5, 2.5, -0.2, ...]\n  },\n  ...\n  ]\n  '}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," toggles between histograms displaying counts and densities."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Histogram_stories__WEBPACK_IMPORTED_MODULE_2__.Counts}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Histogram_stories__WEBPACK_IMPORTED_MODULE_2__.Densities}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"breaks",children:"Breaks"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["All histograms are generated by first placing raw data values into discrete bins.\nThe number and size of those bins is controlled via prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"breaks"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"breaks"})," can be set to a integer, and in this case the value is taken as a suggested number of bins.\nThe examples below display the same datasets using low and high bin resolution."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Histogram_stories__WEBPACK_IMPORTED_MODULE_2__.LowResolution}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Histogram_stories__WEBPACK_IMPORTED_MODULE_2__.HighResolution}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"breaks"})," can also accept a list of breakpoints.\nNote that data outside of the defined breakpoints will be omitted."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"axis-scaling",children:"Axis scaling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["When the vertical scale is determined automatically, prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"autoRescale"})," determines whether the automatic configuration is re-calculated when certain data series toggle in and out of view."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The examples below have automatic rescaling turned on (first example) and off (second example).\nClick on the legend to toggle visibility of the data series and observe the scale on the vertical axis."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Histogram_stories__WEBPACK_IMPORTED_MODULE_2__.AutoRescaling}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Histogram_stories__WEBPACK_IMPORTED_MODULE_2__.FixedScales})]})}}}}]);