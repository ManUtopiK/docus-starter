import{a as s,A as y,ac as g,I as v,B as o,ad as p}from"./entry.e8ca8a46.js";import w from"./ContentRenderer.fc82b0b1.js";import C from"./ContentQuery.0ee4f8bb.js";import"./ContentRendererMarkdown.f28117b2.js";import"./asyncData.02447c21.js";const x=s({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=y(),{tag:d,excerpt:a,path:m,query:r,head:i}=f,c={...r||{},path:m||(r==null?void 0:r.path)||g(v().path),find:"one"},l=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(C,c,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:h})=>{var u;return i&&p(t),(u=e.default)==null?void 0:u.call(e,{doc:t,refresh:n,isPartial:h,excerpt:a,...this.$attrs})}:({data:t})=>(i&&p(t),o(w,{value:t,excerpt:a,tag:d,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):l("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{x as default};