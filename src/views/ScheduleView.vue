<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue"
import AppCardDefault from "@/components/AppCardDefault.vue"
import { ScheduleModel } from "@/models/ScheduleModel"

interface State {
  schedule: ScheduleModel
}

const state = reactive<State>({
  schedule: {} as ScheduleModel
})

const teleport = "#title"
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>
<template>
  <teleport v-if="mounted" :to="teleport">Minha agenda</teleport>
  <AppCardDefault>
    <template #content>
      <v-row>
        <v-col cols="12" sm="4">
          <v-card elevation="0" class="card px-5">
            <v-card-text
              class="font-weight-regular text-fontdark text-subtitle-2 mt-5"
            >
              <div class="text-center">
                <v-avatar color="primary" variant="tonal" size="65">
                  <v-icon size="40">mdi-expand-all-outline</v-icon>
                </v-avatar>
              </div>
              <div class="text-center text-h6 mt-2">Cadastro de tarefas</div>
              <div class="text-center text-body-2 text-fontlight mt-2">
                Crie novas tarefas e controle sua agenda através de uma
                ferramenta simples e prática.
              </div>
              <v-form ref="form">
                <v-row class="mt-3">
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="state.schedule.title"
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
                      v-model="state.schedule.details"
                      color="primary"
                      density="compact"
                      label="Detalhes"
                      hide-details="auto"
                      variant="outlined"
                      :rules="[(v: number) => !!v || 'Campo obrigatório']"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="my-0">
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="state.schedule.date"
                      color="primary"
                      maska="##/##/####"
                      density="compact"
                      label="Data"
                      hide-details="auto"
                      variant="outlined"
                      :rules="[(v: number) => !!v || 'Campo obrigatório']"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="my-0">
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="state.schedule.init"
                      color="primary"
                      density="compact"
                      label="Hora início"
                      maska="##/##"
                      hide-details="auto"
                      variant="outlined"
                      :rules="[(v: number) => !!v || 'Campo obrigatório']"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="state.schedule.end"
                      color="primary"
                      density="compact"
                      label="Hora fim"
                      maska="##/##"
                      hide-details="auto"
                      variant="outlined"
                      :rules="[(v: number) => !!v || 'Campo obrigatório']"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
              <v-row class="mt-2">
                <v-col cols="12" sm="6">
                  <v-btn
                    rounded="lg"
                    color="primary"
                    class="w-100 text-capitalize"
                  >
                    Salvar
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn
                    rounded="lg"
                    variant="outlined"
                    color="primary"
                    class="w-100 text-capitalize"
                  >
                    Cancelar
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="8">
          <v-card elevation="0" class="card px-5">
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
