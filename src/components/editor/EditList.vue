<template lang="jade">
.set-list
  h1 Editor list
  ul
    li(v-for="li in list", @click.stop="goEdit")
      {{li.name}}
  button(@click.stop="newSet") new set
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

<style lang="scss">
  .set-list {
    
  }
</style>