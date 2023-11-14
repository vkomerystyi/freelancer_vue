<template>
  <div class="task-container">
    <div>{{ task.title }}</div>
    <div>{{ task.priority }}</div>
    <button @click="onDelete">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    onDelete() {
      this.$emit('delete', this.task.id)
    },
  },
}
</script>

<style lang="css" scoped>
.task-container {
  display: flex;
  justify-content: space-between;
  width: 500px;
}
</style>
