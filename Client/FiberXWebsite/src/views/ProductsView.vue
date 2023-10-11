<script>
import ProductWelcome from '../components/Products/ProductWelcome.vue';
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
    components: { ProductWelcome, ExploreProducts },
}
</script>

<template>
    <div class="w-full">
        <ProductWelcome />
        <ExploreProducts />
    </div>
</template>
