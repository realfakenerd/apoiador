import{c as e,a as t,b as i,e as s,d as a,f as r,v as o}from"./ssr.js";import{w as d}from"./index4.js";import{i as l}from"./names.js";import{c as u}from"./utils.js";function n(e){const t={};return e.forEach((e=>{Object.keys(e).forEach((i=>{"action"!==i&&(t[i]=e[i])}))})),t}const v=e(((e,o,d,u)=>{let v=t(o,["href","type","builders","el"]),{href:f}=o,{type:b}=o,{builders:c=[]}=o,{el:$}=o;const p={"data-button-root":""};return void 0===o.href&&d.href&&void 0!==f&&d.href(f),void 0===o.type&&d.type&&void 0!==b&&d.type(b),void 0===o.builders&&d.builders&&void 0!==c&&d.builders(c),void 0===o.el&&d.el&&void 0!==$&&d.el($),""+(c&&c.length?" "+((h=f?"a":"button")?`<${f?"a":"button"}${i([{type:s(f?void 0:b)},{href:s(f)},{tabindex:"0"},a(n(c)),a(v),a(p)],{})}${r("this",$,0)}>${l(h)?"":`${u.default?u.default({}):""}`}${l(h)?"":`</${h}>`}`:""):` ${(e=>e?`<${f?"a":"button"}${i([{type:s(f?void 0:b)},{href:s(f)},{tabindex:"0"},a(v),a(p)],{})}>${l(e)?"":`${u.default?u.default({}):""}`}${l(e)?"":`</${e}>`}`:"")(f?"a":"button")}`);var h})),f=e(((e,i,s,a)=>{let r=t(i,["class","variant","size","builders"]),{class:l}=i,{variant:n="default"}=i,{size:f="default"}=i,{builders:b=[]}=i;return void 0===i.class&&s.class&&void 0!==l&&s.class(l),void 0===i.variant&&s.variant&&void 0!==n&&s.variant(n),void 0===i.size&&s.size&&void 0!==f&&s.size(f),void 0===i.builders&&s.builders&&void 0!==b&&s.builders(b),`${o(v,"ButtonPrimitive.Root").$$render(e,Object.assign({},{builders:b},{class:u(d({variant:n,size:f,className:l}))},{type:"button"},r),{},{default:()=>`${a.default?a.default({}):""}`})}`}));export{f as B};
