<template>
  <div class="word-item">
    <input type="text" placeholder="word spell" v-model="spell">
    <br>
    <textarea placeholder="word description" v-model="desc"></textarea>
    <br>
    <h4>Confusing spell:</h4>
    <input v-model="conf_spell[0]"></input><br>
    <input v-model="conf_spell[1]"></input><br>
    <input v-model="conf_spell[2]"></input><br>
    <input v-model="conf_spell[3]"></input><br>
    <br>
    <h4>Confusing descriptions:</h4>
    <input v-model="conf_desc[0]"></input><br>
    <input v-model="conf_desc[1]"></input><br>
    <input v-model="conf_desc[2]"></input><br>
    <input v-model="conf_desc[3]"></input><br>
    <br>
    <button @click="submit">{{activeId===null ? 'create': 'edit'}}</button>
  </div>
</template>

<script>
import types from '../../../store/types'

export default {
  props: {
    activeId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      spell: '',
      desc: '',
      conf_spell: [],
      conf_desc: []
    }
  },
  created () {
  },
  methods: {
    submit () {
      // or:
      // this.$emit('submit-edit', {})
      this.$store.commit(types.ADD_WORD, {
        spell: this.spell,
        desc: this.desc,
        conf_spell: this.conf_spell,
        conf_desc: this.conf_desc
      })
    }
  }
}
</script>

<style scoped>
  .word-item {

  }
</style>