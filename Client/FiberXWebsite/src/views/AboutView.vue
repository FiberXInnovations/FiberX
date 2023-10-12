<script>
import AboutWelcome from '../components/About/AboutWelcome.vue';
import Description_1 from '../components/About/Description_1.vue';
import Description_2 from '../components/About/Description_2.vue';
import CoreValues from '../components/About/CoreValues.vue';
import Team from '../components/About/Team.vue';


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
    components: { AboutWelcome, Description_2, Description_1, CoreValues, Team },
}
</script>

<template>
    <div class="w-full">
        <AboutWelcome />
        <Description_1 />
        <Description_2 />
        <CoreValues />
        <Team />
    </div>
</template>
