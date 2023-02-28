<script setup lang="ts"></script>

<template>
  <v-list class="bg-dark px-0" nav>
    <v-list-item
      rounded="0"
      class=""
      :active="$route.name === 'home'"
      prepend-icon="mdi-home"
      @click="$router.push({ name: 'home' })"
    >
      <v-list-item-title class="text-subtitle-1 font-weight-regular">
        Início
      </v-list-item-title>
    </v-list-item>

    <v-list-item
      rounded="0"
      :active="$route.name === 'account'"
      prepend-icon="mdi-account"
      @click="$router.push({ name: 'account' })"
    >
      <v-list-item-title class="text-subtitle-1 font-weight-regular">
        Conta
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
    <v-list-subheader class="text-fontlight">ADMINISTRADOR</v-list-subheader>
    <v-list-item
      rounded="0"
      :active="$route.name === 'users'"
      prepend-icon="mdi-account-box-multiple"
    >
      <v-list-item-title class="text-subtitle-1 font-weight-regular">
        Usuários
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>
<style scoped lang="scss">
.v-list-item {
  opacity: 47%;
}

.v-list-item--active {
  opacity: 75%;
  background: lighten($color: black, $amount: 5);
  border-left: 2px solid #ffffff;
}
</style>
