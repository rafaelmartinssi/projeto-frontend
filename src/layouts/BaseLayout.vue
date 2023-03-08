<script lang="ts" setup>
import { ref, onMounted } from "vue"
//import { useDisplay } from "vuetify"
import { useMainStore } from "@/store"
import AppItemsDrawer from "@/components/AppItemsDrawer.vue"

//const { mobile } = useDisplay()
const mounted = ref(false)
const drawer = ref(true)
const main = useMainStore()
const rail = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>
<template>
  <v-layout class="">
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      class=""
      color="dark"
      width="264"
      permanent
      @click="rail = false"
    >
      <v-list-item
        class="py-2"
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        :title="main.user.nome"
        :subtitle="main.user.email"
        nav
      >
        <template #append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>
      <v-divider color="fontlight"></v-divider>
      <AppItemsDrawer></AppItemsDrawer>
    </v-navigation-drawer>
    <v-app-bar class="bg-base pt-3 pl-1 text-fontdark" elevation="0">
      <v-app-bar-title
        id="title"
        class="text-h5 font-weight-bold"
      ></v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$router.push({ name: 'account' })">
        <v-icon> mdi-cog </v-icon>
        <v-tooltip activator="parent" location="bottom">Conta</v-tooltip>
      </v-btn>
      <v-btn icon>
        <v-icon> mdi-bell-outline </v-icon>
        <v-tooltip activator="parent" location="bottom">Notificações</v-tooltip>
      </v-btn>
      <v-btn icon @click="$router.push({ name: 'logout' })">
        <v-icon> mdi-power </v-icon>
        <v-tooltip activator="parent" location="bottom">Sair</v-tooltip>
      </v-btn>
    </v-app-bar>

    <v-app-bar location="bottom" height="48" class="bg-base" elevation="0">
      <div class="text-fontlight text-body-2 ml-4">Copyright ©️ 2023</div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss">
.v-list-item {
  opacity: 67%;
}
.v-btn {
  opacity: 1;
}
</style>
