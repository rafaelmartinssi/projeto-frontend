<script lang="ts" setup>
import AppCardDefault from "@/components/AppCardDefault.vue"
import { useMainStore } from "@/store"
import { useRouter } from "vue-router"

const router = useRouter()

const main = useMainStore()
const prev = (value: number, path: string) => {
  main.setPath(value)
  router.push({ name: path })
}
</script>
<template>
  <AppCardDefault :title="'Minha conta'" :icon="'mdi-card-account-details'">
    <template #content>
      <v-card class="mt-3" elevation="0">
        <v-card-title class="text-h5 py-0"> Dados cadastrais </v-card-title>

        <v-card-text class="text-h6 font-weight-light mt-4">
          <v-row class="mt-5 mb-0">
            <v-col class="py-0" sm="4" xs="4" md="4" lg="2" xl="2">
              <v-label class="bg-primary pl-3 py-2 w-100">Nome:</v-label>
            </v-col>
            <v-col class="py-0" sm="8" xs="8" md="8" lg="10" xl="10">
              <v-label class="py-2">{{ main.user.nome }}</v-label>
            </v-col>
          </v-row>
          <v-row class="mt-0 mb-0">
            <v-col class="py-0" sm="4" xs="4" md="4" lg="2" xl="2">
              <v-label class="bg-primary pl-3 py-2 w-100">Email:</v-label>
            </v-col>
            <v-col class="py-0" sm="8" xs="8" md="8" lg="10" xl="10">
              <v-label class="py-2">{{ main.user.email }}</v-label>
            </v-col>
          </v-row>
          <div class="my-7">
            Para substituir informações de senha clique no botão abaixo.
          </div>
          <v-row class="mb-2">
            <v-col sm="12" xs="12" md="6" lg="6" xl="12">
              <v-btn
                append-icon="mdi-chevron-right"
                variant="plain"
                class="text-capitalize text-primary"
                @click="$router.push('password')"
              >
                Alterar Senha
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="ml-2">
          <v-row class="mb-2">
            <v-col sm="12" xs="12" md="6" lg="6" xl="12">
              <v-btn
                variant="outlined"
                min-width="150"
                color="primary"
                class="text-capitalize mr-3"
                @click="prev(1, 'home')"
              >
                Voltar
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </template>
  </AppCardDefault>
</template>
<style scoped lang="scss">
.card-primary {
  border: 1px solid #c0c0c0;
}

.v-label {
  border-bottom: 1px solid #ffffff;
  opacity: 1;
}
.card-default {
  height: calc(100% - 15px);
}
</style>
