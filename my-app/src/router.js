import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
    {
      path: '/firstPage',
      name: 'firstPage',
      component: () => import('./views/firstPage.vue')
    },{
      path: '/classify',
      name: 'classify',
      component: () => import('./views/classify.vue')
    },{
      path: '/discover',
      name: 'discover',
      component: () => import('./views/discover.vue')
    },{
      path: '/shopCar',
      name: 'shopCar',
      component: () => import('./views/shopCar.vue')
    },{
      path: '/mine',
      name: 'mine',
      component: () => import('./views/mine.vue')
    },{
      path: '/proDetail',
      name: 'proDetail',
      component: () => import('./views/proDetail.vue')
    },
    {
      path: '/*',
      redirect:'/'
    },
  ]
})
