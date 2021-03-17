import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../../vuex/store";
import Login from "@/components/Login";
import AdminPanel from "@/components/adminPanel/v-admin-panel";
import AddNews from "@/components/adminPanel/v-add-news";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home')
    },
    {
        path: '/Article/:id',
        name: 'Article',
        component: () => import('@/views/Article')
    },
    {
        path: '/Authorization',
        name: 'Authorization',
        component: () => import('@/views/Authorization')
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/AdminPanel',
        name: 'AdminPanel',
        component: AdminPanel,
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/AdminPanel/AddNews',
        name: 'AddNews',
        component: AddNews,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/AdminPanel/SelectId',
        name: 'SelectId',
        component: () => import("@/components/adminPanel/v-change-select-id"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/AdminPanel/DelNews',
        name: 'DelNews',
        component: () => import("@/components/adminPanel/v-delete-news"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/Search',
        name: 'v-search',
        component: () => import("@/components/v-search"),
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            next()
            console.log("hello from router/index.js, beforeEach_func")
            return
        }
        next('/Authorization')
    } else {
        next()
    }
})
export default router
