<template>
  <!-- Header con su navBar -->
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="logo">
        <img src="./assets/vectorstock_32166008.jpg" alt="" />
        <a class="navbar-item"
          ><router-link class="checked" :to="{ name: 'login' }"
            >Checked App</router-link
          ></a
        >
      </div>
      <!-- Menú Hamburguesa que aparece en pantalla móvil y tablet -->
      <div class="burguer">
        <a
          role="button"
          class="navbar-burger"
          data-target="navMenu"
          aria-label="menu"
          aria-expanded="false"
          @click="isActive = !isActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <!-- Pestañas del burger Menu -->

        <!-- Visualización en cerrado: -->

        <div v-if="isActive" class="navbar-menu" id="navMenu">
         
          <div class="navbar-start1">
            <a class="navbar-item">
              <router-link class="home" :to="{ name: 'home' }"
                >Home</router-link
              >
            </a>
            <a class="navbar-item">
              <router-link class="links" :to="{ name: 'calendario' }"
                >Calendario</router-link
              >
            </a>
            <a class="navbar-item">
              <router-link class="links" :to="{ name: 'perfil' }"
                >Editar Perfil</router-link
              >
            </a>
            <a class="navbar-item">
              <router-link class="links" :to="{ name: 'login' }"
                >Iniciar Sesión</router-link
              >
            </a>
            <a @click="authStore.logout()" class="navbar-item links">
              Cerrar sesion
            </a>
          </div>
        </div>

        <!-- Visualización en abierto: -->

        <div v-else class="navbar-menu is-active" id="navMenu">
          
          <div class="navbar-start">
            <a @click="isActive = !isActive" class="navbar-item">
              <router-link class="home" :to="{ name: 'home' }"
                >Home</router-link
              >
            </a>
            <a @click="isActive = !isActive" class="navbar-item">
              <router-link class="links" :to="{ name: 'calendario' }"
                >Calendario</router-link
              >
            </a>
            <a @click="isActive = !isActive" class="navbar-item">
              <router-link class="links" :to="{ name: 'perfil' }"
                >Editar Perfil</router-link
              >
            </a>
            <a @click="isActive = !isActive" class="navbar-item">
              <router-link class="links" :to="{ name: 'login' }"
                >Iniciar Sesión</router-link
              >
            </a>
            <a @click="cerrar" class="navbar-item links"> Cerrar sesion </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>

  <!-- Link para el componente Footer -->

  <Footer />
</template>
<script setup>
import { useAuthStore } from "./store";
import { ref } from "vue";
import Footer from "./components/Footer.vue";

const authStore = useAuthStore();

// Función para abrir o cerrar el menú Hamburguesa.
const isActive = ref(true);
const cerrar = () => {
  authStore.logout();
  isActive.value = !isActive.value;
};
</script>
<style scoped>
.home {
  color: #215c3fe4;
  font-weight: bold;
  font-size: 1.1rem;
  text-shadow: 0.5px 0.5px rgb(169, 162, 162);
  font-family: monospace;
}
.navbar-start {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.navbar-start1 {
  font-family: monospace;
  display: flex;
  flex-direction: row;
  padding-top: 7px;
}
.checked {
  color: #215c3fe4;
  font-size: 1.3rem;
  text-shadow: 1px 1px rgb(169, 162, 162);
  font-family: monospace;
  padding-top: 4px;
  font-weight: bold;
}
.navbar-brand {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3px;
  margin-top: 3px;
}

#navMenu {
  background-color: #eee;
}
.links {
  color: rgb(146, 145, 145);
}
a:hover {
  /* background-color: #eee; */
  text-decoration: underline;
  text-decoration-color: white;
}
img {
  width: 70px;
  height: 50px;
  padding-left: 20px;
  border-radius: 0;
}
.logo {
  display: flex;
}
</style>
