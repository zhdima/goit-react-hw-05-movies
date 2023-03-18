"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[755],{7755:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,a,i,c,s,u=t(9439),o=t(2791),p=t(1087),l=t(7689),f=t(1207),d=t(168),h=t(6444),x=h.ZP.section(r||(r=(0,d.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-top: 20px;\n"]))),v=h.ZP.div(a||(a=(0,d.Z)(["\n  flex-basis: 200px;\n"]))),j=h.ZP.img(i||(i=(0,d.Z)(["\n  min-width: 200px;\n"]))),m=h.ZP.div(c||(c=(0,d.Z)(["\n"]))),b=h.ZP.p(s||(s=(0,d.Z)(["\n  margin: 16px 0;\n"]))),A=t(6983),Z=t(184),y=function(n){var e=n.info,t=e.title,r=e.poster_path,a=e.release_date,i=e.vote_average,c=e.overview,s=e.genres,u=void 0===s?[]:s;return(0,Z.jsxs)(x,{children:[(0,Z.jsx)(v,{children:(0,Z.jsx)(j,{src:r?"".concat("https://image.tmdb.org/t/p/w500").concat(r):A,alt:t})}),(0,Z.jsxs)(m,{children:[(0,Z.jsxs)("h1",{children:[t,a?" (".concat(a.slice(0,4),")"):""]}),(0,Z.jsxs)(b,{children:["User Score: ",i?"".concat(Math.round(10*i),"%"):"-"]}),(0,Z.jsx)("h3",{children:"Overview"}),(0,Z.jsx)(b,{children:c||"no info"}),(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsx)(b,{children:u.length?u.map((function(n){return n.name})).join(", "):"no info"})]})]})},g=t(4378),w=t(1598),k=t(9128),P="idle",V="loading",I="resolve",C="error",D=function(){var n,e,t=(0,o.useState)(),r=(0,u.Z)(t,2),a=r[0],i=r[1],c=(0,o.useState)(P),s=(0,u.Z)(c,2),d=s[0],h=s[1],x=(0,o.useState)(""),v=(0,u.Z)(x,2),j=v[0],m=v[1],b=(0,l.UO)().movieId,A=(0,l.TH)(),D=(0,o.useRef)(null!==(n=null===(e=A.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,o.useEffect)((function(){h(V),(0,f.TP)(b).then((function(n){i(n),h(I)})).catch((function(n){i({}),m(String(n)),h(C)}))}),[b]),(0,Z.jsxs)("main",{children:[(0,Z.jsxs)(w.hb,{to:D.current,children:[(0,Z.jsx)(k.jTe,{size:"12"}),"Go back"]}),a&&(0,Z.jsx)(y,{info:a}),d===V&&(0,Z.jsx)(g.a,{}),d===C&&(0,Z.jsx)(w.Qf,{children:j}),(0,Z.jsx)("hr",{}),(0,Z.jsx)("p",{children:"Additional information"}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]}),(0,Z.jsx)("hr",{}),(0,Z.jsx)(o.Suspense,{fallback:(0,Z.jsx)(g.a,{}),children:(0,Z.jsx)(l.j3,{})})]})}},1207:function(n,e,t){t.d(e,{Df:function(){return o},M1:function(){return x},TP:function(){return d},V0:function(){return l},tx:function(){return j}});var r=t(5861),a=t(7757),i=t.n(a),c=t(1243),s="https://api.themoviedb.org/3/",u="df88ba4f44a5ed712dd0a71f1b3d877c";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"trending/movie/day?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"search/movie?api_key=").concat(u,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},6983:function(n){n.exports="data:image/png;base64,UklGRsoDAABXRUJQVlA4IL4DAAAQIACdASrIACwBPp1Opk0lpKQiIlWoQLATiWlu4XVRG/OB6Adr3+bxm/JvyA745QPBnSg45fQM+e/P19Kewd+q/Wd9F0Lfz9opf1uVsjLrpvK2Rl103lbIy66bytkZddN5WyMuum8rZGXXTeVsjLrpvK2RltHINBT9nahmX9FlKkFYY9/9xtaevqOAgXIZWeWBrlyZ3XyC/EXFPNDUqnL+0Ndbwi1vISIAbN1auEfp9G8rQZJpQBcCUmB4iLW1yMK+iuowLNM/hwIm2r+bA11AWcJ50zjPCigXXTeVsjLrpvK2Rl103lbIy66bytkZddN5WyMuum8rZGXXTeVsjLrpvK2Rl103lWgAAP7+9GAAACY6YqLDim8A57vCNzO0bQ58E3yuDgEMKhgCr7qH5RIlqTj/XfaRCzlFRjNKPkKEB0jbE52PCxa1XEVAoPm9hpxq/IBWir+WurHVJ/ADDcQ4q6jOmOprebo6M9zWdpLhWS4hE0ufTo/p6q7QxvHtghxFQSgAqhjZUV13UYp+/EY9PosOnaSGWjVkqg8/9/EHM+3revRh6qmVk/hL9KGh865JkFh+SLbOi+Ka5x+iU39Dj6vQXUAjBYs7qZ67oSSJ6ln/AFfpW9/2upLFxj70N4CVq7nmgRbyf1fZYJC+M1OHbGqV/q4lDNlcN69cy0EvoY5OSk4ikTDvBlcNu90ADfW8MeXv3jYOLKgavfDMc4oOPP6u/f9kxKDyjnmMlHaWQtenmjHqauZNq22wdRAmH9iE2S919XkSsDwyYVsCl1LHN3KJ2m2oKQef5yM+8bt2gS5+XDxPOVEEW8PfKf0SGX5aU1bb/GxlHCqYupltmoR9MBVloeUPbZ2ElWOzmSbl045Om31nC4CbD26f/SOMlyfEsnsQNsrEXeTVdXHxV2B0KNFvJXNi8sufmiB8lPl5lMHeYVhngPYz1/8IYAiK2Er5+7+tV92PDFaqd0UTv4NVGKURsn+wXz2luD6xEHJVfO3LHjzzI6r9VqxyvIYLLTi6IhPpQcRZQ2wyFApxGIJe27mQjUgxDW1dBu4/NorK0CQdwm9aqLiy1686TDMxv1HD8/wF2uh18Injrb04x3e2H2eiY76CIa3mDV7RbrfbC1n8v30a7ezesNJPsvJosHdMpuI7eZ9+bL06KMMIDBs/5ItEULCZLVkmGisnuVnV753+6bAAeHPY58aBHFEZHnFl2Ifu9j2iICvjIRDGQVTZl9OFnGuvPtgAI6drbunCn7smT+vmmJBYBOAAAAAA"}}]);
//# sourceMappingURL=755.6f5452a7.chunk.js.map