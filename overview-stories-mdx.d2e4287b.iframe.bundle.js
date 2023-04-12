/*! For license information please see overview-stories-mdx.d2e4287b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7925],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.$4,Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./examples/icons.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B5:()=>defaultIconActiveFill,De:()=>FirstPageIcon,MS:()=>defaultIconInactiveFill,NK:()=>ReplayIcon,Ne:()=>NextIcon,W3:()=>LastPageIcon,jJ:()=>PreviousIcon,k1:()=>FilterIcon,lQ:()=>DatasetIcon,nQ:()=>CheckIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),defaultIconActiveFill="#555",defaultIconInactiveFill="#ccc",ReplayIcon=function ReplayIcon(_ref){var _ref$fill=_ref.fill,fill=void 0===_ref$fill?defaultIconActiveFill:_ref$fill;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill,d:"M12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13h2q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6h-.15l1.55 1.55L12 9 8 5l4-4 1.4 1.45L11.85 4H12q1.875 0 3.513.713 1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Z"})})};ReplayIcon.displayName="ReplayIcon";var NextIcon=function NextIcon(_ref2){var _ref2$fill=_ref2.fill,fill=void 0===_ref2$fill?defaultIconActiveFill:_ref2$fill;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill,d:"M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z"})})};NextIcon.displayName="NextIcon";var PreviousIcon=function PreviousIcon(_ref3){var _ref3$fill=_ref3.fill,fill=void 0===_ref3$fill?defaultIconActiveFill:_ref3$fill;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill,d:"m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z"})})};PreviousIcon.displayName="PreviousIcon";var FirstPageIcon=function FirstPageIcon(_ref4){var _ref4$fill=_ref4.fill,fill=void 0===_ref4$fill?defaultIconActiveFill:_ref4$fill;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill,d:"M6 18V6h2v12Zm11 0-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z"})})};FirstPageIcon.displayName="FirstPageIcon";var LastPageIcon=function LastPageIcon(_ref5){var _ref5$fill=_ref5.fill,fill=void 0===_ref5$fill?defaultIconActiveFill:_ref5$fill;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill,d:"m7 18-1.4-1.4 4.6-4.6-4.6-4.6L7 6l6 6Zm9 0V6h2v12Z"})})};LastPageIcon.displayName="LastPageIcon";var FilterIcon=function FilterIcon(_ref6){var _ref6$x=_ref6.x,x=void 0===_ref6$x?0:_ref6$x,_ref6$y=_ref6.y,y=void 0===_ref6$y?0:_ref6$y,_ref6$fill=_ref6.fill,fill=void 0===_ref6$fill?defaultIconActiveFill:_ref6$fill,className=_ref6.className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x,y,height:"24",width:"24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z",fill,className})})};FilterIcon.displayName="FilterIcon";var DatasetIcon=function DatasetIcon(_ref7){var _ref7$x=_ref7.x,x=void 0===_ref7$x?0:_ref7$x,_ref7$y=_ref7.y,y=void 0===_ref7$y?0:_ref7$y,_ref7$fill=_ref7.fill,fill=void 0===_ref7$fill?defaultIconActiveFill:_ref7$fill,className=_ref7.className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x,y,height:"24",width:"24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill,d:"M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M11,17H7v-4h4V17z M11,11H7V7h4V11 z M17,17h-4v-4h4V17z M17,11h-4V7h4V11z",className})})};DatasetIcon.displayName="DatasetIcon";var CheckIcon=function CheckIcon(_ref8){var _ref8$x=_ref8.x,x=void 0===_ref8$x?0:_ref8$x,_ref8$y=_ref8.y,y=void 0===_ref8$y?0:_ref8$y,_ref8$fill=_ref8.fill,fill=void 0===_ref8$fill?defaultIconActiveFill:_ref8$fill,className=_ref8.className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x,y,height:"24",width:"24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill,d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",className})})};CheckIcon.displayName="CheckIcon";try{ReplayIcon.displayName="ReplayIcon",ReplayIcon.__docgenInfo={description:"",displayName:"ReplayIcon",props:{x:{defaultValue:{value:"0"},description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:{value:"0"},description:"",name:"y",required:!1,type:{name:"number"}},fill:{defaultValue:{value:"#555"},description:"",name:"fill",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/icons.tsx#ReplayIcon"]={docgenInfo:ReplayIcon.__docgenInfo,name:"ReplayIcon",path:"examples/icons.tsx#ReplayIcon"})}catch(__react_docgen_typescript_loader_error){}try{NextIcon.displayName="NextIcon",NextIcon.__docgenInfo={description:"",displayName:"NextIcon",props:{x:{defaultValue:{value:"0"},description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:{value:"0"},description:"",name:"y",required:!1,type:{name:"number"}},fill:{defaultValue:{value:"#555"},description:"",name:"fill",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/icons.tsx#NextIcon"]={docgenInfo:NextIcon.__docgenInfo,name:"NextIcon",path:"examples/icons.tsx#NextIcon"})}catch(__react_docgen_typescript_loader_error){}try{PreviousIcon.displayName="PreviousIcon",PreviousIcon.__docgenInfo={description:"",displayName:"PreviousIcon",props:{x:{defaultValue:{value:"0"},description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:{value:"0"},description:"",name:"y",required:!1,type:{name:"number"}},fill:{defaultValue:{value:"#555"},description:"",name:"fill",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/icons.tsx#PreviousIcon"]={docgenInfo:PreviousIcon.__docgenInfo,name:"PreviousIcon",path:"examples/icons.tsx#PreviousIcon"})}catch(__react_docgen_typescript_loader_error){}try{FirstPageIcon.displayName="FirstPageIcon",FirstPageIcon.__docgenInfo={description:"",displayName:"FirstPageIcon",props:{x:{defaultValue:{value:"0"},description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:{value:"0"},description:"",name:"y",required:!1,type:{name:"number"}},fill:{defaultValue:{value:"#555"},description:"",name:"fill",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/icons.tsx#FirstPageIcon"]={docgenInfo:FirstPageIcon.__docgenInfo,name:"FirstPageIcon",path:"examples/icons.tsx#FirstPageIcon"})}catch(__react_docgen_typescript_loader_error){}try{LastPageIcon.displayName="LastPageIcon",LastPageIcon.__docgenInfo={description:"",displayName:"LastPageIcon",props:{x:{defaultValue:{value:"0"},description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:{value:"0"},description:"",name:"y",required:!1,type:{name:"number"}},fill:{defaultValue:{value:"#555"},description:"",name:"fill",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/icons.tsx#LastPageIcon"]={docgenInfo:LastPageIcon.__docgenInfo,name:"LastPageIcon",path:"examples/icons.tsx#LastPageIcon"})}catch(__react_docgen_typescript_loader_error){}try{FilterIcon.displayName="FilterIcon",FilterIcon.__docgenInfo={description:"",displayName:"FilterIcon",props:{x:{defaultValue:{value:"0"},description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:{value:"0"},description:"",name:"y",required:!1,type:{name:"number"}},fill:{defaultValue:{value:"#555"},description:"",name:"fill",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/icons.tsx#FilterIcon"]={docgenInfo:FilterIcon.__docgenInfo,name:"FilterIcon",path:"examples/icons.tsx#FilterIcon"})}catch(__react_docgen_typescript_loader_error){}try{DatasetIcon.displayName="DatasetIcon",DatasetIcon.__docgenInfo={description:"",displayName:"DatasetIcon",props:{x:{defaultValue:{value:"0"},description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:{value:"0"},description:"",name:"y",required:!1,type:{name:"number"}},fill:{defaultValue:{value:"#555"},description:"",name:"fill",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/icons.tsx#DatasetIcon"]={docgenInfo:DatasetIcon.__docgenInfo,name:"DatasetIcon",path:"examples/icons.tsx#DatasetIcon"})}catch(__react_docgen_typescript_loader_error){}try{CheckIcon.displayName="CheckIcon",CheckIcon.__docgenInfo={description:"",displayName:"CheckIcon",props:{x:{defaultValue:{value:"0"},description:"",name:"x",required:!1,type:{name:"number"}},y:{defaultValue:{value:"0"},description:"",name:"y",required:!1,type:{name:"number"}},fill:{defaultValue:{value:"#555"},description:"",name:"fill",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["examples/icons.tsx#CheckIcon"]={docgenInfo:CheckIcon.__docgenInfo,name:"CheckIcon",path:"examples/icons.tsx#CheckIcon"})}catch(__react_docgen_typescript_loader_error){}},"./examples/overview.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./examples/icons.tsx"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Gallery/Overview",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Gallery/Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"chart-gallery",children:"Chart Gallery"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The gallery holds examples of complete charts built using components from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"@chsk/core"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"@chsk"})," add-on packages."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"datasets",children:"Datasets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["All examples use synthetic datasets. Click the 'refresh' button, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{class:"icon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{fill:"#222222",d:"M12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13h2q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6h-.15l1.55 1.55L12 9 8 5l4-4 1.4 1.45L11.85 4H12q1.875 0 3.513.713 1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Z"})})}),", in the chart toolbar to generate and display a new dataset."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"interactivity",children:"Interactivity"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Many of the examples in the gallery are interactive. For instance, some charts display tooltips upon mouse interactions,\nor adjust state upon toggling items in legends. Other charts have buttons to download datasets or svg images.\nHowever, it is important to stress that some charts are non-interactive by design."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"milestone-animations",children:"Milestone animations"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Some examples are prepared with 'milestone animations' - a mechanism for step-by-step story-telling."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"By default, the examples display the final state of the milestone animation. This makes it possible to grasp the overall form of all the charts while scrolling through the gallery."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["To see the animations, click the 'first-page' button, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{class:"icon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{fill:"#222222",d:"M6 18V6h2v12Zm11 0-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z"})})}),", to reset the chart state. Then, click the 'next' button, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{class:"icon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{fill:"#222222",d:"M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z"})})}),", to step through the animation."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"source-code",children:"Source code"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Source code for all examples is available in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://github.com/tkonopka/chsk/tree/main/examples",target:"_blank",rel:"nofollow noopener noreferrer",children:"this directory"})," of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://github.com/tkonopka/chsk/",target:"_blank",rel:"nofollow noopener noreferrer",children:"github repository"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:" "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"credits",children:"Credits"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Icons used in the chart gallery originate from the 'Material Symbols' collection at ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://fonts.google.com/icons",target:"_blank",rel:"nofollow noopener noreferrer",children:"google fonts"}),"."]})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);