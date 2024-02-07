<script lang="js">

export default {
    props: {
        content: Object,
    }
}
</script>

<template>
    <section id="WhoWeAre" class="w-full min-h-[85vh] z-[1] relative bg-white py-[10%] flex items-center justify-center border-b">
        <div class="w-full h-full  grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 flex md:px-[10%] px-[10%] flex items-center justify-center">
            <div class="w-full h-full items-center justify-center flex flex-col p-4">
                <img class="object-fit w-10/12 h-10/12" :src="content.img" :alt="`${content.title_text} image`" />
            </div>
            <div class="w-full h-full items-center justify-center flex flex-col p-4">
                <h3 class="lg:text-[49px] md:text-[40px] text-[30px] text-fiberX-main font-black w-full break-word md:text-start text-center">{{ content.title_text }}</h3>
                <p class="w-full break-word mt-4 md:text-left text-center text-fiberX-sub-text">{{  content.sub_text }}</p>
                <div v-if="content.btn_text" class="w-full flex items-center justify-center p-2 mt-4">
                    <button @click="$router.push(`${content.btn_link}`)"  type="button" class="btn btn-primary flex items-center justify-center capitalize truncate text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ content.btn_text }}
                    </button>
                </div>  
            </div>
        </div>
    </section>
</template>