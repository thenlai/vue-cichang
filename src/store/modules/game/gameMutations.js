// game mutations
import types from '../../types'

export default {
  [types.GAME_INIT] (state) {

  },

  [types.GAME_NEXT] (state) {
    if (state.index < state.capacity - 1) {
      state.index ++
      return state.rounds[state.index]
    } else {
      return null
    }
  },

  [types.GAME_PAUSE] (state) {

  },
  [types.GAME_RESUME] (state) {

  },
  [types.GAME_FINISH] (state) {

  }
}
