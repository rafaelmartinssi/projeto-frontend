<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>
<template>
  <v-card class="h-100 rounded-0 bg-base">
    <v-card-title class="text-h5 text-light font-weight-regular mt-3">
      {{ props.title }}
    </v-card-title>
    <v-card-text class="">
      <slot name="content"></slot>
    </v-card-text>
  </v-card>
</template>
<style scoped lang="scss"></style>
