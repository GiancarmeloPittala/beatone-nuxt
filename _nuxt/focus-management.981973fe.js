import{N as j,h as P,F as T,i as $,E as F,K as D,G as I}from"./entry.a84d9241.js";function g(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,g),r}var M=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(M||{}),k=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(k||{});function ee({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var s;let l=N(r,n),u=Object.assign(o,{props:l});if(e||t&2&&l.static)return w(u);if(t&1){let h=(s=l.unmount)==null||s?0:1;return g(h,{[0](){return null},[1](){return w({...o,props:{...l,hidden:!0,style:{display:"none"}}})}})}return w(u)}function w({props:e,attrs:t,slots:n,slot:r,name:o}){var s,l;let{as:u,...h}=L(e,["unmount","static"]),f=(s=n.default)==null?void 0:s.call(n,r),m={};if(r){let d=!1,p=[];for(let[a,i]of Object.entries(r))typeof i=="boolean"&&(d=!0),i===!0&&p.push(a);d&&(m["data-headlessui-state"]=p.join(" "))}if(u==="template"){if(f=O(f??[]),Object.keys(h).length>0||Object.keys(t).length>0){let[d,...p]=f??[];if(!U(d)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(h).concat(Object.keys(t)).map(c=>c.trim()).filter((c,b,x)=>x.indexOf(c)===b).sort((c,b)=>c.localeCompare(b)).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));let a=N((l=d.props)!=null?l:{},h),i=j(d,a);for(let c in a)c.startsWith("on")&&(i.props||(i.props={}),i.props[c]=a[c]);return i}return Array.isArray(f)&&f.length===1?f[0]:f}return P(u,Object.assign({},h,m),{default:()=>f})}function O(e){return e.flatMap(t=>t.type===T?O(t.children):[t])}function N(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...s){let l=n[r];for(let u of l){if(o instanceof Event&&o.defaultPrevented)return;u(o,...s)}}});return t}function L(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function U(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let H=0;function R(){return++H}function te(){return R()}var _=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(_||{});function v(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}function E(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function ne(e,t){let n=$(E(e.value.type,e.value.as));return F(()=>{n.value=E(e.value.type,e.value.as)}),D(()=>{var r;n.value||!v(t)||v(t)instanceof HTMLButtonElement&&!((r=v(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}class C{constructor(){this.current=this.detect(),this.currentId=0}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let G=new C;function A(e){if(G.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=v(e);if(t)return t.ownerDocument}return document}let y=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var W=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(W||{}),B=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(B||{}),X=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(X||{});function S(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(y)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var q=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(q||{});function K(e,t=0){var n;return e===((n=A(e))==null?void 0:n.body)?!1:g(t,{[0](){return e.matches(y)},[1](){let r=e;for(;r!==null;){if(r.matches(y))return!0;r=r.parentElement}return!1}})}function re(e){let t=A(e);I(()=>{t&&!K(t.activeElement,0)&&V(e)})}function V(e){e==null||e.focus({preventScroll:!0})}let Y=["textarea","input"].join(",");function z(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Y))!=null?n:!1}function J(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),s=t(r);if(o===null||s===null)return 0;let l=o.compareDocumentPosition(s);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function oe(e,t){return Q(S(),t,{relativeTo:e})}function Q(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var s;let l=(s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?s:document,u=Array.isArray(e)?n?J(e):e:S(e);o.length>0&&u.length>1&&(u=u.filter(i=>!o.includes(i))),r=r??l.activeElement;let h=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(r))-1;if(t&4)return Math.max(0,u.indexOf(r))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=t&32?{preventScroll:!0}:{},d=0,p=u.length,a;do{if(d>=p||d+p<=0)return 0;let i=f+d;if(t&16)i=(i+p)%p;else{if(i<0)return 3;if(i>=p)return 1}a=u[i],a==null||a.focus(m),d+=h}while(a!==l.activeElement);return t&6&&z(a)&&a.select(),a.hasAttribute("tabindex")||a.setAttribute("tabindex","0"),2}export{oe as D,q as F,ee as H,J as I,M as N,Q as O,K as S,L as T,_ as a,ne as b,B as c,W as d,A as m,G as n,v as o,te as t,g as u,re as v};
