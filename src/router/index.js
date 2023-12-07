import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "@/router/routes"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router

router.beforeEach((to, from) => {
  if (to.path == "/services") {
    return { name: "GuidedShopping" }
  }
})

// router.beforeResolve((to, from) => {
//   if (to.name === "About") return false
// })
