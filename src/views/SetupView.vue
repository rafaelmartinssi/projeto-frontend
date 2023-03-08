<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue"
import AppCardDefault from "@/components/AppCardDefault.vue"
import { CategoryModel } from "@/models/CategoryModel"

const teleport = "#title"
const mounted = ref(false)

interface State {
  category: CategoryModel
}

const state = reactive<State>({
  category: {} as CategoryModel
})

onMounted(() => {
  mounted.value = true
})
</script>
<template>
  <teleport v-if="mounted" :to="teleport">Configuração de agenda</teleport>
  <AppCardDefault>
    <template #content>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card elevation="0" class="card px-5">
            <v-card-title class="text-h6 text-fontdark font-weight-bold mt-5">
              Criar categoria
            </v-card-title>
            <v-card-text
              class="font-weight-regular text-fontdark text-subtitle-2 mt-5"
            >
              <v-form ref="form">
                <v-row class="mt-3">
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="state.category.title"
                      density="compact"
                      label="Título"
                      hide-details="auto"
                      color="primary"
                      variant="outlined"
                      :rules="[(v: number) => !!v || 'Campo obrigatório']"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="my-0 mt-2">
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="state.category.color"
                      color="primary"
                      density="compact"
                      label="Cor"
                      placeholder="Selecione"
                      hide-details="auto"
                      variant="outlined"
                      :rules="[(v: number) => !!v || 'Campo obrigatório']"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card elevation="0" class="card px-5">
            <v-card-title class="text-h6 text-fontdark font-weight-bold mt-5">
              Categorias cadastradas
            </v-card-title>
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
