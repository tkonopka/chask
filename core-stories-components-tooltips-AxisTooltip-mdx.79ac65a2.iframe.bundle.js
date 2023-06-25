"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[6909,9615],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/tooltips/AxisTooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bottom:()=>Bottom,CustomPlacement:()=>CustomPlacement,Left:()=>Left,Right:()=>Right,Top:()=>Top,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AxisTooltip_stories});var hooks=__webpack_require__("./packages/core/src/views/hooks.tsx"),themes_hooks=__webpack_require__("./packages/core/src/themes/hooks.tsx"),contexts=__webpack_require__("./packages/core/src/general/contexts.tsx"),constants=__webpack_require__("./packages/core/src/general/constants.ts"),utils=__webpack_require__("./packages/core/src/legends/utils.ts"),defaults=__webpack_require__("./packages/core/src/tooltips/defaults.ts"),tooltips_contexts=__webpack_require__("./packages/core/src/tooltips/contexts.tsx"),tooltips_utils=__webpack_require__("./packages/core/src/tooltips/utils.ts"),BaseTooltip=__webpack_require__("./packages/core/src/tooltips/BaseTooltip.tsx"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var UnthemedAxisTooltip=function UnthemedAxisTooltip(_ref){var _tooltip$data,_title,_tooltip$x,_tooltip$y,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"right":_ref$variant,_ref$offset=_ref.offset,offset=void 0===_ref$offset?defaults.WW.offset:_ref$offset,size=_ref.size,_ref$anchor=_ref.anchor,anchor=void 0===_ref$anchor?defaults.WW.anchor:_ref$anchor,_ref$padding=_ref.padding,padding=void 0===_ref$padding?defaults.WW.padding:_ref$padding,_ref$rx=_ref.rx,rx=void 0===_ref$rx?defaults.WW.rx:_ref$rx,_ref$ry=_ref.ry,ry=void 0===_ref$ry?defaults.WW.ry:_ref$ry,_ref$itemSize=_ref.itemSize,itemSize=void 0===_ref$itemSize?defaults.WW.itemSize:_ref$itemSize,_ref$itemPadding=_ref.itemPadding,itemPadding=void 0===_ref$itemPadding?defaults.WW.itemPadding:_ref$itemPadding,_ref$horizontal=_ref.horizontal,horizontal=void 0===_ref$horizontal?defaults.WW.horizontal:_ref$horizontal,_ref$firstOffset=_ref.firstOffset,firstOffset=void 0===_ref$firstOffset?defaults.WW.firstOffset:_ref$firstOffset,title=_ref.title,titleStyle=_ref.titleStyle,titleFormat=_ref.titleFormat,_ref$r=_ref.r,r=void 0===_ref$r?defaults.WW.r:_ref$r,symbol=_ref.symbol,symbolStyle=_ref.symbolStyle,labelStyle=_ref.labelStyle,_ref$labelDistance=_ref.labelDistance,labelDistance=void 0===_ref$labelDistance?defaults.WW.labelDistance:_ref$labelDistance,_ref$labelFormat=_ref.labelFormat,labelFormat=void 0===_ref$labelFormat?tooltips_utils.sb:_ref$labelFormat,className=_ref.className,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,tooltip=(0,tooltips_contexts.lL)().data,container=(0,contexts.Bs)(),data=null!=(_tooltip$data=tooltip.data)?_tooltip$data:[],n=null===labelFormat?0:data.length,hasTitle=""!==(title=null!=(_title=title)?_title:titleFormat?titleFormat(tooltip):tooltip.title)&&void 0!==tooltip,tooltipSize=(0,react.useMemo)((function(){return null!=size?size:(0,utils.CJ)(padding,itemSize,n,firstOffset,hasTitle,!1)}),[size,padding,itemSize,n,firstOffset,hasTitle]),origin=(0,hooks.u)({position:offset,positionUnits:"absolute",size:tooltipSize,sizeUnits:"absolute",anchor}).origin,tooltipPosition=[origin[constants.X]+(null!=(_tooltip$x=tooltip.x)?_tooltip$x:0),origin[constants.Y]+(null!=(_tooltip$y=tooltip.y)?_tooltip$y:0)];return"top"===variant?tooltipPosition[constants.Y]=origin[constants.Y]:"right"===variant?tooltipPosition[constants.X]=origin[constants.X]+container.size[constants.X]:"bottom"===variant?tooltipPosition[constants.Y]=origin[constants.Y]+container.size[constants.Y]:"left"===variant&&(tooltipPosition[constants.X]=origin[constants.X]),(0,jsx_runtime.jsx)(BaseTooltip.N,{variant,position:tooltipPosition,size:tooltipSize,padding,data,title,rx,ry,horizontal,firstOffset,itemSize,itemPadding,titleStyle,labelFormat,r,symbol,symbolStyle,labelStyle,labelDistance,className,style,setRole,children})};UnthemedAxisTooltip.displayName="UnthemedAxisTooltip";var AxisTooltip=function AxisTooltip(props){return(0,jsx_runtime.jsx)(UnthemedAxisTooltip,_extends({},(0,themes_hooks.m)(props,"AxisTooltip")))};AxisTooltip.displayName="AxisTooltip";try{AxisTooltip.displayName="AxisTooltip",AxisTooltip.__docgenInfo={description:"",displayName:"AxisTooltip",props:{variant:{defaultValue:{value:"right"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"bottom"'},{value:'"top"'}]}},symbol:{defaultValue:null,description:"symbol function",name:"symbol",required:!1,type:{name:"FC<SymbolProps>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},symbolStyle:{defaultValue:null,description:"style for symbol",name:"symbolStyle",required:!1,type:{name:"Partial<CSSProperties>"}},offset:{defaultValue:{value:"defaultTooltipProps.offset"},description:"offset/translation applied after anchoring, absolute units",name:"offset",required:!1,type:{name:"NumericPositionSpec"}},anchor:{defaultValue:{value:"defaultTooltipProps.anchor"},description:"container anchor point",name:"anchor",required:!1,type:{name:"AnchorSpec"}},r:{defaultValue:{value:"defaultTooltipProps.r"},description:"size of symbol",name:"r",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"size",name:"size",required:!1,type:{name:"NumericPositionSpec"}},padding:{defaultValue:{value:"defaultTooltipProps.padding"},description:"padding (absolute values) *",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},horizontal:{defaultValue:{value:"defaultTooltipProps.horizontal"},description:"arrange the items horizontally",name:"horizontal",required:!1,type:{name:"boolean"}},rx:{defaultValue:{value:"defaultTooltipProps.rx"},description:"horizontal corner radius",name:"rx",required:!1,type:{name:"number"}},ry:{defaultValue:{value:"defaultTooltipProps.ry"},description:"vertical corner radius",name:"ry",required:!1,type:{name:"number"}},itemSize:{defaultValue:{value:"defaultTooltipProps.itemSize"},description:"size of a single item",name:"itemSize",required:!1,type:{name:"SizeSpec"}},itemPadding:{defaultValue:{value:"defaultTooltipProps.itemPadding"},description:"padding for a single item",name:"itemPadding",required:!1,type:{name:"FourSideSizeSpec"}},title:{defaultValue:null,description:"list title",name:"title",required:!1,type:{name:"ReactNode"}},titleStyle:{defaultValue:null,description:"style for list title",name:"titleStyle",required:!1,type:{name:"Partial<CSSProperties>"}},firstOffset:{defaultValue:{value:"defaultTooltipProps.firstOffset"},description:"offset/translate first non-title item relative to default position",name:"firstOffset",required:!1,type:{name:"NumericPositionSpec"}},labelStyle:{defaultValue:null,description:"style for text label",name:"labelStyle",required:!1,type:{name:"Partial<CSSProperties>"}},labelDistance:{defaultValue:{value:"defaultTooltipProps.labelDistance"},description:"distance from symbol to label",name:"labelDistance",required:!1,type:{name:"number"}},itemAlign:{defaultValue:null,description:"alignment within the item bounding box",name:"itemAlign",required:!1,type:{name:"AlignSpec"}},itemStyle:{defaultValue:null,description:"style for list items",name:"itemStyle",required:!1,type:{name:"Partial<CSSProperties>"}},titleFormat:{defaultValue:null,description:"construction of title",name:"titleFormat",required:!1,type:{name:"((d: TooltipData) => ReactNode) | null"}},labelFormat:{defaultValue:{value:"<DataSpec extends WithId & Record<string, unknown>>(\n    x: DataSpec\n): string => {\n    if ('label' in x) return String(x.label)\n    const result = x as DataSpec & { label?: string }\n    if ('key' in x && 'data' in x) {\n        return String(result['key']) + ': ' + String(result['data'])\n    }\n    if ('id' in x && 'data' in x) {\n        return String(result['id']) + ': ' + String(result['data'])\n    }\n    if ('key' in x) {\n        return String(result['key'])\n    }\n    return result.id\n}"},description:"construction of label",name:"labelFormat",required:!1,type:{name:"((d: TooltipDataItem) => ReactNode) | null"}},maxOverhang:{defaultValue:null,description:"extent tooltip can exit its reference region",name:"maxOverhang",required:!1,type:{name:"FourSideSizeSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/tooltips/AxisTooltip.tsx#AxisTooltip"]={docgenInfo:AxisTooltip.__docgenInfo,name:"AxisTooltip",path:"packages/core/src/tooltips/AxisTooltip.tsx#AxisTooltip"})}catch(__react_docgen_typescript_loader_error){}var _Top$parameters,_Top$parameters2,_Top$parameters2$docs,_Right$parameters,_Right$parameters2,_Right$parameters2$do,_Bottom$parameters,_Bottom$parameters2,_Bottom$parameters2$d,_Left$parameters,_Left$parameters2,_Left$parameters2$doc,_CustomPlacement$para,_CustomPlacement$para2,_CustomPlacement$para3,Surface=__webpack_require__("./packages/core/src/views/Surface.tsx"),decorators=__webpack_require__("./packages/core/stories/components/tooltips/decorators.tsx");function AxisTooltip_stories_extends(){return AxisTooltip_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},AxisTooltip_stories_extends.apply(this,arguments)}const AxisTooltip_stories={title:"Core/Components/Tooltips/AxisTooltip",component:AxisTooltip};var Top={name:"top",args:{variant:"top",size:[20,20],padding:[0,0,0,0],children:(0,jsx_runtime.jsx)(Surface.T,{style:{fill:"#aabbee"}})},decorators:[decorators.mh]},Right={name:"right",args:{variant:"right",size:[20,20],padding:[0,0,0,0],children:(0,jsx_runtime.jsx)(Surface.T,{style:{fill:"#aabbee"}})},decorators:[decorators.mh]},Bottom={name:"bottom",args:{variant:"bottom",size:[20,20],padding:[0,0,0,0],children:(0,jsx_runtime.jsx)(Surface.T,{style:{fill:"#aabbee"}})},decorators:[decorators.mh]},Left={name:"left",args:{variant:"left",size:[20,20],padding:[0,0,0,0],children:(0,jsx_runtime.jsx)(Surface.T,{style:{fill:"#aabbee"}})},decorators:[decorators.mh]},CustomPlacement={name:"custom placement",args:{variant:"top",offset:[0,0],anchor:[.5,.5],size:[20,20],padding:[0,0,0,0],children:(0,jsx_runtime.jsx)(Surface.T,{style:{fill:"#aabbee"}})},decorators:[decorators.mh]};Top.parameters=AxisTooltip_stories_extends({},Top.parameters,{docs:AxisTooltip_stories_extends({},null==(_Top$parameters=Top.parameters)?void 0:_Top$parameters.docs,{source:AxisTooltip_stories_extends({originalSource:"{\n  name: 'top',\n  args: {\n    variant: 'top',\n    size: [20, 20],\n    padding: [0, 0, 0, 0],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}"},null==(_Top$parameters2=Top.parameters)||null==(_Top$parameters2$docs=_Top$parameters2.docs)?void 0:_Top$parameters2$docs.source)})}),Right.parameters=AxisTooltip_stories_extends({},Right.parameters,{docs:AxisTooltip_stories_extends({},null==(_Right$parameters=Right.parameters)?void 0:_Right$parameters.docs,{source:AxisTooltip_stories_extends({originalSource:"{\n  name: 'right',\n  args: {\n    variant: 'right',\n    size: [20, 20],\n    padding: [0, 0, 0, 0],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}"},null==(_Right$parameters2=Right.parameters)||null==(_Right$parameters2$do=_Right$parameters2.docs)?void 0:_Right$parameters2$do.source)})}),Bottom.parameters=AxisTooltip_stories_extends({},Bottom.parameters,{docs:AxisTooltip_stories_extends({},null==(_Bottom$parameters=Bottom.parameters)?void 0:_Bottom$parameters.docs,{source:AxisTooltip_stories_extends({originalSource:"{\n  name: 'bottom',\n  args: {\n    variant: 'bottom',\n    size: [20, 20],\n    padding: [0, 0, 0, 0],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}"},null==(_Bottom$parameters2=Bottom.parameters)||null==(_Bottom$parameters2$d=_Bottom$parameters2.docs)?void 0:_Bottom$parameters2$d.source)})}),Left.parameters=AxisTooltip_stories_extends({},Left.parameters,{docs:AxisTooltip_stories_extends({},null==(_Left$parameters=Left.parameters)?void 0:_Left$parameters.docs,{source:AxisTooltip_stories_extends({originalSource:"{\n  name: 'left',\n  args: {\n    variant: 'left',\n    size: [20, 20],\n    padding: [0, 0, 0, 0],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}"},null==(_Left$parameters2=Left.parameters)||null==(_Left$parameters2$doc=_Left$parameters2.docs)?void 0:_Left$parameters2$doc.source)})}),CustomPlacement.parameters=AxisTooltip_stories_extends({},CustomPlacement.parameters,{docs:AxisTooltip_stories_extends({},null==(_CustomPlacement$para=CustomPlacement.parameters)?void 0:_CustomPlacement$para.docs,{source:AxisTooltip_stories_extends({originalSource:"{\n  name: 'custom placement',\n  args: {\n    variant: 'top',\n    offset: [0, 0],\n    anchor: [0.5, 0.5],\n    size: [20, 20],\n    padding: [0, 0, 0, 0],\n    children: <Surface style={{\n      fill: '#aabbee'\n    }} />\n  },\n  decorators: [ChartForDetectorTooltipDecorator]\n}"},null==(_CustomPlacement$para2=CustomPlacement.parameters)||null==(_CustomPlacement$para3=_CustomPlacement$para2.docs)?void 0:_CustomPlacement$para3.source)})});var __namedExportsOrder=["Top","Right","Bottom","Left","CustomPlacement"]},"./packages/core/stories/components/tooltips/AxisTooltip.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_AxisTooltip_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/tooltips/AxisTooltip.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"axistooltip",children:"AxisTooltip"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_AxisTooltip_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AxisTooltip"})," is a container component for tooltips."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_AxisTooltip_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AxisTooltip"})," is similar to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," in that it displays information intermittently\nusing the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"useTooltip"})," hook."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variant",children:"Variant"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," displays a tooltip box at one of the four edges of a view.\n(Hover the mouse on the examples below to activate the tooltip.)"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_AxisTooltip_stories__WEBPACK_IMPORTED_MODULE_4__.Top}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_AxisTooltip_stories__WEBPACK_IMPORTED_MODULE_4__.Right}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_AxisTooltip_stories__WEBPACK_IMPORTED_MODULE_4__.Bottom}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_AxisTooltip_stories__WEBPACK_IMPORTED_MODULE_4__.Left}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"position-and-anchor",children:"Position and anchor"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AxisTooltip"})," accepts props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"offset"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"anchor"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_AxisTooltip_stories__WEBPACK_IMPORTED_MODULE_4__.CustomPlacement}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"other-props",children:"Other props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"AxisTooltip"})," shares many props with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"}),". See documentation for ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Tooltip"})," for further details."]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);