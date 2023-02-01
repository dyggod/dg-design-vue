import{f as i,g as c,r as d,o as D,c as F,b as a,a as t,d as u,e as C}from"./app.dfc2d51f.js";const A=i({__name:"basic",setup(y){const l=c(!0);return(o,p)=>{const n=d("dg-switch");return D(),F("div",null,[a(n,{modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=s=>l.value=s)},null,8,["modelValue"]),a(n,{modelValue:l.value,"onUpdate:modelValue":p[1]||(p[1]=s=>l.value=s),disabled:""},null,8,["modelValue"]),a(n,{value:!0,disabled:""}),a(n,{value:!0}),a(n,{value:!1})])}}}),h=i({__name:"disabled",setup(y){const l=c(!0),o=c(!1);return(p,n)=>{const s=d("dg-switch");return D(),F("div",null,[a(s,{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=e=>l.value=e),disabled:""},null,8,["modelValue"]),a(s,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=e=>o.value=e),disabled:""},null,8,["modelValue"])])}}}),_=i({__name:"color",setup(y){const l=c(!0),o=c(!1),p=c(!1);return(n,s)=>{const e=d("dg-switch");return D(),F("div",null,[a(e,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=r=>l.value=r),"active-color":"red"},null,8,["modelValue"]),a(e,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=r=>o.value=r),"inactive-color":"#000"},null,8,["modelValue"]),a(e,{modelValue:p.value,"onUpdate:modelValue":s[2]||(s[2]=r=>p.value=r),"active-color":"#ff0","inactive-color":"#eae"},null,8,["modelValue"])])}}}),m=i({__name:"light",setup(y){const l=c(!1);return(o,p)=>{const n=d("dg-switch");return D(),F("div",null,[a(n,{modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=s=>l.value=s),"dg-fun":"light"},null,8,["modelValue"])])}}}),g=t("h1",{id:"switch-开关",tabindex:"-1"},[u("Switch 开关 "),t("a",{class:"header-anchor",href:"#switch-开关","aria-hidden":"true"},"#")],-1),v=t("h2",{id:"基础用法",tabindex:"-1"},[u("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),f={class:"example"},w=C("",2),E={class:"example"},V=C("",2),b={class:"example"},q=C("",5),T={class:"example"},S=C("",6),P=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"禁用状态","slug":"禁用状态","link":"#禁用状态","children":[]},{"level":2,"title":"自定义开关开启和关闭时的颜色","slug":"自定义开关开启和关闭时的颜色","link":"#自定义开关开启和关闭时的颜色","children":[]},{"level":2,"title":"dgFun 趣味开关","slug":"dgfun-趣味开关","link":"#dgfun-趣味开关","children":[{"level":3,"title":"星灯","slug":"星灯","link":"#星灯","children":[]}]},{"level":2,"title":"Switch API","slug":"switch-api","link":"#switch-api","children":[{"level":3,"title":"Switch 属性","slug":"switch-属性","link":"#switch-属性","children":[]},{"level":3,"title":"Switch 事件","slug":"switch-事件","link":"#switch-事件","children":[]}]}],"relativePath":"zh/components/switch.md","lastUpdated":1675213012000}'),k={name:"zh/components/switch.md"},I=Object.assign(k,{setup(y){return(l,o)=>(D(),F("div",null,[g,v,t("div",f,[a(A)]),w,t("div",E,[a(h)]),V,t("div",b,[a(_)]),q,t("div",T,[a(m)]),S]))}});export{P as __pageData,I as default};