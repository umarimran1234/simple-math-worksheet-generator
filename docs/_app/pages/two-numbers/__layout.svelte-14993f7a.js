import{D as Xe,S as K,i as Z,s as ee,e as P,c as W,a as A,d as g,b as j,g as O,l as te,n as Oe,o as b,p as Ie,q as h,k as M,m as C,G as R,Y as Ye,Z as Qe,w as k,x as w,y as N,B as x,_ as Pe,$ as We,O as Ae,P as y,Q as H,U as G,N as ne,a1 as re,K as le,a4 as ze,a5 as Ke,M as Ze,R as me,T as et,V as tt,t as ae,h as oe,j as je,F as nt,W as rt,H as st,I as at,J as ot,X as it}from"../../chunks/vendor-a148a4b3.js";/* empty css                       */import{A as be,p as lt}from"../../chunks/page-config-stores-309009eb.js";/* empty css                                                                  */import{S as ut}from"../../chunks/simple-math-question-utils-535be940.js";import{t as de,a as ie,b as ye,c as ft,d as ct}from"../../chunks/page-config-flex-controls.svelte_svelte_type_style_lang-b7d28902.js";import{P as _t,a as mt,b as $t,c as pt,d as gt}from"../../chunks/print-button-41b41f53.js";function dt(){const{subscribe:a,set:e}=Xe(be.DEFAULT_TWO_NUMBERS_QUESTION_GENERATOR_CONFIG);return{subscribe:a,set:r=>e(r),reset:()=>e(be.DEFAULT_TWO_NUMBERS_QUESTION_GENERATOR_CONFIG)}}const J=dt();function He(a,e,r){const t=a.slice();return t[9]=e[r],t}function Ge(a){let e;return{c(){e=P("legend"),this.h()},l(r){e=W(r,"LEGEND",{class:!0});var t=A(e);t.forEach(g),this.h()},h(){j(e,"class","bx--label")},m(r,t){O(r,e,t),e.innerHTML=a[1]},p(r,t){t&2&&(e.innerHTML=r[1])},d(r){r&&g(e)}}}function ht(a){let e,r;function t(...n){return a[8](a[9],...n)}return e=new Qe({props:{type:a[4],$$slots:{default:[vt]},$$scope:{ctx:a}}}),e.$on("click",t),{c(){k(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,s){N(e,n,s),r=!0},p(n,s){a=n;const i={};s&16&&(i.type=a[4]),s&4100&&(i.$$scope={dirty:s,ctx:a}),e.$set(i)},i(n){r||(h(e.$$.fragment,n),r=!0)},o(n){b(e.$$.fragment,n),r=!1},d(n){x(e,n)}}}function bt(a){let e,r;function t(...n){return a[7](a[9],...n)}return e=new Qe({props:{type:a[3],$$slots:{default:[kt]},$$scope:{ctx:a}}}),e.$on("click",t),{c(){k(e.$$.fragment)},l(n){w(e.$$.fragment,n)},m(n,s){N(e,n,s),r=!0},p(n,s){a=n;const i={};s&8&&(i.type=a[3]),s&4100&&(i.$$scope={dirty:s,ctx:a}),e.$set(i)},i(n){r||(h(e.$$.fragment,n),r=!0)},o(n){b(e.$$.fragment,n),r=!1},d(n){x(e,n)}}}function vt(a){let e,r=a[9]+"",t;return{c(){e=new Pe,t=te(),this.h()},l(n){e=We(n),t=te(),this.h()},h(){e.a=t},m(n,s){e.m(r,n,s),O(n,t,s)},p(n,s){s&4&&r!==(r=n[9]+"")&&e.p(r)},d(n){n&&g(t),n&&e.d()}}}function kt(a){let e,r=a[9]+"",t;return{c(){e=new Pe,t=te(),this.h()},l(n){e=We(n),t=te(),this.h()},h(){e.a=t},m(n,s){e.m(r,n,s),O(n,t,s)},p(n,s){s&4&&r!==(r=n[9]+"")&&e.p(r)},d(n){n&&g(t),n&&e.d()}}}function Ve(a){let e,r,t,n,s;const i=[bt,ht],f=[];function u($,l){return l&5&&(e=null),e==null&&(e=!!$[0].includes($[9])),e?0:1}return r=u(a,-1),t=f[r]=i[r](a),{c(){t.c(),n=te()},l($){t.l($),n=te()},m($,l){f[r].m($,l),O($,n,l),s=!0},p($,l){let m=r;r=u($,l),r===m?f[r].p($,l):(Oe(),b(f[m],1,1,()=>{f[m]=null}),Ie(),t=f[r],t?t.p($,l):(t=f[r]=i[r]($),t.c()),h(t,1),t.m(n.parentNode,n))},i($){s||(h(t),s=!0)},o($){b(t),s=!1},d($){f[r].d($),$&&g(n)}}}function wt(a){let e,r,t,n,s,i=a[1]&&Ge(a),f=a[2],u=[];for(let l=0;l<f.length;l+=1)u[l]=Ve(He(a,f,l));const $=l=>b(u[l],1,1,()=>{u[l]=null});return{c(){e=P("div"),r=P("fieldset"),i&&i.c(),t=M(),n=P("div");for(let l=0;l<u.length;l+=1)u[l].c();this.h()},l(l){e=W(l,"DIV",{class:!0});var m=A(e);r=W(m,"FIELDSET",{class:!0});var _=A(r);i&&i.l(_),t=C(_),n=W(_,"DIV",{class:!0});var p=A(n);for(let S=0;S<u.length;S+=1)u[S].l(p);p.forEach(g),_.forEach(g),m.forEach(g),this.h()},h(){j(n,"class","tag-group svelte-1am55qj"),j(r,"class","bx--radio-button-group bx--radio-button-group--label-right"),j(e,"class","bx--form-item svelte-1am55qj")},m(l,m){O(l,e,m),R(e,r),i&&i.m(r,null),R(r,t),R(r,n);for(let _=0;_<u.length;_+=1)u[_].m(n,null);s=!0},p(l,[m]){if(l[1]?i?i.p(l,m):(i=Ge(l),i.c(),i.m(r,t)):i&&(i.d(1),i=null),m&125){f=l[2];let _;for(_=0;_<f.length;_+=1){const p=He(l,f,_);u[_]?(u[_].p(p,m),h(u[_],1)):(u[_]=Ve(p),u[_].c(),h(u[_],1),u[_].m(n,null))}for(Oe(),_=f.length;_<u.length;_+=1)$(_);Ie()}},i(l){if(!s){for(let m=0;m<f.length;m+=1)h(u[m]);s=!0}},o(l){u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)b(u[m]);s=!1},d(l){l&&g(e),i&&i.d(),Ye(u,l)}}}function Nt(a,e,r){let{labelText:t=void 0}=e,{selected:n=[]}=e,{options:s=[]}=e,{selectedColor:i="blue"}=e,{unselectedColor:f="gray"}=e;function u(_,p){n&&r(0,n=n.filter(S=>S!==p))}function $(_,p){n?n.includes(p)||r(0,n=[...n,p]):r(0,n=[p])}const l=(_,p)=>{p.preventDefault(),u(p,_)},m=(_,p)=>{p.preventDefault(),$(p,_)};return a.$$set=_=>{"labelText"in _&&r(1,t=_.labelText),"selected"in _&&r(0,n=_.selected),"options"in _&&r(2,s=_.options),"selectedColor"in _&&r(3,i=_.selectedColor),"unselectedColor"in _&&r(4,f=_.unselectedColor)},[n,t,s,i,f,u,$,l,m]}class xt extends K{constructor(e){super();Z(this,e,Nt,wt,ee,{labelText:1,selected:0,options:2,selectedColor:3,unselectedColor:4})}}function Tt(a){let e,r,t;function n(i){a[1](i)}let s={label:"Questions per page",placeholder:"",min:1};return a[0]!==void 0&&(s.value=a[0]),e=new Ae({props:s}),y.push(()=>H(e,"value",n)),{c(){k(e.$$.fragment)},l(i){w(e.$$.fragment,i)},m(i,f){N(e,i,f),t=!0},p(i,[f]){const u={};!r&&f&1&&(r=!0,u.value=i[0],G(()=>r=!1)),e.$set(u)},i(i){t||(h(e.$$.fragment,i),t=!0)},o(i){b(e.$$.fragment,i),t=!1},d(i){x(e,i)}}}function qt(a,e,r){let t;ne(a,de,s=>r(0,t=s));function n(s){t=s,de.set(t)}return[t,n]}class Rt extends K{constructor(e){super();Z(this,e,qt,Tt,ee,{})}}function St(a){let e,r,t,n,s,i,f,u,$,l,m,_,p,S,v,T,c,U,B;function E(d){a[1](d)}let z={labelText:"Number Box Width",placeholder:""};a[0].numberBoxWidth!==void 0&&(z.value=a[0].numberBoxWidth),r=new re({props:z}),y.push(()=>H(r,"value",E));function I(d){a[2](d)}let X={labelText:"Number Box Height",placeholder:""};a[0].numberBoxHeight!==void 0&&(X.value=a[0].numberBoxHeight),s=new re({props:X}),y.push(()=>H(s,"value",I));function Y(d){a[3](d)}let Q={labelText:"Question Font size",placeholder:""};a[0].fontSize!==void 0&&(Q.value=a[0].fontSize),u=new re({props:Q}),y.push(()=>H(u,"value",Y));function F(d){a[4](d)}let L={labelText:"Question Number box margin",placeholder:""};a[0].numberBoxMargin!==void 0&&(L.value=a[0].numberBoxMargin),m=new re({props:L}),y.push(()=>H(m,"value",F));function V(d){a[5](d)}let se={labelText:"Question Operation box margin",placeholder:""};a[0].operatorBoxMargin!==void 0&&(se.value=a[0].operatorBoxMargin),S=new re({props:se}),y.push(()=>H(S,"value",V));function he(d){a[6](d)}let ue={labelText:"Question container margin",placeholder:""};return a[0].questionContainerMargin!==void 0&&(ue.value=a[0].questionContainerMargin),c=new re({props:ue}),y.push(()=>H(c,"value",he)),{c(){e=P("div"),k(r.$$.fragment),n=M(),k(s.$$.fragment),f=M(),k(u.$$.fragment),l=M(),k(m.$$.fragment),p=M(),k(S.$$.fragment),T=M(),k(c.$$.fragment),this.h()},l(d){e=W(d,"DIV",{class:!0});var D=A(e);w(r.$$.fragment,D),n=C(D),w(s.$$.fragment,D),f=C(D),w(u.$$.fragment,D),l=C(D),w(m.$$.fragment,D),p=C(D),w(S.$$.fragment,D),T=C(D),w(c.$$.fragment,D),D.forEach(g),this.h()},h(){j(e,"class","two-numbers-question-style-config-controls-content svelte-ri1cz8")},m(d,D){O(d,e,D),N(r,e,null),R(e,n),N(s,e,null),R(e,f),N(u,e,null),R(e,l),N(m,e,null),R(e,p),N(S,e,null),R(e,T),N(c,e,null),B=!0},p(d,[D]){const $e={};!t&&D&1&&(t=!0,$e.value=d[0].numberBoxWidth,G(()=>t=!1)),r.$set($e);const fe={};!i&&D&1&&(i=!0,fe.value=d[0].numberBoxHeight,G(()=>i=!1)),s.$set(fe);const pe={};!$&&D&1&&($=!0,pe.value=d[0].fontSize,G(()=>$=!1)),u.$set(pe);const ce={};!_&&D&1&&(_=!0,ce.value=d[0].numberBoxMargin,G(()=>_=!1)),m.$set(ce);const ge={};!v&&D&1&&(v=!0,ge.value=d[0].operatorBoxMargin,G(()=>v=!1)),S.$set(ge);const _e={};!U&&D&1&&(U=!0,_e.value=d[0].questionContainerMargin,G(()=>U=!1)),c.$set(_e)},i(d){B||(h(r.$$.fragment,d),h(s.$$.fragment,d),h(u.$$.fragment,d),h(m.$$.fragment,d),h(S.$$.fragment,d),h(c.$$.fragment,d),B=!0)},o(d){b(r.$$.fragment,d),b(s.$$.fragment,d),b(u.$$.fragment,d),b(m.$$.fragment,d),b(S.$$.fragment,d),b(c.$$.fragment,d),B=!1},d(d){d&&g(e),x(r),x(s),x(u),x(m),x(S),x(c)}}}function Et(a,e,r){let t;ne(a,ie,l=>r(0,t=l));function n(l){a.$$.not_equal(t.numberBoxWidth,l)&&(t.numberBoxWidth=l,ie.set(t))}function s(l){a.$$.not_equal(t.numberBoxHeight,l)&&(t.numberBoxHeight=l,ie.set(t))}function i(l){a.$$.not_equal(t.fontSize,l)&&(t.fontSize=l,ie.set(t))}function f(l){a.$$.not_equal(t.numberBoxMargin,l)&&(t.numberBoxMargin=l,ie.set(t))}function u(l){a.$$.not_equal(t.operatorBoxMargin,l)&&(t.operatorBoxMargin=l,ie.set(t))}function $(l){a.$$.not_equal(t.questionContainerMargin,l)&&(t.questionContainerMargin=l,ie.set(t))}return[t,n,s,i,f,u,$]}class Bt extends K{constructor(e){super();Z(this,e,Et,St,ee,{})}}function Mt(a){let e,r,t,n,s,i,f,u,$,l,m,_,p,S;return t=new _t({}),s=new Rt({}),f=new mt({}),$=new $t({}),m=new pt({}),p=new Bt({}),{c(){e=P("div"),r=P("div"),k(t.$$.fragment),n=M(),k(s.$$.fragment),i=M(),k(f.$$.fragment),u=M(),k($.$$.fragment),l=M(),k(m.$$.fragment),_=M(),k(p.$$.fragment),this.h()},l(v){e=W(v,"DIV",{class:!0});var T=A(e);r=W(T,"DIV",{class:!0});var c=A(r);w(t.$$.fragment,c),n=C(c),w(s.$$.fragment,c),i=C(c),w(f.$$.fragment,c),u=C(c),w($.$$.fragment,c),c.forEach(g),l=C(T),w(m.$$.fragment,T),_=C(T),w(p.$$.fragment,T),T.forEach(g),this.h()},h(){j(r,"class","pagesize-and-questionsperpage-controls-content svelte-c6tv3r"),j(e,"class","page-config-control-panel svelte-c6tv3r")},m(v,T){O(v,e,T),R(e,r),N(t,r,null),R(r,n),N(s,r,null),R(r,i),N(f,r,null),R(r,u),N($,r,null),R(e,l),N(m,e,null),R(e,_),N(p,e,null),S=!0},p:le,i(v){S||(h(t.$$.fragment,v),h(s.$$.fragment,v),h(f.$$.fragment,v),h($.$$.fragment,v),h(m.$$.fragment,v),h(p.$$.fragment,v),S=!0)},o(v){b(t.$$.fragment,v),b(s.$$.fragment,v),b(f.$$.fragment,v),b($.$$.fragment,v),b(m.$$.fragment,v),b(p.$$.fragment,v),S=!1},d(v){v&&g(e),x(t),x(s),x(f),x($),x(m),x(p)}}}class Ct extends K{constructor(e){super();Z(this,e,null,Mt,ee,{})}}function Dt(a){let e,r,t;return{c(){e=P("textarea"),this.h()},l(n){e=W(n,"TEXTAREA",{class:!0}),A(e).forEach(g),this.h()},h(){j(e,"class","worksheetJsonTextArea svelte-cy1s24")},m(n,s){O(n,e,s),ze(e,a[0]),r||(t=Ke(e,"input",a[1]),r=!0)},p(n,[s]){s&1&&ze(e,n[0])},i:le,o:le,d(n){n&&g(e),r=!1,t()}}}function Ot(a,e,r){let t;ne(a,ye,s=>r(0,t=s));function n(){t=this.value,ye.set(t)}return[t,n]}class It extends K{constructor(e){super();Z(this,e,Ot,Dt,ee,{})}}function Qt(a){let e;return{c(){e=ae("Generate Worksheet")},l(r){e=oe(r,"Generate Worksheet")},m(r,t){O(r,e,t)},d(r){r&&g(e)}}}function Pt(a){let e,r,t,n;return e=new tt({props:{type:"submit",$$slots:{default:[Qt]},$$scope:{ctx:a}}}),t=new gt({}),{c(){k(e.$$.fragment),r=M(),k(t.$$.fragment)},l(s){w(e.$$.fragment,s),r=C(s),w(t.$$.fragment,s)},m(s,i){N(e,s,i),O(s,r,i),N(t,s,i),n=!0},p(s,i){const f={};i&16384&&(f.$$scope={dirty:i,ctx:s}),e.$set(f)},i(s){n||(h(e.$$.fragment,s),h(t.$$.fragment,s),n=!0)},o(s){b(e.$$.fragment,s),b(t.$$.fragment,s),n=!1},d(s){x(e,s),s&&g(r),x(t,s)}}}function Wt(a){let e,r,t,n,s,i,f,u,$,l,m,_,p,S,v,T,c,U,B,E,z,I,X,Y,Q,F,L,V,se;function he(o){a[2](o)}let ue={labelText:"1st number range",placeholder:""};a[0].firstNumRange!==void 0&&(ue.value=a[0].firstNumRange),e=new re({props:ue}),y.push(()=>H(e,"value",he));function d(o){a[3](o)}let D={labelText:"Reverse"};a[0].firstNumReverse!==void 0&&(D.checked=a[0].firstNumReverse),n=new me({props:D}),y.push(()=>H(n,"checked",d));function $e(o){a[4](o)}let fe={labelText:"2nd number range",placeholder:""};a[0].secondNumRange!==void 0&&(fe.value=a[0].secondNumRange),f=new re({props:fe}),y.push(()=>H(f,"value",$e));function pe(o){a[5](o)}let ce={labelText:"Reverse"};a[0].secondNumReverse!==void 0&&(ce.checked=a[0].secondNumReverse),l=new me({props:ce}),y.push(()=>H(l,"checked",pe));function ge(o){a[6](o)}let _e={label:"Result max value",placeholder:"",allowEmpty:!0};a[0].resultMax!==void 0&&(_e.value=a[0].resultMax),p=new Ae({props:_e}),y.push(()=>H(p,"value",ge));function Ue(o){a[7](o)}let ve={labelText:"Allow negative"};a[0].allowNegative!==void 0&&(ve.checked=a[0].allowNegative),T=new me({props:ve}),y.push(()=>H(T,"checked",Ue));function Fe(o){a[8](o)}let ke={labelText:"Allow remainder"};a[0].allowRemainder!==void 0&&(ke.checked=a[0].allowRemainder),B=new me({props:ke}),y.push(()=>H(B,"checked",Fe));function Le(o){a[9](o)}let we={labelText:"Random order"};a[0].randomOrder!==void 0&&(we.checked=a[0].randomOrder),I=new me({props:we}),y.push(()=>H(I,"checked",Le));function Je(o){a[10](o)}let Ne={labelText:"Operator",options:be.OPERATOR_OPTIONS};return a[0].questionOperator!==void 0&&(Ne.selected=a[0].questionOperator),Q=new xt({props:Ne}),y.push(()=>H(Q,"selected",Je)),V=new et({props:{stacked:!0,$$slots:{default:[Pt]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment),t=M(),k(n.$$.fragment),i=M(),k(f.$$.fragment),$=M(),k(l.$$.fragment),_=M(),k(p.$$.fragment),v=M(),k(T.$$.fragment),U=M(),k(B.$$.fragment),z=M(),k(I.$$.fragment),Y=M(),k(Q.$$.fragment),L=M(),k(V.$$.fragment)},l(o){w(e.$$.fragment,o),t=C(o),w(n.$$.fragment,o),i=C(o),w(f.$$.fragment,o),$=C(o),w(l.$$.fragment,o),_=C(o),w(p.$$.fragment,o),v=C(o),w(T.$$.fragment,o),U=C(o),w(B.$$.fragment,o),z=C(o),w(I.$$.fragment,o),Y=C(o),w(Q.$$.fragment,o),L=C(o),w(V.$$.fragment,o)},m(o,q){N(e,o,q),O(o,t,q),N(n,o,q),O(o,i,q),N(f,o,q),O(o,$,q),N(l,o,q),O(o,_,q),N(p,o,q),O(o,v,q),N(T,o,q),O(o,U,q),N(B,o,q),O(o,z,q),N(I,o,q),O(o,Y,q),N(Q,o,q),O(o,L,q),N(V,o,q),se=!0},p(o,q){const xe={};!r&&q&1&&(r=!0,xe.value=o[0].firstNumRange,G(()=>r=!1)),e.$set(xe);const Te={};!s&&q&1&&(s=!0,Te.checked=o[0].firstNumReverse,G(()=>s=!1)),n.$set(Te);const qe={};!u&&q&1&&(u=!0,qe.value=o[0].secondNumRange,G(()=>u=!1)),f.$set(qe);const Re={};!m&&q&1&&(m=!0,Re.checked=o[0].secondNumReverse,G(()=>m=!1)),l.$set(Re);const Se={};!S&&q&1&&(S=!0,Se.value=o[0].resultMax,G(()=>S=!1)),p.$set(Se);const Ee={};!c&&q&1&&(c=!0,Ee.checked=o[0].allowNegative,G(()=>c=!1)),T.$set(Ee);const Be={};!E&&q&1&&(E=!0,Be.checked=o[0].allowRemainder,G(()=>E=!1)),B.$set(Be);const Me={};!X&&q&1&&(X=!0,Me.checked=o[0].randomOrder,G(()=>X=!1)),I.$set(Me);const Ce={};!F&&q&1&&(F=!0,Ce.selected=o[0].questionOperator,G(()=>F=!1)),Q.$set(Ce);const De={};q&16384&&(De.$$scope={dirty:q,ctx:o}),V.$set(De)},i(o){se||(h(e.$$.fragment,o),h(n.$$.fragment,o),h(f.$$.fragment,o),h(l.$$.fragment,o),h(p.$$.fragment,o),h(T.$$.fragment,o),h(B.$$.fragment,o),h(I.$$.fragment,o),h(Q.$$.fragment,o),h(V.$$.fragment,o),se=!0)},o(o){b(e.$$.fragment,o),b(n.$$.fragment,o),b(f.$$.fragment,o),b(l.$$.fragment,o),b(p.$$.fragment,o),b(T.$$.fragment,o),b(B.$$.fragment,o),b(I.$$.fragment,o),b(Q.$$.fragment,o),b(V.$$.fragment,o),se=!1},d(o){x(e,o),o&&g(t),x(n,o),o&&g(i),x(f,o),o&&g($),x(l,o),o&&g(_),x(p,o),o&&g(v),x(T,o),o&&g(U),x(B,o),o&&g(z),x(I,o),o&&g(Y),x(Q,o),o&&g(L),x(V,o)}}}function At(a){let e,r;return e=new Ze({props:{$$slots:{default:[Wt]},$$scope:{ctx:a}}}),e.$on("submit",a[11]),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){N(e,t,n),r=!0},p(t,[n]){const s={};n&16385&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){x(e,t)}}}function zt(a,e,r){let t,n,s;ne(a,lt,c=>r(12,t=c)),ne(a,de,c=>r(13,n=c)),ne(a,J,c=>r(0,s=c));function i(){ft.update(c=>ut.generateTwoNumbersQuestions(s,n,t))}function f(c){a.$$.not_equal(s.firstNumRange,c)&&(s.firstNumRange=c,J.set(s))}function u(c){a.$$.not_equal(s.firstNumReverse,c)&&(s.firstNumReverse=c,J.set(s))}function $(c){a.$$.not_equal(s.secondNumRange,c)&&(s.secondNumRange=c,J.set(s))}function l(c){a.$$.not_equal(s.secondNumReverse,c)&&(s.secondNumReverse=c,J.set(s))}function m(c){a.$$.not_equal(s.resultMax,c)&&(s.resultMax=c,J.set(s))}function _(c){a.$$.not_equal(s.allowNegative,c)&&(s.allowNegative=c,J.set(s))}function p(c){a.$$.not_equal(s.allowRemainder,c)&&(s.allowRemainder=c,J.set(s))}function S(c){a.$$.not_equal(s.randomOrder,c)&&(s.randomOrder=c,J.set(s))}function v(c){a.$$.not_equal(s.questionOperator,c)&&(s.questionOperator=c,J.set(s))}return[s,i,f,u,$,l,m,_,p,S,v,c=>{c.preventDefault(),i()}]}class jt extends K{constructor(e){super();Z(this,e,zt,At,ee,{})}}function yt(a){let e,r;return{c(){e=P("h5"),r=ae("No questions are generated.")},l(t){e=W(t,"H5",{});var n=A(e);r=oe(n,"No questions are generated."),n.forEach(g)},m(t,n){O(t,e,n),R(e,r)},p:le,d(t){t&&g(e)}}}function Ht(a){let e,r,t,n,s,i;return{c(){e=P("h5"),r=ae("Total "),t=ae(a[0]),n=ae(" questions ("),s=ae(a[1]),i=ae(" pages) are generated.")},l(f){e=W(f,"H5",{});var u=A(e);r=oe(u,"Total "),t=oe(u,a[0]),n=oe(u," questions ("),s=oe(u,a[1]),i=oe(u," pages) are generated."),u.forEach(g)},m(f,u){O(f,e,u),R(e,r),R(e,t),R(e,n),R(e,s),R(e,i)},p(f,u){u&1&&je(t,f[0]),u&2&&je(s,f[1])},d(f){f&&g(e)}}}function Gt(a){let e;function r(s,i){return s[0]>0?Ht:yt}let t=r(a),n=t(a);return{c(){n.c(),e=te()},l(s){n.l(s),e=te()},m(s,i){n.m(s,i),O(s,e,i)},p(s,[i]){t===(t=r(s))&&n?n.p(s,i):(n.d(1),n=t(s),n&&(n.c(),n.m(e.parentNode,e)))},i:le,o:le,d(s){n.d(s),s&&g(e)}}}function Vt(a,e,r){let t,n;ne(a,de,i=>r(2,t=i)),ne(a,ct,i=>r(0,n=i));let s=0;return a.$$.update=()=>{a.$$.dirty&5&&r(1,s=Math.ceil(n/t))},[n,s,t]}class Ut extends K{constructor(e){super();Z(this,e,Vt,Gt,ee,{})}}function Ft(a){let e,r;return e=new It({}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){N(e,t,n),r=!0},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){x(e,t)}}}function Lt(a){let e,r;return e=new it({props:{title:"Worksheet in Json",$$slots:{default:[Ft]},$$scope:{ctx:a}}}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,n){N(e,t,n),r=!0},p(t,n){const s={};n&2&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){x(e,t)}}}function Jt(a){let e,r,t,n,s,i,f,u,$,l,m,_,p,S,v,T,c;n=new jt({}),$=new Ct({}),m=new Ut({});const U=a[0].default,B=nt(U,a,a[1],null);return T=new rt({props:{$$slots:{default:[Lt]},$$scope:{ctx:a}}}),{c(){e=P("body"),r=P("div"),t=P("aside"),k(n.$$.fragment),s=M(),i=P("main"),f=P("div"),u=P("div"),k($.$$.fragment),l=M(),k(m.$$.fragment),_=M(),p=P("div"),B&&B.c(),S=M(),v=P("div"),k(T.$$.fragment),this.h()},l(E){e=W(E,"BODY",{class:!0});var z=A(e);r=W(z,"DIV",{class:!0});var I=A(r);t=W(I,"ASIDE",{class:!0});var X=A(t);w(n.$$.fragment,X),X.forEach(g),s=C(I),i=W(I,"MAIN",{class:!0});var Y=A(i);f=W(Y,"DIV",{class:!0});var Q=A(f);u=W(Q,"DIV",{class:!0});var F=A(u);w($.$$.fragment,F),l=C(F),w(m.$$.fragment,F),F.forEach(g),_=C(Q),p=W(Q,"DIV",{class:!0});var L=A(p);B&&B.l(L),L.forEach(g),S=C(Q),v=W(Q,"DIV",{class:!0});var V=A(v);w(T.$$.fragment,V),V.forEach(g),Q.forEach(g),Y.forEach(g),I.forEach(g),z.forEach(g),this.h()},h(){j(t,"class","sideNav svelte-5xe234"),j(u,"class","main-content-page-layout svelte-5xe234"),j(p,"class","main-content-printable-area"),j(v,"class","main-content-worksheet-in-json svelte-5xe234"),j(f,"class","main-content-wrapper svelte-5xe234"),j(i,"class","main-content svelte-5xe234"),j(r,"class","wrapper svelte-5xe234"),j(e,"class","svelte-5xe234")},m(E,z){O(E,e,z),R(e,r),R(r,t),N(n,t,null),R(r,s),R(r,i),R(i,f),R(f,u),N($,u,null),R(u,l),N(m,u,null),R(f,_),R(f,p),B&&B.m(p,null),R(f,S),R(f,v),N(T,v,null),c=!0},p(E,[z]){B&&B.p&&(!c||z&2)&&st(B,U,E,E[1],c?ot(U,E[1],z,null):at(E[1]),null);const I={};z&2&&(I.$$scope={dirty:z,ctx:E}),T.$set(I)},i(E){c||(h(n.$$.fragment,E),h($.$$.fragment,E),h(m.$$.fragment,E),h(B,E),h(T.$$.fragment,E),c=!0)},o(E){b(n.$$.fragment,E),b($.$$.fragment,E),b(m.$$.fragment,E),b(B,E),b(T.$$.fragment,E),c=!1},d(E){E&&g(e),x(n),x($),x(m),B&&B.d(E),x(T)}}}function Xt(a,e,r){let{$$slots:t={},$$scope:n}=e;return a.$$set=s=>{"$$scope"in s&&r(1,n=s.$$scope)},[t,n]}class sn extends K{constructor(e){super();Z(this,e,Xt,Jt,ee,{})}}export{sn as default};