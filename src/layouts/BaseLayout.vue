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
const menu = ref(false)
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
      <v-list-item class="pt-5 mb-4" title="Nome do sistema" nav>
        <template #prepend>
          <v-avatar color="white">
            <v-icon icon="mdi-symbol"></v-icon>
          </v-avatar>
        </template>
        <template #append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>
      <AppItemsDrawer></AppItemsDrawer>
    </v-navigation-drawer>
    <v-app-bar class="bg-base pt-3 pl-1 text-fontdark" elevation="0">
      <v-app-bar-title
        id="title"
        class="text-h5 font-weight-bold"
      ></v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          location="bottom"
        >
          <template #activator="{ props }">
            <v-btn
              :ripple="false"
              variant="plain"
              class="text-capitalize"
              color="indigo"
              v-bind="props"
            >
              <template #append>
                <v-avatar>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                  ></v-img>
                </v-avatar>
              </template>
              {{ main.user.nome }}
            </v-btn>
          </template>

          <v-card min-width="300">
            <v-list>
              <v-list-item
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                :title="main.user.nome"
                :subtitle="main.user.email"
              >
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list class="text-primary">
              <v-list-item @click="$router.push({ name: 'account' })">
                <template #append>
                  <v-icon>mdi-chevron-right</v-icon>
                </template>
                Ir para minha conta
              </v-list-item>
              <v-list-item> </v-list-item>
            </v-list>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-icon
                size="30"
                color="primary"
                @click="$router.push({ name: 'logout' })"
              >
                mdi-power
              </v-icon>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>

    <v-app-bar location="bottom" height="48" class="bg-base" elevation="0">
      <div class="text-primary text-body-2 ml-4">Copyright ©️ 2023</div>
      <v-spacer></v-spacer>
      <v-icon color="primary" size="large" class="mr-2">mdi-email</v-icon>
      <v-icon color="primary" size="large" class="mr-2">mdi-facebook</v-icon>
      <v-icon color="primary" size="large" class="mr-5">mdi-instagram</v-icon>
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
