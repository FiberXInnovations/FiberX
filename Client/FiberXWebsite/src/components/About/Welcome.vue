<script lang="js">

export default {
    props: { content: Object },

    data() { return { slider_index: 0, carousel: null } },

    watch: { $route(to, from) { this.initiateSlider(); } },

    mounted: function() { this.initiateSlider(); },

    methods: {
        initiateSlider() {
            const slides = [];
            const options =  { defaultPosition: 1, interval: 6000, onNext: () => { if(!this.slider_index) { this.slider_index +=1 } else { this.slider_index -= 1 } }, };
            const slider_elements = document.getElementsByClassName("slider");
            let index = 0;

            for (let slide_element of slider_elements) { slides.push( {position: index, el: slide_element} ); index += 1; }
            
            this.carousel = new Carousel(slides, options);
            this.carousel.cycle();
        }
    }
}
</script>
<template>
    <section id="Welcome" class="w-full h-[85vh] z-[1] relative bg-white block  items-center justify-center overlfow-hidden">
        <div class="w-full h-full p-0 pt-[98px]">
            <div class="w-full h-full grid md:grid-cols-2 grid-cols-1 gap-2 p-0">
                <div class="w-full h-full overflow-hidden flex flex-col md:pr-0 md:pl-[15%] px-[10%] items-center justify-center md:order-1 order-2">
                    <h3 class="lg:text-[49px] md:text-[40px] text-[25px] text-fiberX-main font-black w-full break-word md:text-start text-center">{{ content.title_text }}</h3>
                    <p class="w-full break-word mt-4 md:text-left text-center text-fiberX-sub-text md:text-md text-[12px]">{{  content.sub_text }}</p>
                </div>
                
                <div :class="slider_index ? 'p-0': 'pt-4'"  class="w-full h-full overflow-hidden flex flex-col items-center justify-center md:order-2 order-1">
                
                    <div id="welcomeSlider" class="relative w-full h-full">
                        <div class="relative h-full w-full flex items-center justify-center overflow-hidden rounded-lg">
                            

                            <div id="slider-1" class="hidden duration-700 ease-in-out slider w-full h-full">
                                <img :src="content.slider[0].img" :alt="`${content.title_text} Image`" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain">
                            </div>
                            <div id="slider-2" class="hidden duration-700 ease-in-out slider w-full h-full">
                                <img :src="content.slider[1].img" :alt="`${content.title_text} Image`" class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain">
                            </div>
                        </div>

                    
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>