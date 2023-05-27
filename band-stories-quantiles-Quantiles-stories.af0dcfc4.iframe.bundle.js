"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7593,7599,939,3392,5912,7231,3289,1435,5973,2113,2460,7382,1844,9579,204,9594,749,8176,5063,8954],{"./packages/band/stories/quantiles/Quantiles.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BarsHorizontal:()=>BarsHorizontal,BarsVertical:()=>BarsVertical,BoxesHorizontal:()=>BoxesHorizontal,BoxesVertical:()=>BoxesVertical,LinesHorizontal:()=>LinesHorizontal,LinesVertical:()=>LinesVertical,MouseClick:()=>MouseClick,SelectedIds:()=>SelectedIds,SelectedKeys:()=>SelectedKeys,WhiskerCap:()=>WhiskerCap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _BoxesVertical$parame,_BoxesVertical$parame2,_BoxesVertical$parame3,_BoxesHorizontal$para,_BoxesHorizontal$para2,_BoxesHorizontal$para3,_BarsVertical$paramet,_BarsVertical$paramet2,_BarsVertical$paramet3,_BarsHorizontal$param,_BarsHorizontal$param2,_BarsHorizontal$param3,_LinesVertical$parame,_LinesVertical$parame2,_LinesVertical$parame3,_LinesHorizontal$para,_LinesHorizontal$para2,_LinesHorizontal$para3,_SelectedIds$paramete,_SelectedIds$paramete2,_SelectedIds$paramete3,_SelectedKeys$paramet,_SelectedKeys$paramet2,_SelectedKeys$paramet3,_WhiskerCap$parameter,_WhiskerCap$parameter2,_WhiskerCap$parameter3,_MouseClick$parameter,_MouseClick$parameter2,_MouseClick$parameter3,_src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/band/src/quantiles/Quantiles.tsx"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/band/src/quantiles/BoxAndWhiskers.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/band/src/quantiles/BarAndWhisker.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/src/quantiles/LineAndWhiskers.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/band/stories/quantiles/decorators.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Band/Quantiles/Quantiles",component:_src__WEBPACK_IMPORTED_MODULE_0__.R};var BoxesVertical={name:"boxes, vertical",args:{middleStyle:{strokeWidth:2,stroke:"#222222"},component:_src__WEBPACK_IMPORTED_MODULE_1__.m},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]},BoxesHorizontal={name:"boxes, horizontal",args:{middleStyle:{strokeWidth:2,stroke:"#222222"},component:_src__WEBPACK_IMPORTED_MODULE_1__.m},component:_src__WEBPACK_IMPORTED_MODULE_0__.R,decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.E$]},BarsVertical={name:"bars, vertical",args:{boxStyle:{strokeWidth:1},whiskerStyle:{strokeWidth:1},component:_src__WEBPACK_IMPORTED_MODULE_3__.a},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]},BarsHorizontal={name:"bars, horizontal",args:{boxStyle:{strokeWidth:1},whiskerStyle:{strokeWidth:1},component:_src__WEBPACK_IMPORTED_MODULE_3__.a},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.E$]},LinesVertical={name:"lines, vertical",args:{middleStyle:{strokeWidth:3},whiskerStyle:{strokeWidth:1},component:_src__WEBPACK_IMPORTED_MODULE_4__.W},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]},LinesHorizontal={name:"lines, horizontal",args:{middleStyle:{strokeWidth:3},whiskerStyle:{strokeWidth:1},component:_src__WEBPACK_IMPORTED_MODULE_4__.W},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.E$]},SelectedIds={name:"selected ids",args:{ids:["alpha"],middleStyle:{strokeWidth:3,stroke:"#444444"},whiskerStyle:{strokeWidth:2},boxStyle:{strokeWidth:.5,stroke:"#444444"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]},SelectedKeys={name:"selected keys",args:{keys:["x"],middleStyle:{strokeWidth:3,stroke:"#444444"},whiskerStyle:{strokeWidth:2},boxStyle:{strokeWidth:.5,stroke:"#444444"}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]},WhiskerCap={name:"whisker cap",args:{middleStyle:{strokeWidth:3,stroke:"#444444"},whiskerStyle:{strokeWidth:2},boxStyle:{strokeWidth:.5,stroke:"#444444"},whiskerCapWidth:.5},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]},MouseClick={name:"mouse click",args:{middleStyle:{strokeWidth:3,stroke:"#222222"},whiskerStyle:{strokeWidth:2},handlers:{onClick:_decorators__WEBPACK_IMPORTED_MODULE_2__.Di}},decorators:[_decorators__WEBPACK_IMPORTED_MODULE_2__.Ar]};BoxesVertical.parameters=_extends({},BoxesVertical.parameters,{docs:_extends({},null==(_BoxesVertical$parame=BoxesVertical.parameters)?void 0:_BoxesVertical$parame.docs,{source:_extends({originalSource:"{\n  name: 'boxes, vertical',\n  args: {\n    middleStyle: {\n      strokeWidth: 2,\n      stroke: '#222222'\n    },\n    component: BoxAndWhiskers\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_BoxesVertical$parame2=BoxesVertical.parameters)||null==(_BoxesVertical$parame3=_BoxesVertical$parame2.docs)?void 0:_BoxesVertical$parame3.source)})}),BoxesHorizontal.parameters=_extends({},BoxesHorizontal.parameters,{docs:_extends({},null==(_BoxesHorizontal$para=BoxesHorizontal.parameters)?void 0:_BoxesHorizontal$para.docs,{source:_extends({originalSource:"{\n  name: 'boxes, horizontal',\n  args: {\n    middleStyle: {\n      strokeWidth: 2,\n      stroke: '#222222'\n    },\n    component: BoxAndWhiskers\n  },\n  component: Quantiles,\n  decorators: [ChartHorizontalQuantileDecorator]\n}"},null==(_BoxesHorizontal$para2=BoxesHorizontal.parameters)||null==(_BoxesHorizontal$para3=_BoxesHorizontal$para2.docs)?void 0:_BoxesHorizontal$para3.source)})}),BarsVertical.parameters=_extends({},BarsVertical.parameters,{docs:_extends({},null==(_BarsVertical$paramet=BarsVertical.parameters)?void 0:_BarsVertical$paramet.docs,{source:_extends({originalSource:"{\n  name: 'bars, vertical',\n  args: {\n    boxStyle: {\n      strokeWidth: 1\n    },\n    whiskerStyle: {\n      strokeWidth: 1\n    },\n    component: BarAndWhisker\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_BarsVertical$paramet2=BarsVertical.parameters)||null==(_BarsVertical$paramet3=_BarsVertical$paramet2.docs)?void 0:_BarsVertical$paramet3.source)})}),BarsHorizontal.parameters=_extends({},BarsHorizontal.parameters,{docs:_extends({},null==(_BarsHorizontal$param=BarsHorizontal.parameters)?void 0:_BarsHorizontal$param.docs,{source:_extends({originalSource:"{\n  name: 'bars, horizontal',\n  args: {\n    boxStyle: {\n      strokeWidth: 1\n    },\n    whiskerStyle: {\n      strokeWidth: 1\n    },\n    component: BarAndWhisker\n  },\n  decorators: [ChartHorizontalQuantileDecorator]\n}"},null==(_BarsHorizontal$param2=BarsHorizontal.parameters)||null==(_BarsHorizontal$param3=_BarsHorizontal$param2.docs)?void 0:_BarsHorizontal$param3.source)})}),LinesVertical.parameters=_extends({},LinesVertical.parameters,{docs:_extends({},null==(_LinesVertical$parame=LinesVertical.parameters)?void 0:_LinesVertical$parame.docs,{source:_extends({originalSource:"{\n  name: 'lines, vertical',\n  args: {\n    middleStyle: {\n      strokeWidth: 3\n    },\n    whiskerStyle: {\n      strokeWidth: 1\n    },\n    component: LineAndWhiskers\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_LinesVertical$parame2=LinesVertical.parameters)||null==(_LinesVertical$parame3=_LinesVertical$parame2.docs)?void 0:_LinesVertical$parame3.source)})}),LinesHorizontal.parameters=_extends({},LinesHorizontal.parameters,{docs:_extends({},null==(_LinesHorizontal$para=LinesHorizontal.parameters)?void 0:_LinesHorizontal$para.docs,{source:_extends({originalSource:"{\n  name: 'lines, horizontal',\n  args: {\n    middleStyle: {\n      strokeWidth: 3\n    },\n    whiskerStyle: {\n      strokeWidth: 1\n    },\n    component: LineAndWhiskers\n  },\n  decorators: [ChartHorizontalQuantileDecorator]\n}"},null==(_LinesHorizontal$para2=LinesHorizontal.parameters)||null==(_LinesHorizontal$para3=_LinesHorizontal$para2.docs)?void 0:_LinesHorizontal$para3.source)})}),SelectedIds.parameters=_extends({},SelectedIds.parameters,{docs:_extends({},null==(_SelectedIds$paramete=SelectedIds.parameters)?void 0:_SelectedIds$paramete.docs,{source:_extends({originalSource:"{\n  name: 'selected ids',\n  args: {\n    ids: ['alpha'],\n    middleStyle: {\n      strokeWidth: 3,\n      stroke: '#444444'\n    },\n    whiskerStyle: {\n      strokeWidth: 2\n    },\n    boxStyle: {\n      strokeWidth: 0.5,\n      stroke: '#444444'\n    }\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_SelectedIds$paramete2=SelectedIds.parameters)||null==(_SelectedIds$paramete3=_SelectedIds$paramete2.docs)?void 0:_SelectedIds$paramete3.source)})}),SelectedKeys.parameters=_extends({},SelectedKeys.parameters,{docs:_extends({},null==(_SelectedKeys$paramet=SelectedKeys.parameters)?void 0:_SelectedKeys$paramet.docs,{source:_extends({originalSource:"{\n  name: 'selected keys',\n  args: {\n    keys: ['x'],\n    middleStyle: {\n      strokeWidth: 3,\n      stroke: '#444444'\n    },\n    whiskerStyle: {\n      strokeWidth: 2\n    },\n    boxStyle: {\n      strokeWidth: 0.5,\n      stroke: '#444444'\n    }\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_SelectedKeys$paramet2=SelectedKeys.parameters)||null==(_SelectedKeys$paramet3=_SelectedKeys$paramet2.docs)?void 0:_SelectedKeys$paramet3.source)})}),WhiskerCap.parameters=_extends({},WhiskerCap.parameters,{docs:_extends({},null==(_WhiskerCap$parameter=WhiskerCap.parameters)?void 0:_WhiskerCap$parameter.docs,{source:_extends({originalSource:"{\n  name: 'whisker cap',\n  args: {\n    middleStyle: {\n      strokeWidth: 3,\n      stroke: '#444444'\n    },\n    whiskerStyle: {\n      strokeWidth: 2\n    },\n    boxStyle: {\n      strokeWidth: 0.5,\n      stroke: '#444444'\n    },\n    whiskerCapWidth: 0.5\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_WhiskerCap$parameter2=WhiskerCap.parameters)||null==(_WhiskerCap$parameter3=_WhiskerCap$parameter2.docs)?void 0:_WhiskerCap$parameter3.source)})}),MouseClick.parameters=_extends({},MouseClick.parameters,{docs:_extends({},null==(_MouseClick$parameter=MouseClick.parameters)?void 0:_MouseClick$parameter.docs,{source:_extends({originalSource:"{\n  name: 'mouse click',\n  args: {\n    middleStyle: {\n      strokeWidth: 3,\n      stroke: '#222222'\n    },\n    whiskerStyle: {\n      strokeWidth: 2\n    },\n    handlers: {\n      onClick: onQuantilesClick\n    }\n  },\n  decorators: [ChartQuantileDecorator]\n}"},null==(_MouseClick$parameter2=MouseClick.parameters)||null==(_MouseClick$parameter3=_MouseClick$parameter2.docs)?void 0:_MouseClick$parameter3.source)})});var __namedExportsOrder=["BoxesVertical","BoxesHorizontal","BarsVertical","BarsHorizontal","LinesVertical","LinesHorizontal","SelectedIds","SelectedKeys","WhiskerCap","MouseClick"]},"./packages/band/src/quantiles/BarAndWhisker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>BarAndWhisker});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["data","horizontal","boxStyle","whiskerStyle","whiskerCapWidth","className","style","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var BarAndWhisker=function BarAndWhisker(_ref){var data=_ref.data,horizontal=_ref.horizontal,boxStyle=_ref.boxStyle,whiskerStyle=_ref.whiskerStyle,_ref$whiskerCapWidth=_ref.whiskerCapWidth,whiskerCapWidth=void 0===_ref$whiskerCapWidth?0:_ref$whiskerCapWidth,className=_ref.className,style=_ref.style,setRole=_ref.setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE1)().scales;if(!data)return null;if(void 0===data.moments||void 0===data.interval)return null;var halfBand=data.bandWidth/2,halfCap=whiskerCapWidth*halfBand,cx=data.bandStart+halfBand,cy=data.moments[0],zero=(horizontal?scales.x:scales.y)(0),commonProps={className,setRole:!1},box=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.AeJ,_extends({variant:"bar",x:-halfBand,y:0,width:data.bandWidth,height:zero-cy,style:boxStyle},commonProps),"bar"),lines=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker",x1:0,x2:0,y1:0,y2:-cy+data.interval[1],style:whiskerStyle},commonProps),"whisker")],caps=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker-cap",x1:-halfCap,x2:halfCap,y1:-cy+data.interval[1],y2:-cy+data.interval[1],style:whiskerStyle},commonProps),"whisker-cap")],config={x:horizontal?cy:cx,y:horizontal?cx:cy,rotate:horizontal?-90:0,originX:"0px",originY:"0px"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.g,_extends({initial:config,animate:config,role:setRole?"bar-and-whisker":void 0,style},props,{children:[box,lines,whiskerCapWidth>0?caps:null]}))};BarAndWhisker.displayName="BarAndWhisker";try{BarAndWhisker.displayName="BarAndWhisker",BarAndWhisker.__docgenInfo={description:"",displayName:"BarAndWhisker",props:{data:{defaultValue:null,description:"information with coordinates",name:"data",required:!0,type:{name:"QuantilePreparedSummary"}},horizontal:{defaultValue:null,description:"orientation of the chart",name:"horizontal",required:!0,type:{name:"boolean"}},boxStyle:{defaultValue:null,description:"style for box",name:"boxStyle",required:!1,type:{name:"Partial<CSSProperties>"}},whiskerStyle:{defaultValue:null,description:"style for whiskers",name:"whiskerStyle",required:!1,type:{name:"Partial<CSSProperties>"}},middleStyle:{defaultValue:null,description:"style for line representing the distribution center",name:"middleStyle",required:!1,type:{name:"Partial<CSSProperties>"}},whiskerCapWidth:{defaultValue:{value:"0"},description:"width of whisker cap",name:"whiskerCapWidth",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/quantiles/BarAndWhisker.tsx#BarAndWhisker"]={docgenInfo:BarAndWhisker.__docgenInfo,name:"BarAndWhisker",path:"packages/band/src/quantiles/BarAndWhisker.tsx#BarAndWhisker"})}catch(__react_docgen_typescript_loader_error){}},"./packages/band/src/quantiles/LineAndWhiskers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>LineAndWhiskers});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["data","horizontal","middleStyle","whiskerStyle","whiskerCapWidth","className","style","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var LineAndWhiskers=function LineAndWhiskers(_ref){var data=_ref.data,horizontal=_ref.horizontal,middleStyle=_ref.middleStyle,whiskerStyle=_ref.whiskerStyle,_ref$whiskerCapWidth=_ref.whiskerCapWidth,whiskerCapWidth=void 0===_ref$whiskerCapWidth?0:_ref$whiskerCapWidth,className=_ref.className,style=_ref.style,setRole=_ref.setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded);if(!data)return null;if(void 0===data.moments||void 0===data.interval)return null;var halfBand=data.bandWidth/2,halfCap=whiskerCapWidth*halfBand,cx=data.bandStart+halfBand,cy=data.moments[0],commonProps={className,setRole:!1},middle=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"mean",x1:-halfBand,y1:0,x2:halfBand,y2:0,style:middleStyle},commonProps),"bar"),lines=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker",x1:0,x2:0,y1:0,y2:-cy+data.interval[1],style:whiskerStyle},commonProps),"whisker-upper"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker",x1:0,x2:0,y1:0,y2:-cy+data.interval[0],style:whiskerStyle},commonProps),"whisker-lower")],caps=[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker-cap",x1:-halfCap,x2:halfCap,y1:-cy+data.interval[1],y2:-cy+data.interval[1],style:whiskerStyle},commonProps),"whisker-upper-cap"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x12,_extends({variant:"whisker-cap",x1:-halfCap,x2:halfCap,y1:-cy+data.interval[0],y2:-cy+data.interval[0],style:whiskerStyle},commonProps),"whisker-lower-cap")],config={x:horizontal?cy:cx,y:horizontal?cx:cy,rotate:horizontal?-90:0,originX:"0px",originY:"0px"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.g,_extends({initial:config,animate:config,role:setRole?"line-and-whiskers":void 0,style},props,{children:[middle,lines,whiskerCapWidth>0?caps:null]}))};LineAndWhiskers.displayName="LineAndWhiskers";try{LineAndWhiskers.displayName="LineAndWhiskers",LineAndWhiskers.__docgenInfo={description:"",displayName:"LineAndWhiskers",props:{data:{defaultValue:null,description:"information with coordinates",name:"data",required:!0,type:{name:"QuantilePreparedSummary"}},horizontal:{defaultValue:null,description:"orientation of the chart",name:"horizontal",required:!0,type:{name:"boolean"}},boxStyle:{defaultValue:null,description:"style for box",name:"boxStyle",required:!1,type:{name:"Partial<CSSProperties>"}},whiskerStyle:{defaultValue:null,description:"style for whiskers",name:"whiskerStyle",required:!1,type:{name:"Partial<CSSProperties>"}},middleStyle:{defaultValue:null,description:"style for line representing the distribution center",name:"middleStyle",required:!1,type:{name:"Partial<CSSProperties>"}},whiskerCapWidth:{defaultValue:{value:"0"},description:"width of whisker cap",name:"whiskerCapWidth",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"handler for mouse enter event",name:"onMouseEnter",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"handler for mouse leave event",name:"onMouseLeave",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onMouseMove:{defaultValue:null,description:"handler for mouse move event",name:"onMouseMove",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}},onClick:{defaultValue:null,description:"handler for click event",name:"onClick",required:!1,type:{name:"((event: MouseEvent<Element, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/band/src/quantiles/LineAndWhiskers.tsx#LineAndWhiskers"]={docgenInfo:LineAndWhiskers.__docgenInfo,name:"LineAndWhiskers",path:"packages/band/src/quantiles/LineAndWhiskers.tsx#LineAndWhiskers"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/d3-shape/src/area.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _array_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/d3-shape/src/array.js"),_constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/constant.js"),_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),_line_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-shape/src/line.js"),_path_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/path.js"),_point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/d3-shape/src/point.js");function __WEBPACK_DEFAULT_EXPORT__(x0,y0,y1){var x1=null,defined=(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!0),context=null,curve=_curve_linear_js__WEBPACK_IMPORTED_MODULE_1__.Z,output=null,path=(0,_path_js__WEBPACK_IMPORTED_MODULE_2__.d)(area);function area(data){var i,j,k,d,buffer,n=(data=(0,_array_js__WEBPACK_IMPORTED_MODULE_4__.Z)(data)).length,defined0=!1,x0z=new Array(n),y0z=new Array(n);for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i){if(!(i<n&&defined(d=data[i],i,data))===defined0)if(defined0=!defined0)j=i,output.areaStart(),output.lineStart();else{for(output.lineEnd(),output.lineStart(),k=i-1;k>=j;--k)output.point(x0z[k],y0z[k]);output.lineEnd(),output.areaEnd()}defined0&&(x0z[i]=+x0(d,i,data),y0z[i]=+y0(d,i,data),output.point(x1?+x1(d,i,data):x0z[i],y1?+y1(d,i,data):y0z[i]))}if(buffer)return output=null,buffer+""||null}function arealine(){return(0,_line_js__WEBPACK_IMPORTED_MODULE_5__.Z)().defined(defined).curve(curve).context(context)}return x0="function"==typeof x0?x0:void 0===x0?_point_js__WEBPACK_IMPORTED_MODULE_3__.x:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+x0),y0="function"==typeof y0?y0:void 0===y0?(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(0):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y0),y1="function"==typeof y1?y1:void 0===y1?_point_js__WEBPACK_IMPORTED_MODULE_3__.y:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+y1),area.x=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),x1=null,area):x0},area.x0=function(_){return arguments.length?(x0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x0},area.x1=function(_){return arguments.length?(x1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):x1},area.y=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),y1=null,area):y0},area.y0=function(_){return arguments.length?(y0="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y0},area.y1=function(_){return arguments.length?(y1=null==_?null:"function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(+_),area):y1},area.lineX0=area.lineY0=function(){return arealine().x(x0).y(y0)},area.lineY1=function(){return arealine().x(x0).y(y1)},area.lineX1=function(){return arealine().x(x1).y(y0)},area.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(!!_),area):defined},area.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),area):curve},area.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),area):context},area}},"./node_modules/framer-motion/dist/es/animation/animate.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>animate});var _index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/index.mjs"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function animate(from,to,transition={}){const value=(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(from)?from:(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(from);return value.start((0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Z)("",value,to,transition)),{stop:()=>value.stop(),isAnimating:()=>value.isAnimating()}}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/framer-motion/dist/es/utils/process.mjs"),frameloop=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/index.mjs"),use_isomorphic_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react.useRef)(!1);return(0,use_isomorphic_effect.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");class PopChildMeasure extends react.Component{getSnapshotBeforeUpdate(prevProps){const element=this.props.childRef.current;if(element&&prevProps.isPresent&&!this.props.isPresent){const size=this.props.sizeRef.current;size.height=element.offsetHeight||0,size.width=element.offsetWidth||0,size.top=element.offsetTop,size.left=element.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PopChild({children,isPresent}){const id=(0,react.useId)(),ref=(0,react.useRef)(null),size=(0,react.useRef)({width:0,height:0,top:0,left:0});return(0,react.useInsertionEffect)((()=>{const{width,height,top,left}=size.current;if(isPresent||!ref.current||!width||!height)return;ref.current.dataset.motionPopId=id;const style=document.createElement("style");return document.head.appendChild(style),style.sheet&&style.sheet.insertRule(`\n          [data-motion-pop-id="${id}"] {\n            position: absolute !important;\n            width: ${width}px !important;\n            height: ${height}px !important;\n            top: ${top}px !important;\n            left: ${left}px !important;\n          }\n        `),()=>{document.head.removeChild(style)}}),[isPresent]),react.createElement(PopChildMeasure,{isPresent,childRef:ref,sizeRef:size},react.cloneElement(children,{ref}))}const PresenceChild=({children,initial,isPresent,onExitComplete,custom,presenceAffectsLayout,mode})=>{const presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,react.useId)(),context=(0,react.useMemo)((()=>({id,initial,isPresent,custom,onExitComplete:childId=>{presenceChildren.set(childId,!0);for(const isComplete of presenceChildren.values())if(!isComplete)return;onExitComplete&&onExitComplete()},register:childId=>(presenceChildren.set(childId,!1),()=>presenceChildren.delete(childId))})),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((()=>{presenceChildren.forEach(((_,key)=>presenceChildren.set(key,!1)))}),[isPresent]),react.useEffect((()=>{!isPresent&&!presenceChildren.size&&onExitComplete&&onExitComplete()}),[isPresent]),"popLayout"===mode&&(children=react.createElement(PopChild,{isPresent},children)),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs"),warn_once=__webpack_require__("./node_modules/framer-motion/dist/es/utils/warn-once.mjs");const getChildKey=child=>child.key||"";const AnimatePresence=({children,custom,initial=!0,onExitComplete,exitBeforeEnter,presenceAffectsLayout=!0,mode="sync"})=>{exitBeforeEnter&&(mode="wait",(0,warn_once.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[forceRender]=function useForceUpdate(){const isMounted=useIsMounted(),[forcedRenderCount,setForcedRenderCount]=(0,react.useState)(0),forceRender=(0,react.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((()=>frameloop.Z_.postRender(forceRender)),[forceRender]),forcedRenderCount]}();const forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);const isMounted=useIsMounted(),filteredChildren=function onlyElements(children){const filtered=[];return react.Children.forEach(children,(child=>{(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children);let childrenToRender=filteredChildren;const exiting=new Set,presentChildren=(0,react.useRef)(childrenToRender),allChildren=(0,react.useRef)(new Map).current,isInitialRender=(0,react.useRef)(!0);if((0,use_isomorphic_effect.L)((()=>{isInitialRender.current=!1,function updateChildLookup(children,allChildren){children.forEach((child=>{const key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),(0,use_unmount_effect.z)((()=>{isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((child=>react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout,mode},child))));childrenToRender=[...childrenToRender];const presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length;for(let i=0;i<numPresent;i++){const key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return"wait"===mode&&exiting.size&&(childrenToRender=[]),exiting.forEach((key=>{if(-1!==targetKeys.indexOf(key))return;const child=allChildren.get(key);if(!child)return;const insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:()=>{allChildren.delete(key),exiting.delete(key);const removeIndex=presentChildren.current.findIndex((presentChild=>presentChild.key===key));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout,mode},child))})),childrenToRender=childrenToRender.map((child=>{const key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout,mode},child)})),"production"!==process.O&&"wait"===mode&&childrenToRender.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((child=>(0,react.cloneElement)(child))))}}}]);