<template>
  <div>
    <h1>{{spell}}</h1>
    <ul>
      <li
      v-for="(letter, index) in spellCandidates"
      @click="select(index)">
        <button>{{letter}}<button>
      </li>
      <li>
      <button @click="check">del</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['spell', 'spellCandidates'],
    data: function() {
      return {
        spellInput: []
      }
    },
    computed: {
      spellLength: function() {
        return this.spell.length
      }
    },
    methods: {
      check: function() {
        if (spellInput.length < this.spellLength) {
           this.spellInput.pop()
          // remove letter
        }
        else {
          // submit
        }
      },
      select: function(index) {
        if (spellInput.length >= this.spellLength) {
          return
        }
        this.spellInput.push(spellCandidates[index])

        if (spellInput.length === this.spellLength) {
          // delete button become submit
        }
      }
    }
  }
</script>

<style scoped>

</style>