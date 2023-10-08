<script>
    export default {
        props: {
            state: Boolean,
            msg : String,
            status : String,
        },
        methods: {
            closeAlert() {
                this.$parent.state = !this.$parent.state
            }
        }
    }
</script>

<template>
    <div v-if="state" class="overlay fixed h-screen w-screen">
        <div class="grid grid-row-1 flex justify-end">
            <div v-if="state && status == 'success'"  class="flex flex-row justify-center  items-center relative bg-gradient-success rounded-lg h-auto ml-4  mr-4 mt-4 p-4 relative">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-slate-200">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                </div>
                <div class="text-slate-200 text-sm capitalize p-2 text-left">
                    <h3 class="text-xl font-black text-white-900">
                        {{ status.toUpperCase() }}!
                    </h3>
                    <p class="text-slate-200">
                        {{ msg }} 
                    </p>
                </div>
                <span @click="closeAlert()" class="absolute -top-2 -left-4 bg-gradient-success text-slate-200 h-8 w-8 rounded-full p-2 flex justify-center items-center uppercase font-bold cursor-pointer ">
                    X
                </span>
            </div>
            <div v-if="state && status == 'error'"  class="flex flex-row justify-center  items-center relative bg-gradient-danger rounded-lg h-auto ml-4  mr-4 mt-4 p-4 relative">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-slate-200">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                </div>
                <div class="text-slate-200 text-sm capitalize p-2 text-left">
                    <h3 class="text-xl font-black text-white-900">
                        {{ status.toUpperCase() }}!
                    </h3>
                    <p class="text-slate-200">
                        {{ msg }} 
                    </p>
                </div>
                <span @click="closeAlert()" class="absolute -top-2 -left-4 bg-gradient-danger text-slate-200 h-8 w-8 rounded-full p-2 flex justify-center items-center uppercase font-bold cursor-pointer">
                    X
                </span>
            </div>
            <div v-if="state && status == 'info'"  class="flex flex-row justify-center  items-center relative bg-gradient-info rounded-lg h-auto ml-4  mr-4 mt-4 p-4 relative">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-slate-900">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>

                </div>
                <div class="text-slate-900 text-sm capitalize p-2 text-left">
                    <h3 class="text-xl font-black text-white-900">
                        {{ status.toUpperCase() }}!
                    </h3>
                    <p class="text-slate-900">
                        <span v-html="msg"></span>
                    </p>
                </div>
                <span @click="closeAlert()" class="absolute -top-2 -left-4 bg-gradient-info text-slate-900 h-8 w-8 rounded-full p-2 flex justify-center items-center uppercase font-bold cursor-pointer">
                    X
                </span>
            </div>
            <div v-if="state && status == 'service_info'"  class="flex flex-row justify-center  items-center relative bg-gradient-info rounded-lg h-auto ml-4  mr-4 mt-4 p-4 relative">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-slate-900">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>

                </div>
                <div class="text-slate-900 text-sm capitalize p-2 text-left">
                    <h3 class="text-xl font-black text-white-900">
                        INFO!
                    </h3>
                    <p class="text-slate-900">
                        <span v-html="msg"></span>
                        <a v-if="$parent.service_for"  @click="$root.payService()" class="cursor-pointer underline font-bold"> Click Here</a>
                    </p>
                </div>
                <span @click="closeAlert()" class="absolute -top-2 -left-4 bg-gradient-info text-slate-900 h-8 w-8 rounded-full p-2 flex justify-center items-center uppercase font-bold cursor-pointer">
                    X
                </span>
            </div>
        </div>
        
    </div>
</template>

<style>

.overlay {
  /* display: none; */
  z-index: 2001;
  left: 0;
  top: 0;
  overflow: hidden;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
              linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              linear-gradient(0deg, rgba(209, 47, 62, 0.7), rgba(209, 47, 62, 0.7))
}

.bg-gradient-success {
    background-image: linear-gradient(195deg,#66bb6a,#43a047) !important;
}

.bg-gradient-danger {
  background-image: linear-gradient(195deg,#ec407a,#d81b60) !important;
}

.bg-gradient-info {
  background-image: linear-gradient(195deg,#7AD7F0,#92DFF3) !important;
}

</style>