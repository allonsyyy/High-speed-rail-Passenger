import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@views/home/home'),
        meta: {
            title: 'home'
        }
    },
    {
        path: '/shopping',
        component: () => import('@views/shopping/shopping'),
        meta: {
            title: 'shopping'
        }
    },
    {
        path: '/profile',
        component: () => import('@views/profile/profile'),
        meta: {
            title: 'profile'
        }
    },
    {
        path: '/news',
        component: () => import('@views/news/news'),
        meta: {
            title: 'news'
        }
    },
    {
        path: '/viewpoint',
        component: () => import('@views/viewpoint/viewpoint'),
        meta: {
            title: 'viewpoint'
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
