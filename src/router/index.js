import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

//para probar que funcionen
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
     {
         path: '/signin',
         name: 'signin',
         component: () => import('../views/signin.vue')
     },
     {
        path: '/newTask',
        name: 'newTask',
        component: () => import('../views/NewTask.vue')
    },
    {
        path: '/calendario',
        name: 'calendario',
        component: () => import('../views/Calendario.vue')
    },
    {
        path: '/perfil',
        name: 'perfil',
        component: () => import('../views/Perfil.vue')
    },
    {
        path: '/recuperar',
        name: 'password',
        component: () => import('../views/RecuperarPasswor.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    

})

// router.beforeEach((to, from) => {
//     console.log(to, from)
//     nextTick()
//     return true
// })


console.log('router: ', import.meta.env.BASE_URL)

export default router;