<template>
div
  h4 {{name}}
  router-view
</template>

<script>
  export default {
    data () {
      return {
        name: 'word game'
      }
    }
  }
</script>

<style lang="scss">
#app-game {
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
  .quit {
  }
}

.progress-bar {
  flex: 1;
  text-align: center;
}

.action {
  background: none;
  border: none;
  outline: none;
  &:active {
    outline: none;
  }
}
</style>