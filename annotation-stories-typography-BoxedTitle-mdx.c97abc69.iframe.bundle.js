"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[1763,5912],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/typography/BoxedTitle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bottom:()=>Bottom,CustomContent:()=>CustomContent,Distance:()=>Distance,LargeExpansion:()=>LargeExpansion,Left:()=>Left,Right:()=>Right,RoundedCorners:()=>RoundedCorners,SmallExpansion:()=>SmallExpansion,Styling:()=>Styling,Top:()=>Top,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Top$parameters,_Top$parameters2,_Top$parameters2$docs,_Right$parameters,_Right$parameters2,_Right$parameters2$do,_Left$parameters,_Left$parameters2,_Left$parameters2$doc,_Bottom$parameters,_Bottom$parameters2,_Bottom$parameters2$d,_Distance$parameters,_Distance$parameters2,_Distance$parameters3,_SmallExpansion$param,_SmallExpansion$param2,_SmallExpansion$param3,_LargeExpansion$param,_LargeExpansion$param2,_LargeExpansion$param3,_RoundedCorners$param,_RoundedCorners$param2,_RoundedCorners$param3,_CustomContent$parame,_CustomContent$parame2,_CustomContent$parame3,_Styling$parameters,_Styling$parameters2,_Styling$parameters2$,_chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/annotation/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Typography/BoxedTitle",component:_src__WEBPACK_IMPORTED_MODULE_1__.Q1};var Top={name:"top",args:{variant:"top",boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},children:"Title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},Right={name:"right",args:{variant:"right",boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},children:"Title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},Left={name:"left",args:{variant:"left",boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},children:"Title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},Bottom={name:"bottom",args:{variant:"bottom",boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},children:"Title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},Distance={name:"distance from axis",args:{variant:"top",boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},distance:10,children:"Title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},SmallExpansion={name:"small expansion",args:{variant:"top",boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"2px"},expansion:[0,-2,0,-2],children:"Title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},LargeExpansion={name:"large expansion",args:{variant:"top",boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"2px"},expansion:[0,30,0,30],children:"Title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},RoundedCorners={name:"rounded corners",args:{variant:"top",boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},rx:6,ry:6,children:"Title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},CustomContent={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Q1,{variant:"top",boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:"1px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.CJ,{cy:2,r:8,style:{fill:"#dd4444"}})})]})},name:"custom content"},Styling={name:"styling",args:{variant:"top",boxStyle:{fill:"#994444",strokeWidth:"0px"},textStyle:{fill:"#ffffff"},children:"Title"},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]};Top.parameters=_extends({},Top.parameters,{docs:_extends({},null==(_Top$parameters=Top.parameters)?void 0:_Top$parameters.docs,{source:_extends({originalSource:"{\n  name: 'top',\n  args: {\n    variant: 'top',\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    children: 'Title'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Top$parameters2=Top.parameters)||null==(_Top$parameters2$docs=_Top$parameters2.docs)?void 0:_Top$parameters2$docs.source)})}),Right.parameters=_extends({},Right.parameters,{docs:_extends({},null==(_Right$parameters=Right.parameters)?void 0:_Right$parameters.docs,{source:_extends({originalSource:"{\n  name: 'right',\n  args: {\n    variant: 'right',\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    children: 'Title'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Right$parameters2=Right.parameters)||null==(_Right$parameters2$do=_Right$parameters2.docs)?void 0:_Right$parameters2$do.source)})}),Left.parameters=_extends({},Left.parameters,{docs:_extends({},null==(_Left$parameters=Left.parameters)?void 0:_Left$parameters.docs,{source:_extends({originalSource:"{\n  name: 'left',\n  args: {\n    variant: 'left',\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    children: 'Title'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Left$parameters2=Left.parameters)||null==(_Left$parameters2$doc=_Left$parameters2.docs)?void 0:_Left$parameters2$doc.source)})}),Bottom.parameters=_extends({},Bottom.parameters,{docs:_extends({},null==(_Bottom$parameters=Bottom.parameters)?void 0:_Bottom$parameters.docs,{source:_extends({originalSource:"{\n  name: 'bottom',\n  args: {\n    variant: 'bottom',\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    children: 'Title'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Bottom$parameters2=Bottom.parameters)||null==(_Bottom$parameters2$d=_Bottom$parameters2.docs)?void 0:_Bottom$parameters2$d.source)})}),Distance.parameters=_extends({},Distance.parameters,{docs:_extends({},null==(_Distance$parameters=Distance.parameters)?void 0:_Distance$parameters.docs,{source:_extends({originalSource:"{\n  name: 'distance from axis',\n  args: {\n    variant: 'top',\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    distance: 10,\n    children: 'Title'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Distance$parameters2=Distance.parameters)||null==(_Distance$parameters3=_Distance$parameters2.docs)?void 0:_Distance$parameters3.source)})}),SmallExpansion.parameters=_extends({},SmallExpansion.parameters,{docs:_extends({},null==(_SmallExpansion$param=SmallExpansion.parameters)?void 0:_SmallExpansion$param.docs,{source:_extends({originalSource:"{\n  name: 'small expansion',\n  args: {\n    variant: 'top',\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '2px'\n    },\n    expansion: [0, -2, 0, -2],\n    children: 'Title'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_SmallExpansion$param2=SmallExpansion.parameters)||null==(_SmallExpansion$param3=_SmallExpansion$param2.docs)?void 0:_SmallExpansion$param3.source)})}),LargeExpansion.parameters=_extends({},LargeExpansion.parameters,{docs:_extends({},null==(_LargeExpansion$param=LargeExpansion.parameters)?void 0:_LargeExpansion$param.docs,{source:_extends({originalSource:"{\n  name: 'large expansion',\n  args: {\n    variant: 'top',\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '2px'\n    },\n    expansion: [0, 30, 0, 30],\n    children: 'Title'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_LargeExpansion$param2=LargeExpansion.parameters)||null==(_LargeExpansion$param3=_LargeExpansion$param2.docs)?void 0:_LargeExpansion$param3.source)})}),RoundedCorners.parameters=_extends({},RoundedCorners.parameters,{docs:_extends({},null==(_RoundedCorners$param=RoundedCorners.parameters)?void 0:_RoundedCorners$param.docs,{source:_extends({originalSource:"{\n  name: 'rounded corners',\n  args: {\n    variant: 'top',\n    boxStyle: {\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    },\n    rx: 6,\n    ry: 6,\n    children: 'Title'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_RoundedCorners$param2=RoundedCorners.parameters)||null==(_RoundedCorners$param3=_RoundedCorners$param2.docs)?void 0:_RoundedCorners$param3.source)})}),CustomContent.parameters=_extends({},CustomContent.parameters,{docs:_extends({},null==(_CustomContent$parame=CustomContent.parameters)?void 0:_CustomContent$parame.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[60, 60, 60, 60]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <BoxedTitle variant={'top'} boxStyle={{\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: '1px'\n    }}>\n                <Triangle cy={2} r={8} style={{\n        fill: '#dd4444'\n      }} />\n            </BoxedTitle>\n        </Chart>,\n  name: 'custom content'\n}"},null==(_CustomContent$parame2=CustomContent.parameters)||null==(_CustomContent$parame3=_CustomContent$parame2.docs)?void 0:_CustomContent$parame3.source)})}),Styling.parameters=_extends({},Styling.parameters,{docs:_extends({},null==(_Styling$parameters=Styling.parameters)?void 0:_Styling$parameters.docs,{source:_extends({originalSource:"{\n  name: 'styling',\n  args: {\n    variant: 'top',\n    boxStyle: {\n      fill: '#994444',\n      strokeWidth: '0px'\n    },\n    textStyle: {\n      fill: '#ffffff'\n    },\n    children: 'Title'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Styling$parameters2=Styling.parameters)||null==(_Styling$parameters2$=_Styling$parameters2.docs)?void 0:_Styling$parameters2$.source)})});var __namedExportsOrder=["Top","Right","Left","Bottom","Distance","SmallExpansion","LargeExpansion","RoundedCorners","CustomContent","Styling"]},"./packages/annotation/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>barProps,I8:()=>ChartBandViewAxisDecorator,VK:()=>ChartBandViewDecorator,cK:()=>ChartLinearViewDecorator,ee:()=>ChartDecorator,vr:()=>ChartLinearViewAxisDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2,paddingOuter:0},scaleY:{variant:"linear",domain:[0,100]},children:[Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"})]})]})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";var ChartBandViewAxisDecorator=function ChartBandViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]})]})};ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator";var ChartLinearViewDecorator=function ChartLinearViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"})]})]})};ChartLinearViewDecorator.displayName="ChartLinearViewDecorator";var ChartLinearViewAxisDecorator=function ChartLinearViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]})]})};ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator";var barProps={data:[{id:"alpha",x:10},{id:"beta",x:20}],keys:["x"],horizontal:!0,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}};try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/annotation/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator",ChartBandViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartBandViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"]={docgenInfo:ChartBandViewAxisDecorator.__docgenInfo,name:"ChartBandViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewDecorator.displayName="ChartLinearViewDecorator",ChartLinearViewDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"]={docgenInfo:ChartLinearViewDecorator.__docgenInfo,name:"ChartLinearViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator",ChartLinearViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"]={docgenInfo:ChartLinearViewAxisDecorator.__docgenInfo,name:"ChartLinearViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/typography/BoxedTitle.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/annotation/stories/typography/BoxedTitle.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"boxedtitle",children:"BoxedTitle"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BoxedTitle"})," displays a text label positioned around the edges of a chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," determines whether the labels is placed on the top, right, bottom, or left side of a chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__.Top}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__.Right}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__.Left}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__.Bottom}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"distance",children:"Distance"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Boxes can be displaced away from the chart boundary using prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"distance"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__.Distance}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"expansion",children:"Expansion"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"expansion"})," takes adjusts the extent of the box."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__.SmallExpansion}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__.LargeExpansion}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Note a small negative expansion will shrink the box, and can balance a non-zero color border."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"corners",children:"Corners"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Box corners can be rounded using props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rx"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ry"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__.RoundedCorners}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"content",children:"Content"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The label can contain arbitrary content."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__.CustomContent}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"It is possible to style the box as well as the text."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BoxedTitle_stories__WEBPACK_IMPORTED_MODULE_2__.Styling})]})}}},"./node_modules/d3-shape/src/constant.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function __WEBPACK_DEFAULT_EXPORT__(x){return function constant(){return x}}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})},"./node_modules/d3-shape/src/curve/basis.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function point(that,x,y){that._context.bezierCurveTo((2*that._x0+that._x1)/3,(2*that._y0+that._y1)/3,(that._x0+2*that._x1)/3,(that._y0+2*that._y1)/3,(that._x0+4*that._x1+x)/6,(that._y0+4*that._y1+y)/6)}function Basis(context){this._context=context}__webpack_require__.d(__webpack_exports__,{fE:()=>Basis,xm:()=>point}),Basis.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:point(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(x,y){switch(x=+x,y=+y,this._point){case 0:this._point=1,this._line?this._context.lineTo(x,y):this._context.moveTo(x,y);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:point(this,x,y)}this._x0=this._x1,this._x1=x,this._y0=this._y1,this._y1=y}}},"./node_modules/d3-shape/src/curve/bundle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _basis_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/curve/basis.js");function Bundle(context,beta){this._basis=new _basis_js__WEBPACK_IMPORTED_MODULE_0__.fE(context),this._beta=beta}Bundle.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var x=this._x,y=this._y,j=x.length-1;if(j>0)for(var t,x0=x[0],y0=y[0],dx=x[j]-x0,dy=y[j]-y0,i=-1;++i<=j;)t=i/j,this._basis.point(this._beta*x[i]+(1-this._beta)*(x0+t*dx),this._beta*y[i]+(1-this._beta)*(y0+t*dy));this._x=this._y=null,this._basis.lineEnd()},point:function(x,y){this._x.push(+x),this._y.push(+y)}};const __WEBPACK_DEFAULT_EXPORT__=function custom(beta){function bundle(context){return 1===beta?new _basis_js__WEBPACK_IMPORTED_MODULE_0__.fE(context):new Bundle(context,beta)}return bundle.beta=function(beta){return custom(+beta)},bundle}(.85)},"./node_modules/d3-shape/src/curve/linear.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function Linear(context){this._context=context}function __WEBPACK_DEFAULT_EXPORT__(context){return new Linear(context)}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__}),Linear.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(x,y){switch(x=+x,y=+y,this._point){case 0:this._point=1,this._line?this._context.lineTo(x,y):this._context.moveTo(x,y);break;case 1:this._point=2;default:this._context.lineTo(x,y)}}}},"./node_modules/d3-shape/src/line.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>line});Array.prototype.slice;var constant=__webpack_require__("./node_modules/d3-shape/src/constant.js"),linear=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),src_path=__webpack_require__("./node_modules/d3-shape/src/path.js");function point_x(p){return p[0]}function point_y(p){return p[1]}function line(x,y){var defined=(0,constant.Z)(!0),context=null,curve=linear.Z,output=null,path=(0,src_path.d)(line);function line(data){var i,d,buffer,n=(data=function array(x){return"object"==typeof x&&"length"in x?x:Array.from(x)}(data)).length,defined0=!1;for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i)!(i<n&&defined(d=data[i],i,data))===defined0&&((defined0=!defined0)?output.lineStart():output.lineEnd()),defined0&&output.point(+x(d,i,data),+y(d,i,data));if(buffer)return output=null,buffer+""||null}return x="function"==typeof x?x:void 0===x?point_x:(0,constant.Z)(x),y="function"==typeof y?y:void 0===y?point_y:(0,constant.Z)(y),line.x=function(_){return arguments.length?(x="function"==typeof _?_:(0,constant.Z)(+_),line):x},line.y=function(_){return arguments.length?(y="function"==typeof _?_:(0,constant.Z)(+_),line):y},line.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,constant.Z)(!!_),line):defined},line.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),line):curve},line.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),line):context},line}},"./node_modules/d3-shape/src/path.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>withPath});const pi=Math.PI,tau=2*pi,tauEpsilon=tau-1e-6;function append(strings){this._+=strings[0];for(let i=1,n=strings.length;i<n;++i)this._+=arguments[i]+strings[i]}class Path{constructor(digits){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==digits?append:function appendRound(digits){let d=Math.floor(digits);if(!(d>=0))throw new Error(`invalid digits: ${digits}`);if(d>15)return append;const k=10**d;return function(strings){this._+=strings[0];for(let i=1,n=strings.length;i<n;++i)this._+=Math.round(arguments[i]*k)/k+strings[i]}}(digits)}moveTo(x,y){this._append`M${this._x0=this._x1=+x},${this._y0=this._y1=+y}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(x,y){this._append`L${this._x1=+x},${this._y1=+y}`}quadraticCurveTo(x1,y1,x,y){this._append`Q${+x1},${+y1},${this._x1=+x},${this._y1=+y}`}bezierCurveTo(x1,y1,x2,y2,x,y){this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1=+x},${this._y1=+y}`}arcTo(x1,y1,x2,y2,r){if(x1=+x1,y1=+y1,x2=+x2,y2=+y2,(r=+r)<0)throw new Error(`negative radius: ${r}`);let x0=this._x1,y0=this._y1,x21=x2-x1,y21=y2-y1,x01=x0-x1,y01=y0-y1,l01_2=x01*x01+y01*y01;if(null===this._x1)this._append`M${this._x1=x1},${this._y1=y1}`;else if(l01_2>1e-6)if(Math.abs(y01*x21-y21*x01)>1e-6&&r){let x20=x2-x0,y20=y2-y0,l21_2=x21*x21+y21*y21,l20_2=x20*x20+y20*y20,l21=Math.sqrt(l21_2),l01=Math.sqrt(l01_2),l=r*Math.tan((pi-Math.acos((l21_2+l01_2-l20_2)/(2*l21*l01)))/2),t01=l/l01,t21=l/l21;Math.abs(t01-1)>1e-6&&this._append`L${x1+t01*x01},${y1+t01*y01}`,this._append`A${r},${r},0,0,${+(y01*x20>x01*y20)},${this._x1=x1+t21*x21},${this._y1=y1+t21*y21}`}else this._append`L${this._x1=x1},${this._y1=y1}`;else;}arc(x,y,r,a0,a1,ccw){if(x=+x,y=+y,ccw=!!ccw,(r=+r)<0)throw new Error(`negative radius: ${r}`);let dx=r*Math.cos(a0),dy=r*Math.sin(a0),x0=x+dx,y0=y+dy,cw=1^ccw,da=ccw?a0-a1:a1-a0;null===this._x1?this._append`M${x0},${y0}`:(Math.abs(this._x1-x0)>1e-6||Math.abs(this._y1-y0)>1e-6)&&this._append`L${x0},${y0}`,r&&(da<0&&(da=da%tau+tau),da>tauEpsilon?this._append`A${r},${r},0,1,${cw},${x-dx},${y-dy}A${r},${r},0,1,${cw},${this._x1=x0},${this._y1=y0}`:da>1e-6&&this._append`A${r},${r},0,${+(da>=pi)},${cw},${this._x1=x+r*Math.cos(a1)},${this._y1=y+r*Math.sin(a1)}`)}rect(x,y,w,h){this._append`M${this._x0=this._x1=+x},${this._y0=this._y1=+y}h${w=+w}v${+h}h${-w}Z`}toString(){return this._}}function withPath(shape){let digits=3;return shape.digits=function(_){if(!arguments.length)return digits;if(null==_)digits=null;else{const d=Math.floor(_);if(!(d>=0))throw new RangeError(`invalid digits: ${_}`);digits=d}return shape},()=>new Path(digits)}Path.prototype}}]);