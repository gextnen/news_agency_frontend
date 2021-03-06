import Vue from 'vue'
import VueRouter from 'vue-router'

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

]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
