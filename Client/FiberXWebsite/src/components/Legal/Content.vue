
<script lang="js">

export default { props: { content: Object } }
</script>
<template>
    <section id="Content" class="w-full min-h-[45vh] z-[1] relative bg-white block  items-center justify-center overlfow-hidden border-b">
        <div class="w-full h-full px-[10%] py-[5%] flex items-center justify-center flex-col">
            <div class="w-full flex flex-col justify-center items-center px-2">
                <!-- <h2 class="text-fiberX-main font-black capitalize text-3xl mt-4 text-center"> {{  content.title_text  }}</h2> -->
                <p class="w-full text-center text-fiberX-main mt-4 px-[5%]">{{  content.sub_text }}</p>
                        
                <div class="relative py-[5%] w-full  flex flex-col items-center md:justify-start justify-center">
                    <p v-for="(item, index) in content.info" :key="index" class="w-full text-fiberX-main md:text-justify text-center mb-4">
                        <strong v-if="item && item.title_text" class="font-black text-md">{{ item.title_text }}</strong>
                        <br/>
                        <span v-html="item.sub_text"></span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>