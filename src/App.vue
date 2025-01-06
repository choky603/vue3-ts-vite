<template>
  <TheHeader></TheHeader>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/app/layout/TheHeader.vue'
</script>

<style scoped>
nav {
  background-color: yellow;
  width: 100%;
  line-height: 40px;
}
</style>
