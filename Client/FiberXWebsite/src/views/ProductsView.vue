<script>
import Welcome from '../components/Products/Welcome.vue';
import ExploreProducts from '../components/Products/ExploreProducts.vue';
import ProductList from '../components/Products/ProductList.vue';
import Slogan from '../components/Products/Slogan.vue';

export default {
    mounted: function() { this.$root.C_METH.scrollToTop(); },
    components: { Welcome, ExploreProducts, ProductList, Slogan },
}
</script>

<template>
     <section id="ProductsPage" class="w-full h-auto">
        <Welcome :content="$root.content_data.ProductsPage.Welcome" />
        <!-- <ExploreProducts :content="$root.content_data.ProductsPage.ExploreProducts" /> -->
        <ProductList :content="$root.content_data.ProductsPage.ProductList" />
        <Slogan :content="$root.content_data.ProductsPage.Slogan" />
     </section>
</template>
