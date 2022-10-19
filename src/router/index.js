import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

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
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    

})

// router.beforeEach((to, from) => {
//     console.log(to, from)
//     nextTick()
//     return true
// })


console.log('router: ', import.meta.env.BASE_URL)

export default router;