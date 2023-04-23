"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[101,2113],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/band/stories/bands/BandSurface.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Band:()=>Band,Interactive:()=>Interactive,PointerEvents:()=>PointerEvents,Step:()=>Step,Subset:()=>Subset,Tooltip:()=>Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BandSurface_stories});var src=__webpack_require__("./packages/band/src/index.tsx"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),dataGroups=__webpack_require__("./packages/band/stories/dataGroups.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var barProps={variant:"grouped",data:dataGroups,keys:["x","y","z"],scaleIndex:{variant:"band",domain:["alpha","beta","gamma"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]},horizontal:!0},ChartSurfaceDecorator=function ChartSurfaceDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[60,60,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.$Q,_extends({},barProps,{children:[Story(),(0,jsx_runtime.jsx)(src.Ll,{}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"top",label:"Values (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"})]}))})};ChartSurfaceDecorator.displayName="ChartSurfaceDecorator";var _Step$parameters,_Step$parameters2,_Step$parameters2$doc,_Band$parameters,_Band$parameters2,_Band$parameters2$doc,_Subset$parameters,_Subset$parameters2,_Subset$parameters2$d,_Interactive$paramete,_Interactive$paramete2,_Interactive$paramete3,_PointerEvents$parame,_PointerEvents$parame2,_PointerEvents$parame3,_Tooltip$parameters,_Tooltip$parameters2,_Tooltip$parameters2$,ChartSurfaceNoPointerEventsDecorator=function ChartSurfaceNoPointerEventsDecorator(Story){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[60,60,60,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(src.$Q,_extends({},barProps,{children:[Story(),(0,jsx_runtime.jsx)(src.Ll,{style:{pointerEvents:"none"}}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"top",label:"Values (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"})]}))})};ChartSurfaceNoPointerEventsDecorator.displayName="ChartSurfaceNoPointerEventsDecorator";try{ChartSurfaceDecorator.displayName="ChartSurfaceDecorator",ChartSurfaceDecorator.__docgenInfo={description:"",displayName:"ChartSurfaceDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bands/decorators.tsx#ChartSurfaceDecorator"]={docgenInfo:ChartSurfaceDecorator.__docgenInfo,name:"ChartSurfaceDecorator",path:"packages/band/stories/bands/decorators.tsx#ChartSurfaceDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartSurfaceNoPointerEventsDecorator.displayName="ChartSurfaceNoPointerEventsDecorator",ChartSurfaceNoPointerEventsDecorator.__docgenInfo={description:"",displayName:"ChartSurfaceNoPointerEventsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bands/decorators.tsx#ChartSurfaceNoPointerEventsDecorator"]={docgenInfo:ChartSurfaceNoPointerEventsDecorator.__docgenInfo,name:"ChartSurfaceNoPointerEventsDecorator",path:"packages/band/stories/bands/decorators.tsx#ChartSurfaceNoPointerEventsDecorator"})}catch(__react_docgen_typescript_loader_error){}function BandSurface_stories_extends(){return BandSurface_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},BandSurface_stories_extends.apply(this,arguments)}const BandSurface_stories={title:"Addons/Band/Bands/BandSurface",component:src.kT};var Step={name:"step",args:{variant:"step",style:{fill:"#eeeeee",strokeWidth:1,stroke:"#222222"}},decorators:[ChartSurfaceDecorator]},Band={name:"band",args:{variant:"band",style:{fill:"#eeeeee",strokeWidth:1,stroke:"#222222"}},decorators:[ChartSurfaceDecorator]},Subset={name:"subset",args:{ids:["beta"],style:{fill:"#eeeeee"}},decorators:[ChartSurfaceDecorator]},Interactive={name:"interactive",args:{interactive:!0,style:{fill:"#eeeeee"}},decorators:[ChartSurfaceDecorator]},PointerEvents={name:"pointer events",args:{interactive:!0,style:{fill:"#eeeeee"}},decorators:[ChartSurfaceNoPointerEventsDecorator]},Tooltip={name:"tooltip",args:{interactive:!1,tooltip:!0,style:{fill:"#eeeeee"}},decorators:[ChartSurfaceDecorator]};Step.parameters=BandSurface_stories_extends({},Step.parameters,{docs:BandSurface_stories_extends({},null==(_Step$parameters=Step.parameters)?void 0:_Step$parameters.docs,{source:BandSurface_stories_extends({originalSource:"{\n  name: 'step',\n  args: {\n    variant: 'step',\n    style: {\n      fill: '#eeeeee',\n      strokeWidth: 1,\n      stroke: '#222222'\n    }\n  },\n  decorators: [ChartSurfaceDecorator]\n}"},null==(_Step$parameters2=Step.parameters)||null==(_Step$parameters2$doc=_Step$parameters2.docs)?void 0:_Step$parameters2$doc.source)})}),Band.parameters=BandSurface_stories_extends({},Band.parameters,{docs:BandSurface_stories_extends({},null==(_Band$parameters=Band.parameters)?void 0:_Band$parameters.docs,{source:BandSurface_stories_extends({originalSource:"{\n  name: 'band',\n  args: {\n    variant: 'band',\n    style: {\n      fill: '#eeeeee',\n      strokeWidth: 1,\n      stroke: '#222222'\n    }\n  },\n  decorators: [ChartSurfaceDecorator]\n}"},null==(_Band$parameters2=Band.parameters)||null==(_Band$parameters2$doc=_Band$parameters2.docs)?void 0:_Band$parameters2$doc.source)})}),Subset.parameters=BandSurface_stories_extends({},Subset.parameters,{docs:BandSurface_stories_extends({},null==(_Subset$parameters=Subset.parameters)?void 0:_Subset$parameters.docs,{source:BandSurface_stories_extends({originalSource:"{\n  name: 'subset',\n  args: {\n    ids: ['beta'],\n    style: {\n      fill: '#eeeeee'\n    }\n  },\n  decorators: [ChartSurfaceDecorator]\n}"},null==(_Subset$parameters2=Subset.parameters)||null==(_Subset$parameters2$d=_Subset$parameters2.docs)?void 0:_Subset$parameters2$d.source)})}),Interactive.parameters=BandSurface_stories_extends({},Interactive.parameters,{docs:BandSurface_stories_extends({},null==(_Interactive$paramete=Interactive.parameters)?void 0:_Interactive$paramete.docs,{source:BandSurface_stories_extends({originalSource:"{\n  name: 'interactive',\n  args: {\n    interactive: true,\n    style: {\n      fill: '#eeeeee'\n    }\n  },\n  decorators: [ChartSurfaceDecorator]\n}"},null==(_Interactive$paramete2=Interactive.parameters)||null==(_Interactive$paramete3=_Interactive$paramete2.docs)?void 0:_Interactive$paramete3.source)})}),PointerEvents.parameters=BandSurface_stories_extends({},PointerEvents.parameters,{docs:BandSurface_stories_extends({},null==(_PointerEvents$parame=PointerEvents.parameters)?void 0:_PointerEvents$parame.docs,{source:BandSurface_stories_extends({originalSource:"{\n  name: 'pointer events',\n  args: {\n    interactive: true,\n    style: {\n      fill: '#eeeeee'\n    }\n  },\n  decorators: [ChartSurfaceNoPointerEventsDecorator]\n}"},null==(_PointerEvents$parame2=PointerEvents.parameters)||null==(_PointerEvents$parame3=_PointerEvents$parame2.docs)?void 0:_PointerEvents$parame3.source)})}),Tooltip.parameters=BandSurface_stories_extends({},Tooltip.parameters,{docs:BandSurface_stories_extends({},null==(_Tooltip$parameters=Tooltip.parameters)?void 0:_Tooltip$parameters.docs,{source:BandSurface_stories_extends({originalSource:"{\n  name: 'tooltip',\n  args: {\n    interactive: false,\n    tooltip: true,\n    style: {\n      fill: '#eeeeee'\n    }\n  },\n  decorators: [ChartSurfaceDecorator]\n}"},null==(_Tooltip$parameters2=Tooltip.parameters)||null==(_Tooltip$parameters2$=_Tooltip$parameters2.docs)?void 0:_Tooltip$parameters2$.source)})});var __namedExportsOrder=["Step","Band","Subset","Interactive","PointerEvents","Tooltip"]},"./packages/band/stories/bands/BandSurface.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_BandSurface_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/bands/BandSurface.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"bandsurface",children:"BandSurface"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_BandSurface_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BandSurface"})," creates rectangles that highlight bands."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_BandSurface_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variant",children:"Variant"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," clarifies the definition of a band surface.\nVariant 'step' creates a surface that includes the content of a band and also covers padding our the content.\nVariant 'band' omits the padding."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BandSurface_stories__WEBPACK_IMPORTED_MODULE_2__.Step}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BandSurface_stories__WEBPACK_IMPORTED_MODULE_2__.Band}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data-subsets",children:"Data subsets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Use prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ids"})," to specify the bands to highlight."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BandSurface_stories__WEBPACK_IMPORTED_MODULE_2__.Subset}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"interactivity",children:"Interactivity"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Flag ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"interactive"})," activates interactivity."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BandSurface_stories__WEBPACK_IMPORTED_MODULE_2__.Interactive}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Above, hovering on the band makes the band surface appear, but moving the mouse onto the bars\nwithin a band makes the interactive band surface disappear.\nOne way to maintain the surface while hovering on the bars is to include a style ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"pointer-events: 'none'"}),".\nThis style can be set inline or via themes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BandSurface_stories__WEBPACK_IMPORTED_MODULE_2__.PointerEvents}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"tooltip",children:"Tooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Another way to activate the surfaces is with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tooltip"}),".\nSetting this flag indicates that a surface should become visible based on data from the tooltip context."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_BandSurface_stories__WEBPACK_IMPORTED_MODULE_2__.Tooltip}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Note that setting ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tooltip"})," makes the surface appear when the mouse hovers on the bars, and not\non the empty space. To activate both behaviors, set both ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"tooltip"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"interactive"}),"."]})]})}}},"./packages/band/stories/dataGroups.json":module=>{module.exports=JSON.parse('[{"id":"alpha","label":"alpha","x":55,"y":35,"z":10},{"id":"beta","label":"beta","x":35,"y":25,"z":15},{"id":"gamma","label":"gamma","x":15,"y":25,"z":35}]')}}]);