<script>
import Welcome from '../components/Services/Welcome.vue';
import ServicesList from '../components/Services/ServicesList.vue';
import ContactUsForm from '../components/ContactUs/ContactUsForm.vue';

export default {
    created: function(){ this.$root.white_page = true; },
    mounted: function() { this.$root.C_METH.scrollToTop(); },
    components: { Welcome, ServicesList, ContactUsForm },
}
</script>

<template>
   <section id="ServicesPage" class="w-full h-auto">
        <Welcome :content="$root.content_data.ServicesPage.Welcome" />
        <ServicesList :content="$root.content_data.ServicesPage.ServicesList" />
        <ContactUsForm :content="$root.content_data.ContactPage.ContactUsForm" />
    </section>
</template>
