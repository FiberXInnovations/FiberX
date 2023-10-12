import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue';
import AboutView from '../views/AboutView.vue';
import ServicesView from '../views/ServicesView.vue';
import ProductsView from '../views/ProductsView.vue';
import ContactUsView from '../views/ContactUsView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: IndexView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesView
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductsView
    },
    {
      path: '/contact_us',
      name: 'Contact',
      component: ContactUsView
    },
   
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: PageNotFoundView,
    // },
  ]
})

export default router
