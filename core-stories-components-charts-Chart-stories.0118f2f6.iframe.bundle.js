"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[1823],{"./packages/core/stories/components/charts/Chart.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BaseTheme:()=>BaseTheme,CustomSize:()=>CustomSize,CustomTheme:()=>CustomTheme,Stretch:()=>Stretch,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _CustomSize$parameter,_CustomSize$parameter2,_Stretch$parameters,_Stretch$parameters2,_CustomTheme$paramete,_CustomTheme$paramete2,_BaseTheme$parameters,_BaseTheme$parameters2,_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/charts/Chart.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/views/Surface.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/themes/emptyTheme.ts"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/stories/components/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Charts/Chart",component:_src__WEBPACK_IMPORTED_MODULE_1__.k};var CustomSize={name:"custom size",args:{size:[400,200],padding:[20,20,20,20],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{variant:"inner"})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.z5]},Stretch={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"100%",height:"200px",border:"solid 1px #aaaa33",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.k,{size:[400,300],padding:[40,40,40,40],stretch:!0,stretchExpansion:[-1,-1],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{variant:"inner"})})})},name:"stretch"},CustomTheme={name:"custom theme",args:{id:"customTheme",size:[400,200],padding:[20,20,20,20],theme:{rect:{inner:{fill:"#ffdddd"}}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{variant:"inner"})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.z5]},BaseTheme={name:"base theme",args:{id:"emptyTheme",size:[400,200],padding:[20,20,20,20],baseTheme:_src__WEBPACK_IMPORTED_MODULE_4__.G,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.T,{variant:"inner"})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.z5]};CustomSize.parameters=_extends({},CustomSize.parameters,{docs:_extends({},null==(_CustomSize$parameter=CustomSize.parameters)?void 0:_CustomSize$parameter.docs,{source:_extends({originalSource:"{\n  name: 'custom size',\n  args: {\n    size: [400, 200],\n    padding: [20, 20, 20, 20],\n    children: <Surface variant={'inner'} />\n  },\n  decorators: [DivDecorator]\n}"},null==(_CustomSize$parameter2=CustomSize.parameters)||null==(_CustomSize$parameter2=_CustomSize$parameter2.docs)?void 0:_CustomSize$parameter2.source)})}),Stretch.parameters=_extends({},Stretch.parameters,{docs:_extends({},null==(_Stretch$parameters=Stretch.parameters)?void 0:_Stretch$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <div style={{\n    width: '100%',\n    height: '200px',\n    border: 'solid 1px #aaaa33',\n    display: 'inline-block'\n  }}>\n            <Chart size={[400, 300]} padding={[40, 40, 40, 40]} stretch={true} stretchExpansion={[-1, -1]}>\n                <Surface variant={'inner'} />\n            </Chart>\n        </div>,\n  name: 'stretch'\n}"},null==(_Stretch$parameters2=Stretch.parameters)||null==(_Stretch$parameters2=_Stretch$parameters2.docs)?void 0:_Stretch$parameters2.source)})}),CustomTheme.parameters=_extends({},CustomTheme.parameters,{docs:_extends({},null==(_CustomTheme$paramete=CustomTheme.parameters)?void 0:_CustomTheme$paramete.docs,{source:_extends({originalSource:"{\n  name: 'custom theme',\n  args: {\n    id: 'customTheme',\n    size: [400, 200],\n    padding: [20, 20, 20, 20],\n    theme: {\n      rect: {\n        inner: {\n          fill: '#ffdddd'\n        }\n      }\n    },\n    children: <Surface variant={'inner'} />\n  },\n  decorators: [DivDecorator]\n}"},null==(_CustomTheme$paramete2=CustomTheme.parameters)||null==(_CustomTheme$paramete2=_CustomTheme$paramete2.docs)?void 0:_CustomTheme$paramete2.source)})}),BaseTheme.parameters=_extends({},BaseTheme.parameters,{docs:_extends({},null==(_BaseTheme$parameters=BaseTheme.parameters)?void 0:_BaseTheme$parameters.docs,{source:_extends({originalSource:"{\n  name: 'base theme',\n  args: {\n    id: 'emptyTheme',\n    size: [400, 200],\n    padding: [20, 20, 20, 20],\n    baseTheme: emptyTheme,\n    children: <Surface variant={'inner'} />\n  },\n  decorators: [DivDecorator]\n}"},null==(_BaseTheme$parameters2=BaseTheme.parameters)||null==(_BaseTheme$parameters2=_BaseTheme$parameters2.docs)?void 0:_BaseTheme$parameters2.source)})});var __namedExportsOrder=["CustomSize","Stretch","CustomTheme","BaseTheme"]},"./packages/core/src/themes/emptyTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>emptyTheme});var emptyTheme={circle:{},g:{},line:{},path:{},polygon:{},rect:{},text:{},tspan:{},Axis:{},AxisLabel:{},AxisTicks:{},GridLines:{},Legend:{},LegendItemList:{},LegendItem:{},LegendTitle:{},LegendColorScale:{},LegendSizeScale:{},MilestoneMotion:{},Surface:{},Tooltip:{},TooltipItemList:{},TooltipItem:{},TooltipTitle:{},AxisTooltip:{},View:{},ViewClip:{},Color:__webpack_require__("./packages/core/src/themes/defaultTheme.ts").u.Color,Transition:{default:{},tooltip:{}},Target:{}}}}]);