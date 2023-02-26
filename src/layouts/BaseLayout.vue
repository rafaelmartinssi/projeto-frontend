<script lang="ts" setup>
import { ref } from "vue"
import { useDisplay } from "vuetify"
import AppItemsDrawer from "@/components/AppItemsDrawer.vue"

const { mobile } = useDisplay()
const drawer = ref(!mobile.value)
</script>
<template>
  <v-layout class="">
    <v-app-bar class="bg-base custom-app-bar-header" elevation="0" height="64">
      <v-app-bar-nav-icon
        color="light"
        variant="text"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <v-img src="@/assets/logo.png" max-width="120" class="mb-4 mt-4 ml-2">
      </v-img>
      <v-spacer></v-spacer>
      <v-tooltip text="Sair">
        <template #activator="{ props }">
          <v-btn icon>
            <v-icon
              v-bind="props"
              color="light"
              @click="$router.push({ name: 'logout' })"
            >
              mdi-logout
            </v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </v-app-bar>
    <v-app-bar
      location="bottom"
      height="48"
      class="bg-base custom-app-bar-botton"
      elevation="0"
    >
      <v-spacer></v-spacer>
      <v-icon color="primary" size="large" class="mr-2">mdi-email</v-icon>
      <v-icon color="primary" size="large" class="mr-2">mdi-facebook</v-icon>
      <v-icon color="primary" size="large" class="mr-5">mdi-instagram</v-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="bg-base"
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
.custom-app-bar-header {
  border-bottom: 1px solid #dcdcdc;
}
.custom-app-bar-botton {
  border-top: 1px solid #dcdcdc;
}
</style>
