(this.webpackJsonpflashcards_react_hooks=this.webpackJsonpflashcards_react_hooks||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},22:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=a(16),u=a(2);function i(e){var t=e.flashcard,a=Object(n.useState)(!1),c=Object(u.a)(a,2),o=c[0],s=c[1],i=Object(n.useState)("initial"),l=Object(u.a)(i,2),m=l[0],f=l[1],d=Object(n.useRef)(),p=Object(n.useRef)();function h(){var e=d.current.getBoundingClientRect().height,t=p.current.getBoundingClientRect().height;f(Math.max(e,t,100))}return Object(n.useEffect)(h,[t.question,t.answer,t.options]),Object(n.useEffect)((function(){return window.addEventListener("resize",h),function(){return window.removeEventListener("resize",h)}}),[]),r.a.createElement("div",{className:"card ".concat(o?"flip":""),style:{height:m},onClick:function(){return s(!o)}},r.a.createElement("div",{className:"front",ref:d},t.question,r.a.createElement("div",{className:"flashcard-options"},t.options.map((function(e){return r.a.createElement("div",{className:"flashcard-option",key:e},e)})))),r.a.createElement("div",{className:"back",ref:p},t.answer))}function l(e){var t=e.flashcards;return r.a.createElement("div",{className:"card-grid"},t.map((function(e){return r.a.createElement(i,{flashcard:e,key:e.id})})))}a(22);var m=a(5),f=a.n(m);var d=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),i=Object(u.a)(o,2),m=i[0],d=i[1],p=Object(n.useRef)(),h=Object(n.useRef)();function E(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}return Object(n.useEffect)((function(){f.a.get("https://opentdb.com/api_category.php").then((function(e){d(e.data.trivia_categories)}))}),[]),Object(n.useEffect)((function(){}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"header",onSubmit:function(e){e.preventDefault(),f.a.get("https://opentdb.com/api.php",{params:{amount:h.current.value,category:p.current.value}}).then((function(e){c(e.data.results.map((function(e,t){var a=E(e.correct_answer),n=[].concat(Object(s.a)(e.incorrect_answers.map((function(e){return E(e)}))),[a]);return{id:"".concat(t,"-").concat(Date.now()),question:E(e.question),answer:a,options:n.sort((function(){return Math.random()-.5}))}})))}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("select",{id:"category",ref:p},m.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"amount"},"Number of Questions"),r.a.createElement("input",{type:"number",id:"amount",min:"1",step:"1",defaultValue:10,ref:h})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn"},"Generate"))),r.a.createElement("div",{className:"container"},r.a.createElement(l,{flashcards:a})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.51ad2b44.chunk.js.map