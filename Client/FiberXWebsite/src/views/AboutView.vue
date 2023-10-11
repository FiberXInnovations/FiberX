<script>
import AboutWelcome from '../components/About/AboutWelcome.vue';
import Description_2 from '../components/About/Description_2.vue';


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
    components: { AboutWelcome, Description_2 },
}
</script>

<template>
    <div class="w-full">
        <AboutWelcome />
        <Description_2 />
    </div>
</template>
