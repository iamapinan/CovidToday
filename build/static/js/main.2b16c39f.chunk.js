(this.webpackJsonpcovidtoday=this.webpackJsonpcovidtoday||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/logo.91183710.png"},18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),s=(a(23),a(12)),i=a(13),l=a(17),d=a(16),p=a(14),m=a.n(p),u=(a(24),a(15)),h=a.n(u),v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this)).state={today:{}},n}return Object(i.a)(a,[{key:"getcovid",value:function(){var e=this;h.a.get("https://covid19.th-stat.com/api/open/today").then((function(e){return e.data})).then((function(t){e.setState({today:t})}))}},{key:"componentDidMount",value:function(){this.getcovid()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Covid 19 New case today is ",o.a.createElement("span",{className:"text-danger"},this.state.today.NewConfirmed)," people.",o.a.createElement("br",null),"Total case ",o.a.createElement("span",{className:"text-warning"},this.state.today.Confirmed)," and recovered ",o.a.createElement("span",{className:"text-success"},this.state.today.Recovered)),o.a.createElement("br",null),"New Deaths ",this.state.today.NewDeaths),o.a.createElement("p",null,"Last updated ",this.state.today.UpdateDate," ",o.a.createElement("br",null)," Data source from\xa0",o.a.createElement("a",{className:"App-link",href:"https://covid19.th-stat.com/",target:"_blank",rel:"noopener noreferrer"},"https://covid19.th-stat.com/")," ",o.a.createElement("br",null),"This project is opensource \xa0",o.a.createElement("a",{href:"https://gitlab.com/apinan/covidetoday",rel:"noopener noreferrer",target:"_blank",class:"App-link"},"https://gitlab.com/apinan/covidetoday")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2b16c39f.chunk.js.map