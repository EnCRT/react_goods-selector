(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c.n(s),r=c(7),o=c(5),a=c(6),l=c(9),d=c(8),i=c(1),u=c.n(i),j=c(3),b=c.n(j),h=(c(14),c(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:["Jam"]},e.selectorChange=function(t,c){e.setState((function(e){var s=e.selectedGoods;return c?{selectedGoods:s.filter((function(e){return e!==t}))}:{selectedGoods:[].concat(Object(r.a)(s),[t])}}))},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods,c=t.length,s=c?"".concat(t.join(", ")," is selected"):"No goods selected";return Object(h.jsxs)("div",{className:"products",children:[Object(h.jsxs)("div",{className:"products__header",children:[Object(h.jsx)("h1",{className:"products__title",children:s}),Object(h.jsx)("button",{type:"button",className:b()("reset_btn",{reset_btn__hidden:!c}),onClick:function(){return e.setState({selectedGoods:[]})},children:"x Clear All x"})]}),Object(h.jsx)("ul",{className:"products__list",children:p.map((function(c){var s=t.includes(c);return Object(h.jsxs)("div",{className:b()("products__field",{"products__field--selected":s}),children:[Object(h.jsx)("li",{className:"products__item",children:c}),Object(h.jsx)("button",{type:"button",className:"btn",onClick:function(){return e.selectorChange(c,s)},children:s?"Remove":"Select"})]},"product")}))})]})}}]),c}(u.a.Component),_=m;n.a.render(Object(h.jsx)(_,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.50dc4b9d.chunk.js.map