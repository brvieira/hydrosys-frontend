import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HistoryData from '@/components/HistoryData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'HistoryData',
      component: HistoryData
    }
  ]
})
