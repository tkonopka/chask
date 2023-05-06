"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9686,6706],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/themes/stories/partial/partial.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoxedView:()=>BoxedView,FaintTicks:()=>FaintTicks,FontSystemUi:()=>FontSystemUi,InverseGrid:()=>InverseGrid,SmallAxisText:()=>SmallAxisText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _BoxedView$parameters,_BoxedView$parameters2,_BoxedView$parameters3,_FaintTicks$parameter,_FaintTicks$parameter2,_FaintTicks$parameter3,_FontSystemUi$paramet,_FontSystemUi$paramet2,_FontSystemUi$paramet3,_InverseGrid$paramete,_InverseGrid$paramete2,_InverseGrid$paramete3,_SmallAxisText$parame,_SmallAxisText$parame2,_SmallAxisText$parame3,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/themes/src/index.ts"),_ThemeController__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/themes/stories/ThemeController.tsx"),_complete_ThemeScatterChart__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/themes/stories/complete/ThemeScatterChart.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Themes/Partial themes"};var BoxedView={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ThemeController__WEBPACK_IMPORTED_MODULE_1__.u,{chart:_complete_ThemeScatterChart__WEBPACK_IMPORTED_MODULE_2__.S,chartId:"chartBoxed",themes:{boxedViewTheme:_src__WEBPACK_IMPORTED_MODULE_0__.Ss,defaultTheme:_src__WEBPACK_IMPORTED_MODULE_0__.uH}})},name:"boxed view"},FaintTicks={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ThemeController__WEBPACK_IMPORTED_MODULE_1__.u,{chart:_complete_ThemeScatterChart__WEBPACK_IMPORTED_MODULE_2__.S,chartId:"pieceFaintTicks",themes:{faintTicksTheme:_src__WEBPACK_IMPORTED_MODULE_0__.bh,defaultTheme:_src__WEBPACK_IMPORTED_MODULE_0__.uH}})},name:"faint ticks"},FontSystemUi={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ThemeController__WEBPACK_IMPORTED_MODULE_1__.u,{chart:_complete_ThemeScatterChart__WEBPACK_IMPORTED_MODULE_2__.S,chartId:"pieceFontSystemUI",themes:{fontSystemUITheme:_src__WEBPACK_IMPORTED_MODULE_0__.f8,defaultTheme:_src__WEBPACK_IMPORTED_MODULE_0__.uH}})},name:"font system-ui"},InverseGrid={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ThemeController__WEBPACK_IMPORTED_MODULE_1__.u,{chart:_complete_ThemeScatterChart__WEBPACK_IMPORTED_MODULE_2__.S,chartId:"chartInverseGrid",themes:{inverseGridTheme:_src__WEBPACK_IMPORTED_MODULE_0__.oh,defaultTheme:_src__WEBPACK_IMPORTED_MODULE_0__.uH}})},name:"inverse grid"},SmallAxisText={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ThemeController__WEBPACK_IMPORTED_MODULE_1__.u,{chart:_complete_ThemeScatterChart__WEBPACK_IMPORTED_MODULE_2__.S,chartId:"pieceSmallAxisText",themes:{smallAxisTextTheme:_src__WEBPACK_IMPORTED_MODULE_0__.t7,defaultTheme:_src__WEBPACK_IMPORTED_MODULE_0__.uH}})},name:"small axis text"};BoxedView.parameters=_extends({},BoxedView.parameters,{docs:_extends({},null==(_BoxedView$parameters=BoxedView.parameters)?void 0:_BoxedView$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <ThemeController chart={ThemeScatterChart} chartId={'chartBoxed'} themes={{\n    boxedViewTheme,\n    defaultTheme\n  }} />,\n  name: 'boxed view'\n}"},null==(_BoxedView$parameters2=BoxedView.parameters)||null==(_BoxedView$parameters3=_BoxedView$parameters2.docs)?void 0:_BoxedView$parameters3.source)})}),FaintTicks.parameters=_extends({},FaintTicks.parameters,{docs:_extends({},null==(_FaintTicks$parameter=FaintTicks.parameters)?void 0:_FaintTicks$parameter.docs,{source:_extends({originalSource:"{\n  render: () => <ThemeController chart={ThemeScatterChart} chartId={'pieceFaintTicks'} themes={{\n    faintTicksTheme,\n    defaultTheme\n  }} />,\n  name: 'faint ticks'\n}"},null==(_FaintTicks$parameter2=FaintTicks.parameters)||null==(_FaintTicks$parameter3=_FaintTicks$parameter2.docs)?void 0:_FaintTicks$parameter3.source)})}),FontSystemUi.parameters=_extends({},FontSystemUi.parameters,{docs:_extends({},null==(_FontSystemUi$paramet=FontSystemUi.parameters)?void 0:_FontSystemUi$paramet.docs,{source:_extends({originalSource:"{\n  render: () => <ThemeController chart={ThemeScatterChart} chartId={'pieceFontSystemUI'} themes={{\n    fontSystemUITheme,\n    defaultTheme\n  }} />,\n  name: 'font system-ui'\n}"},null==(_FontSystemUi$paramet2=FontSystemUi.parameters)||null==(_FontSystemUi$paramet3=_FontSystemUi$paramet2.docs)?void 0:_FontSystemUi$paramet3.source)})}),InverseGrid.parameters=_extends({},InverseGrid.parameters,{docs:_extends({},null==(_InverseGrid$paramete=InverseGrid.parameters)?void 0:_InverseGrid$paramete.docs,{source:_extends({originalSource:"{\n  render: () => <ThemeController chart={ThemeScatterChart} chartId={'chartInverseGrid'} themes={{\n    inverseGridTheme,\n    defaultTheme\n  }} />,\n  name: 'inverse grid'\n}"},null==(_InverseGrid$paramete2=InverseGrid.parameters)||null==(_InverseGrid$paramete3=_InverseGrid$paramete2.docs)?void 0:_InverseGrid$paramete3.source)})}),SmallAxisText.parameters=_extends({},SmallAxisText.parameters,{docs:_extends({},null==(_SmallAxisText$parame=SmallAxisText.parameters)?void 0:_SmallAxisText$parame.docs,{source:_extends({originalSource:"{\n  render: () => <ThemeController chart={ThemeScatterChart} chartId={'pieceSmallAxisText'} themes={{\n    smallAxisTextTheme,\n    defaultTheme\n  }} />,\n  name: 'small axis text'\n}"},null==(_SmallAxisText$parame2=SmallAxisText.parameters)||null==(_SmallAxisText$parame3=_SmallAxisText$parame2.docs)?void 0:_SmallAxisText$parame3.source)})});var __namedExportsOrder=["BoxedView","FaintTicks","FontSystemUi","InverseGrid","SmallAxisText"]},"./packages/themes/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ss:()=>boxedViewTheme,Ee:()=>buttonTheme,uH:()=>complete.uH,bh:()=>faintTicksTheme,f8:()=>fontSystemUITheme,oh:()=>inverseGridTheme,t7:()=>smallAxisTextTheme,JR:()=>tooltipItemLabelValueTheme});var complete=__webpack_require__("./packages/themes/src/complete/index.ts"),boxedViewTheme={line:{tick:{stroke:"#222222",strokeWidth:1}},rect:{inner:{stroke:"#222222",strokeWidth:"1px"}},Axis:{top:{distance:10},right:{distance:10},bottom:{distance:10},left:{distance:10}},AxisLabel:{bottom:{distance:36},left:{distance:46}},Surface:{inner:{expansion:[10,10,10,10]}}},faintTicksTheme={text:{tickLabel:{fill:"#777777"}},line:{tick:{stroke:"#666666",strokeWidth:1}}},fontSystemUITheme={text:{default:{fontFamily:"system-ui"}}},inverseGridTheme={line:{grid:{stroke:"#ffffff",strokeWidth:2}},rect:{inner:{fill:"#f0f0f0"}}},chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),smallAxisTextTheme={text:{axisLabel:{fontSize:"10px"},tickLabel:{fontSize:"10px"}},AxisLabel:{top:{distance:chsk_core_es.txD.distance-5},bottom:{distance:chsk_core_es.jNX.distance-5},left:{distance:chsk_core_es.QCr.distance-5},right:{distance:chsk_core_es.wPC.distance-5}},AxisTicks:{top:{labelDistance:chsk_core_es.Gj2.labelDistance-1},bottom:{labelDistance:chsk_core_es.Gj2.labelDistance-1},left:{labelDistance:chsk_core_es.Gj2.labelDistance-1},right:{labelDistance:chsk_core_es.Gj2.labelDistance-1}}},buttonTheme={text:{button:{dominantBaseline:"central",fill:"#555555",fontFamily:"sans-serif",fontSize:"11px",textAnchor:"start"}},path:{button:{cursor:"pointer",strokeWidth:0,fill:"#555555",fillOpacity:1,pointerEvents:"none"}},rect:{button:{cursor:"pointer"},"button.bg":{fill:"#eeeeee",fillOpacity:0},"button.bg:hover":{fillOpacity:1},"button.bg.selected":{fill:"#dddddd",fillOpacity:.7},"button.bg.selected:hover":{fillOpacity:1}}},tooltipItemLabelValueTheme={text:{"tooltipItem.label":{textAnchor:"start",dominantBaseline:"central"},"tooltipItem.value":{textAnchor:"start",fontWeight:600,dominantBaseline:"central"}}}},"./packages/themes/stories/complete/ThemeScatterChart.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>ThemeScatterChart});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_chsk_xy__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/xy/dist/chsk-xy.es.js"),_ThemeController__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/themes/stories/ThemeController.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var regressionStyle={strokeWidth:2,stroke:"#444444",strokeDasharray:"9 11",strokeLinecap:"round"},data=[{id:"A",data:[{x:1,y:1},{x:1.5,y:2.5},{x:2,y:2.5},{x:2.5,y:3},{x:3,y:2},{x:4,y:2.5},{x:5,y:3},{x:4.5,y:3.5}]}],ThemeScatterChart=function ThemeScatterChart(_ref){var chartId=_ref.chartId,theme=_ref.theme,baseTheme=_ref.baseTheme;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kL2,_extends({id:chartId},_ThemeController__WEBPACK_IMPORTED_MODULE_2__.y,{theme:null!=theme?theme:void 0,baseTheme:null!=baseTheme?baseTheme:void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"outer"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_xy__WEBPACK_IMPORTED_MODULE_1__.bp,{data,x:"x",y:"y",valueSize:4,scaleX:{variant:"linear",domain:[0,6],nice:!1},scaleY:{variant:"linear",domain:[0,4.5]},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"x"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.VJA,{variant:"y"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"bottom",label:"Covariate (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.kpH,{variant:"left",children:"Measurement (a.u.)"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_0__.yAs,{variant:"left"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_xy__WEBPACK_IMPORTED_MODULE_1__.cG,{ids:["A"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_xy__WEBPACK_IMPORTED_MODULE_1__.FX,{ids:["A"],variant:"series",style:regressionStyle})]})]}))};ThemeScatterChart.displayName="ThemeScatterChart";try{ThemeScatterChart.displayName="ThemeScatterChart",ThemeScatterChart.__docgenInfo={description:"",displayName:"ThemeScatterChart",props:{chartId:{defaultValue:null,description:"id for chart",name:"chartId",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"theme",name:"theme",required:!0,type:{name:"ThemeSpec | null"}},baseTheme:{defaultValue:null,description:"base theme",name:"baseTheme",required:!1,type:{name:"CompleteThemeSpec | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/themes/stories/complete/ThemeScatterChart.tsx#ThemeScatterChart"]={docgenInfo:ThemeScatterChart.__docgenInfo,name:"ThemeScatterChart",path:"packages/themes/stories/complete/ThemeScatterChart.tsx#ThemeScatterChart"})}catch(__react_docgen_typescript_loader_error){}},"./packages/themes/stories/partial/partial.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_partial_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/themes/stories/partial/partial.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_partial_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"partial-themes",children:"Partial themes"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Partial themes are objects that satisfy typescript type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ThemeSpec"})," from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@chsk/core"}),".\nThese objects can be passed to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"theme"})," prop of a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Chart"})," component.\nThey can also be extended and augmented using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mergeTheme"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"mergeThemes"})," utilities."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The sections below showcase partial themes in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@chsk/themes"}),".\nFor simplicity of presentation, these sections are named after the theme objects and are arranged alphabetically."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"boxedviewtheme",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"boxedViewTheme"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The boxed theme is characterized by axes that are offset slightly from the edges of the view.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Surface"})," components create a bounding box around a view."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_partial_stories__WEBPACK_IMPORTED_MODULE_2__.BoxedView}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"fainttickstheme",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"faintTicksTheme"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"faintTicksTheme"})," sets colors and line widths to de-emphasize ticks on the axes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_partial_stories__WEBPACK_IMPORTED_MODULE_2__.FaintTicks}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"fontsystemuitheme",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"fontSystemUITheme"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"fontSystemUITheme"})," changes the default font style to 'system-ui'."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_partial_stories__WEBPACK_IMPORTED_MODULE_2__.FontSystemUi}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"inversegridtheme",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"inverseGridTheme"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The inverse grid theme is characterized by white grid lines."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_partial_stories__WEBPACK_IMPORTED_MODULE_2__.InverseGrid}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"smallaxistexttheme",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"smallAxisTextTheme"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"smallAxisTextTheme"})," sets the font size for axis labels and axis ticks to '10px'"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{of:_partial_stories__WEBPACK_IMPORTED_MODULE_2__.SmallAxisText})]})}}}}]);