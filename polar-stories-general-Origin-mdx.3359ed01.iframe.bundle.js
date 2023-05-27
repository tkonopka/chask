"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[5414,4900],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/polar/stories/general/Origin.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithOrigin:()=>WithOrigin,WithoutOrigin:()=>WithoutOrigin,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _WithoutOrigin$parame,_WithoutOrigin$parame2,_WithoutOrigin$parame3,_WithOrigin$parameter,_WithOrigin$parameter2,_WithOrigin$parameter3,_chsk_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/polar/src/pie/Pie.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/polar/src/pie/Slices.tsx"),_src__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/polar/src/general/Origin.tsx"),_decorators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/polar/stories/decorators.tsx"),_pie_decorators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/polar/stories/pie/decorators.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Addons/Polar/Polar/Origin",component:_src__WEBPACK_IMPORTED_MODULE_1__.b};var WithoutOrigin={name:"without origin",args:_extends({},_pie_decorators__WEBPACK_IMPORTED_MODULE_2__.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.i,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.Tgp,{variant:"inner",style:{stroke:"#222222",strokeWidth:1,fillOpacity:0}})]})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_5__.e]},WithOrigin={name:"with origin",args:_extends({},_pie_decorators__WEBPACK_IMPORTED_MODULE_2__.td,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_4__.Tgp,{variant:"inner",style:{stroke:"#222222",strokeWidth:1,fillOpacity:0}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_6__.a,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.i,{})})]})}),decorators:[_decorators__WEBPACK_IMPORTED_MODULE_5__.e]};WithoutOrigin.parameters=_extends({},WithoutOrigin.parameters,{docs:_extends({},null==(_WithoutOrigin$parame=WithoutOrigin.parameters)?void 0:_WithoutOrigin$parame.docs,{source:_extends({originalSource:"{\n  name: 'without origin',\n  args: {\n    ...commonPieProps,\n    children: <>\n                <Slices />\n                <Surface variant={'inner'} style={{\n        stroke: '#222222',\n        strokeWidth: 1,\n        fillOpacity: 0\n      }} />\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_WithoutOrigin$parame2=WithoutOrigin.parameters)||null==(_WithoutOrigin$parame3=_WithoutOrigin$parame2.docs)?void 0:_WithoutOrigin$parame3.source)})}),WithOrigin.parameters=_extends({},WithOrigin.parameters,{docs:_extends({},null==(_WithOrigin$parameter=WithOrigin.parameters)?void 0:_WithOrigin$parameter.docs,{source:_extends({originalSource:"{\n  name: 'with origin',\n  args: {\n    ...commonPieProps,\n    children: <>\n                <Surface variant={'inner'} style={{\n        stroke: '#222222',\n        strokeWidth: 1,\n        fillOpacity: 0\n      }} />\n                <Origin>\n                    <Slices />\n                </Origin>\n            </>\n  },\n  decorators: [ChartDecorator]\n}"},null==(_WithOrigin$parameter2=WithOrigin.parameters)||null==(_WithOrigin$parameter3=_WithOrigin$parameter2.docs)?void 0:_WithOrigin$parameter3.source)})});var __namedExportsOrder=["WithoutOrigin","WithOrigin"]},"./packages/polar/src/general/Origin.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Origin});var framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Origin=function Origin(_ref){var _ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,className=_ref.className,style=_ref.style,children=_ref.children,scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE1)().scales,xScale=scales.x,yScale=scales.y,config={x:xScale(0),y:yScale(0),originX:"0px",originY:"0px"},compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.gjB)("origin",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.g,{initial:config,animate:config,role:setRole?"origin":void 0,style,className:compositeClassName,children})};Origin.displayName="Origin";try{Origin.displayName="Origin",Origin.__docgenInfo={description:"",displayName:"Origin",props:{className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/general/Origin.tsx#Origin"]={docgenInfo:Origin.__docgenInfo,name:"Origin",path:"packages/polar/src/general/Origin.tsx#Origin"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/pie/Pie.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Pie});var react=__webpack_require__("./node_modules/react/index.js"),LazyMotion=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),features_animation=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["container","data","angle","angleUnit","angleAlign","rOuter","rInner","scaleX","scaleY","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var defaultPolarScaleSpec={variant:"linear",domain:[-1,1],nice:!1},Pie=function Pie(_ref){var _ref$container=_ref.container,container=void 0===_ref$container?chsk_core_es.WdC:_ref$container,data=_ref.data,_ref$angle=_ref.angle,angle=void 0===_ref$angle?0:_ref$angle,_ref$angleUnit=_ref.angleUnit,angleUnit=void 0===_ref$angleUnit?"degree":_ref$angleUnit,_ref$angleAlign=_ref.angleAlign,angleAlign=void 0===_ref$angleAlign?0:_ref$angleAlign,_ref$rOuter=_ref.rOuter,rOuter=void 0===_ref$rOuter?1:_ref$rOuter,_ref$rInner=_ref.rInner,rInner=void 0===_ref$rInner?0:_ref$rInner,_ref$scaleX=_ref.scaleX,scaleX=void 0===_ref$scaleX?defaultPolarScaleSpec:_ref$scaleX,_ref$scaleY=_ref.scaleY,scaleY=void 0===_ref$scaleY?defaultPolarScaleSpec:_ref$scaleY,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),theme=(0,chsk_core_es.FgM)(),_useContainer=(0,chsk_core_es.uK4)(container),dimsProps=_useContainer.dimsProps,origin=_useContainer.origin,innerSize=_useContainer.innerSize,seriesIds=(0,react.useMemo)((function(){return data.map((function(item){return item.id}))}),[data]),seriesIndexes=(0,react.useMemo)((function(){return(0,chsk_core_es.snp)(data)}),[data]),processedData=(0,react.useMemo)((function(){return function processData(data,angle,unit,align,rInner,rOuter){var values=data.map((function(seriesData){return Math.max(0,seriesData.data)})),total=values.reduce((function(acc,v){return acc+v}),0),start=0,offset="radian"===unit?angle:(0,chsk_core_es.VlM)(angle);return data.map((function(seriesData,index){var proportion=values[index]/total,startAngle=start,endAngle=start+2*proportion*Math.PI;if(0===index){var firstOffset=offset-(endAngle-startAngle)*align;startAngle+=firstOffset,endAngle+=firstOffset}return start=endAngle,{id:seriesData.id,index,data:values[index],proportion,startAngle,endAngle,rInner,rOuter}}))}(data,angle,angleUnit,angleAlign,rInner,rOuter)}),[data,angle,angleUnit,angleAlign,rInner,rOuter]),_useMemo=(0,react.useMemo)((function(){return function getPieXYScaleProps(scaleSpecX,scaleSpecY,size){var result={x:(0,chsk_core_es.BRZ)(scaleSpecX),y:(0,chsk_core_es.BRZ)(scaleSpecY)};return(0,chsk_core_es.HBl)(scaleSpecX)||(result.x=(0,chsk_core_es.zAC)(scaleSpecX,[-1,1])),(0,chsk_core_es.HBl)(scaleSpecY)||(result.y=(0,chsk_core_es.zAC)(scaleSpecY,[-1,1])),result.x.size=size[chsk_core_es.X],result.y.size=size[chsk_core_es.Y],(0,chsk_core_es.vO5)(result.x,result.y)}(scaleX,scaleY,innerSize)}),[scaleX,scaleY,innerSize]),xProps=_useMemo.x,yProps=_useMemo.y,colorProps=(0,react.useMemo)((function(){return(0,chsk_core_es.NVB)(null!=scaleColor?scaleColor:theme.Colors.categorical,seriesIds)}),[scaleColor,theme,seriesIds]),scalesContextValue=(0,chsk_core_es.cT_)({x:xProps,y:yProps,color:colorProps});return(0,jsx_runtime.jsx)(chsk_core_es.PzT,_extends({variant:"pie",position:origin,size:dimsProps.size,padding:dimsProps.padding,originalData:data,processedData,seriesIndexes,keys:seriesIds,scalesContextValue},props,{children:(0,jsx_runtime.jsx)(LazyMotion.X,{features:features_animation.H,children})}))};Pie.displayName="Pie";try{Pie.displayName="Pie",Pie.__docgenInfo={description:"",displayName:"Pie",props:{data:{defaultValue:null,description:"primary data (used for color scale)",name:"data",required:!0,type:{name:"PieDataItem[]"}},angle:{defaultValue:{value:"0"},description:"global rotation",name:"angle",required:!1,type:{name:"number"}},angleUnit:{defaultValue:{value:"degree"},description:"angle unit",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}},angleAlign:{defaultValue:{value:"0"},description:"angle alignment for first slice",name:"angleAlign",required:!1,type:{name:"number"}},rOuter:{defaultValue:{value:"1"},description:"outer radius",name:"rOuter",required:!1,type:{name:"number"}},rInner:{defaultValue:{value:"0"},description:"inner radius",name:"rInner",required:!1,type:{name:"number"}},scaleX:{defaultValue:{value:"{\n    variant: 'linear',\n    domain: [-1, 1],\n    nice: false,\n}"},description:"scale for horizontal axis",name:"scaleX",required:!1,type:{name:"LinearScaleSpec"}},scaleY:{defaultValue:{value:"{\n    variant: 'linear',\n    domain: [-1, 1],\n    nice: false,\n}"},description:"scale for vertical axis",name:"scaleY",required:!1,type:{name:"LinearScaleSpec"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:null,description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},container:{defaultValue:null,description:"position and size for bounding container",name:"container",required:!1,type:{name:"ContainerProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/pie/Pie.tsx#Pie"]={docgenInfo:Pie.__docgenInfo,name:"Pie",path:"packages/polar/src/pie/Pie.tsx#Pie"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/pie/Slice.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Slice});var framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-motion-value.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/framer-motion/dist/es/animation/animate.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),d3_shape__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/d3-shape/src/arc.js"),d3_interpolate__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/d3-interpolate/src/object.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["innerRadius","outerRadius","r","startAngle","endAngle","angleUnit","padAngle","className","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var getSliceD=function getSliceD(_ref){var _generator,innerRadius=_ref.innerRadius,outerRadius=_ref.outerRadius,_ref$r=_ref.r,r=void 0===_ref$r?0:_ref$r,startAngle=_ref.startAngle,endAngle=_ref.endAngle,_ref$padAngle=_ref.padAngle,padAngle=void 0===_ref$padAngle?0:_ref$padAngle;return null!=(_generator=(0,d3_shape__WEBPACK_IMPORTED_MODULE_2__.Z)().cornerRadius(r).padAngle(padAngle)({startAngle,endAngle,innerRadius,outerRadius}))?_generator:""},Slice=function Slice(_ref2){var innerRadius=_ref2.innerRadius,outerRadius=_ref2.outerRadius,_ref2$r=_ref2.r,r=void 0===_ref2$r?0:_ref2$r,startAngle=_ref2.startAngle,endAngle=_ref2.endAngle,_ref2$angleUnit=_ref2.angleUnit,angleUnit=void 0===_ref2$angleUnit?"radian":_ref2$angleUnit,_ref2$padAngle=_ref2.padAngle,padAngle=void 0===_ref2$padAngle?0:_ref2$padAngle,className=_ref2.className,_ref2$setRole=_ref2.setRole,setRole=void 0===_ref2$setRole||_ref2$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref2,_excluded),theme=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.FgM)(),isRadian="radian"===angleUnit,sliceProps={innerRadius,outerRadius,r,startAngle:isRadian?startAngle:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.VlM)(startAngle),endAngle:isRadian?endAngle:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.VlM)(endAngle),padAngle},d=(0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.c)(getSliceD(sliceProps)),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sliceProps),values=_useState[0],setValues=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),working=_useState2[0],setWorking=_useState2[1];if(d.get()!==getSliceD(sliceProps)&&!working){var animateConfig=theme.Motion.default,interpolator=(0,d3_interpolate__WEBPACK_IMPORTED_MODULE_5__.Z)(values,sliceProps);(0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.j)(0,1,_extends({},animateConfig,{onPlay:function onPlay(){setWorking(!0)},onUpdate:function onUpdate(latest){d.set(getSliceD(interpolator(latest)))},onComplete:function onComplete(){setValues(sliceProps),setWorking(!1)}}))}var compositeClassName=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.gjB)("slice",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.m.path,_extends({d,role:setRole?"slice":void 0,className:compositeClassName},props))};Slice.displayName="Slice";try{Slice.displayName="Slice",Slice.__docgenInfo={description:"",displayName:"Slice",props:{innerRadius:{defaultValue:null,description:"inner radius in absolute coordinates",name:"innerRadius",required:!0,type:{name:"number"}},outerRadius:{defaultValue:null,description:"outer radius in absolute coordinates",name:"outerRadius",required:!0,type:{name:"number"}},startAngle:{defaultValue:null,description:"start angle for slice (radians)",name:"startAngle",required:!0,type:{name:"number"}},endAngle:{defaultValue:null,description:"end angle for slice (radians)",name:"endAngle",required:!0,type:{name:"number"}},r:{defaultValue:{value:"0"},description:"corner radius",name:"r",required:!1,type:{name:"number"}},padAngle:{defaultValue:{value:"0"},description:"angle padding to create space between slices",name:"padAngle",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},angleUnit:{defaultValue:{value:"radian"},description:"angle units",name:"angleUnit",required:!1,type:{name:"enum",value:[{value:'"degree"'},{value:'"radian"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/pie/Slice.tsx#Slice"]={docgenInfo:Slice.__docgenInfo,name:"Slice",path:"packages/polar/src/pie/Slice.tsx#Slice"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/pie/Slices.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Slices});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chsk_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_Slice__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/polar/src/pie/Slice.tsx"),_predicates__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/polar/src/pie/predicates.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["ids","r","padAngle","component","className","style","dataComponent","setRole"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Slices=function Slices(_ref){var ids=_ref.ids,_ref$r=_ref.r,r=void 0===_ref$r?0:_ref$r,_ref$padAngle=_ref.padAngle,padAngle=void 0===_ref$padAngle?0:_ref$padAngle,_ref$component=_ref.component,component=void 0===_ref$component?_Slice__WEBPACK_IMPORTED_MODULE_2__.p:_ref$component,className=_ref.className,style=_ref.style,_ref$dataComponent=_ref.dataComponent,dataComponent=void 0===_ref$dataComponent?_chsk_core__WEBPACK_IMPORTED_MODULE_3__.oKN:_ref$dataComponent,_ref$setRole=_ref.setRole,setRole=void 0===_ref$setRole||_ref$setRole,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),processedData=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.wIO)(),scales=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.kE1)().scales,xScale=scales.x,colorScale=scales.color,data=processedData.data;if(!(0,_predicates__WEBPACK_IMPORTED_MODULE_4__.X)(data))return null;var idSet=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.pP)(ids,void 0,processedData)}),[ids,processedData]).idSet,styles=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return processedData.keys.map((function(k,i){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_3__.hIX)(style,colorScale(i))}))}),[processedData,style,colorScale]),x0=xScale(0),result=data.map((function(item,i){return idSet.has(item.id)?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(dataComponent,_extends({key:"slice-"+item.id,component,data:item,props:{innerRadius:xScale(item.rInner)-x0,outerRadius:xScale(item.rOuter)-x0,startAngle:item.startAngle,endAngle:item.endAngle,padAngle,r,className,style:styles[i],setRole}},props)):null}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:result})};try{Slices.displayName="Slices",Slices.__docgenInfo={description:"",displayName:"Slices",props:{ids:{defaultValue:null,description:"/** ids to display (defaults to all ids)",name:"ids",required:!1,type:{name:"string[]"}},component:{defaultValue:{value:"({\n    innerRadius,\n    outerRadius,\n    r = 0,\n    startAngle,\n    endAngle,\n    angleUnit = 'radian',\n    padAngle = 0,\n    //\n    className,\n    setRole = true,\n    ...props\n}: SliceProps) => {\n    const theme = useTheme()\n    const isRadian = angleUnit === 'radian'\n    const sliceProps = {\n        innerRadius,\n        outerRadius,\n        r,\n        startAngle: isRadian ? startAngle : deg2rad(startAngle),\n        endAngle: isRadian ? endAngle : deg2rad(endAngle),\n        padAngle,\n    }\n    const d = useMotionValue(getSliceD(sliceProps))\n    const [values, setValues] = useState(sliceProps)\n    const [working, setWorking] = useState(false)\n\n    if (d.get() !== getSliceD(sliceProps) && !working) {\n        const animateConfig = theme.Motion.default\n        const interpolator = interpolateObject(values, sliceProps)\n        animate(0, 1, {\n            ...animateConfig,\n            onPlay: () => {\n                setWorking(true)\n            },\n            onUpdate: latest => {\n                d.set(getSliceD(interpolator(latest)))\n            },\n            onComplete: () => {\n                setValues(sliceProps)\n                setWorking(false)\n            },\n        })\n    }\n\n    const compositeClassName = getClassName('slice', className)\n    return (\n        <m.path\n            d={d}\n            role={setRole ? 'slice' : undefined}\n            className={compositeClassName}\n            {...props}\n        />\n    )\n}"},description:"component used to draw individual bars",name:"component",required:!1,type:{name:"FC<SliceProps>"}},r:{defaultValue:{value:"0"},description:"radius for slices",name:"r",required:!1,type:{name:"number"}},padAngle:{defaultValue:{value:"0"},description:"angle padding",name:"padAngle",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"class string",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},setRole:{defaultValue:{value:"true"},description:"toggle role attribute in svg code",name:"setRole",required:!1,type:{name:"boolean"}},handlers:{defaultValue:null,description:"handlers for events",name:"handlers",required:!1,type:{name:"DataInteractivityHandlers<PieProcessedDataItem>"}},modifiers:{defaultValue:null,description:"style modifiers",name:"modifiers",required:!1,type:{name:"DataInteractivityModifiers"}},dataComponent:{defaultValue:null,description:"function binding data to interactivity handlers",name:"dataComponent",required:!1,type:{name:"FC<DataComponentProps<PieProcessedDataItem, SliceProps>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/src/pie/Slices.tsx#Slices"]={docgenInfo:Slices.__docgenInfo,name:"Slices",path:"packages/polar/src/pie/Slices.tsx#Slices"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/src/pie/predicates.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>isPieProcessedData});var isPieProcessedData=function isPieProcessedData(data){var result=data.map((function(item){return"object"==typeof item&&null!==item&&("id"in item&&"index"in item&&("startAngle"in item&&"endAngle"in item&&"data"in item&&"proportion"in item))}));return result.length>0&&result.every(Boolean)}},"./packages/polar/stories/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ChartDecorator});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ChartDecorator=function ChartDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:Story()})};ChartDecorator.displayName="ChartDecorator";try{ChartDecorator.displayName="ChartDecorator",ChartDecorator.__docgenInfo={description:"",displayName:"ChartDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/stories/decorators.tsx#ChartDecorator"]={docgenInfo:ChartDecorator.__docgenInfo,name:"ChartDecorator",path:"packages/polar/stories/decorators.tsx#ChartDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/stories/pie/decorators.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R_:()=>ChartPieSlicesDecorator,aW:()=>ChartDoughnutSlicesDecorator,ez:()=>ChartPieDecorator,jn:()=>OriginAndSlices,py:()=>ChartDoughnutDecorator,td:()=>commonPieProps});var _chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/polar/src/pie/Pie.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/polar/src/general/Origin.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/polar/src/pie/Slices.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var commonPieProps={data:[{id:"alpha",data:55},{id:"beta",data:20},{id:"gamma",data:25}]},ChartPieDecorator=function ChartPieDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.b,_extends({},commonPieProps,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:Story()})}))})};ChartPieDecorator.displayName="ChartPieDecorator";var ChartDoughnutDecorator=function ChartDoughnutDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.b,_extends({},commonPieProps,{rInner:.6,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:Story()})}))})};ChartDoughnutDecorator.displayName="ChartDoughnutDecorator";var ChartPieSlicesDecorator=function ChartPieSlicesDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.b,_extends({},commonPieProps,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.i,{style:{fillOpacity:.9}}),Story()]})}))})};ChartPieSlicesDecorator.displayName="ChartPieSlicesDecorator";var ChartDoughnutSlicesDecorator=function ChartDoughnutSlicesDecorator(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kL2,{size:[400,300],padding:[40,40,60,60],style:{display:"inline-block"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.b,_extends({},commonPieProps,{rInner:.6,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.i,{style:{fillOpacity:.9}}),Story()]})}))})};ChartDoughnutSlicesDecorator.displayName="ChartDoughnutSlicesDecorator";var OriginAndSlices=function OriginAndSlices(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.a,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.i,{style:{fillOpacity:.9}})})};OriginAndSlices.displayName="OriginAndSlices";try{ChartPieDecorator.displayName="ChartPieDecorator",ChartPieDecorator.__docgenInfo={description:"",displayName:"ChartPieDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/stories/pie/decorators.tsx#ChartPieDecorator"]={docgenInfo:ChartPieDecorator.__docgenInfo,name:"ChartPieDecorator",path:"packages/polar/stories/pie/decorators.tsx#ChartPieDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDoughnutDecorator.displayName="ChartDoughnutDecorator",ChartDoughnutDecorator.__docgenInfo={description:"",displayName:"ChartDoughnutDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/stories/pie/decorators.tsx#ChartDoughnutDecorator"]={docgenInfo:ChartDoughnutDecorator.__docgenInfo,name:"ChartDoughnutDecorator",path:"packages/polar/stories/pie/decorators.tsx#ChartDoughnutDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartPieSlicesDecorator.displayName="ChartPieSlicesDecorator",ChartPieSlicesDecorator.__docgenInfo={description:"",displayName:"ChartPieSlicesDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/stories/pie/decorators.tsx#ChartPieSlicesDecorator"]={docgenInfo:ChartPieSlicesDecorator.__docgenInfo,name:"ChartPieSlicesDecorator",path:"packages/polar/stories/pie/decorators.tsx#ChartPieSlicesDecorator"})}catch(__react_docgen_typescript_loader_error){}try{ChartDoughnutSlicesDecorator.displayName="ChartDoughnutSlicesDecorator",ChartDoughnutSlicesDecorator.__docgenInfo={description:"",displayName:"ChartDoughnutSlicesDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/polar/stories/pie/decorators.tsx#ChartDoughnutSlicesDecorator"]={docgenInfo:ChartDoughnutSlicesDecorator.__docgenInfo,name:"ChartDoughnutSlicesDecorator",path:"packages/polar/stories/pie/decorators.tsx#ChartDoughnutSlicesDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/polar/stories/general/Origin.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Origin_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/polar/stories/general/Origin.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"origin",children:"Origin"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{of:_Origin_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Origin"})," moves the svg coordinate system."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Ed,{of:_Origin_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Origin"})," is intended to be used as an immediate child of a view component, e.g. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Pie"}),".\nWhereas svg coordinates in a view are centered on the top-left corner of the view,\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Origin"})," introduces an svg ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"g"})," element that moves the origin of the coordinate system to the center.\nThis is important for components such as ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"Slices"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Origin_stories__WEBPACK_IMPORTED_MODULE_4__.WithoutOrigin}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{of:_Origin_stories__WEBPACK_IMPORTED_MODULE_4__.WithOrigin})]})}}}}]);