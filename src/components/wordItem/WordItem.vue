<template>
  <div class="word-item">
    <input type="text" placeholder="word spell" v-model="spell">
    <br>
    <textarea placeholder="word description" v-model="desc"><textarea>
    <br>
    

    <button @click="submit">create</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      spell: '',
      desc: ''
    }
  },
  methods: {
    submit: function() {

    }
  }
}
</script>

<style scoped>
  .word-item {

  }
</style>