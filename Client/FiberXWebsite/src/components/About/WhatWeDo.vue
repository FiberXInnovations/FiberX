<script lang="js">

export default {
    props: { content: Object }

}
</script>
<template>
    <section id="WhatWeDo" class="w-full h-[85vh] z-[2] relative bg-white flex flex-col  items-center justify-start overlfow-hidden">
        <div class="w-full mx-auto items-center justify-start flex flex-col md:px-[20%] px-[10%] pt-[5%] pb-2 z[2]">
            <h3 class="lg:text-[49px] md:text-[40px] text-[30px] text-fiberX-main font-black w-full break-word text-center">{{ content.title_text }}</h3>
            <p class="w-full break-word mt-4 text-center text-fiberX-sub-text md:text-lg text-[12px]">{{  content.sub_text }}</p>
        </div>
        <div class="w-full  mx-auto items-center justify-start flex flex-col md:px-[20%] px-[10%] z[2]">
            <img class="w-full h-[230px] object-fit" :src="content.img" :alt="content.title_text" />
        </div>
    </section>
</template>