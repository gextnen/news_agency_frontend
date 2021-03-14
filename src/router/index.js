import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from "../../vuex/store";
import Login from "@/components/Login";
import AdminPanel from "@/components/adminPanel/v-admin-panel";
// import ChangeNews from "@/components/v-change-news";
import AddNews from "@/components/adminPanel/v-add-news";
// import DelNews from"@/components/v-delete-news";
// import SearchNews from"@/components/v-search"
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
        meta: {
            guest: true
        }
    },
    {
        path: '/AdminPanel',
        name: 'AdminPanel',
        component:AdminPanel,

    },
    {
        path: '/AdminPanel/AddNews',
        name: 'AddNews',
        component: AddNews,
        meta: {
            guest: true
        }
    },
    {
        path: '/AdminPanel/ChangeNews',
        name: 'ChangeNews',
        component: () => import("@/components/adminPanel/v-change-news"),
        meta: {
            guest: true
        }
    },
    {
        path: '/AdminPanel/DelNews',
        name: 'DelNews',
        component: () => import("@/components/adminPanel/v-delete-news"),
        meta: {
            guest: true
        }
    },
    {
        path: '/Search',
        name: 'v-search',
        component: () => import("@/components/v-search"),
        meta: {
            guest: true
        }
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isLoggedIn) {
//             next()
//             console.log("hello from router/index.js, beforeEach_func")
//             return
//         }
//         next('/Authorization')
//     } else {
//         next()
//     }
// })
export default router
