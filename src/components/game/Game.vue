<template>
  <div>
    <h4>game</h4>
    <router-view></router-view>
  </div>
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

<style>
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