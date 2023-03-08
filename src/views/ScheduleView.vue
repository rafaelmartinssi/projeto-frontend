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
  <teleport v-if="mounted" :to="teleport">Configuração de agenda</teleport>
  <AppCardDefault>
    <template #content>
      <v-row>
        <v-col cols="12" sm="4">
          <v-card elevation="0" class="card px-5">
            <v-card-text
              class="font-weight-regular text-fontdark text-subtitle-2 mt-5"
            >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="8">
          <v-card elevation="0" class="card px-5">
            <v-card-text
              class="font-weight-regular text-fontdark text-subtitle-2 mt-5"
            >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </AppCardDefault>
</template>
<style scoped lang="scss">
.card {
  border: 1px solid #dcdcdc;
}
</style>
