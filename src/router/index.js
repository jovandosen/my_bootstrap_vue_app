import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

    const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Home'
        },
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        meta: {
            title: 'About'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/posts',
        name: 'Posts',
        meta: {
            title: 'Posts'
        },
        component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue')
    },
    {
        path: '/post/:id',
        name: 'PostDetails',
        props: true,
        meta: {
            title: 'Post'
        },
        component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue'),
        children: [
            {
                path: 'comments',
                name: 'PostComments',
                props: true,
                meta: {
                    title: 'Post Comments'
                },
                component: () => import(/* webpackChunkName: "postComments" */ '../views/PostComments.vue')
            }
        ]
    },
    {
        path: '/users',
        name: 'Users',
        meta: {
            title: 'Users'
        },
        component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
    },
    {
        path: '/user/:id',
        name: 'UserDetails',
        props: true,
        meta: {
            title: 'User'
        },
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
        children: [
            {
                path: 'posts',
                name: 'UserPosts',
                props: true,
                meta: {
                    title: 'User Posts'
                },
                component: () => import(/* webpackChunkName: "userPosts" */ '../views/UserPosts.vue')
            }
        ]
    },
    {
        path: '/comments',
        name: 'Comments',
        meta: {
            title: 'Comments'
        },
        component: () => import(/* webpackChunkName: "comments" */ '../views/Comments.vue')
    },
    {
        path: '/comment/:id',
        name: 'CommentDetails',
        props: true,
        meta: {
            title: 'Comment'
        },
        component: () => import(/* webpackChunkName: "comment" */ '../views/Comment.vue')
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

router.beforeEach((to, from, next) => {
    var appName = Vue.prototype.$appName
    window.document.title = to.meta && to.meta.title ? appName + to.meta.title : appName + 'Not Found';
    next()
})

export default router
