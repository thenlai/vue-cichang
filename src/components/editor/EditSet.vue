<template>
  <div>
    <h1>Word Game Editor</h1>
    <div id="edit-body">
      <aside id="edit-aside-list">
        <div>
          <button @click="newWord">new word</button>
        </div>
        <ul>
          <li
            v-for="(word, index) in words"
            @click.stop="select(index)"
            :class="['word-item', {active: (activeId === index)}]">
            <h4 class="word-spell">{{word.spell}}</h4>
            <p class="word-desc">{{word.desc}}</p>
          </li>
        </ul>
      </aside>
      <div id="edit-panel">
        <WordItem :activeId="activeId"></WordItem>
      </div>
    </div>
  </div>
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

<style>
  #edit-body {
    display: flex;
  }
  #edit-aside-list {
    width: 18rem;
    margin-right: 2rem;
    background: #f7f7f7;
  }
  #edit-aside-list ul {
    margin: 0;
    padding: 0;
  }
  #edit-aside-list .word-item {
    padding: 0.5rem 1rem;
    border-bottom: 1px dashed #ddd;
    cursor: pointer;
  }
  #edit-aside-list .word-item.active {
    background: #eee;
  }
  #edit-aside-list .word-spell {
    margin: 0 0 0.5rem 0;
    padding: 0;
  }
  #edit-aside-list .word-desc {
    margin: 0;
    padding: 0;
  }
</style>