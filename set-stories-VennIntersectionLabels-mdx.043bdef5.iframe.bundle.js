"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3927,6159],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/set/stories/VennIntersectionLabels.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomFormat:()=>CustomFormat,OneSet:()=>OneSet,ProportionalAreas:()=>ProportionalAreas,ProportionalDisjoint:()=>ProportionalDisjoint,Styled:()=>Styled,Subsets:()=>Subsets,ThreeSets:()=>ThreeSets,TwoSets:()=>TwoSets,__namedExportsOrder:()=>__namedExportsOrder,default:()=>VennIntersectionLabels_stories});var react=__webpack_require__("./node_modules/react/index.js"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),predicates=__webpack_require__("./packages/set/src/venn/predicates.ts"),contexts=__webpack_require__("./packages/set/src/venn/contexts.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var VennIntersectionLabels=function VennIntersectionLabels(_ref){var ids=_ref.ids,_ref$format=_ref.format,format=void 0===_ref$format?function(v){return String(v)}:_ref$format,_ref$padding=_ref.padding,padding=void 0===_ref$padding?[4,4,4,4]:_ref$padding,_ref$size=_ref.size,size=void 0===_ref$size?[40,10]:_ref$size,_ref$anchor=_ref.anchor,anchor=void 0===_ref$anchor?[.5,.5]:_ref$anchor,_ref$align=_ref.align,align=void 0===_ref$align?[.5,.5]:_ref$align,_ref$offset=_ref.offset,offset=void 0===_ref$offset?[0,0]:_ref$offset,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0!==_ref$setRole&&_ref$setRole,style=_ref.style,_ref$component=_ref.component,component=void 0===_ref$component?chsk_core_es.__J:_ref$component,componentProps=_ref.componentProps,preparedData=(0,contexts.Ro)(),data=preparedData.data;if(!(0,predicates.Bj)(data))return null;var idSet=new Set(null!=ids?ids:preparedData.data.map((function(item){return item.id}))),commonProps=_extends({},componentProps,{size,anchor,align,offset,padding,style,setRole,className:(0,chsk_core_es.gjB)("vennIntersectionLabel",className)}),result=data.map((function(item,i){return idSet.has(item.id)?(0,react.createElement)(component,_extends({key:"l-"+i},commonProps,{position:item.labelPosition}),format(item.value,item)):null})).filter(Boolean);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:result})};try{VennIntersectionLabels.displayName="VennIntersectionLabels",VennIntersectionLabels.__docgenInfo={description:"",displayName:"VennIntersectionLabels",props:{format:{defaultValue:{value:"(v: number) => String(v)"},description:"format for label content",name:"format",required:!1,type:{name:"((v: number, item?: VennPreparedDataItem) => ReactNode)"}},component:{defaultValue:null,description:"function used to draw individual components",name:"component",required:!1,type:{name:"FC<LabelProps>"}},ids:{defaultValue:null,description:"ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},setRole:{defaultValue:{value:"false"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},componentProps:{defaultValue:null,description:"props passed to each component",name:"componentProps",required:!1,type:{name:"Partial<LabelProps>"}},offset:{defaultValue:{value:"[0, 0]"},description:"position offset added after anchoring and alignment",name:"offset",required:!1,type:{name:"NumericPositionSpec"}},anchor:{defaultValue:{value:"[0.5, 0.5]"},description:"position of anchor point relative to box size",name:"anchor",required:!1,type:{name:"AlignSpec"}},size:{defaultValue:{value:"[40, 10]"},description:"size for label box",name:"size",required:!1,type:{name:"SizeSpec"}},padding:{defaultValue:{value:"[4, 4, 4, 4]"},description:"space between container and label",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},align:{defaultValue:{value:"[0.5, 0.5]"},description:"alignment of content within the bounding container",name:"align",required:!1,type:{name:"AlignSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/set/src/venn/VennIntersectionLabels.tsx#VennIntersectionLabels"]={docgenInfo:VennIntersectionLabels.__docgenInfo,name:"VennIntersectionLabels",path:"packages/set/src/venn/VennIntersectionLabels.tsx#VennIntersectionLabels"})}catch(__react_docgen_typescript_loader_error){}var _OneSet$parameters,_OneSet$parameters2,_OneSet$parameters2$d,_TwoSets$parameters,_TwoSets$parameters2,_TwoSets$parameters2$,_ThreeSets$parameters,_ThreeSets$parameters2,_ThreeSets$parameters3,_ProportionalAreas$pa,_ProportionalAreas$pa2,_ProportionalAreas$pa3,_ProportionalDisjoint,_ProportionalDisjoint2,_ProportionalDisjoint3,_CustomFormat$paramet,_CustomFormat$paramet2,_CustomFormat$paramet3,_Subsets$parameters,_Subsets$parameters2,_Subsets$parameters2$,_Styled$parameters,_Styled$parameters2,_Styled$parameters2$d,decorators=__webpack_require__("./packages/set/stories/decorators.tsx");function VennIntersectionLabels_stories_extends(){return VennIntersectionLabels_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},VennIntersectionLabels_stories_extends.apply(this,arguments)}const VennIntersectionLabels_stories={title:"Addons/Set/VennIntersectionLabels",component:VennIntersectionLabels};var OneSet={name:"one set",decorators:[decorators.Df]},TwoSets={name:"two sets",decorators:[decorators.Zt]},ThreeSets={name:"three sets",decorators:[decorators.Xm]},ProportionalAreas={name:"proportional areas",decorators:[decorators.L0]},ProportionalDisjoint={name:"proportional disjoint",decorators:[decorators.v0]},CustomFormat={name:"custom format",args:{format:function format(v,item){return"al"===item.label.substring(0,2)&&item.label.indexOf("!")>0?"cold":"! al"===item.label.substring(0,4)?"hot":"tepid"}},decorators:[decorators.Zt]},Subsets={name:"subsets",args:{ids:["gamma","alpha gamma","beta gamma","alpha beta gamma"]},decorators:[decorators.Xm]},Styled={name:"styled",args:{style:{fontWeight:600,fontSize:24,fill:"#fff"},offset:[0,-20]},decorators:[decorators.Zt]};OneSet.parameters=VennIntersectionLabels_stories_extends({},OneSet.parameters,{docs:VennIntersectionLabels_stories_extends({},null==(_OneSet$parameters=OneSet.parameters)?void 0:_OneSet$parameters.docs,{source:VennIntersectionLabels_stories_extends({originalSource:"{\n  name: 'one set',\n  decorators: [ChartVennSets1Decorator]\n}"},null==(_OneSet$parameters2=OneSet.parameters)||null==(_OneSet$parameters2$d=_OneSet$parameters2.docs)?void 0:_OneSet$parameters2$d.source)})}),TwoSets.parameters=VennIntersectionLabels_stories_extends({},TwoSets.parameters,{docs:VennIntersectionLabels_stories_extends({},null==(_TwoSets$parameters=TwoSets.parameters)?void 0:_TwoSets$parameters.docs,{source:VennIntersectionLabels_stories_extends({originalSource:"{\n  name: 'two sets',\n  decorators: [ChartVennSets2Decorator]\n}"},null==(_TwoSets$parameters2=TwoSets.parameters)||null==(_TwoSets$parameters2$=_TwoSets$parameters2.docs)?void 0:_TwoSets$parameters2$.source)})}),ThreeSets.parameters=VennIntersectionLabels_stories_extends({},ThreeSets.parameters,{docs:VennIntersectionLabels_stories_extends({},null==(_ThreeSets$parameters=ThreeSets.parameters)?void 0:_ThreeSets$parameters.docs,{source:VennIntersectionLabels_stories_extends({originalSource:"{\n  name: 'three sets',\n  decorators: [ChartVennSets3Decorator]\n}"},null==(_ThreeSets$parameters2=ThreeSets.parameters)||null==(_ThreeSets$parameters3=_ThreeSets$parameters2.docs)?void 0:_ThreeSets$parameters3.source)})}),ProportionalAreas.parameters=VennIntersectionLabels_stories_extends({},ProportionalAreas.parameters,{docs:VennIntersectionLabels_stories_extends({},null==(_ProportionalAreas$pa=ProportionalAreas.parameters)?void 0:_ProportionalAreas$pa.docs,{source:VennIntersectionLabels_stories_extends({originalSource:"{\n  name: 'proportional areas',\n  decorators: [ChartVennSets2ProportionalDecorator]\n}"},null==(_ProportionalAreas$pa2=ProportionalAreas.parameters)||null==(_ProportionalAreas$pa3=_ProportionalAreas$pa2.docs)?void 0:_ProportionalAreas$pa3.source)})}),ProportionalDisjoint.parameters=VennIntersectionLabels_stories_extends({},ProportionalDisjoint.parameters,{docs:VennIntersectionLabels_stories_extends({},null==(_ProportionalDisjoint=ProportionalDisjoint.parameters)?void 0:_ProportionalDisjoint.docs,{source:VennIntersectionLabels_stories_extends({originalSource:"{\n  name: 'proportional disjoint',\n  decorators: [ChartVennSets2ProportionalDisjointDecorator]\n}"},null==(_ProportionalDisjoint2=ProportionalDisjoint.parameters)||null==(_ProportionalDisjoint3=_ProportionalDisjoint2.docs)?void 0:_ProportionalDisjoint3.source)})}),CustomFormat.parameters=VennIntersectionLabels_stories_extends({},CustomFormat.parameters,{docs:VennIntersectionLabels_stories_extends({},null==(_CustomFormat$paramet=CustomFormat.parameters)?void 0:_CustomFormat$paramet.docs,{source:VennIntersectionLabels_stories_extends({originalSource:"{\n  name: 'custom format',\n  args: {\n    format: (v: string | number, item: VennInteractiveDataItem) => {\n      if (item.label.substring(0, 2) === 'al' && item.label.indexOf('!') > 0) return 'cold';\n      if (item.label.substring(0, 4) === '! al') return 'hot';\n      return 'tepid';\n    }\n  },\n  decorators: [ChartVennSets2Decorator]\n}"},null==(_CustomFormat$paramet2=CustomFormat.parameters)||null==(_CustomFormat$paramet3=_CustomFormat$paramet2.docs)?void 0:_CustomFormat$paramet3.source)})}),Subsets.parameters=VennIntersectionLabels_stories_extends({},Subsets.parameters,{docs:VennIntersectionLabels_stories_extends({},null==(_Subsets$parameters=Subsets.parameters)?void 0:_Subsets$parameters.docs,{source:VennIntersectionLabels_stories_extends({originalSource:"{\n  name: 'subsets',\n  args: {\n    ids: ['gamma', 'alpha gamma', 'beta gamma', 'alpha beta gamma']\n  },\n  decorators: [ChartVennSets3Decorator]\n}"},null==(_Subsets$parameters2=Subsets.parameters)||null==(_Subsets$parameters2$=_Subsets$parameters2.docs)?void 0:_Subsets$parameters2$.source)})}),Styled.parameters=VennIntersectionLabels_stories_extends({},Styled.parameters,{docs:VennIntersectionLabels_stories_extends({},null==(_Styled$parameters=Styled.parameters)?void 0:_Styled$parameters.docs,{source:VennIntersectionLabels_stories_extends({originalSource:"{\n  name: 'styled',\n  args: {\n    style: {\n      fontWeight: 600,\n      fontSize: 24,\n      fill: '#fff'\n    },\n    offset: [0, -20]\n  },\n  decorators: [ChartVennSets2Decorator]\n}"},null==(_Styled$parameters2=Styled.parameters)||null==(_Styled$parameters2$d=_Styled$parameters2.docs)?void 0:_Styled$parameters2$d.source)})});var __namedExportsOrder=["OneSet","TwoSets","ThreeSets","ProportionalAreas","ProportionalDisjoint","CustomFormat","Subsets","Styled"]},"./packages/set/stories/VennIntersectionLabels.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_VennIntersectionLabels_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/set/stories/VennIntersectionLabels.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"vennintersectionlabels",children:"VennIntersectionLabels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_VennIntersectionLabels_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"VennIntersectionLabels"})," draws labels on a Venn chart."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_VennIntersectionLabels_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"number-of-sets",children:"Number of sets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"VennIntersectionLabels"})," labels all regions of a venn diagram.\nThe component automatically positions the labels for datasets with one, two, or three sets."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_VennIntersectionLabels_stories__WEBPACK_IMPORTED_MODULE_4__.OneSet}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_VennIntersectionLabels_stories__WEBPACK_IMPORTED_MODULE_4__.TwoSets}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_VennIntersectionLabels_stories__WEBPACK_IMPORTED_MODULE_4__.ThreeSets}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"proportional-areas",children:"Proportional areas"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Labels work automatically for Venn diagrams with proportional sizes."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_VennIntersectionLabels_stories__WEBPACK_IMPORTED_MODULE_4__.ProportionalAreas}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_VennIntersectionLabels_stories__WEBPACK_IMPORTED_MODULE_4__.ProportionalDisjoint}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"label-format",children:"Label format"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, labels display the set id. The content can be adjusted via prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"format"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_VennIntersectionLabels_stories__WEBPACK_IMPORTED_MODULE_4__.CustomFormat}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"(The custom format function may not appear correctly in the storybook doc.\nPlease check the table at the top of the page for the function signature, or the sourcecode on github\nfor source code.)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"data-subsets",children:"Data subsets"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["To display only some of the labels, set prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ids"})," with an array of strings based on the data item ids.\nPartitions that correspond to items in one set and not in any of the others are denoted with the id\ncorresponding to the containing set, e.g. 'alpha' or 'beta'.\nIntersections are denoted with ids separated by spaces, e.g. 'alpha beta'."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_VennIntersectionLabels_stories__WEBPACK_IMPORTED_MODULE_4__.Subsets}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Tip: even when it is desirable to draw all the labels, this feature can be useful\nfor fine-tuning the position of certain labels with props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"align"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"anchor"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"offset"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Text labels can be styled with css."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_VennIntersectionLabels_stories__WEBPACK_IMPORTED_MODULE_4__.Styled})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);