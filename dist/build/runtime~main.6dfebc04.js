(()=>{"use strict";var g={},h={};function f(e){var b=h[e];if(b!==void 0)return b.exports;var a=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(a.exports,a,a.exports,f),a.loaded=!0,a.exports}f.m=g,(()=>{var e=[];f.O=(b,a,d,r)=>{if(a){r=r||0;for(var t=e.length;t>0&&e[t-1][2]>r;t--)e[t]=e[t-1];e[t]=[a,d,r];return}for(var c=1/0,t=0;t<e.length;t++){for(var[a,d,r]=e[t],s=!0,n=0;n<a.length;n++)(r&!1||c>=r)&&Object.keys(f.O).every(p=>f.O[p](a[n]))?a.splice(n--,1):(s=!1,r<c&&(c=r));if(s){e.splice(t--,1);var i=d();i!==void 0&&(b=i)}}return b}})(),f.n=e=>{var b=e&&e.__esModule?()=>e.default:()=>e;return f.d(b,{a:b}),b},(()=>{var e=Object.getPrototypeOf?a=>Object.getPrototypeOf(a):a=>a.__proto__,b;f.t=function(a,d){if(d&1&&(a=this(a)),d&8||typeof a=="object"&&a&&(d&4&&a.__esModule||d&16&&typeof a.then=="function"))return a;var r=Object.create(null);f.r(r);var t={};b=b||[null,e({}),e([]),e(e)];for(var c=d&2&&a;typeof c=="object"&&!~b.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach(s=>t[s]=()=>a[s]);return t.default=()=>a,f.d(r,t),r}})(),f.d=(e,b)=>{for(var a in b)f.o(b,a)&&!f.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:b[a]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce((b,a)=>(f.f[a](e,b),b),[])),f.u=e=>""+e+"."+{157:"a765d009",159:"a7ccc0fa",277:"af95ea4a",286:"5276ef49",352:"26cb9b75",417:"6251a1d1",431:"9a2d61b2",474:"d28d1d0c",545:"58b37e7d",559:"63abf3d2",678:"cfbbb270",843:"44244c6c",870:"d0767fea",995:"f964df49",1005:"b3bd0f04",1021:"a402a6f2",1041:"e5db1622",1047:"2fe8d338",1067:"6fc42245",1089:"71c2c63c",1139:"643b6b4a",1189:"e64a6eaa",1226:"889b1baf",1289:"f026e2b8",1540:"b5a9fd17",1547:"912c917e",1556:"bbca021c",1636:"a086bd71",1712:"9f5aee84",1833:"e835a2a7",1834:"a2094319",1840:"5fec5029",1888:"556b63a2",1921:"95abf8e5",1943:"50a692f8",1957:"ae013c2f",2008:"af879b6f",2037:"017b3fbf",2227:"e46350de",2301:"ecbc150c",2306:"ae7df284",2345:"21c7f610",2389:"c55e502d",2431:"d032f3e6",2445:"33820a6f",2538:"9e87d8a5",2540:"449e6d1d",2585:"a623d46e",2613:"dba12a0f",2687:"04d4cc37",2709:"14b88baf",2752:"2fb95999",2772:"d56a8850",2782:"d67f2bb5",2884:"6ec7f689",2927:"02dcb4c4",2947:"8e941e7b",3042:"f5c9f0b6",3106:"e9d2f656",3200:"ccf9279d",3265:"0c572595",3277:"d316dc7c",3282:"88c0f2e2",3288:"aefcdb06",3379:"200a3c6e",3471:"54c1dc32",3512:"9a7ddf74",3544:"f06e121e",3667:"a5f4a1e5",3775:"6ac26b8d",3801:"4cb918dd",3829:"61442bcf",3882:"087ee54d",3938:"7db46b57",3985:"66b1e1b3",4011:"a1811a4e",4014:"9cb2b517",4041:"cc3b6592",4110:"86ca0aab",4141:"de11cc97",4207:"418e9452",4243:"5aacc99d",4259:"0f9e538c",4306:"3b110e95",4338:"4fba0c9d",4342:"64009b37",4347:"accb8fa7",4384:"6e4207bb",4407:"9c063be4",4475:"4983385f",4495:"4076cd84",4513:"c89316e5",4550:"eda6dbfd",4675:"57eb3cf5",4678:"a9832e83",4799:"636ba18b",4856:"b6684196",4857:"5a12ca8b",4878:"346f634d",4911:"0d77b394",4972:"b1978656",4998:"3bb2eaa8",5029:"f8c9ce9b",5030:"490e4c02",5090:"e84937aa",5097:"eef3eda8",5174:"b79816e7",5199:"a6bdd6ac",5275:"25d447d7",5411:"e6a3ca9f",5445:"2e581e34",5465:"ed24a1e5",5480:"fc326c64",5494:"be5f499f",5506:"8e094525",5517:"2e1a336d",5533:"36ec20f8",5608:"612b62a6",5707:"e466fad3",5736:"07eaa6ad",5853:"1136e06b",5874:"213329d2",5904:"2bd599be",5991:"865b0da2",6079:"5930b644",6085:"b2645a66",6103:"884aead8",6126:"88b2fff1",6309:"9dde8cbf",6323:"df2d870a",6349:"9971a458",6354:"b5cd2333",6460:"d5433c56",6488:"7ce41fed",6511:"39dfa265",6539:"876127e6",6582:"e6ecb553",6587:"827e9238",6588:"4022ba0f",6624:"9362164b",6704:"536bb1cb",6744:"877c088d",6791:"481c214b",6876:"692d7bf7",6888:"7baa096a",7015:"d332b068",7171:"8a7dedde",7186:"cc9155c2",7225:"84b9463c",7311:"6d0998f8",7320:"ef943338",7396:"e2727d95",7407:"a0ded60b",7410:"c5dccbbe",7412:"8a3ce634",7534:"81b3c101",7539:"5b8325de",7542:"610c67f6",7550:"43e1a5b9",7570:"db310221",7665:"10076ee6",7690:"f7e72808",7702:"0afb1427",7750:"a67a46ca",7808:"b31f2eb7",7838:"fe0b9d02",7904:"1ee80cb2",7970:"26289f2a",7977:"7b84349e",7983:"ea21acc1",8055:"dc269c43",8227:"924279f4",8267:"1bd8029c",8283:"34035119",8366:"ef105b86",8441:"162867e6",8548:"479be23a",8597:"8bcc2527",8657:"32208825",8679:"59d5a2b9",8705:"8697db9a",8734:"942a5e5b",8739:"03678a50",8786:"01a6e4e7",8848:"ccab6fc2",9015:"b1987310",9055:"ccd3b19f",9095:"e3419f82",9127:"1a24b828",9133:"7ab46bc4",9454:"ecd87150",9473:"abd57b37",9483:"2594e679",9496:"b5d010a9",9509:"12c23108",9589:"cabfd2b8",9628:"e645e28e",9633:"9c97938a",9732:"87d5f8cf",9781:"c4a11400",9785:"e8debc64",9881:"bce28ce9",9916:"78b7482b",9953:"5ec648ec",9958:"37403f0f",9966:"8d08acbb",9969:"80728189",9971:"b7ff28e4"}[e]+".chunk.js",f.miniCssF=e=>{},f.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),f.o=(e,b)=>Object.prototype.hasOwnProperty.call(e,b),(()=>{var e={},b="strapi-cms-ladoga:";f.l=(a,d,r,t)=>{if(e[a]){e[a].push(d);return}var c,s;if(r!==void 0)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var o=n[i];if(o.getAttribute("src")==a||o.getAttribute("data-webpack")==b+r){c=o;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",b+r),c.src=a),e[a]=[d];var l=(_,p)=>{c.onerror=c.onload=null,clearTimeout(u);var v=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),v&&v.forEach(m=>m(p)),_)return _(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),s&&document.head.appendChild(c)}})(),f.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),f.p="/admin/",(()=>{f.b=document.baseURI||self.location.href;var e={5354:0};f.f.j=(d,r)=>{var t=f.o(e,d)?e[d]:void 0;if(t!==0)if(t)r.push(t[2]);else if(d!=5354){var c=new Promise((o,l)=>t=e[d]=[o,l]);r.push(t[2]=c);var s=f.p+f.u(d),n=new Error,i=o=>{if(f.o(e,d)&&(t=e[d],t!==0&&(e[d]=void 0),t)){var l=o&&(o.type==="load"?"missing":o.type),u=o&&o.target&&o.target.src;n.message="Loading chunk "+d+` failed.
(`+l+": "+u+")",n.name="ChunkLoadError",n.type=l,n.request=u,t[1](n)}};f.l(s,i,"chunk-"+d,d)}else e[d]=0},f.O.j=d=>e[d]===0;var b=(d,r)=>{var[t,c,s]=r,n,i,o=0;if(t.some(u=>e[u]!==0)){for(n in c)f.o(c,n)&&(f.m[n]=c[n]);if(s)var l=s(f)}for(d&&d(r);o<t.length;o++)i=t[o],f.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return f.O(l)},a=self.webpackChunkstrapi_cms_ladoga=self.webpackChunkstrapi_cms_ladoga||[];a.forEach(b.bind(null,0)),a.push=b.bind(null,a.push.bind(a))})(),f.nc=void 0})();
