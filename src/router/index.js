import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'

export const constantRoutes = [

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children:
      [{
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '主页', icon: 'el-icon-s-home', totalPath: '/home' }
      }]
  },
  {
    path: '/login',
    hidden: true,
    component: Layout,
    redirect: '/login/index',
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/login/index'),
        meta: { title: '测试', icon: 'form', totalPath: '/login/index' }
      }
    ]
  },
  {
    path: '/blog',
    component: Layout,
    redirect: '/blog/index',
    children: [
      {
        path: 'index',
        name: 'Blog',
        component: () => import('@/views/blog/index'),
        meta: { title: '博客', icon: 'el-icon-notebook-2', totalPath: '/blog/index' }
      },
      {
        path: 'detail',
        name: 'BlogDetail',
        hidden: true,
        component: () => import('@/views/blog/blogDetail'),
        meta: { title: '主页', totalPath: '/blog/detail' }
      }
    ]
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 * meta.roles not set
 */
export const asyncRoutes = [

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// matcher: match, addRoutes
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
