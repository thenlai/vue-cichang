<template lang="jade">
div#editor
  router-view
</template>

<script>
  export default {
    data () {
      return {
        list: this.$store.getters.editWords
      }
    },
    created () {
      //
    },
    methods: {
      goEdit () {

      },
      newSet () {

      }
    }
  }
</script>

<style>
</style>