<template>
    <!-- Has olvidado tu password? -->
    <div class="login">
  <div class="section">
    <div>
      <article v-if="auth && auth.isAuth" class="message">
        <div class="message-body">
          <router-link :to="{ name: 'perfil' }"> Cambiar contraseña </router-link>
        </div>
      </article>
    </div>
    <div class="container">

      <form class="box" @submit.prevent="onSubmit">
        
        <div class="field"></div>
        <div class="field">
          <label class="label">Introduzca tu Email</label>
          <div class="control">
            <input
              v-model="email"
              class="input"
              type="email"
              placeholder="e.g. alex@example.com"
            />
          </div>
          <input
              class="button is-success is-light is-outlined"
              type="submit"
              placeholder="Text input"
            />
        </div>
        
      </form>
    
    </div>
  </div>
</div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login, updateUser } from "../api/index";
import { useAuthStore } from "../store";
import { recEmail} from "../api"


const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");
const auth = useAuthStore();

const onSubmit = async () => {
  const response = await recEmail(email.value);
  if (response) {
    alert("Email no registrado");
  } else{
    alert('Hemos enviado un link de recuperación a tu correo electónico')
  }
  router.push({ name: 'signin' })
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
.button{
    margin-top: 10px;
}
</style>
