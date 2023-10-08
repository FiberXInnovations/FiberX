<script lang="js">
    import { RouterLink } from 'vue-router';
</script>

<template>   
    <nav class="bg-transparent min-h-[90px] fixed w-screen border-b border-gray-400">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <RouterLink to="/" class="flex items-center">
                <img src="@/assets/img/Logo/logo_2.png" class="h-16 mr-3" alt="Flowbite Logo" />
            </RouterLink>
            <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none" aria-controls="navbar-solid-bg" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul class="flex flex-col font-bold mt-4 rounded-lg md:flex-row md:space-x-8  md:mt-0 md:border-0 md:bg-transparent">
                    <li>
                        <RouterLink to="/" :class="$route.name == 'Home'? 'text-[#FFCC00]' : 'text-white'" class="block py-2 pl-3 pr-4 hover:text-[#FFCC00] rounded md:bg-transparent md:p-0">
                            Home
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about" :class="$route.name == 'About'? 'text-[#FFCC00]' : 'text-white'" class="block py-2 pl-3 pr-4 hover:text-[#FFCC00] rounded md:bg-transparent md:p-0">
                            About Us
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services" :class="$route.name == 'Services'? 'text-[#FFCC00]' : 'text-white'" class="block py-2 pl-3 pr-4 hover:text-[#FFCC00] rounded md:bg-transparent md:p-0">
                            Services
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/products" :class="$route.name == 'Products'? 'text-[#FFCC00]' : 'text-white'" class="block py-2 pl-3 pr-4 hover:text-[#FFCC00] rounded md:bg-transparent md:p-0">
                            Products
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact" :class="$route.name == 'Contact'? 'text-[#FFCC00]' : 'text-white'" class="block py-2 pl-3 pr-4 hover:text-[#FFCC00] rounded md:bg-transparent md:p-0">
                            Contact Us
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>