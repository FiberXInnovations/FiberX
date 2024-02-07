<script lang="js">
    import { RouterLink } from 'vue-router';
    export default {
        data() { 
          return {
            current_year: new Date().getFullYear(),
            content: this.$root.content_data.FooterArea
          }
        }
    }
</script>

<template>
    <section id="Footer" class="w-full h-[15vh]">
        <div class="mx-auto container h-full px-4 py-4">
            <div class="grid md:grid-cols-2 grid-cols-1 gap-1">

                <div class="flex md:items-start items-center md:justify-start justify-center">
                    <div v-for="(item, index) in content.social_menu" :key="index" class="p-2 hover:text-fiberX rounded hover:bg-[#0000003d] text-white hover:cursor-pointer">
                        <a :href="item.link" target="_blank" v-html="item.icon"></a>
                    </div>
                </div>

                <div class="flex md:items-end items-center md:justify-end justify-center">
                    <div v-for="(item, index) in content.page_menu" :key="index" class="p-2 hover:text-fiberX text-xs rounded hover:bg-[#0000003d] text-white hover:cursor-pointer">
                        <RouterLink :to="item.link">{{ item.text }}</RouterLink>
                    </div>
                </div>
                
                
            </div>
            <hr class="border-1 border-gray-400" />
            <div class="flex items-center justify-center text-center md:p-4 p-2">
                <span class="text-sm text-white text-center">© {{  current_year }}
                    Powered by <a href="https://fiberxinnovations.com/" class="css_footer_title_desc hover:underline">Fiberx Innovations</a>
                </span>
                
            </div>
        </div>
    </section>
</template>