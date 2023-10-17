import { createRouter, createWebHashHistory } from 'vue-router'
// import LoginPage from '@/views/login'

/**
 * constantRoutes
 * 用户默认可以访问的页面
 * 默认路由不需要配置
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: '/HomeView'
  },
  // {
  //   path: '/login',
  //   component: LoginPage
  // },
  {
        path: '/HomeView',
        component: () => import('@/views/HomeView.vue'),
        name: 'DashboardIndex'
      
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: constantRoutes
})

export default router
