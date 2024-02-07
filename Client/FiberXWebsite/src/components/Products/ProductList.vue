<script lang="js">

export default {
    props: { content: Object },
}
</script>
<template>
    <section id="ProductList" class="w-full min-h-[85vh] z-[1] relative bg-white block  items-center justify-center overlfow-hidden border-b">
        <div v-for="(item, index) in content.product_list" :key="index" :class=" index % 2 == 0 ? 'bg-white' : 'bg-white' " 
        class="w-full h-full  min-h-[65vh] px-[10%] grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 border-b">

        <div :class="item.desc_order == 2 ? 'order-last' : ''" class="w-full h-full flex flex-col items-center justify-center py-[7%]">
            <h3 class="lg:text-[49px] md:text-[40px] text-[25px] text-fiberX-main font-black w-full break-word md:text-start text-center">{{ item.title_text }}</h3>
            <span class="w-full truncate mb-2 md:text-left text-center text-fiberX-slogan-text text-md font-bold">{{  item.slogan_text }}</span>
            <p class="w-full break-word mt-2 md:text-left text-center text-fiberX-sub-text text-sm">{{  item.sub_text }}</p>
            <div v-if="item.btn_text" class="w-full flex items-center justify-center p-2 mt-4">
                <a :href="item.btn_link" target="_blank"  type="button" class="btn btn-primary flex items-center justify-center capitalize truncate text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ item.btn_text }}
                </a>
            </div> 
            <button v-else class="btn btn-primary flex items-center justify-center capitalize mt-4 cursor-not-allowed">
                Coming Soon...
            </button> 
        </div>
        <div :class="item.graphics_order == 2 ? 'order-last' : ''" class="w-full h-full flex flex-col items-center justify-center">
            <img class="object-fit w-full h-5/6" :src="item.img" :alt="item.img_text" />
        </div>
        
        </div>
    </section>
</template>