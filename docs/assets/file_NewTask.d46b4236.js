import{r as i,y as _,u as p,h as v,o as b,c as h,a as e,w as n,v as r,b as m,B as f,C as x}from"./file_index.10efeb9b.js";const k=["onSubmit"],S={class:"field"},w=e("label",{class:"label"},"T\xEDtulo*",-1),T={class:"control"},y={class:"field"},B=e("label",{class:"label"},"Descripci\xF3n*",-1),V={class:"control"},D=f('<div class="field is-grouped"><div class="control"><button class="button is-link" type="submit">A\xF1adir tarea</button></div><div class="control"><button class="button is-link is-danger">Cancelar</button></div></div>',1),q={__name:"NewTask",setup(N){const s=i(""),a=i(""),c=_();p();const d=v(),u=async()=>{const l={user_id:d.id,title:s.value,description:a.value};await x(l),alert("Tarea creada con exito"),c.push({name:"home"})};return(l,t)=>(b(),h("form",{class:"box",onSubmit:m(u,["prevent"])},[e("div",S,[w,e("div",T,[n(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o),class:"input",type:"text",placeholder:"Inserte un t\xEDtulo",required:""},null,512),[[r,s.value]])])]),e("div",y,[B,e("div",V,[n(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=o=>a.value=o),class:"textarea",placeholder:"Describa la tarea",required:""},null,512),[[r,a.value]])])]),D],40,k))}};export{q as default};