<template>
    <!-- Cambiar contraseña -->
    <div class="section">
    <div class="container">
      <form class="box" @submit.prevent="onSubmit">
        
              
        <label class="label">Cambiar contraseña</label> 

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
import { ref } from "vue";
import { useRouter } from "vue-router";
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
<style scoped></style>