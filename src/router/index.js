import { createWebHashHistory,createRouter } from 'vue-router'
import Setup from '@/screens/Setup.vue'
import Error404 from '@/screens/Error404.vue'
import Board from '@/screens/Board.vue'
import Welcome from '@/screens/Welcome.vue'
import Practice from '@/screens/Practice.vue'
import Results from '@/screens/Results.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes : [
        {
            path : '/',
            name: "Welcome",
            component : Welcome
        },
        {
            path : '/board',
            name: "Board",
            component : Board
        },
        {
            path : '/create/:mode',
            name: "Setup",
            component : Setup,
            props: true
        },
        {
            path : '/practice',
            name: "Practice",
            component : Practice
        },
        {
            path : '/result',
            name: "Results",
            component : Results
        },
        {
            path: "/:catchAll(.*)",
            name: "Error",
            component: Error404,
        }
    ]
})

export default router