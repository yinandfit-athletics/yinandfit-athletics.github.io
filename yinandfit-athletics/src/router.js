import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MemberRegister from './components/MemberRegister.vue'
import ConstructionPage from './components/ConstructionPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ConstructionPage
    },
    {
      path:'/register',
      name: 'register',
      component: MemberRegister
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
