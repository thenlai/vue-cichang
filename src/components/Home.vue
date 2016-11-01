<template lang="jade">
div
  h1 {{name}}
  button(@click="game") game
  button(@click="editor") editor
  router-view
</template>

<script>
export default {
  data () {
    return {
      name: 'Word Builder Home'
    }
  },
  methods: {
    game () {
      this.$router.push({
        name: 'game'
      })
    },
    editor () {
      this.$router.push({
        name: 'editList'
      })
    }
  }
}
</script>

<style lang="scss">

</style>