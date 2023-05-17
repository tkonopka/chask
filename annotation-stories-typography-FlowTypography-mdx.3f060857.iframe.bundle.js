"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[3017,914],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./packages/annotation/stories/typography/FlowTypography.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SlowText:()=>SlowText,Styled:()=>Styled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FlowTypography_stories});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_SlowText$parameters,_SlowText$parameters2,_SlowText$parameters3,_Styled$parameters,_Styled$parameters2,_Styled$parameters2$d,src=__webpack_require__("./packages/annotation/src/index.tsx"),react=__webpack_require__("./node_modules/react/index.js"),chsk_core_es=__webpack_require__("./packages/core/dist/chsk-core.es.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),FlowTypographyDemo=function FlowTypographyDemo(_ref){var _ref$position=_ref.position,position=void 0===_ref$position?[60,60]:_ref$position,rate=_ref.rate,style=_ref.style,children=_ref.children,ref=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return function toggleMilestone(m){var _ref$current;null==(_ref$current=ref.current)||_ref$current.toggleMilestone(m)}("A")},children:"Toggle milestone"})}),(0,jsx_runtime.jsxs)(chsk_core_es.kL2,{fref:ref,size:[400,300],padding:[40,40,40,40],style:{margin:"0.5em",border:"solid 1px #aa3333"},children:[(0,jsx_runtime.jsx)(src.o,{id:"bg",floodColor:"#333333",expansion:[.3,0,.3,0]}),(0,jsx_runtime.jsx)(chsk_core_es.Tgp,{variant:"inner"}),(0,jsx_runtime.jsx)(chsk_core_es.G7x,{scaleX:{variant:"linear",domain:[0,100]},scaleY:{variant:"linear",domain:[0,100]},children:(0,jsx_runtime.jsx)(chsk_core_es.lqb,{enterOn:"A",children:(0,jsx_runtime.jsx)(src.r6,{position,rate,style,children})})})]})]})};try{FlowTypographyDemo.displayName="FlowTypographyDemo",FlowTypographyDemo.__docgenInfo={description:"",displayName:"FlowTypographyDemo",props:{style:{defaultValue:null,description:"css style",name:"style",required:!1,type:{name:"Partial<CSSProperties>"}},position:{defaultValue:{value:"[60, 60]"},description:"position (absolute coordinates)",name:"position",required:!1,type:{name:"NumericPositionSpec"}},children:{defaultValue:null,description:"content",name:"children",required:!1,type:{name:"ReactNode"}},rate:{defaultValue:null,description:"animation rate (seconds per character)",name:"rate",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/annotation/stories/typography/FlowTypographyDemo.tsx#FlowTypographyDemo"]={docgenInfo:FlowTypographyDemo.__docgenInfo,name:"FlowTypographyDemo",path:"packages/annotation/stories/typography/FlowTypographyDemo.tsx#FlowTypographyDemo"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const FlowTypography_stories={title:"Addons/Annotation/Typography/FlowTypography",component:src.r6};var Default={render:function render(){return(0,jsx_runtime.jsx)(FlowTypographyDemo,{style:{textAnchor:"start",fontSize:"18px"},children:"This is an example."})},name:"default"},SlowText={render:function render(){return(0,jsx_runtime.jsx)(FlowTypographyDemo,{rate:2,style:{textAnchor:"start",fontSize:"18px"},children:"This is an example."})},name:"slow text"},Styled={render:function render(){return(0,jsx_runtime.jsx)(FlowTypographyDemo,{style:{textAnchor:"start",fontSize:"18px",fill:"#ffffff",filter:"url(#bg)"},children:"This is an example."})},name:"styled"};Default.parameters=_extends({},Default.parameters,{docs:_extends({},null==(_Default$parameters=Default.parameters)?void 0:_Default$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <FlowTypographyDemo style={{\n    textAnchor: 'start',\n    fontSize: '18px'\n  }}>\n            This is an example.\n        </FlowTypographyDemo>,\n  name: 'default'\n}"},null==(_Default$parameters2=Default.parameters)||null==(_Default$parameters2$=_Default$parameters2.docs)?void 0:_Default$parameters2$.source)})}),SlowText.parameters=_extends({},SlowText.parameters,{docs:_extends({},null==(_SlowText$parameters=SlowText.parameters)?void 0:_SlowText$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <FlowTypographyDemo rate={2} style={{\n    textAnchor: 'start',\n    fontSize: '18px'\n  }}>\n            This is an example.\n        </FlowTypographyDemo>,\n  name: 'slow text'\n}"},null==(_SlowText$parameters2=SlowText.parameters)||null==(_SlowText$parameters3=_SlowText$parameters2.docs)?void 0:_SlowText$parameters3.source)})}),Styled.parameters=_extends({},Styled.parameters,{docs:_extends({},null==(_Styled$parameters=Styled.parameters)?void 0:_Styled$parameters.docs,{source:_extends({originalSource:"{\n  render: () => <FlowTypographyDemo style={{\n    textAnchor: 'start',\n    fontSize: '18px',\n    fill: '#ffffff',\n    filter: 'url(#bg)'\n  }}>\n            This is an example.\n        </FlowTypographyDemo>,\n  name: 'styled'\n}"},null==(_Styled$parameters2=Styled.parameters)||null==(_Styled$parameters2$d=_Styled$parameters2.docs)?void 0:_Styled$parameters2$d.source)})});var __namedExportsOrder=["Default","SlowText","Styled"]},"./packages/annotation/stories/typography/FlowTypography.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_FlowTypography_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/annotation/stories/typography/FlowTypography.stories.tsx");const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_FlowTypography_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"flowtypography",children:"FlowTypography"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"FlowTypography"})," animates text so that it reveals one character at a time."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Ed,{of:_FlowTypography_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"reveal-rate",children:"Reveal rate"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The speed of text reveal is determined by props ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rate"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"duration"}),".\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rate"})," sets the number of characters that appear per second.\nProp ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"duration"}),", which overrides ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rate"}),", sets the total length of time for the animation."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The two examples below display 'This is an example' using default settings (left)\nand with custom ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"rate"})," to slow down the effect (right).\nClick on the button to start the animation."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_FlowTypography_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_FlowTypography_stories__WEBPACK_IMPORTED_MODULE_2__.SlowText}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"styling",children:"Styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Text can be styled using css, including with filters."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_FlowTypography_stories__WEBPACK_IMPORTED_MODULE_2__.Styled})]})}}},"./node_modules/d3-shape/src/constant.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function __WEBPACK_DEFAULT_EXPORT__(x){return function constant(){return x}}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})},"./node_modules/d3-shape/src/curve/basis.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function point(that,x,y){that._context.bezierCurveTo((2*that._x0+that._x1)/3,(2*that._y0+that._y1)/3,(that._x0+2*that._x1)/3,(that._y0+2*that._y1)/3,(that._x0+4*that._x1+x)/6,(that._y0+4*that._y1+y)/6)}function Basis(context){this._context=context}__webpack_require__.d(__webpack_exports__,{fE:()=>Basis,xm:()=>point}),Basis.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:point(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(x,y){switch(x=+x,y=+y,this._point){case 0:this._point=1,this._line?this._context.lineTo(x,y):this._context.moveTo(x,y);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:point(this,x,y)}this._x0=this._x1,this._x1=x,this._y0=this._y1,this._y1=y}}},"./node_modules/d3-shape/src/curve/bundle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _basis_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-shape/src/curve/basis.js");function Bundle(context,beta){this._basis=new _basis_js__WEBPACK_IMPORTED_MODULE_0__.fE(context),this._beta=beta}Bundle.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var x=this._x,y=this._y,j=x.length-1;if(j>0)for(var t,x0=x[0],y0=y[0],dx=x[j]-x0,dy=y[j]-y0,i=-1;++i<=j;)t=i/j,this._basis.point(this._beta*x[i]+(1-this._beta)*(x0+t*dx),this._beta*y[i]+(1-this._beta)*(y0+t*dy));this._x=this._y=null,this._basis.lineEnd()},point:function(x,y){this._x.push(+x),this._y.push(+y)}};const __WEBPACK_DEFAULT_EXPORT__=function custom(beta){function bundle(context){return 1===beta?new _basis_js__WEBPACK_IMPORTED_MODULE_0__.fE(context):new Bundle(context,beta)}return bundle.beta=function(beta){return custom(+beta)},bundle}(.85)},"./node_modules/d3-shape/src/curve/linear.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function Linear(context){this._context=context}function __WEBPACK_DEFAULT_EXPORT__(context){return new Linear(context)}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__}),Linear.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(x,y){switch(x=+x,y=+y,this._point){case 0:this._point=1,this._line?this._context.lineTo(x,y):this._context.moveTo(x,y);break;case 1:this._point=2;default:this._context.lineTo(x,y)}}}},"./node_modules/d3-shape/src/line.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>line});Array.prototype.slice;var constant=__webpack_require__("./node_modules/d3-shape/src/constant.js"),linear=__webpack_require__("./node_modules/d3-shape/src/curve/linear.js"),src_path=__webpack_require__("./node_modules/d3-shape/src/path.js");function point_x(p){return p[0]}function point_y(p){return p[1]}function line(x,y){var defined=(0,constant.Z)(!0),context=null,curve=linear.Z,output=null,path=(0,src_path.d)(line);function line(data){var i,d,buffer,n=(data=function array(x){return"object"==typeof x&&"length"in x?x:Array.from(x)}(data)).length,defined0=!1;for(null==context&&(output=curve(buffer=path())),i=0;i<=n;++i)!(i<n&&defined(d=data[i],i,data))===defined0&&((defined0=!defined0)?output.lineStart():output.lineEnd()),defined0&&output.point(+x(d,i,data),+y(d,i,data));if(buffer)return output=null,buffer+""||null}return x="function"==typeof x?x:void 0===x?point_x:(0,constant.Z)(x),y="function"==typeof y?y:void 0===y?point_y:(0,constant.Z)(y),line.x=function(_){return arguments.length?(x="function"==typeof _?_:(0,constant.Z)(+_),line):x},line.y=function(_){return arguments.length?(y="function"==typeof _?_:(0,constant.Z)(+_),line):y},line.defined=function(_){return arguments.length?(defined="function"==typeof _?_:(0,constant.Z)(!!_),line):defined},line.curve=function(_){return arguments.length?(curve=_,null!=context&&(output=curve(context)),line):curve},line.context=function(_){return arguments.length?(null==_?context=output=null:output=curve(context=_),line):context},line}},"./node_modules/d3-shape/src/path.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>withPath});const pi=Math.PI,tau=2*pi,tauEpsilon=tau-1e-6;function append(strings){this._+=strings[0];for(let i=1,n=strings.length;i<n;++i)this._+=arguments[i]+strings[i]}class Path{constructor(digits){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==digits?append:function appendRound(digits){let d=Math.floor(digits);if(!(d>=0))throw new Error(`invalid digits: ${digits}`);if(d>15)return append;const k=10**d;return function(strings){this._+=strings[0];for(let i=1,n=strings.length;i<n;++i)this._+=Math.round(arguments[i]*k)/k+strings[i]}}(digits)}moveTo(x,y){this._append`M${this._x0=this._x1=+x},${this._y0=this._y1=+y}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(x,y){this._append`L${this._x1=+x},${this._y1=+y}`}quadraticCurveTo(x1,y1,x,y){this._append`Q${+x1},${+y1},${this._x1=+x},${this._y1=+y}`}bezierCurveTo(x1,y1,x2,y2,x,y){this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1=+x},${this._y1=+y}`}arcTo(x1,y1,x2,y2,r){if(x1=+x1,y1=+y1,x2=+x2,y2=+y2,(r=+r)<0)throw new Error(`negative radius: ${r}`);let x0=this._x1,y0=this._y1,x21=x2-x1,y21=y2-y1,x01=x0-x1,y01=y0-y1,l01_2=x01*x01+y01*y01;if(null===this._x1)this._append`M${this._x1=x1},${this._y1=y1}`;else if(l01_2>1e-6)if(Math.abs(y01*x21-y21*x01)>1e-6&&r){let x20=x2-x0,y20=y2-y0,l21_2=x21*x21+y21*y21,l20_2=x20*x20+y20*y20,l21=Math.sqrt(l21_2),l01=Math.sqrt(l01_2),l=r*Math.tan((pi-Math.acos((l21_2+l01_2-l20_2)/(2*l21*l01)))/2),t01=l/l01,t21=l/l21;Math.abs(t01-1)>1e-6&&this._append`L${x1+t01*x01},${y1+t01*y01}`,this._append`A${r},${r},0,0,${+(y01*x20>x01*y20)},${this._x1=x1+t21*x21},${this._y1=y1+t21*y21}`}else this._append`L${this._x1=x1},${this._y1=y1}`;else;}arc(x,y,r,a0,a1,ccw){if(x=+x,y=+y,ccw=!!ccw,(r=+r)<0)throw new Error(`negative radius: ${r}`);let dx=r*Math.cos(a0),dy=r*Math.sin(a0),x0=x+dx,y0=y+dy,cw=1^ccw,da=ccw?a0-a1:a1-a0;null===this._x1?this._append`M${x0},${y0}`:(Math.abs(this._x1-x0)>1e-6||Math.abs(this._y1-y0)>1e-6)&&this._append`L${x0},${y0}`,r&&(da<0&&(da=da%tau+tau),da>tauEpsilon?this._append`A${r},${r},0,1,${cw},${x-dx},${y-dy}A${r},${r},0,1,${cw},${this._x1=x0},${this._y1=y0}`:da>1e-6&&this._append`A${r},${r},0,${+(da>=pi)},${cw},${this._x1=x+r*Math.cos(a1)},${this._y1=y+r*Math.sin(a1)}`)}rect(x,y,w,h){this._append`M${this._x0=this._x1=+x},${this._y0=this._y1=+y}h${w=+w}v${+h}h${-w}Z`}toString(){return this._}}function withPath(shape){let digits=3;return shape.digits=function(_){if(!arguments.length)return digits;if(null==_)digits=null;else{const d=Math.floor(_);if(!(d>=0))throw new RangeError(`invalid digits: ${_}`);digits=d}return shape},()=>new Path(digits)}Path.prototype}}]);