<script setup lang="ts">
const props = defineProps<{
  title: string
  icon: string
}>()
</script>
<template>
  <v-card elevation="1" class="card-default rounded-0 ma-2">
    <div class="d-flex align-center mt-4 ml-4">
      <v-icon size="35" class="text-primary"> {{ props.icon }} </v-icon>
      <v-card-title class="text-h4 text-primary">
        {{ props.title }}
      </v-card-title>
    </div>
    <v-card-text class="text-h5 font-weight-light">
      <slot name="content"></slot>
    </v-card-text>
  </v-card>
</template>
<style scoped lang="scss">
.card-default {
  height: calc(100% - 15px);
}
</style>
