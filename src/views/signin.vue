<template>
  <!-- Pestaña de registro de nuevos usuarios -->
  <div v-if="auth.isAuth">
    <!-- Verifica que el usuario no tiene iniciado una sesión. En caso de esta logeado,
       le saltara una alerta -->
       <!-- TODO poner icono en alerta -->
    <article  class="message">
      <div class="message-body">
        ¡Ya has iniciado seccion! <br />
        <br />
        <router-link :to="{ name: 'home' }"> Ir a Home </router-link>
      </div>
    </article>
  </div>
<!-- En caso de no estar logeado, el usuario entrara en la pestaña Registro -->
  <div v-else class="section">
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
          <label class="label">Email*</label>
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
          <label class="label">Contraseña*</label>
          <div class="control has-icons-right">
            <input
              v-model="pass1"
              class="input"
              :type="visibility ? 'text' : 'password'"
              placeholder="*******"
              required
            />
            <span
              @click="visibility = !visibility"
              class="icon is-small is-right is-clickable"
              ><i class="fa-solid fa-eye"></i
            ></span>
          </div>
        </div>
        <div class="field">
          <label class="label">Confirmar contraseña</label>
          <div class="control has-icons-right">
            <!-- Creamos la funcionalidad de que el usuario pueda ver la password que 
                esta introduciendo al clicar en la imagen del ojo en el campo password -->
            <input
              v-model="pass2"
              class="input"
              :type="visibility ? 'text' : 'password'"
              placeholder="*******"
              required
            />
            <span
              @click="visibility = !visibility"
              class="icon is-small is-right is-clickable"
              ><i class="fa-solid fa-eye"></i
            ></span>
          </div>
        </div>
        <!-- Utilizo en type del input password una condicion ternaria para cambiar el contenido 
                del type segun valor bolleano (text o password) para dar funcionalidad a la opción de
                visualizar contraseña mientras escribe -->

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
const visibility = ref(false);

// Función para realizar el registro del usuario y conectar con supabase
const onSubmit = async () => {
  if (comprobarClave() == true) {
    await registro(email.value, pass1.value);
    router.push({ name: "home" });
  }
};
// Función para comprobar que las dos contraseñas introducidas son iguales
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
