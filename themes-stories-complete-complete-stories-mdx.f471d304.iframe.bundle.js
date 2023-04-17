"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7803],{"./packages/themes/stories/complete/complete.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{dark:()=>dark,default:()=>__WEBPACK_DEFAULT_EXPORT__,empty:()=>empty});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_src_complete__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/themes/src/complete/index.ts"),_ThemeController__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/themes/stories/ThemeController.tsx"),_ThemeScatterChart__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/themes/stories/complete/ThemeScatterChart.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const dark=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ThemeController__WEBPACK_IMPORTED_MODULE_3__.u,{chart:_ThemeScatterChart__WEBPACK_IMPORTED_MODULE_4__.S,chartId:"darkTheme",themes:{darkTheme:_src_complete__WEBPACK_IMPORTED_MODULE_2__.$_,defaultTheme:_src_complete__WEBPACK_IMPORTED_MODULE_2__.uH},baseTheme:!0});dark.storyName="dark",dark.parameters={storySource:{source:'<ThemeController chart={ThemeScatterChart} chartId={"darkTheme"} themes={{\n  darkTheme,\n  defaultTheme\n}} baseTheme={true} />'}};const empty=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ThemeController__WEBPACK_IMPORTED_MODULE_3__.u,{chart:_ThemeScatterChart__WEBPACK_IMPORTED_MODULE_4__.S,chartId:"emptyTheme",themes:{emptyTheme:_src_complete__WEBPACK_IMPORTED_MODULE_2__.GC,defaultTheme:_src_complete__WEBPACK_IMPORTED_MODULE_2__.uH},baseTheme:!0});empty.storyName="empty",empty.parameters={storySource:{source:'<ThemeController chart={ThemeScatterChart} chartId={"emptyTheme"} themes={{\n  emptyTheme,\n  defaultTheme\n}} baseTheme={true} />'}};const componentMeta={title:"Addons/Themes/Complete themes",tags:["stories-mdx"],includeStories:["dark","empty"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Addons/Themes/Complete themes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1,{id:"complete-themes",children:"Complete Themes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["Complete themes are objects that satisfy typescript type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"CompleteThemeSpec"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"@chsk/core"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"darktheme",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"darkTheme"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"darkTheme"})," defines a theme suitable for use with dark backgrounds.\nApart from reversing dark and light colors, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"darkTheme"})," is otherwise very similar to the default theme."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"dark",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ThemeController__WEBPACK_IMPORTED_MODULE_3__.u,{chart:_ThemeScatterChart__WEBPACK_IMPORTED_MODULE_4__.S,chartId:"darkTheme",themes:{darkTheme:_src_complete__WEBPACK_IMPORTED_MODULE_2__.$_,defaultTheme:_src_complete__WEBPACK_IMPORTED_MODULE_2__.uH},baseTheme:!0})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["Note that if a chart specifies colors using inline styles, those styles will not be affected by the theme.\nIn the chart above, for example, the regression line specifies a dark-gray color with a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"stroke"})," setting passed to a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"style"})," prop,\nand that color is not adjusted via the theme, becoming almost imperceptible on a dark background.\nThis detail reveals that toggling themes may not automatically give perfect outcomes,\nand some charts may require manual adjustment."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"emptytheme",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"emptyTheme"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"emptyTheme"})," is an object that satisfies the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"CompleteThemeSpec"})," interface but does not hold any data."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"empty",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ThemeController__WEBPACK_IMPORTED_MODULE_3__.u,{chart:_ThemeScatterChart__WEBPACK_IMPORTED_MODULE_4__.S,chartId:"emptyTheme",themes:{emptyTheme:_src_complete__WEBPACK_IMPORTED_MODULE_2__.GC,defaultTheme:_src_complete__WEBPACK_IMPORTED_MODULE_2__.uH},baseTheme:!0})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["As evidenced in the example above, using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"emptyTheme"})," on its own is likely to produce very poor outcomes.\nHowever, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"emptyTheme"})," is valuable because it is a bare-bones structure that can be provided to prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"baseTheme"}),"\nin the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Chart"})," component, upon which it is then possible to build a new theme from scratch."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components.p,{children:["To understand why a bare-bones theme is valuable, recall that the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"Chart"})," component uses the chart theme to\ngenerate the content of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"<style>"})," tag in an svg graphic.\nThe default theme provides styles for several commonly-used elements such as text in titles, legends, and tooltips.\nAltogether, those definitions add around 3kb to the size of each chart.\nIf a particular chart type does not require many of those styles, it may be worthwhile to exclude them.\nUnfortunately, removing styles from the default theme is not straightforward\n(it has to do with how nested objects are merged in lodash/javascript, and with typescript types).\nThus, to achieve a smaller footprint for the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.code,{children:"<style>"})," tag, it is necessary to start from a bare theme and then\nadd the elements required for a given application."]})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);