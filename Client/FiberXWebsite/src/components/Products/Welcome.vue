<script lang="js">

export default {
    props: { content: Object },
}
</script>
<template>
    <section id="Welcome" class="w-full h-[85vh] z-[1] relative bg-[#21201D] block  items-center justify-center overlfow-hidden border-b">
        <div class="w-full h-full p-0 pt-[105px]">
            <div class="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-2 p-0">
                <div class="w-full h-full overflow-hidden flex flex-col items-center justify-center lg:pl-[20%] md:pr-0 md:pl-[15%] px-[10%] md:order-1 order-2">
                    <img class="w-full h-4/6 object-fit" :src="content.img" :alt="`${content.title_text} Image`" />
                </div>

                <div class="w-full h-full overflow-hidden flex flex-col lg:pr-[20%] md:pr-[15%] md:pl-0 px-[10%] items-center justify-center py-4 md:order-2 order-1">
                    <h3 class="lg:text-[49px] md:text-[40px] text-[25px] text-white font-black w-full break-word md:text-start text-center">{{ content.title_text }}</h3>
                    <p class="w-full break-word mt-4 md:text-left text-center text-fiberX-sub-text md:text-sm text-[12px]">{{  content.sub_text }}</p>
                </div>
                
               

            </div>
        </div>
    </section>
</template>