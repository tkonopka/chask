"use strict";(self.webpackChunkchsk=self.webpackChunkchsk||[]).push([[2832],{"./packages/matrix/dist/chsk-matrix.es.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Br:()=>HeatMap,D6:()=>UpSetBar,F0:()=>UpSet,WL:()=>HeatMapCells,Wf:()=>isHeatMapData,ad:()=>HeatMapHighlight,by:()=>isUpSetData,hI:()=>UpSetGrid,iC:()=>UpSetMemberships,jE:()=>HeatMapSurface,oT:()=>HeatMapCircle});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),framer_motion__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/features-animation.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs"),_chsk_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/core/dist/chsk-core.es.js"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_chsk_band__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/band/dist/chsk-band.es.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}var Q=["container","keys","data","dataSize","scaleX","scaleY","scaleColor","scaleSize","children"],T={variant:"band",padding:0},HeatMap=function HeatMap(n){var t=n.container,r=void 0===t?_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Wd:t,i=n.keys,a=n.data,s=n.dataSize,S=n.scaleX,N=void 0===S?T:S,w=n.scaleY,j=void 0===w?T:w,_=n.scaleColor,C=n.scaleSize,R=void 0===C?_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Oo:C,M=n.children,A=_objectWithoutPropertiesLoose(n,Q),B=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Fg)(),D=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.uK)(r),I=D.dimsProps,O=D.origin,P=D.innerSize,V=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.sn)(a)}),[a]),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return a.map((function(e){return e.id}))}),[a]),E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return i.map((function(e){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.wI)(e)}))}),[i]),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function(e,n,t){var r=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.sn)(t);return n.map((function(n,i){var a=n.id,o=r[a],l=void 0!==o&&void 0!==t?t[o]:{id:a};return{id:a,index:i,value:e.map((function(e){return e(n)})),size:e.map((function(e){return Number(e(l))}))}}))}(E,a,s)}),[E,a,s]),F=function(e,n,t,r,i){var a={x:(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(t),y:(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(r)};return a.x.domain=n,a.x.size=i[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X],a.y.domain=e,a.y.size=i[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y],a}(L,i,N,j,P),X=F.x,Y=F.y,U=function(e,n){if("categorical"===n.variant){var t=new Set(e.map((function(e){return e.value})).flat().map(String));return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.NV)(n,Array.from(t))}var r=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X9)(e.map((function(e){return e.value})).flat().map(Number).filter(isFinite));return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.NV)(n,r)}(W,null!=_?_:B.Colors.sequential),H=function(e,n,t,r,i){var a=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kg)(e.map((function(e){return e.size})).flat()),o=Math.min(t[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y]/r.length,t[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X]/i.length)/2;return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__._C)(n,a,o)}(W,R,P,L,i),J=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.cT)({x:X,y:Y,color:U,size:H});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Pz,_extends({variant:"heatmap",position:O,size:I.size,padding:I.padding,originalData:a,processedData:W,seriesIndexes:V,keys:i,scalesContextValue:J},A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.X,{features:framer_motion__WEBPACK_IMPORTED_MODULE_6__.H,children:M})}))},isHeatMapData=function isHeatMapData(e){return e.map((function(e){return"object"==typeof e&&null!==e&&"id"in e})).every(Boolean)},isHeatMapSetting=function isHeatMapSetting(e,n){return function isHeatMapProcessedData(e){return e.map((function(e){return"object"==typeof e&&null!==e&&"id"in e&&"index"in e&&"value"in e&&"size"in e})).every(Boolean)}(e)&&(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.y7)(n.x)&&(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.y7)(n.y)},HeatMapRectangle=function HeatMapRectangle(e){var n=e.x,t=e.y,r=e.width,i=e.height,a=e.className,o=e.style;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect",{x:n-r/2,y:t-i/2,height:i,width:r,role:void 0,style:o,className:a})},HeatMapCells=function HeatMapCells(t){var r=t.ids,i=t.keys,a=t.cells,o=t.cell,l=void 0===o?HeatMapRectangle:o,s=t.scaleColor,u=t.scaleSize,c=t.className,d=t.style,f=t.children,m=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.pg)(),h=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE)(),v=h.scales,p=m.data;if(!isHeatMapSetting(p,v))return null;var y=s?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.ri)(s):v.color,g=u?(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Pu)(u):v.size,x=g(g.domain()[1]),b=isFinite(x),z=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.pP)(r,i,m)}),[r,i,m]),k=z.idSet,S=z.keySet,B=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function(e,n,t){var r={};return e?e.forEach((function(e){var n=e[0],t=e[1];r[n]||(r[n]=new Set),r[n].add(t)})):Array.from(n).forEach((function(e){r[e]=t})),function(e,n){return!!r[e]&&r[e].has(n)}}(a,k,S)}),[a,k,S]),D=v.x,I=v.y,O=m.keys.map((function(e){return D(e)})),P=v.x.bandwidth(),V=v.y.bandwidth(),L=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.gj)("cell",c),E=P/V,W=p.map((function(e){if(!k.has(e.id))return null;var t=I(e.id),r=e.value,i=e.size;return e.value.map((function(a,o){if(!B(e.id,m.keys[o]))return null;var s=y(r[o]),u=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.hI)(d,s),c=2*(isFinite(i[o])?g(i[o]):x);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(l,{key:"cell-"+e.index+"-"+o,x:O[o],y:t,width:b?E>1?c*E:c:P,height:b?E>1?c:c/E:V,cellValue:r[o],cellSize:i[o],className:L,style:u,center:!0,setRole:!1})}))})).flat().filter(Boolean);if(0===W.length&&!f)return null;var F=(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(h);return F.scales.color=y,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g",{role:"heatmap-cells",children:[W,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.ir,{value:F,children:f},"provider")]})},HeatMapCircle=function HeatMapCircle(e){var n=e.x,t=e.y,r=e.width,i=e.height,a=e.className,o=e.style;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle",{role:void 0,cx:n,cy:t,r:Math.min(r,i)/2,style:o,className:a})},HeatMapHighlightMask=function HeatMapHighlightMask(e,n,t,r,i){var a=n[0],o=n[1],l={initial:i?{width:0,height:0}:void 0,style:t,className:r};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.m.rect,_extends({animate:{width:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.UY)(e[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X][0]),height:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.UY)(e[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y][0])}},l),"top-left"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.m.rect,_extends({transform:"translate("+a+",0)rotate(90)",animate:{height:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.UY)(a-e[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X][1]),width:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.UY)(e[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y][0])}},l),"top-right"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.m.rect,_extends({transform:"translate(0,"+o+")rotate(-90)",animate:{width:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.UY)(o-e[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y][1]),height:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.UY)(e[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X][0])}},l),"bottom-left"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.m.rect,_extends({transform:"translate("+a+","+o+")rotate(180)",animate:{width:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.UY)(a-e[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X][1]),height:(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.UY)(o-e[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y][1])}},l),"bottom-right")]})},HeatMapHighlight=function HeatMapHighlight(n){var o=n.ids,l=n.keys,s=n.interactive,d=void 0===s||s,m=n.edgeAnimation,h=void 0!==m&&m,v=n.tooltipAlign,p=void 0===v?[.5,.5]:v,y=n.className,g=n.setRole,x=void 0===g||g,b=n.style,z=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.pg)(),k=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE)().scales,S=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Di)().size,j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),M=_[0],A=_[1],W=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.lL)().setData,F=z.data;if(!isHeatMapSetting(F,k))return null;var X=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.pP)(o,l,z)}),[o,l,z]),Y=X.idSet,U=X.keySet,q=X.idArray,J=X.keyArray,K=k.x,Q=k.y,T=k.color,Z=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function(e,n,t,r){return[(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Ax)(e,r),(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Ax)(n,t)]}(K,Q,Y,U)}),[K,Q,Y,U]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(!d&&null===M){var e=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X9)(Z[0]),n=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X9)(Z[1]);A([e,n])}}),[Z,A]);var $=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){A(null),W({})}),[A,W]),ee=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(e){if(null!==j&&null!==j.current){var n=j.current.getBoundingClientRect(),t=n.x,r=n.y,i=[e.clientX-t,e.clientY-r];if(!(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Kf)(i,M)){var a=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.CX)(i,Z),o=a.indexes,l=a.zone;if(null!==l){var s=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.ue)([l[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X][0],l[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y][0]],(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.gC)(l),p),d=s[0],f=s[1],m=o[0],h=o[1],v=q[h],y=J[m],g=F[h].value[m],x=F[h].size[m],b={id:v,key:y,value:g,size:x,label:(null===g||isNaN(Number(g))?"":"value: "+g)+" "+(null===x||isNaN(Number(x))?"":"size: "+x),color:T(g)};W({x:d,y:f,title:v+", "+y,data:[b]}),A(l)}else $()}}}),[Z,j,M,A]),ne=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("rect",{ref:j,role:x?"heatmap-detector":void 0,width:S[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X],height:S[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y],style:{opacity:0},onMouseMove:ee,onMouseLeave:$}),te=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.gj)("heatmap-highlight",y);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g",{role:"heatmap-highlight",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Jj,{role:x?"heatmap-highlight-mask":void 0,visible:null!==M,firstRender:!1,children:null===M?null:HeatMapHighlightMask(M,S,b,te,h)},"heatmap-highlight-mask"),d?ne:null]})},getInterval=function getInterval(e,n,t){var r=n.bandwidth(),i=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X9)(Array.from(e).map(n));return[i[0]-t[0]*r,i[1]+t[1]*r]},HeatMapSurface=function HeatMapSurface(n){var t=n.ids,r=n.keys,i=n.expansion,a=void 0===i?[[0,0],[0,0]]:i,o=n.className,l=n.setRole,u=void 0!==l&&l,c=n.style,d=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.pg)(),f=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE)().scales,m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.pP)(t,r,d)}),[t,r,d]),h=m.idSet,v=m.keySet;if(0===h.size||0===v.size)return null;var p=getInterval(h,f.y,a[0]),y=getInterval(v,f.x,a[1]),g=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.gj)("heatmapSurface",o);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("g",{role:"heatmap-surface",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.m.rect,{x:y[0],width:y[1]-y[0],y:p[0],height:p[1]-p[0],role:u?"heatmap-surface":void 0,className:g,style:c},"surface-"+Array.from(h).join(",")+"-"+Array.from(v).join(","))})},Z=["container","data","horizontal","scaleIndex","scaleMembership","scaleColor","children"],$={variant:"band",padding:.25},UpSet=function UpSet(n){var t=n.container,r=void 0===t?_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Wd:t,i=n.data,a=n.horizontal,s=void 0===a||a,f=n.scaleIndex,m=void 0===f?$:f,h=n.scaleMembership,g=void 0===h?$:h,k=n.scaleColor,S=n.children,N=_objectWithoutPropertiesLoose(n,Z),w=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Fg)(),j=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.uK)(r),_=j.dimsProps,C=j.origin,R=j.innerSize,M=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.sn)(i)}),[i]),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return i.map((function(e){return e.id}))}),[i]),B=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function(e,n,t){var r={};e.map((function(e,n){var t=1<<n;new Set(e.data).forEach((function(e){var n=String(e);r[n]||(r[n]=0),r[n]+=t}))}));var i=Array(Math.pow(2,e.length)).fill(0);Object.values(r).forEach((function(e){i[e]+=1}));var a=i.map((function(e,n){return e?[n,e]:null})).filter(Boolean);return a.sort((function(e,n){return n[1]-e[1]})),{keys:a.map((function(e){return String(e[0])})),processedData:e.map((function(e,n){var r=e.id,i=1<<n;return{id:r,index:n,horizontal:t,data:a.map((function(e){return(e[0]&i)>0?e[1]:0}))}}))}}(i,0,s)}),[i,A,s]),D=B.keys,I=B.processedData,O=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function(e,n,t,r,i,a){var o=(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(r);o.domain=e;var l=(0,lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep)(i);l.domain=n;var s={x:t?l:o,y:t?o:l};return s.x.size=a[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X],s.y.size=a[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y],s}(A,D,s,m,g,R)}),[A,D,s,m,g,_]),P=O.x,V=O.y,L=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.NV)(null!=k?k:w.Colors.categorical,[""]),E=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.cT)({x:P,y:V,color:L});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Pz,_extends({variant:"upset",position:C,size:_.size,padding:_.padding,originalData:i,processedData:I,seriesIndexes:M,keys:D,scalesContextValue:E},N,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.X,{features:framer_motion__WEBPACK_IMPORTED_MODULE_6__.H,children:S})}))},isUpSetData=function isUpSetData(e){return e.map((function(e){return"object"==typeof e&&null!==e&&"id"in e&&"data"in e})).every(Boolean)},isUpSetProcessedData=function isUpSetProcessedData(e){return e.map((function(e){return"object"==typeof e&&null!==e&&"id"in e&&"index"in e&&"data"in e})).every(Boolean)},ee=["size","padding","scaleIndex","scaleValue","scaleColor","children"],UpSetBar=function UpSetBar(n){var t=n.size,r=n.padding,i=void 0===r?[0,0,0,0]:r,a=n.scaleIndex,o=void 0===a?_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Us:a,l=n.scaleValue,s=void 0===l?_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Tx:l,d=n.scaleColor,f=n.children,m=_objectWithoutPropertiesLoose(n,ee),h=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.pg)(),v=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Di)(),p=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE)().scales,y=h.data;if(!isUpSetProcessedData(y)||0==y.length)return null;var g=y[0].horizontal,x=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function(e,n){var t=[];return n.map((function(n,r){var i=0;e.map((function(e){e.data[r]&&(i=e.data[r])})),t.push({id:n,value:i})})),t}(y,h.keys)}),[y,h]),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return function(e,n,t){return{position:e?[0,-n]:[t[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X],0],size:e?[t[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X],n]:[n,t[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y]]}}(g,t,v.size)}),[g,v]),z={position:b.position,positionUnits:"absolute",size:b.size,sizeUnits:"absolute",padding:i};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_chsk_band__WEBPACK_IMPORTED_MODULE_4__.$Q,_extends({container:z,data:x,keys:["value"],horizontal:!g,scaleIndex:o,scaleValue:s,scaleColor:null!=d?d:{variant:"categorical",domain:p.color.domain(),colors:[p.color(0)]}},m,{children:f}))},UpSetGrid=function UpSetGrid(e){var t=e.symbol,r=void 0===t?_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Cd:t,i=e.symbolStyle,a=e.className,o=e.setRole,l=void 0!==o&&o,s=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.pg)(),u=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE)().scales,c=s.data;if(!isUpSetProcessedData(c)||0==c.length)return null;var d=c[0].horizontal,f=d?u.y:u.x,m=d?u.x:u.y,h=Math.min(f.bandwidth(),m.bandwidth())/2,v=f.domain().map((function(e,t){var o=f(e);return m.domain().map((function(e,s){var u=m(e);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(r,{key:"cell-"+t+"-"+s,cx:d?u:o,cy:d?o:u,r:h,className:a,style:i,setRole:l})}))})).flat().filter(Boolean);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("g",{role:"upset-grid",children:v})},UpSetMembership=function UpSetMembership(e){var t=e.positions,r=e.r,i=e.symbol,a=void 0===i?_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Cd:i,o=e.line,l=void 0===o?_chsk_core__WEBPACK_IMPORTED_MODULE_1__.x1:o,s=e.symbolStyle,d=e.lineStyle,m=e.className,h=e.setRole,v=void 0!==h&&h,p=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X9)(t.map((function(e){return e[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X]}))),y=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.X9)(t.map((function(e){return e[_chsk_core__WEBPACK_IMPORTED_MODULE_1__.Y]}))),g=p[0]!=p[1]||y[0]!=y[1],x=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.gj)("upSetMembership",m),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(l,{key:"line",x1:p[0],x2:p[1],y1:y[0],y2:y[1],style:d,className:x,setRole:v}),z=t.map((function(e,t){return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(a,{key:"symbol-"+t,cx:e[0],cy:e[1],r,style:s,className:x,setRole:v})}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g",{role:"upset-membership",children:[g?b:null,z]})},UpSetMemberships=function UpSetMemberships(e){var t=e.component,r=void 0===t?UpSetMembership:t,i=e.symbol,a=e.line,o=e.symbolStyle,l=e.lineStyle,s=e.style,u=e.className,c=e.setRole,d=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.pg)(),f=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.kE)().scales,m=d.data;if(!isUpSetProcessedData(m)||0==m.length)return null;var h=m[0].horizontal,v=h?f.y:f.x,p=h?f.x:f.y,y=f.color,g=Math.min(v.bandwidth(),p.bandwidth())/2,x=m.map((function(e){return e.id})),b=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.hI)(o,y("")),z=(0,_chsk_core__WEBPACK_IMPORTED_MODULE_1__.hI)(l,y("")),k=d.keys.map((function(e,t){var o=[];return x.map((function(n,r){m[r].data[t]>0&&o.push([v(n),p(e)])})),h&&(o=o.map((function(e){return[e[1],e[0]]}))),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(r,{key:"membership-"+e,positions:o,r:g,symbol:i,symbolStyle:b,line:a,lineStyle:z,className:u,setRole:c})}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("g",{role:"upset-memberships",style:s,children:k})}},"./node_modules/d3-color/src/color.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B8:()=>rgb,Il:()=>Color,SU:()=>rgbConvert,Ss:()=>Rgb,ZP:()=>color});var _define_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-color/src/define.js");function Color(){}var brighter=1/.7,reI="\\s*([+-]?\\d+)\\s*",reN="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",reP="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",reHex=/^#([0-9a-f]{3,8})$/,reRgbInteger=new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),reRgbPercent=new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),reRgbaInteger=new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),reRgbaPercent=new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),reHslPercent=new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),reHslaPercent=new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`),named={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function color_formatHex(){return this.rgb().formatHex()}function color_formatRgb(){return this.rgb().formatRgb()}function color(format){var m,l;return format=(format+"").trim().toLowerCase(),(m=reHex.exec(format))?(l=m[1].length,m=parseInt(m[1],16),6===l?rgbn(m):3===l?new Rgb(m>>8&15|m>>4&240,m>>4&15|240&m,(15&m)<<4|15&m,1):8===l?rgba(m>>24&255,m>>16&255,m>>8&255,(255&m)/255):4===l?rgba(m>>12&15|m>>8&240,m>>8&15|m>>4&240,m>>4&15|240&m,((15&m)<<4|15&m)/255):null):(m=reRgbInteger.exec(format))?new Rgb(m[1],m[2],m[3],1):(m=reRgbPercent.exec(format))?new Rgb(255*m[1]/100,255*m[2]/100,255*m[3]/100,1):(m=reRgbaInteger.exec(format))?rgba(m[1],m[2],m[3],m[4]):(m=reRgbaPercent.exec(format))?rgba(255*m[1]/100,255*m[2]/100,255*m[3]/100,m[4]):(m=reHslPercent.exec(format))?hsla(m[1],m[2]/100,m[3]/100,1):(m=reHslaPercent.exec(format))?hsla(m[1],m[2]/100,m[3]/100,m[4]):named.hasOwnProperty(format)?rgbn(named[format]):"transparent"===format?new Rgb(NaN,NaN,NaN,0):null}function rgbn(n){return new Rgb(n>>16&255,n>>8&255,255&n,1)}function rgba(r,g,b,a){return a<=0&&(r=g=b=NaN),new Rgb(r,g,b,a)}function rgbConvert(o){return o instanceof Color||(o=color(o)),o?new Rgb((o=o.rgb()).r,o.g,o.b,o.opacity):new Rgb}function rgb(r,g,b,opacity){return 1===arguments.length?rgbConvert(r):new Rgb(r,g,b,null==opacity?1:opacity)}function Rgb(r,g,b,opacity){this.r=+r,this.g=+g,this.b=+b,this.opacity=+opacity}function rgb_formatHex(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}`}function rgb_formatRgb(){const a=clampa(this.opacity);return`${1===a?"rgb(":"rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${1===a?")":`, ${a})`}`}function clampa(opacity){return isNaN(opacity)?1:Math.max(0,Math.min(1,opacity))}function clampi(value){return Math.max(0,Math.min(255,Math.round(value)||0))}function hex(value){return((value=clampi(value))<16?"0":"")+value.toString(16)}function hsla(h,s,l,a){return a<=0?h=s=l=NaN:l<=0||l>=1?h=s=NaN:s<=0&&(h=NaN),new Hsl(h,s,l,a)}function hslConvert(o){if(o instanceof Hsl)return new Hsl(o.h,o.s,o.l,o.opacity);if(o instanceof Color||(o=color(o)),!o)return new Hsl;if(o instanceof Hsl)return o;var r=(o=o.rgb()).r/255,g=o.g/255,b=o.b/255,min=Math.min(r,g,b),max=Math.max(r,g,b),h=NaN,s=max-min,l=(max+min)/2;return s?(h=r===max?(g-b)/s+6*(g<b):g===max?(b-r)/s+2:(r-g)/s+4,s/=l<.5?max+min:2-max-min,h*=60):s=l>0&&l<1?0:h,new Hsl(h,s,l,o.opacity)}function Hsl(h,s,l,opacity){this.h=+h,this.s=+s,this.l=+l,this.opacity=+opacity}function clamph(value){return(value=(value||0)%360)<0?value+360:value}function clampt(value){return Math.max(0,Math.min(1,value||0))}function hsl2rgb(h,m1,m2){return 255*(h<60?m1+(m2-m1)*h/60:h<180?m2:h<240?m1+(m2-m1)*(240-h)/60:m1)}(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.Z)(Color,color,{copy(channels){return Object.assign(new this.constructor,this,channels)},displayable(){return this.rgb().displayable()},hex:color_formatHex,formatHex:color_formatHex,formatHex8:function color_formatHex8(){return this.rgb().formatHex8()},formatHsl:function color_formatHsl(){return hslConvert(this).formatHsl()},formatRgb:color_formatRgb,toString:color_formatRgb}),(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.Z)(Rgb,rgb,(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.l)(Color,{brighter(k){return k=null==k?brighter:Math.pow(brighter,k),new Rgb(this.r*k,this.g*k,this.b*k,this.opacity)},darker(k){return k=null==k?.7:Math.pow(.7,k),new Rgb(this.r*k,this.g*k,this.b*k,this.opacity)},rgb(){return this},clamp(){return new Rgb(clampi(this.r),clampi(this.g),clampi(this.b),clampa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:rgb_formatHex,formatHex:rgb_formatHex,formatHex8:function rgb_formatHex8(){return`#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:rgb_formatRgb,toString:rgb_formatRgb})),(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.Z)(Hsl,(function hsl(h,s,l,opacity){return 1===arguments.length?hslConvert(h):new Hsl(h,s,l,null==opacity?1:opacity)}),(0,_define_js__WEBPACK_IMPORTED_MODULE_0__.l)(Color,{brighter(k){return k=null==k?brighter:Math.pow(brighter,k),new Hsl(this.h,this.s,this.l*k,this.opacity)},darker(k){return k=null==k?.7:Math.pow(.7,k),new Hsl(this.h,this.s,this.l*k,this.opacity)},rgb(){var h=this.h%360+360*(this.h<0),s=isNaN(h)||isNaN(this.s)?0:this.s,l=this.l,m2=l+(l<.5?l:1-l)*s,m1=2*l-m2;return new Rgb(hsl2rgb(h>=240?h-240:h+120,m1,m2),hsl2rgb(h,m1,m2),hsl2rgb(h<120?h+240:h-120,m1,m2),this.opacity)},clamp(){return new Hsl(clamph(this.h),clampt(this.s),clampt(this.l),clampa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const a=clampa(this.opacity);return`${1===a?"hsl(":"hsla("}${clamph(this.h)}, ${100*clampt(this.s)}%, ${100*clampt(this.l)}%${1===a?")":`, ${a})`}`}}))},"./node_modules/d3-color/src/define.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function __WEBPACK_DEFAULT_EXPORT__(constructor,factory,prototype){constructor.prototype=factory.prototype=prototype,prototype.constructor=constructor}function extend(parent,definition){var prototype=Object.create(parent.prototype);for(var key in definition)prototype[key]=definition[key];return prototype}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,l:()=>extend})},"./node_modules/d3-interpolate/src/color.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>nogamma,yi:()=>gamma});var _constant_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/d3-interpolate/src/constant.js");function linear(a,d){return function(t){return a+t*d}}function gamma(y){return 1==(y=+y)?nogamma:function(a,b){return b-a?function exponential(a,b,y){return a=Math.pow(a,y),b=Math.pow(b,y)-a,y=1/y,function(t){return Math.pow(a+t*b,y)}}(a,b,y):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(isNaN(a)?b:a)}}function nogamma(a,b){var d=b-a;return d?linear(a,d):(0,_constant_js__WEBPACK_IMPORTED_MODULE_0__.Z)(isNaN(a)?b:a)}},"./node_modules/d3-interpolate/src/constant.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=x=>()=>x},"./node_modules/d3-interpolate/src/rgb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>rgb,hD:()=>rgbBasis});var src_color=__webpack_require__("./node_modules/d3-color/src/color.js");function basis(t1,v0,v1,v2,v3){var t2=t1*t1,t3=t2*t1;return((1-3*t1+3*t2-t3)*v0+(4-6*t2+3*t3)*v1+(1+3*t1+3*t2-3*t3)*v2+t3*v3)/6}var d3_interpolate_src_color=__webpack_require__("./node_modules/d3-interpolate/src/color.js");const rgb=function rgbGamma(y){var color=(0,d3_interpolate_src_color.yi)(y);function rgb(start,end){var r=color((start=(0,src_color.B8)(start)).r,(end=(0,src_color.B8)(end)).r),g=color(start.g,end.g),b=color(start.b,end.b),opacity=(0,d3_interpolate_src_color.ZP)(start.opacity,end.opacity);return function(t){return start.r=r(t),start.g=g(t),start.b=b(t),start.opacity=opacity(t),start+""}}return rgb.gamma=rgbGamma,rgb}(1);function rgbSpline(spline){return function(colors){var i,color,n=colors.length,r=new Array(n),g=new Array(n),b=new Array(n);for(i=0;i<n;++i)color=(0,src_color.B8)(colors[i]),r[i]=color.r||0,g[i]=color.g||0,b[i]=color.b||0;return r=spline(r),g=spline(g),b=spline(b),color.opacity=1,function(t){return color.r=r(t),color.g=g(t),color.b=b(t),color+""}}}var rgbBasis=rgbSpline((function src_basis(values){var n=values.length-1;return function(t){var i=t<=0?t=0:t>=1?(t=1,n-1):Math.floor(t*n),v1=values[i],v2=values[i+1],v0=i>0?values[i-1]:2*v1-v2,v3=i<n-1?values[i+2]:2*v2-v1;return basis((t-i/n)*n,v0,v1,v2,v3)}}));rgbSpline((function basisClosed(values){var n=values.length;return function(t){var i=Math.floor(((t%=1)<0?++t:t)*n),v0=values[(i+n-1)%n],v1=values[i%n],v2=values[(i+1)%n],v3=values[(i+2)%n];return basis((t-i/n)*n,v0,v1,v2,v3)}}))},"./node_modules/d3-scale-chromatic/src/colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function __WEBPACK_DEFAULT_EXPORT__(specifier){for(var n=specifier.length/6|0,colors=new Array(n),i=0;i<n;)colors[i]="#"+specifier.slice(6*i,6*++i);return colors}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})}}]);