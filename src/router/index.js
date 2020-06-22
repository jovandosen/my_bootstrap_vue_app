import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

    const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/posts',
        name: 'Posts',
        component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue')
    },
    {
        path: '/post/:id',
        name: 'PostDetails',
        props: true,
        component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue')
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
    },
    {
        path: '/user/:id',
        name: 'UserDetails',
        props: true,
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
