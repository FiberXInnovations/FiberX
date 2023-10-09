<script>
import Services from '../components/Services/Services.vue';
import ServicesList from '../components/Services/ServicesList.vue';


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
    components: { Services, ServicesList },
}
</script>

<template>
    <div class="w-full">
        <Services />
        <ServicesList />
    </div>
</template>
