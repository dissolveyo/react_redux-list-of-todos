(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c.n(n),s=c(9),r=c(18),i=c(7),l=c(16),o=c(17),d="currentTodo/REMOVE",u="currentTodo/SET",j=function(e){return{type:u,payload:e}},b=function(){return{type:d}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.payload;case d:return null;default:return e}},f=c(3),m="query/UPDATE",O="query/RESET",x="status/CHANGE",p=function(e){return{type:m,payload:e}},v=function(){return{type:O}},y=function(e){return{type:x,payload:e}},N={query:"",status:"all"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(f.a)(Object(f.a)({},e),{},{query:""});case m:return Object(f.a)(Object(f.a)({},e),{},{query:t.payload});case x:return Object(f.a)(Object(f.a)({},e),{},{status:t.payload});default:return e}},k=c(19),w="todos/SET",T=function(e){return{type:w,payload:e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===w?Object(k.a)(t.payload):e},E=Object(i.combineReducers)({currentTodo:h,filter:g,todos:C}),S=Object(i.createStore)(E,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(o.a))),q=c(11),_=c(6),A=c.n(_),D=c(0),L=(c(28),c(29),c(12)),B=c.n(L),I=s.b,P=s.c,R=c(1),F=function(){var e=P((function(e){return e.todos})),t=P((function(e){return e.currentTodo})),c=P((function(e){return e.filter})),n=I(),a=e?function(e,t){var c=function(e,t){switch(t){case"all":default:return e;case"active":return e.filter((function(e){return!1===e.completed}));case"completed":return e.filter((function(e){return!0===e.completed}))}}(e,t.status);return function(e,t){var c=t.toLowerCase();return e.filter((function(e){return e.title.toLowerCase().includes(c)}))}(c,t.query)}(e,c):[];return Object(R.jsx)(R.Fragment,{children:a.length?Object(R.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(R.jsx)("thead",{children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{children:"#"}),Object(R.jsx)("th",{children:Object(R.jsx)("span",{className:"icon",children:Object(R.jsx)("i",{className:"fas fa-check"})})}),Object(R.jsx)("th",{children:"Title"}),Object(R.jsx)("th",{children:" "})]})}),Object(R.jsx)("tbody",{children:a.map((function(e){var c=e.id,a=e.completed,s=e.title,r=(null===t||void 0===t?void 0:t.id)===c;return Object(R.jsxs)("tr",{"data-cy":"todo",className:B()({"has-background-info-light":r}),children:[Object(R.jsx)("td",{className:"is-vcentered",children:c}),Object(R.jsx)("td",{className:"is-vcentered",children:a&&Object(R.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(R.jsx)("i",{className:"fas fa-check"})})}),Object(R.jsx)("td",{className:"is-vcentered is-expanded",children:Object(R.jsx)("p",{className:B()({"has-text-success":a,"has-text-danger":!a}),children:s})}),Object(R.jsx)("td",{className:"has-text-right is-vcentered",children:Object(R.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){n(j(e))}(e)},children:Object(R.jsx)("span",{className:"icon",children:Object(R.jsx)("i",{className:B()({far:!0,"fa-eye-slash":r,"fa-eye":!r})})})})})]},c)}))})]}):Object(R.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},J=function(){var e=I(),t=P((function(e){return e.filter}));return Object(R.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(R.jsx)("p",{className:"control",children:Object(R.jsx)("span",{className:"select",children:Object(R.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){var c=t.target.value;e(y(c))},children:[Object(R.jsx)("option",{value:"all",children:"All"}),Object(R.jsx)("option",{value:"active",children:"Active"}),Object(R.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(R.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(R.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t.query,onChange:function(t){e(p(t.target.value))}}),Object(R.jsx)("span",{className:"icon is-left",children:Object(R.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.query&&Object(R.jsx)("span",{className:"icon is-right",children:Object(R.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){e(v())}})})]})]})};function M(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(31);var G=function(){return Object(R.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(R.jsx)("div",{className:"Loader__content"})})},H=c(4),U=function(){var e=I(),t=P((function(e){return e.currentTodo})),c=Object(D.useState)(null),n=Object(H.a)(c,2),a=n[0],s=n[1],r=Object(D.useCallback)(Object(q.a)(A.a.mark((function e(){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,n=t.userId,M("/users/".concat(n));case 3:c=e.sent,s(c);case 5:case"end":return e.stop()}var n}),e)}))),[t]);return Object(D.useEffect)((function(){r()}),[]),Object(R.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(R.jsx)("div",{className:"modal-background"}),a?Object(R.jsxs)("div",{className:"modal-card",children:[Object(R.jsxs)("header",{className:"modal-card-head",children:[Object(R.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(R.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){e(b())}})]}),Object(R.jsxs)("div",{className:"modal-card-body",children:[Object(R.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(R.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(R.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(R.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(R.jsx)("a",{href:"mailto:".concat(a.email),children:a.name})]})]})]}):Object(R.jsx)(G,{})]})},V=function(){var e=I(),t=P((function(e){return e.todos})),c=P((function(e){return e.currentTodo}));return Object(D.useEffect)((function(){var t=function(){var t=Object(q.a)(A.a.mark((function t(){var c;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M("/todos");case 2:c=t.sent,e(T(c));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[c]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("div",{className:"section",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:"box",children:[Object(R.jsx)("h1",{className:"title",children:"Todos:"}),Object(R.jsx)("div",{className:"block",children:Object(R.jsx)(J,{})}),Object(R.jsxs)("div",{className:"block",children:[t&&Object(R.jsx)(F,{}),!t&&Object(R.jsx)(G,{})]})]})})}),c&&Object(R.jsx)(U,{})]})},W=function(){return Object(R.jsx)(s.a,{store:S,children:Object(R.jsx)(r.a,{children:Object(R.jsx)(V,{})})})};a.a.render(Object(R.jsx)(W,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e50bed03.chunk.js.map