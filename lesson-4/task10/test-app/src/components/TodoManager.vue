<template>
  <div>
    <todo-form @add="addTask" />
    <todo-item v-for="task in todoList" :key="task.id" :task="task" @delete="onDelete" />
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue'
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoManager',
  data() {
    return {
      todoList: [],
    }
  },
  components: { TodoForm, TodoItem },
  methods: {
    addTask(task) {
      this.todoList.push(task)
    },
    onDelete(taskIdToRemove) {
      this.todoList = this.todoList.filter((task) => task.id !== taskIdToRemove)
    },
  },
}
</script>

<style lang="scss" scoped></style>
