<script>
import HomeWelcome from '../components/Home/HomeWelcome.vue';
import Description_1 from '../components/About/Description_1.vue';
import ServicesList from '../components/Services/ServicesList.vue';
import ExploreProducts from '../components/Products/ExploreProducts.vue';


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
    components: { HomeWelcome, Description_1, ServicesList, ExploreProducts },
}
</script>

<template>
    <div class="w-full">
        <HomeWelcome />
        <Description_1 />
        <ServicesList />
        <ExploreProducts />
    </div>
</template>
