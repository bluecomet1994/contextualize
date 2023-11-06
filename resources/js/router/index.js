import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue';
import About from "../pages/About.vue";
import Services from "../pages/Services.vue";
import Methods from "../pages/Methods.vue";
import Contact from "../pages/Contact.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/services',
            name: 'services',
            component: Services
        },
        {
            path: '/methods',
            name: 'methods',
            component: Methods
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
    ]
});

export default router;
