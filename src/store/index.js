import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myName: 'Benjamin',
    myLastName: 'Correa'
  },
  getters: {
    getFullName(state) {
      return `${state.myLastName}, ${state.myName}`
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
