<script lang="js">

export default {
    data() { 
        return {
            content: this.$root.content_data.Scroller,
        }
    },
    methods: {
        isAtBottom() { 
            const main = document.getElementById("ScrollArea");
            return main.scrollTop + main.clientHeight >= main.scrollHeight;
        },
        scrollPageDown() {
            const main = document.getElementById("ScrollArea");
            this.$root.y = window.innerHeight * 0.85;
            main.scrollTop += this.$root.y;
        },
        scrollPageUp() {
            const main = document.getElementById("ScrollArea");
            this.$root.y = -window.innerHeight * 0.85;
            main.scrollTop += this.y;
        }
    }
}
</script>
<template>
    <section id="Scroller" class="absolute bottom-24 right-10 flex flex-col gap-4 z-20">
        <div v-if="$root.y > 0" @click="scrollPageUp" class="scroll-up rounded-full w-[50px] h-[50px] bg-[#21201D] shadow-3xl animate-bounce p-2 cursor-pointer scroller">
            <div class="w-full h-full items-center flex justify-center text-white" v-html="content.scroll_up.icon"> 
            </div>
        </div>
        <div  @click="scrollPageDown" class="rounded-full w-[50px] h-[50px] bg-[#21201D] shadow-3xl animate-bounce p-2 cursor-pointer scroller">
            <div class="w-full h-full items-center flex justify-center text-white" v-html="content.scroll_down.icon"> 
            </div>
        </div>
        
    </section>
</template>