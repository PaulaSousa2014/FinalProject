<template>
    <div class="login">
  <div class="section">
    <div>
      <article v-if="auth.isAuth" class="message">
        <div class="message-body">
          <router-link :to="{ name: 'home' }"> Ir a Home </router-link>
        </div>
      </article>
    </div>
    <div class="container">
      <form class="box" @submit.prevent="onSubmit">
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
          <label class="label">Contraseña</label>
          <div class="control">
            <input
              v-model="password"
              class="input"
              type="password"
              placeholder="*******"
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
            <br>
            <br>
           <h3>¿Has olvidado tu contraseña? </h3> <router-link :to="{ name: 'password' }"> Recuperar contraseña </router-link>
          </div>
        </div>
      </form>
      <div>
        ¿Todavía no tienes una cuenta?
        <router-link :to="{ name: 'signin' }"> Registrar </router-link>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "../api/index";
import { useAuthStore } from "../store";



const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");
const auth = useAuthStore();

const onSubmit = async () => {
  const response = await login(email.value, password.value);
  if (response) {
    //store
    auth.login(response);

    // Nos redirige al home
    router.push({ name: "home" });
  } else {
    alert("Credenciales equivocadas.");
  }
};
</script>
<style scoped>
@media (min-width: 1000px) {
  .login {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
