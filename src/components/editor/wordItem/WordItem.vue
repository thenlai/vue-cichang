<template lang="jade">
.word-item
  input.spell(type="text", placeholder="word spell", v-model="spell")
  br
  textarea(placeholder="word description", v-model="desc")
  br
  h4 Examples
  textarea(placeholder="examples, {...} for the word it self")
  div
    input(type="checkbox")
    label 使用自定义混淆词
  h4 Confusing words:
  ul.list
    li(v-for="i in [0,1,2,3]")
      input(v-model="conf_spell[i]")
  br
  div
    input(type="checkbox")
    label 使用自定义混淆解释
  h4 Confusing descriptions:
  input(v-model="conf_desc[0]")br
  input(v-model="conf_desc[1]")br
  input(v-model="conf_desc[2]")br
  input(v-model="conf_desc[3]")br
  br
  button(@click="submit"){{activeId===null ? 'create': 'edit'}}
</div>
</template>

<script>
export default {
  props: {
    activeId: {
      type: Number,
      required: true
    },
    word: {
      type: Object,
      required: true
    }
  },
  data () {
    return {...this.word}
  },
  computed: {
  },
  created () {
  },
  methods: {
    submit () {
      // or:
      if (this.activeId !== null) {
        this.$emit('eidt-word', this.word)
      } else {
        this.$emit('add-word', this.word)
      }
    }
  },
  watch: {
    'activeId': function (newId) {
    }
  }
}
</script>

<style lang="scss">
  .word-item {
    input,
    textarea {
      outline: none;
    }
    .spell {
      border: none;
      border-bottom: 1px dashed #333;
      font-size: 2rem;
      color: #111;
      margin-bottom: 1.5rem;
    }
  }
  .list li {
    list-style-type: none;
  }
</style>