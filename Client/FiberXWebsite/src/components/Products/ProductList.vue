<script lang="js">

export default {
    data() { 
        return {
            content: this.$root.content_data.ProductList,

        }
    }
}
</script>
<template>
    <section id="ProductList" class="w-full min-h-[85vh] bg-white">
        <div class="mx-auto h-full w-full">
            <div class="w-full h-full items-center justify-center flex flex-col">
                <div v-for="(item, index) in content.product_list" :key="index" :class=" index % 2 == 0 ? 'bg-[#21201D]' : 'bg-white' " class="flex md:flex-row flex-col items-center justify-center h-[85vh] py-[96px]">
                    <div :class="item.graphics_order == 2 ? 'order-last' : ''" class="w-full md:w-4/12 h-auto  flex items-center justify-center overflow-hidden md:p-8 p-2">
                        <img class="object-fit w-full h-full" :src="item.img" :alt="item.img_text" />
                    </div>
                    <div :class="item.desc_order == 2 ? 'order-last' : ''" class="w-full md:w-8/12 h-auto flex flex-col md:items-start items-center md:justify-start justify-center md:p-8 p-2">
                        <h2 :class=" index % 2 == 0 ? 'text-white' : 'text-[#1A1A1A]'" class="font-black text-[28px] md:text-left text-center z-[2] w-full">
                            {{  item.title_text }}
                        </h2>
                        <p class="text-[#8A8A8A] text-center md:text-left  font-medium md:text-lg text-xs h-auto z-[2] w-full mb-12">
                            {{ item.sub_text }}
                        </p>
                        <a v-if="item.link" target="_blank" :href="item.link" class="btn btn-primary flex items-center justify-center capitalize mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Explore Product...
                        </a>
                        <button v-else class="btn btn-primary flex items-center justify-center capitalize mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Coming Soon
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>