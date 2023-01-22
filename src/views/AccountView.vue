<script lang="ts" setup>
import { reactive, ref } from "vue"
import AppCardDefault from "@/components/AppCardDefault.vue"
import { useMainStore } from "@/store"
import { useRouter } from "vue-router"
import { Password } from "src/store/types"
import services from "@/services"

const router = useRouter()

const main = useMainStore()

const form = ref()
const alertSuccess = ref(false)
const alertError = ref(false)
const message = ref("")
const tab = ref()

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

const prev = (value: number, path: string) => {
  main.setPath(value)
  router.push({ name: path })
}
</script>
<template>
  <AppCardDefault>
    <template #content>
      <v-alert v-model="alertSuccess" class="" closable type="success">
        Dados salvos com sucesso
      </v-alert>
      <v-alert v-model="alertError" class="" closable type="error">
        {{ message }}
      </v-alert>
      <v-tabs v-model="tab" color="primary" class="mb-5" density="compact">
        <v-tab
          prepend-icon="mdi-account-outline"
          width="170"
          class="text-body-2 text-disabled font-weight-regular mr-4 rounded"
          selected-class="bg-primary text-white"
          value="one"
          hide-slider
        >
          CONTA
        </v-tab>
        <v-tab
          prepend-icon="mdi-lock-outline"
          width="170"
          class="text-body-2 text-disabled font-weight-regular mr-4 rounded"
          selected-class="bg-primary text-white"
          value="two"
        >
          SEGURANÇA
        </v-tab>
        <v-tab
          prepend-icon="mdi-finance"
          width="170"
          class="text-body-2 text-disabled font-weight-regular mr-4 rounded"
          selected-class="bg-primary text-white"
          value="three"
        >
          FINANCEIRO
        </v-tab>
      </v-tabs>
      <v-card class="custom-card mt-3 px-5">
        <v-card-title class="text-h6 text-light font-weight-regular mt-5">
          Dados cadastrais
        </v-card-title>

        <v-card-text class="font-weight-regular mt-5">
          <v-row class="mb-0">
            <v-col class="" sm="12" xs="12" md="12" lg="6" xl="6">
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
            <v-col class="" sm="12" xs="12" md="12" lg="6" xl="6">
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
      <v-card class="custom-card mt-5 px-5">
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
              <v-col sm="12" xs="12" md="6" lg="6" xl="12">
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
              <v-col sm="12" xs="12" md="6" lg="6" xl="12">
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
              <v-col sm="12" xs="12" md="6" lg="6" xl="12">
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
              <v-btn
                variant="outlined"
                min-width="170"
                color="primary"
                class="text-capitalize"
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
