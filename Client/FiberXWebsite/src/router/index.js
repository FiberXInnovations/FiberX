import { createRouter, createWebHistory } from "vue-router"
import IndexView from "../views/IndexView.vue";
import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";
import ProductsView from "../views/ProductsView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: IndexView,
      meta: { title: "", description: "At FiberX Innovations, we lead the way in IT innovation, offering cutting-edge software products, top-tier hardware solutions, and expert IT services. Explore our digital world and unlock the limitless possibilities of technology. Welcome to the future of innovation, quality, and customer-centricity."}
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
      meta: { title: "About FiberX Innovations - Our Story, Our Commitment", description: "Discover the heart and soul of FiberX Innovations. Our journey, rooted in innovation and driven by values, has led us to a commitment to quality and customer-centricity. Learn about the team that makes it happen and the vision that propels us forward. Welcome to the heart of FiberX Innovations."}
    },
    {
      path: "/services",
      name: "Services",
      component: ServicesView,
      meta: { title: "Our Services - Elevate Your Digital Experience", description: "Explore the array of services offered by FiberX Innovations. From innovative software products and cutting-edge hardware solutions to expert IT consultation, training, and dedicated customer support, we're here to empower your digital journey. Find out how we can transform your world through technology."}
    },
    {
      path: "/products",
      name: "Products",
      component: ProductsView,
      meta: { title: "Our Products - Pioneering Technology Solutions", description: "Discover the future of technology through FiberX Innovations' innovative software products and cutting-edge hardware solutions. We offer a diverse range of solutions designed to elevate your digital experience. Explore our portfolio and unlock new possibilities in the world of IT."}
    },
    {
      path: "/contact_us",
      name: "Contact",
      component: ContactUsView,
      meta: { title: "Contact FiberX Innovations - Let's Connect", description: "Reach out to us at FiberX Innovations. We're here to assist, answer your questions, and guide you on your digital journey. Whether you have inquiries about our services, need support, or just want to say hello, we're only a message away. Let's start a conversation."}
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: PageNotFoundView,
      meta: { title: "404 - Page Not Found", description: "Oops, it seems you've ventured into uncharted digital territory. The page you're looking for may have taken an unexpected detour. Don't worry, you're not lost. You can return to our main navigation or use the search bar to find your way back. We're here to assist you on your journey."}
    },
  ]
})

export default router
