<script setup lang="ts">
import { ref } from "vue"
import { useMainStore } from "@/store"
import { useRouter } from "vue-router"

const router = useRouter()
const main = useMainStore()

const finance = ref(false)

const redirect = (value: number, path: string) => {
  main.setPath(value)
  router.push({ name: path })
}
</script>

<template>
  <v-list class="bg-primary px-0" density="compact" nav>
    <v-list-item
      :active="main.path === 1"
      rounded="0"
      prepend-icon="mdi-home"
      title="Início"
      @click="redirect(1, 'home')"
    >
    </v-list-item>

    <v-list-item
      :active="main.path === 2"
      rounded="0"
      prepend-icon="mdi-account-circle"
      title="Minha conta"
      @click="redirect(2, 'account')"
    >
    </v-list-item>

    <v-list-group>
      <template #activator="{ props }">
        <v-list-item
          rounded="0"
          v-bind="props"
          :active="main.path === 3 || main.path === 4 || finance"
          prepend-icon="mdi-finance"
          title="Financeiro"
          @click="finance = !finance"
        ></v-list-item>
      </template>

      <v-list-item
        rounded="0"
        title="Receitas"
        :active="main.path === 3"
        @click="redirect(3, 'home')"
      >
      </v-list-item>

      <v-list-item
        rounded="0"
        title="Despesas"
        :active="main.path === 4"
        @click="redirect(4, 'home')"
      >
      </v-list-item>
    </v-list-group>
  </v-list>
</template>
<style scoped lang="scss">
.v-list-item--active {
  border-left: 3px solid #ffffff;
}
</style>
