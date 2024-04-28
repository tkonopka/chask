"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9937,7451],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/views/Grid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomHeights:()=>CustomHeights,CustomWidths:()=>CustomWidths,GridSize:()=>GridSize,Spacing:()=>Spacing,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _GridSize$parameters,_GridSize$parameters2,_Vertical$parameters,_Vertical$parameters2,_Spacing$parameters,_Spacing$parameters2,_CustomWidths$paramet,_CustomWidths$paramet2,_CustomHeights$parame,_CustomHeights$parame2,_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/views/Grid.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/stories/components/views/decorators.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/stories/components/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Core/Components/Views/Grid",component:_src__WEBPACK_IMPORTED_MODULE_1__.r};var GridSize={name:"grid size",args:{grid:[3,3],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_2__.Vt,{})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.Lh]},Vertical={name:"vertical",args:{grid:[3,3],variant:"vertical",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_2__.Vt,{})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.Lh]},Spacing={name:"spacing",args:{grid:[3,3],spacing:[10,20],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_2__.Vt,{})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.Lh]},CustomWidths={name:"custom widths",args:{grid:[3,3],widths:[3,2,1],spacing:[0,0],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_2__.Vt,{})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.Lh]},CustomHeights={name:"custom heights",args:{grid:[3,3],heights:[3,2,1],spacing:[8,8],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_decorators__WEBPACK_IMPORTED_MODULE_2__.Vt,{})},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_3__.Lh]};GridSize.parameters=_extends({},GridSize.parameters,{docs:_extends({},null==(_GridSize$parameters=GridSize.parameters)?void 0:_GridSize$parameters.docs,{source:_extends({originalSource:"{\n  name: 'grid size',\n  args: {\n    grid: [3, 3],\n    children: <GridFiller3x3 />\n  },\n  decorators: [ChartPlainDecorator]\n}"},null==(_GridSize$parameters2=GridSize.parameters)||null==(_GridSize$parameters2=_GridSize$parameters2.docs)?void 0:_GridSize$parameters2.source)})}),Vertical.parameters=_extends({},Vertical.parameters,{docs:_extends({},null==(_Vertical$parameters=Vertical.parameters)?void 0:_Vertical$parameters.docs,{source:_extends({originalSource:"{\n  name: 'vertical',\n  args: {\n    grid: [3, 3],\n    variant: 'vertical',\n    children: <GridFiller3x3 />\n  },\n  decorators: [ChartPlainDecorator]\n}"},null==(_Vertical$parameters2=Vertical.parameters)||null==(_Vertical$parameters2=_Vertical$parameters2.docs)?void 0:_Vertical$parameters2.source)})}),Spacing.parameters=_extends({},Spacing.parameters,{docs:_extends({},null==(_Spacing$parameters=Spacing.parameters)?void 0:_Spacing$parameters.docs,{source:_extends({originalSource:"{\n  name: 'spacing',\n  args: {\n    grid: [3, 3],\n    spacing: [10, 20],\n    children: <GridFiller3x3 />\n  },\n  decorators: [ChartPlainDecorator]\n}"},null==(_Spacing$parameters2=Spacing.parameters)||null==(_Spacing$parameters2=_Spacing$parameters2.docs)?void 0:_Spacing$parameters2.source)})}),CustomWidths.parameters=_extends({},CustomWidths.parameters,{docs:_extends({},null==(_CustomWidths$paramet=CustomWidths.parameters)?void 0:_CustomWidths$paramet.docs,{source:_extends({originalSource:"{\n  name: 'custom widths',\n  args: {\n    grid: [3, 3],\n    widths: [3, 2, 1],\n    spacing: [0, 0],\n    children: <GridFiller3x3 />\n  },\n  decorators: [ChartPlainDecorator]\n}"},null==(_CustomWidths$paramet2=CustomWidths.parameters)||null==(_CustomWidths$paramet2=_CustomWidths$paramet2.docs)?void 0:_CustomWidths$paramet2.source)})}),CustomHeights.parameters=_extends({},CustomHeights.parameters,{docs:_extends({},null==(_CustomHeights$parame=CustomHeights.parameters)?void 0:_CustomHeights$parame.docs,{source:_extends({originalSource:"{\n  name: 'custom heights',\n  args: {\n    grid: [3, 3],\n    heights: [3, 2, 1],\n    spacing: [8, 8],\n    children: <GridFiller3x3 />\n  },\n  decorators: [ChartPlainDecorator]\n}"},null==(_CustomHeights$parame2=CustomHeights.parameters)||null==(_CustomHeights$parame2=_CustomHeights$parame2.docs)?void 0:_CustomHeights$parame2.source)})});var __namedExportsOrder=["GridSize","Vertical","Spacing","CustomWidths","CustomHeights"]},"./packages/core/src/typography/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_general__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/utils.ts"),_general__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/general/constants.ts"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/themes/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["position","variant","initial","animate","exit","angle","size","padding","align","anchor","offset","style","className","setRole","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Label=function Label(_ref){var _ref$position=_ref.position,position=void 0===_ref$position?_general__WEBPACK_IMPORTED_MODULE_1__.rv:_ref$position,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"label":_ref$variant,initial=_ref.initial,animate=_ref.animate,exit=_ref.exit,angle=_ref.angle,_ref$size=_ref.size,size=void 0===_ref$size?[20,20]:_ref$size,_ref$padding=_ref.padding,padding=void 0===_ref$padding?_general__WEBPACK_IMPORTED_MODULE_1__.xe:_ref$padding,_ref$align=_ref.align,align=void 0===_ref$align?_general__WEBPACK_IMPORTED_MODULE_1__.WF:_ref$align,_ref$anchor=_ref.anchor,anchor=void 0===_ref$anchor?_general__WEBPACK_IMPORTED_MODULE_1__.WF:_ref$anchor,_ref$offset=_ref.offset,offset=void 0===_ref$offset?_general__WEBPACK_IMPORTED_MODULE_1__.rv:_ref$offset,style=_ref.style,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);if(void 0===children||""===children)return null;var corner=(0,_general__WEBPACK_IMPORTED_MODULE_2__.ji)(position,size,anchor),_getAlignPosition=(0,_general__WEBPACK_IMPORTED_MODULE_2__.ue)(corner,size,align,padding,offset),x=_getAlignPosition[0],y=_getAlignPosition[1],compositeClassName=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.gj)(variant,className),config={x,y,rotate:angle,originX:"0px",originY:"0px"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.text,_extends({role:setRole?variant:void 0,initial:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,initial),animate:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,animate),exit:(0,_general__WEBPACK_IMPORTED_MODULE_2__.$d)(config,exit),style:(0,_themes__WEBPACK_IMPORTED_MODULE_3__.dJ)(style,config),className:compositeClassName},props,{children}))};Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{position:{defaultValue:{value:"[0, 0]"},description:"position (absolute coordinates)\nposition",name:"position",required:!1,type:{name:"NumericPositionSpec"}},variant:{defaultValue:{value:"label"},description:"variant",name:"variant",required:!1,type:{name:"string"}},angle:{defaultValue:null,description:"rotation (degrees)",name:"angle",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},size:{defaultValue:{value:"[20, 20]"},description:"size of bounding container",name:"size",required:!1,type:{name:"SizeSpec"}},padding:{defaultValue:{value:"[0, 0, 0, 0]"},description:"space between container and label",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},anchor:{defaultValue:{value:"[0.5, 0.5]"},description:"position of anchor point relative to box size",name:"anchor",required:!1,type:{name:"AlignSpec"}},align:{defaultValue:{value:"[0.5, 0.5]"},description:"alignment of content within the bounding container",name:"align",required:!1,type:{name:"AlignSpec"}},offset:{defaultValue:{value:"[0, 0]"},description:"position offset added after anchoring and alignment",name:"offset",required:!1,type:{name:"NumericPositionSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/typography/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"packages/core/src/typography/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/src/views/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Grid});var _general__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/core/src/general/dimensions.tsx"),_general_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/constants.ts"),_defaults__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/views/defaults.ts"),_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/views/hooks.tsx"),_contexts__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/core/src/views/contexts.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Grid=function Grid(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"horizontal":_ref$variant,_ref$container=_ref.container,container=void 0===_ref$container?_defaults__WEBPACK_IMPORTED_MODULE_3__.Wd:_ref$container,_ref$grid=_ref.grid,grid=void 0===_ref$grid?[2,2]:_ref$grid,_ref$spacing=_ref.spacing,spacing=void 0===_ref$spacing?_general_constants__WEBPACK_IMPORTED_MODULE_2__.rv:_ref$spacing,widths=_ref.widths,heights=_ref.heights,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,className=_ref.className,style=_ref.style,children=_ref.children,_useContainer=(0,_hooks__WEBPACK_IMPORTED_MODULE_4__.u)(container),origin=_useContainer.origin,innerSize=_useContainer.innerSize,_useMemo=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function computeGrid(horizontal,innerSize,grid,spacing,widths,heights){var _widths,_heights;widths=null!=(_widths=widths)?_widths:Array(grid[_general_constants__WEBPACK_IMPORTED_MODULE_2__.X]).fill(1),heights=null!=(_heights=heights)?_heights:Array(grid[_general_constants__WEBPACK_IMPORTED_MODULE_2__.Y]).fill(1);var availableSize=[innerSize[_general_constants__WEBPACK_IMPORTED_MODULE_2__.X]-spacing[_general_constants__WEBPACK_IMPORTED_MODULE_2__.X]*(grid[_general_constants__WEBPACK_IMPORTED_MODULE_2__.X]-1),innerSize[_general_constants__WEBPACK_IMPORTED_MODULE_2__.Y]-spacing[_general_constants__WEBPACK_IMPORTED_MODULE_2__.Y]*(grid[_general_constants__WEBPACK_IMPORTED_MODULE_2__.Y]-1)],getBoundaries=function getBoundaries(lengths,spacing,size){var result=[],total=lengths.reduce((function(acc,v){return acc+v}),0),current=0;return lengths.forEach((function(v){result.push(current),current+=v/total*size,result.push(current),current+=spacing})),result},x=getBoundaries(widths,spacing[_general_constants__WEBPACK_IMPORTED_MODULE_2__.X],availableSize[_general_constants__WEBPACK_IMPORTED_MODULE_2__.X]),y=getBoundaries(heights,spacing[_general_constants__WEBPACK_IMPORTED_MODULE_2__.Y],availableSize[_general_constants__WEBPACK_IMPORTED_MODULE_2__.Y]),positions=[],sizes=[];return Array.from(Array(grid[_general_constants__WEBPACK_IMPORTED_MODULE_2__.X]*grid[_general_constants__WEBPACK_IMPORTED_MODULE_2__.Y]).keys()).map((function(i){var row,column;horizontal?column=i-(row=Math.floor(i/grid[_general_constants__WEBPACK_IMPORTED_MODULE_2__.X]))*grid[_general_constants__WEBPACK_IMPORTED_MODULE_2__.X]:row=i-(column=Math.floor(i/grid[_general_constants__WEBPACK_IMPORTED_MODULE_2__.Y]))*grid[_general_constants__WEBPACK_IMPORTED_MODULE_2__.Y],positions.push([Number(x[2*column]),Number(y[2*row])]),sizes.push([Number(x[2*column+1])-Number(x[2*column]),Number(y[2*row+1])-Number(y[2*row])])})),{positions,sizes}}("horizontal"===variant,innerSize,grid,spacing,widths,heights)}),[variant,innerSize,grid,spacing,widths,heights]),sizes=_useMemo.sizes,positions=_useMemo.positions;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{role:setRole?"grid":void 0,transform:(0,_general__WEBPACK_IMPORTED_MODULE_5__.R6)(origin[_general_constants__WEBPACK_IMPORTED_MODULE_2__.X],origin[_general_constants__WEBPACK_IMPORTED_MODULE_2__.Y]),style,className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_contexts__WEBPACK_IMPORTED_MODULE_6__.kc,{grid,variant,sizes,positions,children})})};Grid.displayName="Grid";try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{variant:{defaultValue:{value:"horizontal"},description:"variant, order of grid items in grid",name:"variant",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},container:{defaultValue:{value:"{\n    position: [0, 0],\n    positionUnits: 'relative',\n    size: [1, 1],\n    sizeUnits: 'relative',\n    anchor: [0, 0],\n    padding: [0, 0, 0, 0],\n    offset: [0, 0],\n}"},description:"location of grid",name:"container",required:!1,type:{name:"ContainerProps"}},grid:{defaultValue:{value:"[2, 2]"},description:"size of grid as [columns, rows]",name:"grid",required:!1,type:{name:"SizeSpec"}},spacing:{defaultValue:{value:"[0, 0]"},description:"spacing between rows and columns",name:"spacing",required:!1,type:{name:"SizeSpec"}},widths:{defaultValue:null,description:"relative widths of columns",name:"widths",required:!1,type:{name:"number[]"}},heights:{defaultValue:null,description:"relative heights of columns",name:"heights",required:!1,type:{name:"number[]"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/views/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"packages/core/src/views/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/src/views/GridItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>GridItem});var _general__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/general/constants.ts"),_general__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/general/predicates.ts"),_general__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/general/dimensions.tsx"),_general__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/core/src/general/contexts.tsx"),_contexts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/views/contexts.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),GridItem=function GridItem(_ref){var _grid$positions$Numbe,_grid$positions,_grid$sizes$Number,_grid$sizes,index=_ref.index,position=_ref.position,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,style=_ref.style,children=_ref.children,grid=(0,_contexts__WEBPACK_IMPORTED_MODULE_1__.Nm)();return void 0===index&&void 0!==position&&(index=[position[_general__WEBPACK_IMPORTED_MODULE_2__.Y],position[_general__WEBPACK_IMPORTED_MODULE_2__.X]]),(0,_general__WEBPACK_IMPORTED_MODULE_3__.kJ)(index)&&("horizontal"===grid.variant?index=index[_general__WEBPACK_IMPORTED_MODULE_2__.Y]+grid.grid[_general__WEBPACK_IMPORTED_MODULE_2__.Y]*index[_general__WEBPACK_IMPORTED_MODULE_2__.X]:"vertical"===grid.variant&&(index=index[_general__WEBPACK_IMPORTED_MODULE_2__.Y]*grid.grid[_general__WEBPACK_IMPORTED_MODULE_2__.X]+index[_general__WEBPACK_IMPORTED_MODULE_2__.X])),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g",{role:setRole?"grid-item":void 0,className,style,transform:(0,_general__WEBPACK_IMPORTED_MODULE_4__.R6)(null!=(_grid$positions$Numbe=null==(_grid$positions=grid.positions)?void 0:_grid$positions[Number(index)])?_grid$positions$Numbe:[0,0]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_general__WEBPACK_IMPORTED_MODULE_5__.iv,{size:null!=(_grid$sizes$Number=null==(_grid$sizes=grid.sizes)?void 0:_grid$sizes[Number(index)])?_grid$sizes$Number:[0,0],padding:_general__WEBPACK_IMPORTED_MODULE_2__.xe,role:"grid-item-content",children})})};GridItem.displayName="GridItem";try{GridItem.displayName="GridItem",GridItem.__docgenInfo={description:"",displayName:"GridItem",props:{position:{defaultValue:null,description:"position of item in grid as [column, row]",name:"position",required:!1,type:{name:"NumericPositionSpec"}},index:{defaultValue:null,description:"location of item in grid (overrides position)",name:"index",required:!1,type:{name:"number | NumericPositionSpec"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/views/GridItem.tsx#GridItem"]={docgenInfo:GridItem.__docgenInfo,name:"GridItem",path:"packages/core/src/views/GridItem.tsx#GridItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/views/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B1:()=>ChartWithGridDecorator,Pq:()=>ChartForControllerDecorator,Vt:()=>GridFiller3x3,iN:()=>ChartWithBandsForControllerDecorator,o2:()=>ChartWithTimeForControllerDecorator});var _src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/src/charts/Chart.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/src/views/View.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/src/views/Surface.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/src/axes/Axis.tsx"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/core/src/axes/AxisTicks.tsx"),_src__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/core/src/typography/Label.tsx"),_src_views__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/core/src/views/GridItem.tsx"),_src_views__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/core/src/views/Grid.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartForControllerDecorator=function ChartForControllerDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.k,{size:[400,300],padding:[60,80,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},theme:{g:{button:{cursor:"pointer"}}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.G,{scaleX:{variant:"linear",domain:[0,100],nice:!1},scaleY:{variant:"linear",domain:[0,100],nice:!0},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.T,{variant:"inner"},0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.R,{variant:"left"},1),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.R,{variant:"bottom"},2),Story()]})})};ChartForControllerDecorator.displayName="ChartForControllerDecorator";var ChartWithBandsForControllerDecorator=function ChartWithBandsForControllerDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.k,{size:[400,300],padding:[60,80,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},theme:{g:{button:{cursor:"pointer"}}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.G,{scaleX:{variant:"band",domain:["a","b","c","d","e","f","g","h"],nice:!1},scaleY:{variant:"linear",domain:[0,100],nice:!1},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.T,{variant:"inner"},0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.R,{variant:"left"},1),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.R,{variant:"bottom"},2),Story()]})})};ChartWithBandsForControllerDecorator.displayName="ChartWithBandsForControllerDecorator";var ChartWithTimeForControllerDecorator=function ChartWithTimeForControllerDecorator(Story){var now=Date.now();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.k,{size:[400,300],padding:[60,80,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},theme:{g:{button:{cursor:"pointer"}}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.G,{scaleX:{variant:"time",domain:[new Date(now-432e6),new Date(now)],nice:!1},scaleY:{variant:"log",domain:[1,1e4],nice:0},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.T,{variant:"inner"},0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.R,{variant:"left",ticks:4},1),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.R,{variant:"bottom",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__.y,{variant:"bottom",labelFormat:function dateString(v){var ymd=new Date(Number(v)).toISOString().split("T")[0];return ymd.slice(2,ymd.length)}})},2),Story()]})})};ChartWithTimeForControllerDecorator.displayName="ChartWithTimeForControllerDecorator";var GridFiller3x3=function GridFiller3x3(){var result=Array.from(Array(9).keys()).map((function(i){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_views__WEBPACK_IMPORTED_MODULE_6__.P,{index:i,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.T,{style:{stroke:"#222222",strokeWidth:1}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_7__._,{position:[0,0],size:[20,20],anchor:[0,0],align:[.5,.5],children:i})]},i)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:result})},ChartWithGridDecorator=function ChartWithGridDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.k,{size:[400,300],padding:[20,20,20,20],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_views__WEBPACK_IMPORTED_MODULE_8__.r,{grid:[3,3],children:Story()})})};ChartWithGridDecorator.displayName="ChartWithGridDecorator";try{ChartForControllerDecorator.displayName="ChartForControllerDecorator",ChartForControllerDecorator.__docgenInfo={description:"",displayName:"ChartForControllerDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/views/decorators.tsx#ChartForControllerDecorator"]={docgenInfo:ChartForControllerDecorator.__docgenInfo,name:"ChartForControllerDecorator",path:"packages/core/stories/components/views/decorators.tsx#ChartForControllerDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithBandsForControllerDecorator.displayName="ChartWithBandsForControllerDecorator",ChartWithBandsForControllerDecorator.__docgenInfo={description:"",displayName:"ChartWithBandsForControllerDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/views/decorators.tsx#ChartWithBandsForControllerDecorator"]={docgenInfo:ChartWithBandsForControllerDecorator.__docgenInfo,name:"ChartWithBandsForControllerDecorator",path:"packages/core/stories/components/views/decorators.tsx#ChartWithBandsForControllerDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithTimeForControllerDecorator.displayName="ChartWithTimeForControllerDecorator",ChartWithTimeForControllerDecorator.__docgenInfo={description:"",displayName:"ChartWithTimeForControllerDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/views/decorators.tsx#ChartWithTimeForControllerDecorator"]={docgenInfo:ChartWithTimeForControllerDecorator.__docgenInfo,name:"ChartWithTimeForControllerDecorator",path:"packages/core/stories/components/views/decorators.tsx#ChartWithTimeForControllerDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartWithGridDecorator.displayName="ChartWithGridDecorator",ChartWithGridDecorator.__docgenInfo={description:"",displayName:"ChartWithGridDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/views/decorators.tsx#ChartWithGridDecorator"]={docgenInfo:ChartWithGridDecorator.__docgenInfo,name:"ChartWithGridDecorator",path:"packages/core/stories/components/views/decorators.tsx#ChartWithGridDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/views/Grid.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Grid_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/views/Grid.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"grid",children:"Grid"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Grid_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Grid"})," is an organizational component.\nIt does not display any visual elements, but it conceptually splits the available chart space into a grid.\nChildren components can access this grid to position their content."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Grid_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"rows-and-columns",children:"Rows and columns"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"grid"})," accepts an array with integers representing the number of columns and rows in the grid."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The example below creates a 3x3 grid, and populates the cells with content to visualize the layout."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Grid_stories__WEBPACK_IMPORTED_MODULE_4__.GridSize}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," toggles between horizontal and vertical arrangements of cells within the grid.\nThe default layout is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"horizontal"}),", in which the cells are arranged from left-to right, then down a row, and so on\n(see examples above).\nThe alternative variant is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"vertical"}),", in which the cells are arranged going downward, then across."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Grid_stories__WEBPACK_IMPORTED_MODULE_4__.Vertical}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"spacing",children:"Spacing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"spacing"})," accepts an array with horizontal and vertical distances between columns and rows, respectively."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Grid_stories__WEBPACK_IMPORTED_MODULE_4__.Spacing}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"custom-item-dimensions",children:"Custom item dimensions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"widths"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"heights"})," tune the relative sizes of the columns and rows, respectively."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Grid_stories__WEBPACK_IMPORTED_MODULE_4__.CustomWidths}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Grid_stories__WEBPACK_IMPORTED_MODULE_4__.CustomHeights})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);