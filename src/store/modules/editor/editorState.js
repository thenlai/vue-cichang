
export default {
  sid: null,
  language: '',
  author: '',
  description: '',
  workList: [
    {
      id: 1,
      name: 'demo'
    }
  ],
  current: {
    name: '',
    activeId: 0,
    wordList: [
      {
        spell: 'pomme',
        desc: 'f.n. apple',
        conf_spell: ['', '', '', ''],
        conf_desc: ['', '', '', '']
      },
      {
        spell: 'fille',
        desc: 'f.n. girl'
      }
    ]
  }
}
