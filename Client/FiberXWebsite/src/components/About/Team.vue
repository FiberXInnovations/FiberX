<script lang="js">

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    data() { 
        return {
            content: this.$root.content_data.Team,
            slidesPerView: 1,
        }
    },
    mounted() { this.slidesPerView = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 3 : 1; },
    components: { Swiper, SwiperSlide,},
    setup() {
        const onSwiper = (swiper) => { console.log(swiper);};

        const onSlideChange = () => { console.log('slide change');};
        
        return { onSwiper, onSlideChange, modules: [Navigation, Pagination, Scrollbar, A11y],};
    },
}
</script>
<template>
    <section id="Team" class="w-full min-h-[85vh]">
        <div class="mx-auto container h-full pt-[90px]">
            <div class="flex flex-col items-center w-full justify-start p-4 h-full relative">
                <h1 class="font-black text-white md:text-[52px] text-[25px] text-center z-[2]">
                    {{  content.title_text }}
                </h1>
                <p class="text-[#AEAEAE] text-center font-medium text-sm px-4 lg:px-[25%] md:px-[25%] z-[2]">
                    {{ content.sub_text }}
                </p>
                
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
                                <div class="w-full h-[70%] flex items-center justify-center">
                                    <img class="object-fit w-full h-full" :src="item.img" />
                                </div>
                                <div class="w-full h-[30%] flex flex-col items-center justify-center bg-[#21201D] border border-white rounded-b-lg">
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