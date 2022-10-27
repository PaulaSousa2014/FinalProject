<template>
  <div class="section">
    <div class="container">
      <div class="loginLink" v-if="!authStore.isAuth">
        <Login />
      </div>
      <div v-else>
        <div class="title">Tareas</div>
        <!-- <button
          @click="authStore.logout()"
          class="button is-danger is-light is-outlined"
        >
          Cerrar sesion
        </button> -->

        <div>
          <a class="mb-4 button is-success is-light is-outlined">
            <router-link class="letra" :to="{ name: 'newTask' }"
              >Nueva Tarea</router-link
            >
          </a>
        </div>

        <div class="columns is-multiline">
          <div class="column is-12-mobile is-4-tablet is-3-desktop" v-for="task in taskStore.tasks" >
          <Task class="tasks" :task="task" />
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "../store/auth";
import { useTaskStore } from "../store/task";
import Task from "../components/Task.vue";
import { onMounted } from "vue";
import { getTasks } from "../api";

import Login from "../components/Login.vue";

const authStore = useAuthStore();

onMounted(async () => {
  const task = await getTasks();
  taskStore.setTask(task);
});
const taskStore = useTaskStore();
</script>
<style scoped>
.title {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(78, 77, 77);
}
.letra {
  color: #257953;
}


@media (min-width: 840px) {
 
}
</style>
