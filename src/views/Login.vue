<template>
  <!-- Pestaña Login. He creado primeramente esta pestaña y después me pareció mejor 
    crear un componente solo para el Login para poder hacer llamadas dentro de otras pestañas.
  La diferencia con el componente es que en este caso siempre verificamos si el usuario ya estaba 
  logeado al clicar en esta pestaña-->

  <div class="loginContainer">
    <div>
      <!-- Verificamos si el usuario ya esta logeado. En caso positivo, le avisamos que ya tiene
         una sesión iniciada y le redireccionamos a Home -->
      <article v-if="auth.isAuth" class="message">
        <div class="message-body">
          <div class="icon-text">
            <div class="icon-text">
              <span class="icon has-text-warning">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
              <span>Ya has iniciado sesión</span>
            </div>
          </div>

          <router-link :to="{ name: 'home' }"> Ir a Home </router-link>
        </div>
      </article>

      <!-- En caso de no estar logeado, el usuario entra en el formulario de LogIn con 
        campos de relleño obligatorio-->
      <div v-else class="container">
        <form class="box" @submit.prevent="onSubmit">
          <div class="field"></div>
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
            <label class="label">Password*</label>
            <div class="control has-icons-right">
              <!-- Creamos la funcionalidad de que el usuario pueda ver la password que 
                esta introduciendo al clicar en la imagen del ojo en el campo password -->
              <input
                v-model="password"
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

              <!-- Utilizo en type del input password una condicion ternaria para cambiar el contenido 
                del type segun valor bolleano (text o password) para dar funcionalidad a la opción de
                visualizar contraseña mientras escribe -->
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input
                class="button is-success is-light is-outlined"
                type="submit"
                placeholder="Text input"
              />
              <br />
              <br />
              <!-- Enlaces para la pesataña Recuperar Passwor para que el usuario pueda recuperar su
              cuenta caso haya olvidado su contraseña -->
              <h3>¿Has olvidado tu contraseña?</h3>
              <router-link class="linkPass" :to="{ name: 'password' }">
                Recuperar contraseña
              </router-link>
            </div>
          </div>
        </form>
        <!-- Enlace para la pestana SignIn para los usuarios que no estén registrados en la web -->
        <div>
          ¿Todavía no tienes una cuenta?
          <router-link class="linkPass" :to="{ name: 'signin' }">
            Registrar
          </router-link>
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
// TODO No terminé de conectar el Nombre del usuario con la base de datos
const name = ref("");
const email = ref("");
const password = ref("");
const auth = useAuthStore();
const visibility = ref(false);

// Función para hacer el login segun datos registrados en supabase
const onSubmit = async () => {
  const response = await login(email.value, password.value);
  if (response) {
    //Conección con store
    auth.login(response);

    // Nos redirige al home
    router.push({ name: "home" });
  } else {
    alert("Credenciales equivocadas.");
  }
};
</script>
<style scoped>
.container {
  margin-top: 50px;
  width: 200%;
}
.linkPass {
  color: rgb(78, 77, 77);
  text-decoration: underline;
}

@media (min-width: 1000px) {
  .container {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
  }
}

/* .loginContainer {
  display: flex;
  justify-content: center;
  width: 100%;
} */
</style>
