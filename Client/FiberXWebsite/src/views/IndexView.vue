<script>
import Welcome from '../components/Home/Welcome.vue';
import WhoWeAre from '../components/About/WhoWeAre.vue';
import ServicesList from '../components/Services/ServicesList.vue';
import ExploreProducts from '../components/Products/ExploreProducts.vue';
import ContactUsForm from '../components/ContactUs/ContactUsForm.vue';


export default {
    mounted: function() { this.$root.C_METH.scrollToTop(); },
    components: { Welcome, WhoWeAre, ServicesList, ExploreProducts, ContactUsForm },
}
</script>

<template>
    <section id="IndexPage" class="w-full h-auto">
        <Welcome :content="$root.content_data.IndexPage.Welcome" />
        <WhoWeAre :content="$root.content_data.IndexPage.WhoWeAre" />
        <ServicesList :content="$root.content_data.ServicesPage.ServicesList" />
        <ExploreProducts :content="$root.content_data.IndexPage.ExploreProducts" />
        <ContactUsForm :content="$root.content_data.ContactPage.ContactUsForm" />
    </section>
</template>
