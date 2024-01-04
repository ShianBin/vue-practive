import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Courses from '../views/Courses.vue'
import Environment from '../views/Environment.vue'
import Contact from '../views/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/Courses', component: Courses },
    { path: '/Environment', component: Environment },
    { path: '/Contact', component: Contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;