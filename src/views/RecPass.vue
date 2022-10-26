<template>
    <!-- Cambiar contraseña -->
    <div class="section">
    <div class="container">
      <form class="box" @submit.prevent="onSubmit">
        
              
        <label class="label">Cambiar contraseña</label> 
       
        <div class="field">
          <label class="label">Nueva contraseña</label>
          <div class="control">
            <input
              v-model="pass1"
              class="input"
              type="password"
              placeholder="*******"
              required
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Confirmar Nueva contraseña</label>
          <div class="control">
            <input
              v-model="pass2"
              class="input"
              type="password"
              placeholder="*******"
              required
            />
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
import { registro } from "../api/index";
import { useAuthStore } from "../store";

const auth = useAuthStore();

const router = useRouter();
const name = ref("");
const email = ref("");
const pass1 = ref("");
const pass2 = ref("");

const onSubmit = async () => {
  if (comprobarClave() == true) {
    await registro(email.value, pass1.value);
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