<template>
  <div>
    <h1>Editor</h1>
    <ul>
      <li v-for="li in list" @click.stop="goEdit">
        {{li.name}}
      </li>
    </ul>
    <button @click.stop="newSet">new set</button>
    <router-view></router-view>
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
</style>