import{w as t,i as n,r as s,x as e,y as r}from"./ssr.js";const o=[];function i(t,n){return{subscribe:u(t,n).subscribe}}function u(n,s=t){let r;const i=new Set;function u(t){if(e(n,t)&&(n=t,r)){const t=!o.length;for(const s of i)s[1](),o.push(s,n);if(t){for(let t=0;t<o.length;t+=2)o[t][0](o[t+1]);o.length=0}}}function c(t){u(t(n))}return{set:u,update:c,subscribe:function(e,o=t){const a=[e,o];return i.add(a),1===i.size&&(r=s(u,c)||t),e(n),()=>{i.delete(a),0===i.size&&r&&(r(),r=null)}}}}function c(e,o,u){const c=!Array.isArray(e),a=c?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const f=o.length<2;return i(u,((e,i)=>{let u=!1;const l=[];let b=0,d=t;const p=()=>{if(b)return;d();const n=o(c?l[0]:l,e,i);f?e(n):d=r(n)?n:t},h=a.map(((t,s)=>n(t,(t=>{l[s]=t,b&=~(1<<s),u&&p()}),(()=>{b|=1<<s}))));return u=!0,p(),function(){s(h),d(),u=!1}}))}function a(t){return{subscribe:t.subscribe.bind(t)}}export{a,c as d,i as r,u as w};
