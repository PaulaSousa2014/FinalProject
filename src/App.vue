<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" ><router-link :to="{name: 'home'}">Administrador de tareas</router-link>
      
    </a>

   
  </div>

  <!-- <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <router-link :to="{name: 'home'}">Home</router-link>
      </a>

      </div>
    </div> -->

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-info is-light is-outlined">
            <router-link :to="{name: 'signin'}">Registrar</router-link>
          </a>
          <a class="button is-info is-light is-outlined">
            <router-link :to="{name: 'login'}">Login</router-link>
          </a>
          <button
          @click="authStore.logout()"
          class="button is-danger is-light is-outlined"
        >
          Cerrar sesion
        </button>
        </div>
      </div>
    </div>
  
</nav>

   
    <router-view></router-view>
</template>
<script setup>

import { useAuthStore} from './store'
const authStore = useAuthStore();
//TODO falta comprobar que el usuario no esta logeado para no saltar. Mejor cambio para button?

</script>
<style scoped>

</style>