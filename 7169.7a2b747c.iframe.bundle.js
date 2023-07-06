"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[7169],{"./packages/polar/src/general/Origin.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Origin});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Origin=function Origin(_ref){var _ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,className=_ref.className,style=_ref.style,children=_ref.children,scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE1)().scales,xScale=scales.x,yScale=scales.y,config={x:xScale(0),y:yScale(0),originX:"0px",originY:"0px"},compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.gjB)("origin",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.g,{initial:config,animate:config,role:setRole?"origin":void 0,style:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.dJS)(style,config),className:compositeClassName,children})};Origin.displayName="Origin";try{Origin.displayName="Origin",Origin.__docgenInfo={description:"",displayName:"Origin",props:{className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/general/Origin.tsx#Origin"]={docgenInfo:Origin.__docgenInfo,name:"Origin",path:"packages/polar/src/general/Origin.tsx#Origin"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/general/PolarItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>PolarItem});var framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-motion-value.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/animate.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),d3_interpolate__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-interpolate/src/value.js"),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/polar/src/general/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var getTransform=function getTransform(x,y,degrees){return"translateX("+x+"px) translateY("+y+"px) rotate("+degrees+"deg)"},PolarItem=function PolarItem(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,_ref$position=_ref.position,position=void 0===_ref$position?_chsk_core__WEBPACK_IMPORTED_MODULE_2__.rv1:_ref$position,_ref$angleUnit=_ref.angleUnit,angleUnit=void 0===_ref$angleUnit?"radian":_ref$angleUnit,radial=_ref.radial,tangential=_ref.tangential,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,children=_ref.children,theme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.FgM)(),isRadians="radian"===angleUnit,r=position[_constants__WEBPACK_IMPORTED_MODULE_3__.R],theta=isRadians?position[_constants__WEBPACK_IMPORTED_MODULE_3__.uD]:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.VlM)(position[_constants__WEBPACK_IMPORTED_MODULE_3__.uD]),x=r*Math.sin(theta),y=-r*Math.cos(theta),angle=0;radial?angle+=theta-_constants__WEBPACK_IMPORTED_MODULE_3__.$_:tangential&&(angle+=theta),angle%=_constants__WEBPACK_IMPORTED_MODULE_3__.EP,(radial&&(theta<0||theta>Math.PI)||tangential&&(theta<-_constants__WEBPACK_IMPORTED_MODULE_3__.$_||theta>_constants__WEBPACK_IMPORTED_MODULE_3__.$_))&&(angle+=Math.PI),angle=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.BVy)(angle%_constants__WEBPACK_IMPORTED_MODULE_3__.EP);var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([r,theta,angle]),values=_useState[0],setValues=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),working=_useState2[0],setWorking=_useState2[1],transform=(0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.c)(getTransform(x,y,angle));if(!children)return null;if(transform.get()!==getTransform(x,y,angle)&&!working){var animateConfig=theme.Transition.default,interpolator=(0,d3_interpolate__WEBPACK_IMPORTED_MODULE_5__.Z)(values,[r,theta,angle]);(0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.j)(0,1,_extends({},animateConfig,{onPlay:function onPlay(){setWorking(!0)},onUpdate:function onUpdate(latest){var _interpolator=interpolator(latest),rLatest=_interpolator[0],thetaLatest=_interpolator[1],angleLatest=_interpolator[2],latestX=rLatest*Math.sin(thetaLatest),latestY=-rLatest*Math.cos(thetaLatest);transform.set(getTransform(latestX,latestY,angleLatest))},onComplete:function onComplete(){setValues([r,theta,angle]),setWorking(!1)}}))}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.m.g,{role:setRole&&"default"!==variant?variant:void 0,style:{transform},children})};PolarItem.displayName="PolarItem";try{PolarItem.displayName="PolarItem",PolarItem.__docgenInfo={description:"",displayName:"PolarItem",props:{position:{defaultValue:null,description:"position in polar coordinates [radius, angle]",name:"position",required:!1,type:{name:"NumericPositionSpec"}},angleUnit:{defaultValue:{value:"radian"},description:"angle units",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}},radial:{defaultValue:null,description:"flag, orient text radially",name:"radial",required:!1,type:{name:"boolean"}},tangential:{defaultValue:null,description:"flag, orient text tangentially",name:"tangential",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/general/PolarItem.tsx#PolarItem"]={docgenInfo:PolarItem.__docgenInfo,name:"PolarItem",path:"packages/polar/src/general/PolarItem.tsx#PolarItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/general/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>HALFPI,EP:()=>TWOPI,R:()=>R,uD:()=>THETA});var R=0,THETA=1,TWOPI=2*Math.PI,HALFPI=Math.PI/2},"./packages/polar/src/pie/Pie.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Pie});var react=__webpack_require__("./node_modules/react/index.js"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","data","angle","angleUnit","angleAlign","rOuter","rInner","scaleX","scaleY","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var defaultPolarScaleSpec={variant:"linear",domain:[-1,1],nice:!1},Pie=function Pie(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?chsk_core_es.WdC:_ref$container,data=_ref.data,_ref$angle=_ref.angle,angle=void 0===_ref$angle?0:_ref$angle,_ref$angleUnit=_ref.angleUnit,angleUnit=void 0===_ref$angleUnit?"degree":_ref$angleUnit,_ref$angleAlign=_ref.angleAlign,angleAlign=void 0===_ref$angleAlign?0:_ref$angleAlign,_ref$rOuter=_ref.rOuter,rOuter=void 0===_ref$rOuter?1:_ref$rOuter,_ref$rInner=_ref.rInner,rInner=void 0===_ref$rInner?0:_ref$rInner,_ref$scaleX=_ref.scaleX,scaleX=void 0===_ref$scaleX?defaultPolarScaleSpec:_ref$scaleX,_ref$scaleY=_ref.scaleY,scaleY=void 0===_ref$scaleY?defaultPolarScaleSpec:_ref$scaleY,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,chsk_core_es.FgM)(),_useContainer=(0,chsk_core_es.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,seriesIds=(0,react.useMemo)((function(){return data.map((function(item){return item.id}))}),[data]),seriesIndexes=(0,react.useMemo)((function(){return(0,chsk_core_es.snp)(data)}),[data]),processedData=(0,react.useMemo)((function(){return function processData(data,angle,unit,align,rInner,rOuter){var values=data.map((function(seriesData){return Math.max(0,seriesData.data)})),total=values.reduce((function(acc,v){return acc+v}),0),start=0,offset="radian"===unit?angle:(0,chsk_core_es.VlM)(angle);return data.map((function(seriesData,index){var proportion=values[index]/total,startAngle=start,endAngle=start+2*proportion*Math.PI;if(0===index){var firstOffset=offset-(endAngle-startAngle)*align;startAngle+=firstOffset,endAngle+=firstOffset}return start=endAngle,{id:seriesData.id,index,data:values[index],proportion,startAngle,endAngle,rInner,rOuter}}))}(data,angle,angleUnit,angleAlign,rInner,rOuter)}),[data,angle,angleUnit,angleAlign,rInner,rOuter]),_useMemo=(0,react.useMemo)((function(){return function getPieXYScaleProps(scaleSpecX,scaleSpecY,size){var result={x:(0,chsk_core_es.BRZ)(scaleSpecX),y:(0,chsk_core_es.BRZ)(scaleSpecY)};return(0,chsk_core_es.HBl)(scaleSpecX)||(result.x=(0,chsk_core_es.zAC)(scaleSpecX,[-1,1])),(0,chsk_core_es.HBl)(scaleSpecY)||(result.y=(0,chsk_core_es.zAC)(scaleSpecY,[-1,1])),result.x.size=size[chsk_core_es.X],result.y.size=size[chsk_core_es.Y],(0,chsk_core_es.vO5)(result.x,result.y)}(scaleX,scaleY,innerSize)}),[scaleX,scaleY,innerSize]),xProps=_useMemo.x,yProps=_useMemo.y,colorProps=(0,react.useMemo)((function(){return(0,chsk_core_es.NVB)(null!=scaleColor?scaleColor:theme.Color.categorical,seriesIds)}),[scaleColor,theme,seriesIds]),scalesContextValue=(0,chsk_core_es.cT_)({x:xProps,y:yProps,color:colorProps});return(0,jsx_runtime.jsx)(chsk_core_es.PzT,_extends({variant:"pie",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys:seriesIds,scalesContextValue},props,{children:(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children})}))};Pie.displayName="Pie";try{Pie.displayName="Pie",Pie.__docgenInfo={description:"",displayName:"Pie",props:{data:{defaultValue:null,description:"primary data (used for color scale)",name:"data",required:!0,type:{name:"PieDataItem[]"}},angle:{defaultValue:{value:"0"},description:"global rotation",name:"angle",required:!1,type:{name:"number"}},angleUnit:{defaultValue:{value:"degree"},description:"angle unit",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}},angleAlign:{defaultValue:{value:"0"},description:"angle alignment for first slice",name:"angleAlign",required:!1,type:{name:"number"}},rOuter:{defaultValue:{value:"1"},description:"outer radius",name:"rOuter",required:!1,type:{name:"number"}},rInner:{defaultValue:{value:"0"},description:"inner radius",name:"rInner",required:!1,type:{name:"number"}},scaleX:{defaultValue:{value:"{\n    variant: 'linear',\n    domain: [-1, 1],\n    nice: false,\n}"},description:"scale for horizontal axis",name:"scaleX",required:!1,type:{name:"LinearScaleSpec"}},scaleY:{defaultValue:{value:"{\n    variant: 'linear',\n    domain: [-1, 1],\n    nice: false,\n}"},description:"scale for vertical axis",name:"scaleY",required:!1,type:{name:"LinearScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/pie/Pie.tsx#Pie"]={docgenInfo:Pie.__docgenInfo,name:"Pie",path:"packages/polar/src/pie/Pie.tsx#Pie"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/pie/Slice.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Slice});var framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-motion-value.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/animate.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),d3_shape__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/arc.js"),d3_interpolate__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-interpolate/src/object.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["innerRadius","outerRadius","r","startAngle","endAngle","angleUnit","padAngle","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var getSliceD=function getSliceD(_ref){var _generator,innerRadius=_ref.innerRadius,outerRadius=_ref.outerRadius,_ref$r=_ref.r,r=void 0===_ref$r?0:_ref$r,startAngle=_ref.startAngle,endAngle=_ref.endAngle,_ref$padAngle=_ref.padAngle,padAngle=void 0===_ref$padAngle?0:_ref$padAngle;return null!=(_generator=(0,d3_shape__WEBPACK_IMPORTED_MODULE_2__.Z)().cornerRadius(r).padAngle(padAngle)({startAngle,endAngle,innerRadius,outerRadius}))?_generator:""},Slice=function Slice(_ref2){var innerRadius=_ref2.innerRadius,outerRadius=_ref2.outerRadius,_ref2$r=_ref2.r,r=void 0===_ref2$r?0:_ref2$r,startAngle=_ref2.startAngle,endAngle=_ref2.endAngle,_ref2$angleUnit=_ref2.angleUnit,angleUnit=void 0===_ref2$angleUnit?"radian":_ref2$angleUnit,_ref2$padAngle=_ref2.padAngle,padAngle=void 0===_ref2$padAngle?0:_ref2$padAngle,className=_ref2.className,_ref2$setRole=_ref2.setRole,setRole=void 0===_ref2$setRole||_ref2$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref2,_excluded),theme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.FgM)(),isRadian="radian"===angleUnit,sliceProps={innerRadius,outerRadius,r,startAngle:isRadian?startAngle:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.VlM)(startAngle),endAngle:isRadian?endAngle:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.VlM)(endAngle),padAngle},d=(0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.c)(getSliceD(sliceProps)),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sliceProps),values=_useState[0],setValues=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),working=_useState2[0],setWorking=_useState2[1];if(d.get()!==getSliceD(sliceProps)&&!working){var animateConfig=theme.Transition.default,interpolator=(0,d3_interpolate__WEBPACK_IMPORTED_MODULE_5__.Z)(values,sliceProps);(0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.j)(0,1,_extends({},animateConfig,{onPlay:function onPlay(){setWorking(!0)},onUpdate:function onUpdate(latest){d.set(getSliceD(interpolator(latest)))},onComplete:function onComplete(){setValues(sliceProps),setWorking(!1)}}))}var compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.gjB)("slice",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.m.path,_extends({d,role:setRole?"slice":void 0,className:compositeClassName},props))};Slice.displayName="Slice";try{Slice.displayName="Slice",Slice.__docgenInfo={description:"",displayName:"Slice",props:{innerRadius:{defaultValue:null,description:"inner radius in absolute coordinates",name:"innerRadius",required:!0,type:{name:"number"}},outerRadius:{defaultValue:null,description:"outer radius in absolute coordinates",name:"outerRadius",required:!0,type:{name:"number"}},startAngle:{defaultValue:null,description:"start angle for slice (radians)",name:"startAngle",required:!0,type:{name:"number"}},endAngle:{defaultValue:null,description:"end angle for slice (radians)",name:"endAngle",required:!0,type:{name:"number"}},r:{defaultValue:{value:"0"},description:"corner radius",name:"r",required:!1,type:{name:"number"}},padAngle:{defaultValue:{value:"0"},description:"angle padding to create space between slices",name:"padAngle",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},angleUnit:{defaultValue:{value:"radian"},description:"angle units",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/pie/Slice.tsx#Slice"]={docgenInfo:Slice.__docgenInfo,name:"Slice",path:"packages/polar/src/pie/Slice.tsx#Slice"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/pie/SliceLabel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>SliceLabel});var _chsk_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_general__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/polar/src/general/constants.ts"),_general__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/polar/src/general/PolarItem.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),SliceLabel=function SliceLabel(_ref){var innerRadius=_ref.innerRadius,outerRadius=_ref.outerRadius,startAngle=_ref.startAngle,endAngle=_ref.endAngle,_ref$angleUnit=_ref.angleUnit,angleUnit=void 0===_ref$angleUnit?"radian":_ref$angleUnit,_ref$align=_ref.align,align=void 0===_ref$align?[.5,.5]:_ref$align,radial=_ref.radial,tangential=_ref.tangential,className=_ref.className,_ref$setRole=_ref.setRole,setRole=void 0!==_ref$setRole&&_ref$setRole,style=_ref.style,children=_ref.children,sizeR=outerRadius-innerRadius,sizeAngle=endAngle-startAngle,theta=startAngle+align[_general__WEBPACK_IMPORTED_MODULE_1__.uD]*sizeAngle;"degree"===angleUnit&&(theta=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.VlM)(theta));var position=[innerRadius+align[_general__WEBPACK_IMPORTED_MODULE_1__.R]*sizeR,theta],classPrefix="";radial&&(theta<0||theta>Math.PI)?classPrefix=" leftHemisphere ":tangential&&(theta<-Math.PI/2||theta>Math.PI/2)&&(classPrefix=" bottomHemisphere");var compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_2__.gjB)("label sliceLabel"+classPrefix,className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_general__WEBPACK_IMPORTED_MODULE_3__.V,{variant:"label",position,angleUnit:"radian",radial,tangential,setRole,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text",{className:compositeClassName,style,children})})};SliceLabel.displayName="SliceLabel";try{SliceLabel.displayName="SliceLabel",SliceLabel.__docgenInfo={description:"",displayName:"SliceLabel",props:{className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"false"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"variant",name:"variant",required:!1,type:{name:"string"}},innerRadius:{defaultValue:null,description:"inner radius in absolute coordinates",name:"innerRadius",required:!0,type:{name:"number"}},angleUnit:{defaultValue:{value:"radian"},description:"angle units",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}},outerRadius:{defaultValue:null,description:"outer radius in absolute coordinates",name:"outerRadius",required:!0,type:{name:"number"}},startAngle:{defaultValue:null,description:"start angle for slice (radians)",name:"startAngle",required:!0,type:{name:"number"}},endAngle:{defaultValue:null,description:"end angle for slice (radians)",name:"endAngle",required:!0,type:{name:"number"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},align:{defaultValue:{value:"[0.5, 0.5]"},description:"alignment of content within the bounding container",name:"align",required:!1,type:{name:"AlignSpec"}},radial:{defaultValue:null,description:"flag, orient text radially",name:"radial",required:!1,type:{name:"boolean"}},tangential:{defaultValue:null,description:"flag, orient text tangentially",name:"tangential",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/pie/SliceLabel.tsx#SliceLabel"]={docgenInfo:SliceLabel.__docgenInfo,name:"SliceLabel",path:"packages/polar/src/pie/SliceLabel.tsx#SliceLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/pie/Slices.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Slices});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_Slice__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/polar/src/pie/Slice.tsx"),_predicates__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/polar/src/pie/predicates.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","r","padAngle","component","componentProps","className","style","dataComponent","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Slices=function Slices(_ref){var ids=_ref.ids,_ref$r=_ref.r,r=void 0===_ref$r?0:_ref$r,_ref$padAngle=_ref.padAngle,padAngle=void 0===_ref$padAngle?0:_ref$padAngle,_ref$component=_ref.component,component=void 0===_ref$component?_Slice__WEBPACK_IMPORTED_MODULE_2__.p:_ref$component,componentProps=_ref.componentProps,className=_ref.className,style=_ref.style,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?_chsk_core__WEBPACK_IMPORTED_MODULE_3__.oKN:_ref$dataComponent,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),processedData=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.wIO)(),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.kE1)().scales,xScale=scales.x,colorScale=scales.color,data=processedData.data,idSet=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.lRm)(ids,null,processedData).idSet;if(!(0,_predicates__WEBPACK_IMPORTED_MODULE_4__.X)(data))return null;var styles=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return processedData.keys.map((function(k,i){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.hIX)(style,colorScale(i))}))}),[processedData,style,colorScale]),x0=xScale(0),commonProps=_extends({},componentProps,{setRole,padAngle,r,className}),result=data.map((function(item,i){return idSet.has(item.id)?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(dataComponent,_extends({key:"s-"+item.id,component,data:item,props:_extends({},commonProps,{innerRadius:xScale(item.rInner)-x0,outerRadius:xScale(item.rOuter)-x0,startAngle:item.startAngle,endAngle:item.endAngle,style:styles[i]})},props)):null}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:result})};try{Slices.displayName="Slices",Slices.__docgenInfo={description:"",displayName:"Slices",props:{ids:{defaultValue:null,description:"/** ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},r:{defaultValue:{value:"0"},description:"radius for slices",name:"r",required:!1,type:{name:"number"}},padAngle:{defaultValue:{value:"0"},description:"angle padding",name:"padAngle",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<PieProcessedDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<PieProcessedDataItem, SliceProps>>"}},component:{defaultValue:{value:"({\n    innerRadius,\n    outerRadius,\n    r = 0,\n    startAngle,\n    endAngle,\n    angleUnit = 'radian',\n    padAngle = 0,\n    //\n    className,\n    setRole = true,\n    ...props\n}: SliceProps) => {\n    const theme = useTheme()\n    const isRadian = angleUnit === 'radian'\n    const sliceProps = {\n        innerRadius,\n        outerRadius,\n        r,\n        startAngle: isRadian ? startAngle : deg2rad(startAngle),\n        endAngle: isRadian ? endAngle : deg2rad(endAngle),\n        padAngle,\n    }\n    const d = useMotionValue(getSliceD(sliceProps))\n    const [values, setValues] = useState(sliceProps)\n    const [working, setWorking] = useState(false)\n\n    if (d.get() !== getSliceD(sliceProps) && !working) {\n        const animateConfig = theme.Transition.default\n        const interpolator = interpolateObject(values, sliceProps)\n        animate(0, 1, {\n            ...animateConfig,\n            onPlay: () => {\n                setWorking(true)\n            },\n            onUpdate: latest => {\n                d.set(getSliceD(interpolator(latest)))\n            },\n            onComplete: () => {\n                setValues(sliceProps)\n                setWorking(false)\n            },\n        })\n    }\n\n    const compositeClassName = getClassName('slice', className)\n    return (\n        <m.path\n            d={d}\n            role={setRole ? 'slice' : undefined}\n            className={compositeClassName}\n            {...props}\n        />\n    )\n}"},description:"function used to draw individual components",name:"component",required:!1,type:{name:"FC<SliceProps>"}},componentProps:{defaultValue:null,description:"props passed to each component",name:"componentProps",required:!1,type:{name:"Partial<SliceProps>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/pie/Slices.tsx#Slices"]={docgenInfo:Slices.__docgenInfo,name:"Slices",path:"packages/polar/src/pie/Slices.tsx#Slices"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/pie/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>isPieProcessedData});var isPieProcessedData=function isPieProcessedData(data){var result=data.map((function(item){return"object"==typeof item&&null!==item&&("id"in item&&"index"in item&&("startAngle"in item&&"endAngle"in item&&"data"in item&&"proportion"in item))}));return result.length>0&&result.every(Boolean)}},"./packages/polar/stories/pie/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R_:()=>ChartPieSlicesDecorator,aW:()=>ChartDoughnutSlicesDecorator,ez:()=>ChartPieDecorator,jn:()=>OriginAndSlices,py:()=>ChartDoughnutDecorator,td:()=>commonPieProps});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/polar/src/pie/Pie.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/polar/src/general/Origin.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/polar/src/pie/Slices.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonPieProps={data:[{id:"alpha",data:55},{id:"beta",data:20},{id:"gamma",data:25}]},ChartPieDecorator=function ChartPieDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.b,_extends({},commonPieProps,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:Story()})}))})};ChartPieDecorator.displayName="ChartPieDecorator";var ChartDoughnutDecorator=function ChartDoughnutDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.b,_extends({},commonPieProps,{rInner:.6,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:Story()})}))})};ChartDoughnutDecorator.displayName="ChartDoughnutDecorator";var ChartPieSlicesDecorator=function ChartPieSlicesDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.b,_extends({},commonPieProps,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.i,{style:{fillOpacity:.9}}),Story()]})}))})};ChartPieSlicesDecorator.displayName="ChartPieSlicesDecorator";var ChartDoughnutSlicesDecorator=function ChartDoughnutSlicesDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.b,_extends({},commonPieProps,{rInner:.6,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.i,{style:{fillOpacity:.9}}),Story()]})}))})};ChartDoughnutSlicesDecorator.displayName="ChartDoughnutSlicesDecorator";var OriginAndSlices=function OriginAndSlices(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.i,{style:{fillOpacity:.9}})})};OriginAndSlices.displayName="OriginAndSlices";try{ChartPieDecorator.displayName="ChartPieDecorator",ChartPieDecorator.__docgenInfo={description:"",displayName:"ChartPieDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/stories/pie/decorators.tsx#ChartPieDecorator"]={docgenInfo:ChartPieDecorator.__docgenInfo,name:"ChartPieDecorator",path:"packages/polar/stories/pie/decorators.tsx#ChartPieDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDoughnutDecorator.displayName="ChartDoughnutDecorator",ChartDoughnutDecorator.__docgenInfo={description:"",displayName:"ChartDoughnutDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/stories/pie/decorators.tsx#ChartDoughnutDecorator"]={docgenInfo:ChartDoughnutDecorator.__docgenInfo,name:"ChartDoughnutDecorator",path:"packages/polar/stories/pie/decorators.tsx#ChartDoughnutDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartPieSlicesDecorator.displayName="ChartPieSlicesDecorator",ChartPieSlicesDecorator.__docgenInfo={description:"",displayName:"ChartPieSlicesDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/stories/pie/decorators.tsx#ChartPieSlicesDecorator"]={docgenInfo:ChartPieSlicesDecorator.__docgenInfo,name:"ChartPieSlicesDecorator",path:"packages/polar/stories/pie/decorators.tsx#ChartPieSlicesDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDoughnutSlicesDecorator.displayName="ChartDoughnutSlicesDecorator",ChartDoughnutSlicesDecorator.__docgenInfo={description:"",displayName:"ChartDoughnutSlicesDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/stories/pie/decorators.tsx#ChartDoughnutSlicesDecorator"]={docgenInfo:ChartDoughnutSlicesDecorator.__docgenInfo,name:"ChartDoughnutSlicesDecorator",path:"packages/polar/stories/pie/decorators.tsx#ChartDoughnutSlicesDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);