import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('./views/Info.vue')
    },
    {
      path: '/summary',
      name: 'summary',
      component: () => import('./views/Summary.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('./views/Details.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('./views/ServiceRules.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    }
  ]
})
