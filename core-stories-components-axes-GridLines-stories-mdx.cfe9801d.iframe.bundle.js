"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[1021],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.$4,Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/core/stories/components/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lh:()=>ChartPlainDecorator,OR:()=>ChartViewDecorator,VK:()=>ChartBandViewDecorator,ee:()=>ChartDecorator,ke:()=>viewSeriesIndexesKeys,z5:()=>DivDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),viewSeriesIndexesKeys={seriesIndexes:{X:0,Y:1},keys:["alpha","beta","gamma"]},DivDecorator=function DivDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:Story()})};DivDecorator.displayName="DivDecorator";var ChartPlainDecorator=function ChartPlainDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:Story()})};ChartPlainDecorator.displayName="ChartPlainDecorator";var ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartViewDecorator=function ChartViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})})};ChartViewDecorator.displayName="ChartViewDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,40,60,80],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},scaleY:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"})]})})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";try{DivDecorator.displayName="DivDecorator",DivDecorator.__docgenInfo={description:"",displayName:"DivDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#DivDecorator"]={docgenInfo:DivDecorator.__docgenInfo,name:"DivDecorator",path:"packages/core/stories/components/decorators.tsx#DivDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartPlainDecorator.displayName="ChartPlainDecorator",ChartPlainDecorator.__docgenInfo={description:"",displayName:"ChartPlainDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartPlainDecorator"]={docgenInfo:ChartPlainDecorator.__docgenInfo,name:"ChartPlainDecorator",path:"packages/core/stories/components/decorators.tsx#ChartPlainDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/core/stories/components/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartViewDecorator.displayName="ChartViewDecorator",ChartViewDecorator.__docgenInfo={description:"",displayName:"ChartViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartViewDecorator"]={docgenInfo:ChartViewDecorator.__docgenInfo,name:"ChartViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/axes/GridLines.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,band:()=>band,betweenBands:()=>betweenBands,customPositions:()=>customPositions,dashedGridLines:()=>dashedGridLines,default:()=>__WEBPACK_DEFAULT_EXPORT__,gridX:()=>gridX,gridY:()=>gridY,lineExtent:()=>lineExtent,negativeLines:()=>negativeLines});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/stories/components/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{...args});const gridX=Template.bind({});gridX.storyName="grid x",gridX.args={variant:"x"},gridX.parameters={storySource:{source:"args => <GridLines {...args} />"}},gridX.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.OR];const gridY=Template.bind({});gridY.storyName="grid y",gridY.args={variant:"y"},gridY.parameters={storySource:{source:"args => <GridLines {...args} />"}},gridY.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.OR];const dashedGridLines=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"y",values:4,style:{strokeDasharray:"4 4",stroke:"#555555"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"x",values:5,style:{strokeDasharray:"4 4",stroke:"#555555"}})]});dashedGridLines.storyName="dashed grid lines",dashedGridLines.args={},dashedGridLines.parameters={storySource:{source:'<><GridLines variant="y" values={4} style={{\n    strokeDasharray: "4 4",\n    stroke: "#555555"\n  }} /><GridLines variant="x" values={5} style={{\n    strokeDasharray: "4 4",\n    stroke: "#555555"\n  }} /></>'}},dashedGridLines.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.OR];const negativeLines=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"y",values:5,style:{strokeWidth:2,stroke:"#ffffff"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"x",values:8,style:{strokeWidth:2,stroke:"#ffffff"}})]});negativeLines.storyName="negative lines",negativeLines.args={},negativeLines.parameters={storySource:{source:'<><GridLines variant="y" values={5} style={{\n    strokeWidth: 2,\n    stroke: "#ffffff"\n  }} /><GridLines variant="x" values={8} style={{\n    strokeWidth: 2,\n    stroke: "#ffffff"\n  }} /></>'}},negativeLines.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.OR];const customPositions=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"y",values:[0,10,20,50,80,90,100],style:{stroke:"#777777"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"x",values:[0,65,85,95,100],style:{stroke:"#777777"}})]});customPositions.storyName="custom positions",customPositions.args={},customPositions.parameters={storySource:{source:'<><GridLines variant={"y"} values={[0, 10, 20, 50, 80, 90, 100]} style={{\n    stroke: "#777777"\n  }} /><GridLines variant={"x"} values={[0, 65, 85, 95, 100]} style={{\n    stroke: "#777777"\n  }} /></>'}},customPositions.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.OR];const lineExtent=Template.bind({});lineExtent.storyName="line extent",lineExtent.args={expansion:[10,25],style:{stroke:"#555555"}},lineExtent.parameters={storySource:{source:"args => <GridLines {...args} />"}},lineExtent.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.OR];const band=Template.bind({});band.storyName="band",band.args={variant:"y",style:{stroke:"#aaaaaa"}},band.parameters={storySource:{source:"args => <GridLines {...args} />"}},band.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.VK];const betweenBands=Template.bind({});betweenBands.storyName="between bands",betweenBands.args={variant:"y",shift:[-.5,.5],style:{stroke:"#aaaaaa"}},betweenBands.parameters={storySource:{source:"args => <GridLines {...args} />"}},betweenBands.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.VK];const componentMeta={title:"Core/Components/Axes/GridLines",tags:["stories-mdx"],includeStories:["gridX","gridY","dashedGridLines","negativeLines","customPositions","lineExtent","band","betweenBands"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"gridlines",children:"GridLines"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Core/Components/Axes/GridLines"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"GridLines"})," draws a set of grid lines on a chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_2__.VJA}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["There are a number of predefined variants, which can be activated via the prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"variant"}),". Below, the grid lines are displayed on a gray background surface."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"grid x",args:{variant:"x"},component:_src__WEBPACK_IMPORTED_MODULE_2__.VJA,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.OR],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"grid y",args:{variant:"y"},component:_src__WEBPACK_IMPORTED_MODULE_2__.VJA,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.OR],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Grid lines can be styled using css. Below are examples with both horizontal and vertical gridlines."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"dashed grid lines",args:{},component:_src__WEBPACK_IMPORTED_MODULE_2__.VJA,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.OR],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"y",values:4,style:{strokeDasharray:"4 4",stroke:"#555555"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"x",values:5,style:{strokeDasharray:"4 4",stroke:"#555555"}})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"negative lines",args:{},component:_src__WEBPACK_IMPORTED_MODULE_2__.VJA,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.OR],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"y",values:5,style:{strokeWidth:2,stroke:"#ffffff"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"x",values:8,style:{strokeWidth:2,stroke:"#ffffff"}})]})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"line-positions",children:"Line positions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Positions can be set via the prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"values"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"custom positions",args:{},component:_src__WEBPACK_IMPORTED_MODULE_2__.VJA,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.OR],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"y",values:[0,10,20,50,80,90,100],style:{stroke:"#777777"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.VJA,{variant:"x",values:[0,65,85,95,100],style:{stroke:"#777777"}})]})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"expansion",children:"Expansion"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["By default, grid lines run across the entire chart view. It is possible to adjust their extent - make them longer or shorter - using the prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"expansion"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"line extent",args:{expansion:[10,25],style:{stroke:"#555555"}},component:_src__WEBPACK_IMPORTED_MODULE_2__.VJA,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.OR],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"band-scales",children:"Band scales"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["For band scales, grid lines appear at the center of each band by defaut. It is possible to move the guide lines using prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"shift"}),", which takes an array of values. The values are multiples of the bandwidth."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"band",args:{variant:"y",style:{stroke:"#aaaaaa"}},component:_src__WEBPACK_IMPORTED_MODULE_2__.VJA,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.VK],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"between bands",args:{variant:"y",shift:[-.5,.5],style:{stroke:"#aaaaaa"}},component:_src__WEBPACK_IMPORTED_MODULE_2__.VJA,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.VK],children:Template.bind({})})]})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);