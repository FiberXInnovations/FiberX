<script lang="js">

export default {
    props: { content: Object }

}
</script>
<template>
     <section id="CoreValues" class="w-full h-[85vh] relative bg-[#21201D] overlfow-hidden border-b">
        <div class="w-full px-[10%] h-full pt-[90px]">
            <div class="flex flex-col items-center w-full justify-start p-4 h-full relative">
                <h3 class="lg:text-[49px] md:text-[40px] text-[30px] text-white font-black w-full break-word text-center">{{ content.title_text }}</h3>
                <p class="w-full break-word mt-4 text-center text-fiberX-sub-text md:text-lg text-[12px]">{{  content.sub_text }}</p>

                <div class="w-full h-full overlfow-hidden grid md:grid-cols-2 gird-cols-1 flex items-center justify-center gap-2 mt-4 mb-2">

                    <div v-for="(item, index) in content.core_values" :key="index" class="w-full md:h-[200px] h-auto flex items-start justify-start">
                        <div class="items-center flex justify-center border-black rounded-full w-[70px] h-[70px]">
                            <img class="object-fit w-full h-full" :src="item.img" />
                        </div>
                        <div class="w-full flex flex-col items-start justify-start p-2">
                            <span class="font-black text-white md:text-lg text-[16px] text-center z-[2]">
                                {{  item.title_text }}
                            </span>
                            <p v-html="item.sub_text" class="text-[#AEAEAE] font-medium text-sm md:block hidden text-ellipsis overflow-hidden ...">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>