<template>
  <div class="section">
    <div class="container">
      <article v-if="!authStore.isAuth" class="message">
        <div class="message-body">
          Debes iniciar sesion para utilizar la aplicacion
          <router-link :to="{ name: 'login' }"> Ir a Login </router-link>
        </div>
      </article>
      <div v-else>
        <div class="title">Tareas</div>
        <!-- <button
          @click="authStore.logout()"
          class="button is-danger is-light is-outlined"
        >
          Cerrar sesion
        </button> -->
    
       <div class="">
        <a class=" mb-4 button is-success is-light is-outlined ">
          <router-link :to="{ name: 'newTask' }">Nueva Tarea</router-link>
        </a>
    </div>

        

        <Task class="tasks" v-for="task in taskStore.tasks" :task="task" />
    
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

const authStore = useAuthStore();

onMounted(async () => {
  const task = await getTasks();
  taskStore.setTask(task);
});
const taskStore = useTaskStore();
</script>
<style scoped>
.title{
    font-family:Arial, Helvetica, sans-serif;
    color:rgb(78, 77, 77)
}
router-link{
    color: #257953;
}

</style>
