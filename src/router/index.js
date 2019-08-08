import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/pages/layout/layout'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/home/home')
        },
        {
          path: 'parttime',
          name: 'parttime',
          component: () => import('@/pages/parttime/parttime')
        },
        {
          path: 'fulltime',
          name: 'fulltime',
          component: () => import('@/pages/fullTime/fullTime')
        },
        {
          path: 'jobFair',
          name: 'jobFair',
          component: () => import('@/pages/jobFair/jobFair')
        },
        {
          path: 'community',
          name: 'community',
          component: () => import('@/pages/community/community')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/pages/login/login')
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: () => import('@/pages/feedback/feedback')
        },
        {
          path: 'postdetail',
          name: 'postdetail',
          component: () => import('@/pages/postdetail/postdetail')
        },
        {
          path: 'findpw',
          name: 'findpw',
          component: () => import('@/pages/findpw/findpw')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/pages/register/register')
        },
        {
          path: 'createresume',
          name: 'createresume',
          component: () => import('@/pages/createresume/createresume')
        },
        {
          path: 'selfcenter',
          name: 'selfcenter',
          component: () => import('@/pages/selfcenter/selfcenter')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/pages/about/about')
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to, from)
  next()
})

export default router
