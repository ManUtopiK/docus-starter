import h from"./DocumentDrivenEmpty.mKpSJaWM.js";import L from"./ContentRenderer.AqUjs6_Z.js";import b from"./DocumentDrivenNotFound.qKep68o0.js";import{j as g,d as p,E as k,P as R,q as x,G as C,H as S,I as u,J as c,r as j,K as B,L as N,M as m,T,N as A,O as E,S as O,Q as w,R as D,l as H,U as q,V as $,b as f,c as I,g as y,w as _,W as v}from"./entry.2zcFej85.js";import"./ContentRendererMarkdown.vue.1urKiz3X.js";import"./preview.mM1xkxLR.js";import"./ButtonLink.NGgIQvYb.js";import"./slot.GPYsdLc9.js";import"./node.V6KjywBy.js";const M=p({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,n){const t=await c[e.name]().then(o=>o.default||o);return()=>m(t,e.layoutProps,n.slots)}}),V=p({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(e,n){const t=g(),o=k(R),s=o===x()?C():o,r=S(()=>{let a=u(e.name)??s.meta.layout??"default";return a&&!(a in c)&&e.fallback&&(a=u(e.fallback)),a}),l=j();n.expose({layoutRef:l});const d=t.deferHydration();return()=>{const a=r.value&&r.value in c,i=s.meta.layoutTransition??B;return N(T,a&&i,{default:()=>m(O,{suspensible:!0,onResolve:()=>{E(d)}},{default:()=>m(F,{layoutProps:A(n.attrs,{ref:l}),key:r.value||void 0,name:r.value,shouldProvide:!e.name,hasTransition:!!i},n.slots)})}).default()}}}),F=p({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,n){const t=e.name;return e.shouldProvide&&w(D,{isCurrent:o=>t===(o.meta.layout??"default")}),()=>{var o,s;return!t||typeof t=="string"&&!(t in c)?(s=(o=n.slots).default)==null?void 0:s.call(o):m(M,{key:t,layoutProps:e.layoutProps,name:t},n.slots)}}}),G={class:"document-driven-page"},tt=p({__name:"document-driven",setup(e){const{contentHead:n}=H().public.content,{page:t,layout:o}=q();return t.value,n&&$(t),(s,r)=>{const l=h,d=L,a=b,i=V;return f(),I("div",G,[y(i,{name:u(o)||"default"},{default:_(()=>[u(t)?(f(),v(d,{key:u(t)._id,value:u(t)},{empty:_(({value:P})=>[y(l,{value:P},null,8,["value"])]),_:1},8,["value"])):(f(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{tt as default};
