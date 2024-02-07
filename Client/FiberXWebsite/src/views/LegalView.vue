<script>
import Welcome from '../components/Legal/Welcome.vue';
import Content from '../components/Legal/Content.vue';

export default {
    created: function(){ this.$root.white_page = true; },
    mounted: function() { this.$root.C_METH.scrollToTop(); },
    components: { Welcome, Content },
}
</script>

<template>
    <section id="LegalPage" class="w-full h-auto">
        <Welcome :content="$root.content_data.LegalPage.Welcome" />
        <Content :content="$root.content_data.LegalPage.Content" />
    </section>
</template>
