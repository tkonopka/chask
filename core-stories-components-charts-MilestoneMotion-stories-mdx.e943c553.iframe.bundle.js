"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8390],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.$4,Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-R4NKYYJA.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/core/stories/components/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lh:()=>ChartPlainDecorator,OR:()=>ChartViewDecorator,VK:()=>ChartBandViewDecorator,ee:()=>ChartDecorator,ke:()=>viewSeriesIndexesKeys,z5:()=>DivDecorator});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/src/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),viewSeriesIndexesKeys={seriesIndexes:{X:0,Y:1},keys:["alpha","beta","gamma"]},DivDecorator=function DivDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:Story()})};DivDecorator.displayName="DivDecorator";var ChartPlainDecorator=function ChartPlainDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:Story()})};ChartPlainDecorator.displayName="ChartPlainDecorator";var ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})};ChartDecorator.displayName="ChartDecorator";var ChartViewDecorator=function ChartViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,60,60,60],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story()]})})};ChartViewDecorator.displayName="ChartViewDecorator";var ChartBandViewDecorator=function ChartBandViewDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.kL2,{size:[400,300],padding:[60,40,60,80],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_0__.G7x,{scaleX:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},scaleY:{variant:"band",domain:["alpha","beta","gamma","delta","epsilon"],padding:0},data:[],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.Tgp,{variant:"inner"}),Story(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_0__.RDh,{variant:"left"})]})})};ChartBandViewDecorator.displayName="ChartBandViewDecorator";try{DivDecorator.displayName="DivDecorator",DivDecorator.__docgenInfo={description:"",displayName:"DivDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#DivDecorator"]={docgenInfo:DivDecorator.__docgenInfo,name:"DivDecorator",path:"packages/core/stories/components/decorators.tsx#DivDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartPlainDecorator.displayName="ChartPlainDecorator",ChartPlainDecorator.__docgenInfo={description:"",displayName:"ChartPlainDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartPlainDecorator"]={docgenInfo:ChartPlainDecorator.__docgenInfo,name:"ChartPlainDecorator",path:"packages/core/stories/components/decorators.tsx#ChartPlainDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/core/stories/components/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartViewDecorator.displayName="ChartViewDecorator",ChartViewDecorator.__docgenInfo={description:"",displayName:"ChartViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartViewDecorator"]={docgenInfo:ChartViewDecorator.__docgenInfo,name:"ChartViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartViewDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartBandViewDecorator.displayName="ChartBandViewDecorator",ChartBandViewDecorator.__docgenInfo={description:"",displayName:"ChartBandViewDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"]={docgenInfo:ChartBandViewDecorator.__docgenInfo,name:"ChartBandViewDecorator",path:"packages/core/stories/components/decorators.tsx#ChartBandViewDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/core/stories/components/charts/MilestoneMotion.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,customActions:()=>customActions,customStates:()=>customStates,customTransitions:()=>customTransitions,default:()=>MilestoneMotion_stories,entryAndExitMilestones:()=>entryAndExitMilestones,entryMilestones:()=>entryMilestones,exitMilestones:()=>exitMilestones});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),src=__webpack_require__("./packages/core/src/index.tsx"),jsx_runtime=(__webpack_require__("./packages/core/stories/components/decorators.tsx"),__webpack_require__("./node_modules/react/jsx-runtime.js")),MilestonePreview=function MilestonePreview(){var _useMilestones,milestones=Array.from(null!=(_useMilestones=(0,src.ib9)())?_useMilestones:[]),size=(0,src.Bs9)().size,pos=[size[src.X]/2,size[src.Y]+20];return(0,jsx_runtime.jsxs)(src.ZT$,{position:pos,style:{textAnchor:"middle",alignmentBaseline:"middle",fill:"#7777bb"},children:["Milestones: ",JSON.stringify(milestones)]})};MilestonePreview.displayName="MilestonePreview";var EntryMilestones=function EntryMilestones(){var ref=(0,react.useRef)(null),toggleMilestone=function toggleMilestone(m){var _ref$current;null==(_ref$current=ref.current)||_ref$current.toggleMilestone(m)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("left")},children:"Toggle milestone ‘left‘"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("right")},children:"Toggle milestone ‘right‘"})]}),(0,jsx_runtime.jsxs)(src.kL2,{fref:ref,size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},children:[(0,jsx_runtime.jsx)(src.Tgp,{variant:"inner"}),(0,jsx_runtime.jsxs)(src.G7x,{children:[(0,jsx_runtime.jsx)(src.lqb,{enter:"invisible",enterOn:"left",exit:null,transition:{type:"tween",duration:1},children:(0,jsx_runtime.jsx)(src.RDh,{variant:"left"})}),(0,jsx_runtime.jsx)(src.lqb,{enter:"invisible",enterOn:"right",exit:null,transition:{type:"tween",duration:1},children:(0,jsx_runtime.jsx)(src.RDh,{variant:"right"})})]}),(0,jsx_runtime.jsx)(MilestonePreview,{})]})]})},ExitMilestones=function ExitMilestones(){var ref=(0,react.useRef)(null),toggleMilestone=function toggleMilestone(m){var _ref$current2;null==(_ref$current2=ref.current)||_ref$current2.toggleMilestone(m)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("left")},children:"Toggle milestone ‘left‘"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("right")},children:"Toggle milestone ‘right‘"})]}),(0,jsx_runtime.jsxs)(src.kL2,{fref:ref,size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},children:[(0,jsx_runtime.jsx)(src.Tgp,{variant:"inner"}),(0,jsx_runtime.jsxs)(src.G7x,{children:[(0,jsx_runtime.jsx)(src.lqb,{enter:null,exit:"invisible",exitOn:"left",transition:{type:"tween",duration:1},children:(0,jsx_runtime.jsx)(src.RDh,{variant:"left"})}),(0,jsx_runtime.jsx)(src.lqb,{enter:null,exit:"invisible",exitOn:"right",transition:{type:"tween",duration:1},children:(0,jsx_runtime.jsx)(src.RDh,{variant:"right"})})]}),(0,jsx_runtime.jsx)(MilestonePreview,{})]})]})},EntryExitMilestones=function EntryExitMilestones(_ref){var enter=_ref.enter,exit=_ref.exit,onEnter=_ref.onEnter,onExit=_ref.onExit,transition=_ref.transition,ref=(0,react.useRef)(null),toggleMilestone=function toggleMilestone(m){var _ref$current3;null==(_ref$current3=ref.current)||_ref$current3.toggleMilestone(m)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("A")},children:"Toggle ‘A‘"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("B")},children:"Toggle ‘B‘"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("C")},children:"Toggle ‘C‘"}),(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return toggleMilestone("D")},children:"Toggle ‘D‘"})]}),(0,jsx_runtime.jsxs)(src.kL2,{fref:ref,size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},children:[(0,jsx_runtime.jsx)(src.Tgp,{variant:"inner"}),(0,jsx_runtime.jsxs)(src.G7x,{children:[(0,jsx_runtime.jsx)(src.lqb,{enter,enterOn:"A",onEnter,exit,exitOn:"B",onExit,transition,children:(0,jsx_runtime.jsx)(src.RDh,{variant:"left"})}),(0,jsx_runtime.jsx)(src.lqb,{enter,enterOn:"C",onEnter,exit,exitOn:"D",onExit,transition,visible:!0,children:(0,jsx_runtime.jsx)(src.RDh,{variant:"right"})})]}),(0,jsx_runtime.jsx)(MilestonePreview,{})]})]})};try{EntryExitMilestones.displayName="EntryExitMilestones",EntryExitMilestones.__docgenInfo={description:"",displayName:"EntryExitMilestones",props:{enter:{defaultValue:null,description:"",name:"enter",required:!0,type:{name:"AnimationSpec"}},exit:{defaultValue:null,description:"",name:"exit",required:!0,type:{name:"AnimationSpec"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"(() => void)"}},onExit:{defaultValue:null,description:"",name:"onExit",required:!1,type:{name:"(() => void)"}},transition:{defaultValue:null,description:"",name:"transition",required:!1,type:{name:"TransitionSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/core/stories/components/charts/Milestone.animations.tsx#EntryExitMilestones"]={docgenInfo:EntryExitMilestones.__docgenInfo,name:"EntryExitMilestones",path:"packages/core/stories/components/charts/Milestone.animations.tsx#EntryExitMilestones"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>(0,jsx_runtime.jsx)(src.lqb,{...args});const entryMilestones=()=>(0,jsx_runtime.jsx)(EntryMilestones,{});entryMilestones.storyName="entry milestones",entryMilestones.parameters={storySource:{source:"<EntryMilestones />"}};const exitMilestones=()=>(0,jsx_runtime.jsx)(ExitMilestones,{});exitMilestones.storyName="exit milestones",exitMilestones.parameters={storySource:{source:"<ExitMilestones />"}};const entryAndExitMilestones=()=>(0,jsx_runtime.jsx)(EntryExitMilestones,{});entryAndExitMilestones.storyName="entry and exit milestones",entryAndExitMilestones.parameters={storySource:{source:"<EntryExitMilestones />"}};const customStates=()=>(0,jsx_runtime.jsx)(EntryExitMilestones,{enter:{opacity:0,x:-80},exit:{opacity:0,scale:3}});customStates.storyName="custom states",customStates.parameters={storySource:{source:"<EntryExitMilestones enter={{\n  opacity: 0,\n  x: -80\n}} exit={{\n  opacity: 0,\n  scale: 3\n}} />"}};const customTransitions=()=>(0,jsx_runtime.jsx)(EntryExitMilestones,{enter:{opacity:0},exit:{opacity:0},transition:{type:"spring",mass:.5,stiffness:10}});customTransitions.storyName="custom transitions",customTransitions.parameters={storySource:{source:'<EntryExitMilestones enter={{\n  opacity: 0\n}} exit={{\n  opacity: 0\n}} transition={{\n  type: "spring",\n  mass: 0.5,\n  stiffness: 10\n}} />'}};const customActions=()=>(0,jsx_runtime.jsx)(EntryExitMilestones,{onEnter:()=>{console.log("enter")},onExit:()=>{console.log("exit")}});customActions.storyName="custom actions",customActions.parameters={storySource:{source:'<EntryExitMilestones onEnter={() => {\n  console.log("enter");\n}} onExit={() => {\n  console.log("exit");\n}} />'}};const componentMeta={title:"Core/Components/Charts/MilestoneMotion",tags:["stories-mdx"],includeStories:["entryMilestones","exitMilestones","entryAndExitMilestones","customStates","customTransitions","customActions"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"milestonemotion",children:"MilestoneMotion"}),"\n",(0,jsx_runtime.jsx)(dist.h_,{title:"Core/Components/Charts/MilestoneMotion"}),"\n","\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"MilestoneMotion"})," is an organizational component. It does not draw anything itself, but it controls when its children elements appear and disappear."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Charts keep track of a set of 'milestones', which can be toggled on and off, for example using buttons. ",(0,jsx_runtime.jsx)(_components.code,{children:"MilestoneMotion"})," components detect changes in the milestones and trigger the visibility of their children elements."]}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:src.lqb}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"setup",children:"Setup"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Setting up a chart for milestone animations is a two-step process."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["First, create a ",(0,jsx_runtime.jsx)(_components.code,{children:"Ref"})," object and pass it to prop ",(0,jsx_runtime.jsx)(_components.code,{children:"fref"})," of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Chart"})," component.\nThe pseudo-code below shows the key ideas."]}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{language:"javascript",code:"\n// relevant imports\nimport { Chart, ChartRef } from '@chsk/core'\n\n// set up a ref\nconst ref = useRef<ChartRef>(null)\n\n// pass the ref to the chart\n\n<Chart fref={ref} ...>\n  ...\n</Chart>\n"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Second, set up UI components (e.g. buttons) with event handlers that access the\nchart's state and toggle milestone labels. This is achieved using the ",(0,jsx_runtime.jsx)(_components.code,{children:"ref"})," object declared above\nand with function ",(0,jsx_runtime.jsx)(_components.code,{children:"toggleMilestone"}),".\nThe pseudo-code below shows a hypothetical handler that toggles a label 'A'."]}),"\n",(0,jsx_runtime.jsx)(dist.Hw,{language:"javascript",code:"\n// handler for a UI component\nconst onClick = () => {\n  ref?.current?.toggleMilestone('A')\n}\n"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Altogether, setting up a chart to use milestones can involve multiple parts working together.\nThe source code for the examples on this page is available in the\n",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/tkonopka/chsk/blob/main/packages/core/stories/components/Milestone.animations.tsx",target:"_blank",rel:"nofollow noopener noreferrer",children:"source repository"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"entry-animation",children:"Entry animation"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Prop ",(0,jsx_runtime.jsx)(_components.code,{children:"enterOn"})," specifies the milestone at which a component should appear into view. Prop ",(0,jsx_runtime.jsx)(_components.code,{children:"enter"})," specifies the initial state of the animation."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The example below sets prop ",(0,jsx_runtime.jsx)(_components.code,{children:"enter"})," to the string ",(0,jsx_runtime.jsx)(_components.code,{children:"hidden"})," to achieve a fade-in effect.\nClick on the buttons to toggle a milestone and observe the animation."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"entry milestones",children:(0,jsx_runtime.jsx)(EntryMilestones,{})})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["(Above, axes should appear appear gradually and disappear abruptly.\nThe abrupt change is achieved by setting prop ",(0,jsx_runtime.jsx)(_components.code,{children:"exit"})," to ",(0,jsx_runtime.jsx)(_components.code,{children:"null"}),".)"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"exit-animation",children:"Exit animation"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Props ",(0,jsx_runtime.jsx)(_components.code,{children:"exitOn"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"exit"})," are analogous to ",(0,jsx_runtime.jsx)(_components.code,{children:"enterOn"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"enter"}),", respectively,\nexcept that they determine how components disappear."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["In the example below, prop ",(0,jsx_runtime.jsx)(_components.code,{children:"exit"})," is set to the string ",(0,jsx_runtime.jsx)(_components.code,{children:"hidden"})," to achieve a fade-out effect.\nClick on the buttons to toggle the milestones and make the axes fade out."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"exit milestones",children:(0,jsx_runtime.jsx)(ExitMilestones,{})})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["(Above, axes should appear abruptly and disappear gradually.\nThe abrupt effect is achieved by setting ",(0,jsx_runtime.jsx)(_components.code,{children:"enter"})," to ",(0,jsx_runtime.jsx)(_components.code,{children:"null"}),".)"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"milestone-interactions",children:"Milestone interactions"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The entry and exit settings can be used together. In the example below, the left and right axes are configured to be invisible and visible by default, respectively."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"entry and exit milestones",children:(0,jsx_runtime.jsx)(EntryExitMilestones,{})})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Some sequences of button clicks may produce similar effects, or not produce any changes at all."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For example, consider setting milestone 'A' so that the left axis is in view. In this state, toggling either milestone 'A' or 'B' will have the same effect - both these changes should make the axis disappear."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"As another example, consider setting milestones 'A' and then 'B'. The left axis should first appear into view and then disappear. Toggling milestone 'A' in this state to make the left axis appear will not produce any effect because milestone 'B' signals the component should be invisible."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"custom-animation-states",children:"Custom animation states"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["In the examples, props ",(0,jsx_runtime.jsx)(_components.code,{children:"enter"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"exit"})," were set to the string ",(0,jsx_runtime.jsx)(_components.code,{children:"hidden"})," or to ",(0,jsx_runtime.jsx)(_components.code,{children:"null"})," to achieve simple fade-in/fade-out effects.\nThese props can also accept custom objects to create more complex animations.\nBelow, entry animations include a slide from the left side and exit animations use a zoom/scale effect."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"custom states",children:(0,jsx_runtime.jsx)(EntryExitMilestones,{enter:{opacity:0,x:-80},exit:{opacity:0,scale:3}})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"transition",children:"Transition"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Prop ",(0,jsx_runtime.jsx)(_components.code,{children:"transition"})," accepts an object that specifies the properties of the animation.\nThe example below uses a spring-based transition with low 'mass' and low 'stiffness',\nresulting in slow/gradual effect."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"custom transitions",children:(0,jsx_runtime.jsx)(EntryExitMilestones,{enter:{opacity:0},exit:{opacity:0},transition:{type:"spring",mass:.5,stiffness:10}})})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"It is also possible to adjust transitions via themes."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"custom-actions",children:"Custom actions"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Props ",(0,jsx_runtime.jsx)(_components.code,{children:"onEnter"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"onExit"})," accept custom functions that are executed when the\nchart reaches the relevant milestones."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The example below uses custom functions to log to the console."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"custom actions",children:(0,jsx_runtime.jsx)(EntryExitMilestones,{onEnter:()=>{console.log("enter")},onExit:()=>{console.log("exit")}})})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["(Toggle the milestones, then open the console with ",(0,jsx_runtime.jsx)(_components.code,{children:"Ctrl Shift J"})," to see logging messages.)"]})]})}}};const MilestoneMotion_stories=componentMeta}}]);