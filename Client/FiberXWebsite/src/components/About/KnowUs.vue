<script lang="js">

export default {
    props: { content: Object }

}
</script>
<template>
    <section id="KnowUs" class="w-full h-[85vh] z-[2] relative bg-white flex flex-col  items-center justify-center overlfow-hidden border-b">
        <div class="w-full mx-auto items-center justify-center flex flex-col md:px-[25%] px-[10%] py-[10%] z[2]">
            <h3 class="lg:text-[49px] md:text-[40px] text-[30px] text-fiberX-main font-black w-full break-word text-center">{{ content.title_text }}</h3>
            <p class="w-full break-word mt-4 text-center text-fiberX-sub-text md:text-lg text-[12px]">{{  content.sub_text }}</p>
        </div>
        <div class="absolute top-0 left-2 md:w-2/12 w-4/12 md:h-2/12 h-2/6 flex items-center justify-center overflow-hidden z-[1]">
            <img class="object-fit w-full" :src="content.img_1" :alt="`${content.title_text} image one`">
        </div>
        <div class="absolute bottom-0 right-2 md:w-2/12 w-4/12 md:h-2/12 h-2/6 flex items-center justify-center overflow-hidden z-[1]">
            <img class="object-fit w-full" :src="content.img_2" :alt="`${content.title_text} image two`">
        </div>
    </section>
</template>