<script lang="ts" setup>
import AppCardDefault from "@/components/AppCardDefault.vue"
import services from "@/services"
import { Password } from "src/store/types"
import { reactive, ref } from "vue"

const form = ref()
const alertSuccess = ref(false)
const alertError = ref(false)
const message = ref("")
const checkSenha = ref()

interface State {
  password: Password
}

const state = reactive<State>({
  password: {} as Password
})

const onReset = () => {
  state.password = {} as Password
  checkSenha.value = undefined
}

const onSubmit = async () => {
  const confirm = await form.value.validate()
  if (confirm) {
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
  <AppCardDefault :title="'Senhas'" :icon="'mdi-lock-check'">
    <template #content>
      <v-alert v-model="alertSuccess" class="mx-4" closable type="success">
        Dados salvos com sucesso
      </v-alert>
      <v-alert v-model="alertError" class="mx-4" closable type="error">
        {{ message }}
      </v-alert>
      <v-card class="mt-3" elevation="0">
        <v-card-title class="text-h5 py-0"> Alteração de senha </v-card-title>

        <v-card-text class="text-h6 font-weight-light mt-4">
          Informe a senha atual a nova senha e confime a nova senha para
          alteração.
          <v-form ref="form">
            <v-row class="mt-3">
              <v-col sm="12" xs="12" md="6" lg="6" xl="12">
                <v-text-field
                  v-model="state.password.senhaAtual"
                  type="password"
                  hide-details="auto"
                  variant="outlined"
                  density="compact"
                  label="Senha atual"
                  :rules="[(v: number) => !!v || 'Campo obrigatório']"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="">
              <v-col sm="12" xs="12" md="6" lg="6" xl="12">
                <v-text-field
                  v-model="state.password.novaSenha"
                  type="password"
                  hide-details="auto"
                  variant="outlined"
                  density="compact"
                  label="Nova senha"
                  :rules="[(v: number) => !!v || 'Campo obrigatório']"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="">
              <v-col sm="12" xs="12" md="6" lg="6" xl="12">
                <v-text-field
                  v-model="checkSenha"
                  type="password"
                  hide-details="auto"
                  variant="outlined"
                  density="compact"
                  label="Confirme nova senha"
                  :rules="[(v: number) => !!v || 'Campo obrigatório', 
                  val => val === state.password.novaSenha || 'Nova senha não confere']"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions class="ml-2">
          <v-row class="mb-2">
            <v-col sm="12" xs="12" md="6" lg="6" xl="12">
              <v-btn
                variant="outlined"
                min-width="150"
                color="primary"
                class="text-capitalize mr-3"
                @click="$router.push('account')"
              >
                Voltar
              </v-btn>
              <v-btn
                min-width="150"
                variant="flat"
                color="primary"
                class="text-capitalize"
                @click="onSubmit"
              >
                Salvar
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </template>
  </AppCardDefault>
</template>
<style scoped lang="scss">
.card-default {
  height: calc(100% - 15px);
}
</style>
