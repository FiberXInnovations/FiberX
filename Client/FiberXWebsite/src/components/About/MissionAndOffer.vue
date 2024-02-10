<script lang="js">

export default {
    props: { content: Object }

}
</script>
<template>
    <section id="MissionAndOffer" class="w-full h-[85vh] z-[2] relative bg-white overlfow-hidden border-b flex flex-col items-center py-4">
        <div class="w-full h-[33.33%] flex items-center justify-center px-[10%]">
            <div class="w-full h-full rounded-2xl mission-bg relative overflow-hidden">
                <div class="w-full h-full overlay-bg absolute top-0 inset-0 rounded-2xl z-[1]"></div>
                <div class="w-full z-[2] h-full p-[2%] flex flex-col items-center relative">
                    <h3 class="lg:text-[49px] md:text-[40px] text-[30px] text-white font-black w-full break-word md:text-start text-center">{{ content.Mission.title_text }}</h3>
                    <p class="w-full break-word md:text-start text-center text-white md:text-lg text-[12px]">{{  content.Mission.sub_text }}</p>
                </div>

            </div>
        </div>
        <div class="w-full h-[66.67%] flex md:flex-row flex-col items-center justify-center px-[10%] pt-8">
            <div class="md:w-6/12 md:h-full w-full h-4/6 md:order-1 order-2 flex items-center justify-center py-[5%]">
                <img class="w-full h-full object-fit" :src="content.Offer.img" :alt="content.Offer.title_text" />
            </div>
            <div class="md:w-6/12 md:h-full w-full h-4/6 md:order-2 order-1 flex items-center justify-center py-[5%] flex-col"> 
                <h3 class="lg:text-[49px] md:text-[40px] text-[30px] text-fiberX-main font-black w-full break-word md:text-start text-center">{{ content.Offer.title_text }}</h3>
                <p class="w-full break-word mt-4 md:text-start text-center text-fiberX-sub-text md:text-lg text-[12px]">{{  content.Offer.sub_text }}</p>
            </div>
        </div>
    </section>
</template>