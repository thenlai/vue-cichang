<template>
  <div id="app">
    <selection :index="option.index" :selections="option.selections"></selection>
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
        index: 1,
        selections: ['abka', 'edun', 'na', 'ula']
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
}
</style>
