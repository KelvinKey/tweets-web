
import Vue from 'vue'
import Vuex from 'vuex'
import vuex from './vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: vuex.modules,
  strict: process.env.NODE_ENV !== 'production'
})
