import{_ as m,h as _,i as h,j as f,o as n,c as d,a as e,l as v,m as b,q as u,b as g,w as o,v as a,F as y,n as S}from"./file_index.f9643ec2.js";_();h();ref("");const V={data(){return{imgSrc:""}},methods:{onFile(l){const s=l.target.files;if(!s.length)return;const i=new FileReader;i.readAsDataURL(s[0]),i.onload=()=>this.imgSrc=i.result}}},w={key:0,class:"message"},N={class:"message-body"},k={class:"section"},C={class:"container"},F={class:"field"},U=e("label",{class:"label"},"Seleccionar foto de perfil: ",-1),q=["src"],A={class:"field"},B=e("label",{class:"label"},"Name",-1),R={class:"control"},T={class:"field"},D=e("label",{class:"label"},"Email",-1),E={class:"control"},M={class:"field"},P=e("label",{class:"label"},"Contrase\xF1a actual",-1),j={class:"control"},H={class:"field"},I=e("label",{class:"label"},"Nueva contrase\xF1a",-1),L={class:"control"},z={class:"field"},G=e("label",{class:"label"},"Confirmar Nueva contrase\xF1a",-1),J={class:"control"},K=e("div",{class:"field"},[e("div",{class:"control"},[e("input",{class:"button is-success is-light is-outlined",type:"submit",placeholder:"Text input"})])],-1);function O(l,s,i,Q,r,c){const p=f("router-link");return n(),d(y,null,[e("div",null,[l.auth.isAuth?(n(),d("article",w,[e("div",N,[v(p,{to:{name:"home"}},{default:b(()=>[S(" Ir a Home ")]),_:1})])])):u("",!0)]),e("div",k,[e("div",C,[e("form",{class:"box",onSubmit:s[6]||(s[6]=g((...t)=>l.onSubmit&&l.onSubmit(...t),["prevent"]))},[e("div",F,[U,e("input",{type:"file",onChange:s[0]||(s[0]=(...t)=>c.onFile&&c.onFile(...t))},null,32),r.imgSrc?(n(),d("img",{key:0,src:r.imgSrc},null,8,q)):u("",!0)]),e("div",A,[B,e("div",R,[o(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>l.name=t),class:"input",type:"text",placeholder:"Name"},null,512),[[a,l.name]])])]),e("div",T,[D,e("div",E,[o(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>l.email=t),class:"input",type:"email",placeholder:"e.g. alex@example.com",required:""},null,512),[[a,l.email]])])]),e("div",M,[P,e("div",j,[o(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>l.pass1=t),class:"input",type:"password",placeholder:"********",required:""},null,512),[[a,l.pass1]])])]),e("div",H,[I,e("div",L,[o(e("input",{"onUpdate:modelValue":s[4]||(s[4]=t=>l.pass1=t),class:"input",type:"password",placeholder:"*******",required:""},null,512),[[a,l.pass1]])])]),e("div",z,[G,e("div",J,[o(e("input",{"onUpdate:modelValue":s[5]||(s[5]=t=>l.pass2=t),class:"input",type:"password",placeholder:"*******",required:""},null,512),[[a,l.pass2]])])]),K],32)])])],64)}const X=m(V,[["render",O]]);export{X as default};
