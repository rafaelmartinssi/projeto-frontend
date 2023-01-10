import App from "./App.vue"
import router from "./router"
import { createApp } from "vue"
import { registerPlugins } from "@/plugins"
import { createPinia } from "pinia"
import { maska } from "maska"

const pinia = createPinia()
const app = createApp(App)

registerPlugins(app)

app.use(router).use(pinia).directive("maska", maska).mount("#app")
