<script setup lang="ts"></script>

<template>
  <v-list class="bg-dark px-0" nav>
    <v-list-item
      rounded="0"
      class="px-3"
      :active="$route.name === 'home'"
      prepend-icon="mdi-home"
      @click="$router.push({ name: 'home' })"
    >
      <v-list-item-title class="text-subtitle-1 font-weight-regular">
        Início
      </v-list-item-title>
    </v-list-item>

    <v-list-group>
      <template #activator="{ props }">
        <v-list-item
          class="px-3"
          rounded="0"
          v-bind="props"
          prepend-icon="mdi-finance"
        >
          <v-list-item-title class="text-subtitle-1 font-weight-regular">
            Financeiro
          </v-list-item-title>
        </v-list-item>
      </template>

      <v-list-item class="px-3">
        <v-list-item-title class="text-subtitle-1 font-weight-regular">
          Receitas
        </v-list-item-title>
      </v-list-item>

      <v-list-item class="px-3">
        <v-list-item-title class="text-subtitle-1 font-weight-regular">
          Despesas
        </v-list-item-title>
      </v-list-item>
    </v-list-group>

    <v-list-group>
      <template #activator="{ props }">
        <v-list-item
          class="px-3"
          rounded="0"
          v-bind="props"
          prepend-icon="mdi-monitor-dashboard"
        >
          <v-list-item-title class="text-subtitle-1 font-weight-regular">
            Administração
          </v-list-item-title>
        </v-list-item>
      </template>

      <v-list-item
        class="px-3"
        rounded="0"
        :active="$route.name === 'users'"
        @click="$router.push({ name: 'users' })"
      >
        <v-list-item-title class="text-subtitle-1 font-weight-regular">
          Usuários
        </v-list-item-title>
      </v-list-item>
    </v-list-group>

    <v-list-group>
      <template #activator="{ props }">
        <v-list-item
          class="px-3"
          rounded="0"
          v-bind="props"
          prepend-icon="mdi-calendar-check"
        >
          <v-list-item-title class="text-subtitle-1 font-weight-regular">
            Agenda
          </v-list-item-title>
        </v-list-item>
      </template>

      <v-list-item
        class="px-3"
        rounded="0"
        :active="$route.name === 'setup'"
        @click="$router.push({ name: 'setup' })"
      >
        <v-list-item-title class="text-subtitle-1 font-weight-regular">
          Configurar agenda
        </v-list-item-title>
      </v-list-item>
      <v-list-item
        class="px-3"
        rounded="0"
        :active="$route.name === 'schedule'"
        @click="$router.push({ name: 'schedule' })"
      >
        <v-list-item-title class="text-subtitle-1 font-weight-regular">
          Minha agenda
        </v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>
<style scoped lang="scss">
.v-list-item {
  opacity: 47%;
}

.v-list-item--active {
  opacity: 87%;
}
</style>
