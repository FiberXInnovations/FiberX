<script lang="js">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    props: { content: Object },

    data() { return {  slidesPerView: 1, }},

    mounted() { this.slidesPerView = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 3 : 1; },

    components: { Swiper, SwiperSlide,},

    setup() {
        const onSwiper = (swiper) => { return swiper };

        const onSlideChange = () => { return 'slide changed';};
        
        return { onSwiper, onSlideChange, modules: [Navigation, Pagination, Scrollbar, A11y],};
    },

}
</script>
<template>
     <section id="Team" class="w-full h-[85vh] z-[2] overlfow-hidden">
        <div class="px-[12%] h-full pt-[90px]">
            <div class="flex flex-col items-center w-full justify-start p-4 h-full relative">
                <h3 class="lg:text-[49px] md:text-[40px] text-[30px] text-white font-black w-full break-word text-center">{{ content.title_text }}</h3>
                <p class="w-full break-word mt-4 text-center text-fiberX-sub-text md:text-lg text-[12px]">{{  content.sub_text }}</p>
                
                <!-- team slider -->
                <div id="TeamSlider" class="w-full mt-4">
                    <swiper
                        :modules="modules"
                        :slides-per-view="slidesPerView"
                        :space-between="30"
                        @swiper="onSwiper"
                        navigation
                        :pagination="{ clickable: true }"
                        @slideChange="onSlideChange"
                        class="default-slider">
                        <swiper-slide v-for="(item, index) in content.team_mates" :key="index">
                            <div class="w-full h-full items-center justify-center flex p-0 flex-col">
                                <div class="w-full h-[80%] flex items-center justify-center relative image-card cursor-pointer">
                                    <img class="object-cover object-top w-full h-full top-image" :src="item.img" />
                                    <img class="object-cover object-top w-full h-full hover-image" :src="item.img_2" />
                                </div>
                                <div class="w-full h-[20%] flex flex-col items-center justify-center bg-[#21201D] border border-white rounded-b-lg">
                                    <h1 class="font-black text-white text-[18px] text-center z-[2]">
                                        {{  item.name_text }}
                                    </h1>
                                    <p class="text-[#AEAEAE] text-center font-medium text-sm">
                                        {{ item.role_text }}
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>