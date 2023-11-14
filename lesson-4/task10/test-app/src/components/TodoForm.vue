<template>
  <div>
    <div>
      <label>
        Задача
        <input type="text" v-model="title" />
      </label>
    </div>
    <div>
      <label>
        Пріоритер
        <input type="number" v-model="priority" />
      </label>
    </div>
    <button @click="onAdd">Додати</button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',

  data() {
    return {
      title: null,
      priority: null,
    }
  },

  methods: {
    onAdd() {
      const task = {
        id: new Date().getTime(),
        title: this.title,
        priority: this.priority,
      }
      this.$emit('add', task)
    },
  },
}
</script>

<style lang="scss" scoped></style>
