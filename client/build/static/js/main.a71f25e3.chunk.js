(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(4),s=n.n(a),c=(n(16),n(1)),i=n.n(c),l=n(2),u=n(5),p=n(6),f=n(9),h=n(7),d=n(10),m=n(8),v=n.n(m),g=(n(20),function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={response:"",post:"",responseToPost:""},n.callApi=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/hello");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}},e,this)})),n.handleSubmit=function(){var e=Object(l.a)(i.a.mark(function e(t){var o,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/world",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post:n.state.post})});case 3:return o=e.sent,e.next=6,o.text();case 6:r=e.sent,n.setState({responseToPost:r});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.callApi().then(function(t){return e.setState({response:t.express})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),r.a.createElement("p",null,this.state.response),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("p",null,r.a.createElement("strong",null,"Post to Server:")),r.a.createElement("input",{type:"text",value:this.state.post,onChange:function(t){return e.setState({post:t.target.value})}}),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement("p",null,this.state.responseToPost))}}]),t}(o.Component)),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):b(e)})}}()},8:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[11,2,1]]]);
//# sourceMappingURL=main.a71f25e3.chunk.js.map