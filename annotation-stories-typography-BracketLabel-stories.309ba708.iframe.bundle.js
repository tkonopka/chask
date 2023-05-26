"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7490],{"./packages/annotation/stories/typography/BracketLabel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LongTicks:()=>LongTicks,ShortTicks:()=>ShortTicks,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BracketLabel_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),lines=__webpack_require__("./packages/annotation/src/typography/lines.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BracketLabel=function BracketLabel(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"right":_ref$variant,start=_ref.start,end=_ref.end,_ref$units=_ref.units,units=void 0===_ref$units?"view":_ref$units,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?[0,0]:_ref$expansion,_ref$tickSize=_ref.tickSize,tickSize=void 0===_ref$tickSize?5:_ref$tickSize,lineStyle=_ref.lineStyle,_ref$offset=_ref.offset,offset=void 0===_ref$offset?[0,-8]:_ref$offset,_ref$align=_ref.align,align=void 0===_ref$align?.5:_ref$align,_ref$angle=_ref.angle,angle=void 0===_ref$angle?0:_ref$angle,textStyle=_ref.textStyle,className=_ref.className,style=_ref.style,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,size=(0,chsk_core_es.Bs9)().size,scales=(0,chsk_core_es.kE1)().scales;tickSize="left"===variant?-tickSize:tickSize;var _getLineAbsolutePosit=(0,lines.wT)({start,end,units,expansion,scales,size}),lineStart=_getLineAbsolutePosit.lineStart,lineEnd=_getLineAbsolutePosit.lineEnd,_getBracketPositions=(0,lines.Gg)({start:lineStart,end:lineEnd,size:tickSize}),tickStart=_getBracketPositions.tickStart,tickEnd=_getBracketPositions.tickEnd,textPos=[lineStart[0]+offset[0]+(lineEnd[0]-lineStart[0])*align,lineStart[1]+offset[1]+(lineEnd[1]-lineStart[1])*align],compositeClassName=(0,chsk_core_es.gjB)("bracket-label",className);return(0,jsx_runtime.jsxs)("g",{style,className:compositeClassName,role:setRole?"bracket-label-"+variant:void 0,children:[(0,jsx_runtime.jsx)(chsk_core_es.y$t,{variant:"bracket",points:[tickStart,lineStart,lineEnd,tickEnd],className:compositeClassName,style:lineStyle,setRole}),(0,jsx_runtime.jsx)(chsk_core_es.ZT$,{variant:"label",position:textPos,angle,className:compositeClassName,style:textStyle,setRole,children})]})};BracketLabel.displayName="BracketLabel";try{BracketLabel.displayName="BracketLabel",BracketLabel.__docgenInfo={description:"",displayName:"BracketLabel",props:{variant:{defaultValue:{value:"right"},description:"left- or right- handed ticks",name:"variant",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},tickSize:{defaultValue:{value:"5"},description:"size of marker at the end of line",name:"tickSize",required:!1,type:{name:"number"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},offset:{defaultValue:{value:"[0, -8]"},description:"translation for text label",name:"offset",required:!1,type:{name:"NumericPositionSpec"}},start:{defaultValue:null,description:"start position",name:"start",required:!0,type:{name:"PositionSpec"}},angle:{defaultValue:{value:"0"},description:"rotation of text label",name:"angle",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"children components",name:"children",required:!1,type:{name:"ReactNode"}},padding:{defaultValue:null,description:"padding for text label",name:"padding",required:!1,type:{name:"SizeSpec"}},align:{defaultValue:{value:"0.5"},description:"alignment for text label in [0, 1]",name:"align",required:!1,type:{name:"number"}},end:{defaultValue:null,description:"end position",name:"end",required:!0,type:{name:"PositionSpec"}},expansion:{defaultValue:{value:"[0, 0]"},description:"expansion of interval (multiples of bandwidth)",name:"expansion",required:!1,type:{name:"TwoSideSizeSpec"}},lineStyle:{defaultValue:null,description:"styles for line",name:"lineStyle",required:!1,type:{name:"Partial<CSSProperties>"}},units:{defaultValue:{value:"view"},description:"units for start and end positions",name:"units",required:!1,type:{name:"PositionUnits"}},textStyle:{defaultValue:null,description:"styles for text",name:"textStyle",required:!1,type:{name:"Partial<CSSProperties>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/typography/BracketLabel.tsx#BracketLabel"]={docgenInfo:BracketLabel.__docgenInfo,name:"BracketLabel",path:"packages/annotation/src/typography/BracketLabel.tsx#BracketLabel"})}catch(__react_docgen_typescript_loader_error){}var _ShortTicks$parameter,_ShortTicks$parameter2,_ShortTicks$parameter3,_LongTicks$parameters,_LongTicks$parameters2,_LongTicks$parameters3,decorators=__webpack_require__("./packages/annotation/stories/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const BracketLabel_stories={title:"Addons/Annotation/Typography/BracketLabel",component:BracketLabel};var ShortTicks={name:"short ticks",args:{start:["C",108],end:["F",108],expansion:[.5,.5],tickSize:7,lineStyle:{fillOpacity:0},textStyle:{textAnchor:"middle"},children:"selection"},decorators:[decorators.I8]},LongTicks={name:"long ticks",args:{start:["C",90],end:["E",20],units:["view","view"],expansion:[.5,.5],tickSize:20,offset:[20,-20],lineStyle:{fillOpacity:0},textStyle:{textAnchor:"middle"},children:"selection"},decorators:[decorators.I8]};ShortTicks.parameters=_extends({},ShortTicks.parameters,{docs:_extends({},null==(_ShortTicks$parameter=ShortTicks.parameters)?void 0:_ShortTicks$parameter.docs,{source:_extends({originalSource:"{\n  name: 'short ticks',\n  args: {\n    start: ['C', 108],\n    end: ['F', 108],\n    expansion: [0.5, 0.5],\n    tickSize: 7,\n    lineStyle: {\n      fillOpacity: 0\n    },\n    textStyle: {\n      textAnchor: 'middle'\n    },\n    children: 'selection'\n  },\n  decorators: [ChartBandViewAxisDecorator]\n}"},null==(_ShortTicks$parameter2=ShortTicks.parameters)||null==(_ShortTicks$parameter3=_ShortTicks$parameter2.docs)?void 0:_ShortTicks$parameter3.source)})}),LongTicks.parameters=_extends({},LongTicks.parameters,{docs:_extends({},null==(_LongTicks$parameters=LongTicks.parameters)?void 0:_LongTicks$parameters.docs,{source:_extends({originalSource:"{\n  name: 'long ticks',\n  args: {\n    start: ['C', 90],\n    end: ['E', 20],\n    units: ['view', 'view'],\n    expansion: [0.5, 0.5],\n    tickSize: 20,\n    offset: [20, -20],\n    lineStyle: {\n      fillOpacity: 0\n    },\n    textStyle: {\n      textAnchor: 'middle'\n    },\n    children: 'selection'\n  },\n  decorators: [ChartBandViewAxisDecorator]\n}"},null==(_LongTicks$parameters2=LongTicks.parameters)||null==(_LongTicks$parameters3=_LongTicks$parameters2.docs)?void 0:_LongTicks$parameters3.source)})});var __namedExportsOrder=["ShortTicks","LongTicks"]}}]);