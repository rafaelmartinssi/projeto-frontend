<script lang="ts" setup>
import { ref } from "vue"
import { useDisplay } from "vuetify"
import { useRouter } from "vue-router"
import AppItemsDrawer from "@/components/AppItemsDrawer.vue"

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
      <v-app-bar-nav-icon
        color="primary"
        variant="text"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-tooltip text="Sair">
        <template #activator="{ props }">
          <v-btn icon>
            <v-icon v-bind="props" color="primary" @click="logout">
              mdi-logout-variant
            </v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </v-app-bar>
    <v-app-bar location="bottom" height="48" elevation="5">
      <v-spacer></v-spacer>
      <v-icon color="primary" size="large" class="mr-2">mdi-email</v-icon>
      <v-icon color="primary" size="large" class="mr-2">mdi-facebook</v-icon>
      <v-icon color="primary" size="large" class="mr-5">mdi-instagram</v-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      elevation="1"
      color="primary"
      width="264"
      :permanent="!mobile"
      :temporary="mobile"
    >
      <AppItemsDrawer></AppItemsDrawer>
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
