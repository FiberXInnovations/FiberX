<script lang="js">

export default {
    props: { content: Object },
    
}
</script>
<template>
     <section id="NotFound" class="w-full h-[85vh] z-[1] relative bg-white block  items-center justify-center">
        <div class="w-full pt-[100px] h-full flex flex-col items-center justify-center md:px-[10%] px-[10%] gap-2 z-[2] relative">
            <div class="w-full h-[30%] items-center justify-center  ">
                <h3 class="md:text-[49px] text-[25px] text-fiberX-main font-black w-full break-word text-center">{{ content.title_text }}</h3>
                <div v-if="content.btn_text" class="w-full flex items-center justify-center p-2 mt-4">
                    <button @click="$router.push('/')"  type="button" class="btn btn-primary flex items-center justify-center capitalize truncate text-sm shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ content.btn_text }}
                    </button>
                </div>  
            </div>
            <div class="w-full h-[54%] items-center justify-center my-2 z-[1] relative">
                <img class="w-full h-full object-fit" :src="content.img" :alt="`${content.title_text} Image`"/>
            </div>

        </div>
        
       
    </section>
</template>