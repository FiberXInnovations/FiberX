<script lang="js">
import { RouterLink } from 'vue-router';


export default {
    data() {
        return {
            content: this.$root.content_data.ExploreProducts,
        };
    },
    components: { RouterLink }
}
</script>
<template>
    <section id="ExploreProducts" :class="`bg-[url('${content.img}')]`" class="w-full h-[85vh] bg-cover bg-no-repeat bg-center bg-origin-border">
        <div class="mx-auto container h-full pt-[90px]">
            <div class="flex flex-col items-center w-full justify-start p-4 h-full relative">
                <h1 class="font-black text-white md:text-[52px] text-[25px] text-center z-[2]">
                    {{  content.title_text }}
                </h1>
                <p class="text-[#AEAEAE] text-center font-medium text-sm px-4 lg:px-[25%] md:px-[25%] z-[2]">
                    {{ content.sub_text }}
                </p>
                <RouterLink to="/products#ProductsList" class="underline p-2 text-[#FFCC00] md:text-sm text-[12px]">
                    View Product Catalog...
                </RouterLink>
                <div class="z-[1] flex items-center justify-center rounded-lg w-full h-[370px] mt-2">
                    <img class="object-fit md:w-[40%] w-[80%] h-full" :src="content.img_gif" />
                </div>
            </div>
        </div>
    </section>
</template>