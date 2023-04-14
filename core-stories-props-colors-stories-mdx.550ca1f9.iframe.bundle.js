/*! For license information please see core-stories-props-colors-stories-mdx.550ca1f9.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7418],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.$4,Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/core/stories/props/mocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AG:()=>MockSetRole,FY:()=>MockTimeScale,Qx:()=>MockHandlers,ST:()=>MockCategoricalScale,ZM:()=>MockBandScale,kj:()=>MockModifiers,ng:()=>MockContainer,ru:()=>MockNumericScale,tm:()=>MockStyles,wI:()=>MockSequentialScale,wZ:()=>MockDivergingScale,wt:()=>MockDataHandlers,xJ:()=>MockColors,xN:()=>MockThresholdScale,yA:()=>MockScales});var MockContainer=function MockContainer(props){return console.log(JSON.stringify(props)),null},MockColors=function MockColors(_ref){var scaleColor=_ref.scaleColor;return console.log(JSON.stringify(scaleColor)),null},MockHandlers=function MockHandlers(props){return console.log(JSON.stringify(props)),null},MockDataHandlers=function MockDataHandlers(props){return console.log(JSON.stringify(props)),null},MockStyles=function MockStyles(props){return console.log(JSON.stringify(props)),null},MockSetRole=function MockSetRole(props){return console.log(JSON.stringify(props)),null},MockModifiers=function MockModifiers(props){return console.log(JSON.stringify(props)),null},MockScales=function MockScales(props){return console.log(JSON.stringify(props)),null},MockNumericScale=function MockNumericScale(props){return console.log(JSON.stringify(props)),null},MockTimeScale=function MockTimeScale(props){return console.log(JSON.stringify(props)),null},MockBandScale=function MockBandScale(props){return console.log(JSON.stringify(props)),null},MockCategoricalScale=function MockCategoricalScale(props){return console.log(JSON.stringify(props)),null},MockSequentialScale=function MockSequentialScale(props){return console.log(JSON.stringify(props)),null},MockDivergingScale=function MockDivergingScale(props){return console.log(JSON.stringify(props)),null},MockThresholdScale=function MockThresholdScale(props){return console.log(JSON.stringify(props)),null};try{MockContainer.displayName="MockContainer",MockContainer.__docgenInfo={description:"collection of mock objects\nThese are only used to generate tables with props for the documentation",displayName:"MockContainer",props:{position:{defaultValue:null,description:"container position",name:"position",required:!1,type:{name:"PositionSpec"}},positionUnits:{defaultValue:null,description:"absolute or relative units for position",name:"positionUnits",required:!1,type:{name:"PositionUnits"}},size:{defaultValue:null,description:"container size as an array [width, height]",name:"size",required:!1,type:{name:"SizeSpec"}},sizeUnits:{defaultValue:null,description:"absolute or relative units for position and size measurements",name:"sizeUnits",required:!1,type:{name:"SizeUnits"}},anchor:{defaultValue:null,description:"container anchor point",name:"anchor",required:!1,type:{name:"AnchorSpec"}},padding:{defaultValue:null,description:"padding (absolute values) *",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},offset:{defaultValue:null,description:"offset/translation applied after anchoring, absolute units",name:"offset",required:!1,type:{name:"NumericPositionSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockContainer"]={docgenInfo:MockContainer.__docgenInfo,name:"MockContainer",path:"packages/core/stories/props/mocks.tsx#MockContainer"})}catch(__react_docgen_typescript_loader_error){}try{MockColors.displayName="MockColors",MockColors.__docgenInfo={description:"",displayName:"MockColors",props:{scaleColor:{defaultValue:null,description:"",name:"scaleColor",required:!0,type:{name:"ColorScaleSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockColors"]={docgenInfo:MockColors.__docgenInfo,name:"MockColors",path:"packages/core/stories/props/mocks.tsx#MockColors"})}catch(__react_docgen_typescript_loader_error){}try{MockHandlers.displayName="MockHandlers",MockHandlers.__docgenInfo={description:"",displayName:"MockHandlers",props:{onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockHandlers"]={docgenInfo:MockHandlers.__docgenInfo,name:"MockHandlers",path:"packages/core/stories/props/mocks.tsx#MockHandlers"})}catch(__react_docgen_typescript_loader_error){}try{MockDataHandlers.displayName="MockDataHandlers",MockDataHandlers.__docgenInfo={description:"",displayName:"MockDataHandlers",props:{onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((data: WithId, event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((data: WithId, event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((data: WithId, event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((data: WithId, event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockDataHandlers"]={docgenInfo:MockDataHandlers.__docgenInfo,name:"MockDataHandlers",path:"packages/core/stories/props/mocks.tsx#MockDataHandlers"})}catch(__react_docgen_typescript_loader_error){}try{MockStyles.displayName="MockStyles",MockStyles.__docgenInfo={description:"",displayName:"MockStyles",props:{className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockStyles"]={docgenInfo:MockStyles.__docgenInfo,name:"MockStyles",path:"packages/core/stories/props/mocks.tsx#MockStyles"})}catch(__react_docgen_typescript_loader_error){}try{MockSetRole.displayName="MockSetRole",MockSetRole.__docgenInfo={description:"",displayName:"MockSetRole",props:{setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockSetRole"]={docgenInfo:MockSetRole.__docgenInfo,name:"MockSetRole",path:"packages/core/stories/props/mocks.tsx#MockSetRole"})}catch(__react_docgen_typescript_loader_error){}try{MockModifiers.displayName="MockModifiers",MockModifiers.__docgenInfo={description:"",displayName:"MockModifiers",props:{onMouseEnter:{defaultValue:null,description:"style modifier upon mouse enter event",name:"onMouseEnter",required:!1,type:{name:"Partial<CSSProperties>"}},onMouseLeave:{defaultValue:null,description:"style modifier upon mouse leave event",name:"onMouseLeave",required:!1,type:{name:"Partial<CSSProperties>"}},onMouseMove:{defaultValue:null,description:"style modifier upon mouse move event",name:"onMouseMove",required:!1,type:{name:"Partial<CSSProperties>"}},onClick:{defaultValue:null,description:"style modifier upon click",name:"onClick",required:!1,type:{name:"Partial<CSSProperties>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockModifiers"]={docgenInfo:MockModifiers.__docgenInfo,name:"MockModifiers",path:"packages/core/stories/props/mocks.tsx#MockModifiers"})}catch(__react_docgen_typescript_loader_error){}try{MockScales.displayName="MockScales",MockScales.__docgenInfo={description:"",displayName:"MockScales",props:{scaleSize:{defaultValue:null,description:"scale for size",name:"scaleSize",required:!1,type:{name:"SizeScaleProps"}},scaleX:{defaultValue:null,description:"scale for horizontal axis",name:"scaleX",required:!1,type:{name:'Omit<ContinuousScaleProps, "size"> | Omit<BandScaleProps, "size">'}},scaleY:{defaultValue:null,description:"scale for vertical axis",name:"scaleY",required:!1,type:{name:'Omit<ContinuousScaleProps, "size"> | Omit<BandScaleProps, "size">'}},scaleColor:{defaultValue:null,description:"scale for color",name:"scaleColor",required:!1,type:{name:"ColorScaleProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockScales"]={docgenInfo:MockScales.__docgenInfo,name:"MockScales",path:"packages/core/stories/props/mocks.tsx#MockScales"})}catch(__react_docgen_typescript_loader_error){}try{MockNumericScale.displayName="MockNumericScale",MockNumericScale.__docgenInfo={description:"",displayName:"MockNumericScale",props:{variant:{defaultValue:null,description:"type of scale",name:"variant",required:!0,type:{name:"enum",value:[{value:'"linear"'},{value:'"log"'},{value:'"sqrt"'}]}},domain:{defaultValue:null,description:"domain min and max",name:"domain",required:!1,type:{name:'[number, number] | "auto" | [number, "auto"] | ["auto", number]'}},clamp:{defaultValue:null,description:"clamp",name:"clamp",required:!1,type:{name:"boolean"}},nice:{defaultValue:null,description:"nice",name:"nice",required:!1,type:{name:"number | boolean"}},reverse:{defaultValue:null,description:"reverse direction of axis",name:"reverse",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockNumericScale"]={docgenInfo:MockNumericScale.__docgenInfo,name:"MockNumericScale",path:"packages/core/stories/props/mocks.tsx#MockNumericScale"})}catch(__react_docgen_typescript_loader_error){}try{MockTimeScale.displayName="MockTimeScale",MockTimeScale.__docgenInfo={description:"",displayName:"MockTimeScale",props:{clamp:{defaultValue:null,description:"clamp",name:"clamp",required:!1,type:{name:"boolean"}},nice:{defaultValue:null,description:"nice",name:"nice",required:!1,type:{name:"number | boolean"}},reverse:{defaultValue:null,description:"reverse direction of axis",name:"reverse",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"type of scale",name:"variant",required:!0,type:{name:'"time"'}},domain:{defaultValue:null,description:"domain min and max",name:"domain",required:!1,type:{name:'"auto" | [Date, Date] | [Date, "auto"] | ["auto", Date]'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockTimeScale"]={docgenInfo:MockTimeScale.__docgenInfo,name:"MockTimeScale",path:"packages/core/stories/props/mocks.tsx#MockTimeScale"})}catch(__react_docgen_typescript_loader_error){}try{MockBandScale.displayName="MockBandScale",MockBandScale.__docgenInfo={description:"",displayName:"MockBandScale",props:{variant:{defaultValue:null,description:"type of scale",name:"variant",required:!0,type:{name:'"band"'}},domain:{defaultValue:null,description:"all keys in the domain",name:"domain",required:!1,type:{name:'string[] | "auto"'}},padding:{defaultValue:null,description:"padding (multiple of scale step size); overridden by paddingOuter and paddingInner",name:"padding",required:!1,type:{name:"number"}},paddingOuter:{defaultValue:null,description:"padding between edges of range and first/last bands (multiple of scale step size)",name:"paddingOuter",required:!1,type:{name:"number"}},paddingInner:{defaultValue:null,description:"padding between individual bands (multiple of scale step size)",name:"paddingInner",required:!1,type:{name:"number"}},extraPadding:{defaultValue:null,description:"dictionary with additional padding before certain bands (multiples of scale step size)",name:"extraPadding",required:!1,type:{name:"Record<string, number>"}},nice:{defaultValue:null,description:"nice (does not work on band scales)",name:"nice",required:!1,type:{name:"number | boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockBandScale"]={docgenInfo:MockBandScale.__docgenInfo,name:"MockBandScale",path:"packages/core/stories/props/mocks.tsx#MockBandScale"})}catch(__react_docgen_typescript_loader_error){}try{MockCategoricalScale.displayName="MockCategoricalScale",MockCategoricalScale.__docgenInfo={description:"",displayName:"MockCategoricalScale",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"categorical"'}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ColorScheme"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},domain:{defaultValue:null,description:"",name:"domain",required:!1,type:{name:'string[] | "auto"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockCategoricalScale"]={docgenInfo:MockCategoricalScale.__docgenInfo,name:"MockCategoricalScale",path:"packages/core/stories/props/mocks.tsx#MockCategoricalScale"})}catch(__react_docgen_typescript_loader_error){}try{MockSequentialScale.displayName="MockSequentialScale",MockSequentialScale.__docgenInfo={description:"",displayName:"MockSequentialScale",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"sequential"'}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ColorArray | ColorInterpolator"}},domain:{defaultValue:null,description:"",name:"domain",required:!0,type:{name:'"auto" | [number | "auto", number | "auto"]'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockSequentialScale"]={docgenInfo:MockSequentialScale.__docgenInfo,name:"MockSequentialScale",path:"packages/core/stories/props/mocks.tsx#MockSequentialScale"})}catch(__react_docgen_typescript_loader_error){}try{MockDivergingScale.displayName="MockDivergingScale",MockDivergingScale.__docgenInfo={description:"",displayName:"MockDivergingScale",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"diverging"'}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ColorArray | ColorInterpolator"}},domain:{defaultValue:null,description:"",name:"domain",required:!0,type:{name:'"auto" | [number | "auto", number | "auto", number | "auto"]'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockDivergingScale"]={docgenInfo:MockDivergingScale.__docgenInfo,name:"MockDivergingScale",path:"packages/core/stories/props/mocks.tsx#MockDivergingScale"})}catch(__react_docgen_typescript_loader_error){}try{MockThresholdScale.displayName="MockThresholdScale",MockThresholdScale.__docgenInfo={description:"",displayName:"MockThresholdScale",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:'"threshold"'}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ColorArray"}},domain:{defaultValue:null,description:"",name:"domain",required:!0,type:{name:"number[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/props/mocks.tsx#MockThresholdScale"]={docgenInfo:MockThresholdScale.__docgenInfo,name:"MockThresholdScale",path:"packages/core/stories/props/mocks.tsx#MockThresholdScale"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/props/colors.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_mocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/stories/props/mocks.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Core/Props/Colors",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Core/Props/Colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"colors",children:"Colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["While colors for individual components can be set via css styles with props such as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"style"}),"\n(sometimes ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"labelStyle"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"symbolStyle"})," or similar), color schemes are set via scales with prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"scaleColor"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_mocks__WEBPACK_IMPORTED_MODULE_4__.xJ}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Color scales are based on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://github.com/d3/d3-scale-chromatic",target:"_blank",rel:"nofollow noopener noreferrer",children:"d3-scale-chromatic"}),", with minor adjustments.\nThey are specified with objects that define a scale variant, domain, and other properties."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"categorical-colors",children:"Categorical colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Categorical scales use a discrete set of colors."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_mocks__WEBPACK_IMPORTED_MODULE_4__.ST}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"The example below defines a custom scale by explicitly listing color codes."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"javascript",code:"\n{\n  variant: 'categorical',\n  colors: ['#3f9cde', '#e05263', '#ffa047', '#7fc29b', '#c6d8d3', '#68758d'],\n  size: 6,\n}"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Instead of providing an array of colors, it is possible to use a color scheme object in the format\nspecified by ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://github.com/d3/d3-scale-chromatic",target:"_blank",rel:"nofollow noopener noreferrer",children:"d3-scale-chromatic"}),".\nFor example, the following object defines a series of color arrays for sizes from 0 to 5."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"language",code:"\n[\n   ,,,\n  [ '#deebf7', '#9ecae1', '#3182bd' ],\n  [ '#eff3ff', '#bdd7e7', '#6baed6', '#2171b5' ],\n  [ '#eff3ff', '#bdd7e7', '#6baed6', '#3182bd', '#08519c' ]\n]"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["The data format intentionally coincides with color schemes in\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://github.com/d3/d3-scale-chromatic",target:"_blank",rel:"nofollow noopener noreferrer",children:"d3-scale-chromatic"}),".\nThus, ready color schemes can be readily imported."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"javascript",code:"\nimport { schemeCategory10 } from 'd3-scale-chromatic'\nimport { schemeBlues } from 'd3-scale-chromatic'\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["When using color schemes, it is especially relevant to set ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"size"})," to select\nthe number of desired colors."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"sequential-colors",children:"Sequential colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Sequential scales convert numbers from a domain into continuous color shades."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_mocks__WEBPACK_IMPORTED_MODULE_4__.wI}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Simple scales are defined by two values\nrepresenting domain edges, and two colors representing edge colors."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"javascript",code:"\n{\n  variant: 'sequential',\n  colors: ['#ffffff', '#0000ff'],\n  domain: [0, 2]\n}"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"color"})," attribute also accepts an interpolation function that converts a value in [0, 1],\ni.e. a fractional position in the domain interval, to a color.\nSeveral interpolation schemes are available through ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://github.com/d3/d3-scale-chromatic",target:"_blank",rel:"nofollow noopener noreferrer",children:"d3-scale-chromatic"}),".\nFor example, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"interpolateBlues"})," uses shades of blue."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"javascript",code:"\nimport { interpolateBlues } from 'd3-scale-chromatic'\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["When a sequential scale is used in a 'view' component (e.g. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"View"})," from the core package, but also ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"Bar"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"Scatter"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"HeatMap"})," and others), the domain of the scale can be determined automatically from data. The example below forces a scale to start at a value of 0, but leaves the upper bound to be determined from data."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"javascript",code:"\n{\n  variant: 'sequential',\n  colors: interpolateBlues,\n  domain: [0, 'auto']\n}"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Note this example also uses the imported interpolation function."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"diverging-colors",children:"Diverging colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Diverging color scales are similar to sequential colors, except that the domain is defined with an additional 'center'\npoint."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_mocks__WEBPACK_IMPORTED_MODULE_4__.wZ}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"The example below defines a blue-white-red scheme centered at a value zero."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"javascript",code:"\n{\n  variant: 'diverging',\n  colors: ['#0000ff', '#ffffff', '#ff0000'],\n  domain: [-1, 0, 1]\n}"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["As with sequential schemes, an alternative to supplying a color array is to use an interpolation function.\nSeveral interpolators are readily available from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://github.com/d3/d3-scale-chromatic",target:"_blank",rel:"nofollow noopener noreferrer",children:"d3-scale-chromatic"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"threshold-colors",children:"Threshold colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Threshold color scales map numbers into a discrete set of colors using thresholds."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:_mocks__WEBPACK_IMPORTED_MODULE_4__.xN}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"The example below creates a three-color scheme based on two thresholds."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"javascript",code:"\n{\n  variant: 'threshold',\n  colors: ['#0000ff', '#ffffff', '#ff0000'],\n  domain: [0, 1]\n}"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"default-colors",children:"Default colors"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Default color scales can be set using themes. The specifications should be provided under key ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"Colors"}),".\nThe object below carries the color specifications for the default theme."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hw,{language:"javascript",code:"\nconst customTheme = {\n  Colors: {\n    categorical: {\n        variant: 'categorical',\n        colors: ['#3f9cde', '#e05263', '#ffa047', '#7fc29b', '#c6d8d3', '#68758d'],\n        size: 6,\n    },\n    sequential: {\n        variant: 'sequential',\n        colors: interpolateBlues,\n        domain: 'auto',\n    },\n    diverging: {\n        variant: 'diverging',\n        colors: interpolateRdBu,\n        domain: 'auto',\n    },\n  }\n}"})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);