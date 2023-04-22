"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8296,1454],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./examples/histograms/histograms.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Annotations:()=>Annotations,ManyDistributions:()=>ManyDistributions,MouseInteractions:()=>MouseInteractions,MultipleViews:()=>MultipleViews,__namedExportsOrder:()=>__namedExportsOrder,default:()=>histograms_stories});var gallery=__webpack_require__("./examples/gallery.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),chsk_xy_es=__webpack_require__("./packages/xy/dist/chsk-xy.es.js"),chsk_annotation_es=__webpack_require__("./packages/annotation/dist/chsk-annotation.es.js"),utils=__webpack_require__("./examples/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var customHistogramTheme={line:{intervalLabel:{stroke:"#222255"}},path:{default:{fillOpacity:0},histogramCurve:{strokeWidth:2},histogramArea:{fillOpacity:.2}},text:{axisLabel:{textAnchor:"middle",dominantBaseline:"auto"},lineLabel:{textAnchor:"middle",fontWeight:400,fill:"#222255"}}},customHistogramProps={breaks:(0,utils.g_)([-3,7],.2),scaleX:{variant:"linear",domain:[-3,7]},scaleY:{variant:"linear",domain:[0,"auto"]}},LineHistogramChart=function LineHistogramChart(_ref){var fref=_ref.fref,chartData=_ref.chartData,rawData=_ref.rawData;return(0,chsk_xy_es.tA)(rawData)?(0,jsx_runtime.jsx)(chsk_core_es.kL2,{id:"lineHistogram",fref,data:chartData,size:[600,320],padding:[60,40,60,60],theme:customHistogramTheme,children:(0,jsx_runtime.jsxs)(chsk_xy_es.b5,_extends({},customHistogramProps,{data:rawData,children:[(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"axes",children:[(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"counts"}),(0,jsx_runtime.jsxs)(chsk_core_es.RDh,{variant:"bottom",children:[(0,jsx_runtime.jsx)(chsk_core_es.$Co,{style:{strokeWidth:1}}),(0,jsx_runtime.jsx)(chsk_core_es.yAs,{ticks:8}),(0,jsx_runtime.jsx)(chsk_core_es.kpH,{children:"values (a.u.)"})]})]}),(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"data",children:[(0,jsx_runtime.jsx)(chsk_xy_es.dA,{ids:["custom"],curve:"Step"}),(0,jsx_runtime.jsx)(chsk_xy_es.LY,{ids:["custom"],curve:"Step"})]}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"primary-label",children:(0,jsx_runtime.jsx)(chsk_annotation_es.Dt,{start:[-2,-.05],end:[2,-.05],units:["view","relative"],align:.5,children:"Primary population"})}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"secondary-label",children:(0,jsx_runtime.jsx)(chsk_annotation_es.Dt,{start:[3.4,15],end:[5.6,15],units:"view",children:"Secondary population"})})]}))}):null};LineHistogramChart.displayName="LineHistogramChart";try{LineHistogramChart.displayName="LineHistogramChart",LineHistogramChart.__docgenInfo={description:"",displayName:"LineHistogramChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/histograms/LineHistogramChart.tsx#LineHistogramChart"]={docgenInfo:LineHistogramChart.__docgenInfo,name:"LineHistogramChart",path:"examples/histograms/LineHistogramChart.tsx#LineHistogramChart"})}catch(__react_docgen_typescript_loader_error){}var navigation=__webpack_require__("./examples/navigation.tsx"),chsk_themes_es=__webpack_require__("./packages/themes/dist/chsk-themes.es.js");function ManyLinesHistogramChart_extends(){return ManyLinesHistogramChart_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},ManyLinesHistogramChart_extends.apply(this,arguments)}var ids=utils.eB.slice(0,4),customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{line:{axis:{strokeWidth:1},legendSymbol:{strokeWidth:3}},path:{histogramCurve:{strokeWidth:3,pointerEvents:"stroke"},default:{fillOpacity:0}},rect:{"tooltip.surface":{strokeWidth:1,stroke:"#555555"}}}),histogramProps={breaks:(0,utils.g_)([0,12],.4),scaleX:{variant:"linear",domain:[0,12]},scaleY:{variant:"linear",domain:[0,"auto"]}},customTooltipLabel=function customTooltipLabel(x){var _xh$mean,_xh$sd,xh=x;return x.id+", "+(0,utils.$F)(null!=(_xh$mean=xh.mean)?_xh$mean:0)+" ± "+(0,utils.$F)(null!=(_xh$sd=xh.sd)?_xh$sd:0)+" (n = "+xh.n+")"},ManyLinesHistogramChart=function ManyLinesHistogramChart(_ref){var fref=_ref.fref,chartData=_ref.chartData,rawData=_ref.rawData;return(0,chsk_xy_es.tA)(rawData)?(0,jsx_runtime.jsx)(chsk_core_es.kL2,{id:"many-histograms",fref,data:chartData,size:[480,380],padding:[80,40,60,70],theme:customTheme,children:(0,jsx_runtime.jsxs)(chsk_xy_es.b5,ManyLinesHistogramChart_extends({},histogramProps,{data:rawData,variant:"density",children:[(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[-55,-50],children:"Many distributions"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"subtitle",position:[-55,-30],children:"Distributions where variance decreases with mean"}),(0,jsx_runtime.jsx)(navigation.N,{position:[310,-50],data:!0,image:!0}),(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"axes",children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"density"}),(0,jsx_runtime.jsxs)(chsk_core_es.RDh,{variant:"bottom",children:[(0,jsx_runtime.jsx)(chsk_core_es.$Co,{style:{strokeWidth:1}}),(0,jsx_runtime.jsx)(chsk_core_es.yAs,{ticks:8}),(0,jsx_runtime.jsx)(chsk_core_es.kpH,{children:"values (a.u.)"})]})]}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"legend",children:(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{offset:[8,0],position:[0,0],positionUnits:"relative",horizontal:!1,r:8,itemSize:[100,20],itemPadding:[2,2,2,2],firstOffset:[-85,24],symbol:chsk_annotation_es.XX})}),(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:"data",children:[(0,jsx_runtime.jsx)(chsk_xy_es.LY,{curve:"Step",dataComponent:chsk_core_es.oKN}),(0,jsx_runtime.jsx)(chsk_core_es.ua7,{itemSize:[200,24],labelFormat:customTooltipLabel})]})]}))}):null};ManyLinesHistogramChart.displayName="ManyLinesHistogramChart";try{ManyLinesHistogramChart.displayName="ManyLinesHistogramChart",ManyLinesHistogramChart.__docgenInfo={description:"",displayName:"ManyLinesHistogramChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/histograms/ManyLinesHistogramChart.tsx#ManyLinesHistogramChart"]={docgenInfo:ManyLinesHistogramChart.__docgenInfo,name:"ManyLinesHistogramChart",path:"examples/histograms/ManyLinesHistogramChart.tsx#ManyLinesHistogramChart"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js");function OverlappingHistogramChart_extends(){return OverlappingHistogramChart_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},OverlappingHistogramChart_extends.apply(this,arguments)}var OverlappingHistogramChart_customHistogramTheme={line:{intervalLabel:{strokeWidth:1,stroke:"#222255"}},path:{default:{fillOpacity:0},histogramCurve:{strokeWidth:2,pointerEvents:"none"},histogramArea:{cursor:"pointer",fillOpacity:.2},"histogramArea:hover":{fillOpacity:.4}},rect:{histogramBar:{fillOpacity:.2,cursor:"pointer"},"histogramBar:hover":{fillOpacity:.4}},text:{axisLabel:{textAnchor:"middle",dominantBaseline:"auto"}}},OverlappingHistogramChart_customHistogramProps={breaks:(0,utils.g_)([-3,7.2],.5),scaleX:{variant:"linear",domain:[-3,7]},scaleY:{variant:"linear",domain:[0,"auto"]}},ClickSummary=function ClickSummary(_ref){var data=_ref.data,labelStyle={fontWeight:600,color:"#444444",minWidth:"4rem",display:"inline-block"},breaks=data.breaks,domain=data.bin?"["+breaks[data.bin-1]+", "+breaks[data.bin]+"]":null,value=data.bin?data.points[data.bin][1]:null;return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{style:labelStyle,children:"series:"}),data.id]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{style:labelStyle,children:"bin:"}),data.bin]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{style:labelStyle,children:"domain:"}),domain]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{style:labelStyle,children:"value:"}),value]})]})};ClickSummary.displayName="ClickSummary";var OverlappingHistogramChart=function OverlappingHistogramChart(_ref2){var fref=_ref2.fref,chartData=_ref2.chartData,rawData=_ref2.rawData;if(!(0,chsk_xy_es.tA)(rawData))return null;var _useState=(0,react.useState)(null),clicked=_useState[0],setClicked=_useState[1];return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(chsk_core_es.kL2,{id:"overlapping",fref,data:chartData,size:[600,340],padding:[60,60,60,60],theme:OverlappingHistogramChart_customHistogramTheme,children:(0,jsx_runtime.jsxs)(chsk_xy_es.b5,OverlappingHistogramChart_extends({},OverlappingHistogramChart_customHistogramProps,{data:rawData,children:[(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"counts"}),(0,jsx_runtime.jsxs)(chsk_core_es.RDh,{variant:"bottom",children:[(0,jsx_runtime.jsx)(chsk_core_es.$Co,{style:{strokeWidth:1}}),(0,jsx_runtime.jsx)(chsk_core_es.yAs,{ticks:8}),(0,jsx_runtime.jsx)(chsk_core_es.kpH,{children:"values (a.u.)"})]}),(0,jsx_runtime.jsx)(chsk_xy_es.dA,{ids:["A"],curve:"Step",handlers:{onClick:function onClickArea(data){setClicked(null!=data?data:null)}}}),(0,jsx_runtime.jsx)(chsk_xy_es.LY,{ids:["A"],curve:"Step"}),(0,jsx_runtime.jsx)(chsk_xy_es.pP,{ids:["B"],handlers:{onClick:function onClickBars(data){setClicked(null!=data?data:null)}}}),(0,jsx_runtime.jsx)(chsk_xy_es.LY,{ids:["B"],curve:"Step"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[-55,-40],children:"Clickable histograms"}),(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{position:[510,-36],size:[140,20],sizeUnits:"absolute",horizontal:!0,anchor:[1,1],padding:[0,0,0,0],r:9,itemSize:[70,20],itemPadding:[2,2,2,2]})]}))}),(0,jsx_runtime.jsxs)("div",{style:{margin:"1em",padding:"1em",border:"solid 1px #bbbbbb",background:"#f8f8f8",minHeight:"3rem"},children:[(0,jsx_runtime.jsx)("div",{style:{fontWeight:600,color:"#444444",marginBottom:"0.75rem"},children:"This is an html div element. It responds to click events."}),clicked?(0,jsx_runtime.jsx)(ClickSummary,{data:clicked}):null]})]})};OverlappingHistogramChart.displayName="OverlappingHistogramChart";try{OverlappingHistogramChart.displayName="OverlappingHistogramChart",OverlappingHistogramChart.__docgenInfo={description:"",displayName:"OverlappingHistogramChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/histograms/OverlappingHistogramChart.tsx#OverlappingHistogramChart"]={docgenInfo:OverlappingHistogramChart.__docgenInfo,name:"OverlappingHistogramChart",path:"examples/histograms/OverlappingHistogramChart.tsx#OverlappingHistogramChart"})}catch(__react_docgen_typescript_loader_error){}function MultipleViewsHistogramChart_extends(){return MultipleViewsHistogramChart_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},MultipleViewsHistogramChart_extends.apply(this,arguments)}var multiviewTheme={line:{axis:{visibility:"visible",strokeWidth:1}},path:{default:{fillOpacity:0},histogramCurve:{strokeWidth:3}},rect:{inner:{fill:"#ffffff00",stroke:"#222222",strokeWidth:1},boxedLabel:{fill:"#f6f6f6",stroke:"#222222",strokeWidth:1}},text:{axisLabel:{textAnchor:"middle",dominantBaseline:"auto"},title:{fontWeight:400}}},multiviewHistogramProps={variant:"density",breaks:(0,utils.g_)([-3,4],.4),scaleX:{variant:"linear",domain:[-3,4]},scaleY:{variant:"linear",domain:[0,.55]}},AppearingLabel=function AppearingLabel(_ref){var enterOn=_ref.enterOn,n=_ref.n;return(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enter:{opacity:1,scale:1.5},enterOn,exit:null,transition:{type:"spring",delay:.5,duration:1},children:(0,jsx_runtime.jsx)(chsk_annotation_es.I6,{position:[1,0],positionUnits:"relative",size:[60,24],sizeUnits:"absolute",anchor:[1,0],children:"n = "+n})})};AppearingLabel.displayName="AppearingLabel";var _Annotations$paramete,_Annotations$paramete2,_Annotations$paramete3,_ManyDistributions$pa,_ManyDistributions$pa2,_ManyDistributions$pa3,_MouseInteractions$pa,_MouseInteractions$pa2,_MouseInteractions$pa3,_MultipleViews$parame,_MultipleViews$parame2,_MultipleViews$parame3,MultipleViewsHistogramChart=function MultipleViewsHistogramChart(_ref2){var fref=_ref2.fref,chartData=_ref2.chartData,rawData=_ref2.rawData;return(0,chsk_xy_es.tA)(rawData)?(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{data:chartData,fref,id:"multiview",size:[600,340],padding:[60,40,40,60],theme:multiviewTheme,children:[(0,jsx_runtime.jsxs)(chsk_core_es.rjZ,{grid:[3,1],spacing:[6,0],children:[(0,jsx_runtime.jsx)(chsk_core_es.P4e,{index:0,children:(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"small",children:(0,jsx_runtime.jsxs)(chsk_xy_es.b5,MultipleViewsHistogramChart_extends({},multiviewHistogramProps,{data:rawData,children:[(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y"}),(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom"}),(0,jsx_runtime.jsx)(chsk_xy_es.LY,{ids:["small"]}),(0,jsx_runtime.jsxs)(chsk_core_es.RDh,{variant:"left",children:[(0,jsx_runtime.jsx)(chsk_core_es.yAs,{tickSize:0}),(0,jsx_runtime.jsx)(chsk_core_es.kpH,{children:"probability density"})]}),(0,jsx_runtime.jsx)(AppearingLabel,{enterOn:"small",n:rawData[0].data.length})]}))})}),(0,jsx_runtime.jsx)(chsk_core_es.P4e,{index:1,children:(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"medium",children:(0,jsx_runtime.jsxs)(chsk_xy_es.b5,MultipleViewsHistogramChart_extends({},multiviewHistogramProps,{data:rawData,children:[(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y"}),(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",label:"values (a.u.)"}),(0,jsx_runtime.jsx)(chsk_xy_es.LY,{ids:["medium"]}),(0,jsx_runtime.jsx)(AppearingLabel,{enterOn:"medium",n:rawData[1].data.length})]}))})}),(0,jsx_runtime.jsx)(chsk_core_es.P4e,{index:2,children:(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"large",children:(0,jsx_runtime.jsxs)(chsk_xy_es.b5,MultipleViewsHistogramChart_extends({},multiviewHistogramProps,{data:rawData,children:[(0,jsx_runtime.jsx)(chsk_core_es.VJA,{variant:"y"}),(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom"}),(0,jsx_runtime.jsx)(chsk_xy_es.LY,{ids:["large"]}),(0,jsx_runtime.jsx)(AppearingLabel,{enterOn:"large",n:rawData[2].data.length})]}))})})]}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[0,-40],children:"Three measurements of the same distribution"}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"subtitle",children:(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"subtitle",position:[0,-20],children:"Measurements involve sampling n points from a distribution"})})]}):null};MultipleViewsHistogramChart.displayName="MultipleViewsHistogramChart";try{MultipleViewsHistogramChart.displayName="MultipleViewsHistogramChart",MultipleViewsHistogramChart.__docgenInfo={description:"",displayName:"MultipleViewsHistogramChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/histograms/MultipleViewsHistogramChart.tsx#MultipleViewsHistogramChart"]={docgenInfo:MultipleViewsHistogramChart.__docgenInfo,name:"MultipleViewsHistogramChart",path:"examples/histograms/MultipleViewsHistogramChart.tsx#MultipleViewsHistogramChart"})}catch(__react_docgen_typescript_loader_error){}function histograms_stories_extends(){return histograms_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},histograms_stories_extends.apply(this,arguments)}const histograms_stories=histograms_stories_extends({},gallery.m,{title:"Gallery/Histograms"});var Annotations={name:"annotations",args:{generator:function generateLineHistogramData(){return[{id:"custom",data:(0,utils.G0)([500,50,40],[0,0,4.5],[1,2,.5])}]},chart:LineHistogramChart,steps:["axes","data","primary-label","secondary-label"]}},ManyDistributions={name:"many distributions",args:{generator:function generateManyLinesHistogramData(){var means=(0,utils.Bh)(4,5,9).sort((function(a,b){return a-b})),sds=(0,utils.Bh)(4,.5,2.5).sort((function(a,b){return b-a})),positive=function positive(v){return v>0};return ids.map((function(id,index){return{id,data:(0,utils.G0)([1e3],[means[index]],[sds[index]]).filter(positive)}}))},chart:ManyLinesHistogramChart,steps:["axes","data","legend"]}},MouseInteractions={name:"mouse interactions",args:{generator:function generateOverlappingHistogramData(){return[{id:"A",data:(0,utils.G0)([340,50],[0,0],[1,2])},{id:"B",data:(0,utils.G0)([300,200],[2,2],[1.5,2.5])}]},chart:OverlappingHistogramChart,comment:(0,jsx_runtime.jsx)("div",{children:"Mouse interactions with entire histogram or with individual bins."})}},MultipleViews={name:"multiple views",args:{generator:function generateMultipleViewsHistogramData(){return[{id:"small",data:(0,utils.G0)([60,40],[0,1.2],[.8,1])},{id:"medium",data:(0,utils.G0)([360,240],[0,1.2],[.8,1])},{id:"large",data:(0,utils.G0)([2160,1440],[0,1.2],[.8,1])}]},chart:MultipleViewsHistogramChart,steps:["subtitle","small","medium","large"]}};Annotations.parameters=histograms_stories_extends({},Annotations.parameters,{docs:histograms_stories_extends({},null==(_Annotations$paramete=Annotations.parameters)?void 0:_Annotations$paramete.docs,{source:histograms_stories_extends({originalSource:"{\n  name: 'annotations',\n  args: {\n    generator: generateLineHistogramData,\n    chart: LineHistogramChart,\n    steps: ['axes', 'data', 'primary-label', 'secondary-label']\n  }\n}"},null==(_Annotations$paramete2=Annotations.parameters)||null==(_Annotations$paramete3=_Annotations$paramete2.docs)?void 0:_Annotations$paramete3.source)})}),ManyDistributions.parameters=histograms_stories_extends({},ManyDistributions.parameters,{docs:histograms_stories_extends({},null==(_ManyDistributions$pa=ManyDistributions.parameters)?void 0:_ManyDistributions$pa.docs,{source:histograms_stories_extends({originalSource:"{\n  name: 'many distributions',\n  args: {\n    generator: generateManyLinesHistogramData,\n    chart: ManyLinesHistogramChart,\n    steps: ['axes', 'data', 'legend']\n  }\n}"},null==(_ManyDistributions$pa2=ManyDistributions.parameters)||null==(_ManyDistributions$pa3=_ManyDistributions$pa2.docs)?void 0:_ManyDistributions$pa3.source)})}),MouseInteractions.parameters=histograms_stories_extends({},MouseInteractions.parameters,{docs:histograms_stories_extends({},null==(_MouseInteractions$pa=MouseInteractions.parameters)?void 0:_MouseInteractions$pa.docs,{source:histograms_stories_extends({originalSource:"{\n  name: 'mouse interactions',\n  args: {\n    generator: generateOverlappingHistogramData,\n    chart: OverlappingHistogramChart,\n    comment: <div>Mouse interactions with entire histogram or with individual bins.</div>\n  }\n}"},null==(_MouseInteractions$pa2=MouseInteractions.parameters)||null==(_MouseInteractions$pa3=_MouseInteractions$pa2.docs)?void 0:_MouseInteractions$pa3.source)})}),MultipleViews.parameters=histograms_stories_extends({},MultipleViews.parameters,{docs:histograms_stories_extends({},null==(_MultipleViews$parame=MultipleViews.parameters)?void 0:_MultipleViews$parame.docs,{source:histograms_stories_extends({originalSource:"{\n  name: 'multiple views',\n  args: {\n    generator: generateMultipleViewsHistogramData,\n    chart: MultipleViewsHistogramChart,\n    steps: ['subtitle', 'small', 'medium', 'large']\n  }\n}"},null==(_MultipleViews$parame2=MultipleViews.parameters)||null==(_MultipleViews$parame3=_MultipleViews$parame2.docs)?void 0:_MultipleViews$parame3.source)})});var __namedExportsOrder=["Annotations","ManyDistributions","MouseInteractions","MultipleViews"]},"./examples/histograms/histograms.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_histograms_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./examples/histograms/histograms.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_histograms_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"examples-of-histograms",children:"Examples of histograms"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_histograms_stories__WEBPACK_IMPORTED_MODULE_2__.Annotations}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_histograms_stories__WEBPACK_IMPORTED_MODULE_2__.ManyDistributions}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_histograms_stories__WEBPACK_IMPORTED_MODULE_2__.MouseInteractions}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_histograms_stories__WEBPACK_IMPORTED_MODULE_2__.MultipleViews})]})}}}}]);