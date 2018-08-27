import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import login from '@/pages/login/login'
import feedback from '@/pages/feedback/feedback'
import postDetail from '@/pages/postDetail/postDetail'
import findpw from '@/pages/findpw/findpw'
import register from '@/pages/register/register'
import createResume from '@/pages/createResume/createResume'
import selfCenter from '@/pages/selfCenter/selfCenter'
import about from '@/pages/about/about'
import fullTime from '@/pages/fullTime/fullTime'
import partTime from '@/pages/partTime/partTime'
import jobFair from '@/pages/jobFair/jobFair'
import community from '@/pages/community/community'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: home },
    { path: '/home', name: 'home', component: home },
    { path: '/fulltime', name: 'fullTime', component: fullTime },
    { path: '/parttime', name: 'parttTime', component: partTime },
    { path: '/jobFair', name: 'jobFair', component: jobFair },
    { path: '/community', name: 'community', component: community },
    { path: '/login', name: 'login', component: login },
    { path: '/feedback', name: 'feedback', component: feedback },
    { path: '/postdetail', name: 'postDetail', component: postDetail },
    { path: '/findpw', name: 'findpw', component: findpw },
    { path: '/register', name: 'register', component: register },
    { path: '/createresume', name: 'createResume', component: createResume },
    { path: '/selfcenter', name: 'selfCenter', component: selfCenter },
    { path: '/about', name: 'about', component: about }
  ]
})

export default router
