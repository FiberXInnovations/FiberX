<script>
import ProductWelcome from '../components/Products/ProductWelcome.vue';
import ExploreProducts from '../components/Products/ExploreProducts.vue';
import ProductList from '../components/Products/ProductList.vue';
import Slogan from '../components/About/Slogan.vue';


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
    components: { ProductWelcome, ExploreProducts, ProductList, Slogan },
}
</script>

<template>
    <div class="w-full">
        <ProductWelcome />
        <ExploreProducts />
        <ProductList />
        <Slogan />
    </div>
</template>
