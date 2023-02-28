<script lang="ts" setup>
import { ref, onMounted } from "vue"
import AppCardDefault from "@/components/AppCardDefault.vue"

const teleport = "#title"
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>
<template>
  <teleport v-if="mounted" :to="teleport">Início</teleport>
  <AppCardDefault>
    <template #content> </template>
  </AppCardDefault>
</template>
<style scoped lang="scss"></style>
