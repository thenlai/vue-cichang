<template lang="jade">
section
  h1 Word Game Editor
  #edit-body
    aside#edit-aside-list
      div
        button(@click="newWord") new word
      ul
        li(v-for="(word, index) in words", @click.stop="select(index)", :class="['word-item', {active: (activeId === index)}]")
          h4.word-spell {{word.spell}}
          p.word-desc {{word.desc}}
    #edit-panel
      WordItem(:activeId="activeId")
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
      }
    },
    computed: {
      activeId () {
        return this.$store.getters.activeWordId
      },
      words () {
        return this.$store.getters.currentWordList
      }
    },
    methods: {
      select (index) {
        this.$store.commit(types.SELECT_WORD, {
          id: index
        })
      },
      newWord () {
      }
    },
    watch: {
      'activeId': function (id) {
        // todo:
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