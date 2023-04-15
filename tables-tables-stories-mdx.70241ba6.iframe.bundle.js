"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4989],{"./examples/tables/tables.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{confusionMatrix:()=>confusionMatrix,default:()=>tables_stories,singleValues:()=>singleValues,surveyTable:()=>surveyTable});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Controller=__webpack_require__("./examples/Controller.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),chsk_matrix_es=__webpack_require__("./packages/matrix/dist/chsk-matrix.es.js"),chsk_annotation_es=__webpack_require__("./packages/annotation/dist/chsk-annotation.es.js"),chsk_themes_es=__webpack_require__("./packages/themes/dist/chsk-themes.es.js"),Blues=__webpack_require__("./node_modules/d3-scale-chromatic/src/sequential-single/Blues.js"),utils=__webpack_require__("./examples/utils.ts"),navigation=__webpack_require__("./examples/navigation.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var keys=["A","B","C"],generateConfusionTableData=function generateConfusionTableData(){return[{id:"A",A:Math.round((0,utils.SN)(50,100)),B:Math.round((0,utils.SN)(5,30)),C:Math.round((0,utils.SN)(10,20))},{id:"B",A:Math.round((0,utils.SN)(10,20)),B:Math.round((0,utils.SN)(50,100)),C:Math.round((0,utils.SN)(0,10))},{id:"C",A:Math.round((0,utils.SN)(0,20)),B:Math.round((0,utils.SN)(10,30)),C:Math.round((0,utils.SN)(60,100))}]},customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{rect:{boxedTitle:{stroke:"#222222",strokeWidth:1,fill:"#fafafa"}},line:{grid:{stroke:"#222222"}},text:{"label.outer":{fontSize:"16px",fontWeight:600},"counter.cell":{textAnchor:"middle",dominantBaseline:"middle",fontSize:"18px"},"counter.cell.highvalue":{fill:"#ffffff"},tickLabel:{fontSize:"16px",fontWeight:600}},AxisTicks:{top:{tickSize:0,labelDistance:10},left:{tickSize:0,labelDistance:11}},Motion:{default:{type:"spring",mass:.5,stiffness:200,damping:25}}}),HeatMapCounter=function HeatMapCounter(_ref){var x=_ref.x,y=_ref.y,width=_ref.width,height=_ref.height,className=_ref.className,style=_ref.style,cellValue=_ref.cellValue,color=(0,(0,chsk_core_es.kE1)().scales.color)(Number(cellValue));return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x,y,width,height,fill:color,style:_extends({},style,{fill:void 0}),center:!0}),(0,jsx_runtime.jsx)(chsk_core_es.ATJ,{setRole:!1,position:[x,y],size:[width,height],style:_extends({},style,{fill:void 0}),className:(null!=cellValue?cellValue:0)>65?className+" highvalue":className,children:cellValue})]})},ConfusionTableChart=function ConfusionTableChart(_ref2){var fref=_ref2.fref,chartData=_ref2.chartData,rawData=_ref2.rawData;return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{data:chartData,fref,id:"confusion-table",size:[400,250],padding:[80,40,40,80],theme:customTheme,children:(0,jsx_runtime.jsxs)(chsk_matrix_es.Br,{data:rawData,keys,scaleColor:{variant:"sequential",colors:Blues.Z,domain:[0,100]},children:[(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapCounter,style:{strokeWidth:0}}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"x",shift:[-.5,.5]}),(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y",shift:[-.5,.5]}),(0,jsx_runtime.jsx)(chsk_annotation_es.Q1,{variant:"left",offset:0,size:35}),(0,jsx_runtime.jsx)(chsk_annotation_es.Q1,{variant:"left",offset:35,size:35,className:"outer",children:"Ground truth"}),(0,jsx_runtime.jsx)(chsk_annotation_es.Q1,{variant:"top",offset:0,size:32}),(0,jsx_runtime.jsx)(chsk_annotation_es.Q1,{variant:"top",offset:32,size:32,className:"outer",children:"Model prediction"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"top"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"}),(0,jsx_runtime.jsx)(navigation.N,{position:[210,150],data:!0})]})})};ConfusionTableChart.displayName="ConfusionTableChart";try{ConfusionTableChart.displayName="ConfusionTableChart",ConfusionTableChart.__docgenInfo={description:"",displayName:"ConfusionTableChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/tables/ConfusionTableChart.tsx#ConfusionTableChart"]={docgenInfo:ConfusionTableChart.__docgenInfo,name:"ConfusionTableChart",path:"examples/tables/ConfusionTableChart.tsx#ConfusionTableChart"})}catch(__react_docgen_typescript_loader_error){}function HeatTableChart_extends(){return HeatTableChart_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},HeatTableChart_extends.apply(this,arguments)}var ids=utils.eB.slice(0,6),HeatTableChart_keys=["A","B","C","D","E","F"],generateHeatTableData=function generateHeatTableData(){var normalize=function normalize(x){var sum=x.reduce((function(prev,value){return prev+value}),0);return x.map((function(value){return Math.round(100*value/sum)}))},A=normalize(ids.map((function(){return(0,utils.SN)(0,20)}))),B=normalize(ids.map((function(){return(0,utils.SN)(0,20)}))),C=normalize(ids.map((function(){return(0,utils.SN)(0,20)}))),D=normalize(ids.map((function(){return(0,utils.SN)(0,20)}))),E=normalize(ids.map((function(){return(0,utils.SN)(0,20)}))),F=normalize(ids.map((function(){return(0,utils.SN)(0,20)})));return ids.map((function(id,index){return{id,A:A[index],B:B[index],C:C[index],D:D[index],E:E[index],F:F[index]}}))},idLabels={alpha:"Option 1",beta:"Option 2",gamma:"Option 3",delta:"Option 4",epsilon:"Option 5",zeta:"Option 6"},HeatTableChart_customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{AxisTicks:{bottom:{tickSize:0},left:{tickSize:0}},line:{grid:{strokeWidth:"3px",stroke:"#cccccc",strokeLinecap:"round",strokeDasharray:"1 8"}},text:{"counter.cell":{fontSize:"12px",fontWeight:600,strokeWidth:0,textAnchor:"middle",dominantBaseline:"middle"},"tickLabel.bottom":{fontSize:"18px",fontWeight:600,fill:"#666"},"tickLabel.left":{fontSize:"15px",fontWeight:600,fill:"#666",textAnchor:"start"},"axisLabel.bottom":{fontSize:"15px"},title:{fontSize:"22px"},subtitle:{fontSize:"15px",fontWeight:300,fill:"#666"},source:{fill:"#444444",fontSize:"11px",dominantBaseline:"middle",textAnchor:"start"}}}),HeatMapSquareCounter=function HeatMapSquareCounter(_ref){var x=_ref.x,y=_ref.y,width=_ref.width,height=_ref.height,className=_ref.className,style=_ref.style,cellSize=_ref.cellSize;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(chsk_core_es.bK0,{setRole:!1,variant:void 0,cx:x,cy:y,r:Math.min(width,height)/2,style,className}),(0,jsx_runtime.jsx)(chsk_core_es.ATJ,{setRole:!1,position:[x,y],size:[width,height],style:HeatTableChart_extends({},style,{fill:"#fff"}),className,format:function format(v){return v>9?v+"%":""},children:cellSize})]})},customTitleFormat=function customTitleFormat(x){var _x$data,data=null==(_x$data=x.data)?void 0:_x$data[0];return data&&"id"in data?idLabels[data.id]:""},customLabelFormat=function customLabelFormat(x){return x.key+": "+("size"in x?x.size:"")+"%"},HeatTableChart=function HeatTableChart(_ref2){var fref=_ref2.fref,chartData=_ref2.chartData,rawData=_ref2.rawData,colorData=rawData.map((function(seriesData){var item={id:seriesData.id};return HeatTableChart_keys.map((function(k){item[k]=k})),item}));return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{data:chartData,fref,id:"survey-table",size:[680,520],padding:[90,40,80,90],theme:HeatTableChart_customTheme,children:(0,jsx_runtime.jsxs)(chsk_matrix_es.Br,{data:colorData,dataSize:rawData,keys:HeatTableChart_keys,scaleColor:HeatTableChart_extends({},chsk_core_es.oRn,{domain:HeatTableChart_keys}),scaleSize:{variant:"sqrt",domain:[0,"auto"],size:"auto"},children:[(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"grid",children:[(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"x"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",children:(0,jsx_runtime.jsx)(chsk_core_es.yAs,{variant:"bottom",labelDistance:10})}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",children:(0,jsx_runtime.jsx)(chsk_core_es.yAs,{variant:"left",labelDistance:80,labelFormat:function labelFormat(v){return String(idLabels[String(v)])}})})]}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"A",children:(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapSquareCounter,keys:["A"]})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"B",children:(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapSquareCounter,keys:["B"]})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"C",children:(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapSquareCounter,keys:["C"]})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"D",children:(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapSquareCounter,keys:["D"]})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"E",children:(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapSquareCounter,keys:["E"]})}),(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"F",children:[(0,jsx_runtime.jsx)(chsk_matrix_es.WL,{cell:HeatMapSquareCounter,keys:["F"]}),(0,jsx_runtime.jsx)(chsk_matrix_es.ad,{style:{opacity:0}})]}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"title",children:(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[-80,-60],children:"What is the main reason for ‘X’?"})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"subtitle",children:(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"subtitle",position:[-80,-32],children:"Responders from six domains were asked to pick one answer from among six options."})}),(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"download",children:[(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"source",position:[-80,420],children:"Source: synthetic data."}),(0,jsx_runtime.jsx)(navigation.N,{position:[450,420],data:!0,image:!0})]}),(0,jsx_runtime.jsx)(chsk_core_es.ua7,{offset:[0,-15],padding:[4,0,4,0],itemSize:[80,26],itemPadding:[4,8,4,8],titleFormat:customTitleFormat,labelFormat:customLabelFormat})]})})};HeatTableChart.displayName="HeatTableChart";try{HeatMapSquareCounter.displayName="HeatMapSquareCounter",HeatMapSquareCounter.__docgenInfo={description:"",displayName:"HeatMapSquareCounter",props:{cellValue:{defaultValue:null,description:"value that determines cell color",name:"cellValue",required:!1,type:{name:"string | number"}},cellSize:{defaultValue:null,description:"value that determines cell size",name:"cellSize",required:!1,type:{name:"number"}},x:{defaultValue:null,description:"x coordinate",name:"x",required:!0,type:{name:"number"}},y:{defaultValue:null,description:"y coordinate",name:"y",required:!0,type:{name:"number"}},width:{defaultValue:null,description:"width",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"height",name:"height",required:!0,type:{name:"number"}},rx:{defaultValue:null,description:"horizontal corner radius",name:"rx",required:!1,type:{name:"number"}},ry:{defaultValue:null,description:"vertical corner radius",name:"ry",required:!1,type:{name:"number"}},center:{defaultValue:null,description:"center the rectangle around (x, y)",name:"center",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionProps"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/tables/HeatTableChart.tsx#HeatMapSquareCounter"]={docgenInfo:HeatMapSquareCounter.__docgenInfo,name:"HeatMapSquareCounter",path:"examples/tables/HeatTableChart.tsx#HeatMapSquareCounter"})}catch(__react_docgen_typescript_loader_error){}try{HeatTableChart.displayName="HeatTableChart",HeatTableChart.__docgenInfo={description:"",displayName:"HeatTableChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/tables/HeatTableChart.tsx#HeatTableChart"]={docgenInfo:HeatTableChart.__docgenInfo,name:"HeatTableChart",path:"examples/tables/HeatTableChart.tsx#HeatTableChart"})}catch(__react_docgen_typescript_loader_error){}var generateSingleValuesData=function generateSingleValuesData(){return Array(5).fill(0).map((function(){return Math.round((0,utils.SN)(0,100))}))},SingleValuesChart_customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{text:{default:{fill:void 0},widgetLabel:{fontSize:"14px",textAnchor:"start",dominantBaseline:"hanging",fill:"#bbb"},counter:{fontSize:"36px",textAnchor:"start",dominantBaseline:"auto",fill:"#bbb"},percent:{dominantBaseline:"auto",fill:"#bbb"},warning:{fill:"#555"},error:{fill:"#222"}},tspan:{percent:{dominantBaseline:"auto",fontSize:"14px",fill:"#bbb"},warning:{fill:"#555"},error:{fill:"#222"}},rect:{widget:{stroke:"#000",strokeWidth:.5}},Motion:{default:{type:"spring",mass:.5,stiffness:200,damping:25}}}),DashboardCounterValue=function DashboardCounterValue(_ref){var style=_ref.style,className=_ref.className,children=_ref.children;return(0,jsx_runtime.jsxs)("text",{style,className,children:[children,(0,jsx_runtime.jsx)("tspan",{className:"percent "+className,children:" %"})]})};DashboardCounterValue.displayName="DashboardCounterValue";var DashboardValue=function DashboardValue(_ref2){var position=_ref2.position,_ref2$size=_ref2.size,size=void 0===_ref2$size?[100,60]:_ref2$size,_ref2$padding=_ref2.padding,padding=void 0===_ref2$padding?[6,6,6,6]:_ref2$padding,title=_ref2.title,value=_ref2.value,_ref2$thresholds=_ref2.thresholds,thresholds=void 0===_ref2$thresholds?[40,20]:_ref2$thresholds,color=(0,chsk_core_es.kE1)().scales.color(value),activeClassName=value<thresholds[1]?" error":value<thresholds[0]?" warning":"";return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{fill:color,x:position[chsk_core_es.X],y:position[chsk_core_es.Y],width:size[chsk_core_es.X],height:size[chsk_core_es.Y],className:"widget"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[position[chsk_core_es.X]+padding[3],position[chsk_core_es.Y]+padding[0]],className:"widgetLabel"+activeClassName,children:title}),(0,jsx_runtime.jsx)(chsk_core_es.ATJ,{setRole:!1,position:[position[chsk_core_es.X]+padding[chsk_core_es.RLj],position[chsk_core_es.Y]+size[chsk_core_es.Y]-padding[chsk_core_es.DaS]],align:[.5,.5],className:activeClassName,component:DashboardCounterValue,children:value})]})},SingleValuesChart=function SingleValuesChart(_ref3){var fref=_ref3.fref,chartData=_ref3.chartData,rawData=_ref3.rawData;return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{data:chartData,fref,id:"single-values",size:[600,140],padding:[40,40,40,40],theme:SingleValuesChart_customTheme,children:(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{scaleColor:{variant:"diverging",colors:["#f5bb00","#ffffff","#ffffff"],domain:[0,40,100]},children:[(0,jsx_runtime.jsx)(DashboardValue,{title:"Alpha",position:[0,0],value:Number(rawData[0])}),(0,jsx_runtime.jsx)(DashboardValue,{title:"Beta",position:[100,0],value:Number(rawData[1])}),(0,jsx_runtime.jsx)(DashboardValue,{title:"Gamma",position:[200,0],value:Number(rawData[2])}),(0,jsx_runtime.jsx)(DashboardValue,{title:"Delta",position:[300,0],value:Number(rawData[3])}),(0,jsx_runtime.jsx)(DashboardValue,{title:"Epsilon",position:[400,0],value:Number(rawData[4])})]})})};SingleValuesChart.displayName="SingleValuesChart";try{DashboardCounterValue.displayName="DashboardCounterValue",DashboardCounterValue.__docgenInfo={description:"",displayName:"DashboardCounterValue",props:{children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/tables/SingleValuesChart.tsx#DashboardCounterValue"]={docgenInfo:DashboardCounterValue.__docgenInfo,name:"DashboardCounterValue",path:"examples/tables/SingleValuesChart.tsx#DashboardCounterValue"})}catch(__react_docgen_typescript_loader_error){}try{SingleValuesChart.displayName="SingleValuesChart",SingleValuesChart.__docgenInfo={description:"",displayName:"SingleValuesChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/tables/SingleValuesChart.tsx#SingleValuesChart"]={docgenInfo:SingleValuesChart.__docgenInfo,name:"SingleValuesChart",path:"examples/tables/SingleValuesChart.tsx#SingleValuesChart"})}catch(__react_docgen_typescript_loader_error){}const confusionMatrix=()=>(0,jsx_runtime.jsx)(Controller.Q,{generator:generateConfusionTableData,chart:ConfusionTableChart});confusionMatrix.storyName="confusion matrix",confusionMatrix.parameters={storySource:{source:"<Controller generator={generateConfusionTableData} chart={ConfusionTableChart} />"}};const surveyTable=()=>(0,jsx_runtime.jsx)(Controller.Q,{generator:generateHeatTableData,chart:HeatTableChart,steps:["title","subtitle","grid","A","B","C","D","E","F","download"]});surveyTable.storyName="survey table",surveyTable.parameters={storySource:{source:'<Controller generator={generateHeatTableData} chart={HeatTableChart} steps={["title", "subtitle", "grid", "A", "B", "C", "D", "E", "F", "download"]} />'}};const singleValues=()=>(0,jsx_runtime.jsx)(Controller.Q,{generator:generateSingleValuesData,chart:SingleValuesChart,comment:(0,jsx_runtime.jsx)("span",{children:"This 'table' consists of custom-made widgets, each displaying a single percentage. Dynamic colors draw attention to entries with low values."})});singleValues.storyName="single values",singleValues.parameters={storySource:{source:"<Controller generator={generateSingleValuesData} chart={SingleValuesChart} comment={<span>\n                    This 'table' consists of custom-made widgets, each displaying a single\n                    percentage. Dynamic colors draw attention to entries with low values.\n                </span>} />"}};const componentMeta={title:"Gallery/Tables",tags:["stories-mdx"],includeStories:["confusionMatrix","surveyTable","singleValues"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",span:"span"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Gallery/Tables"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"examples-of-tables",children:"Examples of tables"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"confusion matrix",children:(0,jsx_runtime.jsx)(Controller.Q,{generator:generateConfusionTableData,chart:ConfusionTableChart})})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"survey table",children:(0,jsx_runtime.jsx)(Controller.Q,{generator:generateHeatTableData,chart:HeatTableChart,steps:["title","subtitle","grid","A","B","C","D","E","F","download"]})})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"single values",children:(0,jsx_runtime.jsx)(Controller.Q,{generator:generateSingleValuesData,chart:SingleValuesChart,comment:(0,jsx_runtime.jsx)(_components.span,{children:"This 'table' consists of custom-made widgets, each displaying a single percentage. Dynamic colors draw attention to entries with low values."})})})})]})}}};const tables_stories=componentMeta},"./node_modules/d3-scale-chromatic/src/ramp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-interpolate/src/rgb.js");const __WEBPACK_DEFAULT_EXPORT__=scheme=>(0,d3_interpolate__WEBPACK_IMPORTED_MODULE_0__.hD)(scheme[scheme.length-1])},"./node_modules/d3-scale-chromatic/src/sequential-single/Blues.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,r:()=>scheme});var _colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-scale-chromatic/src/colors.js"),_ramp_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-scale-chromatic/src/ramp.js"),scheme=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(_colors_js__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=(0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__.Z)(scheme)}}]);