<script lang="js">

export default {
    data() { 
        return {
            content: this.$root.content_data.CoreValues,
        }
    }
}
</script>
<template>
    <section id="CoreValues" class="w-full min-h-[85vh] bg-[#21201D]">
        <div class="mx-auto container h-full pt-[90px]">
            <div class="flex flex-col items-center w-full justify-start p-4 h-full relative">
                <h1 class="font-black text-white md:text-[52px] text-[25px] text-center z-[2]">
                    {{  content.title_text }}
                </h1>
                <p class="text-[#AEAEAE] text-center font-medium text-sm px-4 lg:px-[25%] md:px-[25%] z-[2]">
                    {{ content.sub_text }}
                </p>

                <div class="w-full h-full overlfow-hidden grid md:grid-cols-2 gird-cols-1 flex items-center justify-center gap-2 mt-4 mb-2">
                    <div v-for="(item, index) in content.core_values" :key="index" class="w-full md:h-[200px] h-auto flex items-start justify-start">
                        <div class="items-center flex justify-center border-black rounded-full w-[70px] h-[70px]">
                            <img class="object-fit w-full h-full" :src="item.img" />
                        </div>
                        <div class="w-full flex flex-col items-start justify-start p-2">
                            <span class="font-black text-white md:text-lg text-[16px] text-center z-[2]">
                                {{  item.title_text }}
                            </span>
                            <p class="text-[#AEAEAE] font-medium text-sm md:flex hidden text-ellipsis overflow-hidden ...">
                                {{ item.sub_text }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>