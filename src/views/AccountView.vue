<script lang="ts" setup>
import { reactive, ref } from "vue"
import AppCardDefault from "@/components/AppCardDefault.vue"
import { useMainStore } from "@/store"
import { Password } from "src/store/types"
import services from "@/services"
import AppTabs, { type Tab } from "@/components/AppTabs.vue"

const main = useMainStore()

const form = ref()
const alertSuccess = ref(false)
const alertError = ref(false)
const message = ref("")

const tabs: Tab[] = [
  {
    id: "account",
    title: "CONTA",
    icon: "mdi-account-outline"
  },
  {
    id: "security",
    title: "SEGURANÇA",
    icon: "mdi-lock-outline"
  },
  {
    id: "finance",
    title: "FINANCEIRO",
    icon: "mdi-finance"
  }
]

interface State {
  password: Password
}

const state = reactive<State>({
  password: {} as Password
})

const onReset = () => {
  state.password = {} as Password
}

const onSubmit = async () => {
  const confirm = await form.value.validate()
  console.log(confirm.valid)
  if (confirm.valid) {
    const response = await services.user.changePassword(state.password)

    if (response.data.info.codigo === 0) {
      alertSuccess.value = true
      onReset()
      form.value.resetValidation()
    } else {
      alertError.value = true
      message.value = response.data.info.descricao
    }
  } else {
    return false
  }
  return false
}
</script>
<template>
  <AppCardDefault>
    <template #content>
      <v-snackbar
        v-model="alertSuccess"
        color="success"
        location="top right"
        :timeout="3000"
      >
        Dados salvos com sucesso.
      </v-snackbar>
      <v-snackbar
        v-model="alertError"
        color="error"
        location="top right"
        :timeout="3000"
      >
        {{ message }}
      </v-snackbar>
      <AppTabs :tabs="tabs">
        <template #tab:account>
          <v-card class="custom-card px-5">
            <v-card-title class="text-h6 text-light font-weight-regular mt-5">
              Dados cadastrais
            </v-card-title>

            <v-card-text class="font-weight-regular mt-5">
              <v-row class="mb-0">
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="main.user.nome"
                    readonly
                    class="custom-text-field"
                    label="Nome"
                    density="compact"
                    hide-details
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="main.user.email"
                    readonly
                    class="custom-text-field"
                    label="Email"
                    density="compact"
                    hide-details
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </template>
        <template #tab:security>
          <v-card class="custom-card px-5">
            <v-card-title class="text-h6 text-light font-weight-regular mt-5">
              Alteração de senha
            </v-card-title>

            <v-card-text class="font-weight-regular mt-3">
              <v-row class="text-body-1 text-medium-emphasis">
                <v-col> Requisitos para alteração de senha: </v-col>
              </v-row>
              <div class="text-body-1 text-medium-emphasis my-2">
                <v-icon class="ma-0">mdi-circle-small</v-icon>
                Pode conter letras e números.
              </div>
              <div class="text-body-1 text-medium-emphasis my-2">
                <v-icon class="ma-0">mdi-circle-small</v-icon>
                Conter de 6 a 8 caracteres.
              </div>
              <v-form ref="form">
                <v-row class="mt-3">
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="state.password.senhaAtual"
                      type="password"
                      density="compact"
                      label="Senha atual"
                      hide-details="auto"
                      placeholder="********"
                      color="primary"
                      variant="outlined"
                      :rules="[(v: number) => !!v || 'Campo obrigatório']"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="my-0 mt-2">
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="state.password.novaSenha"
                      color="primary"
                      type="password"
                      density="compact"
                      label="Nova senha"
                      placeholder="********"
                      hide-details="auto"
                      variant="outlined"
                      :rules="[(v: number) => !!v || 'Campo obrigatório']"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="state.password.confirmeSenha"
                      type="password"
                      hide-details="auto"
                      density="compact"
                      label="Confirme a nova senha"
                      variant="outlined"
                      placeholder="********"
                      color="primary"
                      :rules="[(v: number) => !!v || 'Campo obrigatório', 
                  (v:string) => v === state.password.novaSenha || 'Nova senha não confere']"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
            <v-card-actions class="ml-2">
              <v-row class="mb-2">
                <v-col sm="12" xs="12" md="6" lg="6" xl="12">
                  <v-btn
                    min-width="170"
                    variant="flat"
                    color="primary"
                    class="text-capitalize mr-3"
                    @click="onSubmit"
                  >
                    Salvar
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </template>
        <template #tab:finance>finanças</template>
      </AppTabs>
    </template>
  </AppCardDefault>
</template>
<style scoped lang="scss">
.custom-text-field {
  pointer-events: none;
}
.custom-card {
  box-shadow: 0px 2px 10px rgba(76, 78, 100, 0.22);
  border-radius: 10px;
}

.v-slide-group-item--active {
  opacity: 0.87;
}
</style>
