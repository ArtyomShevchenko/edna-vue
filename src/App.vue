<script setup>
import { RouterView } from 'vue-router'
import { watch, onBeforeMount } from "vue"

import { useLangStore } from "@/store/lang"
const langStore = useLangStore()

watch(() => langStore.lang, (state) => {
  localStorage.setItem("lang", state)
})

onBeforeMount(() => {
  if (localStorage.getItem("lang")) {
    langStore.lang = localStorage.getItem("lang")
  }
})

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
