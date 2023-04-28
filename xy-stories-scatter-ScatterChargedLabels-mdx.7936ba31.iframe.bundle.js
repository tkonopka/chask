"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[6712,8432],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/xy/stories/scatter/ScatterChargedLabels.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bubbles:()=>Bubbles,Clearance:()=>Clearance,Offset:()=>Offset,TwoA:()=>TwoA,TwoB:()=>TwoB,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _TwoA$parameters,_TwoA$parameters2,_TwoA$parameters2$doc,_TwoB$parameters,_TwoB$parameters2,_TwoB$parameters2$doc,_Offset$parameters,_Offset$parameters2,_Offset$parameters2$d,_Clearance$parameters,_Clearance$parameters2,_Clearance$parameters3,_Bubbles$parameters,_Bubbles$parameters2,_Bubbles$parameters2$,_chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/xy/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var dataTwo=[{id:"A",data:[{x:5,y:5},{x:5.5,y:3.5}]}],dataBubbles=[{id:"A",data:[{x:3,y:7,r:4},{x:7,y:4,r:200}]}];const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/XY/Scatter/ScatterChargedLabels",component:_src__WEBPACK_IMPORTED_MODULE_1__.tQ};var TwoChargedLabelsDecorator=function TwoChargedLabelsDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.bp,{data:dataTwo,x:"x",y:"y",scaleX:{variant:"linear",domain:[0,10]},scaleY:{variant:"linear",domain:[0,10]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"y (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.cG,{ids:["A"],symbolStyle:{fill:"#333333"}}),Story()]})})};TwoChargedLabelsDecorator.displayName="TwoChargedLabelsDecorator";var BubbleChargedLabelsDecorator=function BubbleChargedLabelsDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.bp,{data:dataBubbles,x:"x",y:"y",valueSize:"r",scaleX:{variant:"linear",domain:[0,10]},scaleY:{variant:"linear",domain:[0,10]},scaleSize:{variant:"sqrt",domain:[0,"auto"],size:40},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"y (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.cG,{ids:["A"],symbolStyle:{fill:"#333333"}}),Story()]})})};BubbleChargedLabelsDecorator.displayName="BubbleChargedLabelsDecorator";var TwoA={name:"above point",args:{data:[{id:"A",index:0,size:[60,16],content:"label A"}]},decorators:[TwoChargedLabelsDecorator]},TwoB={name:"beside point",args:{data:[{id:"A",index:1,size:[60,16],content:"label B"}]},decorators:[TwoChargedLabelsDecorator]},Offset={name:"offset",args:{data:[{id:"A",index:0,size:[60,16],content:"label A"}],offset:[0,.1]},decorators:[TwoChargedLabelsDecorator]},Clearance={name:"clearance",args:{data:[{id:"A",index:0,size:[60,16],content:"label A"},{id:"A",index:1,size:[60,16],content:"label B"}],clearance:2},decorators:[TwoChargedLabelsDecorator]},Bubbles={name:"bubbles",args:{data:[{id:"A",index:0,size:[60,16],content:"label A"},{id:"A",index:1,size:[60,16],content:"label B"}],clearance:4},decorators:[BubbleChargedLabelsDecorator]};TwoA.parameters=_extends({},TwoA.parameters,{docs:_extends({},null==(_TwoA$parameters=TwoA.parameters)?void 0:_TwoA$parameters.docs,{source:_extends({originalSource:"{\n  name: 'above point',\n  args: {\n    data: [{\n      id: 'A',\n      index: 0,\n      size: [60, 16],\n      content: 'label A'\n    }]\n  },\n  decorators: [TwoChargedLabelsDecorator]\n}"},null==(_TwoA$parameters2=TwoA.parameters)||null==(_TwoA$parameters2$doc=_TwoA$parameters2.docs)?void 0:_TwoA$parameters2$doc.source)})}),TwoB.parameters=_extends({},TwoB.parameters,{docs:_extends({},null==(_TwoB$parameters=TwoB.parameters)?void 0:_TwoB$parameters.docs,{source:_extends({originalSource:"{\n  name: 'beside point',\n  args: {\n    data: [{\n      id: 'A',\n      index: 1,\n      size: [60, 16],\n      content: 'label B'\n    }]\n  },\n  decorators: [TwoChargedLabelsDecorator]\n}"},null==(_TwoB$parameters2=TwoB.parameters)||null==(_TwoB$parameters2$doc=_TwoB$parameters2.docs)?void 0:_TwoB$parameters2$doc.source)})}),Offset.parameters=_extends({},Offset.parameters,{docs:_extends({},null==(_Offset$parameters=Offset.parameters)?void 0:_Offset$parameters.docs,{source:_extends({originalSource:"{\n  name: 'offset',\n  args: {\n    data: [{\n      id: 'A',\n      index: 0,\n      size: [60, 16],\n      content: 'label A'\n    }],\n    offset: [0, 0.1]\n  },\n  decorators: [TwoChargedLabelsDecorator]\n}"},null==(_Offset$parameters2=Offset.parameters)||null==(_Offset$parameters2$d=_Offset$parameters2.docs)?void 0:_Offset$parameters2$d.source)})}),Clearance.parameters=_extends({},Clearance.parameters,{docs:_extends({},null==(_Clearance$parameters=Clearance.parameters)?void 0:_Clearance$parameters.docs,{source:_extends({originalSource:"{\n  name: 'clearance',\n  args: {\n    data: [{\n      id: 'A',\n      index: 0,\n      size: [60, 16],\n      content: 'label A'\n    }, {\n      id: 'A',\n      index: 1,\n      size: [60, 16],\n      content: 'label B'\n    }],\n    clearance: 2\n  },\n  decorators: [TwoChargedLabelsDecorator]\n}"},null==(_Clearance$parameters2=Clearance.parameters)||null==(_Clearance$parameters3=_Clearance$parameters2.docs)?void 0:_Clearance$parameters3.source)})}),Bubbles.parameters=_extends({},Bubbles.parameters,{docs:_extends({},null==(_Bubbles$parameters=Bubbles.parameters)?void 0:_Bubbles$parameters.docs,{source:_extends({originalSource:"{\n  name: 'bubbles',\n  args: {\n    data: [{\n      id: 'A',\n      index: 0,\n      size: [60, 16],\n      content: 'label A'\n    }, {\n      id: 'A',\n      index: 1,\n      size: [60, 16],\n      content: 'label B'\n    }],\n    clearance: 4\n  },\n  decorators: [BubbleChargedLabelsDecorator]\n}"},null==(_Bubbles$parameters2=Bubbles.parameters)||null==(_Bubbles$parameters2$=_Bubbles$parameters2.docs)?void 0:_Bubbles$parameters2$.source)})});var __namedExportsOrder=["TwoA","TwoB","Offset","Clearance","Bubbles"]},"./packages/xy/stories/scatter/ScatterChargedLabels.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ScatterChargedLabels_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/xy/stories/scatter/ScatterChargedLabels.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"scatterchargedlabels",children:"ScatterChargedLabels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_ScatterChargedLabels_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterChargedLabels"})," draws a set of labels on a scatter plot, automatically adjusting their positions to avoid overlaps."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_ScatterChargedLabels_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data",children:"Data"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterChargedLabels"})," requires a data object specifying the data points to label.\nThis object should be an array, with each element holding an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"id"})," of the data series,\nan ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"index"})," specifying the data point in the series to label, a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," array to set the\nsize of the label, and a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"content"})," field holding the text inside the label."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The pseudocode below demonstrates the required format."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{language:"javascript",code:'\n  [\n  {\n   "id": "alpha",\n   "index": 0,\n   "size": [60, 25],\n   "content": "label content"\n   },\n  ...\n  ]\n  '}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"label-position",children:"Label position"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The position of each label is determined automatically.\nBy default, a label appear directly above a data point.\nIf placing a label above a data point would interfere with existing data points,\nthe labels may shift slightly, as in the second example below."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ScatterChargedLabels_stories__WEBPACK_IMPORTED_MODULE_2__.TwoA}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ScatterChargedLabels_stories__WEBPACK_IMPORTED_MODULE_2__.TwoB}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"offset",children:"Offset"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"offset"})," determines an initial shift of the label from its associated data point.\nThis prop can determine if a label is pushed above, below, or to the side of the data."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ScatterChargedLabels_stories__WEBPACK_IMPORTED_MODULE_2__.Offset}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Note that values in this prop should be small.\nThe values are only meant to orient the initial direction of label displacement;\nafter the initial displacement, much of the label adjustments are determined by prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"clearance"})," (see below)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"clearance",children:"Clearance"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"clearance"})," determines the space between a data point and its label."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ScatterChargedLabels_stories__WEBPACK_IMPORTED_MODULE_2__.Clearance}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Clearance calculations takes the size of each data point into account."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ScatterChargedLabels_stories__WEBPACK_IMPORTED_MODULE_2__.Bubbles})]})}}}}]);