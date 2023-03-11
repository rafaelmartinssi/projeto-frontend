<script lang="ts" setup>
import { useRouter } from "vue-router"

const router = useRouter()
const loginView = () => {
  router.push({
    name: "login"
  })
}
</script>
<template>
  <v-layout class="">
    <v-app-bar height="64" elevation="1">
      <v-spacer></v-spacer>
      <v-btn variant="outlined" rounded="lg" color="primary" class="mr-3">
        Cadastre-se
      </v-btn>
      <v-btn class="bg-primary" rounded="lg" @click="loginView"> Entrar </v-btn>
    </v-app-bar>
    <v-app-bar location="bottom" height="48" elevation="5"></v-app-bar>
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
