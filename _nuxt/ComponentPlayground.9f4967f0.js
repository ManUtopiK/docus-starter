import{K as _,at as S,J as a,d as u,Z as b,b as $,c as I,n as w,p as P,j as C,e as x,l as f,a2 as E,r as j,O as c}from"./entry.70c472ce.js";import D from"./ComponentPlaygroundData.5b99522c.js";import"./TabsHeader.c23ca92d.js";import"./ComponentPlaygroundProps.ee588b46.js";import"./ProseH4.804a20cc.js";import"./ProseCodeInline.01025d4f.js";import"./Badge.22a0fb5f.js";import"./slot.dfce34e3.js";import"./node.676c5e99.js";import"./ProseP.4fef7e35.js";import"./index.62351865.js";import"./ComponentPlaygroundSlots.vue.e44129cf.js";import"./ComponentPlaygroundTokens.vue.d2d680f9.js";async function z(e){const o=_(e);{const{data:n}=await S(`nuxt-component-meta${o?`-${o}`:""}`,()=>$fetch(`/api/component-meta${o?`/${o}`:""}`));return a(()=>n.value)}}const B=e=>(P("data-v-0c59f1a4"),e=e(),C(),e),N=B(()=>x("div",{class:"ellipsis-item"},null,-1)),O=[N],V=u({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const o=a(()=>((t=s)=>t.top)()),n=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),i=a(()=>((t=s)=>t.zIndex)()),l=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),y=a(()=>((t=s)=>`blur(${t.blur})`)()),h=a(()=>((t=s)=>{var p,d,m;return`linear-gradient(97.62deg, ${(p=t==null?void 0:t.colors)==null?void 0:p[0]} 2.27%, ${(d=t==null?void 0:t.colors)==null?void 0:d[1]} 50.88%, ${(m=t==null?void 0:t.colors)==null?void 0:m[2]} 98.48%)`})()),s=e,{$pinceau:v}=b(s,void 0,{_cCN_top:o,_eih_insetInlineStart:n,_IfB_insetInlineEnd:r,_SsE_zIndex:i,_wj8_maxWidth:l,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,p)=>($(),I("div",{class:w(["ellipsis",[_(v)]])},O,2))}});const k=f(V,[["__scopeId","data-v-0c59f1a4"]]),q=u({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const o=a(()=>E(e.component)),n=j({...e.props}),r=await z(e.component);return{as:o,formProps:n,componentData:r}},render(e){const o=Object.entries(this.$slots).reduce((n,[r,i])=>{if(r.startsWith("component-")){const l=r.replace("component-","");n[l]=i}return n},{});return c("div",{class:"component-playground"},[c("div",{class:"component-playground-wrapper"},[c(k,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),c(e.as,{...e.formProps,class:"component-playground-component"},{...o})]),c(D,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":n=>e.formProps=n})])}});const T=f(q,[["__scopeId","data-v-eb351221"]]);export{T as default};
