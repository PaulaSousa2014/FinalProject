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
            const index = this.tasks.findIndex(task => {
                if(task.id == id){
                    return true
                }
             })
             this.tasks[index].title=task.title
             this.tasks[index].description=task.description
        },
        updateCompleted(id, task) {
            const index = this.tasks.findIndex(task => {
                if(task.id == id){
                    return true
                }
             })
             this.tasks[index].isCompleted= task.isCompleted
        },

        deleteTask(id) {
             const index = this.tasks.findIndex(task => {
                if(task.id == id){
                    return true
                }
             })
            this.tasks.splice(index, 1)
        },

        



    }
})