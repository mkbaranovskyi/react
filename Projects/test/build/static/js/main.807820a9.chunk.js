(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{9:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(0),c=r(3),s=r(4),i=r(8),a=r(7),h=r(1),l=r.n(h),j=r(5),u=r.n(j),b=function(t){Object(i.a)(r,t);var e=Object(a.a)(r);function r(t){var n;return Object(c.a)(this,r),(n=e.call(this,t)).state={error:null,errorInfo:null},n}return Object(s.a)(r,[{key:"componentDidCatch",value:function(t,e){console.log("componentDidCatch"),this.setState({error:t,errorInfo:e})}},{key:"render",value:function(){return console.log("render"),console.log(this.state),this.state.error?Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Something went wrong."}),Object(o.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),Object(o.jsx)("br",{}),this.state.errorInfo.componentStack]})]}):this.props.children}}]),r}(l.a.Component);function d(){var t=Object(h.useState)(0),e=Object(n.a)(t,2),r=e[0],c=e[1];if(3===r)throw new Error("I crashed!");return Object(o.jsx)("h1",{onClick:function(){c(r+1)},children:r})}function p(){return Object(o.jsx)(b,{children:Object(o.jsx)(d,{})})}u.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.807820a9.chunk.js.map