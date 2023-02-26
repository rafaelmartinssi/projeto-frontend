<script setup lang="ts"></script>

<template>
  <v-list class="text-light" density="compact" nav>
    <v-text-field
      color="primary"
      label="O que deseja buscar?"
      density="compact"
      hide-details
      variant="outlined"
      class="my-4"
    >
      <template #append-inner>
        <v-icon color="primary">mdi-magnify</v-icon>
      </template>
    </v-text-field>

    <v-list-item
      color="primary"
      variant="plain"
      :active="$route.name === 'home'"
      prepend-icon="mdi-home-outline"
      @click="$router.push({ name: 'home' })"
    >
      <v-list-item-title class="text-subtitle-1 font-weight-regular">
        Início
      </v-list-item-title>
    </v-list-item>

    <v-list-item
      color="primary"
      variant="plain"
      :active="$route.name === 'account'"
      prepend-icon="mdi-account-outline"
      @click="$router.push({ name: 'account' })"
    >
      <v-list-item-title class="text-subtitle-1 font-weight-regular">
        Conta
      </v-list-item-title>
    </v-list-item>

    <v-list-group>
      <template #activator="{ props }">
        <v-list-item
          color="primary"
          variant="plain"
          v-bind="props"
          prepend-icon="mdi-finance"
        >
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
