<script lang="js">

export default {
    props: { content: Object }
}
</script>
<template>
    <section id="Welcome" :class="$root.y <= 0 ? 'bg-transparent' : 'welcome-bg'" class="w-full h-[85vh] z-[2] relative">
        <div class="mx-auto container h-full pt-[100px] h-[90%]">
            <div class="flex flex-col items-center w-full justify-center p-4 h-full relative rounded-b-lg">
                <h1 class="font-black text-white md:text-[52px] text-[25px] text-center z-[2]">
                    {{  content.welcome_title_text }}
                </h1>
                <p v-html="content.welcome_sub_text" class="text-[#AEAEAE] text-center font-medium text-sm px-4 lg:px-[29%] md:px-[25%] z-[2]">
                </p>
                <div class="w-full flex items-center justify-center p-2">
                    <button @click="$router.push('/about')"  type="button" class="btn btn-primary flex items-center justify-center capitalize">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ content.btn_text }}
                    </button>
                </div>  
                <div class="z-[1] welcome-character hidden md:flex absolute right-[5%] bottom-[12%] items-center justify-center rounded-lg w-[250px] h-[250px]">
                    <img class="object-fit w-full h-full" :src="content.img" />
                </div>
            </div>
        </div>
        <!-- <div  class="semi w-full h-[10%] rounded-b-full absolute -bottom-[67px] md:block hidden"></div> -->
    </section>
</template>