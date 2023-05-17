"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2460],{"./packages/band/stories/bars/Bar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoRescaling:()=>AutoRescaling,CustomSpacing:()=>CustomSpacing,EqualSpacing:()=>EqualSpacing,FixedScales:()=>FixedScales,FixedValueScale:()=>FixedValueScale,HorizontalGrouped:()=>HorizontalGrouped,HorizontalStacked:()=>HorizontalStacked,LargeInnerPadding:()=>LargeInnerPadding,LargeInternalPadding:()=>LargeInternalPadding,LargeOuterPadding:()=>LargeOuterPadding,LinearIndexScale:()=>LinearIndexScale,MissingKeys:()=>MissingKeys,NullInternalPadding:()=>NullInternalPadding,ReorderedIds:()=>ReorderedIds,SingleKey:()=>SingleKey,TwoKeys:()=>TwoKeys,VerticalGrouped:()=>VerticalGrouped,VerticalStacked:()=>VerticalStacked,ZeroInternalPadding:()=>ZeroInternalPadding,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Bar_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),src=__webpack_require__("./packages/band/src/index.tsx"),decorators=__webpack_require__("./packages/band/stories/decorators.tsx");const dataSingles_namespaceObject=JSON.parse('[{"id":"A","value":95},{"id":"B","value":76},{"id":"C","value":65},{"id":"D","value":81},{"id":"E","value":31},{"id":"F","value":26},{"id":"G","value":47}]'),dataMissing_namespaceObject=JSON.parse('[{"id":"alpha","x":85},{"id":"beta","y":45},{"id":"gamma","z":60}]');var _VerticalGrouped$para,_VerticalGrouped$para2,_VerticalGrouped$para3,_VerticalStacked$para,_VerticalStacked$para2,_VerticalStacked$para3,_HorizontalGrouped$pa,_HorizontalGrouped$pa2,_HorizontalGrouped$pa3,_HorizontalStacked$pa,_HorizontalStacked$pa2,_HorizontalStacked$pa3,_LargeOuterPadding$pa,_LargeOuterPadding$pa2,_LargeOuterPadding$pa3,_LargeInnerPadding$pa,_LargeInnerPadding$pa2,_LargeInnerPadding$pa3,_LargeInternalPadding,_LargeInternalPadding2,_LargeInternalPadding3,_ZeroInternalPadding$,_ZeroInternalPadding$2,_ZeroInternalPadding$3,_TwoKeys$parameters,_TwoKeys$parameters2,_TwoKeys$parameters2$,_SingleKey$parameters,_SingleKey$parameters2,_SingleKey$parameters3,_EqualSpacing$paramet,_EqualSpacing$paramet2,_EqualSpacing$paramet3,_FixedValueScale$para,_FixedValueScale$para2,_FixedValueScale$para3,_ReorderedIds$paramet,_ReorderedIds$paramet2,_ReorderedIds$paramet3,_CustomSpacing$parame,_CustomSpacing$parame2,_CustomSpacing$parame3,_LinearIndexScale$par,_LinearIndexScale$par2,_LinearIndexScale$par3,_MissingKeys$paramete,_MissingKeys$paramete2,_MissingKeys$paramete3,_NullInternalPadding$,_NullInternalPadding$2,_NullInternalPadding$3,_AutoRescaling$parame,_AutoRescaling$parame2,_AutoRescaling$parame3,_FixedScales$paramete,_FixedScales$paramete2,_FixedScales$paramete3,bars_decorators=__webpack_require__("./packages/band/stories/bars/decorators.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var BarsAndLegend=function BarsAndLegend(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src.Ll,{}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",label:"values (a.u.)"}),(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{position:[160,200],size:[150,20],positionUnits:"absolute",anchor:[.5,0],horizontal:!0,itemPadding:[2,2,2,2],itemSize:[50,20],firstOffset:[0,0],title:""})]})};const Bar_stories={title:"Addons/Band/Bars/Bar",component:src.$Q};var VerticalGrouped={name:"vertical, grouped",args:_extends({},bars_decorators.MY,{variant:"grouped",children:(0,jsx_runtime.jsx)(src.Ll,{})}),decorators:[decorators.e]},VerticalStacked={name:"vertical, stacked",args:_extends({},bars_decorators.MY,{variant:"stacked",children:(0,jsx_runtime.jsx)(src.Ll,{})}),decorators:[decorators.e]},HorizontalGrouped={name:"horizontal, grouped",args:_extends({},bars_decorators.MY,{horizontal:!0,variant:"grouped",children:(0,jsx_runtime.jsx)(src.Ll,{})}),decorators:[decorators.e]},HorizontalStacked={name:"horizontal, stacked",args:_extends({},bars_decorators.MY,{horizontal:!0,variant:"stacked",children:(0,jsx_runtime.jsx)(src.Ll,{})}),decorators:[decorators.e]},LargeOuterPadding={name:"large outer padding",args:_extends({},bars_decorators.MY,{variant:"stacked",horizontal:!1,scaleIndex:{variant:"band",paddingOuter:.8,paddingInner:.1},children:(0,jsx_runtime.jsx)(src.Ll,{})}),decorators:[decorators.e]},LargeInnerPadding={name:"large inner padding",args:_extends({},bars_decorators.MY,{variant:"stacked",horizontal:!1,scaleIndex:{variant:"band",paddingOuter:.1,paddingInner:.8},children:(0,jsx_runtime.jsx)(src.Ll,{})}),decorators:[decorators.e]},LargeInternalPadding={name:"large internal padding",args:_extends({},bars_decorators.MY,{horizontal:!1,paddingInternal:.8,children:(0,jsx_runtime.jsx)(src.Ll,{})}),decorators:[decorators.e]},ZeroInternalPadding={name:"zero internal padding",args:_extends({},bars_decorators.MY,{horizontal:!1,paddingInternal:0,children:(0,jsx_runtime.jsx)(src.Ll,{})}),decorators:[decorators.e]},TwoKeys={name:"two keys",args:_extends({},bars_decorators.MY,{horizontal:!1,keys:["x","y"],children:(0,jsx_runtime.jsx)(src.Ll,{})}),decorators:[decorators.e]},SingleKey={name:"single key",args:_extends({},bars_decorators.MY,{horizontal:!1,keys:["x"],children:(0,jsx_runtime.jsx)(src.Ll,{})}),decorators:[decorators.e]},EqualSpacing={name:"equal spacing",args:_extends({},bars_decorators.MY,{data:dataSingles_namespaceObject,keys:["value"],horizontal:!1,scaleIndex:{variant:"band",domain:["A","B","C","D","E","F","G"],padding:.2},children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src.Ll,{},0),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom"},1),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"},2)]})}),decorators:[decorators.e]},FixedValueScale={name:"fixed domain",args:_extends({},bars_decorators.MY,{data:dataSingles_namespaceObject,keys:["value"],horizontal:!1,scaleValue:{variant:"linear",domain:[0,100]},scaleIndex:{variant:"band"},children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src.Ll,{},0),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom"},1),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"},2)]})}),decorators:[decorators.e]},ReorderedIds={name:"reordered ids",args:_extends({},bars_decorators.MY,{data:dataSingles_namespaceObject,keys:["value"],horizontal:!1,scaleIndex:{variant:"band",domain:["E","F","G","A","B","C","D","X","Y"]},children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src.Ll,{},0),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom"},1),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"},2)]})}),decorators:[decorators.e]},CustomSpacing={name:"custom spacing",args:_extends({},bars_decorators.MY,{data:dataSingles_namespaceObject,keys:["value"],horizontal:!1,scaleIndex:{variant:"band",domain:["A","B","C","D","E","F","G"],padding:.2,extraPadding:{E:.9}},children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src.Ll,{}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom"})]})}),decorators:[decorators.e]},LinearIndexScale={name:"continuous index",args:_extends({},bars_decorators.MY,{data:[{id:"1",value:4},{id:"2",value:7},{id:"6",value:8},{id:"8",value:5}],keys:["value"],horizontal:!1,scaleIndex:{variant:"linear",domain:[0,10],padding:.2,bandwidth:[0,1]},children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(src.Ll,{}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom"})]})}),decorators:[decorators.e]},MissingKeys={name:"missing keys",args:_extends({},bars_decorators.MY,{variant:"stacked",data:dataMissing_namespaceObject,horizontal:!1,scaleIndex:{variant:"band",padding:.2},children:(0,jsx_runtime.jsx)(src.Ll,{})}),decorators:[decorators.e]},NullInternalPadding={name:"null internal padding",args:_extends({},bars_decorators.MY,{variant:"layered",data:dataMissing_namespaceObject,horizontal:!1,scaleIndex:{variant:"band",padding:.2},children:(0,jsx_runtime.jsx)(src.Ll,{})}),decorators:[decorators.e]},AutoRescaling={name:"auto-rescaling",args:_extends({},bars_decorators.MY,{variant:"stacked",data:dataMissing_namespaceObject,horizontal:!1,scaleIndex:{variant:"band",padding:.2},autoRescale:!0,children:(0,jsx_runtime.jsx)(BarsAndLegend,{})}),decorators:[bars_decorators._Y]},FixedScales={name:"fixed scales",args:_extends({},bars_decorators.MY,{variant:"stacked",data:dataMissing_namespaceObject,horizontal:!1,scaleIndex:{variant:"band",padding:.2},autoRescale:!1,children:(0,jsx_runtime.jsx)(BarsAndLegend,{})}),decorators:[bars_decorators._Y]};VerticalGrouped.parameters=_extends({},VerticalGrouped.parameters,{docs:_extends({},null==(_VerticalGrouped$para=VerticalGrouped.parameters)?void 0:_VerticalGrouped$para.docs,{source:_extends({originalSource:"{\n  name: 'vertical, grouped',\n  args: {\n    ...commonBarProps,\n    variant: 'grouped',\n    children: <Bars />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_VerticalGrouped$para2=VerticalGrouped.parameters)||null==(_VerticalGrouped$para3=_VerticalGrouped$para2.docs)?void 0:_VerticalGrouped$para3.source)})}),VerticalStacked.parameters=_extends({},VerticalStacked.parameters,{docs:_extends({},null==(_VerticalStacked$para=VerticalStacked.parameters)?void 0:_VerticalStacked$para.docs,{source:_extends({originalSource:"{\n  name: 'vertical, stacked',\n  args: {\n    ...commonBarProps,\n    variant: 'stacked',\n    children: <Bars />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_VerticalStacked$para2=VerticalStacked.parameters)||null==(_VerticalStacked$para3=_VerticalStacked$para2.docs)?void 0:_VerticalStacked$para3.source)})}),HorizontalGrouped.parameters=_extends({},HorizontalGrouped.parameters,{docs:_extends({},null==(_HorizontalGrouped$pa=HorizontalGrouped.parameters)?void 0:_HorizontalGrouped$pa.docs,{source:_extends({originalSource:"{\n  name: 'horizontal, grouped',\n  args: {\n    ...commonBarProps,\n    horizontal: true,\n    variant: 'grouped',\n    children: <Bars />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_HorizontalGrouped$pa2=HorizontalGrouped.parameters)||null==(_HorizontalGrouped$pa3=_HorizontalGrouped$pa2.docs)?void 0:_HorizontalGrouped$pa3.source)})}),HorizontalStacked.parameters=_extends({},HorizontalStacked.parameters,{docs:_extends({},null==(_HorizontalStacked$pa=HorizontalStacked.parameters)?void 0:_HorizontalStacked$pa.docs,{source:_extends({originalSource:"{\n  name: 'horizontal, stacked',\n  args: {\n    ...commonBarProps,\n    horizontal: true,\n    variant: 'stacked',\n    children: <Bars />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_HorizontalStacked$pa2=HorizontalStacked.parameters)||null==(_HorizontalStacked$pa3=_HorizontalStacked$pa2.docs)?void 0:_HorizontalStacked$pa3.source)})}),LargeOuterPadding.parameters=_extends({},LargeOuterPadding.parameters,{docs:_extends({},null==(_LargeOuterPadding$pa=LargeOuterPadding.parameters)?void 0:_LargeOuterPadding$pa.docs,{source:_extends({originalSource:"{\n  name: 'large outer padding',\n  args: {\n    ...commonBarProps,\n    variant: 'stacked',\n    horizontal: false,\n    scaleIndex: {\n      variant: 'band',\n      paddingOuter: 0.8,\n      paddingInner: 0.1\n    },\n    children: <Bars />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_LargeOuterPadding$pa2=LargeOuterPadding.parameters)||null==(_LargeOuterPadding$pa3=_LargeOuterPadding$pa2.docs)?void 0:_LargeOuterPadding$pa3.source)})}),LargeInnerPadding.parameters=_extends({},LargeInnerPadding.parameters,{docs:_extends({},null==(_LargeInnerPadding$pa=LargeInnerPadding.parameters)?void 0:_LargeInnerPadding$pa.docs,{source:_extends({originalSource:"{\n  name: 'large inner padding',\n  args: {\n    ...commonBarProps,\n    variant: 'stacked',\n    horizontal: false,\n    scaleIndex: {\n      variant: 'band',\n      paddingOuter: 0.1,\n      paddingInner: 0.8\n    },\n    children: <Bars />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_LargeInnerPadding$pa2=LargeInnerPadding.parameters)||null==(_LargeInnerPadding$pa3=_LargeInnerPadding$pa2.docs)?void 0:_LargeInnerPadding$pa3.source)})}),LargeInternalPadding.parameters=_extends({},LargeInternalPadding.parameters,{docs:_extends({},null==(_LargeInternalPadding=LargeInternalPadding.parameters)?void 0:_LargeInternalPadding.docs,{source:_extends({originalSource:"{\n  name: 'large internal padding',\n  args: {\n    ...commonBarProps,\n    horizontal: false,\n    paddingInternal: 0.8,\n    children: <Bars />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_LargeInternalPadding2=LargeInternalPadding.parameters)||null==(_LargeInternalPadding3=_LargeInternalPadding2.docs)?void 0:_LargeInternalPadding3.source)})}),ZeroInternalPadding.parameters=_extends({},ZeroInternalPadding.parameters,{docs:_extends({},null==(_ZeroInternalPadding$=ZeroInternalPadding.parameters)?void 0:_ZeroInternalPadding$.docs,{source:_extends({originalSource:"{\n  name: 'zero internal padding',\n  args: {\n    ...commonBarProps,\n    horizontal: false,\n    paddingInternal: 0.0,\n    children: <Bars />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_ZeroInternalPadding$2=ZeroInternalPadding.parameters)||null==(_ZeroInternalPadding$3=_ZeroInternalPadding$2.docs)?void 0:_ZeroInternalPadding$3.source)})}),TwoKeys.parameters=_extends({},TwoKeys.parameters,{docs:_extends({},null==(_TwoKeys$parameters=TwoKeys.parameters)?void 0:_TwoKeys$parameters.docs,{source:_extends({originalSource:"{\n  name: 'two keys',\n  args: {\n    ...commonBarProps,\n    horizontal: false,\n    keys: ['x', 'y'],\n    children: <Bars />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_TwoKeys$parameters2=TwoKeys.parameters)||null==(_TwoKeys$parameters2$=_TwoKeys$parameters2.docs)?void 0:_TwoKeys$parameters2$.source)})}),SingleKey.parameters=_extends({},SingleKey.parameters,{docs:_extends({},null==(_SingleKey$parameters=SingleKey.parameters)?void 0:_SingleKey$parameters.docs,{source:_extends({originalSource:"{\n  name: 'single key',\n  args: {\n    ...commonBarProps,\n    horizontal: false,\n    keys: ['x'],\n    children: <Bars />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_SingleKey$parameters2=SingleKey.parameters)||null==(_SingleKey$parameters3=_SingleKey$parameters2.docs)?void 0:_SingleKey$parameters3.source)})}),EqualSpacing.parameters=_extends({},EqualSpacing.parameters,{docs:_extends({},null==(_EqualSpacing$paramet=EqualSpacing.parameters)?void 0:_EqualSpacing$paramet.docs,{source:_extends({originalSource:"{\n  name: 'equal spacing',\n  args: {\n    ...commonBarProps,\n    data: dataSingles,\n    keys: ['value'],\n    horizontal: false,\n    scaleIndex: {\n      variant: 'band',\n      domain: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],\n      padding: 0.2\n    },\n    children: <>\n                <Bars key={0} />\n                <Axis key={1} variant={'bottom'} />\n                <Axis key={2} variant={'left'} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_EqualSpacing$paramet2=EqualSpacing.parameters)||null==(_EqualSpacing$paramet3=_EqualSpacing$paramet2.docs)?void 0:_EqualSpacing$paramet3.source)})}),FixedValueScale.parameters=_extends({},FixedValueScale.parameters,{docs:_extends({},null==(_FixedValueScale$para=FixedValueScale.parameters)?void 0:_FixedValueScale$para.docs,{source:_extends({originalSource:"{\n  name: 'fixed domain',\n  args: {\n    ...commonBarProps,\n    data: dataSingles,\n    keys: ['value'],\n    horizontal: false,\n    scaleValue: {\n      variant: 'linear',\n      domain: [0, 100]\n    },\n    scaleIndex: {\n      variant: 'band'\n    },\n    children: <>\n                <Bars key={0} />\n                <Axis key={1} variant={'bottom'} />\n                <Axis key={2} variant={'left'} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_FixedValueScale$para2=FixedValueScale.parameters)||null==(_FixedValueScale$para3=_FixedValueScale$para2.docs)?void 0:_FixedValueScale$para3.source)})}),ReorderedIds.parameters=_extends({},ReorderedIds.parameters,{docs:_extends({},null==(_ReorderedIds$paramet=ReorderedIds.parameters)?void 0:_ReorderedIds$paramet.docs,{source:_extends({originalSource:"{\n  name: 'reordered ids',\n  args: {\n    ...commonBarProps,\n    data: dataSingles,\n    keys: ['value'],\n    horizontal: false,\n    scaleIndex: {\n      variant: 'band',\n      domain: ['E', 'F', 'G', 'A', 'B', 'C', 'D', 'X', 'Y']\n    },\n    children: <>\n                <Bars key={0} />\n                <Axis key={1} variant={'bottom'} />\n                <Axis key={2} variant={'left'} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_ReorderedIds$paramet2=ReorderedIds.parameters)||null==(_ReorderedIds$paramet3=_ReorderedIds$paramet2.docs)?void 0:_ReorderedIds$paramet3.source)})}),CustomSpacing.parameters=_extends({},CustomSpacing.parameters,{docs:_extends({},null==(_CustomSpacing$parame=CustomSpacing.parameters)?void 0:_CustomSpacing$parame.docs,{source:_extends({originalSource:"{\n  name: 'custom spacing',\n  args: {\n    ...commonBarProps,\n    data: dataSingles,\n    keys: ['value'],\n    horizontal: false,\n    scaleIndex: {\n      variant: 'band',\n      domain: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],\n      padding: 0.2,\n      extraPadding: {\n        E: 0.9\n      }\n    },\n    children: <>\n                <Bars />\n                <Axis variant={'bottom'} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_CustomSpacing$parame2=CustomSpacing.parameters)||null==(_CustomSpacing$parame3=_CustomSpacing$parame2.docs)?void 0:_CustomSpacing$parame3.source)})}),LinearIndexScale.parameters=_extends({},LinearIndexScale.parameters,{docs:_extends({},null==(_LinearIndexScale$par=LinearIndexScale.parameters)?void 0:_LinearIndexScale$par.docs,{source:_extends({originalSource:"{\n  name: 'continuous index',\n  args: {\n    ...commonBarProps,\n    data: [{\n      id: '1',\n      value: 4\n    }, {\n      id: '2',\n      value: 7\n    }, {\n      id: '6',\n      value: 8\n    }, {\n      id: '8',\n      value: 5\n    }],\n    keys: ['value'],\n    horizontal: false,\n    scaleIndex: {\n      variant: 'linear',\n      domain: [0, 10],\n      padding: 0.2,\n      bandwidth: [0, 1]\n    },\n    children: <>\n                <Bars />\n                <Axis variant={'bottom'} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_LinearIndexScale$par2=LinearIndexScale.parameters)||null==(_LinearIndexScale$par3=_LinearIndexScale$par2.docs)?void 0:_LinearIndexScale$par3.source)})}),MissingKeys.parameters=_extends({},MissingKeys.parameters,{docs:_extends({},null==(_MissingKeys$paramete=MissingKeys.parameters)?void 0:_MissingKeys$paramete.docs,{source:_extends({originalSource:"{\n  name: 'missing keys',\n  args: {\n    ...commonBarProps,\n    variant: 'stacked',\n    data: dataMissing,\n    horizontal: false,\n    scaleIndex: {\n      variant: 'band',\n      padding: 0.2\n    },\n    children: <Bars />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_MissingKeys$paramete2=MissingKeys.parameters)||null==(_MissingKeys$paramete3=_MissingKeys$paramete2.docs)?void 0:_MissingKeys$paramete3.source)})}),NullInternalPadding.parameters=_extends({},NullInternalPadding.parameters,{docs:_extends({},null==(_NullInternalPadding$=NullInternalPadding.parameters)?void 0:_NullInternalPadding$.docs,{source:_extends({originalSource:"{\n  name: 'null internal padding',\n  args: {\n    ...commonBarProps,\n    variant: 'layered',\n    data: dataMissing,\n    horizontal: false,\n    scaleIndex: {\n      variant: 'band',\n      padding: 0.2\n    },\n    children: <Bars />\n  },\n  decorators: [ChartDecorator]\n}"},null==(_NullInternalPadding$2=NullInternalPadding.parameters)||null==(_NullInternalPadding$3=_NullInternalPadding$2.docs)?void 0:_NullInternalPadding$3.source)})}),AutoRescaling.parameters=_extends({},AutoRescaling.parameters,{docs:_extends({},null==(_AutoRescaling$parame=AutoRescaling.parameters)?void 0:_AutoRescaling$parame.docs,{source:_extends({originalSource:"{\n  name: 'auto-rescaling',\n  args: {\n    ...commonBarProps,\n    variant: 'stacked',\n    data: dataMissing,\n    horizontal: false,\n    scaleIndex: {\n      variant: 'band',\n      padding: 0.2\n    },\n    autoRescale: true,\n    children: <BarsAndLegend />\n  },\n  decorators: [ChartWithLegendDecorator]\n}"},null==(_AutoRescaling$parame2=AutoRescaling.parameters)||null==(_AutoRescaling$parame3=_AutoRescaling$parame2.docs)?void 0:_AutoRescaling$parame3.source)})}),FixedScales.parameters=_extends({},FixedScales.parameters,{docs:_extends({},null==(_FixedScales$paramete=FixedScales.parameters)?void 0:_FixedScales$paramete.docs,{source:_extends({originalSource:"{\n  name: 'fixed scales',\n  args: {\n    ...commonBarProps,\n    variant: 'stacked',\n    data: dataMissing,\n    horizontal: false,\n    scaleIndex: {\n      variant: 'band',\n      padding: 0.2\n    },\n    autoRescale: false,\n    children: <BarsAndLegend />\n  },\n  decorators: [ChartWithLegendDecorator]\n}"},null==(_FixedScales$paramete2=FixedScales.parameters)||null==(_FixedScales$paramete3=_FixedScales$paramete2.docs)?void 0:_FixedScales$paramete3.source)})});var __namedExportsOrder=["VerticalGrouped","VerticalStacked","HorizontalGrouped","HorizontalStacked","LargeOuterPadding","LargeInnerPadding","LargeInternalPadding","ZeroInternalPadding","TwoKeys","SingleKey","EqualSpacing","FixedValueScale","ReorderedIds","CustomSpacing","LinearIndexScale","MissingKeys","NullInternalPadding","AutoRescaling","FixedScales"]},"./packages/band/stories/bars/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FF:()=>ChartBarH0S1Decorator,GN:()=>ChartHorizontalGroupedBarDecorator,MY:()=>commonBarProps,_Y:()=>ChartWithLegendDecorator,al:()=>ChartForBarsLabelsDecorator,gE:()=>onBarsClick,tD:()=>ChartHorizontalStackedBarDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/index.tsx"),_dataGroups_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/dataGroups.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonBarProps={data:_dataGroups_json__WEBPACK_IMPORTED_MODULE_2__,keys:["x","y","z"],scaleIndex:{variant:"band",domain:["alpha","beta","gamma"],padding:.2},scaleValue:{variant:"linear",domain:[0,"auto"]}},barsLabelsData=[{id:"alpha",value:85},{id:"beta",value:60},{id:"gamma",value:50},{id:"delta",value:25},{id:"epsilon",value:5}],ChartWithLegendDecorator=function ChartWithLegendDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,80,60],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartWithLegendDecorator.displayName="ChartWithLegendDecorator";var ChartBarH0S1Decorator=function ChartBarH0S1Decorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!1,variant:"stacked",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",label:"Values (a.u.)"}),Story()]}))})};ChartBarH0S1Decorator.displayName="ChartBarH0S1Decorator";var ChartHorizontalGroupedBarDecorator=function ChartHorizontalGroupedBarDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,240],padding:[60,60,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!0,variant:"grouped",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"top",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]}))})};ChartHorizontalGroupedBarDecorator.displayName="ChartHorizontalGroupedBarDecorator";var ChartHorizontalStackedBarDecorator=function ChartHorizontalStackedBarDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,240],padding:[60,60,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,_extends({},commonBarProps,{horizontal:!0,variant:"stacked",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"top",label:"Values (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"}),Story()]}))})};ChartHorizontalStackedBarDecorator.displayName="ChartHorizontalStackedBarDecorator";var ChartForBarsLabelsDecorator=function ChartForBarsLabelsDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,220],padding:[30,40,30,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_1__.$Q,{data:barsLabelsData,keys:["value"],horizontal:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.yAs,{variant:"left",tickSize:0})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Ll,{}),Story()]})})};ChartForBarsLabelsDecorator.displayName="ChartForBarsLabelsDecorator";var onBarsClick=function onBarsClick(data){console.log("clicked: "+JSON.stringify(data))};try{ChartWithLegendDecorator.displayName="ChartWithLegendDecorator",ChartWithLegendDecorator.__docgenInfo={description:"",displayName:"ChartWithLegendDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartWithLegendDecorator"]={docgenInfo:ChartWithLegendDecorator.__docgenInfo,name:"ChartWithLegendDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartWithLegendDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBarH0S1Decorator.displayName="ChartBarH0S1Decorator",ChartBarH0S1Decorator.__docgenInfo={description:"",displayName:"ChartBarH0S1Decorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartBarH0S1Decorator"]={docgenInfo:ChartBarH0S1Decorator.__docgenInfo,name:"ChartBarH0S1Decorator",path:"packages/band/stories/bars/decorators.tsx#ChartBarH0S1Decorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalGroupedBarDecorator.displayName="ChartHorizontalGroupedBarDecorator",ChartHorizontalGroupedBarDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalGroupedBarDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartHorizontalGroupedBarDecorator"]={docgenInfo:ChartHorizontalGroupedBarDecorator.__docgenInfo,name:"ChartHorizontalGroupedBarDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartHorizontalGroupedBarDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartHorizontalStackedBarDecorator.displayName="ChartHorizontalStackedBarDecorator",ChartHorizontalStackedBarDecorator.__docgenInfo={description:"",displayName:"ChartHorizontalStackedBarDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartHorizontalStackedBarDecorator"]={docgenInfo:ChartHorizontalStackedBarDecorator.__docgenInfo,name:"ChartHorizontalStackedBarDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartHorizontalStackedBarDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartForBarsLabelsDecorator.displayName="ChartForBarsLabelsDecorator",ChartForBarsLabelsDecorator.__docgenInfo={description:"",displayName:"ChartForBarsLabelsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#ChartForBarsLabelsDecorator"]={docgenInfo:ChartForBarsLabelsDecorator.__docgenInfo,name:"ChartForBarsLabelsDecorator",path:"packages/band/stories/bars/decorators.tsx#ChartForBarsLabelsDecorator"})}catch(__react_docgen_typescript_loader_error){}try{onBarsClick.displayName="onBarsClick",onBarsClick.__docgenInfo={description:"",displayName:"onBarsClick",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},key:{defaultValue:null,description:"",name:"key",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/bars/decorators.tsx#onBarsClick"]={docgenInfo:onBarsClick.__docgenInfo,name:"onBarsClick",path:"packages/band/stories/bars/decorators.tsx#onBarsClick"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ChartDecorator,A:()=>dataRawValues});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),generateUniformValues=function generateUniformValues(n,interval){var size=interval[1]-interval[0];return Array(n).fill(0).map((function(){return interval[0]+Math.random()*size}))},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var dataRawValues=[{id:"alpha",x:generateUniformValues(30,[0,10]).map((function(v){return(0,chsk_core_es.DJC)(v,4)})),y:generateUniformValues(30,[2,16]).map((function(v){return(0,chsk_core_es.DJC)(v,4)}))},{id:"beta",x:generateUniformValues(30,[5,15]).map((function(v){return(0,chsk_core_es.DJC)(v,4)})),y:generateUniformValues(30,[10,20]).map((function(v){return(0,chsk_core_es.DJC)(v,4)}))}];try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/band/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/stories/dataGroups.json":module=>{module.exports=JSON.parse('[{"id":"alpha","label":"alpha","x":55,"y":35,"z":10},{"id":"beta","label":"beta","x":35,"y":25,"z":15},{"id":"gamma","label":"gamma","x":15,"y":25,"z":35}]')}}]);