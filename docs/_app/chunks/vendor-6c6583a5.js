function h(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function H(t){return t()}function L(){return Object.create(null)}function m(t){t.forEach(H)}function K(t){return typeof t=="function"}function Q(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function W(t){return Object.keys(t).length===0}function at(t,n,e,i){if(t){const r=v(t,n,e,i);return t[0](r)}}function v(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],l=Math.max(n.dirty.length,r.length);for(let s=0;s<l;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function dt(t,n,e,i,r,u){if(r){const l=v(n,e,i,u);t.p(l,r)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){return t==null?"":t}let b=!1;function U(){b=!0}function V(){b=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:X(1,r,x=>n[e[x]].claim_order,o))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const u=[],l=[];let s=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);s>=c;s--)l.push(n[s]);s--}for(;s>=0;s--)l.push(n[s]);u.reverse(),l.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<l.length;c++){for(;o<u.length&&l[c].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(l[c],a)}}function Z(t,n){if(b){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){b&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function B(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function yt(){return A(" ")}function gt(){return A("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function et(t){return Array.from(t.childNodes)}function q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){q(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(n(s)){const c=e(s);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(n(s)){const c=e(s);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function it(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const u=[];for(let l=0;l<r.attributes.length;l++){const s=r.attributes[l];e[s.name]||u.push(s.name)}u.forEach(l=>r.removeAttribute(l))},()=>i(n))}function wt(t,n,e){return it(t,n,e,B)}function rt(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function Et(t){return rt(t," ")}function D(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Tt(t){const n=D(t,"HTML_TAG_START",0),e=D(t,"HTML_TAG_END",n);if(n===e)return new O;q(t);const i=t.splice(n,e-n+1);$(i[0]),$(i[i.length-1]);const r=i.slice(1,i.length-1);for(const u of r)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new O(r)}function At(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Nt(t,n){t.value=n==null?"":n}function kt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}class ct{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=B(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach($)}}class O extends ct{constructor(n){super();this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}let p;function y(t){p=t}function N(){if(!p)throw new Error("Function called outside component initialization");return p}function St(t){N().$$.on_mount.push(t)}function jt(t){N().$$.after_update.push(t)}function Mt(t,n){N().$$.context.set(t,n)}const g=[],P=[],w=[],G=[],F=Promise.resolve();let k=!1;function I(){k||(k=!0,F.then(R))}function Ct(){return I(),F}function S(t){w.push(t)}const j=new Set;let E=0;function R(){const t=p;do{for(;E<g.length;){const n=g[E];E++,y(n),lt(n.$$)}for(y(null),g.length=0,E=0;P.length;)P.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];j.has(e)||(j.add(e),e())}w.length=0}while(g.length);for(;G.length;)G.pop()();k=!1,j.clear(),y(t)}function lt(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const T=new Set;let _;function Ht(){_={r:0,c:[],p:_}}function Lt(){_.r||m(_.c),_=_.p}function st(t,n){t&&t.i&&(T.delete(t),t.i(n))}function vt(t,n,e,i){if(t&&t.o){if(T.has(t))return;T.add(t),_.c.push(()=>{T.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Bt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const l=t[u],s=n[u];if(s){for(const c in l)c in s||(i[c]=1);for(const c in s)r[c]||(e[c]=s[c],r[c]=1);t[u]=s}else for(const c in l)r[c]=1}for(const l in i)l in e||(e[l]=void 0);return e}function qt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:l,after_update:s}=t.$$;r&&r.m(n,e),i||S(()=>{const c=u.map(H).filter(K);l?l.push(...c):m(c),t.$$.on_mount=[]}),s.forEach(S)}function ut(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){t.$$.dirty[0]===-1&&(g.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ot(t,n,e,i,r,u,l,s=[-1]){const c=p;y(t);const o=t.$$={fragment:null,ctx:null,props:u,update:h,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:L(),dirty:s,skip_bound:!1,root:n.target||c.$$.root};l&&l(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,x,...M)=>{const C=M.length?M[0]:x;return o.ctx&&r(o.ctx[f],o.ctx[f]=C)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](C),a&&ft(t,f)),x}):[],o.update(),a=!0,m(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){U();const f=et(n.target);o.fragment&&o.fragment.l(f),f.forEach($)}else o.fragment&&o.fragment.c();n.intro&&st(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),V(),R()}y(c)}class Pt{$destroy(){ut(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const d=[];function Gt(t,n=h){let e;const i=new Set;function r(s){if(Q(t,s)&&(t=s,e)){const c=!d.length;for(const o of i)o[1](),d.push(o,t);if(c){for(let o=0;o<d.length;o+=2)d[o][0](d[o+1]);d.length=0}}}function u(s){r(s(t))}function l(s,c=h){const o=[s,c];return i.add(o),i.size===1&&(e=n(r)||h),s(t),()=>{i.delete(o),i.size===0&&(e(),e=null)}}return{set:r,update:u,subscribe:l}}export{qt as A,ut as B,J as C,Gt as D,Ct as E,at as F,dt as G,ht as H,_t as I,Z as J,h as K,mt as L,xt as M,O as N,Tt as O,Nt as P,bt as Q,pt as R,Pt as S,m as T,et as a,$t as b,wt as c,$ as d,B as e,kt as f,nt as g,rt as h,Ot as i,At as j,yt as k,gt as l,Et as m,Ht as n,vt as o,Lt as p,st as q,Mt as r,Q as s,A as t,jt as u,St as v,zt as w,Dt as x,ot as y,Bt as z};
