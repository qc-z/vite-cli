import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/403', name: '403', component: () => import('@/views/403.vue') },
  { path: '/404', name: '404', component: () => import('@/views/404.vue') },
  { path: '/:pathMatch(.*)', redirect: '/404' }
]

const router = createRouter({ history: createWebHashHistory(), routes })

router.beforeEach((to, from, next) => {
  next()
})
export default router
