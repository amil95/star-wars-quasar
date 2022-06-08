"use strict";(self["webpackChunkstar_wars_quasar"]=self["webpackChunkstar_wars_quasar"]||[]).push([[932],{7468:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(52),r=a.n(n),o=function(t,e,a,n){function r(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,o){function i(t){try{s(n.next(t))}catch(e){o(e)}}function c(t){try{s(n["throw"](t))}catch(e){o(e)}}function s(t){t.done?a(t.value):r(t.value).then(i,c)}s((n=n.apply(t,e||[])).next())}))};class i{static getCharactersByPage(t){return o(this,void 0,void 0,(function*(){let e={characters:[],total:0};return yield r().get(`https://swapi.dev/api/people/?page=${t}`).then((t=>(console.log(t),e={characters:t.data.results,total:t.data.count}))).catch((t=>console.error(t))),e}))}static getCharacterById(t){return o(this,void 0,void 0,(function*(){const e=yield r().get(`https://swapi.dev/api/people/${t}`);return e.data}))}static getStarships(t){return o(this,void 0,void 0,(function*(){const e=[];return t.starships&&t.starships.forEach((t=>o(this,void 0,void 0,(function*(){const a=yield r().get(t);e.push(a.data)})))),e}))}static getPicture(t){return o(this,void 0,void 0,(function*(){let e=404,a=0;while(200!=e){const n=yield r().get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyDKEWPZHKt0FSXvND6RNPtajUnr171dwbA&cx=ccdc96df0b94a890e&searchType=image&imgSize=xlarge&alt=json&num=1&start=1&q=${t}`);if(e=n.status,200==n.status)return n.data.items[a].link;a++}return""}))}}},2932:(t,e,a)=>{a.r(e),a.d(e,{default:()=>q});a(7280);var n=a(2494),r=a(5626);const o={class:"row"},i=(0,n._)("div",{class:"col"},null,-1),c={class:"q-pa-xs col-4"},s=["src"],u=(0,n._)("div",{class:"col"},null,-1);function l(t,e,a,l,d,p){const g=(0,n.up)("q-card-section"),h=(0,n.up)("q-separator"),f=(0,n.up)("q-card"),m=(0,n.up)("q-table");return(0,n.wg)(),(0,n.iD)("div",o,[i,(0,n.Wm)(m,{grid:"",loading:t.loading,rows:t.Characters,pagination:t.pagination,"onUpdate:pagination":e[0]||(e[0]=e=>t.pagination=e),onRequest:t.onRequest,"rows-per-page-options":[10],columns:t.columns},{item:(0,n.w5)((e=>[(0,n._)("div",c,[(0,n.Wm)(f,{onClick:a=>t.goCharacter(e.row.url.split("/")[5]),dark:""},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{class:"text-center text-yellow"},{default:(0,n.w5)((()=>[(0,n._)("strong",null,(0,r.zw)(e.row.name),1)])),_:2},1024),(0,n.Wm)(h),(0,n.Wm)(g,{class:"flex flex-center"},{default:(0,n.w5)((()=>[(0,n._)("img",{src:e.row.image,height:"100"},null,8,s)])),_:2},1024)])),_:2},1032,["onClick"])])])),_:1},8,["loading","rows","pagination","onRequest","columns"]),u])}var d=a(9682),p=a(7468),g=a(7896),h=function(t,e,a,n){function r(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,o){function i(t){try{s(n.next(t))}catch(e){o(e)}}function c(t){try{s(n["throw"](t))}catch(e){o(e)}}function s(t){t.done?a(t.value):r(t.value).then(i,c)}s((n=n.apply(t,e||[])).next())}))};const f=(0,n.aZ)({name:"CharacterTable",setup(){let t=(0,d.iH)([]),e=(0,d.iH)({page:1,rowsPerPage:10,rowsNumber:0}),a=(0,d.iH)(!0);const n=[{name:"image",label:"Image",field:"image",align:"left"},{name:"name",label:"Name",field:"name",align:"left"}];function r(n){p.Z.getCharactersByPage(n).then((n=>{t.value=n.characters,e.value.rowsNumber=n.total,a.value=!1,i()}))}function o(t){(0,g.Z)().push({path:"/character/"+t})}function i(){t.value.forEach((t=>h(this,void 0,void 0,(function*(){t.image=yield p.Z.getPicture(t.name)}))))}function c(t){const n=t.pagination.page;a.value=!0,e.value.page=n,r(n)}return r(1),{columns:n,Characters:t,pagination:e,onRequest:c,loading:a,goCharacter:o,getPictures:i}}});var m=a(3299),v=a(151),w=a(5589),y=a(5869),C=a(7518),_=a.n(C);f.render=l;const q=f;_()(f,"components",{QTable:m.Z,QCard:v.Z,QCardSection:w.Z,QSeparator:y.Z})}}]);