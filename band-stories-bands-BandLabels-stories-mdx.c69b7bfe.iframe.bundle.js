"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3168],{"./packages/band/stories/bars/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FF:()=>ChartBarH0S1Decorator,GN:()=>ChartHorizontalGroupedBarDecorator,MY:()=>commonBarProps,_Y:()=>ChartWithLegendDecorator,al:()=>ChartForBarsLabelsDecorator,gE:()=>onBarsClick,tD:()=>ChartHorizontalStackedBarDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/index.tsx"),_dataGroups_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/dataGroups.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonBarProps={data:_dataGroups_json__WEBPACK_IMPORTED_MODULE_2__,keys:["x","y","z"],scaleIndex:{variant:"band",domain:["alpha","beta","gamma"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},barsLabelsData=[{id:"alpha",value:85},{id:"beta",value:60},{id:"gamma",value:50},{id:"delta",value:25},{id:"epsilon",value:5}],ChartWithLegendDecorator=function ChartWithLegendDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,80,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartWithLegendDecorator.displayName="ChartWithLegendDecorator";var ChartBarH0S1Decorator=function ChartBarH0S1Decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!1,variant:"stacked",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartBarH0S1Decorator.displayName="ChartBarH0S1Decorator";var ChartHorizontalGroupedBarDecorator=function ChartHorizontalGroupedBarDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,240],padding:[60,60,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!0,variant:"grouped",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"top",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]}))})};ChartHorizontalGroupedBarDecorator.displayName="ChartHorizontalGroupedBarDecorator";var ChartHorizontalStackedBarDecorator=function ChartHorizontalStackedBarDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,240],padding:[60,60,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!0,variant:"stacked",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"top",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]}))})};ChartHorizontalStackedBarDecorator.displayName="ChartHorizontalStackedBarDecorator";var ChartForBarsLabelsDecorator=function ChartForBarsLabelsDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,220],padding:[30,40,30,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,{data:barsLabelsData,keys:["value"],horizontal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.yAs,{variant:"left",tickSize:0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),Story()]})})};ChartForBarsLabelsDecorator.displayName="ChartForBarsLabelsDecorator";var onBarsClick=function onBarsClick(data){console.log("clicked: "+JSON.stringify(data))};try{ChartWithLegendDecorator.displayName="ChartWithLegendDecorator",ChartWithLegendDecorator.__docgenInfo={description:"",displayName:"ChartWithLegendDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartWithLegendDecorator"]={docgenInfo:ChartWithLegendDecorator.__docgenInfo,name:"ChartWithLegendDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartWithLegendDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBarH0S1Decorator.displayName="ChartBarH0S1Decorator",ChartBarH0S1Decorator.__docgenInfo={description:"",displayName:"ChartBarH0S1Decorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartBarH0S1Decorator"]={docgenInfo:ChartBarH0S1Decorator.__docgenInfo,name:"ChartBarH0S1Decorator",path:"packages/band/stories/bars/decorators.tsx#ChartBarH0S1Decorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalGroupedBarDecorator.displayName="ChartHorizontalGroupedBarDecorator",ChartHorizontalGroupedBarDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalGroupedBarDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartHorizontalGroupedBarDecorator"]={docgenInfo:ChartHorizontalGroupedBarDecorator.__docgenInfo,name:"ChartHorizontalGroupedBarDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartHorizontalGroupedBarDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalStackedBarDecorator.displayName="ChartHorizontalStackedBarDecorator",ChartHorizontalStackedBarDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalStackedBarDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartHorizontalStackedBarDecorator"]={docgenInfo:ChartHorizontalStackedBarDecorator.__docgenInfo,name:"ChartHorizontalStackedBarDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartHorizontalStackedBarDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForBarsLabelsDecorator.displayName="ChartForBarsLabelsDecorator",ChartForBarsLabelsDecorator.__docgenInfo={description:"",displayName:"ChartForBarsLabelsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartForBarsLabelsDecorator"]={docgenInfo:ChartForBarsLabelsDecorator.__docgenInfo,name:"ChartForBarsLabelsDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartForBarsLabelsDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onBarsClick.displayName="onBarsClick",onBarsClick.__docgenInfo={description:"",displayName:"onBarsClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#onBarsClick"]={docgenInfo:onBarsClick.__docgenInfo,name:"onBarsClick",path:"packages/band/stories/bars/decorators.tsx#onBarsClick"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/bands/BandLabels.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>__WEBPACK_DEFAULT_EXPORT__,onGroupedBars:()=>onGroupedBars,onStackedBars:()=>onStackedBars,selectedLabels:()=>selectedLabels});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/src/index.tsx"),_bars_decorators__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./packages/band/stories/dataGroups.json"),__webpack_require__("./packages/band/stories/bars/decorators.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.O1,{...args});const onGroupedBars=Template.bind({});onGroupedBars.storyName="on grouped bars",onGroupedBars.args={position:1,unit:"relative",offset:[25,0],format:v=>v.x+v.y+v.z,style:{fontWeight:600,fontSize:11}},onGroupedBars.parameters={storySource:{source:"args => <BandLabels {...args} />"}},onGroupedBars.decorators=[_bars_decorators__WEBPACK_IMPORTED_MODULE_4__.GN];const onStackedBars=Template.bind({});onStackedBars.storyName="on stacked bars",onStackedBars.args={position:1,unit:"relative",offset:[25,0],format:v=>v.x+v.y+v.z,style:{fontWeight:600,fontSize:11}},onStackedBars.parameters={storySource:{source:"args => <BandLabels {...args} />"}},onStackedBars.decorators=[_bars_decorators__WEBPACK_IMPORTED_MODULE_4__.tD];const selectedLabels=Template.bind({});selectedLabels.storyName="selected labels",selectedLabels.args={ids:["alpha"],position:1,unit:"relative",offset:[30,0],format:v=>"selected",style:{fontWeight:600,fontSize:11}},selectedLabels.parameters={storySource:{source:"args => <BandLabels {...args} />"}},selectedLabels.decorators=[_bars_decorators__WEBPACK_IMPORTED_MODULE_4__.tD];const componentMeta={title:"Addons/Band/Bands/BandLabels",tags:["stories-mdx"],includeStories:["onGroupedBars","onStackedBars","selectedLabels"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1,{id:"bandlabels",children:"BandLabels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/Band/Bands/BandLabels"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"BandLabels"})," draws a set of labels on a bar chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_2__.O1}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"BandLabels"})," is similar to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"BarsLabels"}),". However, whereas ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"BarsLabels"})," draws labels associated with bars (i.e. rectangles), this component draws labels associated with bands (i.e. groups of bars labeled on the index axis)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"position--content",children:"Position & content"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["Band labels are typically displayed at the end of value axis, setting prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"position"})," to 1."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["The content of the label is determined by a function set with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"format"}),".\nThis can be used, for example, to compute the sum of values in the band."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"on grouped bars",args:{position:1,unit:"relative",offset:[25,0],format:v=>v.x+v.y+v.z,style:{fontWeight:600,fontSize:11}},component:_src__WEBPACK_IMPORTED_MODULE_2__.O1,decorators:[_bars_decorators__WEBPACK_IMPORTED_MODULE_4__.GN],children:Template.bind({})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"on stacked bars",args:{position:1,unit:"relative",offset:[25,0],format:v=>v.x+v.y+v.z,style:{fontWeight:600,fontSize:11}},component:_src__WEBPACK_IMPORTED_MODULE_2__.O1,decorators:[_bars_decorators__WEBPACK_IMPORTED_MODULE_4__.tD],children:Template.bind({})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"selected-labels",children:"Selected labels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["Labels can be placed only on selected bands by setting prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"ids"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"selected labels",args:{ids:["alpha"],position:1,unit:"relative",offset:[30,0],format:v=>"selected",style:{fontWeight:600,fontSize:11}},component:_src__WEBPACK_IMPORTED_MODULE_2__.O1,decorators:[_bars_decorators__WEBPACK_IMPORTED_MODULE_4__.tD],children:Template.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./packages/band/stories/dataGroups.json":module=>{module.exports=JSON.parse('[{"id":"alpha","label":"alpha","x":55,"y":35,"z":10},{"id":"beta","label":"beta","x":35,"y":25,"z":15},{"id":"gamma","label":"gamma","x":15,"y":25,"z":35}]')}}]);