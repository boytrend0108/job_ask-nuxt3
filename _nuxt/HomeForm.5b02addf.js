import{_ as i,o as f,c as v,a as t,E as V,r as a,G as c,H as u,u as d,I as p,b,w as g,e as w,J as S,p as B,d as U}from"./entry.135bac40.js";const k={},D={class:"btn"};function H(s,n){return f(),v("div",null,[t("button",D,[V(s.$slots,"default",{},void 0,!0)])])}const N=i(k,[["render",H],["__scopeId","data-v-6dd8cc46"]]);const h=s=>(B("data-v-24d1c0e9"),s=s(),U(),s),$=["onSubmit"],E=h(()=>t("h2",{class:"form__title"},"Записаться на бесплатную консультацию",-1)),F=h(()=>t("p",{class:"form__notes"},"Если у вас остались вопросы или вы желаете получить услугу - заполните форму ниже и наш менеджер свяжется с вами",-1)),M={__name:"HomeForm",setup(s){const n=a(""),l=a(""),_=a(""),r=a(""),x=a(null),y=({target:m})=>{const e={name:n.value,email:l.value,phone:_.value,message:r.value};console.log(e),m.reset()};return(m,e)=>{const I=N;return f(),v("div",null,[t("form",{class:"form",ref_key:"form",ref:x,onSubmit:S(y,["prevent"])},[E,F,c(t("input",{type:"text",class:"form__input",name:"name",placeholder:"Ваше имя","onUpdate:modelValue":e[0]||(e[0]=o=>p(n)?n.value=o:null)},null,512),[[u,d(n)]]),c(t("input",{type:"email",class:"form__input",name:"email",placeholder:"Ваш email","onUpdate:modelValue":e[1]||(e[1]=o=>p(l)?l.value=o:null)},null,512),[[u,d(l)]]),c(t("input",{type:"tel",class:"form__input",name:"phone",placeholder:"Ваше телефон","onUpdate:modelValue":e[2]||(e[2]=o=>p(_)?_.value=o:null)},null,512),[[u,d(_)]]),c(t("textarea",{class:"form__textarea",placeholder:"Интересующая услуга или вопрос","onUpdate:modelValue":e[3]||(e[3]=o=>p(r)?r.value=o:null),rows:"6"},null,512),[[u,d(r)]]),b(I,{class:"form__btn"},{default:g(()=>[w("Отправить")]),_:1})],40,$)])}}},W=i(M,[["__scopeId","data-v-24d1c0e9"]]);export{W as _,N as a};