"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2898,3992],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/symbols/createConcentricSymbol.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Background:()=>Background,Foreground:()=>Foreground,Hybrid:()=>Hybrid,Squares:()=>Squares,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Background$parameter,_Background$parameter2,_Background$parameter3,_Foreground$parameter,_Foreground$parameter2,_Foreground$parameter3,_Squares$parameters,_Squares$parameters2,_Squares$parameters2$,_Hybrid$parameters,_Hybrid$parameters2,_Hybrid$parameters2$d,_chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/annotation/stories/symbols/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Symbols/createConcentricSymbol",component:_src__WEBPACK_IMPORTED_MODULE_1__.by};var Background={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[200,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_2__.ql,{cx:80,cy:50,r:20,style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"}})]})},name:"background"},Foreground={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[200,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_2__.SZ,{cx:80,cy:50,r:20,style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"}})]})},name:"foreground"},Squares={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[200,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_2__.oW,{cx:80,cy:50,r:20,style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"}})]})},name:"squares"},Hybrid={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[200,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_2__.dY,{cx:80,cy:50,r:20,style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"}})]})},name:"hybrid"};Background.parameters=_extends({},Background.parameters,{docs:_extends({},null==(_Background$parameter=Background.parameters)?void 0:_Background$parameter.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 140]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <ConcentricCirclesBg cx={80} cy={50} r={20} style={{\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    }} />\n        </Chart>,\n  name: 'background'\n}"},null==(_Background$parameter2=Background.parameters)||null==(_Background$parameter3=_Background$parameter2.docs)?void 0:_Background$parameter3.source)})}),Foreground.parameters=_extends({},Foreground.parameters,{docs:_extends({},null==(_Foreground$parameter=Foreground.parameters)?void 0:_Foreground$parameter.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 140]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <ConcentricCirclesFg cx={80} cy={50} r={20} style={{\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    }} />\n        </Chart>,\n  name: 'foreground'\n}"},null==(_Foreground$parameter2=Foreground.parameters)||null==(_Foreground$parameter3=_Foreground$parameter2.docs)?void 0:_Foreground$parameter3.source)})}),Squares.parameters=_extends({},Squares.parameters,{docs:_extends({},null==(_Squares$parameters=Squares.parameters)?void 0:_Squares$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 140]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <ConcentricSquares cx={80} cy={50} r={20} style={{\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    }} />\n        </Chart>,\n  name: 'squares'\n}"},null==(_Squares$parameters2=Squares.parameters)||null==(_Squares$parameters2$=_Squares$parameters2.docs)?void 0:_Squares$parameters2$.source)})}),Hybrid.parameters=_extends({},Hybrid.parameters,{docs:_extends({},null==(_Hybrid$parameters=Hybrid.parameters)?void 0:_Hybrid$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[200, 140]} padding={[20, 20, 20, 20]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <ConcentricHybrid cx={80} cy={50} r={20} style={{\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    }} />\n        </Chart>,\n  name: 'hybrid'\n}"},null==(_Hybrid$parameters2=Hybrid.parameters)||null==(_Hybrid$parameters2$d=_Hybrid$parameters2.docs)?void 0:_Hybrid$parameters2$d.source)})});var __namedExportsOrder=["Background","Foreground","Squares","Hybrid"]},"./packages/annotation/stories/symbols/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J4:()=>ChartSymbolDecorator,SZ:()=>ConcentricCirclesFg,dY:()=>ConcentricHybrid,ke:()=>viewSeriesIndexesKeys,oW:()=>ConcentricSquares,ql:()=>ConcentricCirclesBg});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src_symbols__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/symbols/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),viewSeriesIndexesKeys={seriesIndexes:{X:0,Y:1},keys:["alpha","beta","gamma"]},ChartSymbolDecorator=function ChartSymbolDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[200,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartSymbolDecorator.displayName="ChartSymbolDecorator";var ConcentricCirclesBg=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_1__.by)({variant:"background",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Cdc,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Cdc,rMultiplier:1.4,styleModifier:{fill:"#ffffff"}}),ConcentricCirclesFg=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_1__.by)({variant:"foreground",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Cdc,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Cdc,rMultiplier:.6,styleModifier:{fill:"#ffffff"}}),ConcentricSquares=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_1__.by)({variant:"foreground",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.bK0,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.bK0,rMultiplier:.6,styleModifier:{fill:"#ffffff"}}),ConcentricHybrid=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_1__.by)({variant:"foreground",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.bK0,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Cdc,rMultiplier:.4,styleModifier:{fill:"#ffffff"}});try{ChartSymbolDecorator.displayName="ChartSymbolDecorator",ChartSymbolDecorator.__docgenInfo={description:"",displayName:"ChartSymbolDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ChartSymbolDecorator"]={docgenInfo:ChartSymbolDecorator.__docgenInfo,name:"ChartSymbolDecorator",path:"packages/annotation/stories/symbols/decorators.tsx#ChartSymbolDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricCirclesBg.displayName="ConcentricCirclesBg",ConcentricCirclesBg.__docgenInfo={description:"",displayName:"ConcentricCirclesBg",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesBg"]={docgenInfo:ConcentricCirclesBg.__docgenInfo,name:"ConcentricCirclesBg",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesBg"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricCirclesFg.displayName="ConcentricCirclesFg",ConcentricCirclesFg.__docgenInfo={description:"",displayName:"ConcentricCirclesFg",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesFg"]={docgenInfo:ConcentricCirclesFg.__docgenInfo,name:"ConcentricCirclesFg",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesFg"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricSquares.displayName="ConcentricSquares",ConcentricSquares.__docgenInfo={description:"",displayName:"ConcentricSquares",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricSquares"]={docgenInfo:ConcentricSquares.__docgenInfo,name:"ConcentricSquares",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricSquares"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricHybrid.displayName="ConcentricHybrid",ConcentricHybrid.__docgenInfo={description:"",displayName:"ConcentricHybrid",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricHybrid"]={docgenInfo:ConcentricHybrid.__docgenInfo,name:"ConcentricHybrid",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricHybrid"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/symbols/createConcentricSymbol.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/annotation/stories/symbols/createConcentricSymbol.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"createconcentricsymbol",children:"createConcentricSymbol"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createConcentricSymbol"})," is a factory.\nIt creates a function that creates a symbol composed of two concentric parts.\nIt can be used to create composite symbols such as concentric circles, squares, or any other shapes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Note:"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createConcentricSymbol"})," is a factory method and creates new functions.\nAn example usage is as follows."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hw,{language:"javascript",code:"\n  import { createConcentricSymbol } from '@chsk/annotation'\n\nconst ConcentricCirclesBg = createConcentricSymbol({ variant: 'background', rMultiplier: 1.4 })\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The examples below demonstrate behavior of components creates with this pattern."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variant",children:"Variant"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["A concentric symbol is composed of one primary symbol and one secondary symbol.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," determines whether the secondary object appears in the background or in the foreground."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," is often used together with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rMultiplier"}),",\nwhich determines the size of the secondary object relative to the size of the primary symbol."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_2__.Background}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_2__.Foreground}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"symbols",children:"Symbols"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The shapes of the primary and secondary parts are controlled with props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"symbolPrimary"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"symbolSecondary"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_2__.Squares}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_createConcentricSymbol_stories__WEBPACK_IMPORTED_MODULE_2__.Hybrid})]})}}}}]);