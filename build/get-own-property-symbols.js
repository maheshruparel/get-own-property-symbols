/*! (C) WebReflection Mit Style License */
(function(e,t){"use strict";if(t in e)return;var n,r=typeof global==typeof r?window:global,i=0,s=""+Math.random(),o="__symbol:",u=o.length,a="__symbol@@"+s,f="defineProperty",l="defineProperties",c="getOwnPropertyNames",h="getOwnPropertyDescriptor",p="propertyIsEnumerable",d=e[c],v=e[h],m=e.create,g=e.keys,y=e[f],b=e[l],w=v(e,c),E=e.prototype,S=E.hasOwnProperty,x=E[p],T=Array.prototype.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},N=function(e){a in e||y(e,a,{enumerable:!1,configurable:!1,writable:!1,value:[]})},C=function(e,t,n){var r=T.call(e,t);r<0?e.push(t,n):e[r+1]=n},k=function(e){var t=m(e);return t.enumerable=!1,t},L=function(){},A=function(e){return e!==a&&e.slice(0,u)!==o},O=function(e){return e!==a&&e.slice(0,u)===o},M=function(e){var t={enumerable:!1,configurable:!0,get:L,set:function(t){n(this,e,{enumerable:!1,configurable:!0,writable:!0,value:t}),N(this),C(this[a],e,!0)}};return y(E,e,t),e},_=function(t){if(this&&this!==r)throw new TypeError("Symbol is not a constructor");return M(o.concat(t||"",s,++i))},D=function B(e,t,r){var i=""+t;return O(i)?(n(e,i,r.enumerable?k(r):r),N(e),C(e[a],i,!!r.enumerable)):B(e,t,r),e},P=function(t){return d(t).filter(O)};w.value=D,y(e,f,w),w.value=P,y(e,t,w),w.value=function(t){return d(t).filter(A)},y(e,c,w),w.value=function j(e,t){var n=P(t);return n.length?g(t).concat(n).forEach(function(n){t.propertyIsEnumerable(n)&&D(e,n,t[n])}):j(e,t),e},y(e,l,w),w.value=function F(e){var t=""+e;return O(t)?S.call(this,t)&&this[a][T.call(this[a],t)+1]:x.call(this,e)},y(E,p,w),w.value=_,y(r,"Symbol",w),w.value=function(e){var t=o.concat(o,e,s);return t in E?t:M(t)},y(_,"for",w),w.value=function(e){return o+o===e.slice(0,u*2)&&-1<T.call(d(E),e)?e.slice(u*2,-s.length):void 0},y(_,"keyFor",w);try{n=m(y({},o,{get:function(){return y(this,o,{value:!1})[o]}}))[o]||y}catch(H){n=function(e,t,n){var r=v(E,t);delete E[t],y(e,t,n),y(E,t,r)}}})(Object,"getOwnPropertySymbols");