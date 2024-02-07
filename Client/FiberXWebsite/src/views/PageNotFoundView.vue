<script>
import NotFound from '../components/404/NotFound.vue';


export default {
    created: function(){ this.$root.white_page = true; console.log(window.innerHeight) },
    mounted: function() { this.$root.C_METH.scrollToTop(); },
    components: { NotFound },
}
</script>

<template>
    <section id="PageNotFoundPage" class="w-full h-auto">
        <NotFound :content="$root.content_data.PageNotFoundPage.NotFound" />
    </section>
</template>
