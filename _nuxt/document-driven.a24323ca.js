import L from"./DocumentDrivenEmpty.fb3760d0.js";import h from"./ContentRenderer.5435ace1.js";import x from"./DocumentDrivenNotFound.946b66fb.js";import{a5 as F,a as m,at as C,I as k,au as R,b as w,u as o,av as d,aw as B,ax as i,T as N,B as g,G as D,ad as E,o as c,f as T,q as p,w as l,c as _}from"./entry.7e5e5716.js";import"./ContentRendererMarkdown.f5bb8268.js";import"./ButtonLink.ae9b40c7.js";import"./ContentSlot.49983a03.js";/* empty css                       *//* empty css                                   */const j=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const n=await d[s.name]().then(e=>e.default||e);return()=>g(n,t.attrs,t.slots)}}),q=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const n=C("_route"),e=n===k()?R():n,a=w(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=a.value&&a.value in d,r=e.meta.layoutTransition??B;return i(N,u&&r,{default:()=>i(j,u&&{key:a.value,name:a.value,...t.attrs},t.slots).default()}).default()}}}),A={class:"document-driven-page"},z=m({__name:"document-driven",setup(s){const{page:t,layout:n}=D();return t.value,E(t),(e,a)=>{const u=L,r=h,f=x,v=q;return c(),T("div",A,[p(v,{name:o(n)||"default"},{default:l(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:l(({value:y})=>[p(u,{value:y},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{z as default};