<template>
  <section>
    <h1>Start your vocabulary project:</h1>
    <input type='text' placeholder='project name' v-model='name'>
    <br>
    <input type='text' placeholder='description' v-model='desc'>
    <br>
    <input type='text' placeholder="language" v-model='lang'>
    <br>
    <button @click.prevent="create">create</button>
    <dashboard />
  </section>
</template>

<script>
  import dashboard from './Dashboard'
  export default {
    data () {
      return {
        name: '',
        desc: '',
        lang: ''
      }
    },
    components: {
      dashboard
    },
    methods: {
      create () {
        const project = {
          name: this.name,
          desc: this.desc
        }
        return project
      }
    }
  }
</script>

<style scoped>
</style>
