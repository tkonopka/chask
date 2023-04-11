"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3413],{"./packages/core/stories/components/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OR:()=>ChartViewDecorator,VK:()=>ChartBandViewDecorator,ee:()=>ChartDecorator,ke:()=>viewSeriesIndexesKeys,z5:()=>DivDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),viewSeriesIndexesKeys={seriesIndexes:{X:0,Y:1},keys:["alpha","beta","gamma"]},DivDecorator=function DivDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:Story()})};DivDecorator.displayName="DivDecorator";var ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tg,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartViewDecorator=function ChartViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tg,{variant:"inner"}),Story()]})})};ChartViewDecorator.displayName="ChartViewDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL,{size:[400,300],padding:[60,40,60,80],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7,{scaleX:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},scaleY:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tg,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.RD,{variant:"left"})]})})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";try{DivDecorator.displayName="DivDecorator",DivDecorator.__docgenInfo={description:"",displayName:"DivDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#DivDecorator"]={docgenInfo:DivDecorator.__docgenInfo,name:"DivDecorator",path:"packages/core/stories/components/decorators.tsx#DivDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/core/stories/components/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartViewDecorator.displayName="ChartViewDecorator",ChartViewDecorator.__docgenInfo={description:"",displayName:"ChartViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartViewDecorator"]={docgenInfo:ChartViewDecorator.__docgenInfo,name:"ChartViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/shapes/Rectangle.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,centered:()=>centered,default:()=>__WEBPACK_DEFAULT_EXPORT__,roundedCorners:()=>roundedCorners});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/index.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/stories/components/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.Ae,{...args});const centered=Template.bind({});centered.storyName="centered",centered.args={style:{fill:"#dd9999"},x:0,y:0,width:60,height:30,center:!0},centered.parameters={storySource:{source:"args => <Rectangle {...args} />"}},centered.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.ee];const roundedCorners=Template.bind({});roundedCorners.storyName="rounded corners",roundedCorners.args={style:{fill:"#dd9999",strokeWidth:"1px",stroke:"#aa7777"},x:30,y:20,width:240,height:90,rx:30,ry:20},roundedCorners.parameters={storySource:{source:"args => <Rectangle {...args} />"}},roundedCorners.decorators=[_decorators__WEBPACK_IMPORTED_MODULE_3__.ee];const componentMeta={title:"Core/Components/Shapes/Rectangle",tags:["stories-mdx"],includeStories:["centered","roundedCorners"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"rectangle",children:"Rectangle"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Core/Components/Shapes/Rectangle"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"Rectangle"})," displays a rectangle shape."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_src__WEBPACK_IMPORTED_MODULE_2__.Ae}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"centering",children:"Centering"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["By default, props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"x"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"y"})," specify the coordinates for the top-left corner of the rectangle.\nTo use those coordinates as the center of the rectangle instead, set the prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"center"})," to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"centered",args:{style:{fill:"#dd9999"},x:0,y:0,width:60,height:30,center:!0},component:_src__WEBPACK_IMPORTED_MODULE_2__.Ae,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.ee],children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"rounded-corners",children:"Rounded corners"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Rectangle corners can be rounded by setting props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"rx"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"ry"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"rounded corners",args:{style:{fill:"#dd9999",strokeWidth:"1px",stroke:"#aa7777"},x:30,y:20,width:240,height:90,rx:30,ry:20},component:_src__WEBPACK_IMPORTED_MODULE_2__.Ae,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.ee],children:Template.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);