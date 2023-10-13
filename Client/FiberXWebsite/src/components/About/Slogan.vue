<script lang="js">

export default {
    data() { 
        return {
            content: this.$root.content_data.Slogan,

        }
    }
}
</script>
<template>
    <section id="Slogan" class="w-full h-[65vh]">
        <div class="mx-auto container h-full pt-[90px]">
            <div class="flex flex-col items-center w-full justify-center p-4 h-full relative">
                <div class="z-[1] flex items-center justify-center rounded-lg grid grid-cols-1 md:w-[250px] h-auto w-full">
                    <img class="object-fit w-full h-full" :src="content.img" />
                </div>
                <h1 class="font-black text-white md:text-[52px] text-[25px] text-center z-[2]">
                    {{  content.title_text }}
                </h1>                
            </div>
        </div>
    </section>
</template>