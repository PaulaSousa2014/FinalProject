<template>
  
<form v-if="editar" class="box" @submit.prevent="editarTarea">
 <div class="field">
  <label class="label">Título</label>
  <div class="control">
    <input v-model="title" class="input" type="text" placeholder="Inserte un título">
  </div>
</div>

<div class="field">
  <label class="label">Descripción</label>
  <div class="control">
    <textarea v-model="description" class="textarea" placeholder="Describa la tarea"></textarea>
  </div>
</div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" type="submit">Actualizar tarea</button>
  </div>
  <div class="control">
    <button class="button is-link is-danger" type="button">Cancelar</button>
  </div>
</div>
</form>  

<div v-else class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{task.title}}
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      {{task.description}}
      
    </div>
  </div>
  <form class="box">
  <div class="field">
  <div class="control">
    <h2>Tarea completada</h2> 
    <label class="switch">
      <input v-model="task.isCompleted" @change="completarTarea" type="checkbox">
      <span class="slider round"> </span>
       </label>

  </div>
</div>
</form>
  <footer class="card-footer">
    <button @click="editar=true">Editar Tarea</button>
        <!-- <RouterLink  :to="{name: 'editTask', params:{id: task.id} }" class="card-footer-item">Editar</RouterLink> -->
    <button @click = "borrarTarea" class="card-footer-item">Eliminar</button>
  </footer>
</div>

</template>
<script setup>
import { ref } from 'vue';
import {deleteTask, updateTask} from '../api'
import {useTaskStore} from '../store'

const taskStore = useTaskStore()
const title = ref('');
const description = ref('');
const editar = ref(false);


const borrarTarea = ()=>{
deleteTask(props.task.id)
taskStore.deleteTask(props.task.id)
alert('Tarea eliminada con exito')
}

const editarTarea = () => {
  updateTask(props.task.id, {
    title: title.value,
    description: description.value 
  })
  editar.value=false;
  taskStore.updateTask(props.task.id, {title: title.value,
    description: description.value 
  })
}

const completarTarea = () => {
  updateTask(props.task.id, {
    isCompleted: props.task.isCompleted   
  })
  taskStore.updateCompleted(props.task.id, {isCompleted: props.task.isCompleted})
}

const props = defineProps(["task"])


</script>
<style scoped>

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


</style>