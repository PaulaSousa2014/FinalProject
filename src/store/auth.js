import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            // Nos indicara si el usuario esta autenticado
            isAuth: false,
            // Guardaremos el id de supabase que nos dara al hacer el login
            id: undefined
        }

    },

    actions: {
        login(id) {
            this.isAuth = true;
            this.id = id;
        },

        logout(){
            this.isAuth = false;
            this.id = undefined;
        }
    },

    persist: {
        enabled: true,
        strategies: [
          {
            key: 'auth',
            storage: localStorage,
          },
        ],
      },
})