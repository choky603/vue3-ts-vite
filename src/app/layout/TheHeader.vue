<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>||
        <RouterLink to="/todo">Todo</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
nav {
  background-color: yellow;
  width: 100%;
  line-height: 40px;
}
</style>
