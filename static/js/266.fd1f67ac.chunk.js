"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[266],{7335:function(t,n,e){e.d(n,{O:function(){return d}});var r,a,c=e(1087),u=e(7689),i=e(168),o=e(6444),s=o.ZP.ul(r||(r=(0,i.Z)(["\n  margin-top: 20px;\n"]))),p=o.ZP.li(a||(a=(0,i.Z)(["\n"]))),f=e(184),d=function(t){var n=t.movies,e=(0,u.TH)();return(0,f.jsx)(s,{children:n.map((function(t){return(0,f.jsx)(p,{children:(0,f.jsx)(c.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})}},1266:function(t,n,e){e.r(n);var r=e(9439),a=e(2791),c=e(1207),u=e(4378),i=e(1598),o=e(7335),s=e(184),p="idle",f="loading",d="resolve",h="error";n.default=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],v=n[1],l=(0,a.useState)(p),m=(0,r.Z)(l,2),x=m[0],y=m[1],Z=(0,a.useState)(""),w=(0,r.Z)(Z,2),k=w[0],g=w[1];return(0,a.useEffect)((function(){y(f),(0,c.Df)().then((function(t){v(t.results),y(d)})).catch((function(t){v([]),g(String(t)),y(h)}))}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)(o.O,{movies:e}),x===f&&(0,s.jsx)(u.a,{}),x===h&&(0,s.jsx)(i.Qf,{children:k})]})}},1207:function(t,n,e){e.d(n,{Df:function(){return s},M1:function(){return l},TP:function(){return h},V0:function(){return f},tx:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),i="https://api.themoviedb.org/3/",o="df88ba4f44a5ed712dd0a71f1b3d877c";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=266.fd1f67ac.chunk.js.map