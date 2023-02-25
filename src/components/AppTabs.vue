<script setup lang="ts">
import { ref } from "vue"

export interface Tab {
  id: string
  title: string
  icon: string
}

const tab = ref(null)

const props = defineProps<{
  tabs: Tab[]
}>()
</script>
<template>
  <v-tabs v-model="tab" color="primary" class="mx-1 mb-7" density="compact">
    <v-tab
      v-for="item in props.tabs"
      :key="item.id"
      :prepend-icon="item.icon"
      width="170"
      class="text-body-2 text-disabled font-weight-regular mr-4 rounded"
      selected-class="bg-primary text-white"
      :value="item.id"
      hide-slider
    >
      {{ item.title }}
    </v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item
      v-for="item in props.tabs"
      :key="item.id"
      class="px-1 pb-1"
      :value="item.id"
    >
      <slot :name="`tab:${item.id}`"></slot>
    </v-window-item>
  </v-window>
</template>
<style scoped lang="scss"></style>
