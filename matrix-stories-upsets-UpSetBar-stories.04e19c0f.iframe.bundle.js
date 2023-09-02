"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[9152],{"./packages/matrix/stories/upsets/UpSetBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Horizontal:()=>Horizontal,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UpSetBar_stories});var chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),chsk_band_es=__webpack_require__("./packages/band/dist/chsk-band.es.js"),predicates=__webpack_require__("./packages/matrix/src/upset/predicates.ts"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["size","padding","scaleIndex","scaleValue","scaleColor","children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var UpSetBar=function UpSetBar(_ref){var _data$0$horizontal,_data$,size=_ref.size,_ref$padding=_ref.padding,padding=void 0===_ref$padding?[0,0,0,0]:_ref$padding,_ref$scaleIndex=_ref.scaleIndex,scaleIndex=void 0===_ref$scaleIndex?chsk_core_es.Us:_ref$scaleIndex,_ref$scaleValue=_ref.scaleValue,scaleValue=void 0===_ref$scaleValue?chsk_core_es.Tx9:_ref$scaleValue,scaleColor=_ref.scaleColor,children=_ref.children,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref,_excluded),processedData=(0,chsk_core_es.wIO)(),dimensions=(0,chsk_core_es.Bs9)(),scales=(0,chsk_core_es.kE1)().scales,data=processedData.data;if(!(0,predicates.B)(data)||0==data.length)return null;var horizontal=null!=(_data$0$horizontal=null==(_data$=data[0])?void 0:_data$.horizontal)&&_data$0$horizontal,barData=(0,react.useMemo)((function(){return function getBarData(data,keys){var result=[];return keys.map((function(k,i){var value=0;data.forEach((function(seriesData){seriesData.data[i]&&(value=Number(seriesData.data[i]))})),result.push({id:k,value})})),result}(data,processedData.keys)}),[data,processedData]),barLayout=(0,react.useMemo)((function(){return function getBarViewLayout(horizontal,size,viewSize){return{position:horizontal?[0,-size]:[viewSize[chsk_core_es.X],0],size:horizontal?[viewSize[chsk_core_es.X],size]:[size,viewSize[chsk_core_es.Y]]}}(horizontal,size,dimensions.size)}),[horizontal,dimensions]),container={position:barLayout.position,positionUnits:"absolute",size:barLayout.size,sizeUnits:"absolute",padding};return(0,jsx_runtime.jsx)(chsk_band_es.$Q,_extends({container,data:barData,keys:["value"],horizontal:!horizontal,scaleIndex,scaleValue,scaleColor:null!=scaleColor?scaleColor:{variant:"categorical",domain:scales.color.domain(),colors:[scales.color(0)]}},props,{children}))};UpSetBar.displayName="UpSetBar";try{UpSetBar.displayName="UpSetBar",UpSetBar.__docgenInfo={description:"",displayName:"UpSetBar",props:{padding:{defaultValue:{value:"[0, 0, 0, 0]"},description:"padding",name:"padding",required:!1,type:{name:"FourSideSizeSpec"}},size:{defaultValue:null,description:"size of view along the value axis",name:"size",required:!0,type:{name:"number"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}},scaleColor:{defaultValue:null,description:"scale for colors",name:"scaleColor",required:!1,type:{name:"CategoricalScaleSpec"}},scaleIndex:{defaultValue:null,description:"scale for axis with discrete indexes",name:"scaleIndex",required:!1,type:{name:"ScaleWithBandwidthSpec"}},scaleValue:{defaultValue:null,description:"scale for axis with continuous values",name:"scaleValue",required:!1,type:{name:"LinearScaleSpec"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/matrix/src/upset/UpSetBar.tsx#UpSetBar"]={docgenInfo:UpSetBar.__docgenInfo,name:"UpSetBar",path:"packages/matrix/src/upset/UpSetBar.tsx#UpSetBar"})}catch(__react_docgen_typescript_loader_error){}var _Horizontal$parameter,_Horizontal$parameter2,_Vertical$parameters,_Vertical$parameters2,UpSet=__webpack_require__("./packages/matrix/src/upset/UpSet.tsx"),UpSetGrid=__webpack_require__("./packages/matrix/src/upset/UpSetGrid.tsx"),UpSetMemberships=__webpack_require__("./packages/matrix/src/upset/UpSetMemberships.tsx"),decorators=__webpack_require__("./packages/matrix/stories/decorators.tsx");function UpSetBar_stories_extends(){return UpSetBar_stories_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},UpSetBar_stories_extends.apply(this,arguments)}const UpSetBar_stories={title:"Addons/Matrix/UpSets/UpSetBar",component:UpSetBar};var Horizontal={render:function render(){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[170,40,40,80],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(UpSet.F,UpSetBar_stories_extends({},decorators.w,{horizontal:!0,children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left"}),(0,jsx_runtime.jsx)(UpSetGrid.h,{symbolStyle:{fill:"#ccc"}}),(0,jsx_runtime.jsx)(UpSetMemberships.i,{lineStyle:{strokeWidth:3}}),(0,jsx_runtime.jsxs)(UpSetBar,{size:150,padding:[0,0,10,0],children:[(0,jsx_runtime.jsxs)(chsk_core_es.RDh,{variant:"left",children:[(0,jsx_runtime.jsx)(chsk_core_es.yAs,{variant:"left"}),(0,jsx_runtime.jsx)(chsk_core_es.$Co,{variant:"left",style:{visibility:"visible"}}),(0,jsx_runtime.jsx)(chsk_core_es.kpH,{variant:"left",children:"Intersection size"})]}),(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"bottom",children:(0,jsx_runtime.jsx)(chsk_core_es.$Co,{variant:"bottom",style:{visibility:"visible"}})}),(0,jsx_runtime.jsx)(chsk_band_es.Ll,{})]})]}))})},name:"horizontal"},Vertical={render:function render(){return(0,jsx_runtime.jsx)(chsk_core_es.kL2,{size:[400,300],padding:[60,200,40,60],style:{display:"inline-block"},children:(0,jsx_runtime.jsxs)(UpSet.F,UpSetBar_stories_extends({},decorators.w,{horizontal:!1,children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"top",children:(0,jsx_runtime.jsx)(chsk_core_es.yAs,{variant:"top",labelAngle:-70,labelStyle:{dominantBaseline:"middle",textAnchor:"start"}})}),(0,jsx_runtime.jsx)(UpSetGrid.h,{symbolStyle:{fill:"#ccc"}}),(0,jsx_runtime.jsx)(UpSetMemberships.i,{lineStyle:{strokeWidth:3}}),(0,jsx_runtime.jsxs)(UpSetBar,{size:180,padding:[0,0,0,10],children:[(0,jsx_runtime.jsx)(chsk_core_es.RDh,{variant:"left",children:(0,jsx_runtime.jsx)(chsk_core_es.$Co,{variant:"left",style:{visibility:"visible"}})}),(0,jsx_runtime.jsxs)(chsk_core_es.RDh,{variant:"top",children:[(0,jsx_runtime.jsx)(chsk_core_es.yAs,{variant:"top"}),(0,jsx_runtime.jsx)(chsk_core_es.$Co,{variant:"top",style:{visibility:"visible"}}),(0,jsx_runtime.jsx)(chsk_core_es.kpH,{variant:"top",children:"Intersection size"})]}),(0,jsx_runtime.jsx)(chsk_band_es.Ll,{})]})]}))})},name:"vertical"};Horizontal.parameters=UpSetBar_stories_extends({},Horizontal.parameters,{docs:UpSetBar_stories_extends({},null==(_Horizontal$parameter=Horizontal.parameters)?void 0:_Horizontal$parameter.docs,{source:UpSetBar_stories_extends({originalSource:'{\n  render: () => <Chart size={[400, 300]} padding={[170, 40, 40, 80]} style={{\n    display: \'inline-block\'\n  }}>\n            <UpSet {...commonUpSetProps} horizontal={true}>\n                <Axis variant="left" />\n                <UpSetGrid symbolStyle={{\n        fill: \'#ccc\'\n      }} />\n                <UpSetMemberships lineStyle={{\n        strokeWidth: 3\n      }} />\n                <UpSetBar size={150} padding={[0, 0, 10, 0]}>\n                    <Axis variant="left">\n                        <AxisTicks variant="left" />\n                        <AxisLine variant="left" style={{\n            visibility: \'visible\'\n          }} />\n                        <AxisLabel variant="left">Intersection size</AxisLabel>\n                    </Axis>\n                    <Axis variant="bottom">\n                        <AxisLine variant="bottom" style={{\n            visibility: \'visible\'\n          }} />\n                    </Axis>\n                    <Bars />\n                </UpSetBar>\n            </UpSet>\n        </Chart>,\n  name: \'horizontal\'\n}'},null==(_Horizontal$parameter2=Horizontal.parameters)||null==(_Horizontal$parameter2=_Horizontal$parameter2.docs)?void 0:_Horizontal$parameter2.source)})}),Vertical.parameters=UpSetBar_stories_extends({},Vertical.parameters,{docs:UpSetBar_stories_extends({},null==(_Vertical$parameters=Vertical.parameters)?void 0:_Vertical$parameters.docs,{source:UpSetBar_stories_extends({originalSource:'{\n  render: () => <Chart size={[400, 300]} padding={[60, 200, 40, 60]} style={{\n    display: \'inline-block\'\n  }}>\n            <UpSet {...commonUpSetProps} horizontal={false}>\n                <Axis variant="top">\n                    <AxisTicks variant="top" labelAngle={-70} labelStyle={{\n          dominantBaseline: \'middle\',\n          textAnchor: \'start\'\n        }} />\n                </Axis>\n                <UpSetGrid symbolStyle={{\n        fill: \'#ccc\'\n      }} />\n                <UpSetMemberships lineStyle={{\n        strokeWidth: 3\n      }} />\n                <UpSetBar size={180} padding={[0, 0, 0, 10]}>\n                    <Axis variant="left">\n                        <AxisLine variant="left" style={{\n            visibility: \'visible\'\n          }} />\n                    </Axis>\n                    <Axis variant="top">\n                        <AxisTicks variant="top" />\n                        <AxisLine variant="top" style={{\n            visibility: \'visible\'\n          }} />\n                        <AxisLabel variant="top">Intersection size</AxisLabel>\n                    </Axis>\n                    <Bars />\n                </UpSetBar>\n            </UpSet>\n        </Chart>,\n  name: \'vertical\'\n}'},null==(_Vertical$parameters2=Vertical.parameters)||null==(_Vertical$parameters2=_Vertical$parameters2.docs)?void 0:_Vertical$parameters2.source)})});var __namedExportsOrder=["Horizontal","Vertical"]}}]);