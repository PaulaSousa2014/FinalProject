import{i as x,x as g,r as l,l as k,m as w,o as u,c as r,a as s,b as _,n as C,q as V,d as N,w as i,v as p,z as v,A as q}from"./file_index.6249dd52.js";const S={key:0},U={class:"message"},A={class:"message-body"},B=s("br",null,null,-1),M=s("br",null,null,-1),T={key:1,class:"section"},D={class:"container"},E=["onSubmit"],$={class:"field"},z=s("label",{class:"label"},"Name",-1),H={class:"control"},I={class:"field"},L=s("label",{class:"label"},"Email*",-1),R={class:"control"},Y={class:"field"},j=s("label",{class:"label"},"Contrase\xF1a*",-1),F={class:"control has-icons-right"},G=["type"],J=s("i",{class:"fa-solid fa-eye"},null,-1),K=[J],O={class:"field"},P=s("label",{class:"label"},"Confirmar contrase\xF1a",-1),Q={class:"control has-icons-right"},W=["type"],X=s("i",{class:"fa-solid fa-eye"},null,-1),Z=[X],ss=s("div",{class:"field"},[s("div",{class:"control"},[s("input",{class:"button is-success is-light is-outlined",type:"submit",placeholder:"Text input"})])],-1),ls={__name:"signin",setup(es){const h=x(),m=g(),d=l(""),n=l(""),a=l(""),c=l(""),o=l(!1),b=async()=>{f()==!0&&(await q(n.value,a.value),m.push({name:"home"}))},f=()=>a.value!==c.value?(alert("Las dos contrase\xF1as no coinciden"),!1):!0;return(ts,e)=>{const y=k("router-link");return w(h).isAuth?(u(),r("div",S,[s("article",U,[s("div",A,[_(" \xA1Ya has iniciado seccion! "),B,M,C(y,{to:{name:"home"}},{default:V(()=>[_(" Ir a Home ")]),_:1})])])])):(u(),r("div",T,[s("div",D,[s("form",{class:"box",onSubmit:N(b,["prevent"])},[s("div",$,[z,s("div",H,[i(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>d.value=t),class:"input",type:"text",placeholder:"Name"},null,512),[[p,d.value]])])]),s("div",I,[L,s("div",R,[i(s("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t),class:"input",type:"email",placeholder:"e.g. alex@example.com",required:""},null,512),[[p,n.value]])])]),s("div",Y,[j,s("div",F,[i(s("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),class:"input",type:o.value?"text":"password",placeholder:"*******",required:""},null,8,G),[[v,a.value]]),s("span",{onClick:e[3]||(e[3]=t=>o.value=!o.value),class:"icon is-small is-right is-clickable"},K)])]),s("div",O,[P,s("div",Q,[i(s("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>c.value=t),class:"input",type:o.value?"text":"password",placeholder:"*******",required:""},null,8,W),[[v,c.value]]),s("span",{onClick:e[5]||(e[5]=t=>o.value=!o.value),class:"icon is-small is-right is-clickable"},Z)])]),ss],40,E)])]))}}};export{ls as default};
