import{_ as h,h as v,r as o,i as f,j as b,o as l,c as r,a as e,k as u,m as x,n as g,A as w,b as S,w as k,v as y,l as E,p as I,g as V,E as C}from"./file_index.feef2595.js";const a=s=>(I("data-v-8248ce6f"),s=s(),V(),s),N={class:"login"},P={class:"section"},R={key:0,class:"message"},A={class:"message-body"},B={class:"container"},T=["onSubmit"],M=a(()=>e("div",{class:"field"},null,-1)),j={class:"field"},z=a(()=>e("label",{class:"label"},"Introduzca tu Email",-1)),D={class:"control"},H=a(()=>e("input",{class:"button is-success is-light is-outlined",type:"submit",placeholder:"Text input"},null,-1)),U={__name:"RecuperarPasswor",setup(s){const d=v();o("");const t=o("");o("");const c=f(),_=async()=>{console.log("Prueba onSubmit");const n=await C(t.value);alert(n?"Email no registrado":"Hemos enviado un link de recuperaci\xF3n a tu correo elect\xF3nico"),d.push({name:"signin"})};return(n,i)=>{const p=b("router-link");return l(),r("div",N,[e("div",P,[e("div",null,[u(c)&&u(c).isAuth?(l(),r("article",R,[e("div",A,[x(p,{to:{name:"perfil"}},{default:g(()=>[E(" Cambiar contrase\xF1a ")]),_:1})])])):w("",!0)]),e("div",B,[e("form",{class:"box",onSubmit:S(_,["prevent"])},[M,e("div",j,[z,e("div",D,[k(e("input",{"onUpdate:modelValue":i[0]||(i[0]=m=>t.value=m),class:"input",type:"email",placeholder:"e.g. alex@example.com"},null,512),[[y,t.value]])]),H])],40,T)])])])}}},F=h(U,[["__scopeId","data-v-8248ce6f"]]);export{F as default};
