"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[8983],{"./packages/annotation/stories/symbols/Star.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Styled:()=>Styled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Star_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),constants=__webpack_require__("./packages/annotation/src/symbols/constants.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["cx","cy","r"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Star=function Star(_ref){var _ref$cx=_ref.cx,cx=void 0===_ref$cx?0:_ref$cx,_ref$cy=_ref.cy,cy=void 0===_ref$cy?0:_ref$cy,_ref$r=_ref.r,r=void 0===_ref$r?1:_ref$r,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),points=constants.R6.map((function(coords){return[cx+coords[0]*r,cy+coords[1]*r]}));return(0,jsx_runtime.jsx)(chsk_core_es.mgq,_extends({points},props))};Star.displayName="Star";try{Star.displayName="Star",Star.__docgenInfo={description:"",displayName:"Star",props:{cx:{defaultValue:{value:"0"},description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:{value:"0"},description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:{value:"1"},description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial transition state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target transition state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/symbols/Star.tsx#Star"]={docgenInfo:Star.__docgenInfo,name:"Star",path:"packages/annotation/src/symbols/Star.tsx#Star"})}catch(__react_docgen_typescript_loader_error){}var _Styled$parameters,_Styled$parameters2,_Styled$parameters2$d,decorators=__webpack_require__("./packages/annotation/stories/symbols/decorators.tsx");function Star_stories_extends(){return Star_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Star_stories_extends.apply(this,arguments)}const Star_stories={title:"Addons/Annotation/Symbols/Star",component:Star};var Styled={name:"styled",args:{style:{fill:"#dd9999",stroke:"#993333",strokeWidth:"1px"},cx:80,cy:50,r:20},decorators:[decorators.J4]};Styled.parameters=Star_stories_extends({},Styled.parameters,{docs:Star_stories_extends({},null==(_Styled$parameters=Styled.parameters)?void 0:_Styled$parameters.docs,{source:Star_stories_extends({originalSource:"{\n  name: 'styled',\n  args: {\n    style: {\n      fill: '#dd9999',\n      stroke: '#993333',\n      strokeWidth: '1px'\n    },\n    cx: 80,\n    cy: 50,\n    r: 20\n  },\n  decorators: [ChartSymbolDecorator]\n}"},null==(_Styled$parameters2=Styled.parameters)||null==(_Styled$parameters2$d=_Styled$parameters2.docs)?void 0:_Styled$parameters2$d.source)})});var __namedExportsOrder=["Styled"]},"./packages/annotation/src/symbols/constants.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bb:()=>diamondCoordinates,R6:()=>starCoordinates,SJ:()=>equilateralCoordinates,Wk:()=>goldenRectWidth,Yy:()=>pentagonCoordinates,gk:()=>goldenRectHeight,nF:()=>segmentCoordinates});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),phi=(1+Math.sqrt(5))/2,goldenRectWidth=.96*Math.sqrt(Math.PI*phi),goldenRectHeight=.96*Math.sqrt(Math.PI/phi),equilateralArm=2*Math.sqrt(Math.PI/(3*Math.sqrt(3)))*.94,equilateralSide=Math.sqrt(3)*equilateralArm*.94,equilateralCoordinates=[[0,-equilateralArm],[equilateralSide/2,equilateralArm/2],[-equilateralSide/2,equilateralArm/2]],diamondEdge=.96*Math.sqrt(Math.PI/2),diamondCoordinates=[[0,-diamondEdge],[diamondEdge,0],[0,diamondEdge],[-diamondEdge,0]],segmentCoordinates=[[-1.1,0],[1.1,0]],angleOffset=-Math.PI/2,pentagonCoordinates=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.w6H)(0,5).map((function(i){return[Math.cos(angleOffset+2*Math.PI*i/5),Math.sin(angleOffset+2*Math.PI*i/5)]})),starCoordinates=[];(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.w6H)(0,5).forEach((function(i){var angle=angleOffset+2*Math.PI*(2*i/10);starCoordinates.push([1.447*Math.cos(angle),1.447*Math.sin(angle)]),angle+=2*Math.PI*.1,starCoordinates.push([(1-.447)*Math.cos(angle),(1-.447)*Math.sin(angle)])}));try{starCoordinates.displayName="starCoordinates",starCoordinates.__docgenInfo={description:"star",displayName:"starCoordinates",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/symbols/constants.tsx#starCoordinates"]={docgenInfo:starCoordinates.__docgenInfo,name:"starCoordinates",path:"packages/annotation/src/symbols/constants.tsx#starCoordinates"})}catch(__react_docgen_typescript_loader_error){}}}]);