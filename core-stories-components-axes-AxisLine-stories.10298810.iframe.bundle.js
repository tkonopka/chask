"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9866],{"./packages/core/stories/components/axes/AxisLine.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Visibility:()=>Visibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Visibility$parameter,_Visibility$parameter2,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/axes/AxisLine.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/stories/components/axes/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Axes/AxisLine",component:_src__WEBPACK_IMPORTED_MODULE_0__.$};var Visibility={name:"visibility",args:{variant:"bottom",style:{strokeWidth:2}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_1__.j]};Visibility.parameters=_extends({},Visibility.parameters,{docs:_extends({},null==(_Visibility$parameter=Visibility.parameters)?void 0:_Visibility$parameter.docs,{source:_extends({originalSource:"{\n  name: 'visibility',\n  args: {\n    variant: 'bottom',\n    style: {\n      strokeWidth: 2\n    }\n  },\n  decorators: [ChartBottomAxisDecorator]\n}"},null==(_Visibility$parameter2=Visibility.parameters)||null==(_Visibility$parameter2=_Visibility$parameter2.docs)?void 0:_Visibility$parameter2.source)})});var __namedExportsOrder=["Visibility"]},"./packages/core/src/axes/Axis.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>Axis});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_general__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/general/contexts.tsx"),_general__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/general/dimensions.tsx"),_AxisLine__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/core/src/axes/AxisLine.tsx"),_AxisLabel__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/core/src/axes/AxisLabel.tsx"),_AxisTicks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/core/src/axes/AxisTicks.tsx"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/core/src/axes/utils.ts"),_themes__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/core/src/themes/hooks.tsx"),_defaults__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/axes/defaults.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var UnthemedAxis=function UnthemedAxis(_ref){var variant=_ref.variant,label=_ref.label,_ref$ticks=_ref.ticks,ticks=void 0===_ref$ticks?_defaults__WEBPACK_IMPORTED_MODULE_2__.WG.ticks:_ref$ticks,_ref$distance=_ref.distance,distance=void 0===_ref$distance?_defaults__WEBPACK_IMPORTED_MODULE_2__.WG.distance:_ref$distance,className=_ref.className,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,size=(0,_general__WEBPACK_IMPORTED_MODULE_3__.Bs)().size;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{role:setRole?"axis":void 0,transform:(0,_general__WEBPACK_IMPORTED_MODULE_4__.R6)((0,_utils__WEBPACK_IMPORTED_MODULE_5__.R)(variant,size,distance)),className,style,children:children?react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,(function(child){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child))return child;var newChild=Object.create(child);return Object.defineProperty(newChild,"props",{value:Object.create(child.props),writable:!0}),newChild.props=_extends({variant},child.props),newChild})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_AxisTicks__WEBPACK_IMPORTED_MODULE_6__.y,{variant,ticks},0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_AxisLine__WEBPACK_IMPORTED_MODULE_7__.$,{style,variant},1),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_AxisLabel__WEBPACK_IMPORTED_MODULE_8__.k,{variant,children:label},2)]})})};UnthemedAxis.displayName="UnthemedAxis";var Axis=function Axis(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(UnthemedAxis,_extends({},(0,_themes__WEBPACK_IMPORTED_MODULE_9__.m)(props,"Axis")))};Axis.displayName="Axis";try{Axis.displayName="Axis",Axis.__docgenInfo={description:"",displayName:"Axis",props:{variant:{defaultValue:null,description:"type of axis",name:"variant",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'}]}},ticks:{defaultValue:{value:"defaultAxisProps.ticks"},description:"specification for tick positions",name:"ticks",required:!1,type:{name:"TickType"}},label:{defaultValue:null,description:"text label for axis",name:"label",required:!1,type:{name:"string"}},distance:{defaultValue:{value:"defaultAxisProps.distance"},description:"distance from view boundary",name:"distance",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"components rendered within the axis frame",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/axes/Axis.tsx#Axis"]={docgenInfo:Axis.__docgenInfo,name:"Axis",path:"packages/core/src/axes/Axis.tsx#Axis"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/src/axes/AxisLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>AxisLabel});var _general__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/contexts.tsx"),_general__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/general/constants.ts"),_general__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/core/src/general/utils.ts"),_typography__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/core/src/typography/Typography.tsx"),_themes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/core/src/themes/hooks.tsx"),_defaults__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/axes/defaults.ts"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/axes/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var UnthemedAxisLabel=function UnthemedAxisLabel(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"top":_ref$variant,_ref$distance=_ref.distance,distance=void 0===_ref$distance?_defaults__WEBPACK_IMPORTED_MODULE_1__.tx.distance:_ref$distance,_ref$offset=_ref.offset,offset=void 0===_ref$offset?_defaults__WEBPACK_IMPORTED_MODULE_1__.tx.offset:_ref$offset,_ref$align=_ref.align,align=void 0===_ref$align?_defaults__WEBPACK_IMPORTED_MODULE_1__.tx.align:_ref$align,_ref$angle=_ref.angle,angle=void 0===_ref$angle?_defaults__WEBPACK_IMPORTED_MODULE_1__.tx.angle:_ref$angle,className=_ref.className,style=_ref.style,setRole=_ref.setRole,children=_ref.children,size=(0,_general__WEBPACK_IMPORTED_MODULE_2__.Bs)().size;if(void 0===children||""===children)return null;var _getAxisPosition=(0,_utils__WEBPACK_IMPORTED_MODULE_3__.R)(variant,[0,0],distance),x=_getAxisPosition[0],y=_getAxisPosition[1];return"left"===variant||"right"===variant?y+=(1-align)*size[_general__WEBPACK_IMPORTED_MODULE_4__.Y]:x+=align*size[_general__WEBPACK_IMPORTED_MODULE_4__.X],(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_typography__WEBPACK_IMPORTED_MODULE_5__.Z,{variant:"axis-label",position:(0,_general__WEBPACK_IMPORTED_MODULE_6__.QO)([x,y],offset),angle,style,className:null!=className?className:variant,setRole,children})};UnthemedAxisLabel.displayName="UnthemedAxisLabel";var AxisLabel=function AxisLabel(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UnthemedAxisLabel,_extends({},(0,_themes__WEBPACK_IMPORTED_MODULE_7__.m)(props,"AxisLabel")))};AxisLabel.displayName="AxisLabel";try{AxisLabel.displayName="AxisLabel",AxisLabel.__docgenInfo={description:"",displayName:"AxisLabel",props:{variant:{defaultValue:{value:"top"},description:"type of axis",name:"variant",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'}]}},distance:{defaultValue:{value:"defaultAxisLabelTopProps.distance"},description:"distance between axis line and label",name:"distance",required:!1,type:{name:"number"}},offset:{defaultValue:{value:"defaultAxisLabelTopProps.offset"},description:"offset",name:"offset",required:!1,type:{name:"NumericPositionSpec"}},align:{defaultValue:{value:"defaultAxisLabelTopProps.align"},description:"alignment of label along the axis",name:"align",required:!1,type:{name:"number"}},angle:{defaultValue:{value:"defaultAxisLabelTopProps.angle"},description:"rotation angle (degrees)",name:"angle",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"label, usually string",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/axes/AxisLabel.tsx#AxisLabel"]={docgenInfo:AxisLabel.__docgenInfo,name:"AxisLabel",path:"packages/core/src/axes/AxisLabel.tsx#AxisLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/src/axes/AxisLine.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>AxisLine});var _general__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/general/contexts.tsx"),_general__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/general/constants.ts"),_shapes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/shapes/Line.tsx"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/themes/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),AxisLine=function AxisLine(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"top":_ref$variant,className=_ref.className,style=_ref.style,horizontal="top"===variant||"bottom"===variant,size=(0,_general__WEBPACK_IMPORTED_MODULE_1__.Bs)().size,compositeClassName=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.gj)(variant,className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shapes__WEBPACK_IMPORTED_MODULE_3__.x,{x1:0,y1:0,x2:horizontal?size[_general__WEBPACK_IMPORTED_MODULE_4__.X]:0,y2:horizontal?0:size[_general__WEBPACK_IMPORTED_MODULE_4__.Y],variant:"axis",className:compositeClassName,style,setRole:!1})};AxisLine.displayName="AxisLine";try{AxisLine.displayName="AxisLine",AxisLine.__docgenInfo={description:"",displayName:"AxisLine",props:{variant:{defaultValue:{value:"top"},description:"type of axis",name:"variant",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'}]}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/axes/AxisLine.tsx#AxisLine"]={docgenInfo:AxisLine.__docgenInfo,name:"AxisLine",path:"packages/core/src/axes/AxisLine.tsx#AxisLine"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/src/axes/AxisTicks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>getScaleTicks,y:()=>AxisTicks});var _general__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/general/constants.ts"),_general__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/predicates.ts"),_shapes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/core/src/shapes/Line.tsx"),_scales__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/scales/ticks.ts"),_scales__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/core/src/scales/context.tsx"),_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/themes/utils.ts"),_themes__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/core/src/themes/hooks.tsx"),_typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/core/src/typography/Typography.tsx"),_defaults__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/core/src/axes/defaults.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var stringFormat=function stringFormat(v){return String(v)},getScaleTicks=function getScaleTicks(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"top":_ref$variant,scale=_ref.scale,scaleSize=_ref.scaleSize,ticks=_ref.ticks,_ref$tickSize=_ref.tickSize,tickSize=void 0===_ref$tickSize?0:_ref$tickSize,_ref$labelDistance=_ref.labelDistance,labelDistance=void 0===_ref$labelDistance?0:_ref$labelDistance,_ref$labelOffset=_ref.labelOffset,labelOffset=void 0===_ref$labelOffset?_general__WEBPACK_IMPORTED_MODULE_1__.rv:_ref$labelOffset,labelAngle=_ref.labelAngle,labelFormat=_ref.labelFormat,labelStyle=_ref.labelStyle,tickStyle=_ref.tickStyle,setRole=_ref.setRole,className=_ref.className,style=_ref.style,tickValues=(0,_general__WEBPACK_IMPORTED_MODULE_2__.kJ)(ticks)?ticks:(0,_scales__WEBPACK_IMPORTED_MODULE_3__.f)(scale,ticks);if(tickValues.length<1)return null;var tickCoordinates=(0,_scales__WEBPACK_IMPORTED_MODULE_3__.P)(scale,tickValues,0,scaleSize),horizontal="top"===variant||"bottom"===variant,tickPositions=horizontal?tickCoordinates.map((function(v){return[v,0]})):tickCoordinates.map((function(v){return[0,v]})),xMultiplier="right"===variant?1:-1,yMultiplier="top"===variant?-1:1,labelX=labelOffset[_general__WEBPACK_IMPORTED_MODULE_1__.X]+(horizontal?0:labelDistance*xMultiplier),labelY=labelOffset[_general__WEBPACK_IMPORTED_MODULE_1__.Y]+(horizontal?labelDistance*yMultiplier:0),tickFormat=null!=labelFormat?labelFormat:stringFormat,compositeClassName=(0,_themes__WEBPACK_IMPORTED_MODULE_4__.gj)(variant,className);return tickPositions.map((function(position,i){var x=position[0],y=position[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{role:setRole?"tick":void 0,style,children:[tickSize>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shapes__WEBPACK_IMPORTED_MODULE_5__.x,{variant:"tick",x1:x,y1:y,x2:x+(horizontal?0:tickSize*xMultiplier),y2:y+(horizontal?tickSize*yMultiplier:0),className:compositeClassName,style:tickStyle,setRole:!1},0):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_typography__WEBPACK_IMPORTED_MODULE_6__.Z,{variant:"tick-label",position:[x+labelX,y+labelY],angle:labelAngle,style:labelStyle,className:compositeClassName,setRole:!1,children:tickFormat(tickValues[i],i)},1)]},"tick-"+tickValues[i])}))},UnthemedAxisTicks=function UnthemedAxisTicks(_ref2){var _ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?"top":_ref2$variant,_ref2$ticks=_ref2.ticks,ticks=void 0===_ref2$ticks?_defaults__WEBPACK_IMPORTED_MODULE_7__.Gj.ticks:_ref2$ticks,_ref2$tickSize=_ref2.tickSize,tickSize=void 0===_ref2$tickSize?_defaults__WEBPACK_IMPORTED_MODULE_7__.Gj.tickSize:_ref2$tickSize,_ref2$labelDistance=_ref2.labelDistance,labelDistance=void 0===_ref2$labelDistance?_defaults__WEBPACK_IMPORTED_MODULE_7__.Gj.labelDistance:_ref2$labelDistance,_ref2$labelOffset=_ref2.labelOffset,labelOffset=void 0===_ref2$labelOffset?_defaults__WEBPACK_IMPORTED_MODULE_7__.Gj.labelOffset:_ref2$labelOffset,_ref2$labelAngle=_ref2.labelAngle,labelAngle=void 0===_ref2$labelAngle?_defaults__WEBPACK_IMPORTED_MODULE_7__.Gj.labelAngle:_ref2$labelAngle,labelFormat=_ref2.labelFormat,labelStyle=_ref2.labelStyle,tickStyle=_ref2.tickStyle,_ref2$setRole=_ref2.setRole,setRole=void 0===_ref2$setRole||_ref2$setRole,className=_ref2.className,style=_ref2.style,scales=(0,_scales__WEBPACK_IMPORTED_MODULE_8__.kE)().scales,tickMarks=getScaleTicks({scale:"top"===variant||"bottom"===variant?scales.x:scales.y,variant,ticks,tickSize,tickStyle,labelStyle,labelFormat,labelDistance,labelOffset,labelAngle,setRole,className,style});return null===tickMarks?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{role:setRole?"ticks":void 0,children:tickMarks})};UnthemedAxisTicks.displayName="UnthemedAxisTicks";var AxisTicks=function AxisTicks(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UnthemedAxisTicks,_extends({},(0,_themes__WEBPACK_IMPORTED_MODULE_9__.m)(props,"AxisTicks")))};AxisTicks.displayName="AxisTicks";try{getScaleTicks.displayName="getScaleTicks",getScaleTicks.__docgenInfo={description:"",displayName:"getScaleTicks",props:{variant:{defaultValue:{value:"top"},description:"type of axis",name:"variant",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'}]}},ticks:{defaultValue:{value:"defaultAxisTicksProps.ticks"},description:"specification for tick positions *",name:"ticks",required:!1,type:{name:"TickType"}},tickSize:{defaultValue:{value:"defaultAxisTicksProps.tickSize"},description:"length of tick lines",name:"tickSize",required:!1,type:{name:"number"}},tickStyle:{defaultValue:null,description:"style for tick marks (line)",name:"tickStyle",required:!1,type:{name:"Partial<CSSProperties>"}},labelDistance:{defaultValue:{value:"defaultAxisTicksProps.labelDistance"},description:"distance between axis and tick labels",name:"labelDistance",required:!1,type:{name:"number"}},labelOffset:{defaultValue:{value:"defaultAxisTicksProps.labelOffset"},description:"additional translation for label position",name:"labelOffset",required:!1,type:{name:"NumericPositionSpec"}},labelAngle:{defaultValue:{value:"defaultAxisTicksProps.labelAngle"},description:"rotation angle (degrees)",name:"labelAngle",required:!1,type:{name:"number"}},labelFormat:{defaultValue:null,description:"format",name:"labelFormat",required:!1,type:{name:"((value: unknown, index: number) => ReactNode)"}},labelStyle:{defaultValue:null,description:"style for tick labels (text)",name:"labelStyle",required:!1,type:{name:"Partial<CSSProperties>"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},scale:{defaultValue:null,description:"",name:"scale",required:!0,type:{name:"Scale"}},scaleSize:{defaultValue:null,description:"",name:"scaleSize",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/axes/AxisTicks.tsx#getScaleTicks"]={docgenInfo:getScaleTicks.__docgenInfo,name:"getScaleTicks",path:"packages/core/src/axes/AxisTicks.tsx#getScaleTicks"})}catch(__react_docgen_typescript_loader_error){}try{AxisTicks.displayName="AxisTicks",AxisTicks.__docgenInfo={description:"",displayName:"AxisTicks",props:{variant:{defaultValue:{value:"top"},description:"type of axis",name:"variant",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'}]}},ticks:{defaultValue:{value:"defaultAxisTicksProps.ticks"},description:"specification for tick positions *",name:"ticks",required:!1,type:{name:"TickType"}},tickSize:{defaultValue:{value:"defaultAxisTicksProps.tickSize"},description:"length of tick lines",name:"tickSize",required:!1,type:{name:"number"}},tickStyle:{defaultValue:null,description:"style for tick marks (line)",name:"tickStyle",required:!1,type:{name:"Partial<CSSProperties>"}},labelDistance:{defaultValue:{value:"defaultAxisTicksProps.labelDistance"},description:"distance between axis and tick labels",name:"labelDistance",required:!1,type:{name:"number"}},labelOffset:{defaultValue:{value:"defaultAxisTicksProps.labelOffset"},description:"additional translation for label position",name:"labelOffset",required:!1,type:{name:"NumericPositionSpec"}},labelAngle:{defaultValue:{value:"defaultAxisTicksProps.labelAngle"},description:"rotation angle (degrees)",name:"labelAngle",required:!1,type:{name:"number"}},labelFormat:{defaultValue:null,description:"format",name:"labelFormat",required:!1,type:{name:"((value: unknown, index: number) => ReactNode)"}},labelStyle:{defaultValue:null,description:"style for tick labels (text)",name:"labelStyle",required:!1,type:{name:"Partial<CSSProperties>"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/axes/AxisTicks.tsx#AxisTicks"]={docgenInfo:AxisTicks.__docgenInfo,name:"AxisTicks",path:"packages/core/src/axes/AxisTicks.tsx#AxisTicks"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/src/axes/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>getAxisPosition});var _general__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/general/constants.ts"),getAxisPosition=function getAxisPosition(variant,size,distance){return"left"===variant?[-distance,0]:"top"===variant?[0,-distance]:"bottom"===variant?[0,size[_general__WEBPACK_IMPORTED_MODULE_0__.Y]+distance]:[size[_general__WEBPACK_IMPORTED_MODULE_0__.X]+distance,0]}},"./packages/core/src/scales/ticks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>getTickCoordinates,f:()=>getTicks});var _general__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/general/predicates.ts"),_general__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/general/math.ts"),_predicates__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/scales/predicates.tsx"),_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/scales/colors.tsx"),getTicks=function getTicks(scale,ticks){return(0,_general__WEBPACK_IMPORTED_MODULE_0__.kJ)(ticks)?ticks:(0,_colors__WEBPACK_IMPORTED_MODULE_1__.xi)(scale)?scale.domain():(0,_colors__WEBPACK_IMPORTED_MODULE_1__.bq)(scale)||(0,_predicates__WEBPACK_IMPORTED_MODULE_2__.z0)(scale)?void 0===ticks?scale.ticks(4):scale.ticks(ticks):(0,_colors__WEBPACK_IMPORTED_MODULE_1__.FB)(scale)?(0,_general__WEBPACK_IMPORTED_MODULE_3__.RG)(scale.domain()):scale.ticks(ticks)},getTickCoordinates=function getTickCoordinates(scale,values,shift,size){void 0===shift&&(shift=0),void 0===size&&(size=0);var tickValues=getTicks(scale,values);if((0,_colors__WEBPACK_IMPORTED_MODULE_1__.cH)(scale)){if((0,_colors__WEBPACK_IMPORTED_MODULE_1__.FB)(scale))return[];var domain=scale.domain(),domainStart=Number(domain[0]),domainSize=Number(domain[domain.length-1])-domainStart,result=tickValues.map((function(v){return size*(Number(v)-domainStart)/domainSize}));return size<0?result.map((function(v){return Math.abs(size)+v})):result}if((0,_predicates__WEBPACK_IMPORTED_MODULE_2__.z0)(scale))return tickValues.map((function(v){return scale(Number(v))}));var scaledShift=shift*scale.bandwidth();return tickValues.map((function(v){return scale(String(v))+scaledShift}))}},"./packages/core/src/shapes/Line.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Line});var framer_motion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/themes/utils.ts"),_general__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","initial","animate","exit","x1","y1","x2","y2","markerStart","markerEnd","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Line=function Line(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,initial=_ref.initial,animate=_ref.animate,exit=_ref.exit,x1=_ref.x1,y1=_ref.y1,x2=_ref.x2,y2=_ref.y2,markerStart=_ref.markerStart,markerEnd=_ref.markerEnd,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),config={x1,y1,x2,y2};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.m.line,_extends({role:setRole&&"default"!==variant?variant:void 0,initial:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,initial),animate:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,animate),exit:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,exit),className:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.gj)(variant,className),markerStart:markerStart?"url(#"+markerStart+")":void 0,markerEnd:markerEnd?"url(#"+markerEnd+")":void 0},props))};Line.displayName="Line";try{Line.displayName="Line",Line.__docgenInfo={description:"",displayName:"Line",props:{x1:{defaultValue:null,description:"starting x coordinate",name:"x1",required:!0,type:{name:"number"}},y1:{defaultValue:null,description:"starting y coordinate",name:"y1",required:!0,type:{name:"number"}},x2:{defaultValue:null,description:"ending x coordinate",name:"x2",required:!0,type:{name:"number"}},y2:{defaultValue:null,description:"ending y coordinate",name:"y2",required:!0,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},markerStart:{defaultValue:null,description:"identifier for start marker",name:"markerStart",required:!1,type:{name:"string"}},markerEnd:{defaultValue:null,description:"identifier for end marker",name:"markerEnd",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/shapes/Line.tsx#Line"]={docgenInfo:Line.__docgenInfo,name:"Line",path:"packages/core/src/shapes/Line.tsx#Line"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/src/typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography});var framer_motion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_general__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/general/constants.ts"),_general__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/general/utils.ts"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/themes/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["position","variant","initial","animate","exit","angle","style","className","setRole","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Typography=function Typography(_ref){var _ref$position=_ref.position,position=void 0===_ref$position?_general__WEBPACK_IMPORTED_MODULE_1__.rv:_ref$position,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,initial=_ref.initial,animate=_ref.animate,exit=_ref.exit,angle=_ref.angle,style=_ref.style,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);if(!children)return null;var compositeClassName=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.gj)(variant,className),config={x:position[0],y:position[1],rotate:angle,originX:"0px",originY:"0px"},role=setRole&&"default"!==variant?variant:void 0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.text,_extends({role,initial:(0,_general__WEBPACK_IMPORTED_MODULE_4__.$d)(config,initial),animate:(0,_general__WEBPACK_IMPORTED_MODULE_4__.$d)(config,animate),exit:(0,_general__WEBPACK_IMPORTED_MODULE_4__.$d)(config,exit),style:(0,_themes__WEBPACK_IMPORTED_MODULE_2__.dJ)(style,config),className:compositeClassName},props,{children}))};Typography.displayName="Typography";try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{position:{defaultValue:{value:"[0, 0]"},description:"position (absolute coordinates)",name:"position",required:!1,type:{name:"NumericPositionSpec"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},angle:{defaultValue:null,description:"rotation (degrees)",name:"angle",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"packages/core/src/typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/axes/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>ChartBottomAxisDecorator,l:()=>ChartLeftAxisDecorator});var _src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/charts/Chart.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/views/View.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/views/Surface.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/axes/Axis.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartBottomAxisDecorator=function ChartBottomAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.k,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.G,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.T,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.R,{variant:"bottom",children:Story()})]})})};ChartBottomAxisDecorator.displayName="ChartBottomAxisDecorator";var ChartLeftAxisDecorator=function ChartLeftAxisDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.k,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.G,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.T,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.R,{variant:"left",children:Story()})]})})};ChartLeftAxisDecorator.displayName="ChartLeftAxisDecorator";try{ChartBottomAxisDecorator.displayName="ChartBottomAxisDecorator",ChartBottomAxisDecorator.__docgenInfo={description:"",displayName:"ChartBottomAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/axes/decorators.tsx#ChartBottomAxisDecorator"]={docgenInfo:ChartBottomAxisDecorator.__docgenInfo,name:"ChartBottomAxisDecorator",path:"packages/core/stories/components/axes/decorators.tsx#ChartBottomAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartLeftAxisDecorator.displayName="ChartLeftAxisDecorator",ChartLeftAxisDecorator.__docgenInfo={description:"",displayName:"ChartLeftAxisDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/axes/decorators.tsx#ChartLeftAxisDecorator"]={docgenInfo:ChartLeftAxisDecorator.__docgenInfo,name:"ChartLeftAxisDecorator",path:"packages/core/stories/components/axes/decorators.tsx#ChartLeftAxisDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);