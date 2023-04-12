"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9813],{"./packages/matrix/stories/upsets/UpSetMemberships.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,customStyles:()=>customStyles,customSymbol:()=>customSymbol,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,withGrid:()=>withGrid});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/matrix/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/matrix/stories/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.iC,{...args});const defaultStory=Template.bind({});defaultStory.storyName="default",defaultStory.args={},defaultStory.parameters={storySource:{source:"args => <UpSetMemberships {...args} />"}},defaultStory.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__.b7];const withGrid=Template.bind({});withGrid.storyName="with grid",withGrid.args={},withGrid.parameters={storySource:{source:"args => <UpSetMemberships {...args} />"}},withGrid.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__._0];const customSymbol=Template.bind({});customSymbol.storyName="custom symbol",customSymbol.args={symbol:_chsk_core__WEBPACK_IMPORTED_MODULE_2__.bK,symbolStyle:{strokeWidth:5}},customSymbol.parameters={storySource:{source:"args => <UpSetMemberships {...args} />"}},customSymbol.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__._0];const customStyles=Template.bind({});customStyles.storyName="custom styles",customStyles.args={lineStyle:{stroke:"#b33",strokeWidth:5},symbolStyle:{fill:"#b33"}},customStyles.parameters={storySource:{source:"args => <UpSetMemberships {...args} />"}},customStyles.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_4__._0];const componentMeta={title:"Addons/Matrix/UpSets/UpSetMemberships",tags:["stories-mdx"],includeStories:["defaultStory","withGrid","customSymbol","customStyles"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1,{id:"upsetmemberships",children:"UpSetMemberships"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/Matrix/UpSets/UpSetMemberships"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"UpSetMemberships"})," summarizes set intersections through a graphical system of symbols and connecting lines. The graphical scheme is motivated and explained by the creators of UpSet charts ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://upset.app/",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_3__.iC}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"set-memberships",children:"Set memberships"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"UpSetMemberships"})," displays symbols and lines to mark set intersections. In the examples below, the dataset consists of four sets labeled 'alpha', 'beta', 'gamma', and 'delta'."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"default",args:{},component:_src__WEBPACK_IMPORTED_MODULE_3__.iC,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__.b7],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["The interpretation of these visual elements follows the conventions of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.a,{href:"https://upset.app/",target:"_blank",rel:"nofollow noopener noreferrer",children:"upset charts"}),". Isolated symbols convey that a set contains elements that are not shared with any other set. When two or more symbols are connected with a line, the line indicates that some elements are present in all the marked sets, but not in any of the unmarked sets."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["Note that ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"UpSetMemberships"})," does not draw a background grid. A grid can be added separately using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"UpSetGrid"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"with grid",args:{},component:_src__WEBPACK_IMPORTED_MODULE_3__.iC,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__._0],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"custom-symbols",children:"Custom symbols"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["The default set markers is a circle. That can be replaced by a custom symbol using prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"symbol"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"custom symbol",args:{symbol:_chsk_core__WEBPACK_IMPORTED_MODULE_2__.bK,symbolStyle:{strokeWidth:5}},component:_src__WEBPACK_IMPORTED_MODULE_3__.iC,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__._0],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["Symbols and lines can be styled using props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"symbolStyle"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"lineStyle"}),", respectively."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"custom styles",args:{lineStyle:{stroke:"#b33",strokeWidth:5},symbolStyle:{fill:"#b33"}},component:_src__WEBPACK_IMPORTED_MODULE_3__.iC,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_4__._0],children:Template.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);