import { createRouter, createWebHistory } from "vue-router"
import { login, callback, logout, isAuthenticated } from "./guards"
import BaseLayout from "@/layouts/BaseLayout.vue"
import AppRouterWrapper from "@/components/AppRouterWrapper.vue"

const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "index" }
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/layouts/IndexLayout.vue")
  },
  {
    path: "/registre",
    name: "registre",
    component: () => import("@/layouts/RegistreLayout.vue")
  },
  {
    path: "/login",
    name: "login",
    component: AppRouterWrapper,
    beforeEnter: login
  },
  {
    path: "/logout",
    name: "logout",
    component: AppRouterWrapper,
    beforeEnter: logout
  },
  {
    path: "/callback",
    component: AppRouterWrapper,
    beforeEnter: callback
  },
  {
    path: "/",
    component: BaseLayout,
    beforeEnter: isAuthenticated,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/HomeView.vue")
      },
      {
        path: "/account",
        name: "account",
        component: () => import("@/views/AccountView.vue")
      },
      {
        path: "/users",
        name: "users",
        component: () => import("@/views/UsersView.vue")
      },
      {
        path: "/setup",
        name: "setup",
        component: () => import("@/views/SetupView.vue")
      },
      {
        path: "/schedule",
        name: "schedule",
        component: () => import("@/views/ScheduleView.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
