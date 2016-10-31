<template>
  <div class="set-list">
    <h1>Editor list</h1>
    <ul>
      <li v-for="li in list" @click.stop="goEdit">
        {{li.name}}
      </li>
    </ul>
    <button @click.stop="newSet">new set</button>
  </div>
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
  .set-list {
    
  }
</style>