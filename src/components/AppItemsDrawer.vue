<script setup lang="ts"></script>

<template>
  <v-list class="bg-base text-light" density="compact" nav>
    <v-list-item
      class="bg-primary mx-2 mb-6"
      :active="$route.name === 'account'"
      @click="$router.push({ name: 'account' })"
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
