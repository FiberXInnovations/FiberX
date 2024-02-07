<script>
import ServicesWelcome from '../components/Services/ServicesWelcome.vue';
import ServicesList from '../components/Services/ServicesList.vue';
import ContactUsForm from '../components/ContactUs/ContactUsForm.vue';

export default {
    created: function(){ this.$root.white_page = true; },
    mounted: function() { this.$root.C_METH.scrollToTop(); },
    components: { ServicesWelcome, ServicesList, ContactUsForm },
}
</script>

<template>
    <div class="w-full">
        <ServicesWelcome />
        <ServicesList :content="$root.content_data.ServicesPage.ServicesList" />
        <ContactUsForm :content="$root.content_data.ContactPage.ContactUsForm" />
    </div>
</template>
