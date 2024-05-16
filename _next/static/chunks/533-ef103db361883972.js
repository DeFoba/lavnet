"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[533],{77683:function(e,t,n){n.d(t,{ee:function(){return eV},Eh:function(){return e_},VY:function(){return e$},fC:function(){return eF},D7:function(){return eR}});var r=n(22988),i=n(2265);let o=["top","right","bottom","left"],l=Math.min,a=Math.max,f=Math.round,s=Math.floor,u=e=>({x:e,y:e}),c={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function p(e,t){return"function"==typeof e?e(t):e}function h(e){return e.split("-")[0]}function m(e){return e.split("-")[1]}function g(e){return"x"===e?"y":"x"}function w(e){return"y"===e?"height":"width"}function y(e){return["top","bottom"].includes(h(e))?"y":"x"}function v(e){return e.replace(/start|end/g,e=>d[e])}function x(e){return e.replace(/left|right|bottom|top/g,e=>c[e])}function b(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function R(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function A(e,t,n){let r,{reference:i,floating:o}=e,l=y(t),a=g(y(t)),f=w(a),s=h(t),u="y"===l,c=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,p=i[f]/2-o[f]/2;switch(s){case"top":r={x:c,y:i.y-o.height};break;case"bottom":r={x:c,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(m(t)){case"start":r[a]-=p*(n&&u?-1:1);break;case"end":r[a]+=p*(n&&u?-1:1)}return r}let E=async(e,t,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,a=o.filter(Boolean),f=await (null==l.isRTL?void 0:l.isRTL(t)),s=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:c}=A(s,r,f),d=r,p={},h=0;for(let n=0;n<a.length;n++){let{name:o,fn:m}=a[n],{x:g,y:w,data:y,reset:v}=await m({x:u,y:c,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:s,platform:l,elements:{reference:e,floating:t}});u=null!=g?g:u,c=null!=w?w:c,p={...p,[o]:{...p[o],...y}},v&&h<=50&&(h++,"object"==typeof v&&(v.placement&&(d=v.placement),v.rects&&(s=!0===v.rects?await l.getElementRects({reference:e,floating:t,strategy:i}):v.rects),{x:u,y:c}=A(s,d,f)),n=-1)}return{x:u,y:c,placement:d,strategy:i,middlewareData:p}};async function P(e,t){var n;void 0===t&&(t={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:f}=e,{boundary:s="clippingAncestors",rootBoundary:u="viewport",elementContext:c="floating",altBoundary:d=!1,padding:h=0}=p(t,e),m=b(h),g=a[d?"floating"===c?"reference":"floating":c],w=R(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:s,rootBoundary:u,strategy:f})),y="floating"===c?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,v=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),x=await (null==o.isElement?void 0:o.isElement(v))&&await (null==o.getScale?void 0:o.getScale(v))||{x:1,y:1},A=R(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:v,strategy:f}):y);return{top:(w.top-A.top+m.top)/x.y,bottom:(A.bottom-w.bottom+m.bottom)/x.y,left:(w.left-A.left+m.left)/x.x,right:(A.right-w.right+m.right)/x.x}}function S(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function L(e){return o.some(t=>e[t]>=0)}async function O(e,t){let{placement:n,platform:r,elements:i}=e,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=h(n),a=m(n),f="y"===y(n),s=["left","top"].includes(l)?-1:1,u=o&&f?-1:1,c=p(t,e),{mainAxis:d,crossAxis:g,alignmentAxis:w}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&"number"==typeof w&&(g="end"===a?-1*w:w),f?{x:g*u,y:d*s}:{x:d*s,y:g*u}}function T(e){return W(e)?(e.nodeName||"").toLowerCase():"#document"}function C(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function H(e){var t;return null==(t=(W(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function W(e){return e instanceof Node||e instanceof C(e).Node}function k(e){return e instanceof Element||e instanceof C(e).Element}function D(e){return e instanceof HTMLElement||e instanceof C(e).HTMLElement}function F(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof C(e).ShadowRoot)}function V(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=z(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function $(e){let t=_(),n=z(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function _(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function M(e){return["html","body","#document"].includes(T(e))}function z(e){return C(e).getComputedStyle(e)}function B(e){return k(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function N(e){if("html"===T(e))return e;let t=e.assignedSlot||e.parentNode||F(e)&&e.host||H(e);return F(t)?t.host:t}function Y(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let i=function e(t){let n=N(t);return M(n)?t.ownerDocument?t.ownerDocument.body:t.body:D(n)&&V(n)?n:e(n)}(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),l=C(i);return o?t.concat(l,l.visualViewport||[],V(i)?i:[],l.frameElement&&n?Y(l.frameElement):[]):t.concat(i,Y(i,[],n))}function j(e){let t=z(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=D(e),o=i?e.offsetWidth:n,l=i?e.offsetHeight:r,a=f(n)!==o||f(r)!==l;return a&&(n=o,r=l),{width:n,height:r,$:a}}function I(e){return k(e)?e:e.contextElement}function X(e){let t=I(e);if(!D(t))return u(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:o}=j(t),l=(o?f(n.width):n.width)/r,a=(o?f(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}let Z=u(0);function q(e){let t=C(e);return _()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Z}function G(e,t,n,r){var i;void 0===t&&(t=!1),void 0===n&&(n=!1);let o=e.getBoundingClientRect(),l=I(e),a=u(1);t&&(r?k(r)&&(a=X(r)):a=X(e));let f=(void 0===(i=n)&&(i=!1),r&&(!i||r===C(l))&&i)?q(l):u(0),s=(o.left+f.x)/a.x,c=(o.top+f.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(l){let e=C(l),t=r&&k(r)?C(r):r,n=e,i=n.frameElement;for(;i&&r&&t!==n;){let e=X(i),t=i.getBoundingClientRect(),r=z(i),o=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;s*=e.x,c*=e.y,d*=e.x,p*=e.y,s+=o,c+=l,i=(n=C(i)).frameElement}}return R({width:d,height:p,x:s,y:c})}let J=[":popover-open",":modal"];function K(e){return J.some(t=>{try{return e.matches(t)}catch(e){return!1}})}function Q(e){return G(H(e)).left+B(e).scrollLeft}function U(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=C(e),r=H(e),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,a=0,f=0;if(i){o=i.width,l=i.height;let e=_();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,f=i.offsetTop)}return{width:o,height:l,x:a,y:f}}(e,n);else if("document"===t)r=function(e){let t=H(e),n=B(e),r=e.ownerDocument.body,i=a(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=a(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-n.scrollLeft+Q(e),f=-n.scrollTop;return"rtl"===z(r).direction&&(l+=a(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:l,y:f}}(H(e));else if(k(t))r=function(e,t){let n=G(e,!0,"fixed"===t),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=D(e)?X(e):u(1),l=e.clientWidth*o.x;return{width:l,height:e.clientHeight*o.y,x:i*o.x,y:r*o.y}}(t,n);else{let n=q(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return R(r)}function ee(e){return"static"===z(e).position}function et(e,t){return D(e)&&"fixed"!==z(e).position?t?t(e):e.offsetParent:null}function en(e,t){let n=C(e);if(K(e))return n;if(!D(e)){let t=N(e);for(;t&&!M(t);){if(k(t)&&!ee(t))return t;t=N(t)}return n}let r=et(e,t);for(;r&&["table","td","th"].includes(T(r))&&ee(r);)r=et(r,t);return r&&M(r)&&ee(r)&&!$(r)?n:r||function(e){let t=N(e);for(;D(t)&&!M(t);){if($(t))return t;t=N(t)}return null}(e)||n}let er=async function(e){let t=this.getOffsetParent||en,n=this.getDimensions,r=await n(e.floating);return{reference:function(e,t,n){let r=D(t),i=H(t),o="fixed"===n,l=G(e,!0,o,t),a={scrollLeft:0,scrollTop:0},f=u(0);if(r||!r&&!o){if(("body"!==T(t)||V(i))&&(a=B(t)),r){let e=G(t,!0,o,t);f.x=e.x+t.clientLeft,f.y=e.y+t.clientTop}else i&&(f.x=Q(i))}return{x:l.left+a.scrollLeft-f.x,y:l.top+a.scrollTop-f.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},ei={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,o="fixed"===i,l=H(r),a=!!t&&K(t.floating);if(r===l||a&&o)return n;let f={scrollLeft:0,scrollTop:0},s=u(1),c=u(0),d=D(r);if((d||!d&&!o)&&(("body"!==T(r)||V(l))&&(f=B(r)),D(r))){let e=G(r);s=X(r),c.x=e.x+r.clientLeft,c.y=e.y+r.clientTop}return{width:n.width*s.x,height:n.height*s.y,x:n.x*s.x-f.scrollLeft*s.x+c.x,y:n.y*s.y-f.scrollTop*s.y+c.y}},getDocumentElement:H,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,o=[..."clippingAncestors"===n?K(t)?[]:function(e,t){let n=t.get(e);if(n)return n;let r=Y(e,[],!1).filter(e=>k(e)&&"body"!==T(e)),i=null,o="fixed"===z(e).position,l=o?N(e):e;for(;k(l)&&!M(l);){let t=z(l),n=$(l);n||"fixed"!==t.position||(i=null),(o?!n&&!i:!n&&"static"===t.position&&!!i&&["absolute","fixed"].includes(i.position)||V(l)&&!n&&function e(t,n){let r=N(t);return!(r===n||!k(r)||M(r))&&("fixed"===z(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):i=t,l=N(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],f=o[0],s=o.reduce((e,n)=>{let r=U(t,n,i);return e.top=a(r.top,e.top),e.right=l(r.right,e.right),e.bottom=l(r.bottom,e.bottom),e.left=a(r.left,e.left),e},U(t,f,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:en,getElementRects:er,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=j(e);return{width:t,height:n}},getScale:X,isElement:k,isRTL:function(e){return"rtl"===z(e).direction}},eo=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:i,rects:o,platform:f,elements:s,middlewareData:u}=t,{element:c,padding:d=0}=p(e,t)||{};if(null==c)return{};let h=b(d),v={x:n,y:r},x=g(y(i)),R=w(x),A=await f.getDimensions(c),E="y"===x,P=E?"clientHeight":"clientWidth",S=o.reference[R]+o.reference[x]-v[x]-o.floating[R],L=v[x]-o.reference[x],O=await (null==f.getOffsetParent?void 0:f.getOffsetParent(c)),T=O?O[P]:0;T&&await (null==f.isElement?void 0:f.isElement(O))||(T=s.floating[P]||o.floating[R]);let C=T/2-A[R]/2-1,H=l(h[E?"top":"left"],C),W=l(h[E?"bottom":"right"],C),k=T-A[R]-W,D=T/2-A[R]/2+(S/2-L/2),F=a(H,l(D,k)),V=!u.arrow&&null!=m(i)&&D!==F&&o.reference[R]/2-(D<H?H:W)-A[R]/2<0,$=V?D<H?D-H:D-k:0;return{[x]:v[x]+$,data:{[x]:F,centerOffset:D-F-$,...V&&{alignmentOffset:$}},reset:V}}}),el=(e,t,n)=>{let r=new Map,i={platform:ei,...n},o={...i.platform,_c:r};return E(e,t,{...i,platform:o})};var ea=n(54887);let ef=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?eo({element:n.current,padding:r}).fn(t):{}:n?eo({element:n,padding:r}).fn(t):{}}});var es="undefined"!=typeof document?i.useLayoutEffect:i.useEffect;function eu(e,t){let n,r,i;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!eu(e[r],t[r]))return!1;return!0}if((n=(i=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!e.$$typeof)&&!eu(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function ec(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ed(e,t){let n=ec(e);return Math.round(t*n)/n}function ep(e){let t=i.useRef(e);return es(()=>{t.current=e}),t}var eh=n(25171);let em=(0,i.forwardRef)((e,t)=>{let{children:n,width:o=10,height:l=5,...a}=e;return(0,i.createElement)(eh.WV.svg,(0,r.Z)({},a,{ref:t,width:o,height:l,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:(0,i.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var eg=n(1584),ew=n(98324),ey=n(75137),ev=n(1336);let ex="Popper",[eb,eR]=(0,ew.b)(ex),[eA,eE]=eb(ex),eP=(0,i.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:o,...l}=e,a=eE("PopperAnchor",n),f=(0,i.useRef)(null),s=(0,eg.e)(t,f);return(0,i.useEffect)(()=>{a.onAnchorChange((null==o?void 0:o.current)||f.current)}),o?null:(0,i.createElement)(eh.WV.div,(0,r.Z)({},l,{ref:s}))}),eS="PopperContent",[eL,eO]=eb(eS),eT=(0,i.forwardRef)((e,t)=>{var n,o,f,u,c,d,b,R,A,E,T,C,W,k;let{__scopePopper:D,side:F="bottom",sideOffset:V=0,align:$="center",alignOffset:_=0,arrowPadding:M=0,avoidCollisions:z=!0,collisionBoundary:B=[],collisionPadding:N=0,sticky:j="partial",hideWhenDetached:X=!1,updatePositionStrategy:Z="optimized",onPlaced:q,...J}=e,K=eE(eS,D),[Q,U]=(0,i.useState)(null),ee=(0,eg.e)(t,e=>U(e)),[et,en]=(0,i.useState)(null),er=function(e){let[t,n]=(0,i.useState)(void 0);return(0,ev.b)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,i;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else r=e.offsetWidth,i=e.offsetHeight;n({width:r,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(et),ei=null!==(n=null==er?void 0:er.width)&&void 0!==n?n:0,eo=null!==(o=null==er?void 0:er.height)&&void 0!==o?o:0,em="number"==typeof N?N:{top:0,right:0,bottom:0,left:0,...N},ew=Array.isArray(B)?B:[B],ex=ew.length>0,eb={padding:em,boundary:ew.filter(eW),altBoundary:ex},{refs:eR,floatingStyles:eA,placement:eP,isPositioned:eO,middlewareData:eT}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:l,floating:a}={},transform:f=!0,whileElementsMounted:s,open:u}=e,[c,d]=i.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=i.useState(r);eu(p,r)||h(r);let[m,g]=i.useState(null),[w,y]=i.useState(null),v=i.useCallback(e=>{e!==A.current&&(A.current=e,g(e))},[]),x=i.useCallback(e=>{e!==E.current&&(E.current=e,y(e))},[]),b=l||m,R=a||w,A=i.useRef(null),E=i.useRef(null),P=i.useRef(c),S=null!=s,L=ep(s),O=ep(o),T=i.useCallback(()=>{if(!A.current||!E.current)return;let e={placement:t,strategy:n,middleware:p};O.current&&(e.platform=O.current),el(A.current,E.current,e).then(e=>{let t={...e,isPositioned:!0};C.current&&!eu(P.current,t)&&(P.current=t,ea.flushSync(()=>{d(t)}))})},[p,t,n,O]);es(()=>{!1===u&&P.current.isPositioned&&(P.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[u]);let C=i.useRef(!1);es(()=>(C.current=!0,()=>{C.current=!1}),[]),es(()=>{if(b&&(A.current=b),R&&(E.current=R),b&&R){if(L.current)return L.current(b,R,T);T()}},[b,R,T,L,S]);let H=i.useMemo(()=>({reference:A,floating:E,setReference:v,setFloating:x}),[v,x]),W=i.useMemo(()=>({reference:b,floating:R}),[b,R]),k=i.useMemo(()=>{let e={position:n,left:0,top:0};if(!W.floating)return e;let t=ed(W.floating,c.x),r=ed(W.floating,c.y);return f?{...e,transform:"translate("+t+"px, "+r+"px)",...ec(W.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,f,W.floating,c.x,c.y]);return i.useMemo(()=>({...c,update:T,refs:H,elements:W,floatingStyles:k}),[c,T,H,W,k])}({strategy:"fixed",placement:F+("center"!==$?"-"+$:""),whileElementsMounted:(...e)=>(function(e,t,n,r){let i;void 0===r&&(r={});let{ancestorScroll:o=!0,ancestorResize:f=!0,elementResize:u="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=I(e),h=o||f?[...p?Y(p):[],...Y(t)]:[];h.forEach(e=>{o&&e.addEventListener("scroll",n,{passive:!0}),f&&e.addEventListener("resize",n)});let m=p&&c?function(e,t){let n,r=null,i=H(e);function o(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return!function f(u,c){void 0===u&&(u=!1),void 0===c&&(c=1),o();let{left:d,top:p,width:h,height:m}=e.getBoundingClientRect();if(u||t(),!h||!m)return;let g=s(p),w=s(i.clientWidth-(d+h)),y={rootMargin:-g+"px "+-w+"px "+-s(i.clientHeight-(p+m))+"px "+-s(d)+"px",threshold:a(0,l(1,c))||1},v=!0;function x(e){let t=e[0].intersectionRatio;if(t!==c){if(!v)return f();t?f(!1,t):n=setTimeout(()=>{f(!1,1e-7)},1e3)}v=!1}try{r=new IntersectionObserver(x,{...y,root:i.ownerDocument})}catch(e){r=new IntersectionObserver(x,y)}r.observe(e)}(!0),o}(p,n):null,g=-1,w=null;u&&(w=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&w&&(w.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=w)||e.observe(t)})),n()}),p&&!d&&w.observe(p),w.observe(t));let y=d?G(e):null;return d&&function t(){let r=G(e);y&&(r.x!==y.x||r.y!==y.y||r.width!==y.width||r.height!==y.height)&&n(),y=r,i=requestAnimationFrame(t)}(),n(),()=>{var e;h.forEach(e=>{o&&e.removeEventListener("scroll",n),f&&e.removeEventListener("resize",n)}),null==m||m(),null==(e=w)||e.disconnect(),w=null,d&&cancelAnimationFrame(i)}})(...e,{animationFrame:"always"===Z}),elements:{reference:K.anchor},middleware:[{name:"offset",options:A={mainAxis:V+eo,alignmentAxis:_},async fn(e){var t,n;let{x:r,y:i,placement:o,middlewareData:l}=e,a=await O(e,A);return o===(null==(t=l.offset)?void 0:t.placement)&&null!=(n=l.arrow)&&n.alignmentOffset?{}:{x:r+a.x,y:i+a.y,data:{...a,placement:o}}}},z&&{name:"shift",options:T={mainAxis:!0,crossAxis:!1,limiter:"partial"===j?(void 0===E&&(E={}),{options:E,fn(e){let{x:t,y:n,placement:r,rects:i,middlewareData:o}=e,{offset:l=0,mainAxis:a=!0,crossAxis:f=!0}=p(E,e),s={x:t,y:n},u=y(r),c=g(u),d=s[c],m=s[u],w=p(l,e),v="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(a){let e="y"===c?"height":"width",t=i.reference[c]-i.floating[e]+v.mainAxis,n=i.reference[c]+i.reference[e]-v.mainAxis;d<t?d=t:d>n&&(d=n)}if(f){var x,b;let e="y"===c?"width":"height",t=["top","left"].includes(h(r)),n=i.reference[u]-i.floating[e]+(t&&(null==(x=o.offset)?void 0:x[u])||0)+(t?0:v.crossAxis),l=i.reference[u]+i.reference[e]+(t?0:(null==(b=o.offset)?void 0:b[u])||0)-(t?v.crossAxis:0);m<n?m=n:m>l&&(m=l)}return{[c]:d,[u]:m}}}):void 0,...eb},async fn(e){let{x:t,y:n,placement:r}=e,{mainAxis:i=!0,crossAxis:o=!1,limiter:f={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...s}=p(T,e),u={x:t,y:n},c=await P(e,s),d=y(h(r)),m=g(d),w=u[m],v=u[d];if(i){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",n=w+c[e],r=w-c[t];w=a(n,l(w,r))}if(o){let e="y"===d?"top":"left",t="y"===d?"bottom":"right",n=v+c[e],r=v-c[t];v=a(n,l(v,r))}let x=f.fn({...e,[m]:w,[d]:v});return{...x,data:{x:x.x-t,y:x.y-n}}}},z&&{name:"flip",options:C={...eb},async fn(e){var t,n,r,i,o;let{placement:l,middlewareData:a,rects:f,initialPlacement:s,platform:u,elements:c}=e,{mainAxis:d=!0,crossAxis:b=!0,fallbackPlacements:R,fallbackStrategy:A="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:S=!0,...L}=p(C,e);if(null!=(t=a.arrow)&&t.alignmentOffset)return{};let O=h(l),T=h(s)===s,H=await (null==u.isRTL?void 0:u.isRTL(c.floating)),W=R||(T||!S?[x(s)]:function(e){let t=x(e);return[v(e),t,v(t)]}(s));R||"none"===E||W.push(...function(e,t,n,r){let i=m(e),o=function(e,t,n){let r=["left","right"],i=["right","left"];switch(e){case"top":case"bottom":if(n)return t?i:r;return t?r:i;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(h(e),"start"===n,r);return i&&(o=o.map(e=>e+"-"+i),t&&(o=o.concat(o.map(v)))),o}(s,S,E,H));let k=[s,...W],D=await P(e,L),F=[],V=(null==(n=a.flip)?void 0:n.overflows)||[];if(d&&F.push(D[O]),b){let e=function(e,t,n){void 0===n&&(n=!1);let r=m(e),i=g(y(e)),o=w(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[o]>t.floating[o]&&(l=x(l)),[l,x(l)]}(l,f,H);F.push(D[e[0]],D[e[1]])}if(V=[...V,{placement:l,overflows:F}],!F.every(e=>e<=0)){let e=((null==(r=a.flip)?void 0:r.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:V},reset:{placement:t}};let n=null==(i=V.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!n)switch(A){case"bestFit":{let e=null==(o=V.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:o[0];e&&(n=e);break}case"initialPlacement":n=s}if(l!==n)return{reset:{placement:n}}}return{}}},{name:"size",options:W={...eb,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:i,height:o}=t.reference,l=e.floating.style;l.setProperty("--radix-popper-available-width",`${n}px`),l.setProperty("--radix-popper-available-height",`${r}px`),l.setProperty("--radix-popper-anchor-width",`${i}px`),l.setProperty("--radix-popper-anchor-height",`${o}px`)}},async fn(e){let t,n;let{placement:r,rects:i,platform:o,elements:f}=e,{apply:s=()=>{},...u}=p(W,e),c=await P(e,u),d=h(r),g=m(r),w="y"===y(r),{width:v,height:x}=i.floating;"top"===d||"bottom"===d?(t=d,n=g===(await (null==o.isRTL?void 0:o.isRTL(f.floating))?"start":"end")?"left":"right"):(n=d,t="end"===g?"top":"bottom");let b=x-c[t],R=v-c[n],A=!e.middlewareData.shift,E=b,S=R;if(w){let e=v-c.left-c.right;S=g||A?l(R,e):e}else{let e=x-c.top-c.bottom;E=g||A?l(b,e):e}if(A&&!g){let e=a(c.left,0),t=a(c.right,0),n=a(c.top,0),r=a(c.bottom,0);w?S=v-2*(0!==e||0!==t?e+t:a(c.left,c.right)):E=x-2*(0!==n||0!==r?n+r:a(c.top,c.bottom))}await s({...e,availableWidth:S,availableHeight:E});let L=await o.getDimensions(f.floating);return v!==L.width||x!==L.height?{reset:{rects:!0}}:{}}},et&&ef({element:et,padding:M}),ek({arrowWidth:ei,arrowHeight:eo}),X&&{name:"hide",options:k={strategy:"referenceHidden",...eb},async fn(e){let{rects:t}=e,{strategy:n="referenceHidden",...r}=p(k,e);switch(n){case"referenceHidden":{let n=S(await P(e,{...r,elementContext:"reference"}),t.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:L(n)}}}case"escaped":{let n=S(await P(e,{...r,altBoundary:!0}),t.floating);return{data:{escapedOffsets:n,escaped:L(n)}}}default:return{}}}}]}),[eC,eH]=eD(eP),eF=(0,ey.W)(q);(0,ev.b)(()=>{eO&&(null==eF||eF())},[eO,eF]);let eV=null===(f=eT.arrow)||void 0===f?void 0:f.x,e$=null===(u=eT.arrow)||void 0===u?void 0:u.y,e_=(null===(c=eT.arrow)||void 0===c?void 0:c.centerOffset)!==0,[eM,ez]=(0,i.useState)();return(0,ev.b)(()=>{Q&&ez(window.getComputedStyle(Q).zIndex)},[Q]),(0,i.createElement)("div",{ref:eR.setFloating,"data-radix-popper-content-wrapper":"",style:{...eA,transform:eO?eA.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:eM,"--radix-popper-transform-origin":[null===(d=eT.transformOrigin)||void 0===d?void 0:d.x,null===(b=eT.transformOrigin)||void 0===b?void 0:b.y].join(" ")},dir:e.dir},(0,i.createElement)(eL,{scope:D,placedSide:eC,onArrowChange:en,arrowX:eV,arrowY:e$,shouldHideArrow:e_},(0,i.createElement)(eh.WV.div,(0,r.Z)({"data-side":eC,"data-align":eH},J,{ref:ee,style:{...J.style,animation:eO?void 0:"none",opacity:null!==(R=eT.hide)&&void 0!==R&&R.referenceHidden?0:void 0}}))))}),eC={top:"bottom",right:"left",bottom:"top",left:"right"},eH=(0,i.forwardRef)(function(e,t){let{__scopePopper:n,...o}=e,l=eO("PopperArrow",n),a=eC[l.placedSide];return(0,i.createElement)("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0}},(0,i.createElement)(em,(0,r.Z)({},o,{ref:t,style:{...o.style,display:"block"}})))});function eW(e){return null!==e}let ek=e=>({name:"transformOrigin",options:e,fn(t){var n,r,i,o,l;let{placement:a,rects:f,middlewareData:s}=t,u=(null===(n=s.arrow)||void 0===n?void 0:n.centerOffset)!==0,c=u?0:e.arrowWidth,d=u?0:e.arrowHeight,[p,h]=eD(a),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(r=null===(i=s.arrow)||void 0===i?void 0:i.x)&&void 0!==r?r:0)+c/2,w=(null!==(o=null===(l=s.arrow)||void 0===l?void 0:l.y)&&void 0!==o?o:0)+d/2,y="",v="";return"bottom"===p?(y=u?m:`${g}px`,v=`${-d}px`):"top"===p?(y=u?m:`${g}px`,v=`${f.floating.height+d}px`):"right"===p?(y=`${-d}px`,v=u?m:`${w}px`):"left"===p&&(y=`${f.floating.width+d}px`,v=u?m:`${w}px`),{data:{x:y,y:v}}}});function eD(e){let[t,n="center"]=e.split("-");return[t,n]}let eF=e=>{let{__scopePopper:t,children:n}=e,[r,o]=(0,i.useState)(null);return(0,i.createElement)(eA,{scope:t,anchor:r,onAnchorChange:o},n)},eV=eP,e$=eT,e_=eH},31725:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(22988),i=n(2265),o=n(25171);let l=(0,i.forwardRef)((e,t)=>(0,i.createElement)(o.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}})))}}]);