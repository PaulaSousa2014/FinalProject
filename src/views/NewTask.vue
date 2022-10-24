<template>
    <form class="box" @submit.prevent="onSubmit">
 <div class="field">
  <label class="label">Título*</label>
  <div class="control">
    <input v-model="title" class="input" type="text" placeholder="Inserte un título" required>
  </div>
</div>

<div class="field">
  <label class="label">Descripción*</label>
  <div class="control">
    <textarea v-model="description" class="textarea" placeholder="Describa la tarea" required></textarea>
  </div>
</div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-link is-success is-light is-outlined" type="submit">Añadir tarea</button>
  </div>
  <div class="control">
    <!-- TODO No funciona el boton cancelar -->
    <button @click="editar=false" class="button is-link is-danger is-light is-outlined" type="button">Cancelar</button>
  </div>
</div>
</form>

</template>





<script setup>
import { newTask } from '../api';
import { ref } from 'vue';
import { useTaskStore} from '../store/task'
import { useAuthStore} from '../store/auth'
import { useRouter } from 'vue-router'
const title = ref('');
const description = ref('');
const editar = ref(false); // he añadido para que funcione el boton cancelar pero sigue sin funcionar


const router = useRouter();
const taskStore = useTaskStore();
const authStore = useAuthStore();
const onSubmit = async()=> {
    const tarea = {
        user_id: authStore.id,
        title: title.value,
        description: description.value
    }
    const task =  await newTask(tarea)
    // taskStore.addTask(task)
    alert('Tarea creada con exito')
    router.push({ name: 'home' })
}
</script>
<style scoped>

/* TODO el background color no afecta el final de la pagina. He puesto aqui para probar pero sigue sin ir */
body{
  background-color: #eee;
}
</style>