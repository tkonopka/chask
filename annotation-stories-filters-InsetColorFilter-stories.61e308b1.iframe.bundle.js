"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[6033],{"./packages/annotation/stories/filters/InsetColorFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Darker:()=>Darker,Inset:()=>Inset,Lighter:()=>Lighter,MismatchedRadius:()=>MismatchedRadius,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InsetColorFilter_stories});var _Lighter$parameters,_Lighter$parameters2,_Darker$parameters,_Darker$parameters2,_Inset$parameters,_Inset$parameters2,_MismatchedRadius$par,_MismatchedRadius$par2,chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),InsetColorFilter=function InsetColorFilter(_ref){var id=_ref.id,_ref$erodeR=_ref.erodeR,erodeR=void 0===_ref$erodeR?0:_ref$erodeR,_ref$floodColor=_ref.floodColor,floodColor=void 0===_ref$floodColor?"#000000":_ref$floodColor,_ref$floodOpacity=_ref.floodOpacity,floodOpacity=void 0===_ref$floodOpacity?.5:_ref$floodOpacity;return(0,jsx_runtime.jsxs)("filter",{id,children:[(0,jsx_runtime.jsx)("feMorphology",{operator:"erode",radius:erodeR,result:id+"-erode"}),(0,jsx_runtime.jsx)("feFlood",{floodColor,floodOpacity,result:id+"-color"}),(0,jsx_runtime.jsx)("feComposite",{operator:"in",in:id+"-color",in2:id+"-erode",result:id+"-mask"}),(0,jsx_runtime.jsx)("feComposite",{operator:"over",in:id+"-mask",in2:"SourceGraphic"})]})};InsetColorFilter.displayName="InsetColorFilter";try{InsetColorFilter.displayName="InsetColorFilter",InsetColorFilter.__docgenInfo={description:"",displayName:"InsetColorFilter",props:{erodeR:{defaultValue:{value:"0"},description:"",name:"erodeR",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}},floodColor:{defaultValue:{value:"#000000"},description:"",name:"floodColor",required:!1,type:{name:"string"}},floodOpacity:{defaultValue:{value:"0.5"},description:"",name:"floodOpacity",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/InsetColorFilter.tsx#InsetColorFilter"]={docgenInfo:InsetColorFilter.__docgenInfo,name:"InsetColorFilter",path:"packages/annotation/src/filters/InsetColorFilter.tsx#InsetColorFilter"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const InsetColorFilter_stories={title:"Addons/Annotation/Filters/InsetColorFilter",component:InsetColorFilter};var Lighter={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(InsetColorFilter,{id:"lighter",floodColor:"#ffffff"}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999"}}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999",filter:"url(#lighter)"}})]})},name:"lighter"},Darker={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(InsetColorFilter,{id:"darker",floodColor:"#222222",floodOpacity:.6}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999"}}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999",filter:"url(#darker)"}})]})},name:"darker"},Inset={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(InsetColorFilter,{id:"inset-lighter",erodeR:3,floodColor:"#ffffff"}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999"}}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999",filter:"url(#inset-lighter)"}})]})},name:"inset"},MismatchedRadius={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(InsetColorFilter,{id:"inset-mismatched",erodeR:12,floodColor:"#ffffff"}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999"}}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:3,fill:"#dd9999",filter:"url(#inset-mismatched)"}})]})},name:"mismatched radius"};Lighter.parameters=_extends({},Lighter.parameters,{docs:_extends({},null==(_Lighter$parameters=Lighter.parameters)?void 0:_Lighter$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetColorFilter id={'lighter'} floodColor={'#ffffff'} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999',\n      filter: 'url(#lighter)'\n    }} />\n        </Chart>,\n  name: 'lighter'\n}"},null==(_Lighter$parameters2=Lighter.parameters)||null==(_Lighter$parameters2=_Lighter$parameters2.docs)?void 0:_Lighter$parameters2.source)})}),Darker.parameters=_extends({},Darker.parameters,{docs:_extends({},null==(_Darker$parameters=Darker.parameters)?void 0:_Darker$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetColorFilter id={'darker'} floodColor={'#222222'} floodOpacity={0.6} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999',\n      filter: 'url(#darker)'\n    }} />\n        </Chart>,\n  name: 'darker'\n}"},null==(_Darker$parameters2=Darker.parameters)||null==(_Darker$parameters2=_Darker$parameters2.docs)?void 0:_Darker$parameters2.source)})}),Inset.parameters=_extends({},Inset.parameters,{docs:_extends({},null==(_Inset$parameters=Inset.parameters)?void 0:_Inset$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetColorFilter id={'inset-lighter'} erodeR={3} floodColor={'#ffffff'} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999',\n      filter: 'url(#inset-lighter)'\n    }} />\n        </Chart>,\n  name: 'inset'\n}"},null==(_Inset$parameters2=Inset.parameters)||null==(_Inset$parameters2=_Inset$parameters2.docs)?void 0:_Inset$parameters2.source)})}),MismatchedRadius.parameters=_extends({},MismatchedRadius.parameters,{docs:_extends({},null==(_MismatchedRadius$par=MismatchedRadius.parameters)?void 0:_MismatchedRadius$par.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <InsetColorFilter id={'inset-mismatched'} erodeR={12} floodColor={'#ffffff'} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 3,\n      fill: '#dd9999',\n      filter: 'url(#inset-mismatched)'\n    }} />\n        </Chart>,\n  name: 'mismatched radius'\n}"},null==(_MismatchedRadius$par2=MismatchedRadius.parameters)||null==(_MismatchedRadius$par2=_MismatchedRadius$par2.docs)?void 0:_MismatchedRadius$par2.source)})});var __namedExportsOrder=["Lighter","Darker","Inset","MismatchedRadius"]}}]);