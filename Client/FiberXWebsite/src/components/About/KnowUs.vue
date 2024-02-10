<script lang="js">

export default {
    props: { content: Object }

}
</script>
<template>
    <section id="KnowUs" class="w-full h-[85vh] z-[2] relative bg-white flex flex-col  items-center justify-center overlfow-hidden">
        <div class="w-full mx-auto items-center justify-center flex flex-col md:px-[25%] px-[10%] md:py-[10%] pt-[40%] z[2]">
            <h3 class="lg:text-[49px] md:text-[40px] text-[30px] text-fiberX-main font-black w-full break-word text-center">{{ content.title_text }}</h3>
            <p class="w-full break-word mt-4 text-center text-fiberX-sub-text md:text-lg text-[12px]">{{  content.sub_text }}</p>
        </div>
        <div class="absolute md:top-0 -top-8 md:left-[4%] left-[30%] md:w-[25%] w-5/12 md:h-[25%] h-3/6 flex items-center justify-center overflow-hidden z-[1]">
            <img class="object-contain w-full h-full" :src="content.img_1" :alt="`${content.title_text} image one`">
        </div>
        <div class="absolute bottom-0 right-[4%] md:w-[25%] w-2/12 md:h-[25%] h-2/6 md:flex hidden items-center justify-center overflow-hidden z-[1]">
            <img class="object-contain w-full h-full" :src="content.img_2" :alt="`${content.title_text} image two`">
        </div>
    </section>
</template>