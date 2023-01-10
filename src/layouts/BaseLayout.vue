<script lang="ts" setup>
import { ref } from "vue"
import { useDisplay } from "vuetify"
import { useRouter } from "vue-router"

const router = useRouter()

const { mobile } = useDisplay()
const drawer = ref(!mobile.value)

const logout = () => {
  router.push({
    name: "logout"
  })
}
</script>
<template>
  <v-layout class="">
    <v-app-bar height="64" elevation="1">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-tooltip text="Sair">
        <template #activator="{ props }">
          <v-btn icon>
            <v-icon v-bind="props" @click="logout">mdi-logout-variant</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </v-app-bar>
    <v-app-bar location="bottom" height="48" elevation="5"></v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      elevation="1"
      color="primary"
      width="264"
      :permanent="!mobile"
      :temporary="mobile"
    >
      <v-list class="bg-primary" density="compact" nav>
        <v-list-item
          rounded="xl"
          prepend-icon="mdi-home"
          title="Início"
          value="home"
          @click="$router.push('/')"
        >
        </v-list-item>

        <v-list-item
          rounded="xl"
          prepend-icon="mdi-account-circle"
          title="Minha conta"
          value="account"
          @click="$router.push('account')"
        >
        </v-list-item>

        <v-list-group value="Finance">
          <template #activator="{ props }">
            <v-list-item
              rounded="xl"
              v-bind="props"
              prepend-icon="mdi-finance"
              title="Financeiro"
            ></v-list-item>
          </template>

          <v-list-item rounded="xl" title="Receitas" value="income">
          </v-list-item>

          <v-list-item rounded="xl" title="Despesas" value="expenses">
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss">
.v-layout {
  background-color: #efefef;
}
</style>
