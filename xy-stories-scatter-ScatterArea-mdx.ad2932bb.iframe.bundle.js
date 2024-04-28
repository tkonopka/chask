"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9369,5753],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/xy/stories/scatter/ScatterArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Composite:()=>Composite,CssEffects:()=>CssEffects,CustomBaseline:()=>CustomBaseline,DefaultBaseline:()=>DefaultBaseline,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultBaseline$para,_DefaultBaseline$para2,_CustomBaseline$param,_CustomBaseline$param2,_Composite$parameters,_Composite$parameters2,_CssEffects$parameter,_CssEffects$parameter2,_chsk_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/xy/src/scatter/ScatterArea.tsx"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/xy/src/scatter/Scatter.tsx"),_src__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/xy/src/scatter/ScatterCurve.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/stories/scatter/decorators.tsx"),_generators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/xy/stories/scatter/generators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var dataWithInterval=[(0,_generators__WEBPACK_IMPORTED_MODULE_1__.H)("A",Array(16).fill(0).map((function(v,i){return i})),(function(x){return 1+.3*x+1.5*Math.random()}),[-.8,1])];const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/XY/Scatter/ScatterArea",component:_src__WEBPACK_IMPORTED_MODULE_2__.c};var DefaultBaseline={name:"default baseline",args:{ids:["quadratic"],curve:"Linear",style:{strokeWidth:0,fillOpacity:.5}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.WC]},CustomBaseline={name:"custom baseline",args:{ids:["quadratic"],curve:"Linear",baseline:30,style:{strokeWidth:0,fillOpacity:.5}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.WC]},Composite={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.kL2,{size:[500,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_5__.b,{data:dataWithInterval,x:"x",y:"y",valueSize:6,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.RDh,{variant:"left",label:"y (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.c,{ids:["A"],baseline:0,curve:"Natural",style:{fillOpacity:.1,strokeWidth:0}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_6__.n,{ids:["A"],curve:"Natural",style:{strokeWidth:3}})]})})},name:"composite"},CssEffects={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.kL2,{size:[500,300],padding:[40,40,60,60],style:{display:"inline-block"},theme:{path:{area:{fillOpacity:.1,strokeWidth:0},"area:hover":{fillOpacity:.3}}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_5__.b,{data:dataWithInterval,x:"x",y:"y",valueSize:6,scaleX:{variant:"linear",domain:[0,"auto"]},scaleY:{variant:"linear",domain:[0,"auto"]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.RDh,{variant:"bottom",label:"x (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.RDh,{variant:"left",label:"y (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.c,{ids:["A"],baseline:0,curve:"Natural",className:"area"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_6__.n,{ids:["A"],curve:"Natural",style:{strokeWidth:3}})]})})},name:"css effects"};DefaultBaseline.parameters=_extends({},DefaultBaseline.parameters,{docs:_extends({},null==(_DefaultBaseline$para=DefaultBaseline.parameters)?void 0:_DefaultBaseline$para.docs,{source:_extends({originalSource:"{\n  name: 'default baseline',\n  args: {\n    ids: ['quadratic'],\n    curve: 'Linear',\n    style: {\n      strokeWidth: 0,\n      fillOpacity: 0.5\n    }\n  },\n  decorators: [ChartScatterDecorator]\n}"},null==(_DefaultBaseline$para2=DefaultBaseline.parameters)||null==(_DefaultBaseline$para2=_DefaultBaseline$para2.docs)?void 0:_DefaultBaseline$para2.source)})}),CustomBaseline.parameters=_extends({},CustomBaseline.parameters,{docs:_extends({},null==(_CustomBaseline$param=CustomBaseline.parameters)?void 0:_CustomBaseline$param.docs,{source:_extends({originalSource:"{\n  name: 'custom baseline',\n  args: {\n    ids: ['quadratic'],\n    curve: 'Linear',\n    baseline: 30,\n    style: {\n      strokeWidth: 0,\n      fillOpacity: 0.5\n    }\n  },\n  decorators: [ChartScatterDecorator]\n}"},null==(_CustomBaseline$param2=CustomBaseline.parameters)||null==(_CustomBaseline$param2=_CustomBaseline$param2.docs)?void 0:_CustomBaseline$param2.source)})}),Composite.parameters=_extends({},Composite.parameters,{docs:_extends({},null==(_Composite$parameters=Composite.parameters)?void 0:_Composite$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[500, 300]} padding={[40, 40, 60, 60]} style={{\n    display: 'inline-block'\n  }}>\n            <Scatter data={dataWithInterval} x={'x'} y={'y'} valueSize={6} scaleX={{\n      variant: 'linear',\n      domain: [0, 'auto']\n    }} scaleY={{\n      variant: 'linear',\n      domain: [0, 'auto']\n    }}>\n                <Axis variant={'bottom'} label={'x (a.u.)'} />\n                <Axis variant={'left'} label={'y (a.u.)'} />\n                <GridLines variant={'y'} />\n                <ScatterArea ids={['A']} baseline={0} curve=\"Natural\" style={{\n        fillOpacity: 0.1,\n        strokeWidth: 0\n      }} />\n                <ScatterCurve ids={['A']} curve=\"Natural\" style={{\n        strokeWidth: 3\n      }} />\n            </Scatter>\n        </Chart>,\n  name: 'composite'\n}"},null==(_Composite$parameters2=Composite.parameters)||null==(_Composite$parameters2=_Composite$parameters2.docs)?void 0:_Composite$parameters2.source)})}),CssEffects.parameters=_extends({},CssEffects.parameters,{docs:_extends({},null==(_CssEffects$parameter=CssEffects.parameters)?void 0:_CssEffects$parameter.docs,{source:_extends({originalSource:"{\n  render: () => <Chart size={[500, 300]} padding={[40, 40, 60, 60]} style={{\n    display: 'inline-block'\n  }} theme={{\n    path: {\n      area: {\n        fillOpacity: 0.1,\n        strokeWidth: 0\n      },\n      'area:hover': {\n        fillOpacity: 0.3\n      }\n    }\n  }}>\n            <Scatter data={dataWithInterval} x={'x'} y={'y'} valueSize={6} scaleX={{\n      variant: 'linear',\n      domain: [0, 'auto']\n    }} scaleY={{\n      variant: 'linear',\n      domain: [0, 'auto']\n    }}>\n                <Axis variant={'bottom'} label={'x (a.u.)'} />\n                <Axis variant={'left'} label={'y (a.u.)'} />\n                <GridLines variant={'y'} />\n                <ScatterArea ids={['A']} baseline={0} curve=\"Natural\" className=\"area\" />\n                <ScatterCurve ids={['A']} curve=\"Natural\" style={{\n        strokeWidth: 3\n      }} />\n            </Scatter>\n        </Chart>,\n  name: 'css effects'\n}"},null==(_CssEffects$parameter2=CssEffects.parameters)||null==(_CssEffects$parameter2=_CssEffects$parameter2.docs)?void 0:_CssEffects$parameter2.source)})});var __namedExportsOrder=["DefaultBaseline","CustomBaseline","Composite","CssEffects"]},"./packages/xy/src/scatter/ScatterArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>ScatterArea,f:()=>getAreaD});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/xy/src/scatter/context.tsx"),_signals__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/src/scatter/signals.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","baseline","curve","convolutionMask","convolutionOffset","downsampleFactor","downsampleIndex","style","className","setRole","dataComponent"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var getAreaD=function getAreaD(_ref){var _generator,points=_ref.points,scaleY=_ref.scaleY,baseline=_ref.baseline,curve=_ref.curve,base=scaleY(null!=baseline?baseline:Number(scaleY.domain()[0])),pointIntervals=points.map((function(d){return[d[0],d[1],base]}));return null!=(_generator=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.DmD)(curve)(pointIntervals))?_generator:""},ScatterArea=function ScatterArea(_ref2){var ids=_ref2.ids,baseline=_ref2.baseline,_ref2$curve=_ref2.curve,curve=void 0===_ref2$curve?"Linear":_ref2$curve,convolutionMask=_ref2.convolutionMask,convolutionOffset=_ref2.convolutionOffset,downsampleFactor=_ref2.downsampleFactor,downsampleIndex=_ref2.downsampleIndex,style=_ref2.style,className=_ref2.className,_ref2$setRole=_ref2.setRole,setRole=void 0===_ref2$setRole||_ref2$setRole,_ref2$dataComponent=_ref2.dataComponent,dataComponent=void 0===_ref2$dataComponent?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.Aj5:_ref2$dataComponent,pathProps=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref2,_excluded),preparedData=(0,_context__WEBPACK_IMPORTED_MODULE_3__.DP)(),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.kE1)().scales,scaleY=scales.y,colorScale=scales.color,_useDisabledKeys=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gKR)(),disabledKeys=_useDisabledKeys.disabledKeys,firstRender=_useDisabledKeys.firstRender;if(!(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.z0X)(scaleY))return null;var areas={};preparedData.keys.forEach((function(id){var seriesIndex=preparedData.seriesIndexes[id];if(void 0!==seriesIndex){var seriesData=preparedData.data[seriesIndex];areas[id]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){var _seriesData$x,_seriesData$y;return getAreaD({points:(0,_signals__WEBPACK_IMPORTED_MODULE_4__.ee)({x:null!=(_seriesData$x=null==seriesData?void 0:seriesData.x)?_seriesData$x:[],y:null!=(_seriesData$y=null==seriesData?void 0:seriesData.y)?_seriesData$y:[],convolutionMask,convolutionOffset,downsampleFactor,downsampleIndex}),curve,scaleY,baseline})}),[seriesIndex,preparedData,curve,scaleY,baseline,convolutionMask,convolutionOffset,downsampleFactor,downsampleIndex])}}));var result=(null!=ids?ids:preparedData.keys).map((function(id){var visible=!disabledKeys.has(id),seriesIndex=preparedData.seriesIndexes[id];if(void 0===seriesIndex)return null;var seriesStyle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.hIX)(style,colorScale(seriesIndex)),element=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(dataComponent,_extends({data:{id},component:_chsk_core__WEBPACK_IMPORTED_MODULE_2__.y$t,props:{variant:"scatter-area",d:areas[id],setRole,style:seriesStyle,className}},pathProps));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_2__.JjT,{role:setRole?"scatter-area-presence":void 0,visible,firstRender,children:element},"area-"+seriesIndex)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:result.filter(Boolean)})};try{getAreaD.displayName="getAreaD",getAreaD.__docgenInfo={description:"",displayName:"getAreaD",props:{points:{defaultValue:null,description:"",name:"points",required:!0,type:{name:"NumericPositionSpec[]"}},scaleY:{defaultValue:null,description:"",name:"scaleY",required:!0,type:{name:"ContinuousAxisScale"}},baseline:{defaultValue:null,description:"",name:"baseline",required:!1,type:{name:"number"}},curve:{defaultValue:{value:"Linear"},description:"",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/scatter/ScatterArea.tsx#getAreaD"]={docgenInfo:getAreaD.__docgenInfo,name:"getAreaD",path:"packages/xy/src/scatter/ScatterArea.tsx#getAreaD"})}catch(__react_docgen_typescript_loader_error){}try{ScatterArea.displayName="ScatterArea",ScatterArea.__docgenInfo={description:"",displayName:"ScatterArea",props:{baseline:{defaultValue:null,description:"base for the area polygon",name:"baseline",required:!1,type:{name:"number"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},curve:{defaultValue:{value:"Linear"},description:"curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<ScatterInteractiveDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<ScatterInteractiveDataItem, PathProps>>"}},component:{defaultValue:null,description:"function used to draw individual components",name:"component",required:!1,type:{name:"FC<PathProps>"}},componentProps:{defaultValue:null,description:"props passed to each component",name:"componentProps",required:!1,type:{name:"Partial<PathProps>"}},convolutionMask:{defaultValue:null,description:"convolution mask",name:"convolutionMask",required:!1,type:{name:"number[]"}},convolutionOffset:{defaultValue:null,description:"offset used during convolution",name:"convolutionOffset",required:!1,type:{name:"number"}},downsampleFactor:{defaultValue:null,description:"down-sampling factor [0, 1]",name:"downsampleFactor",required:!1,type:{name:"number"}},downsampleIndex:{defaultValue:null,description:"offset used during down-sampling",name:"downsampleIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/xy/src/scatter/ScatterArea.tsx#ScatterArea"]={docgenInfo:ScatterArea.__docgenInfo,name:"ScatterArea",path:"packages/xy/src/scatter/ScatterArea.tsx#ScatterArea"})}catch(__react_docgen_typescript_loader_error){}},"./packages/xy/stories/scatter/ScatterArea.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ScatterArea_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/xy/stories/scatter/ScatterArea.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"scatterarea",children:"ScatterArea"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_ScatterArea_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterArea"})," draws a polygon bounded by a series and a constant baseline."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_ScatterArea_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"baseline",children:"Baseline"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"baseline"})," determines the vertical extent of the curve"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ScatterArea_stories__WEBPACK_IMPORTED_MODULE_4__.DefaultBaseline}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ScatterArea_stories__WEBPACK_IMPORTED_MODULE_4__.CustomBaseline}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"layering",children:"Layering"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterArea"})," component is often used together with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ScatterCurve"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ScatterArea_stories__WEBPACK_IMPORTED_MODULE_4__.Composite}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-effects",children:"Css effects"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Some visual interactivity can be achieved with css style classes, applied via the chart theme."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ScatterArea_stories__WEBPACK_IMPORTED_MODULE_4__.CssEffects}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This technique applies to all components, but can be particularly visible with component with large surface area."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["For another approach to provide interactivity, see the mouse event props, for example ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"onMouseEnter"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"onMouseLeave"}),"."]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);