<template>
  <ul :class='["selection-list", {error: isError}]'>
    <li
    v-for='(item, i) in selections'
    @click.stop='submit(i)'
    :class='["selection", {"selected": selectedIndex===i}]'
    >{{item}}</li>
  </ul>
</template>

<script>
  export default {
    props: ['selections', 'index'],
    methods: {
      submit: function (i) {
        if (this.selectedIndex !== null) {
          return
        }

        this.selectedIndex = i
        let t = (i === this.index)
        if (!t) {
          this.isError = true
        }
        return t
      }
    },
    data: function () {
      return {
        isError: false,
        selectedIndex: null
      }
    }
  }
</script>

<style scoped>
  .selection-list {
    padding: 0;
    margin: 0;
  }
  .selection {
    cursor: pointer;
    list-style: none;
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    background-color: rgba(249,249,249,.8);
    margin-top: 0.8rem;
    border-radius: 0.2rem;
  }
  .error {

  }
  .error .selected {
    text-decoration: none;
    color: red;
    background-color: #ffdede;
  }
  .selected {
    text-decoration: line-through;
  }
</style>