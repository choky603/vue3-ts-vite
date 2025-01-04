<template>
  <li>
    <span :class="{ completed: todo.completed }" @click="sendToggle">
      {{ todo.title }}
    </span>
    <button @click="sendDelete">Delete</button>
  </li>
</template>

<script setup lang="ts">
//import { useTodoStore } from '@/features/todo/store/useTodoStore'
import type { Todo } from '@/features/todo/store/useTodoStore'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{ todo: Todo }>()
const emit = defineEmits(['toggle', 'delete'])

//const todoStore = useTodoStore()

const sendToggle = () => {
  emit('toggle', props.todo.id)
}
const sendDelete = () => {
  emit('delete', props.todo.id)
  //todoStore.deleteTodo(props.todo.id)
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
