"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[1625],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.$4,Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/core/stories/components/interactivity/Button.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,customContent:()=>customContent,default:()=>Button_stories,textButton:()=>textButton});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),src=__webpack_require__("./packages/core/src/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartForButtonDecorator=function ChartForButtonDecorator(Story){return(0,jsx_runtime.jsx)(src.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},theme:{g:{button:{cursor:"pointer"}}},children:(0,jsx_runtime.jsxs)(src.G7x,{children:[(0,jsx_runtime.jsx)(src.Tgp,{variant:"inner"}),Story()]})})};ChartForButtonDecorator.displayName="ChartForButtonDecorator";try{ChartForButtonDecorator.displayName="ChartForButtonDecorator",ChartForButtonDecorator.__docgenInfo={description:"",displayName:"ChartForButtonDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/interactivity/decorators.tsx#ChartForButtonDecorator"]={docgenInfo:ChartForButtonDecorator.__docgenInfo,name:"ChartForButtonDecorator",path:"packages/core/stories/components/interactivity/decorators.tsx#ChartForButtonDecorator"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>(0,jsx_runtime.jsx)(src.zxk,{...args});const textButton=Template.bind({});textButton.storyName="text button",textButton.args={variant:"button",position:[40,40],size:[100,40],onClick:()=>{console.log("clicked")}},textButton.parameters={storySource:{source:"args => <Button {...args} />"}},textButton.decorators=[ChartForButtonDecorator];const customContent=Template.bind({});customContent.storyName="custom content",customContent.args={variant:"button",position:[40,40],size:[100,40],onClick:()=>{console.log("clicked")},children:(0,jsx_runtime.jsx)("rect",{x:0,y:0,width:40,height:40,style:{fill:"#777777 "}})},customContent.parameters={storySource:{source:"args => <Button {...args} />"}},customContent.decorators=[ChartForButtonDecorator];const componentMeta={title:"Core/Components/Interactivity/Button",tags:["stories-mdx"],includeStories:["textButton","customContent"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",rect:"rect"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"button",children:"Button"}),"\n",(0,jsx_runtime.jsx)(dist.h_,{title:"Core/Components/Interactivity/Button"}),"\n","\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," is a minimal click-able button component."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," is not really intended to be used in practice.\nRather, it is a demonstration of an implementation of the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonProps"})," interface."]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:src.zxk}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Prop ",(0,jsx_runtime.jsx)(_components.code,{children:"variant"}),", like in most library components, is used to annotated a component via a ",(0,jsx_runtime.jsx)(_components.code,{children:"role"})," attribute and\na css class. When a ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," is created without any content, it is also used as a text label."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"text button",args:{variant:"button",position:[40,40],size:[100,40],onClick:()=>{console.log("clicked")}},component:src.zxk,decorators:[ChartForButtonDecorator],children:Template.bind({})})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Note that the text element is click-able; here, click events generate output in the console.\n(Click on the text, then check the console ",(0,jsx_runtime.jsx)(_components.code,{children:"Ctrl Shift J"}),".)"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"custom-content",children:"Custom content"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," components can contain arbitrary content."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"custom content",args:{variant:"button",position:[40,40],size:[100,40],onClick:()=>{console.log("clicked")},children:(0,jsx_runtime.jsx)(_components.rect,{x:0,y:0,width:40,height:40,style:{fill:"#777777 "}})},component:src.zxk,decorators:[ChartForButtonDecorator],children:Template.bind({})})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The content of the button is clickable. (Click on the rectangle, then check the console ",(0,jsx_runtime.jsx)(_components.code,{children:"Ctrl Shift J"}),".)"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Styles supplied to ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," are used to style the wrapping ",(0,jsx_runtime.jsx)(_components.code,{children:"g"})," element, not the button content."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"other-props",children:"Other props"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," shares props with ",(0,jsx_runtime.jsx)(_components.code,{children:"Label"}),". See ",(0,jsx_runtime.jsx)(_components.code,{children:"Label"})," for further details."]})]})}}};const Button_stories=componentMeta}}]);