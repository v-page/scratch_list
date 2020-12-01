import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/scratch_view/:id',
            name: 'scratch_view',
            props: true,
            component: () => import('./views/scratch_view')
        }
    ]
})
