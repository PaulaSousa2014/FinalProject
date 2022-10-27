<template>
  <div class="section">
    <div class="container">
      <div class="loginLink" v-if="!authStore.isAuth">
        <Login />
      </div>
      <div v-else class="tareas">
        <div class="title">Tareas</div>
        

        <a class="mb-4 button is-success is-light is-outlined is-responsive">
          <router-link class="letra" :to="{ name: 'newTask' }"
            > <i class="fa-solid fa-circle-plus"></i> Añadir Tarea</router-link
          >
        </a>
        <br>

        <div class="columns is-multiline">
          <div
            class="column is-12-mobile is-4-tablet is-3-desktop"
            v-for="task in taskStore.tasks"
          >
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
  
  color: #215c3fe4;
  font-size: 1.5rem;
  text-shadow: 1px 1px rgb(169, 162, 162);
  font-family: monospace;
  padding-top: 4px;
  font-weight: bold;
}
.letra {
  color: #257953;
}
.tareas {
  display: flex;
  flex-direction: column;
  
}


@media (min-width: 840px) {
}
</style>
