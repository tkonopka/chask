"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[4386,7861],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/markers/ArrowMarker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Chevron:()=>Chevron,DoubleSided:()=>DoubleSided,Large:()=>Large,Narrow:()=>Narrow,Triangle:()=>Triangle,Winged:()=>Winged,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Triangle$parameters,_Triangle$parameters2,_Triangle$parameters3,_Winged$parameters,_Winged$parameters2,_Winged$parameters2$d,_Chevron$parameters,_Chevron$parameters2,_Chevron$parameters2$,_Narrow$parameters,_Narrow$parameters2,_Narrow$parameters2$d,_Large$parameters,_Large$parameters2,_Large$parameters2$do,_DoubleSided$paramete,_DoubleSided$paramete2,_DoubleSided$paramete3,_chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Markers/ArrowMarker",component:_src__WEBPACK_IMPORTED_MODULE_1__.Po};var Triangle={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[200,120],padding:[20,20,20,20],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Po,{id:"triangle",variant:"Triangle",style:{fill:"#222222",fillOpacity:1}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.x12,{x1:0,y1:60,x2:140,y2:20,markerEnd:"triangle",style:{strokeWidth:3}})]})},name:"triangle"},Winged={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[200,120],padding:[20,20,20,20],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Po,{id:"winged",variant:"Winged",style:{fill:"#222222",fillOpacity:1}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.x12,{x1:0,y1:60,x2:140,y2:20,markerEnd:"winged",style:{strokeWidth:3}})]})},name:"winged"},Chevron={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[200,120],padding:[20,20,20,20],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Po,{id:"chevron",variant:"Chevron",style:{stroke:"#222222",strokeWidth:2,fillOpacity:0}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.x12,{x1:0,y1:60,x2:140,y2:20,markerEnd:"chevron",style:{strokeWidth:3}})]})},name:"chevron"},Narrow={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[200,120],padding:[20,20,20,20],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Po,{id:"narrow",variant:"Triangle",width:.7,style:{fill:"#222222",fillOpacity:1}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.x12,{x1:0,y1:60,x2:140,y2:20,markerEnd:"narrow",style:{strokeWidth:3}})]})},name:"narrow"},Large={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[200,120],padding:[20,20,20,20],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Po,{id:"large",variant:"Winged",size:16,style:{fill:"#222222",fillOpacity:1}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.x12,{x1:0,y1:60,x2:140,y2:20,markerEnd:"large",style:{strokeWidth:3}})]})},name:"large"},DoubleSided={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[200,120],padding:[20,20,20,20],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Po,{id:"color",variant:"Chevron",size:14,width:1,style:{stroke:"#2222dd",strokeWidth:2,fillOpacity:0}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.x12,{x1:0,y1:60,x2:140,y2:20,markerStart:"color",markerEnd:"color",style:{strokeWidth:3,stroke:"#2222dd",strokeLinecap:"round"}})]})},name:"double sided"};Triangle.parameters=_extends({},Triangle.parameters,{docs:_extends({},null==(_Triangle$parameters=Triangle.parameters)?void 0:_Triangle$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>\n            <defs>\n                <ArrowMarker id=\"triangle\" variant=\"Triangle\" style={{\n        fill: '#222222',\n        fillOpacity: 1\n      }} />\n            </defs>\n            <Line x1={0} y1={60} x2={140} y2={20} markerEnd={'triangle'} style={{\n      strokeWidth: 3\n    }} />\n        </Chart>,\n  name: 'triangle'\n}"},null==(_Triangle$parameters2=Triangle.parameters)||null==(_Triangle$parameters3=_Triangle$parameters2.docs)?void 0:_Triangle$parameters3.source)})}),Winged.parameters=_extends({},Winged.parameters,{docs:_extends({},null==(_Winged$parameters=Winged.parameters)?void 0:_Winged$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>\n            <defs>\n                <ArrowMarker id=\"winged\" variant=\"Winged\" style={{\n        fill: '#222222',\n        fillOpacity: 1\n      }} />\n            </defs>\n            <Line x1={0} y1={60} x2={140} y2={20} markerEnd={'winged'} style={{\n      strokeWidth: 3\n    }} />\n        </Chart>,\n  name: 'winged'\n}"},null==(_Winged$parameters2=Winged.parameters)||null==(_Winged$parameters2$d=_Winged$parameters2.docs)?void 0:_Winged$parameters2$d.source)})}),Chevron.parameters=_extends({},Chevron.parameters,{docs:_extends({},null==(_Chevron$parameters=Chevron.parameters)?void 0:_Chevron$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>\n            <defs>\n                <ArrowMarker id=\"chevron\" variant=\"Chevron\" style={{\n        stroke: '#222222',\n        strokeWidth: 2,\n        fillOpacity: 0\n      }} />\n            </defs>\n            <Line x1={0} y1={60} x2={140} y2={20} markerEnd={'chevron'} style={{\n      strokeWidth: 3\n    }} />\n        </Chart>,\n  name: 'chevron'\n}"},null==(_Chevron$parameters2=Chevron.parameters)||null==(_Chevron$parameters2$=_Chevron$parameters2.docs)?void 0:_Chevron$parameters2$.source)})}),Narrow.parameters=_extends({},Narrow.parameters,{docs:_extends({},null==(_Narrow$parameters=Narrow.parameters)?void 0:_Narrow$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>\n            <defs>\n                <ArrowMarker id=\"narrow\" variant=\"Triangle\" width={0.7} style={{\n        fill: '#222222',\n        fillOpacity: 1\n      }} />\n            </defs>\n            <Line x1={0} y1={60} x2={140} y2={20} markerEnd={'narrow'} style={{\n      strokeWidth: 3\n    }} />\n        </Chart>,\n  name: 'narrow'\n}"},null==(_Narrow$parameters2=Narrow.parameters)||null==(_Narrow$parameters2$d=_Narrow$parameters2.docs)?void 0:_Narrow$parameters2$d.source)})}),Large.parameters=_extends({},Large.parameters,{docs:_extends({},null==(_Large$parameters=Large.parameters)?void 0:_Large$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>\n            <defs>\n                <ArrowMarker id=\"large\" variant=\"Winged\" size={16} style={{\n        fill: '#222222',\n        fillOpacity: 1\n      }} />\n            </defs>\n            <Line x1={0} y1={60} x2={140} y2={20} markerEnd={'large'} style={{\n      strokeWidth: 3\n    }} />\n        </Chart>,\n  name: 'large'\n}"},null==(_Large$parameters2=Large.parameters)||null==(_Large$parameters2$do=_Large$parameters2.docs)?void 0:_Large$parameters2$do.source)})}),DoubleSided.parameters=_extends({},DoubleSided.parameters,{docs:_extends({},null==(_DoubleSided$paramete=DoubleSided.parameters)?void 0:_DoubleSided$paramete.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 120]} padding={[20, 20, 20, 20]}>\n            <defs>\n                <ArrowMarker id=\"color\" variant=\"Chevron\" size={14} width={1} style={{\n        stroke: '#2222dd',\n        strokeWidth: 2,\n        fillOpacity: 0\n      }} />\n            </defs>\n            <Line x1={0} y1={60} x2={140} y2={20} markerStart={'color'} markerEnd={'color'} style={{\n      strokeWidth: 3,\n      stroke: '#2222dd',\n      strokeLinecap: 'round'\n    }} />\n        </Chart>,\n  name: 'double sided'\n}"},null==(_DoubleSided$paramete2=DoubleSided.parameters)||null==(_DoubleSided$paramete3=_DoubleSided$paramete2.docs)?void 0:_DoubleSided$paramete3.source)})});var __namedExportsOrder=["Triangle","Winged","Chevron","Narrow","Large","DoubleSided"]},"./packages/annotation/stories/markers/ArrowMarker.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ArrowMarker_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/annotation/stories/markers/ArrowMarker.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"arrowmarker",children:"ArrowMarker"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_ArrowMarker_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ArrowMarker"})," creates a definition for an arrow-head 'marker'.\nMarkers are invisible themselves, but they can be used to decorate ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Line"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Path"})," components."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_ArrowMarker_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ArrowMarker"})," objects should be contained within an svg ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"def"})," tag."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," determines the shape of the arrowhead."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ArrowMarker_stories__WEBPACK_IMPORTED_MODULE_2__.Triangle}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ArrowMarker_stories__WEBPACK_IMPORTED_MODULE_2__.Winged}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ArrowMarker_stories__WEBPACK_IMPORTED_MODULE_2__.Chevron}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Note that for the arrow shapes to appear correctly, it may be necessary to set styles in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ArrowMarker"})," component.\nIn particular, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"chevron"})," arrowhead requires ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"fillOpacity: 0"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"arrow-size-and-width",children:"Arrow size and width"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The shape of the arrowheads can further be adjusted using props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"width"}),".\nThe overall weight is also scaled by the stroke width of the line."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ArrowMarker_stories__WEBPACK_IMPORTED_MODULE_2__.Narrow}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ArrowMarker_stories__WEBPACK_IMPORTED_MODULE_2__.Large}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_ArrowMarker_stories__WEBPACK_IMPORTED_MODULE_2__.DoubleSided})]})}}}}]);