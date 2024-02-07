<script lang="js">

export default {
    props: {
        content: Object,
    },
    methods: {
        scrollToSection(page, id, query) {
            this.$router.push({ name: page, query: { subject: query} }).then(() => {
                const sectionId = id;
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement) { sectionElement.scrollIntoView({ behavior: 'smooth' });}
            });
        },
    },
}
</script>
<template>
     <section id="ServicesList" class="w-full min-h-[85vh] z-[1] relative bg-white py-[10%] flex flex-col items-center justify-center border-b">
        <div class="w-full items-center justify-center md:px-[10%] px-[10%] flex flex-col">
            <h3 class="lg:text-[49px] md:text-[40px] text-[30px] text-fiberX-main font-black w-full truncate text-center">{{ content.title_text }}</h3>
            <p class="w-full break-word mt-4 text-center text-fiberX-sub-text">{{  content.sub_text }}</p>
        </div>
        <div class="w-full items-center justify-center flex flex-col grid md:grid-cols-3 grid-cols-1 gap-8 md:px-[10%] px-[10%] my-4">
            
            <div v-for="(service, index) in content.services_list"  @click="scrollToSection('Services', 'ContactUsForm', service.text)" 
            class="w-full h-[210px] shadow-lg rounded-lg flex flex-col items-center justify-center p-4 border cursor-pointer hover:scale-105">
                <span class="w-16 h-16 text-fiberX my-4" v-html="service.icon"></span>
                <span class="text-lg break-word w-full text-center my-2 text-fiberX-main font-bold">{{ service.text }}</span>
            </div>

        </div>
    </section>
</template>