<script>
import NotFound from '../components/404/NotFound.vue';


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
    components: { NotFound },
}
</script>

<template>
    <div class="w-full">
        <NotFound />
    </div>
</template>
