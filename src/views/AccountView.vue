<script lang="ts" setup></script>
<template>
  <v-card elevation="1" class="card-default rounded-0 ma-2">
    <v-card-title class="text-h4 mt-4 mb-4 font-weight-regular text-primary">
      Minha Conta
    </v-card-title>
    <v-card-text class="text-h5 font-weight-light">
      <v-btn
        variant="flat"
        color="primary"
        class="text-capitalize"
        @click="$router.push('password')"
      >
        Alterar Senha
      </v-btn>
    </v-card-text>
  </v-card>
</template>
<style scoped lang="scss">
.card-primary {
  border: 1px solid #c0c0c0;
}

.card-default {
  height: calc(100% - 15px);
}
</style>
