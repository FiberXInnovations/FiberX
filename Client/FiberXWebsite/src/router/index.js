import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: IndexView
    },
   
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: PageNotFoundView,
    // },
  ]
})

export default router
