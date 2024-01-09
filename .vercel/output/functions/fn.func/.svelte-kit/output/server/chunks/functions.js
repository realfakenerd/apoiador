const t=/^[a-z0-9]+(-[a-z0-9]+)*$/,e=(t,e,o,r="")=>{const i=t.split(":");if("@"===t.slice(0,1)){if(i.length<2||i.length>3)return null;r=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const t=i.pop(),o=i.pop(),c={provider:i.length>0?i[0]:r,prefix:o,name:t};return e&&!n(c)?null:c}const c=i[0],s=c.split("-");if(s.length>1){const t={provider:r,prefix:s.shift(),name:s.join("-")};return e&&!n(t)?null:t}if(o&&""===r){const t={provider:r,prefix:"",name:c};return e&&!n(t,o)?null:t}return null},n=(e,n)=>!!e&&!(""!==e.provider&&!e.provider.match(t)||!(n&&""===e.prefix||e.prefix.match(t))||!e.name.match(t)),o=Object.freeze({left:0,top:0,width:16,height:16}),r=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),i=Object.freeze({...o,...r}),c=Object.freeze({...i,body:"",hidden:!1});function s(t,e){const n=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}(t,e);for(const o in c)o in r?o in t&&!(o in n)&&(n[o]=r[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function a(t,e,n){const o=t.icons,r=t.aliases||Object.create(null);let i={};function c(t){i=s(o[t]||r[t],i)}return c(e),n.forEach(c),s(t,i)}function l(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=function(t,e){const n=t.icons,o=t.aliases||Object.create(null),r=Object.create(null);return(e||Object.keys(n).concat(Object.keys(o))).forEach((function t(e){if(n[e])return r[e]=[];if(!(e in r)){r[e]=null;const n=o[e]&&o[e].parent,i=n&&t(n);i&&(r[e]=[n].concat(i))}return r[e]})),r}(t);for(const r in o){const i=o[r];i&&(e(r,a(t,r,i)),n.push(r))}return n}const f={provider:"",aliases:{},not_found:{},...o};function u(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function d(e){if("object"!=typeof e||null===e)return null;const n=e;if("string"!=typeof n.prefix||!e.icons||"object"!=typeof e.icons)return null;if(!u(e,f))return null;const o=n.icons;for(const i in o){const e=o[i];if(!i.match(t)||"string"!=typeof e.body||!u(e,c))return null}const r=n.aliases||Object.create(null);for(const i in r){const e=r[i],n=e.parent;if(!i.match(t)||"string"!=typeof n||!o[n]&&!r[n]||!u(e,c))return null}return n}const p=Object.create(null);function h(t,e){const n=p[t]||(p[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function g(t,e){return d(e)?l(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}let m=!1;function b(t){return"boolean"==typeof t&&(m=t),m}function y(t,o){if("object"!=typeof t)return!1;if("string"!=typeof o&&(o=t.provider||""),m&&!o&&!t.prefix){let n=!1;return d(t)&&(t.prefix="",l(t,((t,o)=>{o&&function(t,n){const o=e(t,!0,m);return!!o&&function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(o){}return!1}(h(o.provider,o.prefix),o.name,n)}(t,o)&&(n=!0)}))),n}const r=t.prefix;if(!n({provider:o,prefix:r,name:"a"}))return!1;return!!g(h(o,r),t)}const v=Object.freeze({width:null,height:null}),x=Object.freeze({...v,...r}),w=/(-?[0-9.]*[0-9]+[0-9.]*)/g,j=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function k(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(w);if(null===o||!o.length)return t;const r=[];let i=o.shift(),c=j.test(i);for(;;){if(c){const t=parseFloat(i);isNaN(t)?r.push(i):r.push(Math.ceil(t*e*n)/n)}else r.push(i);if(i=o.shift(),void 0===i)return r.join("");c=!c}}const O=t=>"unset"===t||"undefined"===t||"none"===t;const S=/\sid="(\S+)"/g,E="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let F=0;function M(t,e=E){const n=[];let o;for(;o=S.exec(t);)n.push(o[1]);if(!n.length)return t;const r="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const o="function"==typeof e?e(n):e+(F++).toString(),i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")})),t=t.replace(new RegExp(r,"g"),"")}const T=Object.create(null);function C(t){return T[t]||T[""]}function I(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const L=Object.create(null),z=["https://api.simplesvg.com","https://api.unisvg.com"],A=[];for(;z.length>0;)1===z.length||Math.random()>.5?A.push(z.shift()):A.push(z.pop());function N(t,e){const n=I(e);return null!==n&&(L[t]=n,!0)}function R(t){return L[t]}L[""]=I({resources:["https://api.iconify.design"].concat(A)});let $=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(e){}})();const D={prepare:(t,e,n)=>{const o=[],r=function(t,e){const n=R(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{t=Math.max(t,e.length)})),o=n.maxURL-t-n.path.length-(e+".json?icons=").length}else o=0;return o}(t,e),i="icons";let c={type:i,provider:t,prefix:e,icons:[]},s=0;return n.forEach(((n,a)=>{s+=n.length+1,s>=r&&a>0&&(o.push(c),c={type:i,provider:t,prefix:e,icons:[]},s=n.length),c.icons.push(n)})),o.push(c),o},send:(t,e,n)=>{if(!$)return void n("abort",424);let o=function(t){if("string"==typeof t){const e=R(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let r=503;$(t+o).then((t=>{const e=t.status;if(200===e)return r=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",r)}))})).catch((()=>{n("next",r)}))}};function P(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let _=0;var U={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function q(t,e,n,o){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let c;if(t.random){let e=t.resources.slice(0);for(c=[];e.length>1;){const t=Math.floor(Math.random()*e.length);c.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}c=c.concat(e)}else c=t.resources.slice(i).concat(t.resources.slice(0,i));const s=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(p=[]),"function"==typeof t&&p.push(t)}function b(){l="failed",p.forEach((t=>{t(void 0,a)}))}function y(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function v(){if("pending"!==l)return;h();const o=c.shift();if(void 0===o)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(y(),b())}),t.timeout)):void b();const r={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const r="success"!==n;switch(d=d.filter((t=>t!==e)),l){case"pending":break;case"failed":if(r||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void b();if(r)return a=o,void(d.length||(c.length?v():b()));if(h(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",p.forEach((t=>{t(o)}))}(r,e,n)}};d.push(r),f++,u=setTimeout(v,t.rotate),n(o,e,r.callback)}return"function"==typeof o&&p.push(o),setTimeout(v),function(){return{startTime:s,payload:e,status:l,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}function Q(t){const e={...U,...t};let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,r,i){const c=q(e,t,r,((t,e)=>{o(),i&&i(t,e)}));return n.push(c),c},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function B(){}const J=Object.create(null);function H(t,e,n){let o,r;if("string"==typeof t){const e=C(t);if(!e)return n(void 0,424),B;r=e.send;const i=function(t){if(!J[t]){const e=R(t);if(!e)return;const n=Q(e);J[t]={config:e,redundancy:n}}return J[t]}(t);i&&(o=i.redundancy)}else{const e=I(t);if(e){o=Q(e);const n=C(t.resources?t.resources[0]:"");n&&(r=n.send)}}return o&&r?o.query(e,r,n)().abort:(n(void 0,424),B)}const G="iconify2",K="iconify",V=K+"-count",W=K+"-version",X=36e5,Y=168,Z=50;function tt(t,e){try{return t.getItem(e)}catch(n){}}function et(t,e,n){try{return t.setItem(e,n),!0}catch(o){}}function nt(t,e){try{t.removeItem(e)}catch(n){}}function ot(t,e){return et(t,V,e.toString())}function rt(t){return parseInt(tt(t,V))||0}const it={local:!0,session:!0},ct={local:new Set,session:new Set};let st=!1;let at="undefined"==typeof window?{}:window;function lt(t){const e=t+"Storage";try{if(at&&at[e]&&"number"==typeof at[e].length)return at[e]}catch(n){}it[t]=!1}function ft(t,e){const n=lt(t);if(!n)return;const o=tt(n,W);if(o!==G){if(o){const t=rt(n);for(let e=0;e<t;e++)nt(n,K+e.toString())}return et(n,W,G),void ot(n,0)}const r=Math.floor(Date.now()/X)-Y,i=t=>{const o=K+t.toString(),i=tt(n,o);if("string"==typeof i){try{const n=JSON.parse(i);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>r&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(c){}nt(n,o)}};let c=rt(n);for(let s=c-1;s>=0;s--)i(s)||(s===c-1?(c--,ot(n,c)):ct[t].add(s))}function ut(){if(!st){st=!0;for(const t in it)ft(t,(t=>{const e=t.data,n=h(t.provider,e.prefix);if(!g(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function dt(t,e){function n(n){let o;if(!it[n]||!(o=lt(n)))return;const r=ct[n];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=rt(o),i>=Z||!ot(o,i+1))return;const c={cached:Math.floor(Date.now()/X),provider:t.provider,data:e};return et(o,K+i.toString(),JSON.stringify(c))}st||ut(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const o in it)ft(o,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function pt(){}function ht(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,r=t.prefix;e.forEach((e=>{const i=e.icons,c=i.pending.length;i.pending=i.pending.filter((e=>{if(e.prefix!==r)return!0;const c=e.name;if(t.icons[c])i.loaded.push({provider:o,prefix:r,name:c});else{if(!t.missing.has(c))return n=!0,!0;i.missing.push({provider:o,prefix:r,name:c})}return!1})),i.pending.length!==c&&(n||P([t],e.id),e.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),e.abort))}))})))}(t)})))}const gt=(t,n)=>{const o=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const r=t.provider,i=t.prefix,c=t.name,s=n[r]||(n[r]=Object.create(null)),a=s[i]||(s[i]=h(r,i));let l;l=c in a.icons?e.loaded:""===i||a.missing.has(c)?e.missing:e.pending,l.push({provider:r,prefix:i,name:c})})),e}(function(t,n=!0,o=!1){const r=[];return t.forEach((t=>{const i="string"==typeof t?e(t,n,o):t;i&&r.push(i)})),r}(t,!0,b()));if(!o.pending.length){let t=!0;return n&&setTimeout((()=>{t&&n(o.loaded,o.missing,o.pending,pt)})),()=>{t=!1}}const r=Object.create(null),i=[];let c,s;return o.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===s&&e===c)return;c=e,s=n,i.push(h(e,n));const o=r[e]||(r[e]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((t=>{const{provider:e,prefix:n,name:o}=t,i=h(e,n),c=i.pendingIcons||(i.pendingIcons=new Set);c.has(o)||(c.add(o),r[e][n].push(o))})),i.forEach((t=>{const{provider:e,prefix:n}=t;r[e][n].length&&function(t,e){t.iconsToLoad=t.iconsToLoad?t.iconsToLoad.concat(e).sort():e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let r;delete t.iconsToLoad,o&&(r=C(e))&&r.prepare(e,n,o).forEach((n=>{H(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=g(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),dt(t,e)}catch(o){}ht(t)}))}))})))}(t,r[e][n])})),n?function(t,e,n){const o=_++,r=P.bind(null,n,o);if(!e.pending.length)return r;const i={id:o,icons:e,callback:t,abort:r};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(i)})),r}(n,o,i):pt};const mt=/[\s,]+/;function bt(t,e){e.split(mt).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function yt(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r/=e,r%1==0?o(r):0)}}return e}const vt={...x,inline:!1},xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},wt={display:"inline-block"},jt={"background-color":"currentColor"},kt={"background-color":"transparent"},Ot={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},St={"-webkit-mask":jt,mask:jt,background:kt};for(const It in St){const t=St[It];for(const e in Ot)t[It+"-"+e]=Ot[e]}function Et(t,e){const n=function(t,e){const n={...t};for(const o in e){const t=e[o],r=typeof t;o in v?(null===t||t&&("string"===r||"number"===r))&&(n[o]=t):r===typeof n[o]&&(n[o]="rotate"===o?t%4:t)}return n}(vt,e),o=e.mode||"svg",r="svg"===o?{...xt}:{};-1===t.body.indexOf("xlink:")&&delete r["xmlns:xlink"];let c="string"==typeof e.style?e.style:"";for(let i in e){const t=e[i];if(void 0!==t)switch(i){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[i]=!0===t||"true"===t||1===t;break;case"flip":"string"==typeof t&&bt(n,t);break;case"color":c=c+(c.length>0&&";"!==c.trim().slice(-1)?";":"")+"color: "+t+"; ";break;case"rotate":"string"==typeof t?n[i]=yt(t):"number"==typeof t&&(n[i]=t);break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete r["aria-hidden"];break;default:if("on:"===i.slice(0,3))break;void 0===vt[i]&&(r[i]=t)}}const s=function(t,e){const n={...i,...t},o={...x,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let c=n.body;[n,o].forEach((t=>{const e=[],n=t.vFlip;let o,i=t.rotate;switch(t.hFlip?n?i+=2:(e.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),e.push("scale(-1 1)"),r.top=r.left=0):n&&(e.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),e.push("scale(1 -1)"),r.top=r.left=0),i<0&&(i-=4*Math.floor(i/4)),i%=4,i){case 1:o=r.height/2+r.top,e.unshift("rotate(90 "+o.toString()+" "+o.toString()+")");break;case 2:e.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:o=r.width/2+r.left,e.unshift("rotate(-90 "+o.toString()+" "+o.toString()+")")}i%2==1&&(r.left!==r.top&&(o=r.left,r.left=r.top,r.top=o),r.width!==r.height&&(o=r.width,r.width=r.height,r.height=o)),e.length&&(c=function(t,e,n){const o=function(t,e="defs"){let n="";const o=t.indexOf("<"+e);for(;o>=0;){const r=t.indexOf(">",o),i=t.indexOf("</"+e);if(-1===r||-1===i)break;const c=t.indexOf(">",i);if(-1===c)break;n+=t.slice(r+1,i).trim(),t=t.slice(0,o).trim()+t.slice(c+1)}return{defs:n,content:t}}(t);return i=e+o.content+n,(r=o.defs)?"<defs>"+r+"</defs>"+i:i;var r,i}(c,'<g transform="'+e.join(" ")+'">',"</g>"))}));const s=o.width,a=o.height,l=r.width,f=r.height;let u,d;null===s?(d=null===a?"1em":"auto"===a?f:a,u=k(d,l/f)):(u="auto"===s?l:s,d=null===a?k(u,f/l):"auto"===a?f:a);const p={},h=(t,e)=>{O(e)||(p[t]=e.toString())};h("width",u),h("height",d);const g=[r.left,r.top,l,f];return p.viewBox=g.join(" "),{attributes:p,viewBox:g,body:c}}(t,n),a=s.attributes;if(n.inline&&(c="vertical-align: -0.125em; "+c),"svg"===o){Object.assign(r,a),""!==c&&(r.style=c);let t=0,n=e.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),{svg:!0,attributes:r,body:M(s.body,n?()=>n+"ID"+t++:"iconifySvelte")}}const{body:l,width:f,height:u}=t,d="mask"===o||"bg"!==o&&-1!==l.indexOf("currentColor"),p=function(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in e)n+=" "+o+'="'+e[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}(l,{...a,width:f+"",height:u+""});const h={"--svg":'url("'+function(t){return"data:image/svg+xml,"+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(t)}(p)+'")'},g=t=>{const e=a[t];e&&(h[t]=function(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}(e))};g("width"),g("height"),Object.assign(h,wt,d?jt:kt);let m="";for(const i in h)m+=i+": "+h[i]+";";return r.style=m+c,{svg:!1,attributes:r}}function Ft(t){!function(t,e){switch(t){case"local":case"session":it[t]=e;break;case"all":for(const t in it)it[t]=e}}(t,!0)}if(b(!0),T[""]=D,"undefined"!=typeof document&&"undefined"!=typeof window){ut();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload;"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{"object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||y(t)}catch(e){}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){try{const n=e[t];if("object"!=typeof n||!n||void 0===n.resources)continue;N(t,n)}catch(Ct){}}}}function Mt(t,n,o,r,c){function s(){n.loading&&(n.loading.abort(),n.loading=null)}if("object"==typeof t&&null!==t&&"string"==typeof t.body)return n.name="",s(),{data:{...i,...t}};let a;if("string"!=typeof t||null===(a=e(t,!1,!0)))return s(),null;const l=function(t){const n="string"==typeof t?e(t,!0,m):t;if(n){const t=h(n.provider,n.prefix),e=n.name;return t.icons[e]||(t.missing.has(e)?null:void 0)}}(a);if(!l)return!o||n.loading&&n.loading.name===t||(s(),n.name="",n.loading={name:t,abort:gt([a],r)}),null;s(),n.name!==t&&(n.name=t,c&&!n.destroyed&&c(t));const f=["iconify"];return""!==a.prefix&&f.push("iconify--"+a.prefix),""!==a.provider&&f.push("iconify--"+a.provider),{data:l,classes:f}}function Tt(t,e){return t?Et({...i,...t},e):null}export{Mt as c,Ft as e,Tt as g};