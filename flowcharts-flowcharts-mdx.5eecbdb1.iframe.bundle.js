"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8964,9136],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./examples/flowcharts/flowcharts.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HorizontalFlowchart:()=>HorizontalFlowchart,TreeFlowchart:()=>TreeFlowchart,VerticalFlowchart:()=>VerticalFlowchart,__namedExportsOrder:()=>__namedExportsOrder,default:()=>flowcharts_stories});var gallery=__webpack_require__("./examples/gallery.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),chsk_annotation_es=__webpack_require__("./packages/annotation/dist/chsk-annotation.es.js"),chsk_themes_es=__webpack_require__("./packages/themes/dist/chsk-themes.es.js"),navigation=__webpack_require__("./examples/navigation.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{rect:{boxedLabel:{stroke:"#222222",strokeWidth:1,fill:"#fafafa"},"boxedLabel.A":{fill:"#4292c6"},"boxedLabel.B":{fill:"#2171b5"},"boxedLabel.C":{fill:"#084594"}},path:{flow:{strokeWidth:"1px"}},text:{boxedLabel:{fill:"#fff",fontSize:"14px",fontWeight:600},explanation:{fill:"#666",textAnchor:"start",fontWeight:300,fontSize:"14px"}}}),VerticalFlowChart=function VerticalFlowChart(_ref){var fref=_ref.fref,chartData=_ref.chartData;return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{data:chartData,fref,id:"vertical-flow",size:[440,280],padding:[60,30,40,30],theme:customTheme,children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)(chsk_annotation_es.Po,{variant:"Winged",id:"arrowV",size:24,style:{fill:"#222222",fillOpacity:1}})}),(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{children:[(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"title",children:(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[0,-30],children:"A typical project has three stages"})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"A",children:(0,jsx_runtime.jsx)(chsk_annotation_es.I6,{position:[60,20],size:[120,28],className:"A",children:"1. Beginning"})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"A",transition:{delay:.5},exit:null,children:(0,jsx_runtime.jsx)(chsk_core_es.__J,{position:[145,20],size:[200,20],className:"explanation",children:"Usually, we start at the beginning."})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"B",children:(0,jsx_runtime.jsx)(chsk_annotation_es.Qs,{points:[[60,34],[60,71]],units:"absolute",markerEnd:"arrowV"})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"B",transition:{delay:.5},exit:null,children:(0,jsx_runtime.jsx)(chsk_annotation_es.I6,{position:[60,90],size:[120,28],className:"B",children:"2. Middle"})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"B",transition:{delay:1},exit:null,children:(0,jsx_runtime.jsx)(chsk_core_es.__J,{position:[145,80],size:[200,20],className:"explanation",children:"The middle stage is often the longest."})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"B",transition:{delay:1.5},exit:null,children:(0,jsx_runtime.jsx)(chsk_core_es.__J,{position:[145,100],size:[200,20],className:"explanation",children:"It may contain many sub-stages."})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"C",children:(0,jsx_runtime.jsx)(chsk_annotation_es.Qs,{points:[[60,104],[60,141]],units:"absolute",markerEnd:"arrowV"})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"C",transition:{delay:.5},exit:null,children:(0,jsx_runtime.jsx)(chsk_annotation_es.I6,{position:[60,160],size:[120,28],className:"C",children:"3. End"})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"C",transition:{delay:1},exit:null,children:(0,jsx_runtime.jsx)(chsk_core_es.__J,{position:[145,160],size:[200,20],className:"explanation",children:"Finally, we reach a conclusion."})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"buttons",children:(0,jsx_runtime.jsx)(navigation.N,{position:[330,210],image:!0})})]})]})};VerticalFlowChart.displayName="VerticalFlowChart";try{VerticalFlowChart.displayName="VerticalFlowChart",VerticalFlowChart.__docgenInfo={description:"",displayName:"VerticalFlowChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/flowcharts/VerticalFlowChart.tsx#VerticalFlowChart"]={docgenInfo:VerticalFlowChart.__docgenInfo,name:"VerticalFlowChart",path:"examples/flowcharts/VerticalFlowChart.tsx#VerticalFlowChart"})}catch(__react_docgen_typescript_loader_error){}var icons=__webpack_require__("./examples/icons.tsx"),HorizontalFlowChart_customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{path:{default:{fillOpacity:1},flow:{strokeWidth:"1px",fillOpacity:0},icon:{fill:"#4292c6",stroke:"#4292c6",strokeWidth:1}},text:{label:{fill:"#222",fontSize:"14px",textAnchor:"start"},"label.center":{textAnchor:"middle"},"label.right":{textAnchor:"end"}}}),HorizontalFlowChart=function HorizontalFlowChart(_ref){var fref=_ref.fref,chartData=_ref.chartData,y=60,x=[80,160,240,340,420],xStart=x[0]-44,xMid=(x[2]+x[3])/2;return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{data:chartData,fref,id:"horizontal-flow",size:[640,180],padding:[30,30,30,30],theme:HorizontalFlowChart_customTheme,children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)(chsk_annotation_es.Po,{variant:"Winged",id:"arrowH",size:24,style:{fill:"#222"}})}),(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{children:[(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"start",children:[(0,jsx_runtime.jsx)(icons.lQ,{x:xStart-12,y:36,className:"icon"}),(0,jsx_runtime.jsx)(chsk_core_es.__J,{position:[xStart,72],size:[100,30],className:"center",children:"Input data"})]}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"branch1",children:(0,jsx_runtime.jsx)(chsk_annotation_es.Qs,{points:[[x[0],y],[x[1],y],[x[1],28],[x[4],28]],units:"absolute",transition:{pathLength:{duration:1}},markerEnd:"arrowH"})}),(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"branch1",transition:{delay:1},exit:null,children:[(0,jsx_runtime.jsx)(icons.nQ,{x:x[4]+20,y:16,className:"icon"}),(0,jsx_runtime.jsx)(chsk_core_es.__J,{position:[x[4]+50,28],size:[120,28],className:"left",children:"Standard analysis"})]}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"branch2a",children:(0,jsx_runtime.jsx)(chsk_annotation_es.Qs,{points:[[x[0],y],[x[1],y],[x[1],92],[x[2],92]],units:"absolute",transition:{pathLength:{duration:.7}},markerEnd:"arrowH"})}),(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"branch2a",transition:{delay:.7},exit:null,children:[(0,jsx_runtime.jsx)(icons.k1,{x:xMid-12,y:68,className:"icon"}),(0,jsx_runtime.jsx)(chsk_core_es.__J,{position:[xMid,104],size:[80,28],className:"center",children:"Data filter"})]}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"branch2b",children:(0,jsx_runtime.jsx)(chsk_annotation_es.Qs,{points:[[340,92],[420,92]],units:"absolute",transition:{pathLength:{duration:.3}},markerEnd:"arrowH"})}),(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"branch2b",transition:{delay:.3},exit:null,children:[(0,jsx_runtime.jsx)(icons.nQ,{x:x[4]+20,y:80,className:"icon"}),(0,jsx_runtime.jsx)(chsk_core_es.__J,{position:[x[4]+50,92],size:[80,28],className:"left",children:"Custom analysis"})]}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"buttons",children:(0,jsx_runtime.jsx)(navigation.N,{position:[520,140],image:!0})})]})]})};HorizontalFlowChart.displayName="HorizontalFlowChart";try{HorizontalFlowChart.displayName="HorizontalFlowChart",HorizontalFlowChart.__docgenInfo={description:"",displayName:"HorizontalFlowChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/flowcharts/HorizontalFlowChart.tsx#HorizontalFlowChart"]={docgenInfo:HorizontalFlowChart.__docgenInfo,name:"HorizontalFlowChart",path:"examples/flowcharts/HorizontalFlowChart.tsx#HorizontalFlowChart"})}catch(__react_docgen_typescript_loader_error){}var utils=__webpack_require__("./examples/utils.ts"),TreeFlowChart_customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{rect:{boxedLabel:{stroke:"#423e37",strokeWidth:0,fill:"#fafafa"},"boxedLabel.start":{fill:"#423e37"},"boxedLabel.filter":{fillOpacity:0},"boxedLabel.A":{fill:"#f57600"},"boxedLabel.B":{fill:"#1985a1"}},path:{flow:{strokeWidth:"2px",fillOpacity:0}},text:{boxedLabel:{fill:"#fff",fontSize:"14px",pointerEvents:"none"}},tspan:{italic:{fontStyle:"italic"}}}),DoubleLabel=function DoubleLabel(_ref){var position=_ref.position,className=_ref.className,content1=_ref.content1,value=_ref.value;return(0,jsx_runtime.jsxs)(chsk_annotation_es.I6,{positionUnits:["relative","absolute"],rx:4,ry:4,size:[115,44],position,className,children:[(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"boxedLabel",position:[0,-9],children:content1}),(0,jsx_runtime.jsxs)(chsk_core_es.ZT$,{variant:"boxedLabel",position:[0,9],children:[(0,jsx_runtime.jsx)("tspan",{className:"italic",children:"n"})," = ",value]})]})};DoubleLabel.displayName="DoubleLabel";var _VerticalFlowchart$pa,_VerticalFlowchart$pa2,_VerticalFlowchart$pa3,_HorizontalFlowchart$,_HorizontalFlowchart$2,_HorizontalFlowchart$3,_TreeFlowchart$parame,_TreeFlowchart$parame2,_TreeFlowchart$parame3,MilestoneArrow=function MilestoneArrow(_ref2){var points=_ref2.points,enterOn=_ref2.enterOn,_ref2$duration=_ref2.duration,duration=void 0===_ref2$duration?.5:_ref2$duration,children=_ref2.children;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn,children:(0,jsx_runtime.jsx)(chsk_annotation_es.Qs,{points,units:["relative","absolute"],transition:{pathLength:{duration}},markerEnd:"treeArrow"})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn,transition:{delay:duration},exit:null,children})]})},TreeFlowChart=function TreeFlowChart(_ref3){var fref=_ref3.fref,chartData=_ref3.chartData,nData=_ref3.rawData[0].data,nTotal=nData[0],nLoss=nData[1],nA=nData[2],nB=nData[3],nA1=nData[4],nA2=nData[5],nB1=nData[6],nB2=nData[7],boxStart=[.5,30],boxFilter=[.5,90],boxA=[.24,180],boxA1=[.12,270],boxA2=[.36,270],boxB=[.76,180],boxB1=[.64,270],boxB2=[.88,270],arrowPoints1=[[boxStart[chsk_core_es.X],boxStart[chsk_core_es.Y]+22],[boxFilter[chsk_core_es.X],boxFilter[chsk_core_es.Y]-22]],makeArrowPoints=function makeArrowPoints(start,end){return[[start[chsk_core_es.X],start[chsk_core_es.Y]+22],[start[chsk_core_es.X],(start[chsk_core_es.Y]+end[chsk_core_es.Y])/2-2],[end[chsk_core_es.X],(start[chsk_core_es.Y]+end[chsk_core_es.Y])/2-2],[end[chsk_core_es.X],end[chsk_core_es.Y]-22-4]]},arrowPointsA0=makeArrowPoints(boxFilter,boxA),arrowPointsA1=makeArrowPoints(boxA,boxA1),arrowPointsA2=makeArrowPoints(boxA,boxA2),arrowPointsB0=makeArrowPoints(boxFilter,boxB),arrowPointsB1=makeArrowPoints(boxB,boxB1),arrowPointsB2=makeArrowPoints(boxB,boxB2);return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{data:chartData,fref,id:"tree-flow",size:[600,360],padding:[40,40,40,40],theme:TreeFlowChart_customTheme,children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)(chsk_annotation_es.Po,{variant:"Winged",id:"treeArrow",size:10,style:{fill:"#222222",fillOpacity:1}})}),(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{children:[(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[-10,-20],children:"A / B study plan"}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"start",children:(0,jsx_runtime.jsx)(DoubleLabel,{position:boxStart,className:"start",content1:"Large cohort",value:nTotal})}),(0,jsx_runtime.jsx)(MilestoneArrow,{points:arrowPoints1,enterOn:"filter",duration:.3,children:(0,jsx_runtime.jsx)(chsk_annotation_es.I6,{positionUnits:["relative","absolute"],rx:4,ry:4,size:[120,44],position:boxFilter,className:"filter",children:(0,jsx_runtime.jsxs)(chsk_core_es.ZT$,{children:[nLoss," failed data QC"]})})}),(0,jsx_runtime.jsx)(MilestoneArrow,{enterOn:"A",points:arrowPointsA0,children:(0,jsx_runtime.jsx)(DoubleLabel,{position:boxA,className:"A",content1:"Condition A",value:nA})}),(0,jsx_runtime.jsx)(MilestoneArrow,{enterOn:"A1",points:arrowPointsA1,duration:.3,children:(0,jsx_runtime.jsx)(DoubleLabel,{position:boxA1,className:"A",content1:"Condition A1",value:nA1})}),(0,jsx_runtime.jsx)(MilestoneArrow,{enterOn:"A2",points:arrowPointsA2,duration:.3,children:(0,jsx_runtime.jsx)(DoubleLabel,{position:boxA2,className:"A",content1:"Condition A2",value:nA2})}),(0,jsx_runtime.jsx)(MilestoneArrow,{enterOn:"B",points:arrowPointsB0,children:(0,jsx_runtime.jsx)(DoubleLabel,{position:boxB,className:"B",content1:"Condition B",value:nB})}),(0,jsx_runtime.jsx)(MilestoneArrow,{enterOn:"B1",points:arrowPointsB1,duration:.3,children:(0,jsx_runtime.jsx)(DoubleLabel,{position:boxB1,className:"B",content1:"Condition B1",value:nB1})}),(0,jsx_runtime.jsx)(MilestoneArrow,{enterOn:"B2",points:arrowPointsB2,duration:.3,children:(0,jsx_runtime.jsx)(DoubleLabel,{position:boxB2,className:"B",content1:"Condition B2",value:nB2})}),(0,jsx_runtime.jsx)(navigation.N,{position:[470,-20],image:!0})]})]})};TreeFlowChart.displayName="TreeFlowChart";try{TreeFlowChart.displayName="TreeFlowChart",TreeFlowChart.__docgenInfo={description:"",displayName:"TreeFlowChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/flowcharts/TreeFlowChart.tsx#TreeFlowChart"]={docgenInfo:TreeFlowChart.__docgenInfo,name:"TreeFlowChart",path:"examples/flowcharts/TreeFlowChart.tsx#TreeFlowChart"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const flowcharts_stories=_extends({},gallery.m,{title:"Gallery/Flowcharts"});var VerticalFlowchart={name:"vertical",args:{generator:function generateVerticalFlowData(){return[]},chart:VerticalFlowChart,steps:["title","A","B","C","buttons"]}},HorizontalFlowchart={name:"vertical",args:{generator:function generateHorizontalFlowData(){return[]},chart:HorizontalFlowChart,steps:["start","branch1","branch2a","branch2b","buttons"]}},TreeFlowchart={name:"tree",args:{generator:function generateTreeFlowData(){var nTotal=Math.floor((0,utils.SN)(120,260)),nLoss=Math.floor((0,utils.SN)(2,20)),n=nTotal-nLoss,nA=Math.floor((0,utils.SN)(.25*n,.75*n)),nB=n-nA,nA1=Math.round(nA/2),nA2=nA-nA1,nB1=Math.round(nB/2);return[{id:"data",data:[nTotal,nLoss,nA,nB,nA1,nA2,nB1,nB-nB1]}]},chart:TreeFlowChart,steps:["start","filter","A","B","A1","A2","B1","B2"]}};VerticalFlowchart.parameters=_extends({},VerticalFlowchart.parameters,{docs:_extends({},null==(_VerticalFlowchart$pa=VerticalFlowchart.parameters)?void 0:_VerticalFlowchart$pa.docs,{source:_extends({originalSource:"{\n  name: 'vertical',\n  args: {\n    generator: generateVerticalFlowData,\n    chart: VerticalFlowChart,\n    steps: ['title', 'A', 'B', 'C', 'buttons']\n  }\n}"},null==(_VerticalFlowchart$pa2=VerticalFlowchart.parameters)||null==(_VerticalFlowchart$pa3=_VerticalFlowchart$pa2.docs)?void 0:_VerticalFlowchart$pa3.source)})}),HorizontalFlowchart.parameters=_extends({},HorizontalFlowchart.parameters,{docs:_extends({},null==(_HorizontalFlowchart$=HorizontalFlowchart.parameters)?void 0:_HorizontalFlowchart$.docs,{source:_extends({originalSource:"{\n  name: 'vertical',\n  args: {\n    generator: generateHorizontalFlowData,\n    chart: HorizontalFlowChart,\n    steps: ['start', 'branch1', 'branch2a', 'branch2b', 'buttons']\n  }\n}"},null==(_HorizontalFlowchart$2=HorizontalFlowchart.parameters)||null==(_HorizontalFlowchart$3=_HorizontalFlowchart$2.docs)?void 0:_HorizontalFlowchart$3.source)})}),TreeFlowchart.parameters=_extends({},TreeFlowchart.parameters,{docs:_extends({},null==(_TreeFlowchart$parame=TreeFlowchart.parameters)?void 0:_TreeFlowchart$parame.docs,{source:_extends({originalSource:"{\n  name: 'tree',\n  args: {\n    generator: generateTreeFlowData,\n    chart: TreeFlowChart,\n    steps: ['start', 'filter', 'A', 'B', 'A1', 'A2', 'B1', 'B2']\n  }\n}"},null==(_TreeFlowchart$parame2=TreeFlowchart.parameters)||null==(_TreeFlowchart$parame3=_TreeFlowchart$parame2.docs)?void 0:_TreeFlowchart$parame3.source)})});var __namedExportsOrder=["VerticalFlowchart","HorizontalFlowchart","TreeFlowchart"]},"./examples/flowcharts/flowcharts.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_flowcharts_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./examples/flowcharts/flowcharts.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"examples-of-flowcharts",children:"Examples of flowcharts"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_flowcharts_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_flowcharts_stories__WEBPACK_IMPORTED_MODULE_2__.VerticalFlowchart}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_flowcharts_stories__WEBPACK_IMPORTED_MODULE_2__.HorizontalFlowchart}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_flowcharts_stories__WEBPACK_IMPORTED_MODULE_2__.TreeFlowchart})]})}}}}]);