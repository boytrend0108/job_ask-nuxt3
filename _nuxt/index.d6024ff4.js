import{_ as u,r as $,t as w,o as a,c as f,a as t,e as m,f as l,u as h,p as v,d as x,g as H,F as b,h as y,b as i,w as p,i as I,j as k,k as S}from"./entry.e7731ba9.js";import{_ as O}from"./client-only.74406186.js";import{a as F,_ as B}from"./HomeForm.3a2b23d0.js";import{_ as C}from"./nuxt-link.04da8806.js";import{u as N}from"./fetch.037b3429.js";const E=e=>(v("data-v-d9b1b7fe"),e=e(),x(),e),M={class:"first-screen"},V={class:"container"},q={class:"first-screen__title"},A=E(()=>t("br",null,null,-1)),L={class:"first-screen__typer"},U={__name:"HomeFirstScreen.",setup(e){const s=$("");return w(["Ждёт ","Hанимает "],s),(c,o)=>(a(),f("section",M,[t("div",V,[t("h1",q,[m(" Работа это просто."),A,m(" Европа "),t("span",L,l(h(s)),1)])])]))}},W=u(U,[["__scopeId","data-v-d9b1b7fe"]]);const j=e=>(v("data-v-ef3f3aa7"),e=e(),x(),e),D={class:"offer"},T={class:"offer__description"},Y={class:"offer__subtitle"},z={class:"offer__title"},G={class:"offer__list"},J={class:"offer__img-wr"},K=["src"],P={class:"offer__contact"},Q={class:"offer__subtitle-contact"},R=j(()=>t("p",{class:"offer__text"},"Именно поэтому собрали всю информацию косательно виз в одном месте",-1)),X={__name:"HomeOffer",props:["offer"],setup(e){return(s,n)=>{const c=H("font-awesome-icon"),o=O,_=F,d=C;return a(),f("article",D,[t("div",T,[t("p",Y,l(e.offer.subtitle),1),t("h2",z,l(e.offer.title),1),t("ul",G,[(a(!0),f(b,null,y(e.offer.list,(r,g)=>(a(),f("li",{class:"offer__item",key:g},l(r),1))),128))])]),t("div",J,[t("img",{class:"offer__img",src:`${e.offer.img}`,alt:"Шенген виза",width:"380",height:"215"},null,8,K)]),t("div",P,[t("h3",Q,[i(o,null,{default:p(()=>[i(c,{icon:["far","address-card"],class:"offer__icon"})]),_:1}),m(" "+l(e.offer.title_2),1)]),R,i(d,{to:"/contact"},{default:p(()=>[i(_,{class:"offer__btn"},{default:p(()=>[m("Узнать больше")]),_:1})]),_:1})])])}}},Z=u(X,[["__scopeId","data-v-ef3f3aa7"]]),ee=e=>{var s={root:null,rootMargin:"0px",threshold:.1};const n=function(_,d){_.forEach(r=>{r.isIntersecting&&e(r.target)})},c=new IntersectionObserver(n,s);var o=document.querySelectorAll(".target");o.forEach(_=>c.observe(_))};const te={class:"container"},se={class:"offers"},oe={__name:"HomeOffers",async setup(e){let s,n;const{data:c}=([s,n]=I(()=>N("/api/home","$W5qld73k0y")),s=await s,n(),s);return k(()=>{ee(o);function o(_){_.style.opacity="1",_.style.transform="translateY(0)"}}),(o,_)=>{const d=Z;return a(),f("div",te,[t("section",se,[(a(!0),f(b,null,y(h(c),r=>(a(),S(d,{key:r.id,offer:r,class:"target"},null,8,["offer"]))),128))])])}}},_e=u(oe,[["__scopeId","data-v-5a7bf0c9"]]);const ne={},ce={class:"home"},ae={class:"home__form"};function re(e,s){const n=W,c=_e,o=B;return a(),f("div",ce,[i(n,{class:"home__first-screen"}),i(c,{class:"home__offers"}),t("section",ae,[i(o)])])}const ue=u(ne,[["render",re],["__scopeId","data-v-a68cb956"]]);export{ue as default};