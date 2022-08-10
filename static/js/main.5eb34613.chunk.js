(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(3),o=c(14),l=c(6),i=c(12),d=c(13),r=function(e){return{type:"todo/selected",payload:e}},j=function(){return{type:"todo/remove"}},u=function(){return{type:"loading/start"}},b=function(){return{type:"loading/finish"}},h=c(5),f={todos:[],filteredTodo:[]},O=function(e){return{type:"todos/set",payload:e}},m=function(e){return{type:"todos/filter/all",payload:e}},x=function(e){return{type:"todos/filter/completed",payload:e}},p=function(e){return{type:"todos/filter/active",payload:e}},v=Object(l.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todos/set":return{todos:t.payload,filteredTodo:t.payload};case"todos/filter/all":return Object(h.a)(Object(h.a)({},e),{},{filteredTodo:e.todos.filter((function(e){return e.title.includes(t.payload.toLowerCase())}))});case"todos/filter/completed":return Object(h.a)(Object(h.a)({},e),{},{filteredTodo:e.todos.filter((function(e){return e.completed&&e.title.includes(t.payload.toLowerCase())}))});case"todos/filter/active":return Object(h.a)(Object(h.a)({},e),{},{filteredTodo:e.todos.filter((function(e){return!e.completed&&e.title.includes(t.payload.toLowerCase())}))});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"loading/start":return!0;case"loading/finish":return!1;default:return e}},currentTodo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todo/selected":return t.payload;case"todo/remove":return null;default:return e}}}),y=Object(l.createStore)(v,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(d.a))),N=n.c,g=(c(22),c(23),c(0));function k(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(24),c(25);var T=c(1),w=function(){return Object(T.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(T.jsx)("div",{className:"Loader__content"})})},C=c(4),S=function(){var e=Object(n.b)(),t=Object(g.useState)(""),c=Object(C.a)(t,2),s=c[0],a=c[1],o=Object(g.useState)(""),l=Object(C.a)(o,2),i=l[0],d=l[1];return Object(g.useEffect)((function(){switch(s){case"completed":e(x(i));break;case"active":e(p(i));break;default:e(m(i))}}),[i,s]),Object(T.jsxs)("form",{className:"field has-addons",children:[Object(T.jsx)("p",{className:"control",children:Object(T.jsx)("span",{className:"select",children:Object(T.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(T.jsx)("option",{value:"all",children:"All"}),Object(T.jsx)("option",{value:"active",children:"Active"}),Object(T.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(T.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(T.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:i,onChange:function(e){return d(e.target.value)}}),Object(T.jsx)("span",{className:"icon is-left",children:Object(T.jsx)("i",{className:"fas fa-magnifying-glass"})}),i&&Object(T.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(T.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){d("")}})})]})]})},E=function(){var e=Object(n.b)(),t=N((function(e){return e.currentTodo})),c=N((function(e){return e.items.filteredTodo}));return Object(T.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"#"}),Object(T.jsx)("th",{children:Object(T.jsx)("span",{className:"icon",children:Object(T.jsx)("i",{className:"fas fa-check"})})}),Object(T.jsx)("th",{children:"Title"}),Object(T.jsx)("th",{children:" "})]})}),Object(T.jsx)("tbody",{children:c.map((function(c){return Object(T.jsxs)("tr",{"data-cy":"todo",className:(null===t||void 0===t?void 0:t.id)!==c.id?"":"has-background-info-light",children:[Object(T.jsx)("td",{className:"is-vcentered",children:c.id}),c.completed?Object(T.jsx)("td",{className:"is-vcentered",children:Object(T.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(T.jsx)("i",{className:"fas fa-check"})})}):Object(T.jsx)("td",{className:"is-vcentered"}),c.completed?Object(T.jsx)("td",{className:"is-vcentered is-expanded",children:Object(T.jsx)("p",{className:"has-text-success",children:c.title})}):Object(T.jsx)("td",{className:"is-vcentered is-expanded",children:Object(T.jsx)("p",{className:"has-text-danger",children:c.title})}),Object(T.jsx)("td",{className:"has-text-right is-vcentered",children:Object(T.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e(r(c))},children:Object(T.jsx)("span",{className:"icon",children:Object(T.jsx)("i",{className:(null===t||void 0===t?void 0:t.id)!==c.id?"far fa-eye":"far fa-eye-slash"})})})})]},c.id)}))})]})},L=function(){var e=Object(g.useState)(null),t=Object(C.a)(e,2),c=t[0],s=t[1],a=N((function(e){return e.currentTodo})),o=Object(n.b)();return Object(g.useEffect)((function(){var e;null!==a&&void 0!==a&&a.userId&&(e=+a.userId,k("/users/".concat(e))).then(s)}),[]),Object(T.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(T.jsx)("div",{className:"modal-background"}),c?Object(T.jsxs)("div",{className:"modal-card",children:[Object(T.jsxs)("header",{className:"modal-card-head",children:[Object(T.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===a||void 0===a?void 0:a.id)}),Object(T.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return o(j())}})]}),Object(T.jsxs)("div",{className:"modal-card-body",children:[Object(T.jsx)("p",{className:"block","data-cy":"modal-title",children:null===a||void 0===a?void 0:a.title}),Object(T.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==a&&void 0!==a&&a.completed?Object(T.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(T.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(T.jsx)("a",{href:null===c||void 0===c?void 0:c.email,children:null===c||void 0===c?void 0:c.name})]})]})]}):Object(T.jsx)(w,{})]})},_=function(){var e=N((function(e){return e.loading})),t=Object(n.b)(),c=N((function(e){return e.currentTodo}));return Object(g.useEffect)((function(){t(u()),k("/todos").then((function(e){return t(O(e))})).finally((function(){return t(b())}))}),[]),Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("h1",{children:"Redux list of todos"}),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"section",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("div",{className:"box",children:[Object(T.jsx)("h1",{className:"title",children:"Todos:"}),Object(T.jsx)("div",{className:"block",children:Object(T.jsx)(S,{})}),Object(T.jsx)("div",{className:"block",children:e?Object(T.jsx)(w,{}):Object(T.jsx)(E,{})})]})})}),c&&Object(T.jsx)(L,{})]})]})},I=function(){return Object(T.jsx)(n.a,{store:y,children:Object(T.jsx)(o.a,{children:Object(T.jsx)(_,{})})})};a.a.render(Object(T.jsx)(I,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5eb34613.chunk.js.map