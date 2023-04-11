"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[926],{"./packages/xy/stories/histogram/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ee:()=>ChartDecorator,Nu:()=>ChartHistogramDecorator,iT:()=>ChartWithLegendSpaceDecorator,m:()=>sampleData});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateHistogramSeries=function generateHistogramSeries(id,n,generator){return{id,data:Array(n).fill(0).map((function(){return generator()}))}},randomNormalValue=function randomNormalValue(mean,sd){void 0===sd&&(sd=1);var u=1-Math.random(),v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)*sd+mean};try{randomNormalValue.displayName="randomNormalValue",randomNormalValue.__docgenInfo={description:"generate a random number from normal distribution\nmodified from:\nhttps://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve",displayName:"randomNormalValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/generators.tsx#randomNormalValue"]={docgenInfo:randomNormalValue.__docgenInfo,name:"randomNormalValue",path:"packages/xy/stories/histogram/generators.tsx#randomNormalValue"})}catch(__react_docgen_typescript_loader_error){}var src=__webpack_require__("./packages/xy/src/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),sampleData=[generateHistogramSeries("A",150,(function(){return randomNormalValue(-2,.8)})),generateHistogramSeries("B",150,(function(){return randomNormalValue(2,1.6)}))],ChartHistogramDecorator=function ChartHistogramDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.b5,{data:sampleData,breaks:[-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7],scaleX:{variant:"linear",domain:"auto"},scaleY:{variant:"linear",domain:"auto"},children:[(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"bottom",label:"x (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"left",label:"counts"}),Story()]})})};ChartHistogramDecorator.displayName="ChartHistogramDecorator";var ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:Story()})};ChartDecorator.displayName="ChartDecorator";var ChartWithLegendSpaceDecorator=function ChartWithLegendSpaceDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL,{size:[400,300],padding:[40,140,60,60],style:{display:"inline-block"},children:Story()})};ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator";try{ChartHistogramDecorator.displayName="ChartHistogramDecorator",ChartHistogramDecorator.__docgenInfo={description:"",displayName:"ChartHistogramDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/decorators.tsx#ChartHistogramDecorator"]={docgenInfo:ChartHistogramDecorator.__docgenInfo,name:"ChartHistogramDecorator",path:"packages/xy/stories/histogram/decorators.tsx#ChartHistogramDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/xy/stories/histogram/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithLegendSpaceDecorator.displayName="ChartWithLegendSpaceDecorator",ChartWithLegendSpaceDecorator.__docgenInfo={description:"",displayName:"ChartWithLegendSpaceDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/stories/histogram/decorators.tsx#ChartWithLegendSpaceDecorator"]={docgenInfo:ChartWithLegendSpaceDecorator.__docgenInfo,name:"ChartWithLegendSpaceDecorator",path:"packages/xy/stories/histogram/decorators.tsx#ChartWithLegendSpaceDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/stories/histogram/HistogramCurve.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,linearCurve:()=>linearCurve,multipleSeries:()=>multipleSeries,stepCurve:()=>stepCurve});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/stories/histogram/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.LY,{...args});const linearCurve=Template.bind({});linearCurve.storyName="linear curve",linearCurve.args={curve:"MonotoneX"},linearCurve.parameters={storySource:{source:"args => <HistogramCurve {...args} />"}},linearCurve.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.Nu];const stepCurve=Template.bind({});stepCurve.storyName="step curve",stepCurve.args={curve:"Step"},stepCurve.parameters={storySource:{source:"args => <HistogramCurve {...args} />"}},stepCurve.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.Nu];const multipleSeries=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.b5,{data:_decorators__WEBPACK_IMPORTED_MODULE_4__.m,breaks:[-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7],scaleX:{variant:"linear",domain:"auto"},scaleY:{variant:"linear",domain:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"left",label:"counts"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.LY,{ids:["A"],curve:"Step",style:{strokeWidth:3}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.LY,{ids:["B"],curve:"MonotoneX",style:{strokeDasharray:"6 6",strokeWidth:2}})]})});multipleSeries.storyName="multiple series",multipleSeries.parameters={storySource:{source:'<Chart size={[400, 300]} padding={[40, 40, 60, 60]} style={{\n  display: "inline-block"\n}}><Histogram data={sampleData} breaks={[-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]} scaleX={{\n    variant: "linear",\n    domain: "auto"\n  }} scaleY={{\n    variant: "linear",\n    domain: "auto"\n  }}><Axis variant={"bottom"} label={"x (a.u.)"} /><Axis variant={"left"} label={"counts"} /><HistogramCurve ids={["A"]} curve="Step" style={{\n      strokeWidth: 3\n    }} /><HistogramCurve ids={["B"]} curve="MonotoneX" style={{\n      strokeDasharray: "6 6",\n      strokeWidth: 2\n    }} /></Histogram></Chart>'}};const componentMeta={title:"Addons/XY/Histograms/HistogramCurve",tags:["stories-mdx"],includeStories:["linearCurve","stepCurve","multipleSeries"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1,{id:"histogramcurve",children:"HistogramCurve"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/XY/Histograms/HistogramCurve"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"HistogramCurve"})," draws curves that represent histograms."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_3__.LY}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"curves",children:"Curves"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["All histograms are computed from a binned representation of data. Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"curve"})," controls the type of interpolation between bins."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["The curve settings that are most appropriate for histograms are 'MonotoneX' and 'Step'.\nThese interpolations guarantee that the the outline will remain above the baseline, i.e. convey positive counts/densities. The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Step"})," curve type conveys the binning strategy."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"linear curve",args:{curve:"MonotoneX"},component:_src__WEBPACK_IMPORTED_MODULE_3__.LY,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.Nu],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"step curve",args:{curve:"Step"},component:_src__WEBPACK_IMPORTED_MODULE_3__.LY,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.Nu],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"multiple-series",children:"Multiple series"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["Use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"HistogramCurve"})," multiple times to overlay multiple series. Each series can have a distinct curve setting and css style."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"multiple series",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.b5,{data:_decorators__WEBPACK_IMPORTED_MODULE_4__.m,breaks:[-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7],scaleX:{variant:"linear",domain:"auto"},scaleY:{variant:"linear",domain:"auto"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.RD,{variant:"left",label:"counts"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.LY,{ids:["A"],curve:"Step",style:{strokeWidth:3}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.LY,{ids:["B"],curve:"MonotoneX",style:{strokeDasharray:"6 6",strokeWidth:2}})]})})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);