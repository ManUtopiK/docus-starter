import{d as m,aA as _,y as x,I as a,b as z,c as f,az as I,J as o,l as S}from"./CDkloqZ5.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;_(s=>({"49bdd776":o(d)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const n=l,p=a(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),d=a(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),c=a(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(z(),f("span",{style:I({width:o(c),height:o(c)})},null,4))}}),b=S(y,[["__scopeId","data-v-5a016daa"]]);export{b as default};
