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
  <v-tabs
    v-model="tab"
    color="primary"
    class="mx-1 mb-7 text-light"
    centered
    stacked
  >
    <v-tab
      v-for="item in props.tabs"
      :key="item.id"
      rounded
      hide-slider
      width="170"
      :value="item.id"
    >
      <v-icon>{{ item.icon }}</v-icon>
      {{ item.title }}
    </v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item
      v-for="item in props.tabs"
      :key="item.id"
      class="px-1 pb-1 pt-1"
      :value="item.id"
    >
      <slot :name="`tab:${item.id}`"></slot>
    </v-window-item>
  </v-window>
</template>
<style scoped lang="scss"></style>
