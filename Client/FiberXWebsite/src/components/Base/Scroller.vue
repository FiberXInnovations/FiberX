<script lang="js">

export default {
    props: { content: Object },

    data() { return { scrollable: false } },

    watch: { $route(to, from) { this.isWindowScrollable(); } },

    mounted: function() { this.isWindowScrollable(); },

    methods: {
        isAtBottom() { 
            const main = document.getElementById("ScrollArea");
            return main.scrollTop + main.clientHeight >= main.scrollHeight;
        },
        scrollPageDown() {
            const main = document.getElementById("ScrollArea");
            this.$root.y = window.innerHeight * 0.9;
            main.scrollTop += this.$root.y;
        },
        scrollPageUp() {
            const main = document.getElementById("ScrollArea");
            this.$root.y = -window.innerHeight * 0.9;
            main.scrollTop += this.y;
        },
        isWindowScrollable() {
            setTimeout(()=> { 
                const main = document.getElementById("ScrollArea");
                if (!main) {
                    console.error(`Element with id 'ScrollArea' not found`);
                    return false;
                }
                const parent_height     = main.clientHeight;
                const children_height   = Array.from(main.children).reduce((acc, child) => {return acc + child.offsetHeight;}, 0);
                this.scrollable         =  children_height > parent_height;
            }, 400);
        }
    }
}
</script>
<template>
    <section id="Scroller" class="absolute bottom-24 right-10 flex flex-col gap-4 z-20">
        <div v-if="$root.y > 2" @click="scrollPageUp" class="rounded-full w-[50px] h-[50px] bg-[#21201D] animate-bounce p-2 cursor-pointer scroller">
            <div class="w-full h-full items-center flex justify-center text-white" v-html="content.scroll_up.icon"> 
            </div>
        </div>
        <div v-if="scrollable"  @click="scrollPageDown" class="rounded-full w-[50px] h-[50px] bg-[#21201D] animate-bounce p-2 cursor-pointer scroller">
            <div class="w-full h-full items-center flex justify-center text-white" v-html="content.scroll_down.icon"> 
            </div>
        </div>
        
    </section>
</template>