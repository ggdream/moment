import { RouteConfig } from 'vue-router'


const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/Home.vue')
    },
    {
        path: '/show',
        name: 'show',
        component: () => import('@/views/show/Show.vue')
    },
    {
        path: '/record',
        name: 'record',
        component: () => import('@/views/record/Record.vue'),
        meta: { keepAlive: false }
    },
    {
        path: '/edit',
        name: 'edit',
        component: () => import('@/views/edit/Edit.vue')
    },
    {
        path: '*',
        redirect: '/'
    }
]

export default routes
