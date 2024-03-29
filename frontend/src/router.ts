import {createRouter, createWebHistory} from 'vue-router'
import login from './components/login.vue'

const routes = [{
    path: '/',
    name: 'Login',
    component: login,
},
{
    path: "/chat",
    name:'Chat',
    component: () => import('./pages/ChatPage.vue'),
},
{
    path: "/signup",
    name:'SignUp',
    component: () => import('./pages/SignUp.vue'),
},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router