<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- <img src="./assets/vectorstock_32058494.png" alt=""> -->
      <a class="navbar-item"
        ><router-link class="checked" :to="{ name: 'login' }"
          >Checked App</router-link
        ></a
      >
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

        <div class="navbar-start">
          <a class="navbar-item">
            <router-link :to="{ name: 'home' }">Tareas</router-link>
          </a>
          <a class="navbar-item">
            <router-link :to="{ name: 'calendario' }">Calendario</router-link>
          </a>
          <a class="navbar-item">
            <router-link :to="{ name: 'perfil' }">Editar Perfil</router-link>
          </a>
          <a @click="authStore.logout()" class="navbar-item"> Cerrar sesion </a>
        </div>
      </div>

      <!-- Visualización en abierto: -->

      <div v-else class="navbar-menu is-active" id="navMenu">
        <!-- navbar-start, navbar-end... -->

        <div class="navbar-start">
          <a class="navbar-item">
            <router-link :to="{ name: 'home' }">Tareas</router-link>
          </a>
          <a class="navbar-item">
            <router-link :to="{ name: 'calendario' }">Calendario</router-link>
          </a>
          <a class="navbar-item">
            <router-link :to="{ name: 'perfil' }">Editar Perfil</router-link>
          </a>
          <a @click="authStore.logout()" class="navbar-item"> Cerrar sesion </a>
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
.checked {
  color: rgb(91, 90, 90);
  font-family: monospace;
}
.navbar-brand{
display: flex;
justify-content: space-between;
align-items: flex-start;
}
</style>
