import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    name: '',
    games: [{
      hint: 'wind',
      index: 1,
      selections: ['そら', 'かぜ', 'あめ', 'かわ']
    }],
    current: 0
  },
  getters: {
    total: state => state.games.length
  },
  mutations: {
    next: function *(state) {
      while (state.current < this.total) {
        state.current++
        yield state.games[state.current - 1]
      }
    },
    judge: function (state, result) {
      // result, true or fasle
    }
  }
})

export default store
