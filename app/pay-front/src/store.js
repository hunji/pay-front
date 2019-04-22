import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardNO: ''
  },
  mutations: {
    changeCard (state, cardValue) {
      state.cardNO = cardValue
    }
  },
  actions: {

  }
})
