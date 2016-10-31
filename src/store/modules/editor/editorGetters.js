// editor getters

export default {
  editWordCount: state => state.workList.length,
  editWords: state => state.workList,
  currentWordList: state => state.current.wordList,
  activeWordId: state => state.current.activeId
}
