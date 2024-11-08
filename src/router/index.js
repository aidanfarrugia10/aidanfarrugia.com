import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CVView from '../views/CVView.vue'  // Added this import as well

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/CV',
      name: 'CV',
      component: CVView
    },
    {
      path: '/contact',
      name: 'contact',  // Added route for contact page
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router