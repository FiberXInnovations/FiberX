<script>
import HomeWelcome from '../components/Home/HomeWelcome.vue';
import Description_1 from '../components/About/Description_1.vue';
import ServicesList from '../components/Services/ServicesList.vue';
import ExploreProducts from '../components/Products/ExploreProducts.vue';
import ContactUsForm from '../components/ContactUs/ContactUsForm.vue';


export default {
    data() { 
        return { 
        }
    },
    methods: {

    },
    created: async function() { },
    mounted: function() { 
        const mainSection = document.getElementById('ScrollArea');
        mainSection.scrollTo(0, 0);
    },
    components: { HomeWelcome, Description_1, ServicesList, ExploreProducts, ContactUsForm },
}
</script>

<template>
    <div class="w-full">
        <HomeWelcome />
        <Description_1 />
        <ServicesList />
        <ExploreProducts />
        <ContactUsForm />
    </div>
</template>
