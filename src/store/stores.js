import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import modules from './modules'
import getters from './getters'

Vue.use(Vuex)

// const actions = merge()
const store = new Vuex.Store({
  actions,
  getters,
  modules,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
