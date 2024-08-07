import { createRouter, createWebHistory} from "vue-router"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/dashboard',
            component: () => import('../views/DashboardView.vue')
        }
    ]
})

export default router