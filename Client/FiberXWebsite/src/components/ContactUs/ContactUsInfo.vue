<script lang="js">
import { RouterLink } from 'vue-router';


export default {
    data() {
        return {
            content: this.$root.content_data.ContactUsInfo,
        };
    },
    components: { RouterLink }
}
</script>
<template>
    <section id="ContactUsInfo" :class="`bg-[url('${content.img}')]`" class="bg-[url('/src/assets/img/bg/semi_colon_1.svg')] w-full h-[85vh] bg-cover bg-no-repeat bg-center bg-origin-border">
        <div class="mx-auto container h-full pt-[90px]">
            <div class="flex flex-col items-center w-full justify-start p-4 h-full relative">
                <h1 class="font-black text-white md:text-[52px] text-[25px] text-center z-[2]">
                    {{  content.title_text }}
                </h1>
                <p class="text-[#AEAEAE] text-center font-medium text-sm px-4 lg:px-[25%] md:px-[25%] z-[2]">
                    {{ content.sub_text }}
                </p>
                <div class="flex w-full items-center justify-center grid md:grid-cols-3 grid-cols-3 gap-4 mt-2 h-[350px]">
                    <div v-for="(item, index) in content.infos" :key="index" class="flex flex-col items-center justify-center p-4 rounded-lg bg-[#21201D] md:h-auto h-[200px] text-[#FFCC00] scroller hover:mb-12">
                        <div class="w-[70px] h-[70px] flex items-center justify-center" v-html="item.icon"></div>
                        <span class="text-lg font-bold mt-2 text-white">
                            {{ item.title_text }}
                        </span>

                        <a :href="item.link" target="_blank" class="md:block hidden my-2 hover:underline w-full text-center py-4 break-all text-white hover:text-[#FFCC00]">
                            {{  item.sub_text }}
                        </a>
                        <a :href="item.link" target="_blank" class="md:hidden block my-2 hover:underline w-full text-center py-4 break-all text-sm text-white hover:text-[#FFCC00]">
                            Click Here
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>