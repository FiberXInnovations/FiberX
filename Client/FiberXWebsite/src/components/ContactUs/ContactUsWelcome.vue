<script lang="js">

export default {
    data() { 
        return {
            content: this.$root.content_data.ContactUsWelcome,

        }
    }
}
</script>
<template>
    <section id="ContactUsWelcome" class="w-full h-[85vh]">
        <div class="mx-auto container h-full pt-[90px]">
            <div class="flex flex-col items-center w-full justify-center p-4 h-full relative">
                <h1 class="font-black text-white md:text-[52px] text-[25px] text-center z-[2]">
                    {{  content.title_text }}
                </h1>
                <p class="text-[#AEAEAE] text-center font-medium text-sm px-4 lg:px-[25%] md:px-[25%] z-[2]">
                    {{ content.sub_text }}
                </p>
                <div class="z-[1] welcome-character hidden md:flex absolute right-[5%] bottom-[12%] items-center justify-center rounded-lg w-[250px] h-[250px]">
                    <img class="object-fit w-full h-full" :src="content.img" />
                </div>
            </div>
        </div>
    </section>
</template>