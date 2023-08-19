"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[1667,1285],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./examples/polar/polar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Doughnut:()=>Doughnut,Gauges:()=>Gauges,Pie:()=>polar_stories_Pie,Semicircle:()=>Semicircle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>polar_stories});var gallery=__webpack_require__("./examples/gallery.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),motion_minimal=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),use_motion_value=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-motion-value.mjs"),animate=__webpack_require__("./node_modules/framer-motion/dist/es/animation/animate.mjs"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),value=__webpack_require__("./node_modules/d3-interpolate/src/value.js"),object=__webpack_require__("./node_modules/d3-interpolate/src/object.js"),arc=__webpack_require__("./node_modules/d3-shape/src/arc.js"),Origin=function Origin(e){var t=e.setRole,r=void 0===t||t,a=e.className,d=e.style,s=e.children,u=(0,chsk_core_es.kE1)().scales,c=u.x,g=u.y,p={x:c(0),y:g(0),originX:"0px",originY:"0px"},v=(0,chsk_core_es.gjB)("origin",a);return(0,jsx_runtime.jsx)(motion_minimal.m.g,{initial:p,animate:p,role:r?"origin":void 0,style:(0,chsk_core_es.dJS)(d,p),className:v,children:s})};function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}var D=2*Math.PI,H=Math.PI/2,getTransform=function getTransform(n,e,t){return"translateX("+n+"px) translateY("+e+"px) rotate("+t+"deg)"},PolarItem=function PolarItem(r){var a=r.variant,i=void 0===a?"default":a,o=r.position,l=void 0===o?chsk_core_es.rv1:o,g=r.angleUnit,p=void 0===g?"radian":g,v=r.radial,f=r.tangential,m=r.setRole,h=void 0===m||m,A=r.children,x=(0,chsk_core_es.FgM)(),y="radian"===p,R=l[0],P=y?l[1]:(0,chsk_core_es.VlM)(l[1]),_=R*Math.sin(P),b=-R*Math.cos(P),I=0;v?I+=P-H:f&&(I+=P),I%=D,(v&&(P<0||P>Math.PI)||f&&(P<-H||P>H))&&(I+=Math.PI),I=(0,chsk_core_es.BVy)(I%D);var M=(0,react.useState)([R,P,I]),N=M[0],j=M[1],O=(0,react.useState)(!1),C=O[0],z=O[1],L=(0,use_motion_value.c)(getTransform(_,b,I));if(!A)return null;if(L.get()!==getTransform(_,b,I)&&!C){var W=x.Transition.default,X=(0,value.Z)(N,[R,P,I]);(0,animate.j)(0,1,_extends({},W,{onPlay:function onPlay(){z(!0)},onUpdate:function onUpdate(n){var e=X(n),t=e[0],r=e[1],a=e[2],i=t*Math.sin(r),o=-t*Math.cos(r);L.set(getTransform(i,o,a))},onComplete:function onComplete(){j([R,P,I]),z(!1)}}))}return(0,jsx_runtime.jsx)(motion_minimal.m.g,{role:h&&"default"!==i?i:void 0,style:{transform:L},children:A})},isPieData=function isPieData(n){var e=n.map((function(n){return"object"==typeof n&&null!==n&&"id"in n&&"data"in n}));return e.length>0&&e.every(Boolean)},isPieProcessedData=function isPieProcessedData(n){var e=n.map((function(n){return"object"==typeof n&&null!==n&&"id"in n&&"index"in n&&"startAngle"in n&&"endAngle"in n&&"data"in n&&"proportion"in n}));return e.length>0&&e.every(Boolean)},T=["container","data","angle","angleUnit","angleAlign","rOuter","rInner","scaleX","scaleY","scaleColor","children"],w={variant:"linear",domain:[-1,1],nice:!1},Pie=function Pie(n){var e=n.container,t=void 0===e?chsk_core_es.WdC:e,i=n.data,o=n.angle,l=void 0===o?0:o,u=n.angleUnit,c=void 0===u?"degree":u,b=n.angleAlign,I=void 0===b?0:b,M=n.rOuter,N=void 0===M?1:M,j=n.rInner,O=void 0===j?0:j,C=n.scaleX,k=void 0===C?w:C,L=n.scaleY,S=void 0===L?w:L,W=n.scaleColor,X=n.children,Y=_objectWithoutPropertiesLoose(n,T),B=(0,chsk_core_es.FgM)(),D=(0,chsk_core_es.uK4)(t),H=D.dimsProps,V=D.origin,q=D.innerSize,E=(0,react.useMemo)((function(){return i.map((function(n){return n.id}))}),[i]),F=(0,react.useMemo)((function(){return(0,chsk_core_es.snp)(i)}),[i]),G=(0,react.useMemo)((function(){return function(n,e,t,r,a,i){var o=n.map((function(n){return Math.max(0,n.data)})),l=o.reduce((function(n,e){return n+e}),0),d=0,u="radian"===t?e:(0,chsk_core_es.VlM)(e);return n.map((function(n,e){var t=o[e]/l,s=d,c=d+2*t*Math.PI;if(0===e){var g=u-(c-s)*r;s+=g,c+=g}return d=c,{id:n.id,index:e,data:o[e],proportion:t,startAngle:s,endAngle:c,rInner:a,rOuter:i}}))}(i,l,c,I,O,N)}),[i,l,c,I,O,N]),J=(0,react.useMemo)((function(){return e=S,t=q,r={x:(0,chsk_core_es.BRZ)(n=k),y:(0,chsk_core_es.BRZ)(e)},(0,chsk_core_es.HBl)(n)||(r.x=(0,chsk_core_es.zAC)(n,[-1,1])),(0,chsk_core_es.HBl)(e)||(r.y=(0,chsk_core_es.zAC)(e,[-1,1])),r.x.size=t[chsk_core_es.X],r.y.size=t[chsk_core_es.Y],(0,chsk_core_es.vO5)(r.x,r.y);var n,e,t,r}),[k,S,q]),K=J.x,Q=J.y,Z=(0,react.useMemo)((function(){return(0,chsk_core_es.NVB)(null!=W?W:B.Color.categorical,E)}),[W,B,E]),$=(0,chsk_core_es.cT_)({x:K,y:Q,color:Z});return(0,jsx_runtime.jsx)(chsk_core_es.PzT,_extends({variant:"pie",position:V,size:H.size,padding:H.padding,originalData:i,processedData:G,seriesIndexes:F,keys:E,scalesContextValue:$},Y,{children:(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children:X})}))},V=["innerRadius","outerRadius","r","startAngle","endAngle","angleUnit","padAngle","className","setRole"],getSliceD=function getSliceD(n){var e,t=n.innerRadius,r=n.outerRadius,a=n.r,i=void 0===a?0:a,o=n.startAngle,l=n.endAngle,d=n.padAngle,s=void 0===d?0:d;return null!=(e=(0,arc.Z)().cornerRadius(i).padAngle(s)({startAngle:o,endAngle:l,innerRadius:t,outerRadius:r}))?e:""},Slice=function Slice(r){var a=r.innerRadius,i=r.outerRadius,l=r.r,u=void 0===l?0:l,c=r.startAngle,g=r.endAngle,p=r.angleUnit,v=void 0===p?"radian":p,f=r.padAngle,m=void 0===f?0:f,h=r.className,A=r.setRole,x=void 0===A||A,y=_objectWithoutPropertiesLoose(r,V),R=(0,chsk_core_es.FgM)(),P="radian"===v,_={innerRadius:a,outerRadius:i,r:u,startAngle:P?c:(0,chsk_core_es.VlM)(c),endAngle:P?g:(0,chsk_core_es.VlM)(g),padAngle:m},b=(0,use_motion_value.c)(getSliceD(_)),I=(0,react.useState)(_),M=I[0],N=I[1],j=(0,react.useState)(!1),O=j[0],C=j[1];if(b.get()!==getSliceD(_)&&!O){var z=R.Transition.default,L=(0,object.Z)(M,_);(0,animate.j)(0,1,_extends({},z,{onPlay:function onPlay(){C(!0)},onUpdate:function onUpdate(n){b.set(getSliceD(L(n)))},onComplete:function onComplete(){N(_),C(!1)}}))}var S=(0,chsk_core_es.gjB)("slice",h);return(0,jsx_runtime.jsx)(motion_minimal.m.path,_extends({d:b,role:x?"slice":void 0,className:S},y))},q=["ids","r","padAngle","component","componentProps","className","style","dataComponent","setRole"],Slices=function Slices(n){var e=n.ids,t=n.r,r=void 0===t?0:t,a=n.padAngle,o=void 0===a?0:a,l=n.component,d=void 0===l?Slice:l,s=n.componentProps,u=n.className,c=n.style,g=n.dataComponent,p=void 0===g?chsk_core_es.oKN:g,v=n.setRole,f=void 0===v||v,m=_objectWithoutPropertiesLoose(n,q),h=(0,chsk_core_es.wIO)(),A=(0,chsk_core_es.kE1)().scales,x=A.x,y=A.color,R=h.data,P=(0,chsk_core_es.lRm)(e,null,h).idSet;if(!isPieProcessedData(R))return null;var _=(0,react.useMemo)((function(){return(0,chsk_core_es.RGn)(h.keys).map((function(n){return(0,chsk_core_es.hIX)(c,y(n))}))}),[h,c,y]),O=x(0),k=_extends({},s,{setRole:f,padAngle:o,r,className:u}),S=R.map((function(n,e){return P.has(n.id)?(0,react.createElement)(p,_extends({key:"s-"+n.id,component:d,data:n,props:_extends({},k,{innerRadius:x(n.rInner)-O,outerRadius:x(n.rOuter)-O,startAngle:n.startAngle,endAngle:n.endAngle,style:_[e]})},m)):null}));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:S})},SliceLabel=function SliceLabel(n){var e=n.innerRadius,t=n.outerRadius,r=n.startAngle,a=n.endAngle,i=n.angleUnit,l=void 0===i?"radian":i,d=n.align,u=void 0===d?[.5,.5]:d,c=n.radial,g=n.tangential,p=n.className,v=n.setRole,f=void 0!==v&&v,m=n.style,h=n.children,A=t-e,x=a-r,y=r+u[1]*x;"degree"===l&&(y=(0,chsk_core_es.VlM)(y));var R=[e+u[0]*A,y],P="";c&&(y<0||y>Math.PI)?P=" leftHemisphere ":g&&(y<-Math.PI/2||y>Math.PI/2)&&(P=" bottomHemisphere");var _=(0,chsk_core_es.gjB)("label sliceLabel"+P,p);return(0,jsx_runtime.jsx)(PolarItem,{variant:"label",position:R,angleUnit:"radian",radial:c,tangential:g,setRole:f,children:(0,jsx_runtime.jsx)("text",{className:_,style:m,children:h})})},SliceLabels=function SliceLabels(n){var e=n.ids,t=n.align,r=void 0===t?[.5,.5]:t,a=n.minAngle,o=void 0===a?10:a,l=n.angleUnit,d=void 0===l?"degree":l,u=n.format,c=void 0===u?function(n){return String(n.data)}:u,g=n.className,p=n.setRole,v=void 0!==p&&p,f=n.style,m=n.dataComponent,h=void 0===m?chsk_core_es.Wnl:m,A=n.component,x=n.componentProps,y=(0,chsk_core_es.wIO)(),R=(0,chsk_core_es.kE1)().scales.x,P=y.data,_=(0,chsk_core_es.lRm)(e,null,y).idSet;if(!isPieProcessedData(P))return null;var M="degree"===d?(0,chsk_core_es.VlM)(o):o,N=R(0),j=_extends({},x,{className:g,angleUnit:"radian",align:r,setRole:v,style:f}),k=P.map((function(n,e){return _.has(n.id)?n.endAngle-n.startAngle<M?null:(0,react.createElement)(h,{key:"l-"+e,component:null!=A?A:SliceLabel,data:n,props:_extends({},j,{startAngle:n.startAngle,endAngle:n.endAngle,innerRadius:R(n.rInner)-N,outerRadius:R(n.rOuter)-N,children:c(n)})}):null}));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:k.filter(Boolean)})},chsk_annotation_es=__webpack_require__("./packages/annotation/dist/chsk-annotation.es.js"),chsk_themes_es=__webpack_require__("./packages/themes/dist/chsk-themes.es.js"),Blues=__webpack_require__("./node_modules/d3-scale-chromatic/src/sequential-single/Blues.js"),utils=__webpack_require__("./examples/utils.ts"),navigation=__webpack_require__("./examples/navigation.tsx"),ids=utils.eB.slice(0,5).reverse(),customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{circle:{bg:{fill:"#eeeeee",strokeWidth:2,stroke:"#ffffff"}},path:{default:{fillOpacity:1,strokeWidth:2}},text:{sliceId:{fontSize:"14px",fontWeight:400,fill:"#222222"},slicePercentage:{fontSize:"14px",fontWeight:600,fill:"#444444"}}}),BgCircle=function BgCircle(){var rScale=(0,chsk_core_es.kE1)().scales.x,r=rScale(1)-rScale(0);return(0,jsx_runtime.jsx)(chsk_core_es.Cdc,{cx:0,cy:0,r,className:"bg"})};BgCircle.displayName="BgCircle";var CustomLabelDataComponent=function CustomLabelDataComponent(_ref){var _data$proportion,data=_ref.data,props=_ref.props;if(!data)return null;var midAngle=(data.startAngle+data.endAngle)/2,textAnchor=midAngle<0||midAngle>Math.PI?"end":"start",percentage=Math.round(1e3*(null!=(_data$proportion=null==data?void 0:data.proportion)?_data$proportion:0))/10,rOffset=8+Math.abs(10*Math.cos(midAngle));return(0,jsx_runtime.jsxs)(PolarItem,{variant:"polar-label",position:[props.outerRadius+rOffset,midAngle],angleUnit:"radian",setRole:!1,children:[(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[0,-8],style:{textAnchor},className:"sliceId",children:null==data?void 0:data.id},"slice-id"),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{position:[0,8],style:{textAnchor},className:"slicePercentage",children:percentage+"%"},"slice-percentage")]})};CustomLabelDataComponent.displayName="CustomLabelDataComponent";var PieChart=function PieChart(_ref2){var fref=_ref2.fref,chartData=_ref2.chartData,rawData=_ref2.rawData;if(!isPieData(rawData))return null;var ids=rawData.map((function(d){return d.id}));return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{data:chartData,fref,id:"pie-blues",size:[480,360],padding:[80,60,30,60],theme:customTheme,children:[(0,jsx_runtime.jsx)(chsk_annotation_es.IQ,{id:"darker-slice",floodColor:"#222222",floodOpacity:.3,erodeR:2}),(0,jsx_runtime.jsxs)(Pie,{data:rawData,scaleColor:{variant:"categorical",colors:Blues.r},scaleX:{variant:"linear",domain:[-1.2,1.2]},scaleY:{variant:"linear",domain:[-1.2,1.2]},children:[(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"title",position:[-30,-60],children:"Breakdown into five groups"}),(0,jsx_runtime.jsxs)(Origin,{children:[(0,jsx_runtime.jsx)(BgCircle,{}),ids.map((function(id){return(0,jsx_runtime.jsxs)(chsk_core_es.lqb,{enterOn:id,children:[(0,jsx_runtime.jsx)(Slices,{ids:[id],style:{stroke:"#ffffff"},modifiers:{onMouseEnter:{filter:"url(#darker-slice)"},onMouseLeave:{}}},"slice-"+id),(0,jsx_runtime.jsx)(SliceLabels,{ids:[id],dataComponent:CustomLabelDataComponent},"slice-label-"+id)]},"milestone-"+id)}))]}),(0,jsx_runtime.jsx)(navigation.N,{position:[320,-62],data:!0,image:!0})]})]})};PieChart.displayName="PieChart";try{CustomLabelDataComponent.displayName="CustomLabelDataComponent",CustomLabelDataComponent.__docgenInfo={description:"",displayName:"CustomLabelDataComponent",props:{data:{defaultValue:null,description:"data object",name:"data",required:!1,type:{name:"PieProcessedDataItem"}},component:{defaultValue:null,description:"function to create a chart component",name:"component",required:!0,type:{name:"FC<SliceLabelProps>"}},props:{defaultValue:null,description:"props passed to the component",name:"props",required:!0,type:{name:"SliceLabelProps"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<PieProcessedDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/polar/PieChart.tsx#CustomLabelDataComponent"]={docgenInfo:CustomLabelDataComponent.__docgenInfo,name:"CustomLabelDataComponent",path:"examples/polar/PieChart.tsx#CustomLabelDataComponent"})}catch(__react_docgen_typescript_loader_error){}try{PieChart.displayName="PieChart",PieChart.__docgenInfo={description:"",displayName:"PieChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/polar/PieChart.tsx#PieChart"]={docgenInfo:PieChart.__docgenInfo,name:"PieChart",path:"examples/polar/PieChart.tsx#PieChart"})}catch(__react_docgen_typescript_loader_error){}var Oranges=__webpack_require__("./node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js"),DoughnutChart_ids=utils.eB.slice(0,6),DoughnutChart_customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{path:{default:{fillOpacity:1}},text:{sliceLabel:{pointerEvents:"none",fill:"#000000"}}}),DoughnutChart=function DoughnutChart(_ref){var fref=_ref.fref,chartData=_ref.chartData,rawData=_ref.rawData;return isPieData(rawData)?(0,jsx_runtime.jsx)(chsk_core_es.kL2,{data:chartData,fref,id:"doughnut-oranges",size:[480,360],padding:[80,60,30,60],theme:DoughnutChart_customTheme,children:(0,jsx_runtime.jsxs)(Pie,{data:rawData,angleAlign:.5,scaleColor:{variant:"categorical",colors:Oranges.r},rInner:.6,children:[(0,jsx_runtime.jsxs)(Origin,{children:[(0,jsx_runtime.jsx)(Slices,{style:{stroke:"#000000",strokeWidth:1}}),(0,jsx_runtime.jsx)(SliceLabels,{minAngle:12,format:function format(v){return Math.round(100*v.proportion)+"%"}})]}),(0,jsx_runtime.jsx)(navigation.N,{position:[240,-40],data:!0,image:!0}),(0,jsx_runtime.jsx)(chsk_core_es.ua7,{offset:[0,-20],itemSize:[80,24],titleFormat:function titleFormat(x){var _x$data;return null==(_x$data=x.data)?void 0:_x$data[0].id},labelFormat:function labelFormat(x){return x.data+"%"}})]})}):null};DoughnutChart.displayName="DoughnutChart";try{DoughnutChart.displayName="DoughnutChart",DoughnutChart.__docgenInfo={description:"",displayName:"DoughnutChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/polar/DoughnutChart.tsx#DoughnutChart"]={docgenInfo:DoughnutChart.__docgenInfo,name:"DoughnutChart",path:"examples/polar/DoughnutChart.tsx#DoughnutChart"})}catch(__react_docgen_typescript_loader_error){}var SemicircleDoughnutChart_ids=utils.eB.slice(0,4),SemicircleDoughnutChart_customTheme=(0,chsk_core_es.hr)(chsk_themes_es.Ee,{path:{default:{fillOpacity:1}},text:{centerTitle:{textAnchor:"middle"},total:{fill:"#444444",fontWeight:600,fontSize:"18px"},sliceLabel:{pointerEvents:"none",fill:"#f4f4f4",fontSize:"13px"},sliceTitle:{fontWeight:600}}}),customTooltipLabelFormat=function customTooltipLabelFormat(x){var proportion="proportion"in x?Number(x.proportion):0;return x.data+" ("+Math.round(100*proportion)+"%)"},SemicircleDoughnutChart=function SemicircleDoughnutChart(_ref){var fref=_ref.fref,chartData=_ref.chartData,rawData=_ref.rawData;if(!isPieData(rawData))return null;var ids=rawData.map((function(item){return item.id})).filter((function(id){return"_"!==id})),total=rawData.reduce((function(acc,item){return acc+item.data}),0)/2;return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{data:chartData,fref,id:"semicircle",size:[480,280],padding:[60,60,30,60],theme:SemicircleDoughnutChart_customTheme,children:(0,jsx_runtime.jsxs)(Pie,{data:rawData,angle:90,angleUnit:"degree",angleAlign:0,scaleColor:{variant:"categorical",colors:["#888888","#fd8d3c","#f16913","#d94801","#8c2d04"]},scaleY:{variant:"linear",domain:[0,1]},rInner:.4,children:[(0,jsx_runtime.jsxs)(Origin,{children:[(0,jsx_runtime.jsx)(Slices,{ids,style:{stroke:"#000000",strokeWidth:1}}),(0,jsx_runtime.jsx)("g",{transform:"translate(0, -7)",children:(0,jsx_runtime.jsx)(SliceLabels,{ids,minAngle:15,format:function format(x){return x.id},className:"sliceTitle"})}),(0,jsx_runtime.jsx)("g",{transform:"translate(0, 7)",children:(0,jsx_runtime.jsx)(SliceLabels,{ids,minAngle:15,format:function format(x){return String(Math.round(x.data))}})}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"center-title",position:[0,-26],children:"Total"}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"total",position:[0,-6],children:total})]}),(0,jsx_runtime.jsx)(navigation.N,{position:[320,-20],data:!0,image:!0}),(0,jsx_runtime.jsx)(chsk_core_es.ua7,{offset:[0,-20],itemSize:[100,24],titleFormat:function titleFormat(x){var _x$data;return null==(_x$data=x.data)?void 0:_x$data[0].id},labelFormat:customTooltipLabelFormat})]})})};SemicircleDoughnutChart.displayName="SemicircleDoughnutChart";try{SemicircleDoughnutChart.displayName="SemicircleDoughnutChart",SemicircleDoughnutChart.__docgenInfo={description:"",displayName:"SemicircleDoughnutChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/polar/SemicircleDoughnutChart.tsx#SemicircleDoughnutChart"]={docgenInfo:SemicircleDoughnutChart.__docgenInfo,name:"SemicircleDoughnutChart",path:"examples/polar/SemicircleDoughnutChart.tsx#SemicircleDoughnutChart"})}catch(__react_docgen_typescript_loader_error){}var PolarGaugesChart_ids=utils.eB.slice(0,5),createPieData=function createPieData(v){return[{id:"value",data:v},{id:"other",data:100-v}]},PolarGaugesChart_customTheme=(0,chsk_core_es.ItK)([chsk_themes_es.$_,chsk_themes_es.Ee,{text:{sliceLabel:{pointerEvents:"none",fill:"#bbbbbb"},button:{fill:"#bbbbbb"},counter:{fontSize:"24px",fontWeight:300,dominantBaseline:"auto"},gaugeName:{fontSize:"12px",fill:"#aaaaaa"}},tspan:{percent:{fontSize:"20px",dominantBaseline:"auto"}},path:{default:{fillOpacity:1},button:{fill:"#bbbbbb"}},rect:{"button.bg:hover":{fill:"#555555"}},Color:{categorical:{variant:"categorical",colors:["#f57600","#555555"]}}}]),gaugeFormat=function gaugeFormat(value){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[value,(0,jsx_runtime.jsx)("tspan",{className:"percent",children:"%"})]})},CustomPolarGauge=function CustomPolarGauge(_ref){var id=_ref.id,position=_ref.position,size=_ref.size,data=_ref.data,value=data[0].data,container={position,positionUnits:"relative",size,sizeUnits:"relative",padding:[0,5,0,5]};return(0,jsx_runtime.jsx)(Pie,{container,data,angleAlign:0,rInner:.9,rOuter:.98,children:(0,jsx_runtime.jsxs)(Origin,{children:[(0,jsx_runtime.jsx)(Slices,{style:{strokeWidth:0}}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"gauge-name",position:[0,-16],children:id}),(0,jsx_runtime.jsx)(chsk_core_es.ATJ,{position:[2,14],format:gaugeFormat,children:value})]})})};CustomPolarGauge.displayName="CustomPolarGauge";var _Pie$parameters,_Pie$parameters2,_Pie$parameters2$docs,_Doughnut$parameters,_Doughnut$parameters2,_Doughnut$parameters3,_Semicircle$parameter,_Semicircle$parameter2,_Semicircle$parameter3,_Gauges$parameters,_Gauges$parameters2,_Gauges$parameters2$d,PolarGaugesChart=function PolarGaugesChart(_ref2){var fref=_ref2.fref,chartData=_ref2.chartData,rawData=_ref2.rawData,width=1/rawData.length;return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{data:chartData,fref,id:"polar-gauges",size:[600,200],padding:[40,30,32,30],theme:PolarGaugesChart_customTheme,children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"outer"}),rawData.map((function(item,index){return(0,jsx_runtime.jsx)(CustomPolarGauge,{id:item.id,position:[index*width,0],size:[width,1],data:item.pieData},"gauge-"+index)})),(0,jsx_runtime.jsx)(navigation.N,{position:[485,-23],image:!0})]})};PolarGaugesChart.displayName="PolarGaugesChart";try{gaugeFormat.displayName="gaugeFormat",gaugeFormat.__docgenInfo={description:"",displayName:"gaugeFormat",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/polar/PolarGaugesChart.tsx#gaugeFormat"]={docgenInfo:gaugeFormat.__docgenInfo,name:"gaugeFormat",path:"examples/polar/PolarGaugesChart.tsx#gaugeFormat"})}catch(__react_docgen_typescript_loader_error){}try{CustomPolarGauge.displayName="CustomPolarGauge",CustomPolarGauge.__docgenInfo={description:"",displayName:"CustomPolarGauge",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"NumericPositionSpec"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"SizeSpec"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"PieDataItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/polar/PolarGaugesChart.tsx#CustomPolarGauge"]={docgenInfo:CustomPolarGauge.__docgenInfo,name:"CustomPolarGauge",path:"examples/polar/PolarGaugesChart.tsx#CustomPolarGauge"})}catch(__react_docgen_typescript_loader_error){}try{PolarGaugesChart.displayName="PolarGaugesChart",PolarGaugesChart.__docgenInfo={description:"",displayName:"PolarGaugesChart",props:{chartData:{defaultValue:null,description:"data object passed to the 'Chart' component",name:"chartData",required:!0,type:{name:'Omit<ChartDataContextProps, "id">'}},fref:{defaultValue:null,description:"ref used to toggle milestones",name:"fref",required:!1,type:{name:"Ref<ChartRef>"}},rawData:{defaultValue:null,description:"raw dataset used for plotting",name:"rawData",required:!0,type:{name:"RawData"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/polar/PolarGaugesChart.tsx#PolarGaugesChart"]={docgenInfo:PolarGaugesChart.__docgenInfo,name:"PolarGaugesChart",path:"examples/polar/PolarGaugesChart.tsx#PolarGaugesChart"})}catch(__react_docgen_typescript_loader_error){}function polar_stories_extends(){return polar_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},polar_stories_extends.apply(this,arguments)}const polar_stories=polar_stories_extends({},gallery.m,{title:"Gallery/Polar charts"});var polar_stories_Pie={name:"pie",args:{generator:function generatePieData(){var sizes=(0,utils.Bh)(ids.length,1,50).map(Math.round).sort((function(a,b){return a-b}));return ids.map((function(id,i){return{id,data:sizes[i]}}))},chart:PieChart,steps:["alpha","beta","gamma","delta","epsilon"]}},Doughnut={name:"doughnut",args:{generator:function generateDoughnutData(){var sizes=(0,utils.Bh)(DoughnutChart_ids.length,1,50).map(Math.round),total=sizes.reduce((function(acc,v){return acc+v}),0);return DoughnutChart_ids.map((function(id,i){return{id,data:(0,chsk_core_es.DJC)(100*sizes[i]/total,2)}}))},chart:DoughnutChart}},Semicircle={name:"semicircle",args:{generator:function generateSemicircleDoughnutData(){var sizes=(0,utils.Bh)(SemicircleDoughnutChart_ids.length,2,120).map(Math.round);return[{id:"_",data:sizes.reduce((function(acc,v){return acc+v}),0)}].concat(SemicircleDoughnutChart_ids.map((function(id,i){return{id,data:sizes[i]}})))},chart:SemicircleDoughnutChart}},Gauges={name:"gauges",args:{generator:function generateGaugesData(){var sizes=(0,utils.Bh)(PolarGaugesChart_ids.length,0,100).map(Math.round);return PolarGaugesChart_ids.map((function(id,i){return{id,pieData:createPieData(sizes[i])}}))},chart:PolarGaugesChart}};polar_stories_Pie.parameters=polar_stories_extends({},polar_stories_Pie.parameters,{docs:polar_stories_extends({},null==(_Pie$parameters=polar_stories_Pie.parameters)?void 0:_Pie$parameters.docs,{source:polar_stories_extends({originalSource:"{\n  name: 'pie',\n  args: {\n    generator: generatePieData,\n    chart: PieChart,\n    steps: ['alpha', 'beta', 'gamma', 'delta', 'epsilon']\n  }\n}"},null==(_Pie$parameters2=polar_stories_Pie.parameters)||null==(_Pie$parameters2$docs=_Pie$parameters2.docs)?void 0:_Pie$parameters2$docs.source)})}),Doughnut.parameters=polar_stories_extends({},Doughnut.parameters,{docs:polar_stories_extends({},null==(_Doughnut$parameters=Doughnut.parameters)?void 0:_Doughnut$parameters.docs,{source:polar_stories_extends({originalSource:"{\n  name: 'doughnut',\n  args: {\n    generator: generateDoughnutData,\n    chart: DoughnutChart\n  }\n}"},null==(_Doughnut$parameters2=Doughnut.parameters)||null==(_Doughnut$parameters3=_Doughnut$parameters2.docs)?void 0:_Doughnut$parameters3.source)})}),Semicircle.parameters=polar_stories_extends({},Semicircle.parameters,{docs:polar_stories_extends({},null==(_Semicircle$parameter=Semicircle.parameters)?void 0:_Semicircle$parameter.docs,{source:polar_stories_extends({originalSource:"{\n  name: 'semicircle',\n  args: {\n    generator: generateSemicircleDoughnutData,\n    chart: SemicircleDoughnutChart\n  }\n}"},null==(_Semicircle$parameter2=Semicircle.parameters)||null==(_Semicircle$parameter3=_Semicircle$parameter2.docs)?void 0:_Semicircle$parameter3.source)})}),Gauges.parameters=polar_stories_extends({},Gauges.parameters,{docs:polar_stories_extends({},null==(_Gauges$parameters=Gauges.parameters)?void 0:_Gauges$parameters.docs,{source:polar_stories_extends({originalSource:"{\n  name: 'gauges',\n  args: {\n    generator: generateGaugesData,\n    chart: PolarGaugesChart\n  }\n}"},null==(_Gauges$parameters2=Gauges.parameters)||null==(_Gauges$parameters2$d=_Gauges$parameters2.docs)?void 0:_Gauges$parameters2$d.source)})});var __namedExportsOrder=["Pie","Doughnut","Semicircle","Gauges"]},"./examples/polar/polar.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_polar_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./examples/polar/polar.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_polar_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"examples-of-polar-charts",children:"Examples of polar charts"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_polar_stories__WEBPACK_IMPORTED_MODULE_2__.Pie}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_polar_stories__WEBPACK_IMPORTED_MODULE_2__.Doughnut}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_polar_stories__WEBPACK_IMPORTED_MODULE_2__.Semicircle}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_polar_stories__WEBPACK_IMPORTED_MODULE_2__.Gauges})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/d3-scale-chromatic/src/diverging/BrBG.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-scale-chromatic/src/colors.js"),_ramp_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-scale-chromatic/src/ramp.js"),scheme=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(_colors_js__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=(0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__.Z)(scheme)},"./node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-scale-chromatic/src/colors.js"),_ramp_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-scale-chromatic/src/ramp.js"),scheme=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(_colors_js__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=(0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__.Z)(scheme)},"./node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,r:()=>scheme});var _colors_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-scale-chromatic/src/colors.js"),_ramp_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-scale-chromatic/src/ramp.js"),scheme=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(_colors_js__WEBPACK_IMPORTED_MODULE_0__.Z);const __WEBPACK_DEFAULT_EXPORT__=(0,_ramp_js__WEBPACK_IMPORTED_MODULE_1__.Z)(scheme)},"./node_modules/d3-shape/src/curve/bundle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _basis_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/curve/basis.js");function Bundle(context,beta){this._basis=new _basis_js__WEBPACK_IMPORTED_MODULE_0__.fE(context),this._beta=beta}Bundle.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var x=this._x,y=this._y,j=x.length-1;if(j>0)for(var t,x0=x[0],y0=y[0],dx=x[j]-x0,dy=y[j]-y0,i=-1;++i<=j;)t=i/j,this._basis.point(this._beta*x[i]+(1-this._beta)*(x0+t*dx),this._beta*y[i]+(1-this._beta)*(y0+t*dy));this._x=this._y=null,this._basis.lineEnd()},point:function(x,y){this._x.push(+x),this._y.push(+y)}};const __WEBPACK_DEFAULT_EXPORT__=function custom(beta){function bundle(context){return 1===beta?new _basis_js__WEBPACK_IMPORTED_MODULE_0__.fE(context):new Bundle(context,beta)}return bundle.beta=function(beta){return custom(+beta)},bundle}(.85)}}]);