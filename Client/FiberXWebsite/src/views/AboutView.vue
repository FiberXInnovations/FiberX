<script>
import Welcome from '../components/About/Welcome.vue';
import KnowUs from '../components/About/KnowUs.vue';
import WhoWeAre from '../components/About/WhoWeAre.vue';
import WhatWeDo from '../components/About/WhatWeDo.vue';
import MissionAndOffer from '../components/About/MissionAndOffer.vue';
import CoreValues from '../components/About/CoreValues.vue';
import Team from '../components/About/Team.vue';


export default {
    created: function(){ this.$root.white_page = true; },
    mounted: function() { this.$root.C_METH.scrollToTop(); },
    components: { Welcome, KnowUs, WhoWeAre, WhatWeDo, MissionAndOffer,  CoreValues, Team },
}
</script>

<template>
    <section id="AboutPage" class="w-full h-auto">
        <Welcome :content="$root.content_data.AboutPage.Welcome" />
        <KnowUs :content="$root.content_data.AboutPage.KnowUs" />
        <WhoWeAre :content="$root.content_data.AboutPage.WhoWeAre" />
        <WhatWeDo :content="$root.content_data.AboutPage.WhatWeDo" />
        <MissionAndOffer :content="$root.content_data.AboutPage.MissionAndOffer" />
        <CoreValues :content="$root.content_data.AboutPage.CoreValues" />
        <Team :content="$root.content_data.AboutPage.Team" />
    </section>
</template>
