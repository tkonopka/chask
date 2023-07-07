"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8422,6741],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/interactivity/SimpleDataComponent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SimpleDataComponent_stories});var react=__webpack_require__("./node_modules/react/index.js"),SimpleDataComponent=function SimpleDataComponent(_ref){var component=_ref.component,props=_ref.props;return(0,react.createElement)(component,props)};try{SimpleDataComponent.displayName="SimpleDataComponent",SimpleDataComponent.__docgenInfo={description:"",displayName:"SimpleDataComponent",props:{component:{defaultValue:null,description:"function to create a chart component",name:"component",required:!0,type:{name:"FC<ComponentProps>"}},props:{defaultValue:null,description:"props passed to the component",name:"props",required:!0,type:{name:"SvgElementProps & WithVariant & InteractivityProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/interactivity/SimpleDataComponent.tsx#SimpleDataComponent"]={docgenInfo:SimpleDataComponent.__docgenInfo,name:"SimpleDataComponent",path:"packages/core/src/interactivity/SimpleDataComponent.tsx#SimpleDataComponent"})}catch(__react_docgen_typescript_loader_error){}var _Example$parameters,_Example$parameters2,_Example$parameters2$,Circle=__webpack_require__("./packages/core/src/shapes/Circle.tsx"),decorators=__webpack_require__("./packages/core/stories/components/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SimpleDataComponent_stories={title:"Core/Components/Interactivity/SimpleDataComponent",component:SimpleDataComponent};var Example={name:"example",args:{component:Circle.C,data:{id:"identifier",value:"value"},props:{cx:50,cy:50,r:30,style:{fill:"#999999"}}},decorators:[decorators.OR]};Example.parameters=_extends({},Example.parameters,{docs:_extends({},null==(_Example$parameters=Example.parameters)?void 0:_Example$parameters.docs,{source:_extends({originalSource:"{\n  name: 'example',\n  args: {\n    component: Circle,\n    data: {\n      id: 'identifier',\n      value: 'value'\n    },\n    props: {\n      cx: 50,\n      cy: 50,\n      r: 30,\n      style: {\n        fill: '#999999'\n      }\n    }\n  },\n  decorators: [ChartViewDecorator]\n}"},null==(_Example$parameters2=Example.parameters)||null==(_Example$parameters2$=_Example$parameters2.docs)?void 0:_Example$parameters2$.source)})});var __namedExportsOrder=["Example"]},"./packages/core/src/shapes/Circle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Circle});var framer_motion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/themes/utils.ts"),_general__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","initial","animate","exit","cx","cy","r","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Circle=function Circle(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,initial=_ref.initial,animate=_ref.animate,exit=_ref.exit,cx=_ref.cx,cy=_ref.cy,r=_ref.r,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),config={cx,cy,r};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.circle,_extends({role:setRole&&"default"!==variant?variant:void 0,initial:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,initial),animate:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,animate),exit:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,exit),className:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.gj)(variant,className)},props))};Circle.displayName="Circle";try{Circle.displayName="Circle",Circle.__docgenInfo={description:"",displayName:"Circle",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/shapes/Circle.tsx#Circle"]={docgenInfo:Circle.__docgenInfo,name:"Circle",path:"packages/core/src/shapes/Circle.tsx#Circle"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/interactivity/SimpleDataComponent.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_SimpleDataComponent_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/interactivity/SimpleDataComponent.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"simpledatacomponent",children:"SimpleDataComponent"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_SimpleDataComponent_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"SimpleDataComponent"})," creates a new object / component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"SimpleDataComponent"})," is a trivial wrapper for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"createReactElement"}),".\nIts main use-case is to serve as a drop-in replacement for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DataComponent"}),".\nWhereas ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"DataComponent"})," binds handlers to take actions in response to mouse events, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"SimpleDataComponent"})," omits those book-keeping steps.\nThe simpler implementation offers a small performance boost in situations where event handling is not necessary."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_SimpleDataComponent_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"SimpleDataComponent"})," takes a prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"component"})," to specify a drawing function,\nand a prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"props"})," holding data passed to the drawing function."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_SimpleDataComponent_stories__WEBPACK_IMPORTED_MODULE_4__.Example}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The above example should display a simple circle.\nTo repeat the message above, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"SimpleDataComponent"})," only uses its ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"component"})," to\ncreate an element with the given props."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["(Note that the code preview may not display the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"component"})," prop.\nThat is an imperfection in the preview.\nThe prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"component"})," is required and should receive a function that creates a new React node.)"]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);