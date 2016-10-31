<template>
  <div id="app">
    <header id="app-header">
      <button class="action quit">quit</button>
      <span class="progress-bar">
        {{current}} - {{total}}
      </span>
      <span class="statistics">{{score}}</span>
    </header>
    <selection v-bind="games[0]"></selection>
    <router-view></router-view>
  </div>
</template>

<script>
import Selection from './components/selection/Selection'

export default {
  name: 'app',
  components: {
    Selection
  },
  computed: {
    total: function () { return this.games.length }
  },
  data: function () {
    return {
      games: [{
        hint: 'wind',
        index: 1,
        selections: ['そら', 'かぜ', 'あめ', 'かわ']
      }],
      current: 1,
      score: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 10px;
  max-width: 640px;
  margin: 0 auto;
}
#app-header {
  display: flex;
  justify-content: space-between;
}
#app-header .quit {
  
}
.progress-bar {
  flex: 1;
  text-align: center;
}

.action {
  background: none;
  border: none;
  outline: none;
}
.action:active {
  outline: none;
}

* {
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
input, textarea, .selectable {
    -webkit-touch-callout:default;
    -webkit-user-select:text;
    -moz-user-select:text;
    -ms-user-select:text;
    user-select:text;
}
</style>
