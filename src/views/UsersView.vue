<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue"
import services from "@/services"
import AppCardDefault from "@/components/AppCardDefault.vue"
import { User } from "@/store/types"

const teleport = "#title"
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
  search()
})

interface State {
  users: User[]
}

const state = reactive<State>({
  users: []
})

const search = async () => {
  const response = await services.user.findAll()
  state.users = response.data.content
}
</script>
<template>
  <teleport v-if="mounted" :to="teleport">Usuários</teleport>
  <AppCardDefault>
    <template #content>
      <v-card elevation="0" class="card px-5">
        <v-card-title class="text-h6 text-fontdark font-weight-bold mt-5">
          Usuários cadastrados
        </v-card-title>

        <v-card-text
          class="font-weight-regular text-fontdark text-subtitle-2 mt-5"
        >
          <v-row class="mb-4">
            <v-col cols="12" sm="4">
              <v-text-field
                color="primary"
                density="compact"
                variant="outlined"
                label="Pesquisar"
                hide-details
              >
                <template #append-inner>
                  <v-icon color="primary">mdi-magnify</v-icon>
                </template>
              </v-text-field>
            </v-col>
          </v-row>
          <v-table rounded>
            <thead class="header">
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>EMAIL</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody class="">
              <tr v-for="item in state.users" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.nome }}</td>
                <td>{{ item.email }}</td>
                <td>
                  <v-btn density="compact" color="primary" icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </template>
  </AppCardDefault>
</template>
<style scoped lang="scss">
.card {
  border: 1px solid #dcdcdc;
}
.v-table {
  border: 1px solid #dcdcdc;
  border-radius: 5px;
}
.header {
  background-color: #f5f5f7;
  color: #9fa2b4;
}
</style>
