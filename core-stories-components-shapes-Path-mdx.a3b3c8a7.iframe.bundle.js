"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[1534,6066],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/core/stories/components/shapes/Path.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasisClosed:()=>BasisClosed,CardinalClosed:()=>CardinalClosed,CatmullRomClosed:()=>CatmullRomClosed,ClosedFilled:()=>ClosedFilled,Linear:()=>Linear,LinearClosed:()=>LinearClosed,MonotoneX:()=>MonotoneX,Natural:()=>Natural,OpenFilled:()=>OpenFilled,Step:()=>Step,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Path_stories});var motion_minimal=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),utils=__webpack_require__("./packages/core/src/themes/utils.ts"),general_utils=__webpack_require__("./packages/core/src/general/utils.ts"),linear=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),monotone=__webpack_require__("./node_modules/d3-shape/src/curve/monotone.js"),natural=__webpack_require__("./node_modules/d3-shape/src/curve/natural.js"),step=__webpack_require__("./node_modules/d3-shape/src/curve/step.js"),basisOpen=__webpack_require__("./node_modules/d3-shape/src/curve/basisOpen.js"),cardinalOpen=__webpack_require__("./node_modules/d3-shape/src/curve/cardinalOpen.js"),catmullRomOpen=__webpack_require__("./node_modules/d3-shape/src/curve/catmullRomOpen.js"),basisClosed=__webpack_require__("./node_modules/d3-shape/src/curve/basisClosed.js"),cardinalClosed=__webpack_require__("./node_modules/d3-shape/src/curve/cardinalClosed.js"),catmullRomClosed=__webpack_require__("./node_modules/d3-shape/src/curve/catmullRomClosed.js"),linearClosed=__webpack_require__("./node_modules/d3-shape/src/curve/linearClosed.js"),line=__webpack_require__("./node_modules/d3-shape/src/line.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var pointCurves={Linear:linear.Z,MonotoneX:monotone.Z,MonotoneY:monotone.s,Natural:natural.Z,Step:step.ZP,StepAfter:step.cD,StepBefore:step.RN},openCurves={BasisOpen:basisOpen.Z,CardinalOpen:cardinalOpen.Z,CatmullRomOpen:catmullRomOpen.Z},allCurves=_extends({},{BasisClosed:basisClosed.Z,CardinalClosed:cardinalClosed.Z,CatmullRomClosed:catmullRomClosed.Z,LinearClosed:linearClosed.Z},openCurves,pointCurves),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","initial","animate","exit","points","curve","d","closed","markerStart","markerEnd","className","setRole"];function Path_extends(){return Path_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Path_extends.apply(this,arguments)}var Path=function Path(_ref){var _path,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,initial=_ref.initial,animate=_ref.animate,exit=_ref.exit,points=_ref.points,_ref$curve=_ref.curve,curve=void 0===_ref$curve?"Linear":_ref$curve,d=_ref.d,closed=_ref.closed,markerStart=_ref.markerStart,markerEnd=_ref.markerEnd,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),compositeClassName=(0,utils.gj)(variant,className),generator=(0,react.useMemo)((function(){return function createLineGenerator(curve){var _allCurves$curve;return(0,line.Z)().defined((function(d){return null!==d[0]&&null!==d[1]})).curve(null!=(_allCurves$curve=allCurves[curve])?_allCurves$curve:linear.Z)}(curve)}),[curve]),path=null!=d?d:generator(null!=points?points:[]);closed&&path&&!path.endsWith("z")&&!path.endsWith("Z")&&(path+="Z");var config={d:null!=(_path=path)?_path:void 0};return(0,jsx_runtime.jsx)(motion_minimal.m.path,Path_extends({initial:(0,general_utils.$d)(config,initial),animate:(0,general_utils.$d)(config,animate),exit:(0,general_utils.$d)(config,exit),markerStart:markerStart?"url(#"+markerStart+")":void 0,markerEnd:markerEnd?"url(#"+markerEnd+")":void 0,role:setRole&&"default"!==variant?variant:void 0,className:compositeClassName},props))};Path.displayName="Path";try{Path.displayName="Path",Path.__docgenInfo={description:"",displayName:"Path",props:{variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},points:{defaultValue:null,description:"array of coordinates",name:"points",required:!1,type:{name:"NumericPositionSpec[]"}},curve:{defaultValue:{value:"Linear"},description:"curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}},d:{defaultValue:null,description:"path d argument (supersedes points and curve)",name:"d",required:!1,type:{name:"string"}},closed:{defaultValue:null,description:"closed path",name:"closed",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},markerStart:{defaultValue:null,description:"identifier for start marker",name:"markerStart",required:!1,type:{name:"string"}},markerEnd:{defaultValue:null,description:"identifier for end marker",name:"markerEnd",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/src/shapes/Path.tsx#Path"]={docgenInfo:Path.__docgenInfo,name:"Path",path:"packages/core/src/shapes/Path.tsx#Path"})}catch(__react_docgen_typescript_loader_error){}var _Linear$parameters,_Linear$parameters2,_Linear$parameters2$d,_Natural$parameters,_Natural$parameters2,_Natural$parameters2$,_MonotoneX$parameters,_MonotoneX$parameters2,_MonotoneX$parameters3,_Step$parameters,_Step$parameters2,_Step$parameters2$doc,_LinearClosed$paramet,_LinearClosed$paramet2,_LinearClosed$paramet3,_BasisClosed$paramete,_BasisClosed$paramete2,_BasisClosed$paramete3,_CardinalClosed$param,_CardinalClosed$param2,_CardinalClosed$param3,_CatmullRomClosed$par,_CatmullRomClosed$par2,_CatmullRomClosed$par3,_OpenFilled$parameter,_OpenFilled$parameter2,_OpenFilled$parameter3,_ClosedFilled$paramet,_ClosedFilled$paramet2,_ClosedFilled$paramet3,decorators=__webpack_require__("./packages/core/stories/components/decorators.tsx");function Path_stories_extends(){return Path_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Path_stories_extends.apply(this,arguments)}const Path_stories={title:"Core/Components/Shapes/Path",component:Path};var openCurve=[[0,200],[80,180],[160,50],[240,90],[320,20]],closedCurve=[[50,120],[140,50],[270,90],[200,190],[100,100]],Linear={name:"linear",args:{points:openCurve,curve:"Linear",style:{stroke:"#993333",fillOpacity:0}},decorators:[decorators.ee]},Natural={name:"natural",args:{points:openCurve,curve:"Natural",style:{stroke:"#993333",fillOpacity:0}},decorators:[decorators.ee]},MonotoneX={name:"monotoneX",args:{points:openCurve,curve:"MonotoneX",style:{stroke:"#993333",fillOpacity:0}},decorators:[decorators.ee]},Step={name:"step",args:{points:openCurve,curve:"Step",style:{stroke:"#993333",fillOpacity:0}},decorators:[decorators.ee]},LinearClosed={name:"linear closed",args:{points:closedCurve,curve:"LinearClosed",style:{stroke:"#993333",fillOpacity:0}},decorators:[decorators.ee]},BasisClosed={name:"basis closed",args:{points:closedCurve,curve:"BasisClosed",style:{stroke:"#993333",fillOpacity:0}},decorators:[decorators.ee]},CardinalClosed={name:"cardinal closed",args:{points:closedCurve,curve:"CardinalClosed",style:{stroke:"#993333",fillOpacity:0}},decorators:[decorators.ee]},CatmullRomClosed={name:"catmullRom closed",args:{points:closedCurve,curve:"CatmullRomClosed",style:{stroke:"#993333",fillOpacity:0}},decorators:[decorators.ee]},OpenFilled={name:"open, filled",args:{points:openCurve,curve:"Linear",style:{stroke:"#993333",fill:"#993333",fillOpacity:.5}},decorators:[decorators.ee]},ClosedFilled={name:"closed, filled",args:{points:closedCurve,curve:"LinearClosed",style:{stroke:"#993333",fill:"#993333",fillOpacity:.5}},decorators:[decorators.ee]};Linear.parameters=Path_stories_extends({},Linear.parameters,{docs:Path_stories_extends({},null==(_Linear$parameters=Linear.parameters)?void 0:_Linear$parameters.docs,{source:Path_stories_extends({originalSource:"{\n  name: 'linear',\n  args: {\n    points: openCurve,\n    curve: 'Linear',\n    style: {\n      stroke: '#993333',\n      fillOpacity: 0\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Linear$parameters2=Linear.parameters)||null==(_Linear$parameters2$d=_Linear$parameters2.docs)?void 0:_Linear$parameters2$d.source)})}),Natural.parameters=Path_stories_extends({},Natural.parameters,{docs:Path_stories_extends({},null==(_Natural$parameters=Natural.parameters)?void 0:_Natural$parameters.docs,{source:Path_stories_extends({originalSource:"{\n  name: 'natural',\n  args: {\n    points: openCurve,\n    curve: 'Natural',\n    style: {\n      stroke: '#993333',\n      fillOpacity: 0\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Natural$parameters2=Natural.parameters)||null==(_Natural$parameters2$=_Natural$parameters2.docs)?void 0:_Natural$parameters2$.source)})}),MonotoneX.parameters=Path_stories_extends({},MonotoneX.parameters,{docs:Path_stories_extends({},null==(_MonotoneX$parameters=MonotoneX.parameters)?void 0:_MonotoneX$parameters.docs,{source:Path_stories_extends({originalSource:"{\n  name: 'monotoneX',\n  args: {\n    points: openCurve,\n    curve: 'MonotoneX',\n    style: {\n      stroke: '#993333',\n      fillOpacity: 0\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_MonotoneX$parameters2=MonotoneX.parameters)||null==(_MonotoneX$parameters3=_MonotoneX$parameters2.docs)?void 0:_MonotoneX$parameters3.source)})}),Step.parameters=Path_stories_extends({},Step.parameters,{docs:Path_stories_extends({},null==(_Step$parameters=Step.parameters)?void 0:_Step$parameters.docs,{source:Path_stories_extends({originalSource:"{\n  name: 'step',\n  args: {\n    points: openCurve,\n    curve: 'Step',\n    style: {\n      stroke: '#993333',\n      fillOpacity: 0\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Step$parameters2=Step.parameters)||null==(_Step$parameters2$doc=_Step$parameters2.docs)?void 0:_Step$parameters2$doc.source)})}),LinearClosed.parameters=Path_stories_extends({},LinearClosed.parameters,{docs:Path_stories_extends({},null==(_LinearClosed$paramet=LinearClosed.parameters)?void 0:_LinearClosed$paramet.docs,{source:Path_stories_extends({originalSource:"{\n  name: 'linear closed',\n  args: {\n    points: closedCurve,\n    curve: 'LinearClosed',\n    style: {\n      stroke: '#993333',\n      fillOpacity: 0\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_LinearClosed$paramet2=LinearClosed.parameters)||null==(_LinearClosed$paramet3=_LinearClosed$paramet2.docs)?void 0:_LinearClosed$paramet3.source)})}),BasisClosed.parameters=Path_stories_extends({},BasisClosed.parameters,{docs:Path_stories_extends({},null==(_BasisClosed$paramete=BasisClosed.parameters)?void 0:_BasisClosed$paramete.docs,{source:Path_stories_extends({originalSource:"{\n  name: 'basis closed',\n  args: {\n    points: closedCurve,\n    curve: 'BasisClosed',\n    style: {\n      stroke: '#993333',\n      fillOpacity: 0\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_BasisClosed$paramete2=BasisClosed.parameters)||null==(_BasisClosed$paramete3=_BasisClosed$paramete2.docs)?void 0:_BasisClosed$paramete3.source)})}),CardinalClosed.parameters=Path_stories_extends({},CardinalClosed.parameters,{docs:Path_stories_extends({},null==(_CardinalClosed$param=CardinalClosed.parameters)?void 0:_CardinalClosed$param.docs,{source:Path_stories_extends({originalSource:"{\n  name: 'cardinal closed',\n  args: {\n    points: closedCurve,\n    curve: 'CardinalClosed',\n    style: {\n      stroke: '#993333',\n      fillOpacity: 0\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_CardinalClosed$param2=CardinalClosed.parameters)||null==(_CardinalClosed$param3=_CardinalClosed$param2.docs)?void 0:_CardinalClosed$param3.source)})}),CatmullRomClosed.parameters=Path_stories_extends({},CatmullRomClosed.parameters,{docs:Path_stories_extends({},null==(_CatmullRomClosed$par=CatmullRomClosed.parameters)?void 0:_CatmullRomClosed$par.docs,{source:Path_stories_extends({originalSource:"{\n  name: 'catmullRom closed',\n  args: {\n    points: closedCurve,\n    curve: 'CatmullRomClosed',\n    style: {\n      stroke: '#993333',\n      fillOpacity: 0\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_CatmullRomClosed$par2=CatmullRomClosed.parameters)||null==(_CatmullRomClosed$par3=_CatmullRomClosed$par2.docs)?void 0:_CatmullRomClosed$par3.source)})}),OpenFilled.parameters=Path_stories_extends({},OpenFilled.parameters,{docs:Path_stories_extends({},null==(_OpenFilled$parameter=OpenFilled.parameters)?void 0:_OpenFilled$parameter.docs,{source:Path_stories_extends({originalSource:"{\n  name: 'open, filled',\n  args: {\n    points: openCurve,\n    curve: 'Linear',\n    style: {\n      stroke: '#993333',\n      fill: '#993333',\n      fillOpacity: 0.5\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_OpenFilled$parameter2=OpenFilled.parameters)||null==(_OpenFilled$parameter3=_OpenFilled$parameter2.docs)?void 0:_OpenFilled$parameter3.source)})}),ClosedFilled.parameters=Path_stories_extends({},ClosedFilled.parameters,{docs:Path_stories_extends({},null==(_ClosedFilled$paramet=ClosedFilled.parameters)?void 0:_ClosedFilled$paramet.docs,{source:Path_stories_extends({originalSource:"{\n  name: 'closed, filled',\n  args: {\n    points: closedCurve,\n    curve: 'LinearClosed',\n    style: {\n      stroke: '#993333',\n      fill: '#993333',\n      fillOpacity: 0.5\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_ClosedFilled$paramet2=ClosedFilled.parameters)||null==(_ClosedFilled$paramet3=_ClosedFilled$paramet2.docs)?void 0:_ClosedFilled$paramet3.source)})});var __namedExportsOrder=["Linear","Natural","MonotoneX","Step","LinearClosed","BasisClosed","CardinalClosed","CatmullRomClosed","OpenFilled","ClosedFilled"]},"./packages/core/stories/components/shapes/Path.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Path_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/components/shapes/Path.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"path",children:"Path"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Path_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Path"})," displays a (curved) line."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Path_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"open-curves",children:"Open curves"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Paths are defined by a series of points, and interpolations are controlled via the prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"curve"}),". The examples below show distinct curves produced by the same set of points."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Path_stories__WEBPACK_IMPORTED_MODULE_4__.Linear}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Path_stories__WEBPACK_IMPORTED_MODULE_4__.Natural}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Path_stories__WEBPACK_IMPORTED_MODULE_4__.MonotoneX}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Path_stories__WEBPACK_IMPORTED_MODULE_4__.Step}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"closed-curves",children:"Closed curves"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Paths can display closed curves."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Path_stories__WEBPACK_IMPORTED_MODULE_4__.LinearClosed}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Path_stories__WEBPACK_IMPORTED_MODULE_4__.BasisClosed}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Path_stories__WEBPACK_IMPORTED_MODULE_4__.CardinalClosed}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Path_stories__WEBPACK_IMPORTED_MODULE_4__.CatmullRomClosed}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"style",children:"Style"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Paths can be styled with css.\nIn particular, paths may require setting the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"fill"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"fillOpacity"})," attributes."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Path_stories__WEBPACK_IMPORTED_MODULE_4__.OpenFilled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Path_stories__WEBPACK_IMPORTED_MODULE_4__.ClosedFilled})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);