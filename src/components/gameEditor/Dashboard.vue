<template>
  <div>
    <ul>
      <li v-for="item in list">
        <h4>{{item.spell}}</h4>
        <p>{{item.desc}}</p>
        <button @click="edit">edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          spell: 'homme',
          desc: 'man, person [masuline noun]',
          word_select: ['femme', 'fille', 'garçon']
        }]
      }
    },
    methods: {
      edit () {
        console.log('edit')
      }
    }
  }
</script>

<style>
</style>