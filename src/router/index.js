import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let isLogged = router.app.$options.store.getters.isLogged

  if (isLogged && to.path.indexOf('/auth/') !== -1) {
    next('/')
  } else {
    next()
  }
})

export default router
