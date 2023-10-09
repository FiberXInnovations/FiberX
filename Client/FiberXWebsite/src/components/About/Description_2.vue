<script lang="js">

export default {
    data() { 
        return {
            content: this.$root.content_data.Description_2,

        }
    }
}
</script>
<template>
    <section id="Description_2" class="w-full min-h-[85vh] bg-white">
        <div class="mx-auto container h-full w-full pt-[96px]">
            <div class="w-full h-full items-center justify-center flex flex-col">
                <div v-for="(item, index) in content.descriptions" :key="index" class="flex md:flex-row flex-col items-center justify-center gap-2 h-[85vh]">
                    <div :class="item.graphics_order == 2 ? 'order-last' : ''" class="w-full md:w-4/12 md:h-full h-[30%] flex items-center justify-center overflow-hidden px-2">
                        <img class="object-fit w-full h-full" :src="item.img" :alt="item.img_text" />
                    </div>
                    <div :class="item.desc_order == 2 ? 'order-last' : ''" class="w-full md:w-8/12  md:h-full h-[50%] flex flex-col items-center justify-center overflow-hidden">
                        <h2 class="font-black text-[#1A1A1A] text-[28px] text-center z-[2] w-full">
                            {{  item.title_text }}
                        </h2>
                        <p class="text-[#8A8A8A] text-center md:text-left font-medium md:text-lg text-xs px-2.5 md:px-4 z-[2] w-full truncate  whitespace-normal">
                            {{ item.sub_text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>