<script setup lang="ts">
import { useMainStore } from "@/store"

const main = useMainStore()
</script>

<template>
  <v-list class="bg-base text-light" density="compact" nav>
    <v-list-item
      prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
      :title="main.user.nome"
      :subtitle="main.user.email"
    >
      <template #append>
        <v-btn size="small" variant="text" icon="mdi-cog"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item
      class="mt-2"
      :active="$route.name === 'home'"
      prepend-icon="mdi-home-outline"
      @click="$router.push({ name: 'home' })"
    >
      <v-list-item-title class="text-subtitle-1 font-weight-regular">
        Início
      </v-list-item-title>
    </v-list-item>

    <v-list-item
      :active="$route.name === 'account'"
      prepend-icon="mdi-account-outline"
      @click="$router.push({ name: 'account' })"
    >
      <v-list-item-title class="text-subtitle-1 font-weight-regular">
        Conta
      </v-list-item-title>
    </v-list-item>

    <v-list-subheader class="mt-2">FINANCEIRO</v-list-subheader>

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
