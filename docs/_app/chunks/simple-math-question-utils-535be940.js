import{M as n,Q as d}from"./page-config-stores-309009eb.js";const f=Number,A=r=>r.split(",").reduce((e,t)=>{if(!t.includes("-"))return e.push(f(t)),e;const[s,l]=t.split("-");for(let a=Number(s);a<=l;a++)e.push(a);return e},[]),M=r=>r.reduce((e,t)=>e+t),N=r=>r.reduce((e,t)=>e-t),T=r=>r.reduce((e,t)=>e*t),R=r=>r.reduce((e,t)=>e/t),w=new Map([[n.PLUS,M],[n.MINUS,N],[n.TIMES,T],[n.DIVIDE,R]]),S=r=>n.DIVIDE===r;class I{static generateTwoNumbersQuestions(e,t,s){return this.generateTwoNumbersQuestionsWithParam(e.firstNumRange,e.firstNumReverse,e.secondNumRange,e.secondNumReverse,e.resultMax,e.questionOperator,e.allowNegative,e.allowRemainder,e.randomOrder)}static generateTwoNumbersQuestionsWithParam(e,t,s,l,a,m,_,h,v){let i=[],g=this.parseRange(e,t),y=this.parseRange(s,l);for(const o of m)for(const u of g)for(const c of y){let p=w.get(o)([u,c]);!(!_&&p<0)&&!(a&&a<p)&&!(!h&&S(o)&&u%c>0)&&i.push(this.createTwoNumbersQuestionType(u,c,o,p))}return v&&this.shuffleArray(i),[{questions:i}]}static createTwoNumbersQuestionType(e,t,s,l){return{questionType:d.TWO_NUMBERS,num1:e,num2:t,operator:s,answer:l}}static generateWorksheets(e,t,s){return[...Array(Math.ceil(e.length/t))].map(l=>({questions:e.splice(0,t)}))}static generateNumArr(e,t){let s=[...Array(e).keys()].map(l=>l+1);return t?s.reverse():s}static parseRange(e,t){let s=A(e);return t?s.reverse():s}static shuffleArray(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}}}export{I as S};