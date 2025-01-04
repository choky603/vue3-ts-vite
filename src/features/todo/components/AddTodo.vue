<template>
  <div>
    <input v-model="title" @keyup.enter="add" placeholder="Add a new task" />
    <button @click="add">Add</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/features/todo/store/useTodoStore'

const title = ref('')
const todoStore = useTodoStore()

const add = () => {
  if (title.value.trim()) {
    todoStore.addTodo(title.value.trim())
    title.value = ''
  }
}
</script>
