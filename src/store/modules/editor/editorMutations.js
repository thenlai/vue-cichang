// editor mutations

import types from '../../types'

export default {
  [types.SET_BOOK_META] (state, {lang, author, desc}) {
    state.language = lang
    state.author = author
    state.description = desc
  },

  [types.SAVE_BOOK] (state) {

  },

  [types.HISTORY_PREV] (state) {

  },

  [types.HISTORY_NEXT] (state) {

  },

  [types.SELECT_WORD] (state, {id}) {
    state.current.activeId = id
  },

  [types.ADD_WORD] (state, word) {
    state.current.wordList.push(word)
  }

}
