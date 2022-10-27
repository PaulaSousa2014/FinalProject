<template>
<!-- <div> -->
      <!-- <article v-if="auth.isAuth" class="message">
          <div class="message-body">
            
            <router-link :to="{ name: 'home' }"> Ir a Home </router-link>
          </div>
      </article>
  </div> -->

  <div class="section">
    <div class="box alerta"> En construcción. Introducir foto de perfil no disponible.
<progress class="progress is-dark" max="100">30%</progress>

</div>

    <div class="container">
      <form class="box" @submit.prevent="onSubmit">
        <div class="field">
            <label class="label">Seleccionar foto de perfil: </label>
    <input type="file" @change="onFile" />
    <img :src="imgSrc" v-if="imgSrc" />
        </div>
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input
              v-model="name"
              class="input"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <br>
       
        <!-- <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              v-model="email"
              class="input"
              type="email"
              placeholder="e.g. alex@example.com"
              required
            />
          </div>
        </div> -->
        <!-- <label class="label">Cambiar contraseña</label> -->
         <!-- Cambiar contraseña -->
    
    
     
        
              
        <label class="label">Cambiar contraseña</label> 
        <br>

        <div class="field"></div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="email"
                class="input"
                type="email"
                placeholder="e.g. alex@example.com"
              />
            </div>
          </div>
       
        <div class="field">
          <label class="label">Nueva contraseña</label>
          <div class="control has-icons-right">
            <input
              v-model="pass1"
              class="input"
              :type="visibility ? 'text': 'password'"
              placeholder="*******"
              required
            />
            <span @click="visibility=!visibility" class="icon is-small is-right is-clickable"><i class="fa-solid fa-eye"></i></span>
          </div>
        </div>
        <div class="field">
          <label class="label">Confirmar Nueva contraseña</label>
          <div class="control has-icons-right">
            <input
              v-model="pass2"
              class="input"
              :type="visibility ? 'text': 'password'"
              placeholder="*******"
              required
            />
            <span @click="visibility=!visibility" class="icon is-small is-right is-clickable"><i class="fa-solid fa-eye"></i></span>
          </div>
        </div>


        <div class="field">
          <div class="control">
            <input
              class="button is-success is-light is-outlined"
              type="submit"
              placeholder="Text input"
            />
          </div>
        </div>
      </form>
    
  
     
    </div>
  </div>
  </template>
  <script setup>


  //TODO pasar para composite

  // export default {
  //   data() {
  //     return {
  //       imgSrc: ''
  //     }
  //   },
  //   methods: {
  //     onFile(e) {
  //       const files = e.target.files
  //       if (!files.length) return
  
  //       const reader = new FileReader()
  //       reader.readAsDataURL(files[0])
  //       reader.onload = () => (this.imgSrc = reader.result)
  //     }
  //   }
  // }

  import { ref } from "vue";
import { useRouter } from "vue-router";
import { registro } from "../api/index";
import { useAuthStore } from "../store";
import { updateUser } from "../api/index";

const auth = useAuthStore();

const router = useRouter();
const name = ref("");
const email = ref("");
const pass1 = ref("");
const pass2 = ref("");
const visibility = ref(false);


const onSubmit = async () => {
  if (comprobarClave() == true) {
    await updateUser(email.value, pass1.value);
    router.push({ name: "home" });
  }
};
const comprobarClave = () => {
  if (pass1.value !== pass2.value) {
    alert("Las dos contraseñas no coinciden");
    return false;
  } else {
    return true;
  }
};
  
  </script>
  <style>
img{
    border-radius: 40%;
    height: 100px;
    
}
.alerta{
    margin-top: 50px;
    margin-left: 20%;
    margin-right: 20%;
    background-color: rgb(190, 137, 137);
    font-weight: bold;
}
</style>