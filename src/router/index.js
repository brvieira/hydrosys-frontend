import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import HistoryData from '@/components/HistoryData'
import ManageUser from '@/components/ManageUser'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: SignUp,
      meta: {
        guest: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HistoryData,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/manageuser',
      name: 'manageuser',
      component: ManageUser,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('usuario') != null) {
      next();
    } else {
      next({ name: 'login' })
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('usuario') == null) {
      next();
    } else {
      next({ name: 'dashboard' })
    }
  }
})

export default router;