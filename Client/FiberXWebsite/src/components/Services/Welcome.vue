<script lang="js">

export default {
    props: { content: Object },
}
</script>
<template>
    <section id="Welcome" class="w-full h-[85vh] z-[1] relative bg-white block  items-center justify-center overlfow-hidden border-b">
        <div class="w-full h-full p-0 pt-[96px]">
            <div class="w-full h-full grid grid-cols-1 gap-2 p-0">
                
                <div class="w-full h-full overflow-hidden flex flex-col items-center justify-center p-0 relative">
                    <img class="w-full object-fit" :src="content.img" :alt="`${content.title_text} Image`" />
                    <div class="w-full h-full overlay-bg absolute inset-0 z-[1]"></div>
                    <div class="w-full h-full overflow-hidden flex flex-col lg:px-[20%] md:px-[10%] px-[10%] items-center justify-center absolute z-[2]">
                        <h3 class="lg:text-[49px] md:text-[40px] text-[25px] text-fiberX-main font-black w-full break-word text-center">{{ content.title_text }}</h3>
                        <p class="w-full break-word mt-4 md:text-left text-center text-white md:text-md text-[12px]">{{  content.sub_text }}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>