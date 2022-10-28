<template>
  <!-- Pestaña NewTask con formulario de creacción de tareas con inputs de cumplimiento obligatorio
  y botones con imagenes de fontawsome -->
  <div class="caja">
    <form class="box" @submit.prevent="onSubmit">
      <div class="field">
        <label class="label">Título*</label>
        <div class="control">
          <input
            v-model="title"
            class="input"
            type="text"
            placeholder="Inserte un título"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Descripción*</label>
        <div class="control">
          <textarea
            v-model="description"
            class="textarea"
            placeholder="Describa la tarea"
            required
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button
            class="button is-link is-success is-light is-outlined"
            type="submit"
          >
            <i class="fa-solid fa-square-plus"></i>
          </button>
        </div>
        <div class="control">
          <button
            @click="cancelarTarea"
            class="button is-link is-danger is-light is-outlined"
            type="button"
          >
            <i class="fa-solid fa-ban"></i>Cancelar
          </button>
        </div>
      </div>
    </form>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script setup>
import { newTask } from "../api";
import { ref } from "vue";
import { useTaskStore } from "../store/task";
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";

const title = ref("");
const description = ref("");
const router = useRouter();
//  no Usamos esta conexión con el Store
const taskStore = useTaskStore(); 
const authStore = useAuthStore();

// Función de crear tarea y conectarla al Store
const onSubmit = async () => {
  const tarea = {
    user_id: authStore.id,
    title: title.value,
    description: description.value,
  };
  // Función para conectar tarea con supabase
  const task = await newTask(tarea);
  // taskStore.addTask(task)
  alert("Tarea creada con exito");
  router.push({ name: "home" });
};

// Función para cancelar la creación de tarea y volver a Home
const cancelarTarea = () => {
  title.value = "";
  description.value = "";
  router.push({ name: "home" });
};
</script>
<style scoped>
body {
  background-color: #eee;
}
input {
  background-color: rgb(248, 247, 247);
}
textarea {
  background-color: rgb(248, 247, 247);
}
h2 {
  font-weight: bold;
}

.caja {
  width: 70vw;
  margin-left: 15%;
  margin-top: 8%;
}
</style>
