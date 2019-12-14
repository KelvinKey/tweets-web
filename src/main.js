// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import http from './utils/http'
import store from './vuex'
import './directives'
import './filters'
import { Message } from 'element-ui'

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$message = Message
Vue.prototype.$user = () => {
  return store.getters.currentUser
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
