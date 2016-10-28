// editor mutations

import types from '../mutation-types'

export default {
  [types.SET_BOOK_META](state, {lang, author,desc}) {
    state.language = lang
    state.author = author
    state.description = desc
  },

  [types.ADD_WORD](state, {word}) {
    data.push(word)
  },

  [types.SAVE_BOOK](state) {

  },

  [types.HISTORY_PREV](state) {

  },

  [types.HISTORY_NEXT](state) {

  }
}