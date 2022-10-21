import { defineStore } from 'pinia'
import { updateTask } from '../api'

export const useTaskStore = defineStore('task', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            // Guardaremos los task que nos de supabase
            tasks: []
        }
    },
    actions: {

        setTask(task) {
            //TODO guardar en el stado las task que nos de supabase
            this.tasks = task
        },

        updateTask(id, task) {
            // TODO modificar el estado de la task
            // Encontrar el indice de la task con ese id y cambiar su contenido con task
        },

        deleteTask(id) {
            // TODO modificar el estado borrando esa task
            // Encontramos el indice de ese id y eliminamos ese indice de la array
             id = authStore.id;
             this.tasks = task.id
            
        },

        



    }
})