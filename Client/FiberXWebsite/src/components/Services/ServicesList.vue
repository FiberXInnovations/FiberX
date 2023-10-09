<script lang="js">
import { RouterLink } from 'vue-router';


export default {
    data() {
        return {
            content: this.$root.content_data.ServicesList,
        };
    },
    components: { RouterLink }
}
</script>
<template>
    <section id="ServicesList" class="w-full min-h-[85vh] bg-white">
        <div class="mx-auto container h-full w-full pt-[96px]">
            <div class="w-full h-full items-center justify-center flex flex-col pb-12 ">
                <h2 class="font-black text-[#1A1A1A] text-[52px] text-center z-[2] w-full">
                    {{  content.title_text }}
                </h2>
                <p class="text-[#8A8A8A] text-center font-medium  px-2.5 md:px-4 z-[2] w-full ">
                    {{ content.sub_text }}
                </p>
            </div>
            <div class="w-full h-full items-center justify-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 px-4">
                <div v-for="(item, index) in content.services_list" :key="index" class=" w-full flex flex-row items-center md:justify-center justify-start md:my-4 my-2">
                    <RouterLink :to="item.link" class="flex flex-row items-center justify-center hover:underline text-[#1A1A1A] md:text-[20px] text-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ item.text }}
                    </RouterLink>

                </div>
            </div>
        </div>
    </section>
</template>