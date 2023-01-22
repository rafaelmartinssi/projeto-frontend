<script setup lang="ts">
import { ref } from "vue"
import { useMainStore } from "@/store"
import { useRouter } from "vue-router"

const router = useRouter()
const main = useMainStore()

const finance = ref(false)

const redirect = (value: number, path: string) => {
  main.setPath(value)
  router.push({ name: path })
}
</script>

<template>
  <v-list class="bg-base text-light" density="compact" nav>
    <v-list-item
      class="bg-primary mx-2 mb-6"
      :active="main.path === 2"
      @click="redirect(2, 'account')"
    >
      <template #prepend>
        <v-icon class="mx-2">mdi-circle-small</v-icon>
      </template>
      <v-list-item-title class="text-subtitle-1 font-weight-regular">
        Gestão de conta
      </v-list-item-title>
    </v-list-item>

    <v-list-subheader>ITENS MENU</v-list-subheader>

    <v-list-item
      :active="main.path === 1"
      prepend-icon="mdi-home-outline"
      @click="redirect(1, 'home')"
    >
      <v-list-item-title class="text-subtitle-1 font-weight-regular">
        Início
      </v-list-item-title>
    </v-list-item>

    <v-list-group>
      <template #activator="{ props }">
        <v-list-item
          v-bind="props"
          :active="main.path === 3 || main.path === 4 || finance"
          prepend-icon="mdi-finance"
          @click="finance = !finance"
        >
          <v-list-item-title class="text-subtitle-1 font-weight-regular">
            Financeiro
          </v-list-item-title>
        </v-list-item>
      </template>

      <v-list-item :active="main.path === 3" @click="redirect(3, 'home')">
        <v-list-item-title class="text-subtitle-1 font-weight-regular">
          Receitas
        </v-list-item-title>
      </v-list-item>

      <v-list-item :active="main.path === 4" @click="redirect(4, 'home')">
        <v-list-item-title class="text-subtitle-1 font-weight-regular">
          Despesas
        </v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>
<style scoped lang="scss">
.v-list-item {
  opacity: 87%;
}
</style>
