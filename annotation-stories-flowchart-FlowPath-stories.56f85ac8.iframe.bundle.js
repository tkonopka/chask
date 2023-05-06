"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[896],{"./packages/annotation/stories/flowchart/FlowPath.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComplexLine:()=>ComplexLine,NaturalCurve:()=>NaturalCurve,SimpleLine:()=>SimpleLine,SlowTransition:()=>SlowTransition,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FlowPath_stories});var _SimpleLine$parameter,_SimpleLine$parameter2,_SimpleLine$parameter3,_ComplexLine$paramete,_ComplexLine$paramete2,_ComplexLine$paramete3,_NaturalCurve$paramet,_NaturalCurve$paramet2,_NaturalCurve$paramet3,_SlowTransition$param,_SlowTransition$param2,_SlowTransition$param3,src=__webpack_require__("./packages/annotation/src/index.tsx"),react=__webpack_require__("./node_modules/react/index.js"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),FlowMilestones=function FlowMilestones(_ref){var points=_ref.points,_ref$curve=_ref.curve,curve=void 0===_ref$curve?"Linear":_ref$curve,style=_ref.style,transition=_ref.transition,ref=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return function toggleMilestone(m){var _ref$current;null==(_ref$current=ref.current)||_ref$current.toggleMilestone(m)}("A")},children:"Toggle milestone"})}),(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{fref:ref,size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},theme:{path:{default:{fillOpacity:0}}},children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)(src.Po,{id:"triangle",variant:"Triangle",size:20,style:{fill:"#222222",fillOpacity:1}})}),(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsxs)(chsk_core_es.G7x,{scaleX:{variant:"band",domain:["A","B","C","D","E","F"],padding:.2},scaleY:{variant:"linear",domain:[0,100]},children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom"}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"}),(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"A",children:(0,jsx_runtime.jsx)(src.Qs,{points,curve,transition,style,markerEnd:"triangle"})})]})]})]})};try{FlowMilestones.displayName="FlowMilestones",FlowMilestones.__docgenInfo={description:"",displayName:"FlowMilestones",props:{curve:{defaultValue:{value:"Linear"},description:"curve type",name:"curve",required:!1,type:{name:"enum",value:[{value:'"Linear"'},{value:'"MonotoneX"'},{value:'"MonotoneY"'},{value:'"Natural"'},{value:'"Step"'},{value:'"StepAfter"'},{value:'"StepBefore"'},{value:'"BasisOpen"'},{value:'"CardinalOpen"'},{value:'"CatmullRomOpen"'},{value:'"BasisClosed"'},{value:'"CardinalClosed"'},{value:'"CatmullRomClosed"'},{value:'"LinearClosed"'}]}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},points:{defaultValue:null,description:"points along path",name:"points",required:!0,type:{name:"PositionSpec[]"}},transition:{defaultValue:null,description:"transition",name:"transition",required:!1,type:{name:"FlowAnimationProp"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/flowchart/FlowMilestones.tsx#FlowMilestones"]={docgenInfo:FlowMilestones.__docgenInfo,name:"FlowMilestones",path:"packages/annotation/stories/flowchart/FlowMilestones.tsx#FlowMilestones"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const FlowPath_stories={title:"Addons/Annotation/Flowchart/FlowPath",component:src.Qs};var SimpleLine={render:function render(){return(0,jsx_runtime.jsx)(FlowMilestones,{points:[["A",80],["D",80]]})},name:"simple line"},ComplexLine={render:function render(){return(0,jsx_runtime.jsx)(FlowMilestones,{points:[["A",80],["D",80],["D",20],["B",20],["B",70]],style:{fillOpacity:0}})},name:"complex line"},NaturalCurve={render:function render(){return(0,jsx_runtime.jsx)(FlowMilestones,{points:[["A",80],["D",80],["D",20],["B",20],["B",70]],curve:"Natural"})},name:"natural curve"},SlowTransition={render:function render(){return(0,jsx_runtime.jsx)(FlowMilestones,{points:[["A",80],["D",80],["D",20],["B",20],["B",70]],curve:"Natural",transition:{pathLength:{duration:3}}})},name:"slow transition"};SimpleLine.parameters=_extends({},SimpleLine.parameters,{docs:_extends({},null==(_SimpleLine$parameter=SimpleLine.parameters)?void 0:_SimpleLine$parameter.docs,{source:_extends({originalSource:"{\n  render: () => <FlowMilestones points={[['A', 80], ['D', 80]]} />,\n  name: 'simple line'\n}"},null==(_SimpleLine$parameter2=SimpleLine.parameters)||null==(_SimpleLine$parameter3=_SimpleLine$parameter2.docs)?void 0:_SimpleLine$parameter3.source)})}),ComplexLine.parameters=_extends({},ComplexLine.parameters,{docs:_extends({},null==(_ComplexLine$paramete=ComplexLine.parameters)?void 0:_ComplexLine$paramete.docs,{source:_extends({originalSource:"{\n  render: () => <FlowMilestones points={[['A', 80], ['D', 80], ['D', 20], ['B', 20], ['B', 70]]} style={{\n    fillOpacity: 0\n  }} />,\n  name: 'complex line'\n}"},null==(_ComplexLine$paramete2=ComplexLine.parameters)||null==(_ComplexLine$paramete3=_ComplexLine$paramete2.docs)?void 0:_ComplexLine$paramete3.source)})}),NaturalCurve.parameters=_extends({},NaturalCurve.parameters,{docs:_extends({},null==(_NaturalCurve$paramet=NaturalCurve.parameters)?void 0:_NaturalCurve$paramet.docs,{source:_extends({originalSource:"{\n  render: () => <FlowMilestones points={[['A', 80], ['D', 80], ['D', 20], ['B', 20], ['B', 70]]} curve={'Natural'} />,\n  name: 'natural curve'\n}"},null==(_NaturalCurve$paramet2=NaturalCurve.parameters)||null==(_NaturalCurve$paramet3=_NaturalCurve$paramet2.docs)?void 0:_NaturalCurve$paramet3.source)})}),SlowTransition.parameters=_extends({},SlowTransition.parameters,{docs:_extends({},null==(_SlowTransition$param=SlowTransition.parameters)?void 0:_SlowTransition$param.docs,{source:_extends({originalSource:"{\n  render: () => <FlowMilestones points={[['A', 80], ['D', 80], ['D', 20], ['B', 20], ['B', 70]]} curve={'Natural'} transition={{\n    pathLength: {\n      duration: 3\n    }\n  }} />,\n  name: 'slow transition'\n}"},null==(_SlowTransition$param2=SlowTransition.parameters)||null==(_SlowTransition$param3=_SlowTransition$param2.docs)?void 0:_SlowTransition$param3.source)})});var __namedExportsOrder=["SimpleLine","ComplexLine","NaturalCurve","SlowTransition"]}}]);