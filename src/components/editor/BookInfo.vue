<template lang="jade">
#new-book
  h1 new book
  input(type="text", v-model="name", placeholder="book name")br
  input(type="text", v-model="lang", placeholder="language")br
  input(type="text", v-model="desc", placeholder="description")br
  button.new-book-add add
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        lang: '',
        desc: ''
      }
    },
    created () {
      //
    },
    methods: {
      submit () {
        this.$emit('new-book')
      }
    }
  }
</script>

<style lang="scss">
#new-book {

}
</style>