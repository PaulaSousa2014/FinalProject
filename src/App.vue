<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="logo">
      <img src="./assets/vectorstock_32166008.jpg" alt="">
      <a class="navbar-item"
        ><router-link class="checked" :to="{ name: 'login' }"
          >Checked App</router-link
        ></a
      >
    </div>
      <div class="burguer">
      <a
        role="button"
        class="navbar-burger"
        data-target="navMenu"
        aria-label="menu"
        aria-expanded="false"
        @click="isActive=!isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

      <!-- Pestañas del burger Menu -->

      <!-- Visualización en cerrado: -->

      <div v-if="isActive" class="navbar-menu" id="navMenu">
        <!-- navbar-start, navbar-end... -->

        <div class="navbar-start1">
          <a class="navbar-item">
            <router-link class="links" :to="{ name: 'home' }">Home</router-link>
          </a>
          <a class="navbar-item">
            <router-link class="links" :to="{ name: 'calendario' }">Calendario</router-link>
          </a>
          <a class="navbar-item">
            <router-link class="links" :to="{ name: 'perfil' }">Editar Perfil</router-link>
          </a>
          <a  class="navbar-item">
            <router-link class="links" :to="{ name: 'login' }">Iniciar Sesión</router-link>
          </a>
          <a  @click="authStore.logout()" class="navbar-item links"> Cerrar sesion </a>
        </div>
      </div>

      <!-- Visualización en abierto: -->

      <div v-else class="navbar-menu is-active" id="navMenu">
        <!-- navbar-start, navbar-end... -->

        <div class="navbar-start">
          <a @click="isActive=!isActive" class="navbar-item">
            <router-link class="links" :to="{ name: 'home' }">Home</router-link>
          </a>
          <a @click="isActive=!isActive" class="navbar-item">
            <router-link class="links" :to="{ name: 'calendario' }">Calendario</router-link>
          </a>
          <a @click="isActive=!isActive" class="navbar-item">
            <router-link class="links" :to="{ name: 'perfil' }">Editar Perfil</router-link>
          </a>
          <a @click="isActive=!isActive" class="navbar-item">
            <router-link  class="links" :to="{ name: 'login' }">Iniciar Sesión</router-link>
          </a>
          <a @click="authStore.logout()" class="navbar-item links"> Cerrar sesion </a>
        </div>
      </div>
    </div>
    </div>

    <!-- <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
           <a class="button is-info is-light is-outlined is-responsive">
            <router-link :to="{name: 'signin'}">Registrar</router-link>
          </a> 
           <a class="button is-info is-light is-outlined is-responsive">
            <router-link :to="{name: 'login'}">Login</router-link>
          </a> 
          
        </div>
      </div>
    </div> -->
  </nav>

  <router-view></router-view>
</template>
<script setup>
import { useAuthStore } from "./store";
import { ref } from "vue";
const authStore = useAuthStore();

const isActive = ref(true);

</script>
<style scoped>
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
  color: rgb(91, 90, 90);
  font-family: monospace;
  padding-top: 7px;
  font-weight: bold;
  
}
.navbar-brand{
display: flex;
justify-content: space-between;
align-items: flex-start;
margin-bottom: 10px;
margin-top: 10px;
}

#navMenu{
    background-color: #eee;
}
.links{
  color: rgb(146, 145, 145);
}
a:hover {
  background-color: #eee;
}
img{
  width: 70px;
  height: 50px;
  padding-left: 20px;
  border-radius: 0;
}
.logo{
  display: flex;
}

</style>
