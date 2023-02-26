<script setup lang="ts">
import { useMainStore } from "@/store"

const main = useMainStore()
</script>

<template>
  <v-list class="bg-base text-light" density="compact" nav>
    <v-list-item
      class="py-3"
      :active="$route.name === 'account'"
      prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
      :title="main.user.nome"
      :subtitle="main.user.email"
    >
      <template #append>
        <v-tooltip text="Conta">
          <template #activator="{ props }">
            <v-icon
              v-bind="props"
              color="light"
              @click="$router.push({ name: 'account' })"
            >
              mdi-cog
            </v-icon>
          </template>
        </v-tooltip>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-text-field
      append-inner-icon="mdi-magnify"
      label="O que deseja buscar?"
      density="compact"
      hide-details
      variant="outlined"
      class="my-4"
    ></v-text-field>

    <v-list-item
      :active="$route.name === 'home'"
      prepend-icon="mdi-home-outline"
      @click="$router.push({ name: 'home' })"
    >
      <v-list-item-title class="text-subtitle-1 font-weight-regular">
        Início
      </v-list-item-title>
    </v-list-item>

    <v-list-group>
      <template #activator="{ props }">
        <v-list-item v-bind="props" prepend-icon="mdi-finance">
          <v-list-item-title class="text-subtitle-1 font-weight-regular">
            Financeiro
          </v-list-item-title>
        </v-list-item>
      </template>

      <v-list-item>
        <v-list-item-title class="text-subtitle-1 font-weight-regular">
          Receitas
        </v-list-item-title>
      </v-list-item>

      <v-list-item>
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
