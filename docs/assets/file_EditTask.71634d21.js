import{o as a,c as n,a as t,w as l,v as i,b as d,B as r}from"./file_index.10efeb9b.js";const c={class:"field"},u=t("label",{class:"label"},"T\xEDtulo*",-1),p={class:"control"},b={class:"field"},v=t("label",{class:"label"},"Descripci\xF3n*",-1),m={class:"control"},_=r('<div class="field is-grouped"><div class="control"><button class="button is-link" type="submit">Actualizar Tarea</button></div><div class="control"><button class="button is-link is-danger" type="button">Cancelar</button></div></div>',1),k={__name:"EditTask",setup(f){return(e,s)=>(a(),n("form",{class:"box",onSubmit:s[2]||(s[2]=d((...o)=>e.onSubmit&&e.onSubmit(...o),["prevent"]))},[t("div",c,[u,t("div",p,[l(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.title=o),class:"input",type:"text",placeholder:"nserte un t\xEDtulo",required:""},null,512),[[i,e.title]])])]),t("div",b,[v,t("div",m,[l(t("textarea",{"onUpdate:modelValue":s[1]||(s[1]=o=>e.description=o),class:"textarea",placeholder:"Describa la tarea",required:""},null,512),[[i,e.description]])])]),_],32))}};export{k as default};
