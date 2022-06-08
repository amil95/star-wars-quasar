(()=>{"use strict";var e={174:(e,r,t)=>{t(7280),t(5363),t(71);var o=t(3675),n=t(1659),a=t(2494);function i(e,r,t,o,n,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});s.render=i;const c=s;var l=t(7896);async function u(e,r){const t="function"===typeof l.Z?await(0,l.Z)({}):l.Z,o=e(c);return o.use(n.Z,r),{app:o,router:t}}const p={config:{}},d="";async function f({app:e,router:r},t){let o=!1;const n=e=>{o=!0;const t=Object(e)===e?r.resolve(e).fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<t.length;s++)try{await t[s]({app:e,router:r,ssrContext:null,redirect:n,urlPath:a,publicPath:d})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==o&&(e.use(r),e.mount("#q-app"))}u(o.ri,p).then((e=>Promise.all([Promise.resolve().then(t.bind(t,1768))]).then((r=>{const t=r.map((e=>e.default)).filter((e=>"function"===typeof e));f(e,t)}))))},1768:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s,api:()=>i});var o=t(7083),n=t(52),a=t.n(n);const i=a().create({baseURL:"https://api.example.com"}),s=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},7896:(e,r,t)=>{t.d(r,{Z:()=>s});var o=t(9582);const n=[{path:"/",name:"home",component:()=>Promise.all([t.e(736),t.e(638)]).then(t.bind(t,9638)),children:[{path:"",component:()=>t.e(629).then(t.bind(t,7629))},{path:"characters",name:"characters",component:()=>Promise.all([t.e(736),t.e(23)]).then(t.bind(t,2023))},{path:"character/:id",name:"character",component:()=>Promise.all([t.e(736),t.e(621)]).then(t.bind(t,3621))}]},{path:"/:catchAll(.*)*",name:"teste",component:()=>Promise.all([t.e(736),t.e(989)]).then(t.bind(t,8989))}],a=n;let i;const s=function(){if(!i){const e=o.r5;i=(0,o.p7)({scrollBehavior:()=>({left:0,top:0}),routes:a,history:e("")})}return i}}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[c])))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=n();void 0!==l&&(r=l)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{23:"203faf12",621:"4e8114f4",629:"0ea8e93a",638:"a0744a5a",989:"4605ea2f"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"31d6cfe0",736:"45b96d46"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="star-wars-quasar:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==r+a){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+a),s.src=o),e[o]=[n];var d=(r,t)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),s=new Error,c=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};t.l(i,c,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,s,c]=o,l=0;if(i.some((r=>0!==e[r]))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(c)var u=c(t)}for(r&&r(o);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[i[l]]=0;return t.O(u)},o=self["webpackChunkstar_wars_quasar"]=self["webpackChunkstar_wars_quasar"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(174)));o=t.O(o)})();