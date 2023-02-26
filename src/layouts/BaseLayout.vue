<script lang="ts" setup>
import { ref, watch } from "vue"
import { useDisplay } from "vuetify"
import { useRouter } from "vue-router"
import AppItemsDrawer from "@/components/AppItemsDrawer.vue"
import AppItemsDrawerMobile from "@/components/AppItemsDrawerMobile.vue"

const { mobile } = useDisplay()
const drawer = ref(!mobile.value)
const router = useRouter()
const item = ref("home")
watch(
  () => drawer.value,
  () => {
    if (drawer.value === true) {
      item.value = ""
    }
  }
)

watch(
  () => item.value,
  () => {
    if (item.value !== "") {
      drawer.value = false
    }
  }
)
const goAccount = () => {
  item.value = "conta"
  router.push({ name: "account" })
}
const goHome = () => {
  item.value = "home"
  router.push({ name: "home" })
}
</script>
<template>
  <v-layout class="">
    <v-app-bar
      v-if="!mobile"
      class="bg-base custom-app-bar-header"
      elevation="0"
      height="64"
    >
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
    <v-navigation-drawer
      v-if="!mobile"
      v-model="drawer"
      class="bg-base"
      width="264"
      permanent
    >
      <AppItemsDrawer></AppItemsDrawer>
    </v-navigation-drawer>
    <v-app-bar
      v-if="!mobile"
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
    <v-app-bar
      v-if="mobile"
      location="bottom"
      class="bg-base align-start custom-app-bar-botton"
      elevation="0"
      height="64"
    >
      <div v-if="drawer" class="custom-botton-mobile">
        <div>
          <div>
            <v-icon
              size="35"
              class="custom-botton-mobile"
              color="primary"
              @click="drawer = !drawer"
            >
              mdi-menu
            </v-icon>
          </div>
          <div class="text-primary text-body-2">Menu</div>
        </div>
      </div>
      <div v-if="!drawer" class="custom-botton-mobile">
        <div>
          <div>
            <v-icon size="35" color="light" @click="drawer = !drawer">
              mdi-menu
            </v-icon>
          </div>
          <div class="text-light text-body-2">Menu</div>
        </div>
      </div>
      <div v-if="item === 'home'" class="custom-botton-mobile">
        <div>
          <div>
            <v-icon size="35" class="" color="primary"> mdi-home </v-icon>
          </div>
          <div class="text-primary text-body-2">Início</div>
        </div>
      </div>
      <div v-if="item !== 'home'" class="custom-botton-mobile">
        <div>
          <div>
            <v-icon size="35" color="light" @click="goHome"> mdi-home </v-icon>
          </div>
          <div class="text-light text-body-2">Início</div>
        </div>
      </div>
      <div v-if="item === 'conta'" class="custom-botton-mobile">
        <div>
          <div>
            <v-icon size="35" class="" color="primary"> mdi-account </v-icon>
          </div>
          <div class="text-primary text-body-2">Conta</div>
        </div>
      </div>
      <div v-if="item !== 'conta'" class="custom-botton-mobile">
        <div>
          <div>
            <v-icon size="35" color="light" @click="goAccount">
              mdi-account
            </v-icon>
          </div>
          <div class="text-light text-body-2">Conta</div>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-if="mobile"
      v-model="drawer"
      class="bg-base"
      width="264"
      temporary
    >
      <AppItemsDrawerMobile></AppItemsDrawerMobile>
    </v-navigation-drawer>
    <!--Barra superior mobile-->
    <v-app-bar
      v-if="mobile"
      class="bg-base custom-app-bar-header"
      elevation="0"
      height="64"
    >
      <div></div>
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

.custom-botton-mobile {
  display: flex;
  justify-content: center;
  width: 20vw;
}
</style>
