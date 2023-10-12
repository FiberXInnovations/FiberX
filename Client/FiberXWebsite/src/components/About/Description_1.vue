<script lang="js">

export default {
    data() { 
        return {
            content: this.$root.content_data.Description_1,

        }
    },
    methods: {
        scrollToSection(page, id) {
            this.$router.push({ name: page }).then(() => {
                const sectionId = id;
                const sectionElement = document.getElementById(sectionId);
                if (sectionElement) { sectionElement.scrollIntoView({ behavior: 'smooth' });}
            });
        },
    }
}
</script>
<template>
    <section id="Description_1" class="w-full min-h-[85vh] bg-white">
        <div class="mx-auto container h-full w-full pt-[96px]">
            <div class="w-full h-full items-center justify-center flex flex-col">
                <div v-for="(item, index) in content.descriptions" :key="index" class="flex md:flex-row flex-col items-center justify-center gap-2 h-[85vh]">
                    <div :class="item.graphics_order == 2 ? 'order-last' : ''" class="w-full md:w-4/12 md:h-full h-[30%] flex items-center justify-center overflow-hidden px-2">
                        <img class="object-fit w-full h-full" :src="item.img" :alt="item.img_text" />
                    </div>
                    <div :class="item.desc_order == 2 ? 'order-last' : ''" class="w-full md:w-8/12  md:h-full flex flex-col items-center justify-center overflow-hidden">
                        <h2 class="font-black text-[#1A1A1A] text-[28px] text-center z-[2] w-full">
                            {{  item.title_text }}
                        </h2>
                        <p class="text-[#8A8A8A] text-center md:text-left font-medium md:text-lg text-xs px-2.5 md:px-4 z-[2] w-full text-ellipsis overflow-hidden ...">
                            {{ item.sub_text }}
                        </p>
                        <div class="w-full flex items-center justify-center p-2">
                            <button @click="scrollToSection('About', 'Description_2')"  type="button" class="btn btn-primary flex items-center justify-center capitalize">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {{ item.btn_text }}
                            </button>
                        </div>  
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
</template>