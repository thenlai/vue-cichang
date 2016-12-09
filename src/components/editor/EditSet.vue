<template lang="jade">
section.edit-set
  h1 Word Game Editor
  #edit-body
    aside#edit-aside-list
      div
        button(@click="newWord") new word
      ul
        li(v-for="(word, index) in words", @click.stop="select(index)", :class="['word-item', {active: (activeId === index)}]")
          h4.word-spell {{word.spell}}
          p.word-desc {{word.desc}}
          button.delete-word(@click="remove") remove
    #edit-panel
      WordItem(:activeId="activeId", :word="currentWord", @edit-word="edit", @add-word="add")
</template>

<script>
  import WordItem from './wordItem/WordItem'
  import types from '../../store/types'

  export default {
    components: {
      WordItem
    },
    data () {
      return {
        activeId: this.$store.getters.activeWordId,
        words: this.$store.getters.currentWordList
      }
    },
    computed: {
      currentWord () {
        if (this.activeId !== null) return this.words[this.activeId]
        return {
          spell: '',
          desc: '',
          conf_spell: [],
          conf_desc: []
        }
      }
    },
    methods: {
      select (index) {
        this.activeId = index
      },
      remove () {
      },
      newWord () {
      },
      edit () {

      },
      add (word) {
        this.words.push(word)
      },
      save () {
        this.$store.commit(types.SELECT_WORD, {
          id: this.activeId
        })
        // this.$store.commit(types.WORD_LIST, {
        //  data: words
        // })
      }
    },
    watch: {
      'activeId': (id) => {
        // todo:
        // console.log(this.activeId)
      },
      'words': (newWords) => {
        // todo:
        console.log('w')
      }
    }
  }
</script>

<style lang="scss">
  #edit-body {
    display: flex;
  }
  #edit-aside-list {
    width: 18rem;
    margin-right: 2rem;
    background: #f7f7f7;
    ul {
      margin: 0;
      padding: 0;
    }
    .word-item {
      padding: 0.5rem 1rem;
      border-bottom: 1px dashed #ddd;
      cursor: pointer;
      &.active {
        background: #eee;
      }
    }
    .word-spell {
      margin: 0 0 0.5rem 0;
      padding: 0;
    }
    .word-desc {
      margin: 0;
      padding: 0;
    }
  }
</style>