"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2e3],{"./packages/annotation/stories/symbols/Segment.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InLegend:()=>InLegend,Styled:()=>Styled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Segment_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),motion_minimal=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),constants=__webpack_require__("./packages/annotation/src/symbols/constants.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","cx","cy","r","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Segment=function Segment(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,_ref$cx=_ref.cx,cx=void 0===_ref$cx?0:_ref$cx,_ref$cy=_ref.cy,cy=void 0===_ref$cy?0:_ref$cy,_ref$r=_ref.r,r=void 0===_ref$r?1:_ref$r,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),compositeClassName=(0,chsk_core_es.gjB)(variant,className),points=constants.nF.map((function(coords){return[cx+coords[chsk_core_es.X]*r,cy+coords[chsk_core_es.Y]*r]})),config={x1:points[0][chsk_core_es.X],y1:points[0][chsk_core_es.Y],x2:points[1][chsk_core_es.X],y2:points[1][chsk_core_es.Y]};return(0,jsx_runtime.jsx)(motion_minimal.m.line,_extends({role:setRole?variant:void 0,initial:config,animate:config,className:compositeClassName},props))};Segment.displayName="Segment";try{Segment.displayName="Segment",Segment.__docgenInfo={description:"",displayName:"Segment",props:{cx:{defaultValue:{value:"0"},description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:{value:"0"},description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:{value:"1"},description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/symbols/Segment.tsx#Segment"]={docgenInfo:Segment.__docgenInfo,name:"Segment",path:"packages/annotation/src/symbols/Segment.tsx#Segment"})}catch(__react_docgen_typescript_loader_error){}var _InLegend$parameters,_InLegend$parameters2,_InLegend$parameters3,_Styled$parameters,_Styled$parameters2,_Styled$parameters2$d,decorators=__webpack_require__("./packages/annotation/stories/symbols/decorators.tsx");function Segment_stories_extends(){return Segment_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Segment_stories_extends.apply(this,arguments)}const Segment_stories={title:"Addons/Annotation/Symbols/Segment",component:Segment};var InLegend={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsx)(chsk_core_es.G7x,{data:decorators.ke,children:(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{position:[10,10],positionUnits:"absolute",itemSize:[90,20],symbol:Segment})})]})},name:"legend"},Styled={render:function render(){return(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333",display:"inline-block"},children:[(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsx)(chsk_core_es.G7x,{data:decorators.ke,children:(0,jsx_runtime.jsx)(chsk_core_es.DeQ,{position:[10,10],positionUnits:"absolute",itemSize:[90,20],symbol:Segment,symbolStyle:{strokeWidth:4,strokeDasharray:"5 5"}})})]})},name:"styled"};InLegend.parameters=Segment_stories_extends({},InLegend.parameters,{docs:Segment_stories_extends({},null==(_InLegend$parameters=InLegend.parameters)?void 0:_InLegend$parameters.docs,{source:Segment_stories_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{\n    margin: '0.5em',\n    border: 'solid 1px #aa3333',\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <View data={viewSeriesIndexesKeys}>\n                <Legend position={[10, 10]} positionUnits={'absolute'} itemSize={[90, 20]} symbol={Segment} />\n            </View>\n        </Chart>,\n  name: 'legend'\n}"},null==(_InLegend$parameters2=InLegend.parameters)||null==(_InLegend$parameters3=_InLegend$parameters2.docs)?void 0:_InLegend$parameters3.source)})}),Styled.parameters=Segment_stories_extends({},Styled.parameters,{docs:Segment_stories_extends({},null==(_Styled$parameters=Styled.parameters)?void 0:_Styled$parameters.docs,{source:Segment_stories_extends({originalSource:"{\n  render: () => <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{\n    margin: '0.5em',\n    border: 'solid 1px #aa3333',\n    display: 'inline-block'\n  }}>\n            <Surface variant={'inner'} />\n            <View data={viewSeriesIndexesKeys}>\n                <Legend position={[10, 10]} positionUnits={'absolute'} itemSize={[90, 20]} symbol={Segment} symbolStyle={{\n        strokeWidth: 4,\n        strokeDasharray: '5 5'\n      }} />\n            </View>\n        </Chart>,\n  name: 'styled'\n}"},null==(_Styled$parameters2=Styled.parameters)||null==(_Styled$parameters2$d=_Styled$parameters2.docs)?void 0:_Styled$parameters2$d.source)})});var __namedExportsOrder=["InLegend","Styled"]},"./packages/annotation/src/symbols/constants.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bb:()=>diamondCoordinates,R6:()=>starCoordinates,SJ:()=>equilateralCoordinates,Wk:()=>goldenRectWidth,Yy:()=>pentagonCoordinates,gk:()=>goldenRectHeight,nF:()=>segmentCoordinates});var _chsk_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),phi=(1+Math.sqrt(5))/2,goldenRectWidth=.96*Math.sqrt(Math.PI*phi),goldenRectHeight=.96*Math.sqrt(Math.PI/phi),equilateralArm=2*Math.sqrt(Math.PI/(3*Math.sqrt(3)))*.94,equilateralSide=Math.sqrt(3)*equilateralArm*.94,equilateralCoordinates=[[0,-equilateralArm],[equilateralSide/2,equilateralArm/2],[-equilateralSide/2,equilateralArm/2]],diamondEdge=.96*Math.sqrt(Math.PI/2),diamondCoordinates=[[0,-diamondEdge],[diamondEdge,0],[0,diamondEdge],[-diamondEdge,0]],segmentCoordinates=[[-1.1,0],[1.1,0]],angleOffset=-Math.PI/2,pentagonCoordinates=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.w6H)(0,5).map((function(i){return[Math.cos(angleOffset+2*Math.PI*i/5),Math.sin(angleOffset+2*Math.PI*i/5)]})),starCoordinates=[];(0,_chsk_core__WEBPACK_IMPORTED_MODULE_0__.w6H)(0,5).forEach((function(i){var angle=angleOffset+2*Math.PI*(2*i/10);starCoordinates.push([1.447*Math.cos(angle),1.447*Math.sin(angle)]),angle+=2*Math.PI*.1,starCoordinates.push([(1-.447)*Math.cos(angle),(1-.447)*Math.sin(angle)])}));try{starCoordinates.displayName="starCoordinates",starCoordinates.__docgenInfo={description:"star",displayName:"starCoordinates",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/symbols/constants.tsx#starCoordinates"]={docgenInfo:starCoordinates.__docgenInfo,name:"starCoordinates",path:"packages/annotation/src/symbols/constants.tsx#starCoordinates"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/src/symbols/createConcentricSymbol.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>createConcentricSymbol});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["cx","cy","r","className","style"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var createConcentricSymbol=function createConcentricSymbol(_ref2){var _ref2$variant=_ref2.variant,variant=void 0===_ref2$variant?"background":_ref2$variant,_ref2$symbolPrimary=_ref2.symbolPrimary,symbolPrimary=void 0===_ref2$symbolPrimary?_chsk_core__WEBPACK_IMPORTED_MODULE_3__.Cdc:_ref2$symbolPrimary,_ref2$symbolSecondary=_ref2.symbolSecondary,symbolSecondary=void 0===_ref2$symbolSecondary?_chsk_core__WEBPACK_IMPORTED_MODULE_3__.Cdc:_ref2$symbolSecondary,_ref2$rMultiplier=_ref2.rMultiplier,rMultiplier=void 0===_ref2$rMultiplier?1.5:_ref2$rMultiplier,_ref2$styleModifier=_ref2.styleModifier,styleModifier=void 0===_ref2$styleModifier?{fill:"#ffffff"}:_ref2$styleModifier;return function ConcentricSymbol(_ref3){var cx=_ref3.cx,cy=_ref3.cy,r=_ref3.r,className=_ref3.className,style=_ref3.style,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref3,_excluded),_createConcentricPart=function createConcentricParts(_ref){var cx=_ref.cx,cy=_ref.cy,_ref$r=_ref.r,r=void 0===_ref$r?1:_ref$r,className=_ref.className,style=_ref.style,setRole=_ref.setRole,variant=_ref.variant,_ref$symbolPrimary=_ref.symbolPrimary,symbolPrimary=void 0===_ref$symbolPrimary?_chsk_core__WEBPACK_IMPORTED_MODULE_3__.Cdc:_ref$symbolPrimary,_ref$symbolSecondary=_ref.symbolSecondary,symbolSecondary=void 0===_ref$symbolSecondary?_chsk_core__WEBPACK_IMPORTED_MODULE_3__.Cdc:_ref$symbolSecondary,_ref$rMultiplier=_ref.rMultiplier,rMultiplier=void 0===_ref$rMultiplier?1:_ref$rMultiplier,styleModifier=_ref.styleModifier,className1=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.gjB)(null!=className?className:"default","primary"),primary=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(symbolPrimary,{key:"primary",cx,cy,r,className:className1,style,setRole}),className2=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.gjB)(null!=className?className:"default","secondary"),mergedStyle=(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)((0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.BRZ)(style,!1),styleModifier),secondary=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(symbolSecondary,{key:"secondary",cx,cy,r:r*rMultiplier,className:className2,style:mergedStyle,setRole}),isBackground="background"===variant;return{background:isBackground?secondary:primary,foreground:isBackground?primary:secondary}}({cx,cy,r,className,style,variant,symbolPrimary,symbolSecondary,rMultiplier,styleModifier}),background=_createConcentricPart.background,foreground=_createConcentricPart.foreground;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g",_extends({className},props,{children:[background,foreground]}))}};try{createConcentricSymbol.displayName="createConcentricSymbol",createConcentricSymbol.__docgenInfo={description:"",displayName:"createConcentricSymbol",props:{variant:{defaultValue:{value:"background"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"foreground"'},{value:'"background"'}]}},symbolPrimary:{defaultValue:null,description:"",name:"symbolPrimary",required:!1,type:{name:"FC<SymbolProps>"}},symbolSecondary:{defaultValue:null,description:"",name:"symbolSecondary",required:!1,type:{name:"FC<SymbolProps>"}},rMultiplier:{defaultValue:{value:"1.5"},description:"",name:"rMultiplier",required:!1,type:{name:"number"}},styleModifier:{defaultValue:{value:"{ fill: '#ffffff' }"},description:"",name:"styleModifier",required:!1,type:{name:"Partial<CSSProperties>"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/src/symbols/createConcentricSymbol.tsx#createConcentricSymbol"]={docgenInfo:createConcentricSymbol.__docgenInfo,name:"createConcentricSymbol",path:"packages/annotation/src/symbols/createConcentricSymbol.tsx#createConcentricSymbol"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/symbols/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J4:()=>ChartSymbolDecorator,SZ:()=>ConcentricCirclesFg,dY:()=>ConcentricHybrid,ke:()=>viewSeriesIndexesKeys,oW:()=>ConcentricSquares,ql:()=>ConcentricCirclesBg});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src_symbols__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/annotation/src/symbols/createConcentricSymbol.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),viewSeriesIndexesKeys={seriesIndexes:{X:0,Y:1},keys:["alpha","beta","gamma"]},ChartSymbolDecorator=function ChartSymbolDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[200,140],padding:[20,20,20,20],style:{display:"inline-block"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tgp,{variant:"inner"}),Story()]})};ChartSymbolDecorator.displayName="ChartSymbolDecorator";var ConcentricCirclesBg=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_2__.b)({variant:"background",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Cdc,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Cdc,rMultiplier:1.4,styleModifier:{fill:"#ffffff"}}),ConcentricCirclesFg=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_2__.b)({variant:"foreground",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Cdc,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Cdc,rMultiplier:.6,styleModifier:{fill:"#ffffff"}}),ConcentricSquares=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_2__.b)({variant:"foreground",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.bK0,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.bK0,rMultiplier:.6,styleModifier:{fill:"#ffffff"}}),ConcentricHybrid=(0,_src_symbols__WEBPACK_IMPORTED_MODULE_2__.b)({variant:"foreground",symbolPrimary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.bK0,symbolSecondary:_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Cdc,rMultiplier:.4,styleModifier:{fill:"#ffffff"}});try{ChartSymbolDecorator.displayName="ChartSymbolDecorator",ChartSymbolDecorator.__docgenInfo={description:"",displayName:"ChartSymbolDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ChartSymbolDecorator"]={docgenInfo:ChartSymbolDecorator.__docgenInfo,name:"ChartSymbolDecorator",path:"packages/annotation/stories/symbols/decorators.tsx#ChartSymbolDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricCirclesBg.displayName="ConcentricCirclesBg",ConcentricCirclesBg.__docgenInfo={description:"",displayName:"ConcentricCirclesBg",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesBg"]={docgenInfo:ConcentricCirclesBg.__docgenInfo,name:"ConcentricCirclesBg",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesBg"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricCirclesFg.displayName="ConcentricCirclesFg",ConcentricCirclesFg.__docgenInfo={description:"",displayName:"ConcentricCirclesFg",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesFg"]={docgenInfo:ConcentricCirclesFg.__docgenInfo,name:"ConcentricCirclesFg",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricCirclesFg"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricSquares.displayName="ConcentricSquares",ConcentricSquares.__docgenInfo={description:"",displayName:"ConcentricSquares",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricSquares"]={docgenInfo:ConcentricSquares.__docgenInfo,name:"ConcentricSquares",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricSquares"})}catch(__react_docgen_typescript_loader_error){}try{ConcentricHybrid.displayName="ConcentricHybrid",ConcentricHybrid.__docgenInfo={description:"",displayName:"ConcentricHybrid",props:{cx:{defaultValue:null,description:"x coordinate",name:"cx",required:!1,type:{name:"number"}},cy:{defaultValue:null,description:"y coordinate",name:"cy",required:!1,type:{name:"number"}},r:{defaultValue:null,description:"radius (size set so that area matches a circle with this radius)",name:"r",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/symbols/decorators.tsx#ConcentricHybrid"]={docgenInfo:ConcentricHybrid.__docgenInfo,name:"ConcentricHybrid",path:"packages/annotation/stories/symbols/decorators.tsx#ConcentricHybrid"})}catch(__react_docgen_typescript_loader_error){}},"./packages/annotation/stories/symbols/Segment.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Segment_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/annotation/stories/symbols/Segment.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Segment_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"segment",children:"Segment"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Segment"})," displays a short horizontal line segment. It is intended as a symbol for legends."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Segment_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"legends",children:"Legends"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Segment"})," accepts the same props as symbols like ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Circle"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Square"}),", and others.\nThe component can thus be used as a symbol in a legend. It can also be styled using css."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Segment_stories__WEBPACK_IMPORTED_MODULE_4__.InLegend}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Segment_stories__WEBPACK_IMPORTED_MODULE_4__.Styled})]})}}}}]);