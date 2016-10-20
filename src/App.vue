<template>
  <div id="app">
    <header>
      <button class="action quit">quit</button>
      <span class="progress-bar">

      </span>
      <span class="statistics"></span>
    </header>
    <selection :hint="option.hint" :index="option.index" :selections="option.selections"></selection>
  </div>
</template>

<script>
import Selection from './components/selection/Selection'

export default {
  name: 'app',
  components: {
    Selection
  },
  data: function () {
    return {
      option: {
        hint: 'wind',
        index: 1,
        selections: ['そら', 'かぜ', 'あめ', 'かわ']
      }
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
