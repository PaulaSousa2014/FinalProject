<template>

    <div class="section">
        <div class="container">

            <article v-if="!authStore.isAuth" class="message is-danger">
                <div class="message-body">
                    Debes iniciar sesion para utilizar la aplicacion
                    <router-link :to="{name: 'login'}">
                        Ir a Login
                    </router-link>
                </div>
            </article>
            <div v-else>
                <!-- Poner nombre del usuario y un boton para cerrar la sesion -->
                <div class="title">Tareas</div>
                <button @click="authStore.logout()" class="button is-danger">Cerrar sesion</button>
                    <!-- <div v-if="!authStore.isAuth" class="message is-danger">//TODO
                        <div class="message-body"> Has cerrado sesión correctamente </div></div> -->
                
                <!-- Poner un formulario con un textarea que nos permita poner mensajes al enviar el formulario -->
                <!-- Crear otro store de posts -->

                <Task v-for="task in taskStore.tasks" :task="task"/>
                
            
            </div>
            
        </div>
        

        <!-- TODO 
            CRUD -> Create Read Update Delete
            1- Que el estado sea persistente
            2- Poder borrar posts
            3- Poder editar posts
        -->

    </div>
</template>
<script setup>
import { useAuthStore } from '../store/auth'
import { useTaskStore} from '../store/task'
import Task from '../components/Task.vue';
import { onMounted } from 'vue';
import { getTasks } from '../api';
// import Posts from '../components/Posts.vue'
const authStore = useAuthStore();
onMounted( async() => {
    const task =  await getTasks()
    taskStore.setTask(task)
})
const taskStore = useTaskStore();
</script>
<style scoped>
</style>