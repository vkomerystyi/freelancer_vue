<template>
  <todo-manager />
</template>

<script>
import TodoManager from './components/TodoManager.vue'

export default {
  name: 'App',
  components: {
    TodoManager,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
