<script>


export default {
    data() { return { 
        }
    },
        methods: {

        },
        created: async function() { },
        mounted: function() { window.scrollTo(0, 0);},
        components: { },
}
</script>

<template>
    <section id="Welcome" class="w-full h-[85vh]">
        <div class="mx-auto container h-full">
            <div class="flex flex-col items-center w-full justify-center p-4 h-full">
                <h1 class="font-black text-white text-[52px] text-center z-[2]">
                    Innovate, Integrate, Inspire.
                </h1>
                <p class="text-[#AEAEAE] text-center font-medium text-sm px-4 lg:px-[25%] md:px-[25%] z-[2]">
                    Welcome to Fiber x, Bringing you a world where technology empowers  organiztions and individuals to reach new heights of productivity  & success.
                </p>
                <div class=" z-[1]welcome-character hidden md:flex absolute right-[12%] bottom-[27%] items-center justify-center rounded-lg w-[250px] h-[250px]">
                    <img class="object-fit w-full h-full" src="@/assets/img/bg/welcome_character.svg" />
                </div>
            </div>
        </div>
    </section>
</template>
