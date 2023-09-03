"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[297],{"./packages/annotation/stories/filters/BlurFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BlurFilter_stories});var _Small$parameters,_Small$parameters2,_Large$parameters,_Large$parameters2,chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BlurFilter=function BlurFilter(_ref){var id=_ref.id,_ref$blurStdDeviation=_ref.blurStdDeviation,blurStdDeviation=void 0===_ref$blurStdDeviation?5:_ref$blurStdDeviation;return(0,jsx_runtime.jsx)("filter",{id,children:(0,jsx_runtime.jsx)("feGaussianBlur",{stdDeviation:blurStdDeviation})})};BlurFilter.displayName="BlurFilter";try{BlurFilter.displayName="BlurFilter",BlurFilter.__docgenInfo={description:"",displayName:"BlurFilter",props:{blurStdDeviation:{defaultValue:{value:"5"},description:"",name:"blurStdDeviation",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"identifier string",name:"id",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/filters/BlurFilter.tsx#BlurFilter"]={docgenInfo:BlurFilter.__docgenInfo,name:"BlurFilter",path:"packages/annotation/src/filters/BlurFilter.tsx#BlurFilter"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const BlurFilter_stories={title:"Addons/Annotation/Filters/BlurFilter",component:BlurFilter};var Small={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(BlurFilter,{id:"small-blur",blurStdDeviation:1}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999"}}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999",filter:"url(#small-blur)"}})]})},name:"small"},Large={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[280,180],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{}),(0,jsx_runtime.jsx)(BlurFilter,{id:"large-blur",blurStdDeviation:4}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:40,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999"}}),(0,jsx_runtime.jsx)(chsk_core_es.AeJ,{x:140,y:40,width:60,height:60,style:{stroke:"#000000",strokeWidth:1,fill:"#dd9999",filter:"url(#large-blur)"}})]})},name:"large"};Small.parameters=_extends({},Small.parameters,{docs:_extends({},null==(_Small$parameters=Small.parameters)?void 0:_Small$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <BlurFilter id={'small-blur'} blurStdDeviation={1} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999',\n      filter: 'url(#small-blur)'\n    }} />\n        </Chart>,\n  name: 'small'\n}"},null==(_Small$parameters2=Small.parameters)||null==(_Small$parameters2=_Small$parameters2.docs)?void 0:_Small$parameters2.source)})}),Large.parameters=_extends({},Large.parameters,{docs:_extends({},null==(_Large$parameters=Large.parameters)?void 0:_Large$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[280, 180]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface />\n            <BlurFilter id={'large-blur'} blurStdDeviation={4} />\n            <Rectangle x={40} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999'\n    }} />\n            <Rectangle x={140} y={40} width={60} height={60} style={{\n      stroke: '#000000',\n      strokeWidth: 1,\n      fill: '#dd9999',\n      filter: 'url(#large-blur)'\n    }} />\n        </Chart>,\n  name: 'large'\n}"},null==(_Large$parameters2=Large.parameters)||null==(_Large$parameters2=_Large$parameters2.docs)?void 0:_Large$parameters2.source)})});var __namedExportsOrder=["Small","Large"]}}]);