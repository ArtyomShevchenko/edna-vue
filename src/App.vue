<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue';
import ToTopButton from "./components/ToTopButton.vue"

</script>

<template>
  <HeaderComp />
  <RouterView />
  <ToTopButton />
</template>

<style scoped></style>
