"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4121,8667],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./examples/tables/tables.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConfusionMatrix:()=>ConfusionMatrix,SingleValues:()=>SingleValues,Survey:()=>Survey,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tables_stories});var gallery=__webpack_require__("./examples/gallery.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),chsk_matrix_es=__webpack_require__("./packages/matrix/dist/chsk-matrix.es.js"),chsk_annotation_es=__webpack_require__("./packages/annotation/dist/chsk-annotation.es.js"),chsk_themes_es=__webpack_require__("./packages/themes/dist/chsk-themes.es.js"),Blues=__webpack_require__("./node_modules/d3-scale-chromatic/src/sequential-single/Blues.js"),utils=__webpack_require__("./examples/utils.ts"),navigation=__webpack_require__("./examples/navigation.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var keys=["A","B","C"],customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{rect:{boxedTitle:{stroke:"#222222",strokeWidth:1,fill:"#fafafa"}},line:{grid:{stroke:"#222222"}},text:{"label.outer":{fontSize:"16px",fontWeight:600},"counter.cell":{textAnchor:"middle",dominantBaseline:"middle",fontSize:"18px"},"counter.cell.highvalue":{fill:"#ffffff"},tickLabel:{fontSize:"16px",fontWeight:600}},AxisTicks:{top:{tickSize:0,labelDistance:10},left:{tickSize:0,labelDistance:11}},Motion:{default:{type:"spring",mass:.5,stiffness:200,damping:25}}}),HeatMapCounter=function HeatMapCounter(_ref){var x=_ref.x,y=_ref.y,width=_ref.width,height=_ref.height,className=_ref.className,style=_ref.style,cellValue=_ref.cellValue,color=(0,(0,chsk_core_es.kE1)().scales.color)(Number(cellValue));return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x,y,width,height,fill:color,style:_extends({},style,{fill:void 0}),center:!0}),(0,jsx_runtime.jsx)(chsk_core_es.ATJ,{setRole:!1,position:[x,y],size:[width,height],style:_extends({},style,{fill:void 0}),className:(null!=cellValue?cellValue:0)>65?className+" highvalue":className,children:cellValue})]})},ConfusionTableChart=function ConfusionTableChart(_ref2){var fref=_ref2.fref,chartData=_ref2.chartData,rawData=_ref2.rawData;return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{data:chartData,fref,id:"confusion-table",size:[400,250],padding:[80,40,40,80],theme:customTheme,children:(0,jsx_runtime.jsxs)(chsk_matrix_es.Br,{data:rawData,keys,scaleColor:{variant:"sequential",colors:Blues.Z,domain:[0,100]},children:[(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapCounter,style:{strokeWidth:0}}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"x",shift:[-.5,.5]}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y",shift:[-.5,.5]}),(0,jsx_runtime.jsx)(chsk_annotation_es.Q1,{variant:"left",offset:0,size:35}),(0,jsx_runtime.jsx)(chsk_annotation_es.Q1,{variant:"left",offset:35,size:35,className:"outer",children:"Ground truth"}),(0,jsx_runtime.jsx)(chsk_annotation_es.Q1,{variant:"top",offset:0,size:32}),(0,jsx_runtime.jsx)(chsk_annotation_es.Q1,{variant:"top",offset:32,size:32,className:"outer",children:"Model prediction"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"top"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"}),(0,jsx_runtime.jsx)(navigation.N,{position:[210,150],data:!0})]})})};ConfusionTableChart.displayName="ConfusionTableChart";try{ConfusionTableChart.displayName="ConfusionTableChart",ConfusionTableChart.__docgenInfo={description:"",displayName:"ConfusionTableChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/tables/ConfusionTableChart.tsx#ConfusionTableChart"]={docgenInfo:ConfusionTableChart.__docgenInfo,name:"ConfusionTableChart",path:"examples/tables/ConfusionTableChart.tsx#ConfusionTableChart"})}catch(__react_docgen_typescript_loader_error){}function HeatTableChart_extends(){return HeatTableChart_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},HeatTableChart_extends.apply(this,arguments)}var ids=utils.eB.slice(0,6),HeatTableChart_keys=["A","B","C","D","E","F"],idLabels={alpha:"Option 1",beta:"Option 2",gamma:"Option 3",delta:"Option 4",epsilon:"Option 5",zeta:"Option 6"},HeatTableChart_customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{AxisTicks:{bottom:{tickSize:0},left:{tickSize:0}},line:{grid:{strokeWidth:"3px",stroke:"#cccccc",strokeLinecap:"round",strokeDasharray:"1 8"}},text:{"counter.cell":{fontSize:"12px",fontWeight:600,strokeWidth:0,textAnchor:"middle",dominantBaseline:"middle"},"tickLabel.bottom":{fontSize:"18px",fontWeight:600,fill:"#666"},"tickLabel.left":{fontSize:"15px",fontWeight:600,fill:"#666",textAnchor:"start"},"axisLabel.bottom":{fontSize:"15px"},title:{fontSize:"22px"},subtitle:{fontSize:"15px",fontWeight:300,fill:"#666"},source:{fill:"#444444",fontSize:"11px",dominantBaseline:"middle",textAnchor:"start"}}}),HeatMapSquareCounter=function HeatMapSquareCounter(_ref){var x=_ref.x,y=_ref.y,width=_ref.width,height=_ref.height,className=_ref.className,style=_ref.style,cellSize=_ref.cellSize;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(chsk_core_es.bK0,{setRole:!1,variant:void 0,cx:x,cy:y,r:Math.min(width,height)/2,style,className}),(0,jsx_runtime.jsx)(chsk_core_es.ATJ,{setRole:!1,position:[x,y],size:[width,height],style:HeatTableChart_extends({},style,{fill:"#fff"}),className,format:function format(v){return v>9?v+"%":""},children:cellSize})]})},customTitleFormat=function customTitleFormat(x){var _x$data,data=null==(_x$data=x.data)?void 0:_x$data[0];return data&&"id"in data?idLabels[data.id]:""},customLabelFormat=function customLabelFormat(x){return x.key+": "+("size"in x?x.size:"")+"%"},HeatTableChart=function HeatTableChart(_ref2){var fref=_ref2.fref,chartData=_ref2.chartData,rawData=_ref2.rawData,colorData=rawData.map((function(seriesData){var item={id:seriesData.id};return HeatTableChart_keys.map((function(k){item[k]=k})),item}));return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{data:chartData,fref,id:"survey-table",size:[680,520],padding:[90,40,80,90],theme:HeatTableChart_customTheme,children:(0,jsx_runtime.jsxs)(chsk_matrix_es.Br,{data:colorData,dataSize:rawData,keys:HeatTableChart_keys,scaleColor:HeatTableChart_extends({},chsk_core_es.oRn,{domain:HeatTableChart_keys}),scaleSize:{variant:"sqrt",domain:[0,"auto"],size:"auto"},children:[(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"grid",children:[(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"x"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",children:(0,jsx_runtime.jsx)(chsk_core_es.yAs,{labelDistance:10})}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",children:(0,jsx_runtime.jsx)(chsk_core_es.yAs,{labelDistance:80,labelFormat:function labelFormat(v){return String(idLabels[String(v)])}})})]}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"A",children:(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapSquareCounter,keys:["A"]})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"B",children:(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapSquareCounter,keys:["B"]})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"C",children:(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapSquareCounter,keys:["C"]})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"D",children:(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapSquareCounter,keys:["D"]})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"E",children:(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapSquareCounter,keys:["E"]})}),(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"F",children:[(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapSquareCounter,keys:["F"]}),(0,jsx_runtime.jsx)(chsk_matrix_es.ad,{style:{opacity:0}})]}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"title",children:(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[-80,-60],children:"What is the main reason for ‘X’?"})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"subtitle",children:(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"subtitle",position:[-80,-32],children:"Responders from six domains were asked to pick one answer from among six options."})}),(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"download",children:[(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"source",position:[-80,420],children:"Source: synthetic data."}),(0,jsx_runtime.jsx)(navigation.N,{position:[450,420],data:!0,image:!0})]}),(0,jsx_runtime.jsx)(chsk_core_es.ua7,{offset:[0,-15],padding:[4,0,4,0],itemSize:[80,26],itemPadding:[4,8,4,8],titleFormat:customTitleFormat,labelFormat:customLabelFormat})]})})};HeatTableChart.displayName="HeatTableChart";try{HeatMapSquareCounter.displayName="HeatMapSquareCounter",HeatMapSquareCounter.__docgenInfo={description:"",displayName:"HeatMapSquareCounter",props:{cellValue:{defaultValue:null,description:"value that determines cell color",name:"cellValue",required:!1,type:{name:"string | number"}},cellSize:{defaultValue:null,description:"value that determines cell size",name:"cellSize",required:!1,type:{name:"number"}},x:{defaultValue:null,description:"x coordinate",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"y coordinate",name:"y",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"width",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"height",name:"height",required:!0,type:{name:"number"}},rx:{defaultValue:null,description:"horizontal corner radius",name:"rx",required:!1,type:{name:"number"}},ry:{defaultValue:null,description:"vertical corner radius",name:"ry",required:!1,type:{name:"number"}},center:{defaultValue:null,description:"center the rectangle around (x, y)",name:"center",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionProps"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/tables/HeatTableChart.tsx#HeatMapSquareCounter"]={docgenInfo:HeatMapSquareCounter.__docgenInfo,name:"HeatMapSquareCounter",path:"examples/tables/HeatTableChart.tsx#HeatMapSquareCounter"})}catch(__react_docgen_typescript_loader_error){}try{HeatTableChart.displayName="HeatTableChart",HeatTableChart.__docgenInfo={description:"",displayName:"HeatTableChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/tables/HeatTableChart.tsx#HeatTableChart"]={docgenInfo:HeatTableChart.__docgenInfo,name:"HeatTableChart",path:"examples/tables/HeatTableChart.tsx#HeatTableChart"})}catch(__react_docgen_typescript_loader_error){}var SingleValuesChart_customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{text:{default:{fill:void 0},widgetLabel:{fontSize:"14px",textAnchor:"start",dominantBaseline:"hanging",fill:"#bbb"},counter:{fontSize:"36px",textAnchor:"start",dominantBaseline:"auto",fill:"#bbb"},percent:{dominantBaseline:"auto",fill:"#bbb"},warning:{fill:"#555"},error:{fill:"#222"}},tspan:{percent:{dominantBaseline:"auto",fontSize:"14px",fill:"#bbb"},warning:{fill:"#555"},error:{fill:"#222"}},rect:{widget:{stroke:"#000",strokeWidth:.5}},Motion:{default:{type:"spring",mass:.5,stiffness:200,damping:25}}}),DashboardCounterValue=function DashboardCounterValue(_ref){var style=_ref.style,className=_ref.className,children=_ref.children;return(0,jsx_runtime.jsxs)("text",{style,className,children:[children,(0,jsx_runtime.jsx)("tspan",{className:"percent "+className,children:" %"})]})};DashboardCounterValue.displayName="DashboardCounterValue";var _ConfusionMatrix$para,_ConfusionMatrix$para2,_ConfusionMatrix$para3,_Survey$parameters,_Survey$parameters2,_Survey$parameters2$d,_SingleValues$paramet,_SingleValues$paramet2,_SingleValues$paramet3,DashboardValue=function DashboardValue(_ref2){var position=_ref2.position,_ref2$size=_ref2.size,size=void 0===_ref2$size?[100,60]:_ref2$size,_ref2$padding=_ref2.padding,padding=void 0===_ref2$padding?[6,6,6,6]:_ref2$padding,title=_ref2.title,value=_ref2.value,_ref2$thresholds=_ref2.thresholds,thresholds=void 0===_ref2$thresholds?[40,20]:_ref2$thresholds,color=(0,chsk_core_es.kE1)().scales.color(value),activeClassName=value<thresholds[1]?" error":value<thresholds[0]?" warning":"";return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{fill:color,x:position[chsk_core_es.X],y:position[chsk_core_es.Y],width:size[chsk_core_es.X],height:size[chsk_core_es.Y],className:"widget"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[position[chsk_core_es.X]+padding[3],position[chsk_core_es.Y]+padding[0]],className:"widgetLabel"+activeClassName,children:title}),(0,jsx_runtime.jsx)(chsk_core_es.ATJ,{setRole:!1,position:[position[chsk_core_es.X]+padding[chsk_core_es.RLj],position[chsk_core_es.Y]+size[chsk_core_es.Y]-padding[chsk_core_es.DaS]],align:[.5,.5],className:activeClassName,component:DashboardCounterValue,children:value})]})},SingleValuesChart=function SingleValuesChart(_ref3){var fref=_ref3.fref,chartData=_ref3.chartData,values=_ref3.rawData[0].data;return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{data:chartData,fref,id:"single-values",size:[600,140],padding:[40,40,40,40],theme:SingleValuesChart_customTheme,children:(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{scaleColor:{variant:"diverging",colors:["#f5bb00","#ffffff","#ffffff"],domain:[0,40,100]},children:[(0,jsx_runtime.jsx)(DashboardValue,{title:"Alpha",position:[0,0],value:Number(values[0])}),(0,jsx_runtime.jsx)(DashboardValue,{title:"Beta",position:[100,0],value:Number(values[1])}),(0,jsx_runtime.jsx)(DashboardValue,{title:"Gamma",position:[200,0],value:Number(values[2])}),(0,jsx_runtime.jsx)(DashboardValue,{title:"Delta",position:[300,0],value:Number(values[3])}),(0,jsx_runtime.jsx)(DashboardValue,{title:"Epsilon",position:[400,0],value:Number(values[4])})]})})};SingleValuesChart.displayName="SingleValuesChart";try{DashboardCounterValue.displayName="DashboardCounterValue",DashboardCounterValue.__docgenInfo={description:"",displayName:"DashboardCounterValue",props:{children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/tables/SingleValuesChart.tsx#DashboardCounterValue"]={docgenInfo:DashboardCounterValue.__docgenInfo,name:"DashboardCounterValue",path:"examples/tables/SingleValuesChart.tsx#DashboardCounterValue"})}catch(__react_docgen_typescript_loader_error){}try{SingleValuesChart.displayName="SingleValuesChart",SingleValuesChart.__docgenInfo={description:"",displayName:"SingleValuesChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/tables/SingleValuesChart.tsx#SingleValuesChart"]={docgenInfo:SingleValuesChart.__docgenInfo,name:"SingleValuesChart",path:"examples/tables/SingleValuesChart.tsx#SingleValuesChart"})}catch(__react_docgen_typescript_loader_error){}function tables_stories_extends(){return tables_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},tables_stories_extends.apply(this,arguments)}const tables_stories=tables_stories_extends({},gallery.m,{title:"Gallery/Tables"});var ConfusionMatrix={name:"confusion matrix",args:{generator:function generateConfusionTableData(){return[{id:"A",A:Math.round((0,utils.SN)(50,100)),B:Math.round((0,utils.SN)(5,30)),C:Math.round((0,utils.SN)(10,20))},{id:"B",A:Math.round((0,utils.SN)(10,20)),B:Math.round((0,utils.SN)(50,100)),C:Math.round((0,utils.SN)(0,10))},{id:"C",A:Math.round((0,utils.SN)(0,20)),B:Math.round((0,utils.SN)(10,30)),C:Math.round((0,utils.SN)(60,100))}]},chart:ConfusionTableChart}},Survey={name:"survey",args:{generator:function generateHeatTableData(){var normalize=function normalize(x){var sum=x.reduce((function(prev,value){return prev+value}),0);return x.map((function(value){return Math.round(100*value/sum)}))},A=normalize(ids.map((function(){return(0,utils.SN)(0,20)}))),B=normalize(ids.map((function(){return(0,utils.SN)(0,20)}))),C=normalize(ids.map((function(){return(0,utils.SN)(0,20)}))),D=normalize(ids.map((function(){return(0,utils.SN)(0,20)}))),E=normalize(ids.map((function(){return(0,utils.SN)(0,20)}))),F=normalize(ids.map((function(){return(0,utils.SN)(0,20)})));return ids.map((function(id,index){return{id,A:A[index],B:B[index],C:C[index],D:D[index],E:E[index],F:F[index]}}))},chart:HeatTableChart,steps:["title","subtitle","grid","A","B","C","D","E","F","download"]}},SingleValues={name:"single values",args:{generator:function generateSingleValuesData(){return[{id:"data",data:Array(5).fill(0).map((function(){return Math.round((0,utils.SN)(0,100))}))}]},chart:SingleValuesChart,comment:(0,jsx_runtime.jsx)("div",{children:"This example consists of custom-made widgets, each displaying a single percentage. Dynamic colors draw attention to entries with low values."})}};ConfusionMatrix.parameters=tables_stories_extends({},ConfusionMatrix.parameters,{docs:tables_stories_extends({},null==(_ConfusionMatrix$para=ConfusionMatrix.parameters)?void 0:_ConfusionMatrix$para.docs,{source:tables_stories_extends({originalSource:"{\n  name: 'confusion matrix',\n  args: {\n    generator: generateConfusionTableData,\n    chart: ConfusionTableChart\n  }\n}"},null==(_ConfusionMatrix$para2=ConfusionMatrix.parameters)||null==(_ConfusionMatrix$para3=_ConfusionMatrix$para2.docs)?void 0:_ConfusionMatrix$para3.source)})}),Survey.parameters=tables_stories_extends({},Survey.parameters,{docs:tables_stories_extends({},null==(_Survey$parameters=Survey.parameters)?void 0:_Survey$parameters.docs,{source:tables_stories_extends({originalSource:"{\n  name: 'survey',\n  args: {\n    generator: generateHeatTableData,\n    chart: HeatTableChart,\n    steps: ['title', 'subtitle', 'grid', 'A', 'B', 'C', 'D', 'E', 'F', 'download']\n  }\n}"},null==(_Survey$parameters2=Survey.parameters)||null==(_Survey$parameters2$d=_Survey$parameters2.docs)?void 0:_Survey$parameters2$d.source)})}),SingleValues.parameters=tables_stories_extends({},SingleValues.parameters,{docs:tables_stories_extends({},null==(_SingleValues$paramet=SingleValues.parameters)?void 0:_SingleValues$paramet.docs,{source:tables_stories_extends({originalSource:"{\n  name: 'single values',\n  args: {\n    generator: generateSingleValuesData,\n    chart: SingleValuesChart,\n    comment: <div>\n                This example consists of custom-made widgets, each displaying a single percentage.\n                Dynamic colors draw attention to entries with low values.\n            </div>\n  }\n}"},null==(_SingleValues$paramet2=SingleValues.parameters)||null==(_SingleValues$paramet3=_SingleValues$paramet2.docs)?void 0:_SingleValues$paramet3.source)})});var __namedExportsOrder=["ConfusionMatrix","Survey","SingleValues"]},"./examples/tables/tables.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_tables_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./examples/tables/tables.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_tables_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"examples-of-tables",children:"Examples of tables"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_tables_stories__WEBPACK_IMPORTED_MODULE_2__.ConfusionMatrix}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_tables_stories__WEBPACK_IMPORTED_MODULE_2__.Survey}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_tables_stories__WEBPACK_IMPORTED_MODULE_2__.SingleValues})]})}}},"./node_modules/d3-color/src/color.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B8:()=>rgb,Il:()=>Color,SU:()=>rgbConvert,Ss:()=>Rgb,ZP:()=>color});var _define_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-color/src/define.js");function Color(){}var brighter=1/.7,reI="\\s*([+-]?\\d+)\\s*",reN="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",reP="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",reHex=/^#([0-9a-f]{3,8})$/,reRgbInteger=new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),reRgbPercent=new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),reRgbaInteger=new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),reRgbaPercent=new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),reHslPercent=new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),reHslaPercent=new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`),named={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function color_formatHex(){return this.rgb().formatHex()}function color_formatRgb(){return this.rgb().formatRgb()}function color(format){var m,l;return format=(format+"").trim().toLowerCase(),(m=reHex.exec(format))?(l=m[1].length,m=parseInt(m[1],16),6===l?rgbn(m):3===l?new Rgb(m>>8&15|m>>4&240,m>>4&15|240&m,(15&m)<<4|15&m,1):8===l?rgba(m>>24&255,m>>16&255,m>>8&255,(255&m)/255):4===l?rgba(m>>12&15|m>>8&240,m>>8&15|m>>4&240,m>>4&15|240&m,((15&m)<<4|15&m)/255):null):(m=reRgbInteger.exec(format))?new Rgb(m[1],m[2],m[3],1):(m=reRgbPercent.exec(format))?new Rgb(255*m[1]/100,255*m[2]/100,255*m[3]/100,1):(m=reRgbaInteger.exec(format))?rgba(m[1],m[2],m[3],m[4]):(m=reRgbaPercent.exec(format))?rgba(255*m[1]/100,255*m[2]/100,255*m[3]/100,m[4]):(m=reHslPercent.exec(format))?hsla(m[1],m[2]/100,m[3]/100,1):(m=reHslaPercent.exec(format))?hsla(m[1],m[2]/100,m[3]/100,m[4]):named.hasOwnProperty(format)?rgbn(named[format]):"transparent"===format?new Rgb(NaN,NaN,NaN,0):null}function rgbn(n){return new Rgb(n>>16&255,n>>8&255,255&n,1)}function rgba(r,g,b,a){return a<=0&&(r=g=b=NaN),new Rgb(r,g,b,a)}function rgbConvert(o){return o instanceof Color||(o=color(o)),o?new Rgb((o=o.rgb()).r,o.g,o.b,o.opacity):new Rgb}function rgb(r,g,b,opacity){return 1===arguments.length?rgbConvert(r):new Rgb(r,g,b,null==opacity?1:opacity)}function Rgb(r,g,b,opacity){this.r=+r,this.g=+g,this.b=+b,this.opacity=+opacity}function rgb_formatHex(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}`}function rgb_formatRgb(){const a=clampa(this.opacity);return`${1===a?"rgb(":"rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${1===a?")":`, ${a})`}`}function clampa(opacity){return isNaN(opacity)?1:Math.max(0,Math.min(1,opacity))}function clampi(value){return Math.max(0,Math.min(255,Math.round(value)||0))}function hex(value){return((value=clampi(value))<16?"0":"")+value.toString(16)}function hsla(h,s,l,a){return a<=0?h=s=l=NaN:l<=0||l>=1?h=s=NaN:s<=0&&(h=NaN),new Hsl(h,s,l,a)}function hslConvert(o){if(o instanceof Hsl)return new Hsl(o.h,o.s,o.l,o.opacity);if(o instanceof Color||(o=color(o)),!o)return new Hsl;if(o instanceof Hsl)return o;var r=(o=o.rgb()).r/255,g=o.g/255,b=o.b/255,min=Math.min(r,g,b),max=Math.max(r,g,b),h=NaN,s=max-min,l=(max+min)/2;return s?(h=r===max?(g-b)/s+6*(g<b):g===max?(b-r)/s+2:(r-g)/s+4,s/=l<.5?max+min:2-max-min,h*=60):s=l>0&&l<1?0:h,new Hsl(h,s,l,o.opacity)}function Hsl(h,s,l,opacity){this.h=+h,this.s=+s,this.l=+l,this.opacity=+opacity}function clamph(value){return(value=(value||0)%360)<0?value+360:value}function clampt(value){return Math.max(0,Math.min(1,value||0))}function hsl2rgb(h,m1,m2){return 255*(h<60?m1+(m2-m1)*h/60:h<180?m2:h<240?m1+(m2-m1)*(240-h)/60:m1)}(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.Z)(Color,color,{copy(channels){return Object.assign(new this.constructor,this,channels)},displayable(){return this.rgb().displayable()},hex:color_formatHex,formatHex:color_formatHex,formatHex8:function color_formatHex8(){return this.rgb().formatHex8()},formatHsl:function color_formatHsl(){return hslConvert(this).formatHsl()},formatRgb:color_formatRgb,toString:color_formatRgb}),(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.Z)(Rgb,rgb,(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.l)(Color,{brighter(k){return k=null==k?brighter:Math.pow(brighter,k),new Rgb(this.r*k,this.g*k,this.b*k,this.opacity)},darker(k){return k=null==k?.7:Math.pow(.7,k),new Rgb(this.r*k,this.g*k,this.b*k,this.opacity)},rgb(){return this},clamp(){return new Rgb(clampi(this.r),clampi(this.g),clampi(this.b),clampa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:rgb_formatHex,formatHex:rgb_formatHex,formatHex8:function rgb_formatHex8(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:rgb_formatRgb,toString:rgb_formatRgb})),(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.Z)(Hsl,(function hsl(h,s,l,opacity){return 1===arguments.length?hslConvert(h):new Hsl(h,s,l,null==opacity?1:opacity)}),(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.l)(Color,{brighter(k){return k=null==k?brighter:Math.pow(brighter,k),new Hsl(this.h,this.s,this.l*k,this.opacity)},darker(k){return k=null==k?.7:Math.pow(.7,k),new Hsl(this.h,this.s,this.l*k,this.opacity)},rgb(){var h=this.h%360+360*(this.h<0),s=isNaN(h)||isNaN(this.s)?0:this.s,l=this.l,m2=l+(l<.5?l:1-l)*s,m1=2*l-m2;return new Rgb(hsl2rgb(h>=240?h-240:h+120,m1,m2),hsl2rgb(h,m1,m2),hsl2rgb(h<120?h+240:h-120,m1,m2),this.opacity)},clamp(){return new Hsl(clamph(this.h),clampt(this.s),clampt(this.l),clampa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const a=clampa(this.opacity);return`${1===a?"hsl(":"hsla("}${clamph(this.h)}, ${100*clampt(this.s)}%, ${100*clampt(this.l)}%${1===a?")":`, ${a})`}`}}))},"./node_modules/d3-color/src/define.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function __WEBPACK_DEFAULT_EXPORT__(constructor,factory,prototype){constructor.prototype=factory.prototype=prototype,prototype.constructor=constructor}function extend(parent,definition){var prototype=Object.create(parent.prototype);for(var key in definition)prototype[key]=definition[key];return prototype}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,l:()=>extend})},"./node_modules/d3-interpolate/src/color.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>nogamma,yi:()=>gamma});var _constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-interpolate/src/constant.js");function linear(a,d){return function(t){return a+t*d}}function gamma(y){return 1==(y=+y)?nogamma:function(a,b){return b-a?function exponential(a,b,y){return a=Math.pow(a,y),b=Math.pow(b,y)-a,y=1/y,function(t){return Math.pow(a+t*b,y)}}(a,b,y):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(isNaN(a)?b:a)}}function nogamma(a,b){var d=b-a;return d?linear(a,d):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(isNaN(a)?b:a)}},"./node_modules/d3-interpolate/src/constant.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=x=>()=>x},"./node_modules/d3-interpolate/src/rgb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>rgb,hD:()=>rgbBasis});var src_color=__webpack_require__("./node_modules/d3-color/src/color.js");function basis(t1,v0,v1,v2,v3){var t2=t1*t1,t3=t2*t1;return((1-3*t1+3*t2-t3)*v0+(4-6*t2+3*t3)*v1+(1+3*t1+3*t2-3*t3)*v2+t3*v3)/6}var d3_interpolate_src_color=__webpack_require__("./node_modules/d3-interpolate/src/color.js");const rgb=function rgbGamma(y){var color=(0,d3_interpolate_src_color.yi)(y);function rgb(start,end){var r=color((start=(0,src_color.B8)(start)).r,(end=(0,src_color.B8)(end)).r),g=color(start.g,end.g),b=color(start.b,end.b),opacity=(0,d3_interpolate_src_color.ZP)(start.opacity,end.opacity);return function(t){return start.r=r(t),start.g=g(t),start.b=b(t),start.opacity=opacity(t),start+""}}return rgb.gamma=rgbGamma,rgb}(1);function rgbSpline(spline){return function(colors){var i,color,n=colors.length,r=new Array(n),g=new Array(n),b=new Array(n);for(i=0;i<n;++i)color=(0,src_color.B8)(colors[i]),r[i]=color.r||0,g[i]=color.g||0,b[i]=color.b||0;return r=spline(r),g=spline(g),b=spline(b),color.opacity=1,function(t){return color.r=r(t),color.g=g(t),color.b=b(t),color+""}}}var rgbBasis=rgbSpline((function src_basis(values){var n=values.length-1;return function(t){var i=t<=0?t=0:t>=1?(t=1,n-1):Math.floor(t*n),v1=values[i],v2=values[i+1],v0=i>0?values[i-1]:2*v1-v2,v3=i<n-1?values[i+2]:2*v2-v1;return basis((t-i/n)*n,v0,v1,v2,v3)}}));rgbSpline((function basisClosed(values){var n=values.length;return function(t){var i=Math.floor(((t%=1)<0?++t:t)*n),v0=values[(i+n-1)%n],v1=values[i%n],v2=values[(i+1)%n],v3=values[(i+2)%n];return basis((t-i/n)*n,v0,v1,v2,v3)}}))},"./node_modules/d3-scale-chromatic/src/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function __WEBPACK_DEFAULT_EXPORT__(specifier){for(var n=specifier.length/6|0,colors=new Array(n),i=0;i<n;)colors[i]="#"+specifier.slice(6*i,6*++i);return colors}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})},"./node_modules/d3-scale-chromatic/src/ramp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-interpolate/src/rgb.js");const __WEBPACK_DEFAULT_EXPORT__=scheme=>(0,d3_interpolate__WEBPACK_IMPORTED_MODULE_0__.hD)(scheme[scheme.length-1])},"./node_modules/d3-scale-chromatic/src/sequential-single/Blues.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,r:()=>scheme});var _colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-scale-chromatic/src/colors.js"),_ramp_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-scale-chromatic/src/ramp.js"),scheme=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(_colors_js__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=(0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__.Z)(scheme)}}]);