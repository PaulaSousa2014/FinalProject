<template>
     <form class="box" @submit.prevent="onSubmit">
 <div class="field">
  <label class="label">Título*</label>
  <div class="control">
    <input v-model="title" class="input" type="text" placeholder="nserte un título" required>
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
    <button class="button is-link" type="submit">Actualizar Tarea</button>
  </div>
  <div class="control">
    <button class="button is-link is-danger" type="button">Cancelar</button>
  </div>
</div>
</form>

</template>

<script setup>
// import { updateTask } from '../api';
// import {useRoute} from 'vue-router'
// import { useTaskStore} from '../store/task'
// const title = ref('');
// const description = ref('');

// const route = useRoute();
// const id = route.params.id;

// const taskStore = useTaskStore();


// const onSubmit = async()=> {
//     const nuevaTarea = {
//         title: title.value,
//         description: description.value
//     }
//     const task =  await updateTask(id, nuevaTarea)
    
// }
</script>
<style scoped></style>
