class t{constructor(t,s){this.status=t,this.body="string"==typeof s?{message:s}:s||{message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class s{constructor(t,s){this.status=t,this.location=s}}class e extends Error{constructor(t){super(),this.status=404,this.message=`Not found: ${t}`}}class n{constructor(t,s){this.status=t,this.data=s}}function r(s,e){if(isNaN(s)||s<400||s>599)throw new Error(`HTTP error status codes must be between 400 and 599 — ${s} is invalid`);return new t(s,e)}function o(t,s){const e=JSON.stringify(t),n=new Headers(s?.headers);return n.has("content-length")||n.set("content-length",a.encode(e).byteLength.toString()),n.has("content-type")||n.set("content-type","application/json"),new Response(e,{...s,headers:n})}const a=new TextEncoder;function c(t,s){const e=new Headers(s?.headers);if(!e.has("content-length")){const n=a.encode(t);return e.set("content-length",n.byteLength.toString()),new Response(n,{...s,headers:e})}return new Response(t,{...s,headers:e})}export{n as A,t as H,e as N,s as R,r as e,o as j,c as t};