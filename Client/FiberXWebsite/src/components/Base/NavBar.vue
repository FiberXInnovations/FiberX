<script lang="js">
    import { RouterLink } from 'vue-router';

    export default {
        props: {
            y: Number,
            white_page: Boolean,
        },
        data() { 
          return {
            content: this.$root.content_data.NavBar
          }
        }
    }
</script>

<template>   
    <nav :class="y <= 0 && !white_page ? 'bg-transparent shadow-2xl' : 'bg-[#21201D] border-b border-gray-400'" class="min-h-[90px] fixed w-screen z-[90]">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <RouterLink to="/" class="flex items-center">
                <img :src="content.logo.img" class="h-16 mr-3" :alt="content.logo.title" />
            </RouterLink>
            <button @click="$root.y = 1" data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none" aria-controls="navbar-solid-bg" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul class="flex flex-col font-bold mt-4 rounded-lg md:flex-row md:space-x-8  md:mt-0 md:border-0 md:bg-transparent">
                    <li v-for="(item, index) in content.menu" :key="index">
                        <RouterLink :to="item.link" :class="$route.name == item.name? 'text-fiberX' : 'text-white'" class="block py-2 pl-3 pr-4 hover:text-fiberX rounded md:bg-transparent md:p-0">
                            {{ item.text }}
                        </RouterLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>