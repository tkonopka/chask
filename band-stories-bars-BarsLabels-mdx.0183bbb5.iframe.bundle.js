"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3367,1844],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/band/stories/bars/BarsLabels.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllLabelsOutsideBars:()=>AllLabelsOutsideBars,Default:()=>Default,NearBaseline:()=>NearBaseline,NearEdge:()=>NearEdge,SelectedLabels:()=>SelectedLabels,SomeLabelsOutsideBars:()=>SomeLabelsOutsideBars,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_NearBaseline$paramet,_NearBaseline$paramet2,_NearBaseline$paramet3,_NearEdge$parameters,_NearEdge$parameters2,_NearEdge$parameters3,_SomeLabelsOutsideBar,_SomeLabelsOutsideBar2,_SomeLabelsOutsideBar3,_AllLabelsOutsideBars,_AllLabelsOutsideBars2,_AllLabelsOutsideBars3,_SelectedLabels$param,_SelectedLabels$param2,_SelectedLabels$param3,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/band/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/stories/bars/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Bars/BarsLabels",component:_src__WEBPACK_IMPORTED_MODULE_0__.vW};var Default={name:"default",args:{minSize:[40,10]},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.al]},NearBaseline={name:"near baseline",args:{padding:[2,8,2,8],align:[0,.5],style:{fill:"#ffffff",textAnchor:"start"},styleOuter:{fill:"#222222",textAnchor:"start"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.al]},NearEdge={name:"near edge",args:{padding:[2,8,2,8],align:[1,.5],style:{fill:"#ffffff",textAnchor:"end"},styleOuter:{fill:"#222222",textAnchor:"start"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.al]},SomeLabelsOutsideBars={name:"some labels outside bars",args:{padding:[2,8,2,8],align:[0,.5],showOuter:!0,style:{fill:"#ffffff",textAnchor:"start"},styleOuter:{fill:"#222222",textAnchor:"start"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.al]},AllLabelsOutsideBars={name:"all labels outside bars",args:{padding:[2,0,2,0],align:[1,.5],minSize:[0,0],offset:[8,0],style:{fill:"#222222",textAnchor:"start"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.al]},SelectedLabels={name:"selected labels",args:{ids:["beta","delta"],padding:[2,8,2,8],align:[0,.5],showOuter:!0,style:{fill:"#ffffff",textAnchor:"start"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.al]};Default.parameters=_extends({},Default.parameters,{docs:_extends({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:_extends({originalSource:"{\n  name: 'default',\n  args: {\n    minSize: [40, 10]\n  },\n  decorators: [ChartForBarsLabelsDecorator]\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2$=_Default$parameters2.docs)?void 0:_Default$parameters2$.source)})}),NearBaseline.parameters=_extends({},NearBaseline.parameters,{docs:_extends({},null==(_NearBaseline$paramet=NearBaseline.parameters)?void 0:_NearBaseline$paramet.docs,{source:_extends({originalSource:"{\n  name: 'near baseline',\n  args: {\n    padding: [2, 8, 2, 8],\n    align: [0, 0.5],\n    style: {\n      fill: '#ffffff',\n      textAnchor: 'start'\n    },\n    styleOuter: {\n      fill: '#222222',\n      textAnchor: 'start'\n    }\n  },\n  decorators: [ChartForBarsLabelsDecorator]\n}"},null==(_NearBaseline$paramet2=NearBaseline.parameters)||null==(_NearBaseline$paramet3=_NearBaseline$paramet2.docs)?void 0:_NearBaseline$paramet3.source)})}),NearEdge.parameters=_extends({},NearEdge.parameters,{docs:_extends({},null==(_NearEdge$parameters=NearEdge.parameters)?void 0:_NearEdge$parameters.docs,{source:_extends({originalSource:"{\n  name: 'near edge',\n  args: {\n    padding: [2, 8, 2, 8],\n    align: [1, 0.5],\n    style: {\n      fill: '#ffffff',\n      textAnchor: 'end'\n    },\n    styleOuter: {\n      fill: '#222222',\n      textAnchor: 'start'\n    }\n  },\n  decorators: [ChartForBarsLabelsDecorator]\n}"},null==(_NearEdge$parameters2=NearEdge.parameters)||null==(_NearEdge$parameters3=_NearEdge$parameters2.docs)?void 0:_NearEdge$parameters3.source)})}),SomeLabelsOutsideBars.parameters=_extends({},SomeLabelsOutsideBars.parameters,{docs:_extends({},null==(_SomeLabelsOutsideBar=SomeLabelsOutsideBars.parameters)?void 0:_SomeLabelsOutsideBar.docs,{source:_extends({originalSource:"{\n  name: 'some labels outside bars',\n  args: {\n    padding: [2, 8, 2, 8],\n    align: [0, 0.5],\n    showOuter: true,\n    style: {\n      fill: '#ffffff',\n      textAnchor: 'start'\n    },\n    styleOuter: {\n      fill: '#222222',\n      textAnchor: 'start'\n    }\n  },\n  decorators: [ChartForBarsLabelsDecorator]\n}"},null==(_SomeLabelsOutsideBar2=SomeLabelsOutsideBars.parameters)||null==(_SomeLabelsOutsideBar3=_SomeLabelsOutsideBar2.docs)?void 0:_SomeLabelsOutsideBar3.source)})}),AllLabelsOutsideBars.parameters=_extends({},AllLabelsOutsideBars.parameters,{docs:_extends({},null==(_AllLabelsOutsideBars=AllLabelsOutsideBars.parameters)?void 0:_AllLabelsOutsideBars.docs,{source:_extends({originalSource:"{\n  name: 'all labels outside bars',\n  args: {\n    padding: [2, 0, 2, 0],\n    align: [1, 0.5],\n    minSize: [0, 0],\n    offset: [8, 0],\n    style: {\n      fill: '#222222',\n      textAnchor: 'start'\n    }\n  },\n  decorators: [ChartForBarsLabelsDecorator]\n}"},null==(_AllLabelsOutsideBars2=AllLabelsOutsideBars.parameters)||null==(_AllLabelsOutsideBars3=_AllLabelsOutsideBars2.docs)?void 0:_AllLabelsOutsideBars3.source)})}),SelectedLabels.parameters=_extends({},SelectedLabels.parameters,{docs:_extends({},null==(_SelectedLabels$param=SelectedLabels.parameters)?void 0:_SelectedLabels$param.docs,{source:_extends({originalSource:"{\n  name: 'selected labels',\n  args: {\n    ids: ['beta', 'delta'],\n    padding: [2, 8, 2, 8],\n    align: [0, 0.5],\n    showOuter: true,\n    style: {\n      fill: '#ffffff',\n      textAnchor: 'start'\n    }\n  },\n  decorators: [ChartForBarsLabelsDecorator]\n}"},null==(_SelectedLabels$param2=SelectedLabels.parameters)||null==(_SelectedLabels$param3=_SelectedLabels$param2.docs)?void 0:_SelectedLabels$param3.source)})});var __namedExportsOrder=["Default","NearBaseline","NearEdge","SomeLabelsOutsideBars","AllLabelsOutsideBars","SelectedLabels"]},"./packages/band/stories/bars/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FF:()=>ChartBarH0S1Decorator,GN:()=>ChartHorizontalGroupedBarDecorator,MY:()=>commonBarProps,_Y:()=>ChartWithLegendDecorator,al:()=>ChartForBarsLabelsDecorator,gE:()=>onBarsClick,tD:()=>ChartHorizontalStackedBarDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/index.tsx"),_dataGroups_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/dataGroups.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonBarProps={data:_dataGroups_json__WEBPACK_IMPORTED_MODULE_2__,keys:["x","y","z"],scaleIndex:{variant:"band",domain:["alpha","beta","gamma"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},barsLabelsData=[{id:"alpha",value:85},{id:"beta",value:60},{id:"gamma",value:50},{id:"delta",value:25},{id:"epsilon",value:5}],ChartWithLegendDecorator=function ChartWithLegendDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,80,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartWithLegendDecorator.displayName="ChartWithLegendDecorator";var ChartBarH0S1Decorator=function ChartBarH0S1Decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!1,variant:"stacked",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartBarH0S1Decorator.displayName="ChartBarH0S1Decorator";var ChartHorizontalGroupedBarDecorator=function ChartHorizontalGroupedBarDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,240],padding:[60,60,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!0,variant:"grouped",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"top",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]}))})};ChartHorizontalGroupedBarDecorator.displayName="ChartHorizontalGroupedBarDecorator";var ChartHorizontalStackedBarDecorator=function ChartHorizontalStackedBarDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,240],padding:[60,60,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!0,variant:"stacked",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"top",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]}))})};ChartHorizontalStackedBarDecorator.displayName="ChartHorizontalStackedBarDecorator";var ChartForBarsLabelsDecorator=function ChartForBarsLabelsDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,220],padding:[30,40,30,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,{data:barsLabelsData,keys:["value"],horizontal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.yAs,{variant:"left",tickSize:0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),Story()]})})};ChartForBarsLabelsDecorator.displayName="ChartForBarsLabelsDecorator";var onBarsClick=function onBarsClick(data){console.log("clicked: "+JSON.stringify(data))};try{ChartWithLegendDecorator.displayName="ChartWithLegendDecorator",ChartWithLegendDecorator.__docgenInfo={description:"",displayName:"ChartWithLegendDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartWithLegendDecorator"]={docgenInfo:ChartWithLegendDecorator.__docgenInfo,name:"ChartWithLegendDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartWithLegendDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBarH0S1Decorator.displayName="ChartBarH0S1Decorator",ChartBarH0S1Decorator.__docgenInfo={description:"",displayName:"ChartBarH0S1Decorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartBarH0S1Decorator"]={docgenInfo:ChartBarH0S1Decorator.__docgenInfo,name:"ChartBarH0S1Decorator",path:"packages/band/stories/bars/decorators.tsx#ChartBarH0S1Decorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalGroupedBarDecorator.displayName="ChartHorizontalGroupedBarDecorator",ChartHorizontalGroupedBarDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalGroupedBarDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartHorizontalGroupedBarDecorator"]={docgenInfo:ChartHorizontalGroupedBarDecorator.__docgenInfo,name:"ChartHorizontalGroupedBarDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartHorizontalGroupedBarDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalStackedBarDecorator.displayName="ChartHorizontalStackedBarDecorator",ChartHorizontalStackedBarDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalStackedBarDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartHorizontalStackedBarDecorator"]={docgenInfo:ChartHorizontalStackedBarDecorator.__docgenInfo,name:"ChartHorizontalStackedBarDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartHorizontalStackedBarDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForBarsLabelsDecorator.displayName="ChartForBarsLabelsDecorator",ChartForBarsLabelsDecorator.__docgenInfo={description:"",displayName:"ChartForBarsLabelsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartForBarsLabelsDecorator"]={docgenInfo:ChartForBarsLabelsDecorator.__docgenInfo,name:"ChartForBarsLabelsDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartForBarsLabelsDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onBarsClick.displayName="onBarsClick",onBarsClick.__docgenInfo={description:"",displayName:"onBarsClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#onBarsClick"]={docgenInfo:onBarsClick.__docgenInfo,name:"onBarsClick",path:"packages/band/stories/bars/decorators.tsx#onBarsClick"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/bars/BarsLabels.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_BarsLabels_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/bars/BarsLabels.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"barslabels",children:"BarsLabels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_BarsLabels_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BarsLabels"})," draws a set of labels on a bar chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_BarsLabels_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"alignment",children:"Alignment"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BarsLabels"})," places labels at the center of bars."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BarsLabels_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"align"})," sets the horizontal and vertical alignment within the bar.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"padding"})," controls the space between the bar edge and the text."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BarsLabels_stories__WEBPACK_IMPORTED_MODULE_2__.NearBaseline}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BarsLabels_stories__WEBPACK_IMPORTED_MODULE_2__.NearEdge}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"labels-outside-bars",children:"Labels outside bars"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BarsLabels"})," omits labels for bars smaller than the size specified with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"minSize"}),".\nFor such small bars, labels can be placed outside of bars with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"showOuter"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BarsLabels_stories__WEBPACK_IMPORTED_MODULE_2__.SomeLabelsOutsideBars}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To display all labels outside bars, set ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"minSize"})," to a zero size to display all the labels,\nset ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"align"})," to position the labels on the edge,\nand further use prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"offset"})," to move the labels beyond the bar boundaries."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BarsLabels_stories__WEBPACK_IMPORTED_MODULE_2__.AllLabelsOutsideBars}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"subsets",children:"Subsets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"It is possible to draw selected labels, only."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BarsLabels_stories__WEBPACK_IMPORTED_MODULE_2__.SelectedLabels})]})}}},"./packages/band/stories/dataGroups.json":module=>{module.exports=JSON.parse('[{"id":"alpha","label":"alpha","x":55,"y":35,"z":10},{"id":"beta","label":"beta","x":35,"y":25,"z":15},{"id":"gamma","label":"gamma","x":15,"y":25,"z":35}]')}}]);