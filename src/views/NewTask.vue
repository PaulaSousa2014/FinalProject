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
    <button class="button is-link" type="submit">Añadir tarea</button>
  </div>
  <div class="control">
    <button class="button is-link is-danger">Cancelar</button>
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
<style scoped></style>