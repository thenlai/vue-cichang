<template lang="jade">
.set-list
  h1 Editor list
  ul
    li(v-for="(li, i) in list", @click.stop="goEdit(i)")
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
      goEdit (id) {
        // this.$history.push(id)
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