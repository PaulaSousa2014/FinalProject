<template>
  <div class="section">
    <div class="container">
      <form class="box" @submit.prevent="onSubmit">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              v-model="name"
              class="input"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="field">
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
        </div>
        <div class="field">
          <label class="label">Contraseña</label>
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
          <label class="label">Confirmar contraseña</label>
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
// TODO comprobar que el usuario no esta cadastrado como lo hago?
// const comprobarUsuario = () => {
//     if (email.value ==)
// }
</script>
<style scoped></style>
