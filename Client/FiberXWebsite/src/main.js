import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/css/output.css"
import "flowbite"

const app = createApp(App)

app.use(router);
router.beforeEach((to, from, next) => {
    const metaTag       = document.querySelector('meta[name="description"]');
    const dropyMenus    = document.querySelectorAll('.dropy-menu');

    dropyMenus.forEach((element) => { element.classList.add('hidden');});
    document.title = to.meta.title || "FiberX Innovations - Innovate, Integrate, Inspire";
    const description_text = to.meta.description || "Welcome to FiberX Innovations, a leading IT company specializing in innovative software products, cutting-edge hardware solutions, and professional IT services. We empower businesses and individuals through digital transformation, offering quality, customer-centricity, and ethical integrity at our core.";
    metaTag.setAttribute('content', description_text);
    next();
});
app.mount("#app");
