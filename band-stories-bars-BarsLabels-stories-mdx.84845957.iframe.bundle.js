"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[402],{"./packages/band/stories/bars/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FF:()=>ChartBarH0S1Decorator,GN:()=>ChartHorizontalGroupedBarDecorator,MY:()=>commonBarProps,_Y:()=>ChartWithLegendDecorator,al:()=>ChartForBarsLabelsDecorator,gE:()=>onBarsClick,tD:()=>ChartHorizontalStackedBarDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/index.tsx"),_dataGroups_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/dataGroups.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonBarProps={data:_dataGroups_json__WEBPACK_IMPORTED_MODULE_2__,keys:["x","y","z"],scaleIndex:{variant:"band",domain:["alpha","beta","gamma"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},barsLabelsData=[{id:"alpha",value:85},{id:"beta",value:60},{id:"gamma",value:50},{id:"delta",value:25},{id:"epsilon",value:5}],ChartWithLegendDecorator=function ChartWithLegendDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,80,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartWithLegendDecorator.displayName="ChartWithLegendDecorator";var ChartBarH0S1Decorator=function ChartBarH0S1Decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!1,variant:"stacked",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartBarH0S1Decorator.displayName="ChartBarH0S1Decorator";var ChartHorizontalGroupedBarDecorator=function ChartHorizontalGroupedBarDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,240],padding:[60,60,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!0,variant:"grouped",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"top",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]}))})};ChartHorizontalGroupedBarDecorator.displayName="ChartHorizontalGroupedBarDecorator";var ChartHorizontalStackedBarDecorator=function ChartHorizontalStackedBarDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,240],padding:[60,60,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!0,variant:"stacked",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"top",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]}))})};ChartHorizontalStackedBarDecorator.displayName="ChartHorizontalStackedBarDecorator";var ChartForBarsLabelsDecorator=function ChartForBarsLabelsDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,220],padding:[30,40,30,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,{data:barsLabelsData,keys:["value"],horizontal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.yAs,{variant:"left",tickSize:0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),Story()]})})};ChartForBarsLabelsDecorator.displayName="ChartForBarsLabelsDecorator";var onBarsClick=function onBarsClick(data){console.log("clicked: "+JSON.stringify(data))};try{ChartWithLegendDecorator.displayName="ChartWithLegendDecorator",ChartWithLegendDecorator.__docgenInfo={description:"",displayName:"ChartWithLegendDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartWithLegendDecorator"]={docgenInfo:ChartWithLegendDecorator.__docgenInfo,name:"ChartWithLegendDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartWithLegendDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBarH0S1Decorator.displayName="ChartBarH0S1Decorator",ChartBarH0S1Decorator.__docgenInfo={description:"",displayName:"ChartBarH0S1Decorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartBarH0S1Decorator"]={docgenInfo:ChartBarH0S1Decorator.__docgenInfo,name:"ChartBarH0S1Decorator",path:"packages/band/stories/bars/decorators.tsx#ChartBarH0S1Decorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalGroupedBarDecorator.displayName="ChartHorizontalGroupedBarDecorator",ChartHorizontalGroupedBarDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalGroupedBarDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartHorizontalGroupedBarDecorator"]={docgenInfo:ChartHorizontalGroupedBarDecorator.__docgenInfo,name:"ChartHorizontalGroupedBarDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartHorizontalGroupedBarDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalStackedBarDecorator.displayName="ChartHorizontalStackedBarDecorator",ChartHorizontalStackedBarDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalStackedBarDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartHorizontalStackedBarDecorator"]={docgenInfo:ChartHorizontalStackedBarDecorator.__docgenInfo,name:"ChartHorizontalStackedBarDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartHorizontalStackedBarDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForBarsLabelsDecorator.displayName="ChartForBarsLabelsDecorator",ChartForBarsLabelsDecorator.__docgenInfo={description:"",displayName:"ChartForBarsLabelsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartForBarsLabelsDecorator"]={docgenInfo:ChartForBarsLabelsDecorator.__docgenInfo,name:"ChartForBarsLabelsDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartForBarsLabelsDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onBarsClick.displayName="onBarsClick",onBarsClick.__docgenInfo={description:"",displayName:"onBarsClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#onBarsClick"]={docgenInfo:onBarsClick.__docgenInfo,name:"onBarsClick",path:"packages/band/stories/bars/decorators.tsx#onBarsClick"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/bars/BarsLabels.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,allLabelsOutsideBars:()=>allLabelsOutsideBars,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,nearBaseline:()=>nearBaseline,nearEdge:()=>nearEdge,selectedLabels:()=>selectedLabels,someLabelsOutsideBars:()=>someLabelsOutsideBars});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./packages/core/dist/chsk-core.es.js"),__webpack_require__("./packages/band/src/index.tsx")),_decorators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/stories/bars/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.vW,{...args});const defaultStory=Template.bind({});defaultStory.storyName="default",defaultStory.args={minSize:[40,10]},defaultStory.parameters={storySource:{source:"args => <BarsLabels {...args} />"}},defaultStory.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.al];const nearBaseline=Template.bind({});nearBaseline.storyName="near baseline",nearBaseline.args={padding:[2,8,2,8],align:[0,.5],style:{fill:"#ffffff",textAnchor:"start"},styleOuter:{fill:"#222222",textAnchor:"start"}},nearBaseline.parameters={storySource:{source:"args => <BarsLabels {...args} />"}},nearBaseline.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.al];const nearEdge=Template.bind({});nearEdge.storyName="near edge",nearEdge.args={padding:[2,8,2,8],align:[1,.5],style:{fill:"#ffffff",textAnchor:"end"},styleOuter:{fill:"#222222",textAnchor:"start"}},nearEdge.parameters={storySource:{source:"args => <BarsLabels {...args} />"}},nearEdge.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.al];const someLabelsOutsideBars=Template.bind({});someLabelsOutsideBars.storyName="some labels outside bars",someLabelsOutsideBars.args={padding:[2,8,2,8],align:[0,.5],showOuter:!0,style:{fill:"#ffffff",textAnchor:"start"},styleOuter:{fill:"#222222",textAnchor:"start"}},someLabelsOutsideBars.parameters={storySource:{source:"args => <BarsLabels {...args} />"}},someLabelsOutsideBars.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.al];const allLabelsOutsideBars=Template.bind({});allLabelsOutsideBars.storyName="all labels outside bars",allLabelsOutsideBars.args={padding:[2,0,2,0],align:[1,.5],minSize:[0,0],offset:[8,0],style:{fill:"#222222",textAnchor:"start"}},allLabelsOutsideBars.parameters={storySource:{source:"args => <BarsLabels {...args} />"}},allLabelsOutsideBars.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.al];const selectedLabels=Template.bind({});selectedLabels.storyName="selected labels",selectedLabels.args={ids:["beta","delta"],padding:[2,8,2,8],align:[0,.5],showOuter:!0,style:{fill:"#ffffff",textAnchor:"start"}},selectedLabels.parameters={storySource:{source:"args => <BarsLabels {...args} />"}},selectedLabels.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.al];const componentMeta={title:"Addons/Band/Bars/BarsLabels",tags:["stories-mdx"],includeStories:["defaultStory","nearBaseline","nearEdge","someLabelsOutsideBars","allLabelsOutsideBars","selectedLabels"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1,{id:"barslabels",children:"BarsLabels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/Band/Bars/BarsLabels"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"BarsLabels"})," draws a set of labels on a bar chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_3__.vW}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"alignment",children:"Alignment"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"BarsLabels"})," places labels at the center of bars."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"default",args:{minSize:[40,10]},component:_src__WEBPACK_IMPORTED_MODULE_3__.vW,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.al],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"align"})," sets the horizontal and vertical alignment within the bar.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"padding"})," controls the space between the bar edge and the text."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"near baseline",args:{padding:[2,8,2,8],align:[0,.5],style:{fill:"#ffffff",textAnchor:"start"},styleOuter:{fill:"#222222",textAnchor:"start"}},component:_src__WEBPACK_IMPORTED_MODULE_3__.vW,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.al],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"near edge",args:{padding:[2,8,2,8],align:[1,.5],style:{fill:"#ffffff",textAnchor:"end"},styleOuter:{fill:"#222222",textAnchor:"start"}},component:_src__WEBPACK_IMPORTED_MODULE_3__.vW,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.al],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"labels-outside-bars",children:"Labels outside bars"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"BarsLabels"})," omits labels for bars smaller than the size specified with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"minSize"}),".\nFor such small bars, labels can be placed outside of bars with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"showOuter"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"some labels outside bars",args:{padding:[2,8,2,8],align:[0,.5],showOuter:!0,style:{fill:"#ffffff",textAnchor:"start"},styleOuter:{fill:"#222222",textAnchor:"start"}},component:_src__WEBPACK_IMPORTED_MODULE_3__.vW,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.al],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["To display all labels outside bars, set ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"minSize"})," to a zero size to display all the labels,\nset ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"align"})," to position the labels on the edge,\nand further use prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"offset"})," to move the labels beyond the bar boundaries."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"all labels outside bars",args:{padding:[2,0,2,0],align:[1,.5],minSize:[0,0],offset:[8,0],style:{fill:"#222222",textAnchor:"start"}},component:_src__WEBPACK_IMPORTED_MODULE_3__.vW,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.al],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"subsets",children:"Subsets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"It is possible to draw selected labels, only."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"selected labels",args:{ids:["beta","delta"],padding:[2,8,2,8],align:[0,.5],showOuter:!0,style:{fill:"#ffffff",textAnchor:"start"}},component:_src__WEBPACK_IMPORTED_MODULE_3__.vW,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.al],children:Template.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./packages/band/stories/dataGroups.json":module=>{module.exports=JSON.parse('[{"id":"alpha","label":"alpha","x":55,"y":35,"z":10},{"id":"beta","label":"beta","x":35,"y":25,"z":15},{"id":"gamma","label":"gamma","x":15,"y":25,"z":35}]')}}]);