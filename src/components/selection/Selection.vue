<template>
  <section>
    <h1 class="hint">{{hint}}</h1>
    <ul :class='["selection-list", {error: isError}]'>
      <li
      v-for='(item, i) in selections'
      @click.stop='submit(i)'
      :class='["selection", {"selected": selectedIndex===i}, {"answer": index===i}]'
      >{{item}}</li>
    </ul>
    <div v-if="isError" class="action-group">
      <button class="action view">view</button>
      <button class="action next">next</button>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['hint', 'selections', 'index'],
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
  .hint {
    font-size: 2rem;
    text-align: center;
    margin: 2rem 0.8rem 3rem 0.8rem;
  }
  .selection-list {
    padding: 0;
    margin: 0;
  }
  .selection {
    cursor: pointer;
    list-style: none;
    padding: 0.6rem 1rem;
    font-size: 1.4rem;
    background-color: rgba(240,240,240,.8);
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
  .error .answer {
    background-color: #dcffdc;
    color: green;
  }
  .answer.selected {
    background-color: #dcffdc;
    color: green;
  }
  .selected {
    animation: 0.6s selected alternate;
  }
  @keyframes selected {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  .action-group {
    display: flex;
    justify-content: space-between;
  }
  .action-group .action {
    flex: 1;
    padding: 0.6rem;
    background: none;
    border: none;
    outline: none;
    font-size: 1.2rem;
    margin: 2rem 0 0 0;
    border-radius: 0.2rem;
  }
  .action-group .action.view {
    background: #333;
    color: #fff;
    margin-right: 0.5rem;
  }
  .action-group .action.next {
    background: #eee;
    color: #111;
    margin-left: 0.5rem;
  }
</style>