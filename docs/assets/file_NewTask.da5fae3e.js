import{_ as h,r as u,x as v,u as m,i as f,o as x,c as k,a as s,w as d,v as r,b as T,d as w,p as S,h as y,B as g}from"./file_index.6249dd52.js";const e=t=>(S("data-v-c1bba2c4"),t=t(),y(),t),I={class:"caja"},N=["onSubmit"],B={class:"field"},V=e(()=>s("label",{class:"label"},"T\xEDtulo*",-1)),q={class:"control"},D={class:"field"},C=e(()=>s("label",{class:"label"},"Descripci\xF3n*",-1)),M={class:"control"},U=e(()=>s("div",{class:"control"},[s("button",{class:"button is-link is-success is-light is-outlined",type:"submit"},[s("i",{class:"fa-solid fa-square-plus"})])],-1)),j=e(()=>s("i",{class:"fa-solid fa-ban"},null,-1)),A=e(()=>s("br",null,null,-1)),E=e(()=>s("br",null,null,-1)),R=e(()=>s("br",null,null,-1)),z=e(()=>s("br",null,null,-1)),F={__name:"NewTask",setup(t){const a=u(""),o=u(""),n=v();m();const _=f(),p=async()=>{const i={user_id:_.id,title:a.value,description:o.value};await g(i),alert("Tarea creada con exito"),n.push({name:"home"})},b=()=>{a.value="",o.value="",n.push({name:"home"})};return(i,l)=>(x(),k("div",I,[s("form",{class:"box",onSubmit:w(p,["prevent"])},[s("div",B,[V,s("div",q,[d(s("input",{"onUpdate:modelValue":l[0]||(l[0]=c=>a.value=c),class:"input",type:"text",placeholder:"Inserte un t\xEDtulo",required:""},null,512),[[r,a.value]])])]),s("div",D,[C,s("div",M,[d(s("textarea",{"onUpdate:modelValue":l[1]||(l[1]=c=>o.value=c),class:"textarea",placeholder:"Describa la tarea",required:""},null,512),[[r,o.value]])])]),s("div",{class:"field is-grouped"},[U,s("div",{class:"control"},[s("button",{onClick:b,class:"button is-link is-danger is-light is-outlined",type:"button"},[j,T("Cancelar ")])])])],40,N),A,E,R,z]))}},H=h(F,[["__scopeId","data-v-c1bba2c4"]]);export{H as default};