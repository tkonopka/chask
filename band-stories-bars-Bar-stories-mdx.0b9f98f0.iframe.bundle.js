"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9449],{"./packages/band/stories/bars/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FF:()=>ChartBarH0S1Decorator,GN:()=>ChartHorizontalGroupedBarDecorator,MY:()=>commonBarProps,_Y:()=>ChartWithLegendDecorator,al:()=>ChartForBarsLabelsDecorator,gE:()=>onBarsClick,tD:()=>ChartHorizontalStackedBarDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/index.tsx"),_dataGroups_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/dataGroups.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonBarProps={data:_dataGroups_json__WEBPACK_IMPORTED_MODULE_2__,keys:["x","y","z"],scaleIndex:{variant:"band",domain:["alpha","beta","gamma"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},barsLabelsData=[{id:"alpha",value:85},{id:"beta",value:60},{id:"gamma",value:50},{id:"delta",value:25},{id:"epsilon",value:5}],ChartWithLegendDecorator=function ChartWithLegendDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,300],padding:[40,40,80,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tg,{variant:"inner"}),Story()]})};ChartWithLegendDecorator.displayName="ChartWithLegendDecorator";var ChartBarH0S1Decorator=function ChartBarH0S1Decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!1,variant:"stacked",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJ,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RD,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RD,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartBarH0S1Decorator.displayName="ChartBarH0S1Decorator";var ChartHorizontalGroupedBarDecorator=function ChartHorizontalGroupedBarDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,240],padding:[60,60,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!0,variant:"grouped",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJ,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RD,{variant:"top",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RD,{variant:"left"}),Story()]}))})};ChartHorizontalGroupedBarDecorator.displayName="ChartHorizontalGroupedBarDecorator";var ChartHorizontalStackedBarDecorator=function ChartHorizontalStackedBarDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,240],padding:[60,60,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!0,variant:"stacked",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJ,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RD,{variant:"top",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RD,{variant:"left"}),Story()]}))})};ChartHorizontalStackedBarDecorator.displayName="ChartHorizontalStackedBarDecorator";var ChartForBarsLabelsDecorator=function ChartForBarsLabelsDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,220],padding:[30,40,30,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,{data:barsLabelsData,keys:["value"],horizontal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJ,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RD,{variant:"left",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.yA,{variant:"left",tickSize:0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),Story()]})})};ChartForBarsLabelsDecorator.displayName="ChartForBarsLabelsDecorator";var onBarsClick=function onBarsClick(data){console.log("clicked: "+JSON.stringify(data))};try{ChartWithLegendDecorator.displayName="ChartWithLegendDecorator",ChartWithLegendDecorator.__docgenInfo={description:"",displayName:"ChartWithLegendDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartWithLegendDecorator"]={docgenInfo:ChartWithLegendDecorator.__docgenInfo,name:"ChartWithLegendDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartWithLegendDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBarH0S1Decorator.displayName="ChartBarH0S1Decorator",ChartBarH0S1Decorator.__docgenInfo={description:"",displayName:"ChartBarH0S1Decorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartBarH0S1Decorator"]={docgenInfo:ChartBarH0S1Decorator.__docgenInfo,name:"ChartBarH0S1Decorator",path:"packages/band/stories/bars/decorators.tsx#ChartBarH0S1Decorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalGroupedBarDecorator.displayName="ChartHorizontalGroupedBarDecorator",ChartHorizontalGroupedBarDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalGroupedBarDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartHorizontalGroupedBarDecorator"]={docgenInfo:ChartHorizontalGroupedBarDecorator.__docgenInfo,name:"ChartHorizontalGroupedBarDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartHorizontalGroupedBarDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalStackedBarDecorator.displayName="ChartHorizontalStackedBarDecorator",ChartHorizontalStackedBarDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalStackedBarDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartHorizontalStackedBarDecorator"]={docgenInfo:ChartHorizontalStackedBarDecorator.__docgenInfo,name:"ChartHorizontalStackedBarDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartHorizontalStackedBarDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForBarsLabelsDecorator.displayName="ChartForBarsLabelsDecorator",ChartForBarsLabelsDecorator.__docgenInfo={description:"",displayName:"ChartForBarsLabelsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartForBarsLabelsDecorator"]={docgenInfo:ChartForBarsLabelsDecorator.__docgenInfo,name:"ChartForBarsLabelsDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartForBarsLabelsDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onBarsClick.displayName="onBarsClick",onBarsClick.__docgenInfo={description:"",displayName:"onBarsClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#onBarsClick"]={docgenInfo:onBarsClick.__docgenInfo,name:"onBarsClick",path:"packages/band/stories/bars/decorators.tsx#onBarsClick"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ChartDecorator,A:()=>dataRawValues});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateUniformValues=function generateUniformValues(n,interval){var size=interval[1]-interval[0];return Array(n).fill(0).map((function(){return interval[0]+Math.random()*size}))},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsxs)(chsk_core_es.kL,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tg,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var dataRawValues=[{id:"alpha",x:generateUniformValues(30,[0,10]),y:generateUniformValues(30,[2,16])},{id:"beta",x:generateUniformValues(30,[5,15]),y:generateUniformValues(30,[10,20])}];try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/band/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/bars/Bar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BarsAndLegend:()=>BarsAndLegend,Template:()=>Template,autoRescaling:()=>autoRescaling,customSpacing:()=>customSpacing,default:()=>Bar_stories,equalSpacing:()=>equalSpacing,fixedScales:()=>fixedScales,horizontalGrouped:()=>horizontalGrouped,horizontalStacked:()=>horizontalStacked,largeInnerPadding:()=>largeInnerPadding,largeInternalPadding:()=>largeInternalPadding,largeOuterPadding:()=>largeOuterPadding,missingKeys:()=>missingKeys,nullInternalPadding:()=>nullInternalPadding,singleKey:()=>singleKey,twoKeys:()=>twoKeys,verticalGrouped:()=>verticalGrouped,verticalStacked:()=>verticalStacked,zeroInternalPadding:()=>zeroInternalPadding});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),src=__webpack_require__("./packages/band/src/index.tsx"),decorators=__webpack_require__("./packages/band/stories/decorators.tsx");const dataSingles_namespaceObject=JSON.parse('[{"id":"A","value":95},{"id":"B","value":76},{"id":"C","value":65},{"id":"D","value":81},{"id":"E","value":31},{"id":"F","value":26},{"id":"G","value":47}]'),dataMissing_namespaceObject=JSON.parse('[{"id":"alpha","x":85},{"id":"beta","y":45},{"id":"gamma","z":60}]');var bars_decorators=__webpack_require__("./packages/band/stories/bars/decorators.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,jsx_runtime.jsx)(src.$Q,{...args}),BarsAndLegend=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src.Ll,{}),(0,jsx_runtime.jsx)(chsk_core_es.RD,{variant:"left",label:"values (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.De,{position:[160,200],size:[150,20],positionUnits:"absolute",anchor:[.5,0],horizontal:!0,itemPadding:[2,2,2,2],itemSize:[50,20],firstOffset:[0,0],title:""})]});const verticalGrouped=Template.bind({});verticalGrouped.storyName="vertical, grouped",verticalGrouped.args={...bars_decorators.MY,variant:"grouped",children:(0,jsx_runtime.jsx)(src.Ll,{})},verticalGrouped.parameters={storySource:{source:"args => <Bar {...args} />"}},verticalGrouped.decorators=[decorators.e];const verticalStacked=Template.bind({});verticalStacked.storyName="vertical, stacked",verticalStacked.args={...bars_decorators.MY,variant:"stacked",children:(0,jsx_runtime.jsx)(src.Ll,{})},verticalStacked.parameters={storySource:{source:"args => <Bar {...args} />"}},verticalStacked.decorators=[decorators.e];const horizontalGrouped=Template.bind({});horizontalGrouped.storyName="horizontal, grouped",horizontalGrouped.args={...bars_decorators.MY,horizontal:!0,variant:"grouped",children:(0,jsx_runtime.jsx)(src.Ll,{})},horizontalGrouped.parameters={storySource:{source:"args => <Bar {...args} />"}},horizontalGrouped.decorators=[decorators.e];const horizontalStacked=Template.bind({});horizontalStacked.storyName="horizontal, stacked",horizontalStacked.args={...bars_decorators.MY,horizontal:!0,variant:"stacked",children:(0,jsx_runtime.jsx)(src.Ll,{})},horizontalStacked.parameters={storySource:{source:"args => <Bar {...args} />"}},horizontalStacked.decorators=[decorators.e];const largeOuterPadding=Template.bind({});largeOuterPadding.storyName="large outer padding",largeOuterPadding.args={...bars_decorators.MY,variant:"stacked",horizontal:!1,scaleIndex:{variant:"band",paddingOuter:.8,paddingInner:.1},children:(0,jsx_runtime.jsx)(src.Ll,{})},largeOuterPadding.parameters={storySource:{source:"args => <Bar {...args} />"}},largeOuterPadding.decorators=[decorators.e];const largeInnerPadding=Template.bind({});largeInnerPadding.storyName="large inner padding",largeInnerPadding.args={...bars_decorators.MY,variant:"stacked",horizontal:!1,scaleIndex:{variant:"band",paddingOuter:.1,paddingInner:.8},children:(0,jsx_runtime.jsx)(src.Ll,{})},largeInnerPadding.parameters={storySource:{source:"args => <Bar {...args} />"}},largeInnerPadding.decorators=[decorators.e];const largeInternalPadding=Template.bind({});largeInternalPadding.storyName="large internal padding",largeInternalPadding.args={...bars_decorators.MY,horizontal:!1,paddingInternal:.8,children:(0,jsx_runtime.jsx)(src.Ll,{})},largeInternalPadding.parameters={storySource:{source:"args => <Bar {...args} />"}},largeInternalPadding.decorators=[decorators.e];const zeroInternalPadding=Template.bind({});zeroInternalPadding.storyName="zero internal padding",zeroInternalPadding.args={...bars_decorators.MY,horizontal:!1,paddingInternal:0,children:(0,jsx_runtime.jsx)(src.Ll,{})},zeroInternalPadding.parameters={storySource:{source:"args => <Bar {...args} />"}},zeroInternalPadding.decorators=[decorators.e];const twoKeys=Template.bind({});twoKeys.storyName="two keys",twoKeys.args={...bars_decorators.MY,horizontal:!1,keys:["x","y"],children:(0,jsx_runtime.jsx)(src.Ll,{})},twoKeys.parameters={storySource:{source:"args => <Bar {...args} />"}},twoKeys.decorators=[decorators.e];const singleKey=Template.bind({});singleKey.storyName="single key",singleKey.args={...bars_decorators.MY,horizontal:!1,keys:["x"],children:(0,jsx_runtime.jsx)(src.Ll,{})},singleKey.parameters={storySource:{source:"args => <Bar {...args} />"}},singleKey.decorators=[decorators.e];const equalSpacing=Template.bind({});equalSpacing.storyName="equal spacing",equalSpacing.args={...bars_decorators.MY,data:dataSingles_namespaceObject,keys:["value"],horizontal:!1,scaleIndex:{variant:"band",domain:["A","B","C","D","E","F","G"],padding:.2},children:(0,jsx_runtime.jsx)(src.Ll,{})},equalSpacing.parameters={storySource:{source:"args => <Bar {...args} />"}},equalSpacing.decorators=[decorators.e];const customSpacing=Template.bind({});customSpacing.storyName="custom spacing",customSpacing.args={...bars_decorators.MY,data:dataSingles_namespaceObject,keys:["value"],horizontal:!1,scaleIndex:{variant:"band",domain:["A","B","C","D","E","F","G"],padding:.2,extraPadding:{E:.9}},children:(0,jsx_runtime.jsx)(src.Ll,{})},customSpacing.parameters={storySource:{source:"args => <Bar {...args} />"}},customSpacing.decorators=[decorators.e];const missingKeys=Template.bind({});missingKeys.storyName="missing keys",missingKeys.args={...bars_decorators.MY,variant:"stacked",data:dataMissing_namespaceObject,horizontal:!1,scaleIndex:{variant:"band",padding:.2},children:(0,jsx_runtime.jsx)(src.Ll,{})},missingKeys.parameters={storySource:{source:"args => <Bar {...args} />"}},missingKeys.decorators=[decorators.e];const nullInternalPadding=Template.bind({});nullInternalPadding.storyName="null internal padding",nullInternalPadding.args={...bars_decorators.MY,variant:"layered",data:dataMissing_namespaceObject,horizontal:!1,scaleIndex:{variant:"band",padding:.2},children:(0,jsx_runtime.jsx)(src.Ll,{})},nullInternalPadding.parameters={storySource:{source:"args => <Bar {...args} />"}},nullInternalPadding.decorators=[decorators.e];const autoRescaling=Template.bind({});autoRescaling.storyName="auto-rescaling",autoRescaling.args={...bars_decorators.MY,variant:"stacked",data:dataMissing_namespaceObject,horizontal:!1,scaleIndex:{variant:"band",padding:.2},autoRescale:!0,children:(0,jsx_runtime.jsx)(BarsAndLegend,{})},autoRescaling.parameters={storySource:{source:"args => <Bar {...args} />"}},autoRescaling.decorators=[bars_decorators._Y];const fixedScales=Template.bind({});fixedScales.storyName="fixed scales",fixedScales.args={...bars_decorators.MY,variant:"stacked",data:dataMissing_namespaceObject,horizontal:!1,scaleIndex:{variant:"band",padding:.2},autoRescale:!1,children:(0,jsx_runtime.jsx)(BarsAndLegend,{})},fixedScales.parameters={storySource:{source:"args => <Bar {...args} />"}},fixedScales.decorators=[bars_decorators._Y];const componentMeta={title:"Addons/Band/Bars/Bar",tags:["stories-mdx"],includeStories:["verticalGrouped","verticalStacked","horizontalGrouped","horizontalStacked","largeOuterPadding","largeInnerPadding","largeInternalPadding","zeroInternalPadding","twoKeys","singleKey","equalSpacing","customSpacing","missingKeys","nullInternalPadding","autoRescaling","fixedScales"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"bar",children:"Bar"}),"\n",(0,jsx_runtime.jsx)(dist.h_,{title:"Addons/Band/Bars/Bar"}),"\n","\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Bar"})," sets up a view for a bar chart. ",(0,jsx_runtime.jsx)(_components.code,{children:"Bar"})," itself does not draw any visible elements, but it pre-processes a dataset so that the data can be visualized by other components, for example ",(0,jsx_runtime.jsx)(_components.code,{children:"Bars"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:src.$Q}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"data",children:"Data"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Data should be prepared as an array of objects. All objects should contain a string identifier ",(0,jsx_runtime.jsx)(_components.code,{children:"'id'"}),". Other keys with numeric values can be used to display bars."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The pseudocode below shows one data item with an identifier and three numeric values."}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{language:"javascript",code:'\n[\n  {\n    "id": "alpha",\n    "x": 55,\n    "y": 35,\n    "z": 10\n  },\n  ...\n]\n'}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Prop `variant' specifies whether the bar chart should be organized with groups of bars displayed side-by-side, or stacked one after the other."}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{name:"vertical, grouped",args:{...bars_decorators.MY,variant:"grouped",children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"vertical, stacked",args:{...bars_decorators.MY,variant:"stacked",children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"orientation",children:"Orientation"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Prop ",(0,jsx_runtime.jsx)(_components.code,{children:"horizontal"})," determines the orientation of the bars."]}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{name:"horizontal, grouped",args:{...bars_decorators.MY,horizontal:!0,variant:"grouped",children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"horizontal, stacked",args:{...bars_decorators.MY,horizontal:!0,variant:"stacked",children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"band-padding",children:"Band padding"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The specification of the band axis through prop ",(0,jsx_runtime.jsx)(_components.code,{children:"scaleIndex"})," controls the spacing between the edges and the bars (",(0,jsx_runtime.jsx)(_components.code,{children:"paddingOuter"}),") and between groups of bars (",(0,jsx_runtime.jsx)(_components.code,{children:"paddingInner"}),")."]}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{name:"large outer padding",args:{...bars_decorators.MY,variant:"stacked",horizontal:!1,scaleIndex:{variant:"band",paddingOuter:.8,paddingInner:.1},children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"large inner padding",args:{...bars_decorators.MY,variant:"stacked",horizontal:!1,scaleIndex:{variant:"band",paddingOuter:.1,paddingInner:.8},children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"internal-padding",children:"Internal padding"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["For grouped bars, an additional padding prop ",(0,jsx_runtime.jsx)(_components.code,{children:"paddingInternal"})," controls the space between bars within one group."]}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{name:"large internal padding",args:{...bars_decorators.MY,horizontal:!1,paddingInternal:.8,children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"zero internal padding",args:{...bars_decorators.MY,horizontal:!1,paddingInternal:0,children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"keys",children:"Keys"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The prop ",(0,jsx_runtime.jsx)(_components.code,{children:"keys"})," determines the number of subgroups that are incorporated into the chart. Below, both examples use a grouped bar layout based on the same data as above. The second chart uses a single key, and thus displays a simple bar chart."]}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{name:"two keys",args:{...bars_decorators.MY,horizontal:!1,keys:["x","y"],children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"single key",args:{...bars_decorators.MY,horizontal:!1,keys:["x"],children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"custom-spacing",children:"Custom spacing"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["By default, bars are arranged with equal spacing along the axis. It is possible to customize the spacing through the specification of the band scale, with prop ",(0,jsx_runtime.jsx)(_components.code,{children:"scaleIndex"}),". Below, the examples use a dataset with seven bars, and the second example applies extra padding before one of the bands."]}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{name:"equal spacing",args:{...bars_decorators.MY,data:dataSingles_namespaceObject,keys:["value"],horizontal:!1,scaleIndex:{variant:"band",domain:["A","B","C","D","E","F","G"],padding:.2},children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"custom spacing",args:{...bars_decorators.MY,data:dataSingles_namespaceObject,keys:["value"],horizontal:!1,scaleIndex:{variant:"band",domain:["A","B","C","D","E","F","G"],padding:.2,extraPadding:{E:.9}},children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"missing-data-items",children:"Missing data items"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Datasets may have missing/omitted values. For example, the dataset below has three data series with different keys. Key 'x' is present for series 'alpha' but it is not present for series 'beta'."}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{language:"javascript",code:'\n[\n  {\n    "id": "alpha",\n    "x": 85\n  },\n  {\n    "id": "beta",\n    "y": 45\n  },\n  {\n    "id": "gamma",\n    "z": 60\n  }\n]\n'}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Bars that would correspond to id-key combinations with missing values are omitted.\nThis behavior can be used to draw a 'stacked' chart that appears like a regular bar chart, but where bars appear with different colors (below, left).\nAnother way to achieve the same result is to set prop ",(0,jsx_runtime.jsx)(_components.code,{children:"variant"})," to 'layered'.\nThis variant arranges all elements associated with one id on top of each other (below, right)."]}),"\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{name:"missing keys",args:{...bars_decorators.MY,variant:"stacked",data:dataMissing_namespaceObject,horizontal:!1,scaleIndex:{variant:"band",padding:.2},children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"null internal padding",args:{...bars_decorators.MY,variant:"layered",data:dataMissing_namespaceObject,horizontal:!1,scaleIndex:{variant:"band",padding:.2},children:(0,jsx_runtime.jsx)(src.Ll,{})},component:src.$Q,decorators:[decorators.e],children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"axis-scaling",children:"Axis Scaling"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Scales on the axes can be set manually, or determined automatically based on the data."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["When the scale on the value axis is set to automatic, it will automatically rescale/adjust when the data changes or when certain keys are toggled using a legend (below, left). The automatic rescaling can be disabled using prop ",(0,jsx_runtime.jsx)(_components.code,{children:"autoRescale"})," (below, right)."]}),"\n","\n",(0,jsx_runtime.jsxs)(dist.Xz,{children:[(0,jsx_runtime.jsx)(dist.oG,{name:"auto-rescaling",args:{...bars_decorators.MY,variant:"stacked",data:dataMissing_namespaceObject,horizontal:!1,scaleIndex:{variant:"band",padding:.2},autoRescale:!0,children:(0,jsx_runtime.jsx)(BarsAndLegend,{})},component:src.$Q,decorators:[bars_decorators._Y],children:Template.bind({})}),(0,jsx_runtime.jsx)(dist.oG,{name:"fixed scales",args:{...bars_decorators.MY,variant:"stacked",data:dataMissing_namespaceObject,horizontal:!1,scaleIndex:{variant:"band",padding:.2},autoRescale:!1,children:(0,jsx_runtime.jsx)(BarsAndLegend,{})},component:src.$Q,decorators:[bars_decorators._Y],children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"negative-values",children:"Negative values"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Bar"})," component can accept negative values. Note, however, for data that contain both positive and negative values for an index, bars may appear overlapping."]})]})}}};const Bar_stories=componentMeta},"./packages/band/stories/dataGroups.json":module=>{module.exports=JSON.parse('[{"id":"alpha","label":"alpha","x":55,"y":35,"z":10},{"id":"beta","label":"beta","x":35,"y":25,"z":15},{"id":"gamma","label":"gamma","x":15,"y":25,"z":35}]')}}]);