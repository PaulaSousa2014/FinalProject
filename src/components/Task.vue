<template>
  <!-- New task -->
  <form v-if="editar" class="box" @submit.prevent="editarTarea">
    <div class="field">
      <label class="label">Título</label>
      <div class="control">
        <input
          v-model="title"
          class="input"
          type="text"
          placeholder="Inserte un título"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Descripción</label>
      <div class="control">
        <textarea
          v-model="description"
          class="textarea"
          placeholder="Describa la tarea"
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button
          class="button is-link is-success is-light is-outlined"
          type="submit"
        >
          Actualizar
        </button>
      </div>
      <div class="control">
        <button
          @click="editar = false"
          class="button is-link is-danger is-light is-outlined"
          type="button"
        >
          Cancelar
        </button>
      </div>
    </div>
  </form>
<!-- Task -->
  <div v-else class="box cardShow">
    <header class="card-header">
      <p class="card-header-title">
        {{ task.title }}
      </p>
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </header>
    <br />
    <div class="card-content">
      <div class="content">
        {{ task.description }}
      </div>
    </div>
    <form class="field">
      <div class="fieldTask">
        <div class="control">
          
          <h2>Completada</h2>

          <label class="switch">
            <input
              v-model="task.isCompleted"
              @change="completarTarea"
              type="checkbox"
            />
            <span class="slider round"> </span>
          </label>
        </div>
      </div>
    </form>
    <footer class="card-footer">
      <button
        @click="editar = true"
        class="button is-success is-light is-outlined"
      >
        Editar
      </button>

    
      <button
        @click="borrarTarea"
        class="button is-danger is-light is-outlined"
      >
        Eliminar
      </button>
    </footer>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { deleteTask, updateTask } from "../api";
import { useTaskStore } from "../store";

const props = defineProps(["task"]);
const taskStore = useTaskStore();
const title = ref(props.task.title);
const description = ref(props.task.description);
const editar = ref(false);

const borrarTarea = () => {
  deleteTask(props.task.id);
  taskStore.deleteTask(props.task.id);
  alert("Tarea eliminada con exito");
};

const editarTarea = () => {
  updateTask(props.task.id, {
    title: title.value,
    description: description.value,
  });
  editar.value = false;
  taskStore.updateTask(props.task.id, {
    title: title.value,
    description: description.value,
  });
};

const completarTarea = () => {
  updateTask(props.task.id, {
    isCompleted: props.task.isCompleted,
  });
  taskStore.updateCompleted(props.task.id, {
    isCompleted: props.task.isCompleted,
  });
};
</script>
<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.card-header {
  background-color: rgb(248, 247, 247);
}
.card-content {
  background-color: rgb(248, 247, 247);
}
h2 {
  font-weight: bold;
  
}
.fieldTask {
  display: flex;
  justify-content: space-between;
}

button{
  margin-right: 10px;
}

.control{
  display: flex;
  flex-direction: row-reverse;
  
  padding-top: 5%;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 19px;
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
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 4px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #257953
}

input:focus + .slider {
  box-shadow: 0 0 1px #257953;
}

input:checked + .slider:before {
  -webkit-transform: translateX(10px);
  -ms-transform: translateX(10px);
  transform: translateX(10px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}





@media (min-width: 840px){
  .cardShow{
  margin-left: 30px;
}
}
</style>
