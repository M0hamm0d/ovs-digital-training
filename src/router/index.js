import { createRouter, createWebHistory } from 'vue-router'
// 1. Import your page components
// import Auth from '../views/AuthPage.vue/index.js'
import AuthPage from '@/views/AuthPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // This is the default "home" URL (http://localhost:5173/)
      path: '/',
      name: 'auth',
      component: AuthPage,
    },
    {
      path: '/exam',
      name: 'exam-room',
      component: import('../views/ExamRoom.vue'),
    },
  ],
})

export default router
