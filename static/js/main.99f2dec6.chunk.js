(this["webpackJsonptyping-trainer"]=this["webpackJsonptyping-trainer"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),r=n.n(a),i=(n(9),n(2));var o=function(){return(new Date).getTime()},u=function(e){var t=s.a.useState(),n=Object(i.a)(t,2),c=n[0],a=n[1];return s.a.useEffect((function(){var t=function(t){var n=t.key;c!==n&&1===n.length&&(a(n),e&&e(n))},n=function(){a(null)};return window.addEventListener("keydown",t),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",n)}})),c};n(10);var l=n(0);var d=function(){return Object(l.jsxs)("section",{className:"preloader",children:[Object(l.jsx)("div",{className:"preloader__text",children:"Loading, please wait..."}),Object(l.jsx)("i",{className:"circle-preloader"})]})};n(12),n(13);function j(e){var t=e.accuracy,n=e.speed,c=e.handleStartOver,a=e.handleClose;return s.a.useEffect((function(){var e=function(e){return"Escape"===e.key&&a()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[a]),Object(l.jsx)("div",{className:"popup-overlay",children:Object(l.jsxs)("div",{className:"popup",children:[Object(l.jsx)("h1",{className:"popup__header",children:"Congratulatios!"}),Object(l.jsx)("h2",{className:"popup__header",children:"Lesson completed"}),Object(l.jsx)("h3",{className:"popup__header",children:"Your results:"}),Object(l.jsxs)("p",{children:["Accuracy ",t,"%"]}),Object(l.jsxs)("p",{children:["Chars per minute ",n]}),Object(l.jsx)("button",{onClick:function(){c(),a()},className:"popup__button_start-over",children:"start over"}),Object(l.jsx)("button",{onClick:a,className:"popup__button_close",children:"X"})]})})}var h=function(){var e=s.a.useState(""),t=Object(i.a)(e,2),n=t[0],c=t[1],a=s.a.useState(null),r=Object(i.a)(a,2),h=r[0],b=r[1],p=s.a.useState(!1),f=Object(i.a)(p,2),O=f[0],m=f[1],v=s.a.useState(0),x=Object(i.a)(v,2),_=x[0],N=x[1],g=s.a.useState(null),w=Object(i.a)(g,2),y=w[0],k=w[1],S=s.a.useState(0),E=Object(i.a)(S,2),C=E[0],L=E[1],A=s.a.useState(!1),F=Object(i.a)(A,2),D=F[0],I=F[1],M=s.a.useState(!1),J=Object(i.a)(M,2),B=J[0],R=J[1],T=s.a.useState(0),X=Object(i.a)(T,2),Y=X[0],q=X[1],z=s.a.useState(!1),G=Object(i.a)(z,2),H=G[0],K=G[1];u((function(e){return y||k(o()),h===n.length-1?(K(!0),void R(!0)):e===n.charAt(h)?(m(!1),b(h+1),void L(C+1)):O?void 0:(N(_+1),void m(!0))}));var P=s.a.useCallback((function(){V(),I(!0),fetch("https://baconipsum.com/api/?type=meat-and-filler&sentences=10").then((function(e){return e.json()})).then((function(e){return e[0]})).then((function(e){c(e),b(0),I(!1)})).catch((function(e){return console.log(e)}))}),[]);s.a.useEffect((function(){P()}),[P]),function(e,t){var n=s.a.useRef();s.a.useEffect((function(){n.current=e}),[e]),s.a.useEffect((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){!H&&q(Q())}),1e3);var Q=function(){return C<2?0:(C/((o()-y)/6e4)).toFixed(0)},U=function(){return D?"100.00":(100-_/n.length*100).toFixed(2)},V=function(){b(0),m(!1),N(0),k(null),L(0)};return Object(l.jsxs)(l.Fragment,{children:[B?Object(l.jsx)(j,{accuracy:U(),speed:Y,handleStartOver:P,handleClose:function(){return R(!1)}}):"",Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("section",{className:"text",children:D?Object(l.jsx)(d,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("span",{style:{color:"green"},children:n.substring(0,h)}),O?Object(l.jsx)("span",{className:"text__cursor_mistake",children:n.charAt(h)}):Object(l.jsx)("span",{className:"text__cursor",children:n.charAt(h)}),Object(l.jsx)("span",{children:n.substring(h+1,n.length)})]})}),Object(l.jsxs)("section",{className:"info-and-controlls",children:[Object(l.jsxs)("div",{className:"statistic",children:[Object(l.jsxs)("p",{className:"statistic-item",children:["Chars per minute",Object(l.jsxs)("span",{className:"statistic-item__higlighted",children:[" ",Y]})]}),Object(l.jsxs)("p",{className:"statistic-item",children:["Accuracy",Object(l.jsxs)("span",{className:"statistic-item__higlighted",children:[" ",U(),"%"]})]})]}),Object(l.jsxs)("div",{className:"controlls",children:[Object(l.jsx)("button",{onMouseDown:V,className:"controlls__button",children:"start over"}),Object(l.jsx)("button",{onMouseDown:P,className:"controlls__button",children:"get another text"})]})]})]})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.99f2dec6.chunk.js.map