
<script lang="js">

export default {
    props: { content: Object },
}
</script>
<template>
    <section id="Welcome" class="w-full h-[45vh] z-[1] relative bg-[#21201D] block  items-center justify-center overlfow-hidden border-b">
        <div class="w-full h-full px-[10%] pt-[97px] flex items-center justify-center flex-col">
            <nav class="flex w-full items-center justify-center px-2" aria-label="Breadcrumb">
                <ol class="inline-flex items-center justify-center space-x-1 md:space-x-3 w-full">
                    <li class="inline-flex items-center">
                        <RouterLink to="/" class="inline-flex items-center text-md font-medium text-white hover:underline">
                            <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Home
                        </RouterLink>
                    </li>
                    <li v-for="(item, index) in content.path" :key="index">
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            <RouterLink v-if="item.link" :to="item.link" class="ml-1 text-md font-medium text-white hover:underline md:ml-2">
                                {{  item.text  }}
                            </RouterLink>
                            <span v-else class="ml-1 text-md font-medium text-white md:ml-2">
                                {{  item.text  }}
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>

            <h3 class="lg:text-[49px] md:text-[40px] text-[25px] text-white font-black w-full break-word text-center">{{ content.title_text }}</h3>
            <p class="w-full break-word mt-4 text-center text-fiberX-sub-text md:text-sm text-[12px]">{{  content.sub_text }}</p>
        </div>
    </section>
</template>