import{u}from"./asyncData.02447c21.js";import{a as c,ae as l,b as d,J as f,G as v,af as _,A as g,al as y,B as e,x as h}from"./entry.e8ca8a46.js";/* empty css                       *//* empty css                                   *//* empty css                     *//* empty css                      *//* empty css                   *//* empty css                           *//* empty css                            *//* empty css                  *//* empty css                         *//* empty css                         *//* empty css                    *//* empty css                           *//* empty css                   *//* empty css                            *//* empty css                      *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                     *//* empty css                    *//* empty css                    *//* empty css                        *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                  *//* empty css                    *//* empty css                      *//* empty css                       *//* empty css                      *//* empty css                 *//* empty css                    *//* empty css                     *//* empty css                        *//* empty css                           *//* empty css                      *//* empty css                 *//* empty css                     *//* empty css                       *//* empty css                                *//* empty css                                     *//* empty css                                    *//* empty css                               *//* empty css                    */const qt=c({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(m){const{query:t}=l(m),r=d(()=>{var o;return typeof((o=t.value)==null?void 0:o.params)=="function"?t.value.params():t.value});if(!r.value&&f("dd-navigation").value){const{navigation:o}=v();return{navigation:o}}const{data:p}=await u(`content-navigation-${_(r.value)}`,()=>y(r.value));return{navigation:p}},render(m){const t=g(),{navigation:r}=m,p=i=>e(h,{to:i._path},()=>i.title),o=(i,n)=>e("ul",n?{"data-level":n}:null,i.map(a=>a.children?e("li",null,[p(a),o(a.children,n+1)]):e("li",null,p(a)))),s=i=>o(i,0);return t!=null&&t.default?t.default({navigation:r,...this.$attrs}):s(r)}});export{qt as default};
