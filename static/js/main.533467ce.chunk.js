(this["webpackJsonpphoto-search-app"]=this["webpackJsonpphoto-search-app"]||[]).push([[0],{189:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(61),u=n.n(s),o=(n(69),n(2)),i=n.n(o),p=n(5),h=n(12),j="https://api.unsplash.com/",l="6rAERFq8Cnew1xT_GX8sDTMCspeQZ5KBakzDhtdPrCU",f=function(){var e=Object(p.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"photos?per_page=30",e.prev=1,e.next=4,fetch("".concat(j,"/").concat("photos?per_page=30"),{headers:{Authorization:"Client-ID ".concat(l)}});case 4:return t=e.sent,e.next=7,t.json();case 7:return e.t0=e.sent,e.abrupt("return",{data:e.t0,error:null});case 11:return e.prev=11,e.t1=e.catch(1),e.abrupt("return",{data:null,error:e.t1});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(p.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="search/photos?per_page=30&query=".concat(t),e.prev=1,e.next=4,fetch("".concat(j,"/").concat(n),{headers:{Authorization:"Client-ID ".concat(l)}});case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",{data:a.results,error:null});case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",{data:null,error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.imageDetails;return Object(r.jsx)("li",{children:Object(r.jsx)("img",{src:t.urls.small,width:"400"},t.id)},t.id)},O=n(62),x=n.n(O),v=function(e){var t=e.images;return Object(r.jsx)("div",{children:Object(r.jsx)(x.a,{className:"grid-container",options:{isFitWidth:!0},children:t.map((function(e){return Object(r.jsx)(b,{imageDetails:e})}))})})},g=n(63),m=function(e){var t=e.search,n=e.setSearch;return Object(r.jsx)("div",{className:"search-container",children:Object(r.jsx)(g.DebounceInput,{type:"text",value:t,placeholder:"Search for photo",minLength:2,debounceTimeout:500,onChange:function(e){return n(e.target.value)}})})},w=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),u=Object(h.a)(s,2),o=u[0],j=u[1],l=Object(a.useState)(!1),b=Object(h.a)(l,2),O=b[0],x=b[1],g=Object(a.useState)(null),w=Object(h.a)(g,2),S=w[0],k=w[1],C=function(){var e=Object(p.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,n=t.data,r=t.error,y(n,r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(p.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:n=e.sent,r=n.data,a=n.error,y(r,a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e,t){x(!0),e?j(e):t&&k(t),x(!1)};return Object(a.useEffect)(Object(p.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(n);case 1:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)(Object(p.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.length>0?D(n):C();case 1:case"end":return e.stop()}}),e)}))),[n]),Object(r.jsxs)("center",{children:[Object(r.jsx)("h1",{children:"Photo Search App"}),Object(r.jsx)(m,{search:n,setSearch:c}),Object(r.jsx)("div",{className:"photo-container",children:O?Object(r.jsx)("p",{children:"Loading"}):S?Object(r.jsx)("p",{children:"Error loading data"}):o.length>0?Object(r.jsx)(v,{images:o}):Object(r.jsx)("p",{children:"No photos found"})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,190)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root")),S()},69:function(e,t,n){}},[[189,1,2]]]);
//# sourceMappingURL=main.533467ce.chunk.js.map