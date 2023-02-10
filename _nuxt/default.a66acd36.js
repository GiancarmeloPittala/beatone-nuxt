import U from"./Icon.136a0263.js";import{L as Y,I as q,J as O,i as w,j as M,e as D,D as F,K as oe,E as $,o as P,l as T,A as f,m as A,u as x,N as X,a as Q,O as W,P as J,Q as re,R as le,H as ue,c as H,y as S,x as h,S as R,t as k,T as ie,F as ce,z as de,U as G,s as Z,B as pe,V as ve}from"./entry.402bf8ad.js";import{m as me,n as fe,o as _,S as ee,F as te,u as he,H as E,t as z,b as xe,N as j,a as b,D as _e,d as V,v as ae,I as ge}from"./focus-management.542d6618.js";function be(e){throw new Error("Unexpected object: "+e)}var I=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(I||{});function ye(e,n){let o=n.resolveItems();if(o.length<=0)return null;let s=n.resolveActiveIndex(),t=s??-1,l=(()=>{switch(e.focus){case 0:return o.findIndex(r=>!n.resolveDisabled(r));case 1:{let r=o.slice().reverse().findIndex((i,d,c)=>t!==-1&&c.length-d-1>=t?!1:!n.resolveDisabled(i));return r===-1?r:o.length-1-r}case 2:return o.findIndex((r,i)=>i<=t?!1:!n.resolveDisabled(r));case 3:{let r=o.slice().reverse().findIndex(i=>!n.resolveDisabled(i));return r===-1?r:o.length-1-r}case 4:return o.findIndex(r=>n.resolveId(r)===e.id);case 5:return null;default:be(e)}})();return l===-1?s:l}let ne=Symbol("Context");var L=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(L||{});function we(){return Y(ne,null)}function Ie(e){q(ne,e)}function Se({container:e,accept:n,walk:o,enabled:s}){O(()=>{let t=e.value;if(!t||s!==void 0&&!s.value)return;let l=me(e);if(!l)return;let r=Object.assign(d=>n(d),{acceptNode:n}),i=l.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,r,!1);for(;i.nextNode();)o(i.currentNode)})}function N(e,n,o){fe.isServer||O(s=>{document.addEventListener(e,n,o),s(()=>document.removeEventListener(e,n,o))})}function Me(e,n,o=M(()=>!0)){function s(l,r){if(!o.value||l.defaultPrevented)return;let i=r(l);if(i===null||!i.getRootNode().contains(i))return;let d=function c(a){return typeof a=="function"?c(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e);for(let c of d){if(c===null)continue;let a=c instanceof HTMLElement?c:_(c);if(a!=null&&a.contains(i)||l.composed&&l.composedPath().includes(a))return}return!ee(i,te.Loose)&&i.tabIndex!==-1&&l.preventDefault(),n(l,i)}let t=w(null);N("mousedown",l=>{var r,i;o.value&&(t.value=((i=(r=l.composedPath)==null?void 0:r.call(l))==null?void 0:i[0])||l.target)},!0),N("click",l=>{!t.value||(s(l,()=>t.value),t.value=null)},!0),N("blur",l=>s(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function K(e){return[e.screenX,e.screenY]}function ke(){let e=w([-1,-1]);return{wasMoved(n){let o=K(n);return e.value[0]===o[0]&&e.value[1]===o[1]?!1:(e.value=o,!0)},update(n){e.value=K(n)}}}var Pe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Pe||{}),Re=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Re||{});function $e(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let se=Symbol("MenuContext");function B(e){let n=Y(se,null);if(n===null){let o=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,B),o}return n}let Te=D({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:o}){let s=w(1),t=w(null),l=w(null),r=w([]),i=w(""),d=w(null),c=w(1);function a(p=v=>v){let v=d.value!==null?r.value[d.value]:null,u=ge(p(r.value.slice()),y=>_(y.dataRef.domRef)),m=v?u.indexOf(v):null;return m===-1&&(m=null),{items:u,activeItemIndex:m}}let g={menuState:s,buttonRef:t,itemsRef:l,items:r,searchQuery:i,activeItemIndex:d,activationTrigger:c,closeMenu:()=>{s.value=1,d.value=null},openMenu:()=>s.value=0,goToItem(p,v,u){let m=a(),y=ye(p===I.Specific?{focus:I.Specific,id:v}:{focus:p},{resolveItems:()=>m.items,resolveActiveIndex:()=>m.activeItemIndex,resolveId:C=>C.id,resolveDisabled:C=>C.dataRef.disabled});i.value="",d.value=y,c.value=u??1,r.value=m.items},search(p){let v=i.value!==""?0:1;i.value+=p.toLowerCase();let u=(d.value!==null?r.value.slice(d.value+v).concat(r.value.slice(0,d.value+v)):r.value).find(y=>y.dataRef.textValue.startsWith(i.value)&&!y.dataRef.disabled),m=u?r.value.indexOf(u):-1;m===-1||m===d.value||(d.value=m,c.value=1)},clearSearch(){i.value=""},registerItem(p,v){let u=a(m=>[...m,{id:p,dataRef:v}]);r.value=u.items,d.value=u.activeItemIndex,c.value=1},unregisterItem(p){let v=a(u=>{let m=u.findIndex(y=>y.id===p);return m!==-1&&u.splice(m,1),u});r.value=v.items,d.value=v.activeItemIndex,c.value=1}};return Me([t,l],(p,v)=>{var u;g.closeMenu(),ee(v,te.Loose)||(p.preventDefault(),(u=_(t))==null||u.focus())},M(()=>s.value===0)),q(se,g),Ie(M(()=>he(s.value,{[0]:L.Open,[1]:L.Closed}))),()=>{let p={open:s.value===0,close:g.closeMenu};return E({ourProps:{},theirProps:e,slot:p,slots:n,attrs:o,name:"Menu"})}}}),Ce=D({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${z()}`}},setup(e,{attrs:n,slots:o,expose:s}){let t=B("MenuButton");s({el:t.buttonRef,$el:t.buttonRef});function l(c){switch(c.key){case b.Space:case b.Enter:case b.ArrowDown:c.preventDefault(),c.stopPropagation(),t.openMenu(),$(()=>{var a;(a=_(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(I.First)});break;case b.ArrowUp:c.preventDefault(),c.stopPropagation(),t.openMenu(),$(()=>{var a;(a=_(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(I.Last)});break}}function r(c){switch(c.key){case b.Space:c.preventDefault();break}}function i(c){e.disabled||(t.menuState.value===0?(t.closeMenu(),$(()=>{var a;return(a=_(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(c.preventDefault(),t.openMenu(),$e(()=>{var a;return(a=_(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let d=xe(M(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var c;let a={open:t.menuState.value===0},{id:g,...p}=e,v={ref:t.buttonRef,id:g,type:d.value,"aria-haspopup":"menu","aria-controls":(c=_(t.itemsRef))==null?void 0:c.id,"aria-expanded":e.disabled?void 0:t.menuState.value===0,onKeydown:l,onKeyup:r,onClick:i};return E({ourProps:v,theirProps:p,slot:a,attrs:n,slots:o,name:"MenuButton"})}}}),Ae=D({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${z()}`}},setup(e,{attrs:n,slots:o,expose:s}){let t=B("MenuItems"),l=w(null);s({el:t.itemsRef,$el:t.itemsRef}),Se({container:M(()=>_(t.itemsRef)),enabled:M(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function r(a){var g;switch(l.value&&clearTimeout(l.value),a.key){case b.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case b.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let p=t.items.value[t.activeItemIndex.value];(g=_(p.dataRef.domRef))==null||g.click()}t.closeMenu(),ae(_(t.buttonRef));break;case b.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(I.Next);case b.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(I.Previous);case b.Home:case b.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(I.First);case b.End:case b.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(I.Last);case b.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),$(()=>{var p;return(p=_(t.buttonRef))==null?void 0:p.focus({preventScroll:!0})});break;case b.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),$(()=>_e(_(t.buttonRef),a.shiftKey?V.Previous:V.Next));break;default:a.key.length===1&&(t.search(a.key),l.value=setTimeout(()=>t.clearSearch(),350));break}}function i(a){switch(a.key){case b.Space:a.preventDefault();break}}let d=we(),c=M(()=>d!==null?d.value===L.Open:t.menuState.value===0);return()=>{var a,g;let p={open:t.menuState.value===0},{id:v,...u}=e,m={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(g=_(t.buttonRef))==null?void 0:g.id,id:v,onKeydown:r,onKeyup:i,role:"menu",tabIndex:0,ref:t.itemsRef};return E({ourProps:m,theirProps:u,slot:p,attrs:n,slots:o,features:j.RenderStrategy|j.Static,visible:c.value,name:"MenuItems"})}}}),Le=D({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${z()}`}},setup(e,{slots:n,attrs:o,expose:s}){let t=B("MenuItem"),l=w(null);s({el:l,$el:l});let r=M(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===e.id:!1),i=M(()=>({disabled:e.disabled,textValue:"",domRef:l}));F(()=>{var u,m;let y=(m=(u=_(l))==null?void 0:u.textContent)==null?void 0:m.toLowerCase().trim();y!==void 0&&(i.value.textValue=y)}),F(()=>t.registerItem(e.id,i)),oe(()=>t.unregisterItem(e.id)),O(()=>{t.menuState.value===0&&(!r.value||t.activationTrigger.value!==0&&$(()=>{var u,m;return(m=(u=_(l))==null?void 0:u.scrollIntoView)==null?void 0:m.call(u,{block:"nearest"})}))});function d(u){if(e.disabled)return u.preventDefault();t.closeMenu(),ae(_(t.buttonRef))}function c(){if(e.disabled)return t.goToItem(I.Nothing);t.goToItem(I.Specific,e.id)}let a=ke();function g(u){a.update(u)}function p(u){!a.wasMoved(u)||e.disabled||r.value||t.goToItem(I.Specific,e.id,0)}function v(u){!a.wasMoved(u)||e.disabled||!r.value||t.goToItem(I.Nothing)}return()=>{let{disabled:u}=e,m={active:r.value,disabled:u,close:t.closeMenu},{id:y,...C}=e;return E({ourProps:{id:y,ref:l,role:"menuitem",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,disabled:void 0,onClick:d,onFocus:c,onPointerenter:g,onMouseenter:g,onPointermove:p,onMousemove:p,onPointerleave:v,onMouseleave:v},theirProps:{...o,...C},slot:m,attrs:o,slots:n,name:"MenuItem"})}}});const De=f("span",{class:"sr-only"},"Open main menu",-1),Ee={class:"block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"},Be={__name:"openButton",setup(e){const n=w(!1);return(o,s)=>(P(),T("button",{class:"block md:hidden text-gray-500 w-10 h-10 relative focus:outline-none bg-white",onClick:s[0]||(s[0]=t=>n.value=!x(n))},[De,f("div",Ee,[f("span",{"aria-hidden":"true",class:A(["block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",{"rotate-45":x(n)," -translate-y-1.5":!x(n)}])},null,2),f("span",{"aria-hidden":"true",class:A(["block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",{"opacity-0":x(n)}])},null,2),f("span",{"aria-hidden":"true",class:A(["block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out",{"-rotate-45":x(n)," translate-y-1.5":!x(n)}])},null,2)])]))}};function Ne(e={}){const n=e.i18n||X(Q().$i18n),o=W(),s=J();return re({router:s,route:o,i18n:n})}function Fe(e={}){const n=e.i18n||X(Q().$i18n),o=W(),s=J();return le({router:s,route:o,i18n:n})}const Oe={class:"px-1 py-1 links"},ze={__name:"langSwitcher",setup(e){const{locale:n,locales:o}=ue(),s=Fe(),t=M(()=>o.value.filter(l=>l.code!==n.value));return(l,r)=>{const i=U,d=Ce,c=G,a=Le,g=Ae,p=Te;return P(),H(p,{as:"div",class:"w-full relative inline-block text-left"},{default:S(()=>[h(d,{class:"w-full border rounded-lg border-gray-900 px-4 py-2"},{default:S(()=>[h(i,{name:"material-symbols:language",class:"h-5 w-5"}),R(" "+k(x(n))+" ",1),h(i,{class:"ml-2 -mr-1 h-5 w-5",name:"ic:baseline-keyboard-arrow-down"})]),_:1}),h(ie,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:S(()=>[h(g,{class:"absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:S(()=>[f("div",Oe,[(P(!0),T(ce,null,de(x(t),v=>(P(),H(a,{key:v.code},{default:S(({active:u})=>[h(c,{to:x(s)(v.code),class:"group flex w-full items-center rounded-md px-2 py-2 text-sm"},{default:S(()=>[h(i,{class:"mr-2 h-5 w-5","aria-hidden":"true",name:v.icon},null,8,["name"]),R(" "+k(v.name),1)]),_:2},1032,["to"])]),_:2},1024))),128))])]),_:1})]),_:1})]),_:1})}}},He=""+globalThis.__publicAssetsURL("imgs/icon/favicon-16x16.png");const je={class:"px-4 py-2 container mx-auto my-2"},Ve={class:"text-sm font-bold flex items-center justify-between border-b-2 pb-2 border-primary-100"},Ke=f("h1",null," Be At One Restaurant - Text Mex ",-1),Ue={class:"flex items-center gap-2"},Ye=f("a",{href:"tel:+39485938444"},"+39485938444",-1),qe={class:"bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"},Xe={class:"flex flex-wrap items-center justify-between"},Qe=f("img",{src:He,class:"h-6 mr-3 sm:h-10",alt:"Flowbite Logo"},null,-1),We=f("span",{class:"self-center text-xl font-semibold whitespace-nowrap dark:text-white"},"BeAtOne",-1),Je={class:"grid md:flex space-y-4 md:space-y-0 items-center text-xl p-4 md:pr-0 mt-4 border border-primary-100 rounded-lg bg-gray-50 md:border-0 md:space-x-6 md:mt-0"},Ge={class:"md:pl-4 md:border-l-2 border-gray-200 z-50"},Ze={__name:"index",setup(e){const n=Ne(),o=w(!1);return(s,t)=>{const l=U,r=G,i=Be,d=ze;return P(),T("header",je,[f("p",Ve,[Ke,f("span",Ue,[h(l,{name:"bi:telephone-forward"}),Ye])]),f("nav",qe,[f("div",Xe,[h(r,{class:"flex items-center",to:x(n)("/")},{default:S(()=>[Qe,We]),_:1},8,["to"]),h(i,{onClick:t[0]||(t[0]=c=>o.value=!x(o))}),f("div",{class:A(["hidden w-full md:block md:w-auto links mt-4",{open:x(o)}])},[f("ul",Je,[f("li",null,[h(r,{to:x(n)({path:"/",hash:s.$t("menu[0].to")})},{default:S(()=>[R(k(s.$t("menu[0].text")),1)]),_:1},8,["to"])]),f("li",null,[h(r,{to:x(n)({path:"/",hash:s.$t("menu[1].to")})},{default:S(()=>[R(k(s.$t("menu[1].text")),1)]),_:1},8,["to"])]),f("li",null,[h(r,{to:x(n)({path:"/",hash:s.$t("menu[2].to")})},{default:S(()=>[R(k(s.$t("menu[2].text")),1)]),_:1},8,["to"])]),f("li",null,[h(r,{to:x(n)({path:"/",hash:s.$t("menu[3].to")})},{default:S(()=>[R(k(s.$t("menu[3].text")),1)]),_:1},8,["to"])]),f("li",null,[h(r,{to:x(n)({path:"/",hash:s.$t("menu[4].to")})},{default:S(()=>[R(k(s.$t("menu[4].text")),1)]),_:1},8,["to"])]),f("div",Ge,[h(d)])])],2)])])])}}},et={},tt={class:"bg-white"},at={class:"max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"},nt=pe('<nav class="flex flex-wrap justify-center -mx-5 -my-2"><div class="px-5 py-2"><a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900"> About </a></div><div class="px-5 py-2"><a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900"> Blog </a></div><div class="px-5 py-2"><a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900"> Team </a></div><div class="px-5 py-2"><a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900"> Pricing </a></div><div class="px-5 py-2"><a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900"> Contact </a></div><div class="px-5 py-2"><a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900"> Terms </a></div></nav><div class="flex justify-center mt-8 space-x-6"><a href="#" class="text-gray-400 hover:text-gray-500"><span class="sr-only">Facebook</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-gray-400 hover:text-gray-500"><span class="sr-only">Instagram</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-gray-400 hover:text-gray-500"><span class="sr-only">Twitter</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a><a href="#" class="text-gray-400 hover:text-gray-500"><span class="sr-only">GitHub</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-gray-400 hover:text-gray-500"><span class="sr-only">Dribbble</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path></svg></a></div>',2),st={class:"mt-8 text-base leading-6 text-center text-gray-400"};function ot(e,n){return P(),T("footer",tt,[f("div",at,[nt,f("p",st," © "+k(new Date().getFullYear())+" BeatOne, Inc. All rights reserved. ",1)])])}const rt=Z(et,[["render",ot]]);const lt={class:"cursor"},ut={__name:"cursor",setup(e){return F(()=>{const n=document.querySelector(".cursor"),o=document.querySelectorAll(".cursor-ativator");document.addEventListener("mousemove",s=>{n.setAttribute("style","top: "+(s.clientY+10)+"px; left: "+(s.clientX+10)+"px;"),s.clientX,s.clientY}),o.forEach(s=>{s.addEventListener("mouseenter",()=>{n.classList.add("cursor-expand"),s.style.transform="translate3d(3px, -3px, 0px)"}),s.addEventListener("mouseleave",()=>{n.classList.remove("cursor-expand"),s.style.transform="translate3d(0px, 0px, 0px)"})})}),(n,o)=>(P(),T("div",lt))}},it={},ct={class:"min-h-screen"};function dt(e,n){const o=Ze,s=rt,t=ut;return P(),T("div",null,[h(o),f("main",ct,[ve(e.$slots,"default")]),h(s),h(t)])}const ft=Z(it,[["render",dt]]);export{ft as default};
