<template lang="jade">
  #app
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
html,
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

* {
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}

input,
textarea,
.selectable {
    -webkit-touch-callout:default;
    -webkit-user-select:text;
    -moz-user-select:text;
    -ms-user-select:text;
    user-select:text;
}
</style>