import{_ as h,r as i,y as b,u as m,h as f,o as k,c as x,a as e,w as u,v as d,b as w,p as S,g as T,C as y}from"./file_index.ef6dd641.js";const c=s=>(S("data-v-0a1c5659"),s=s(),T(),s),g=["onSubmit"],I={class:"field"},N=c(()=>e("label",{class:"label"},"T\xEDtulo*",-1)),B={class:"control"},C={class:"field"},D=c(()=>e("label",{class:"label"},"Descripci\xF3n*",-1)),V={class:"control"},q=c(()=>e("div",{class:"control"},[e("button",{class:"button is-link is-success is-light is-outlined",type:"submit"},"A\xF1adir tarea")],-1)),A={__name:"NewTask",setup(s){const t=i(""),a=i("");i(!1);const n=b();m();const _=f(),p=async()=>{const r={user_id:_.id,title:t.value,description:a.value};await y(r),alert("Tarea creada con exito"),n.push({name:"home"})},v=()=>{t.value="",a.value="",n.push({name:"home"})};return(r,o)=>(k(),x("form",{class:"box",onSubmit:w(p,["prevent"])},[e("div",I,[N,e("div",B,[u(e("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>t.value=l),class:"input",type:"text",placeholder:"Inserte un t\xEDtulo",required:""},null,512),[[d,t.value]])])]),e("div",C,[D,e("div",V,[u(e("textarea",{"onUpdate:modelValue":o[1]||(o[1]=l=>a.value=l),class:"textarea",placeholder:"Describa la tarea",required:""},null,512),[[d,a.value]])])]),e("div",{class:"field is-grouped"},[q,e("div",{class:"control"},[e("button",{onClick:v,class:"button is-link is-danger is-light is-outlined",type:"button"},"Cancelar")])])],40,g))}},U=h(A,[["__scopeId","data-v-0a1c5659"]]);export{U as default};
