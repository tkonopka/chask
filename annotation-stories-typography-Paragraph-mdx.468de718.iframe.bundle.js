"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3237,3289],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/typography/Paragraph.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Centered:()=>Centered,InBoxedLabel:()=>InBoxedLabel,MiddleAlignment:()=>MiddleAlignment,Rotation:()=>Rotation,TopAlignment:()=>TopAlignment,WrappingDelimiter:()=>WrappingDelimiter,WrappingNarrow:()=>WrappingNarrow,WrappingWide:()=>WrappingWide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _TopAlignment$paramet,_TopAlignment$paramet2,_TopAlignment$paramet3,_MiddleAlignment$para,_MiddleAlignment$para2,_MiddleAlignment$para3,_Rotation$parameters,_Rotation$parameters2,_Rotation$parameters3,_WrappingWide$paramet,_WrappingWide$paramet2,_WrappingWide$paramet3,_WrappingNarrow$param,_WrappingNarrow$param2,_WrappingNarrow$param3,_WrappingDelimiter$pa,_WrappingDelimiter$pa2,_WrappingDelimiter$pa3,_Centered$parameters,_Centered$parameters2,_Centered$parameters3,_InBoxedLabel$paramet,_InBoxedLabel$paramet2,_InBoxedLabel$paramet3,_chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/annotation/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Annotation/Typography/Paragraph",component:_src__WEBPACK_IMPORTED_MODULE_1__.nv};var TopAlignment={name:"top alignment",args:{position:[0,0],size:[100,26],align:0,style:{textAnchor:"start"},children:"Long text should wrap."},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},MiddleAlignment={name:"middle alignment",args:{position:[0,0],size:[100,26],align:.5,style:{textAnchor:"start"},children:"Long text should wrap."},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},Rotation={name:"rotation",args:{position:[60,80],size:[100,26],angle:-30,style:{textAnchor:"start"},children:"Long text should wrap."},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},WrappingWide={name:"wrapping, wide",args:{position:[0,0],size:[180,22],align:0,style:{textAnchor:"start"},children:"Long text should wrap into several lines."},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},WrappingNarrow={name:"wrapping, narrow",args:{position:[0,0],size:[80,32],align:0,style:{textAnchor:"start"},children:"Long text should wrap into several lines."},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},WrappingDelimiter={name:"wrapping, delimiter",args:{position:[0,0],size:[180,22],align:0,separator:"\n",style:{textAnchor:"start"},children:"Long\ntext should wrap into several lines."},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},Centered={name:"centered",args:{position:[120,60],size:[180,22],align:0,children:"Long text should wrap into several lines.",style:{fontWeight:600,textAnchor:"middle"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.ee]},InBoxedLabel={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.I6,{position:[.5,.5],positionUnits:"relative",size:[200,100],sizeUnits:"absolute",boxStyle:{fill:"#ffffff",stroke:"#222222",strokeWidth:1},rx:8,ry:8,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.nv,{position:[-85,0],size:[190,22],align:.5,style:{textAnchor:"start",dominantBaseline:"middle"},children:"Long text should wrap into several lines. Long text should wrap."})})]})},name:"boxed label"};TopAlignment.parameters=_extends({},TopAlignment.parameters,{docs:_extends({},null==(_TopAlignment$paramet=TopAlignment.parameters)?void 0:_TopAlignment$paramet.docs,{source:_extends({originalSource:"{\n  name: 'top alignment',\n  args: {\n    position: [0, 0],\n    size: [100, 26],\n    align: 0,\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'Long text should wrap.'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_TopAlignment$paramet2=TopAlignment.parameters)||null==(_TopAlignment$paramet3=_TopAlignment$paramet2.docs)?void 0:_TopAlignment$paramet3.source)})}),MiddleAlignment.parameters=_extends({},MiddleAlignment.parameters,{docs:_extends({},null==(_MiddleAlignment$para=MiddleAlignment.parameters)?void 0:_MiddleAlignment$para.docs,{source:_extends({originalSource:"{\n  name: 'middle alignment',\n  args: {\n    position: [0, 0],\n    size: [100, 26],\n    align: 0.5,\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'Long text should wrap.'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_MiddleAlignment$para2=MiddleAlignment.parameters)||null==(_MiddleAlignment$para3=_MiddleAlignment$para2.docs)?void 0:_MiddleAlignment$para3.source)})}),Rotation.parameters=_extends({},Rotation.parameters,{docs:_extends({},null==(_Rotation$parameters=Rotation.parameters)?void 0:_Rotation$parameters.docs,{source:_extends({originalSource:"{\n  name: 'rotation',\n  args: {\n    position: [60, 80],\n    size: [100, 26],\n    angle: -30,\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'Long text should wrap.'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Rotation$parameters2=Rotation.parameters)||null==(_Rotation$parameters3=_Rotation$parameters2.docs)?void 0:_Rotation$parameters3.source)})}),WrappingWide.parameters=_extends({},WrappingWide.parameters,{docs:_extends({},null==(_WrappingWide$paramet=WrappingWide.parameters)?void 0:_WrappingWide$paramet.docs,{source:_extends({originalSource:"{\n  name: 'wrapping, wide',\n  args: {\n    position: [0, 0],\n    size: [180, 22],\n    align: 0,\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'Long text should wrap into several lines.'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_WrappingWide$paramet2=WrappingWide.parameters)||null==(_WrappingWide$paramet3=_WrappingWide$paramet2.docs)?void 0:_WrappingWide$paramet3.source)})}),WrappingNarrow.parameters=_extends({},WrappingNarrow.parameters,{docs:_extends({},null==(_WrappingNarrow$param=WrappingNarrow.parameters)?void 0:_WrappingNarrow$param.docs,{source:_extends({originalSource:"{\n  name: 'wrapping, narrow',\n  args: {\n    position: [0, 0],\n    size: [80, 32],\n    align: 0,\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'Long text should wrap into several lines.'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_WrappingNarrow$param2=WrappingNarrow.parameters)||null==(_WrappingNarrow$param3=_WrappingNarrow$param2.docs)?void 0:_WrappingNarrow$param3.source)})}),WrappingDelimiter.parameters=_extends({},WrappingDelimiter.parameters,{docs:_extends({},null==(_WrappingDelimiter$pa=WrappingDelimiter.parameters)?void 0:_WrappingDelimiter$pa.docs,{source:_extends({originalSource:"{\n  name: 'wrapping, delimiter',\n  args: {\n    position: [0, 0],\n    size: [180, 22],\n    align: 0,\n    separator: '\\n',\n    style: {\n      textAnchor: 'start'\n    },\n    children: 'Long\\ntext should wrap into several lines.'\n  },\n  decorators: [ChartDecorator]\n}"},null==(_WrappingDelimiter$pa2=WrappingDelimiter.parameters)||null==(_WrappingDelimiter$pa3=_WrappingDelimiter$pa2.docs)?void 0:_WrappingDelimiter$pa3.source)})}),Centered.parameters=_extends({},Centered.parameters,{docs:_extends({},null==(_Centered$parameters=Centered.parameters)?void 0:_Centered$parameters.docs,{source:_extends({originalSource:"{\n  name: 'centered',\n  args: {\n    position: [120, 60],\n    size: [180, 22],\n    align: 0,\n    children: 'Long text should wrap into several lines.',\n    style: {\n      fontWeight: 600,\n      textAnchor: 'middle'\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Centered$parameters2=Centered.parameters)||null==(_Centered$parameters3=_Centered$parameters2.docs)?void 0:_Centered$parameters3.source)})}),InBoxedLabel.parameters=_extends({},InBoxedLabel.parameters,{docs:_extends({},null==(_InBoxedLabel$paramet=InBoxedLabel.parameters)?void 0:_InBoxedLabel$paramet.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <BoxedLabel position={[0.5, 0.5]} positionUnits={'relative'} size={[200, 100]} sizeUnits={'absolute'} boxStyle={{\n      fill: '#ffffff',\n      stroke: '#222222',\n      strokeWidth: 1\n    }} rx={8} ry={8}>\n                <Paragraph position={[-85, 0]} size={[190, 22]} align={0.5} style={{\n        textAnchor: 'start',\n        dominantBaseline: 'middle'\n      }}>\n                    Long text should wrap into several lines. Long text should wrap.\n                </Paragraph>\n            </BoxedLabel>\n        </Chart>,\n  name: 'boxed label'\n}"},null==(_InBoxedLabel$paramet2=InBoxedLabel.parameters)||null==(_InBoxedLabel$paramet3=_InBoxedLabel$paramet2.docs)?void 0:_InBoxedLabel$paramet3.source)})});var __namedExportsOrder=["TopAlignment","MiddleAlignment","Rotation","WrappingWide","WrappingNarrow","WrappingDelimiter","Centered","InBoxedLabel"]},"./packages/annotation/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>barProps,I8:()=>ChartBandViewAxisDecorator,VK:()=>ChartBandViewDecorator,cK:()=>ChartLinearViewDecorator,ee:()=>ChartDecorator,vr:()=>ChartLinearViewAxisDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2,paddingOuter:0},scaleY:{variant:"linear",domain:[0,100]},children:[Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"})]})]})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";var ChartBandViewAxisDecorator=function ChartBandViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]})]})};ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator";var ChartLinearViewDecorator=function ChartLinearViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"})]})]})};ChartLinearViewDecorator.displayName="ChartLinearViewDecorator";var ChartLinearViewAxisDecorator=function ChartLinearViewAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,60,60,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]})]})};ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator";var barProps={data:[{id:"alpha",x:10},{id:"beta",x:20}],keys:["x"],horizontal:!0,scaleIndex:{variant:"band",domain:["alpha","beta"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}};try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/annotation/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewAxisDecorator.displayName="ChartBandViewAxisDecorator",ChartBandViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartBandViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"]={docgenInfo:ChartBandViewAxisDecorator.__docgenInfo,name:"ChartBandViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartBandViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewDecorator.displayName="ChartLinearViewDecorator",ChartLinearViewDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"]={docgenInfo:ChartLinearViewDecorator.__docgenInfo,name:"ChartLinearViewDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLinearViewAxisDecorator.displayName="ChartLinearViewAxisDecorator",ChartLinearViewAxisDecorator.__docgenInfo={description:"",displayName:"ChartLinearViewAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"]={docgenInfo:ChartLinearViewAxisDecorator.__docgenInfo,name:"ChartLinearViewAxisDecorator",path:"packages/annotation/stories/decorators.tsx#ChartLinearViewAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/typography/Paragraph.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Paragraph_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/annotation/stories/typography/Paragraph.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Paragraph_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"paragraph",children:"Paragraph"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Paragraph"})," displays text and wraps long segments into multiple lines."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_Paragraph_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"position-and-alignment",children:"Position and alignment"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Similarly to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Typography"})," component, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Paragraph"})," accepts a prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"})," with absolute coordinates.\nUnlike ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Typography"}),", however, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Paragraph"})," also has a prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"align"})," that determines vertical alignment."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["In the examples below, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Paragraph"})," components are placed at the origin of the view (top-left corner).\nThe prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"align"})," determines whether it is the first line or another part of the paragraph\nthat aligns with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Paragraph_stories__WEBPACK_IMPORTED_MODULE_2__.TopAlignment}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Paragraph_stories__WEBPACK_IMPORTED_MODULE_2__.MiddleAlignment}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To rotate the entire paragraph rotate around ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"}),", use prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"angle"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Paragraph_stories__WEBPACK_IMPORTED_MODULE_2__.Rotation}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"wrapping",children:"Wrapping"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Paragraph"})," wraps long segments of text into multiple lines.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"size"})," determines the recommended width of each line, and also the spacing between adjacent lines."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Paragraph_stories__WEBPACK_IMPORTED_MODULE_2__.WrappingWide}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Paragraph_stories__WEBPACK_IMPORTED_MODULE_2__.WrappingNarrow}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Paragraph"})," can accept a prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"separator"})," to split text at a specific text pattern.\nBelow, a separator is used to force an artificial line break after the first word.\nOther line breaks are created as in the previous examples, i.e. based on the line size."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Paragraph_stories__WEBPACK_IMPORTED_MODULE_2__.WrappingDelimiter}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"fonts-and-letter-widths",children:"Fonts and letter widths"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Text wrapping is not automatic in SVG. Thus, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Paragraph"})," component performs\ncalculations to determine where to break long text into separate lines.\nThe calculations estimate the width of words and try to fit as many words as possible on each line."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"letterBaseWidths"})," can be set to either ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"sans"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"serif"})," to load letter profiles for a sans-serif font\n(Arial) or a serif font (Times New Roman).\nThese profiles have been assembled manually based on letters of size 16px.\nThey only contain a small subset of characters (a-z, A-Z, 0-9, and some punctuation).\nThe selection should cover many, although clearly not all, use cases."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To fine tune the line-break calculations, prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"letterWidths"})," accepts a dictionary mapping letters\nto their widths in pixels. These props over-ride values in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"sans"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"serif"})," presets.\nThe custom values can be used to accommodate an unusual font or to support additional letters."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Styles provided via prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"style"})," are applied to each line."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Paragraph_stories__WEBPACK_IMPORTED_MODULE_2__.Centered}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Note that css styles can affect the effective width of a text segment.\nSuch effects are not taken into account in the calculations that determine line breaks."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"boxed-labels",children:"Boxed labels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Paragraph"})," components can be placed inside ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BoxedLabel"})," components to create\nthe effect of a paragraph enclosed in a rectangle."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Paragraph_stories__WEBPACK_IMPORTED_MODULE_2__.InBoxedLabel}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Note that when placing ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Paragraph"})," (or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Typography"}),") within a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BoxedLabel"}),", coordinates in prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"position"})," are relative to the center of the box."]})]})}}}}]);