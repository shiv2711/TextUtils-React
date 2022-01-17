(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(8),l=c.n(n),o=(c(13),c(3)),r=(c(14),c(5)),i=c(0);function d(e){var t=Object(s.useState)({color:"#331515",backgroundColor:"#d0adad",border:"2px solid #270707"}),c=Object(o.a)(t,2),a=c[0],n=c[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"navbar",id:"navbar",children:[Object(i.jsx)("div",{className:"logo",children:Object(i.jsx)("img",{className:"img",src:"./logo1.png",alt:"LOGO"})}),Object(i.jsxs)(r.b,{to:"/",className:"appname",children:[e.title," "]}),Object(i.jsx)(r.b,{to:"/",className:"field",style:a,children:"HOME"}),Object(i.jsx)(r.b,{to:"/About",className:"field",style:a,children:e.abouttxt}),Object(i.jsx)(r.b,{to:"/Contact",className:"field",style:a,children:"CONTACT"}),Object(i.jsx)("div",{className:"tglBtn",children:Object(i.jsxs)("button",{className:"light-mode-button",id:"tlgBtn","aria-label":"Toggle Light Mode",onClick:function(){var t=document.getElementById("span");"38px"===t.style.left?(t.style.left="5px",n({color:"#331515",backgroundColor:"#d0adad",border:"2px solid #270707"})):(t.style.left="38px",n({color:"#a88787",border:"2px solid #542626",backgroundColor:"#3719199c"})),e.toggleMode()},children:[Object(i.jsx)("span",{}),Object(i.jsx)("span",{id:"span"})]})})]})})}function j(e){var t=Object(s.useState)(""),c=Object(o.a)(t,2),a=c[0],n=c[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsxs)("div",{className:"utility",children:[Object(i.jsx)("textarea",{name:"MainText",value:a,onChange:function(e){n(e.target.value)},id:"mainText",rows:"10"}),Object(i.jsxs)("div",{className:"btnDiv",children:[Object(i.jsx)("button",{disabled:0===a.length,className:"btn ".concat(e.mode),onClick:function(){var t=a.toUpperCase();n(t),e.showAlert("Text Has Been Converted To UpperCase","success")},children:"UPPERCASE"}),Object(i.jsx)("button",{disabled:0===a.length,className:"btn ".concat(e.mode),onClick:function(){var t=a.toLowerCase();n(t),e.showAlert("Text Has Been Converted To LowerCase","success")},children:"LOWERCASE"}),Object(i.jsx)("button",{disabled:0===a.length,className:"btn ".concat(e.mode),onClick:function(){n(""),e.showAlert("Text Has Been Cleared","warn")},children:"CLEAR"}),Object(i.jsx)("button",{disabled:0===a.length,className:"btn ".concat(e.mode),onClick:function(){navigator.clipboard.writeText(a),e.showAlert("Text Has Been Copied","success")},children:"COPY"}),Object(i.jsx)("button",{disabled:0===a.length,className:"btn ".concat(e.mode),onClick:function(){n(a.split(/\s+/g).join(" ")),e.showAlert("Extra Spaces Fron Text Has Been Removed","success")},children:"REMOVE EXTRA SPACES"})]})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"center HeadingBack ".concat(e.mode),children:"Your Text Summary."}),Object(i.jsxs)("p",{className:"justify ".concat(e.mode),style:{color:"#d0adad"},children:[a.trim().split(/\s+/).filter((function(e){return 0!==e.length})).length," Words and ",a.replace(/\s/g,"").length," characters."]}),Object(i.jsxs)("p",{className:"justify ".concat(e.mode),style:{color:"#d0adad"},children:[(.008*a.trim().split(/\s+/).filter((function(e){return 0!==e.length})).length).toFixed(2)," Minutes read."]}),Object(i.jsx)("h2",{className:"center HeadingBack ".concat(e.mode),children:"PREVIEW"}),Object(i.jsx)("p",{className:"justify ".concat(e.mode),style:{color:"#d0adad"},children:a.length>0?a:"Nothing To Preview !"})]})]})}function b(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"center HeadingBack ".concat(e.mode),children:"ABOUT US"}),Object(i.jsxs)("p",{className:"info justify ".concat(e.mode),children:["We provides free tools to help you with your daily tasks.",Object(i.jsx)("br",{}),"You will find tools for formatting source code, converters, tools for handling text, such as remove extra spaces, uppercase, lowercase and many other.",Object(i.jsx)("br",{}),"Check the current feature below and feel free to recommend a new feature by contacting us.",Object(i.jsx)("br",{}),"Fast, Reliable, and easy!",Object(i.jsx)("br",{}),"Text-Utils brings severals free online tools to assist developers in daily tasks.",Object(i.jsx)("br",{})]}),Object(i.jsx)("h2",{className:"center HeadingBack ".concat(e.mode),children:" OUR FEATURES"}),Object(i.jsxs)("ul",{className:"info justify ".concat(e.mode),children:[Object(i.jsx)("li",{children:"CONVERT TO UPPERCASE"}),Object(i.jsx)("li",{children:"CONVERT TO LOWERCASE"}),Object(i.jsx)("li",{children:"REMOVE EXTRASPACES"}),Object(i.jsx)("li",{children:"COPY THE TEXT"}),Object(i.jsx)("li",{children:"CLEAR THE TEXT"})]})]})})}function m(e){return Object(i.jsx)("div",{style:{height:"38px"},children:e.alert&&Object(i.jsxs)("div",{className:"alert ".concat(e.alert.type),children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg,Object(i.jsx)("button",{className:"btn",onClick:function(){e.setAlert(null)},children:Object(i.jsx)("span",{children:"X"})})]})})}function h(e){return Object(i.jsx)("div",{children:Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"center HeadingBack ".concat(e.mode),children:"CONTACT US"}),Object(i.jsxs)("form",{action:"/",children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{className:"".concat(e.mode),htmlFor:"name",children:"Name: "}),Object(i.jsx)("input",{className:"".concat(e.mode),type:"text",name:"name",id:"name",placeholder:"Enter your name"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{className:"".concat(e.mode),htmlFor:"name",children:"Locality: "}),Object(i.jsx)("input",{className:"".concat(e.mode),type:"text",name:"Locality",id:"Locality",placeholder:"Enter your Locality"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{className:"".concat(e.mode),htmlFor:"name",children:"Email: "}),Object(i.jsx)("input",{className:"".concat(e.mode),type:"text",name:"Email",id:"Email",placeholder:"Enter your Email"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{className:"".concat(e.mode),htmlFor:"name",children:"Phone Number: "}),Object(i.jsx)("input",{className:"".concat(e.mode),type:"text",name:"Phone Number",id:"Phone Number",placeholder:"Enter your Phone Number"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{className:"".concat(e.mode),htmlFor:"name",children:"Message: "}),Object(i.jsx)("textarea",{className:"".concat(e.mode),name:"message",id:"message",cols:"30",rows:"10"})]}),Object(i.jsx)("button",{className:"subBtn ".concat(e.mode),style:{margin:"auto"},children:"SUBMIT"})]})]})})})}d.defaultProps={title:"Set Title Here",abouttxt:"ABOUT US"},j.defaultProps={heading:"ENTER TEXT BELOW"};var x=c(2);function u(e){return Object(i.jsx)("div",{className:"footer ".concat(e.mode),children:"Copyright \xa9 www.TextUtils_Shiv.com. All rights reserved!"})}var O=function(){var e=Object(s.useState)("light"),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(null),l=Object(o.a)(n,2),O=l[0],g=l[1],p=function(e,t){g({msg:e,type:t}),setTimeout((function(){g(null)}),1500)};return Object(i.jsxs)(r.a,{children:[Object(i.jsx)(d,{title:"TextUtils",mode:c,toggleMode:function(){"light"===c?(a("dark"),document.body.style.backgroundColor="black",p("Dark Mode Has Been Enabled","success")):(a("light"),document.body.style.backgroundColor="white",p("Light Mode Has Been Enabled","success"))}}),Object(i.jsx)(m,{alert:O,setAlert:g}),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(x.c,{children:[Object(i.jsx)(x.a,{exact:!0,path:"/",element:Object(i.jsx)(j,{showAlert:p,mode:c,heading:"TRY TEXTUTILS - WORD COUNTER | CHARACTER COUNTER | REMOVE EXTRA SPACES ..."})}),Object(i.jsx)(x.a,{exact:!0,path:"/About",element:Object(i.jsx)(b,{mode:c})}),Object(i.jsx)(x.a,{exact:!0,path:"/Contact",element:Object(i.jsx)(h,{mode:c})})]})}),Object(i.jsx)(u,{mode:c})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),n(e),l(e)}))};l.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.f8a1194c.chunk.js.map