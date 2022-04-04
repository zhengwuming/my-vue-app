import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    name: 'error',
    meta: {
      title: '404',
    },
    component: () => import('@/views/404'),
  },

  {
    path: '/',
    name: 'home',
    meta: {
      title: 'home',
    },
    component: () => import('@/views/renmin-hospital/index'),
  },

  // {
  //   path: '/renmin-hospital/ryxj',
  //   name: '/renmin-hospital/ryxj',
  //   component: import('@/views/renmin-hospital/ryxj'),
  //   redirect: 'noRedirect',
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
