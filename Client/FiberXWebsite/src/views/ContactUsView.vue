<script>
import Welcome from '../components/ContactUs/Welcome.vue';
import ContactUsInfo from '../components/ContactUs/ContactUsInfo.vue';
import ContactUsForm from '../components/ContactUs/ContactUsForm.vue';

export default {
    created: function(){ this.$root.white_page = true; },
    mounted: function() { this.$root.C_METH.scrollToTop(); },
    components: { Welcome, ContactUsInfo, ContactUsForm },
}
</script>

<template>
    <section id="ContactPage" class="w-full h-auto">
        <Welcome :content="$root.content_data.ContactPage.Welcome" />
        <ContactUsInfo :content="$root.content_data.ContactPage.ContactUsInfo" />
        <ContactUsForm :content="$root.content_data.ContactPage.ContactUsForm" />
    </section>
</template>
