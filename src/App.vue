<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" ><router-link :to="{name: 'home'}">Administrador de tareas</router-link>
      
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <router-link :to="{name: 'home'}">Home</router-link>
      </a>

      
      <!-- <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div> -->
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <router-link :to="{name: 'signin'}">Registrar</router-link>
          </a>
          <a class="button is-light">
            <router-link :to="{name: 'login'}">Login</router-link>
          </a>
        </div>
      </div>
    </div>
  
</nav>

   
    <router-view></router-view>
</template>
<script setup>
import { onMounted } from 'vue';
import { login, newTask } from './api'
//  onMounted(async () => {
//      const id = await login(email.value, password.value);
//      console.log(id)
//      newTask({
//           user_id: id,
//           title: title.value,
//           description: description.value
//       })
//  })
</script>
<style scoped>
</style>