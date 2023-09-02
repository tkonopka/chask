"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[6274,939],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/flowchart/ArcArrow.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomStyle:()=>CustomStyle,DoubleSided:()=>DoubleSided,Left:()=>Left,Narrow:()=>Narrow,Right:()=>Right,Wide:()=>Wide,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ArcArrow_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),arrows=__webpack_require__("./packages/annotation/src/flowchart/arrows.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","start","end","units","heads","headWidth","headLength","stemWidth","r"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var ArcArrow=function ArcArrow(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"left":_ref$variant,start=_ref.start,end=_ref.end,_ref$units=_ref.units,units=void 0===_ref$units?"view":_ref$units,_ref$heads=_ref.heads,heads=void 0===_ref$heads?[!1,!0]:_ref$heads,_ref$headWidth=_ref.headWidth,headWidth=void 0===_ref$headWidth?20:_ref$headWidth,_ref$headLength=_ref.headLength,headLength=void 0===_ref$headLength?14:_ref$headLength,_ref$stemWidth=_ref.stemWidth,stemWidth=void 0===_ref$stemWidth?8:_ref$stemWidth,r=_ref.r,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),size=(0,chsk_core_es.Bs9)().size,scales=(0,chsk_core_es.kE1)().scales,lineStart=(0,chsk_core_es.eE7)(start,units,size,scales),lineEnd=(0,chsk_core_es.eE7)(end,units,size,scales),path=(0,arrows.cD)({start:lineStart,end:lineEnd,heads,headWidth,headLength,stemWidth,r,variant});return(0,jsx_runtime.jsx)(chsk_core_es.y$t,_extends({variant:"arc-arrow",d:path},props))};ArcArrow.displayName="ArcArrow";try{ArcArrow.displayName="ArcArrow",ArcArrow.__docgenInfo={description:"",displayName:"ArcArrow",props:{variant:{defaultValue:{value:"left"},description:"handedness of arc curvature",name:"variant",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},r:{defaultValue:null,description:"radius of arc",name:"r",required:!1,type:{name:"number"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},start:{defaultValue:null,description:"start position",name:"start",required:!0,type:{name:"PositionSpec"}},transition:{defaultValue:null,description:"transition for animation",name:"transition",required:!1,type:{name:"TransitionSpec"}},initial:{defaultValue:null,description:"(adjustment to) initial state",name:"initial",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},animate:{defaultValue:null,description:"(adjustment to) target state",name:"animate",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},exit:{defaultValue:null,description:"(adjustment to) exit state",name:"exit",required:!1,type:{name:"MakeCustomValueType<TargetProperties> | TargetTransformer"}},end:{defaultValue:null,description:"end position",name:"end",required:!0,type:{name:"PositionSpec"}},onDoubleClick:{defaultValue:null,description:"handler for double-click event",name:"onDoubleClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},units:{defaultValue:{value:"view"},description:"units for start and end positions",name:"units",required:!1,type:{name:"PositionUnits"}},heads:{defaultValue:{value:"[false, true]"},description:"toggling arrow heads at the start and end positions",name:"heads",required:!1,type:{name:"[boolean, boolean]"}},headWidth:{defaultValue:{value:"20"},description:"width of arrowhead (orthogonal to arrow axis)",name:"headWidth",required:!1,type:{name:"number"}},headLength:{defaultValue:{value:"14"},description:"length of arrowhead (along arrow axis)",name:"headLength",required:!1,type:{name:"number"}},stemWidth:{defaultValue:{value:"8"},description:"width/thickness of arrow stem",name:"stemWidth",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/flowchart/ArcArrow.tsx#ArcArrow"]={docgenInfo:ArcArrow.__docgenInfo,name:"ArcArrow",path:"packages/annotation/src/flowchart/ArcArrow.tsx#ArcArrow"})}catch(__react_docgen_typescript_loader_error){}var _Narrow$parameters,_Narrow$parameters2,_Wide$parameters,_Wide$parameters2,_Left$parameters,_Left$parameters2,_Right$parameters,_Right$parameters2,_DoubleSided$paramete,_DoubleSided$paramete2,_CustomStyle$paramete,_CustomStyle$paramete2,decorators=__webpack_require__("./packages/annotation/stories/decorators.tsx");function ArcArrow_stories_extends(){return ArcArrow_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},ArcArrow_stories_extends.apply(this,arguments)}const ArcArrow_stories={title:"Addons/Annotation/Flowchart/ArcArrow",component:ArcArrow};var Narrow={name:"narrow",args:{start:[50,160],end:[200,60],units:"absolute",stemWidth:10,headWidth:30,headLength:40,style:{fillOpacity:1}},decorators:[decorators.ee]},Wide={name:"wide",args:{start:[50,160],end:[200,60],units:"absolute",stemWidth:40,headWidth:60,headLength:20,style:{fillOpacity:1}},decorators:[decorators.ee]},Left={name:"left",args:{start:[50,160],end:[200,60],units:"absolute",variant:"left",r:400,style:{fillOpacity:1}},decorators:[decorators.ee]},Right={name:"right",args:{start:[50,160],end:[200,60],units:"absolute",variant:"right",r:400,style:{fillOpacity:1}},decorators:[decorators.ee]},DoubleSided={name:"double sided",args:{start:[50,160],end:[200,60],units:"absolute",heads:[!0,!0],variant:"left",r:400,style:{fillOpacity:1}},decorators:[decorators.ee]},CustomStyle={name:"custom style",args:{start:[50,160],end:[200,60],units:"absolute",variant:"left",r:400,style:{strokeWidth:2,stroke:"#dd0000",fill:"#dd7777",fillOpacity:1}},decorators:[decorators.ee]};Narrow.parameters=ArcArrow_stories_extends({},Narrow.parameters,{docs:ArcArrow_stories_extends({},null==(_Narrow$parameters=Narrow.parameters)?void 0:_Narrow$parameters.docs,{source:ArcArrow_stories_extends({originalSource:"{\n  name: 'narrow',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    stemWidth: 10,\n    headWidth: 30,\n    headLength: 40,\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Narrow$parameters2=Narrow.parameters)||null==(_Narrow$parameters2=_Narrow$parameters2.docs)?void 0:_Narrow$parameters2.source)})}),Wide.parameters=ArcArrow_stories_extends({},Wide.parameters,{docs:ArcArrow_stories_extends({},null==(_Wide$parameters=Wide.parameters)?void 0:_Wide$parameters.docs,{source:ArcArrow_stories_extends({originalSource:"{\n  name: 'wide',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    stemWidth: 40,\n    headWidth: 60,\n    headLength: 20,\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Wide$parameters2=Wide.parameters)||null==(_Wide$parameters2=_Wide$parameters2.docs)?void 0:_Wide$parameters2.source)})}),Left.parameters=ArcArrow_stories_extends({},Left.parameters,{docs:ArcArrow_stories_extends({},null==(_Left$parameters=Left.parameters)?void 0:_Left$parameters.docs,{source:ArcArrow_stories_extends({originalSource:"{\n  name: 'left',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    variant: 'left',\n    r: 400,\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Left$parameters2=Left.parameters)||null==(_Left$parameters2=_Left$parameters2.docs)?void 0:_Left$parameters2.source)})}),Right.parameters=ArcArrow_stories_extends({},Right.parameters,{docs:ArcArrow_stories_extends({},null==(_Right$parameters=Right.parameters)?void 0:_Right$parameters.docs,{source:ArcArrow_stories_extends({originalSource:"{\n  name: 'right',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    variant: 'right',\n    r: 400,\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_Right$parameters2=Right.parameters)||null==(_Right$parameters2=_Right$parameters2.docs)?void 0:_Right$parameters2.source)})}),DoubleSided.parameters=ArcArrow_stories_extends({},DoubleSided.parameters,{docs:ArcArrow_stories_extends({},null==(_DoubleSided$paramete=DoubleSided.parameters)?void 0:_DoubleSided$paramete.docs,{source:ArcArrow_stories_extends({originalSource:"{\n  name: 'double sided',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    heads: [true, true],\n    variant: 'left',\n    r: 400,\n    style: {\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_DoubleSided$paramete2=DoubleSided.parameters)||null==(_DoubleSided$paramete2=_DoubleSided$paramete2.docs)?void 0:_DoubleSided$paramete2.source)})}),CustomStyle.parameters=ArcArrow_stories_extends({},CustomStyle.parameters,{docs:ArcArrow_stories_extends({},null==(_CustomStyle$paramete=CustomStyle.parameters)?void 0:_CustomStyle$paramete.docs,{source:ArcArrow_stories_extends({originalSource:"{\n  name: 'custom style',\n  args: {\n    start: [50, 160],\n    end: [200, 60],\n    units: 'absolute',\n    variant: 'left',\n    r: 400,\n    style: {\n      strokeWidth: 2,\n      stroke: '#dd0000',\n      fill: '#dd7777',\n      fillOpacity: 1\n    }\n  },\n  decorators: [ChartDecorator]\n}"},null==(_CustomStyle$paramete2=CustomStyle.parameters)||null==(_CustomStyle$paramete2=_CustomStyle$paramete2.docs)?void 0:_CustomStyle$paramete2.source)})});var __namedExportsOrder=["Narrow","Wide","Left","Right","DoubleSided","CustomStyle"]},"./packages/annotation/src/flowchart/arrows.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cD:()=>getArcArrowPath,cY:()=>getBlockArrowPath});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_typography_lines__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/annotation/src/typography/lines.ts"),translatePoints=function translatePoints(points,translate){return points.map((function(point){return[point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+translate[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]+translate[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]]}))},rotateAndTranslatePoints=function rotateAndTranslatePoints(points,translate,cosAngle,sinAngle){return points.map((function(point){return[translate[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]-(cosAngle*point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+sinAngle*point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]),translate[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-(sinAngle*point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]-cosAngle*point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])]}))},stemPoints=function stemPoints(halfStemWidth){return 0===halfStemWidth?[[0,0]]:[[-halfStemWidth,0],[halfStemWidth,0]]},headPoints=function headPoints(halfStemWidth,halfHeadWidth,headLength){var points=[[-halfStemWidth,-headLength],[-halfHeadWidth,-headLength],[0,0],[halfHeadWidth,-headLength],[halfStemWidth,-headLength]];return halfStemWidth===halfHeadWidth?points.slice(1,4):points},caretPoints=function caretPoints(halfStemWidth,halfHeadWidth,headLength){var points=headPoints(halfStemWidth,halfHeadWidth,-headLength);return translatePoints(points,[0,-headLength])},getClosedPath=function getClosedPath(points){var _points$,_points$2;return"M"+((null==(_points$=points[0])?void 0:_points$[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X])+","+(null==(_points$2=points[0])?void 0:_points$2[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]))+points.slice(1).map((function(point){return"L"+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+","+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]})).join("")+"Z"},getBlockArrowPath=function getBlockArrowPath(props){var points=function getBlockArrowPoints(_ref){var start=_ref.start,end=_ref.end,heads=_ref.heads,headWidth=_ref.headWidth,headLength=_ref.headLength,stemWidth=_ref.stemWidth,_ref$caret=_ref.caret,caret=void 0!==_ref$caret&&_ref$caret,_getStartToEndAxis=(0,_typography_lines__WEBPACK_IMPORTED_MODULE_1__.MW)(start,end),deltaX=_getStartToEndAxis.deltaX,deltaY=_getStartToEndAxis.deltaY,cosBeta=_getStartToEndAxis.cosBeta,sinBeta=_getStartToEndAxis.sinBeta,halfLength=Math.sqrt(deltaX*deltaX+deltaY*deltaY)/2,halfStemWidth=stemWidth/2,halfHeadWidth=headWidth/2,pointsA=heads[0]?headPoints(halfStemWidth,halfHeadWidth,headLength):caret?caretPoints(halfStemWidth,halfHeadWidth,headLength):stemPoints(halfStemWidth),pointsB=heads[1]?headPoints(-halfStemWidth,-halfHeadWidth,-headLength):caret?caretPoints(-halfStemWidth,-halfHeadWidth,-headLength):stemPoints(-halfStemWidth),result=translatePoints(pointsA,[0,halfLength]).concat(translatePoints(pointsB,[0,-halfLength])).map((function(point){return[point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-halfLength]}));return rotateAndTranslatePoints(result,start,cosBeta,sinBeta)}(props);return getClosedPath(points)},getTangent=function getTangent(center,position,variant){void 0===variant&&(variant="left");var deltaX=position[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]-center[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],deltaY=position[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-center[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y],angle=(Math.atan(deltaY/deltaX)+(deltaX<0?Math.PI:0)+("left"===variant?0:-Math.PI)+2*Math.PI)%(2*Math.PI);return{angle,cosAngle:Math.cos(angle),sinAngle:Math.sin(angle)}},getArcArrowPath=function getArcArrowPath(_ref2){var _transformedStart$,_transformedStart$2,_transformedEnd$,_transformedEnd$2,start=_ref2.start,end=_ref2.end,heads=_ref2.heads,headWidth=_ref2.headWidth,headLength=_ref2.headLength,stemWidth=_ref2.stemWidth,r=_ref2.r,_ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?"right":_ref2$variant,halfStemWidth=stemWidth/2,halfHeadWidth=headWidth/2,pointsStart=heads[0]?headPoints(halfStemWidth,halfHeadWidth,headLength):stemPoints(0),pointsEnd=heads[1]?headPoints(-halfStemWidth,-halfHeadWidth,-headLength):stemPoints(0);if(void 0===r){var _getStartToEndAxis2=(0,_typography_lines__WEBPACK_IMPORTED_MODULE_1__.MW)(start,end),deltaX=_getStartToEndAxis2.deltaX,deltaY=_getStartToEndAxis2.deltaY,cosBeta=_getStartToEndAxis2.cosBeta,sinBeta=_getStartToEndAxis2.sinBeta,halfLength=Math.sqrt(deltaX*deltaX+deltaY*deltaY)/2,rawPoints=translatePoints(pointsStart,[0,halfLength]).concat(translatePoints(pointsEnd,[0,-halfLength])).map((function(point){return[point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-halfLength]})),points=rotateAndTranslatePoints(rawPoints,start,cosBeta,sinBeta);return getClosedPath(points)}var center=function getCenter(start,end,r,variant){var deltaX=end[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]-start[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X],deltaY=end[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-start[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y],theta=Math.atan(-deltaY/deltaX),mid=[(start[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+end[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X])/2,(start[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]+end[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])/2],eta=theta+(deltaX<0?Math.PI:0)+("left"===variant?Math.PI/2:-Math.PI/2);return[mid[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+r*Math.cos(eta),mid[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]-r*Math.sin(eta)]}(start,end,r,variant),_getTangent=getTangent(center,start,variant),startCosBeta=_getTangent.cosAngle,startSinBeta=_getTangent.sinAngle,_getTangent2=getTangent(center,end,variant),endCosBeta=_getTangent2.cosAngle,endSinBeta=_getTangent2.sinAngle,transformedStart=rotateAndTranslatePoints(pointsStart,start,startCosBeta,startSinBeta),transformedEnd=rotateAndTranslatePoints(pointsEnd,end,endCosBeta,endSinBeta),pStart0=(null==(_transformedStart$=transformedStart[0])?void 0:_transformedStart$[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X])+" "+(null==(_transformedStart$2=transformedStart[0])?void 0:_transformedStart$2[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]),pEnd0=(null==(_transformedEnd$=transformedEnd[0])?void 0:_transformedEnd$[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X])+" "+(null==(_transformedEnd$2=transformedEnd[0])?void 0:_transformedEnd$2[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y]),result=["M"+pStart0];transformedStart.slice(1).forEach((function(point){return result.push("L "+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+" "+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])}));var startSweep="left"===variant?0:1;result.push("A "+r+" "+r+" 0 0 "+startSweep+" "+pEnd0),transformedEnd.slice(1).forEach((function(point){return result.push("L "+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.X]+" "+point[_chsk_core__WEBPACK_IMPORTED_MODULE_0__.Y])}));var endSweep="left"===variant?1:0;return result.push("A "+r+" "+r+" 0 0 "+endSweep+" "+pStart0),result.join("")}},"./packages/annotation/src/typography/lines.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gg:()=>getBracketPositions,MW:()=>getStartToEndAxis,qA:()=>getBracePositions,wT:()=>getLineAbsolutePositions});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),getLineAbsolutePositions=function getLineAbsolutePositions(_ref){var start=_ref.start,end=_ref.end,_ref$units=_ref.units,units=void 0===_ref$units?"view":_ref$units,_ref$expansion=_ref.expansion,expansion=void 0===_ref$expansion?[0,0]:_ref$expansion,scales=_ref.scales,size=_ref.size,xExpansion=scales.x.bandwidth()*expansion[0],yExpansion=scales.y.bandwidth()*expansion[1],lineStart=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.eE7)(start,units,size,scales),lineEnd=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.eE7)(end,units,size,scales);return{lineStart:lineStart=[lineStart[0]-xExpansion,lineStart[1]-yExpansion],lineEnd:lineEnd=[lineEnd[0]+xExpansion,lineEnd[1]+yExpansion]}},getStartToEndAxis=function getStartToEndAxis(start,end){var deltaX=end[0]-start[0],deltaY=end[1]-start[1],theta=Math.atan(-deltaY/deltaX),beta=Math.PI/2-theta,adjustment=deltaX<0?Math.PI:0;return{deltaX,deltaY,cosBeta:Math.cos(beta+adjustment),sinBeta:Math.sin(beta+adjustment)}},getTickPositions=function getTickPositions(start,end,size,cosBeta,sinBeta){return{tickStart:[start[0]+size*cosBeta,start[1]+size*sinBeta],tickEnd:[end[0]+size*cosBeta,end[1]+size*sinBeta]}},getBracketPositions=function getBracketPositions(_ref2){var start=_ref2.start,end=_ref2.end,size=_ref2.size,_getStartToEndAxis=getStartToEndAxis(start,end),cosBeta=_getStartToEndAxis.cosBeta,sinBeta=_getStartToEndAxis.sinBeta,_getTickPositions=getTickPositions(start,end,size,cosBeta,sinBeta);return{tickStart:_getTickPositions.tickStart,lineStart:start,lineEnd:end,tickEnd:_getTickPositions.tickEnd}},getBracePositions=function getBracePositions(_ref3){var start=_ref3.start,end=_ref3.end,pinch=_ref3.pinch,size=_ref3.size,r=_ref3.r,_getStartToEndAxis2=getStartToEndAxis(start,end),deltaX=_getStartToEndAxis2.deltaX,deltaY=_getStartToEndAxis2.deltaY,cosBeta=_getStartToEndAxis2.cosBeta,sinBeta=_getStartToEndAxis2.sinBeta,_getTickPositions2=getTickPositions(start,end,size,cosBeta,sinBeta),tickStart=_getTickPositions2.tickStart,tickEnd=_getTickPositions2.tickEnd,braceStart=[start[0]+r*sinBeta,start[1]-r*cosBeta],braceEnd=[end[0]-r*sinBeta,end[1]+r*cosBeta];pinch=Math.max(0,Math.min(1,pinch));var lineMiddle=[start[0]+pinch*deltaX,start[1]+pinch*deltaY];return{tickStart,braceStart,pinchStart:[lineMiddle[0]-r*sinBeta,lineMiddle[1]+r*cosBeta],lineMiddle,pinchMiddle:[lineMiddle[0]-size*cosBeta,lineMiddle[1]-size*sinBeta],pinchEnd:[lineMiddle[0]+r*sinBeta,lineMiddle[1]-r*cosBeta],braceEnd,tickEnd}}},"./packages/annotation/stories/flowchart/ArcArrow.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_ArcArrow_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/annotation/stories/flowchart/ArcArrow.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_ArcArrow_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"arcarrow",children:"ArcArrow"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ArcArrow"})," draws a curved arrow."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_ArcArrow_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"arrow-shape",children:"Arrow shape"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ArcArrow"})," shares many props with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"BlockArrow"}),".\nIn particular, props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"stemWidth"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"headWidth"}),", and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"headLength"})," determine the arrow shape."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ArcArrow_stories__WEBPACK_IMPORTED_MODULE_4__.Narrow}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ArcArrow_stories__WEBPACK_IMPORTED_MODULE_4__.Wide}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"curvature-and-variants",children:"Curvature and variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"r"})," sets a radius of curvature for the arrow body.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"variant"})," determines the 'handed-ness' of the curvature."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ArcArrow_stories__WEBPACK_IMPORTED_MODULE_4__.Left}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ArcArrow_stories__WEBPACK_IMPORTED_MODULE_4__.Right}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"arrow-heads",children:"Arrow heads"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["By default, ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ArcArrow"})," creates an arrowhead only at the end position.\nArrowheads can be configured at each side via prop ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"heads"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ArcArrow_stories__WEBPACK_IMPORTED_MODULE_4__.DoubleSided}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Arrows can be styled using css."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_ArcArrow_stories__WEBPACK_IMPORTED_MODULE_4__.CustomStyle})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_chsk_chsk_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);