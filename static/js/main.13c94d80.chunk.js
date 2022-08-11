(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(3),o=c(14),l=c(6),i=c(12),d=c(13),r=function(e){return{type:"todo/selected",payload:e}},j=function(){return{type:"todo/remove"}},u=function(){return{type:"loading/start"}},b=function(){return{type:"loading/finish"}},h=c(5),f={todos:[],filteredTodo:[]},O=function(e){return{type:"todos/set",payload:e}},m=function(e){return{type:"todos/filter/all",payload:e}},x=function(e){return{type:"todos/filter/completed",payload:e}},p=function(e){return{type:"todos/filter/active",payload:e}},v=Object(l.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todos/set":return{todos:t.payload,filteredTodo:t.payload};case"todos/filter/all":return Object(h.a)(Object(h.a)({},e),{},{filteredTodo:e.todos.filter((function(e){return e.title.includes(t.payload.toLowerCase())}))});case"todos/filter/completed":return Object(h.a)(Object(h.a)({},e),{},{filteredTodo:e.todos.filter((function(e){return e.completed&&e.title.includes(t.payload.toLowerCase())}))});case"todos/filter/active":return Object(h.a)(Object(h.a)({},e),{},{filteredTodo:e.todos.filter((function(e){return!e.completed&&e.title.includes(t.payload.toLowerCase())}))});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loading/start":return!0;case"loading/finish":return!1;default:return e}},currentTodo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todo/selected":return t.payload;case"todo/remove":return null;default:return e}}}),y=Object(l.createStore)(v,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(d.a))),N=n.c,g=(c(22),c(23),c(0));function T(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(24),c(25);var C,k=c(1),w=function(){return Object(k.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(k.jsx)("div",{className:"Loader__content"})})},E=c(4);!function(e){e.ALL="all",e.COMPLETED="completed",e.ACTIVE="active"}(C||(C={}));var L=function(){var e=Object(n.b)(),t=Object(g.useState)(""),c=Object(E.a)(t,2),s=c[0],a=c[1],o=Object(g.useState)(""),l=Object(E.a)(o,2),i=l[0],d=l[1];return Object(g.useEffect)((function(){switch(s){case C.COMPLETED:e(x(i));break;case C.ACTIVE:e(p(i));break;case C.ALL:default:e(m(i))}}),[i,s]),Object(k.jsxs)("form",{className:"field has-addons",children:[Object(k.jsx)("p",{className:"control",children:Object(k.jsx)("span",{className:"select",children:Object(k.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(k.jsx)("option",{value:C.ALL,children:"All"}),Object(k.jsx)("option",{value:C.ACTIVE,children:"Active"}),Object(k.jsx)("option",{value:C.COMPLETED,children:"Completed"})]})})}),Object(k.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(k.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:i,onChange:function(e){return d(e.target.value)}}),Object(k.jsx)("span",{className:"icon is-left",children:Object(k.jsx)("i",{className:"fas fa-magnifying-glass"})}),i&&Object(k.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(k.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){d("")}})})]})]})},A=function(){var e=Object(n.b)(),t=N((function(e){return e.currentTodo})),c=N((function(e){return e.items.filteredTodo}));return Object(k.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)("i",{className:"fas fa-check"})})}),Object(k.jsx)("th",{children:"Title"}),Object(k.jsx)("th",{children:" "})]})}),Object(k.jsx)("tbody",{children:c.map((function(c){return Object(k.jsxs)("tr",{"data-cy":"todo",className:(null===t||void 0===t?void 0:t.id)!==c.id?"":"has-background-info-light",children:[Object(k.jsx)("td",{className:"is-vcentered",children:c.id}),c.completed?Object(k.jsx)("td",{className:"is-vcentered",children:Object(k.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(k.jsx)("i",{className:"fas fa-check"})})}):Object(k.jsx)("td",{className:"is-vcentered"}),c.completed?Object(k.jsx)("td",{className:"is-vcentered is-expanded",children:Object(k.jsx)("p",{className:"has-text-success",children:c.title})}):Object(k.jsx)("td",{className:"is-vcentered is-expanded",children:Object(k.jsx)("p",{className:"has-text-danger",children:c.title})}),Object(k.jsx)("td",{className:"has-text-right is-vcentered",children:Object(k.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e(r(c))},children:Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)("i",{className:(null===t||void 0===t?void 0:t.id)!==c.id?"far fa-eye":"far fa-eye-slash"})})})})]},c.id)}))})]})},I=function(){var e=Object(g.useState)(null),t=Object(E.a)(e,2),c=t[0],s=t[1],a=N((function(e){return e.currentTodo})),o=Object(n.b)();return Object(g.useEffect)((function(){var e;null!==a&&void 0!==a&&a.userId&&(e=a.userId,T("/users/".concat(e))).then(s)}),[]),Object(k.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(k.jsx)("div",{className:"modal-background"}),c?Object(k.jsxs)("div",{className:"modal-card",children:[Object(k.jsxs)("header",{className:"modal-card-head",children:[Object(k.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===a||void 0===a?void 0:a.id)}),Object(k.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return o(j())}})]}),Object(k.jsxs)("div",{className:"modal-card-body",children:[Object(k.jsx)("p",{className:"block","data-cy":"modal-title",children:null===a||void 0===a?void 0:a.title}),Object(k.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==a&&void 0!==a&&a.completed?Object(k.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(k.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(k.jsx)("a",{href:null===c||void 0===c?void 0:c.email,children:null===c||void 0===c?void 0:c.name})]})]})]}):Object(k.jsx)(w,{})]})},S=function(){var e=N((function(e){return e.loading})),t=Object(n.b)(),c=N((function(e){return e.currentTodo}));return Object(g.useEffect)((function(){t(u()),T("/todos").then((function(e){return t(O(e))})).finally((function(){return t(b())}))}),[]),Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"section",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"box",children:[Object(k.jsx)("h1",{className:"title",children:"Todos:"}),Object(k.jsx)("div",{className:"block",children:Object(k.jsx)(L,{})}),Object(k.jsx)("div",{className:"block",children:e?Object(k.jsx)(w,{}):Object(k.jsx)(A,{})})]})})}),c&&Object(k.jsx)(I,{})]})})},D=function(){return Object(k.jsx)(n.a,{store:y,children:Object(k.jsx)(o.a,{children:Object(k.jsx)(S,{})})})};a.a.render(Object(k.jsx)(D,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.13c94d80.chunk.js.map