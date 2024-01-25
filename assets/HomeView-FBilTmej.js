import{d as N,r as d,c as u,a as t,t as s,b as _,o as c,e as B,f as p,w as D,v as P,F as w,g as k,h as T,i as z,n as F}from"./index-VnQK1pVO.js";const A={class:"fixed top-0 right-0 left-0 h-screen flex justify-center items-center z-50"},E={class:"relative flex bg-gray-200 p-10 rounded-md shadow-lg"},H={class:"flex flex-col gap-4"},I={class:"text-xl font-semibold"},R=t("strong",null,"Capital:",-1),U=t("strong",null,"Language:",-1),q=t("strong",null,"Population:",-1),G=t("strong",null,"Region:",-1),J=t("strong",null,"Subregion:",-1),K=N({__name:"CountryModal",props:{country:{}},emits:["closeModal"],setup(g,{emit:h}){const i=g,n=h,l=d(i.country),r=()=>{n("closeModal")};return(v,m)=>(c(),u("div",A,[t("div",E,[t("button",{type:"button",onClick:r,class:"absolute top-2 right-2 rounded-full bg-red-600 text-white leading-6 text-md w-6 h-6"}," × "),t("div",H,[t("h2",I,s(l.value.name.official),1),t("p",null,[R,_(" "+s(l.value.capital!==void 0?l.value.capital.join(", "):"No Capital"),1)]),t("p",null,[U,_(" "+s(l.value.languages!==void 0?l.value.languages:"No Languages"),1)]),t("p",null,[q,_(" "+s(l.value.population),1)]),t("p",null,[G,_(" "+s(l.value.region),1)]),t("p",null,[J,_(" "+s(l.value.subregion!==void 0?l.value.subregion:"No Subregion"),1)])])])]))}}),O=t("h1",{class:"font-bold text-2xl text-center py-10"},"Country Catalog",-1),Q={class:"flex flex-col gap-4 p-4"},W={class:"flex items-center gap-2"},X={class:"w-full border-collapse"},Y={class:"bg-gray-200"},Z=t("th",{class:"p-2 text-left"},"No.",-1),tt=t("th",{class:"p-2 text-left"},"Flags",-1),et={class:"p-2 text-left"},st=t("th",{class:"p-2 text-left"},"2 character Country Code",-1),ot=t("th",{class:"p-2 text-left"},"3 character Country Code",-1),lt=t("th",{class:"p-2 text-left"},"Native Country Name",-1),at=t("th",{class:"p-2 text-left"},"Alternative Country Name",-1),nt=t("th",{class:"p-2 text-left"},"Country Calling Codes",-1),ct={class:"p-2 text-left"},it={class:"p-2 text-left"},rt=["src","alt"],dt={class:"p-2 text-left"},ut=["onClick"],_t={class:"p-2 text-left"},ht={class:"p-2 text-left"},pt={class:"p-2 text-left"},ft={class:"p-2 text-left"},gt={class:"p-2 text-left"},vt={class:"flex justify-end items-center gap-2"},mt=["onClick"],f=25,bt=N({__name:"HomeView",setup(g){const h=d([]),i=d(""),n=d("asc"),l=d(1),r=d(null),v=async()=>{try{const a=await(await fetch("https://restcountries.com/v3.1/all")).json();console.log(a),h.value=a}catch(o){console.error(o)}};B(()=>{v()});const m=()=>{b(1);const o=i.value.toLowerCase();return h.value.filter(a=>a.name.official.toLowerCase().includes(o))},x=p(()=>{const o=n.value==="asc"?1:-1;return m().sort((a,e)=>a.name.official.localeCompare(e.name.official)*o)}),$=p(()=>Math.ceil(x.value.length/f)),M=p(()=>{const o=(l.value-1)*f,a=o+f;return x.value.slice(o,a)}),S=p(()=>n.value==="asc"?"▲":"▼"),C=()=>{n.value=n.value==="asc"?"desc":"asc"},b=o=>{l.value=o},j=o=>{r.value=o},L=()=>{r.value=null},V=()=>{i.value=""};return(o,a)=>(c(),u("div",null,[O,t("div",Q,[t("div",W,[D(t("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),type:"text",placeholder:"Search by Country name",class:"p-2 border border-solid border-gray-400 rounded-md"},null,512),[[P,i.value]]),t("button",{onClick:V,class:"bg-red-600 text-white px-4 py-2 rounded-md"},"Clear"),t("button",{onClick:C,class:"bg-blue-600 text-white px-4 py-2 rounded-md"}," Sort "+s(n.value==="asc"?"desc":"asc"),1)]),t("table",X,[t("thead",null,[t("tr",Y,[Z,tt,t("th",et,[t("button",{onClick:C},"Country Name "+s(S.value),1)]),st,ot,lt,at,nt])]),t("tbody",null,[(c(!0),u(w,null,k(M.value,(e,y)=>(c(),u("tr",{key:e.cca3},[t("td",ct,s(y+1),1),t("td",it,[t("img",{src:e.flags.png,alt:e.name.official,width:"50",height:"30"},null,8,rt)]),t("td",dt,[t("button",{onClick:xt=>j(e),class:"hover:underline"},s(e.name.official),9,ut)]),t("td",_t,s(e.cca2),1),t("td",ht,s(e.cca3),1),t("td",pt,s(e.name.nativeName),1),t("td",ft,s(e.altSpellings.join(", ")),1),t("td",gt,s(e.idd),1)]))),128))])]),t("div",vt,[(c(!0),u(w,null,k($.value,e=>(c(),u("button",{key:e,onClick:y=>b(e),class:F(["px-4 py-2 text-white rounded-md",e===l.value?"bg-red-400":"bg-red-600"])},s(e),11,mt))),128))])]),r.value?(c(),T(K,{key:0,country:r.value,onCloseModal:L},null,8,["country"])):z("",!0)]))}});export{bt as default};