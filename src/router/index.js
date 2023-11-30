import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from "../views/NotFoundView.vue"
import CardGuidedShopping from "../components/CardGuidedShopping.vue"
import CardStyleSession from "../components/CardStyleSession.vue"
import CardWardrobeEdit from "../components/CardWardrobeEdit.vue"
import CardSpecialStyling from "../components/CardSpecialStyling.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: "/services/guided-shopping",
      name: "CardGuidedShopping",
      component: CardGuidedShopping,
    },
    {
      path: "/services/style-session",
      name: "CardStyleSession",
      component: CardStyleSession,
    },
    {
      path: "/services/wardrobe-edit",
      name: "CardWardrobeEdit",
      component: CardWardrobeEdit,
    },
    {
      path: "/services/special-styling",
      name: "CardSpecialStyling",
      component: CardSpecialStyling,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    },
  ]
})

export default router
