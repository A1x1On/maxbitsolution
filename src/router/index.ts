import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
// linkActiveClass: 'active',
// routes: setupLayouts(routes),

router.beforeEach(async (to) => {
  if (!to.matched.length) {
    return '/notFound'
  }

  if (to.path === '/' || to.path.match(/^(\/drinks|\/drinks\/)$/)) {
    return '/drinks/margarita'
  }
})

router.onError((err, to) => {
  console.log('router.onError err', err)
  console.log('router.onError to', to)
})

if (import.meta.hot) {
  handleHotUpdate(router)
}
export default router
