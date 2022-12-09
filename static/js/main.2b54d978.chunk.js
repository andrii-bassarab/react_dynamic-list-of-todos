(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(5)),d=c.n(i),o=c(0),r=function(e){var t=e.todos,c=e.selectedTodo,s=e.setCurrentUserId,a=e.setCurrentTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){var t=e.id,n=e.userId,l=e.title,i=e.completed;return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:t}),i?Object(o.jsx)("td",{className:"is-vcentered",children:Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}):Object(o.jsx)("td",{className:"is-vcentered"}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:d()({"has-text-danger":!i,"has-text-success":i}),children:l})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:(null===c||void 0===c?void 0:c.id)===t?Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){a(null),s(0)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-eye-slash"})})}):Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(n),a(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})},j=function(e){var t=e.getQuery,c=e.getOption,s=Object(l.useState)(""),a=Object(n.a)(s,2),i=a[0],d=a[1],r=Object(l.useState)("all"),j=Object(n.a)(r,2),b=j[0],u=j[1];return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:b,onChange:function(e){u(e.target.value),c(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:i,onChange:function(e){t(e.target.value),d(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),i&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){d(""),t("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var u=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},h=function(e){var t=e.userId,c=e.selectedTodo,s=e.closeTodoModal,a=Object(l.useState)(null),i=Object(n.a)(a,2),d=i[0],r=i[1];return Object(l.useEffect)((function(){(function(e){return b("/users/".concat(e))})(t).then(r)}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),d?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===c||void 0===c?void 0:c.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s()}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:null===c||void 0===c?void 0:c.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==c&&void 0!==c&&c.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(d.email),children:d.name})]})]})]}):Object(o.jsx)(u,{})]})},O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(0),i=Object(n.a)(a,2),d=i[0],O=i[1],m=Object(l.useState)(null),x=Object(n.a)(m,2),f=x[0],N=x[1],p=Object(l.useState)(""),v=Object(n.a)(p,2),y=v[0],g=v[1],k=Object(l.useState)("all"),C=Object(n.a)(k,2),T=C[0],w=C[1],S=c;switch(T){case"completed":S=S.filter((function(e){return!0===e.completed}));break;case"active":S=c.filter((function(e){return!1===e.completed}));break;default:S=c}S=S.filter((function(e){return e.title.toLocaleLowerCase().includes(y.toLocaleLowerCase())})),Object(l.useEffect)((function(){b("/todos").then(s)}),[]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{getQuery:function(e){return g(e)},getOption:function(e){return w(e)}})}),Object(o.jsxs)("div",{className:"block",children:[S.length>0&&c.length>0&&Object(o.jsx)(r,{todos:S,selectedTodo:f,setCurrentUserId:function(e){return O(e)},setCurrentTodo:function(e){return N(e)}}),0===S.length&&0===c.length&&Object(o.jsx)(u,{}),0===S.length&&c.length>0&&Object(o.jsx)("table",{className:"table is-narrow is-fullwidth",children:Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})})})]})]})})}),0!==d&&Object(o.jsx)(h,{userId:d,selectedTodo:f,closeTodoModal:function(){O(0),N(null)}})]})};a.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2b54d978.chunk.js.map