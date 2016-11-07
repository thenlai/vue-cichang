<template>
.word-item
  input(type="text", placeholder="word spell", v-model="spell")
  br
  textarea(placeholder="word description", v-model="desc")
  br
  h4 Confusing spell:
  ul
    li(v-for="i in [1, 2, 3, 4]")
      input(v-model="conf_spell[i-1]")
      br
  br
  h4 Confusing descriptions:
  ul
    li(v-for="i in [1, 2, 3, 4]")
      input(v-model="conf_desc[i-1]")
      br
  br
  button(@click="submit") {{activeId===null ? 'create': 'edit'}}
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