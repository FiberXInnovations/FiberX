<script lang="js">

export default {
    props: { content: Object },
}
</script>
<template>
    <section id="Welcome" class="w-full h-[85vh] z-[1] relative bg-white block  items-center justify-center overlfow-hidden border-b">
        <div class="w-full h-full p-0 pt-[96px]">
            <div class="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-2 p-0">
                <div class="w-full h-full overflow-hidden flex flex-col md:px-[10%] px-[10%] items-center justify-center md:order-1 order-2">
                    <h3 class="lg:text-[49px] md:text-[40px] text-[25px] text-fiberX-main font-black w-full break-word md:text-start text-center">{{ content.title_text }}</h3>
                    <p class="w-full break-word mt-4 md:text-left text-center text-fiberX-sub-text md:text-md text-[12px]">{{  content.sub_text }}</p>
                </div>
                
                <div class="w-full h-full overflow-hidden flex flex-col items-center justify-center p-0 md:order-2 order-1">
                    <img class="w-full object-fit" :src="content.img" :alt="`${content.title_text} Image`" />
                </div>

            </div>
        </div>
    </section>
</template>