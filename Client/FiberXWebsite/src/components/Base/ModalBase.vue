<script>

export default {
    props: {
        modal_status: String,
        modal_state: Boolean
    },
    data() {
        return {
           modal_data: {},
           modalKey: 0,
        }
    },
    components: { 

    },
    watch: {
        modal_data(newVal, OldVal) {
            if(newVal) {
                const new_data_keys = Object.keys(newVal);
                for(let data_key of new_data_keys) {
                    setTimeout(()=> {
                        this.$refs[this.modal_status][data_key] = newVal[data_key];
                    }, 150)
                    
                }
            }
        },

        modal_state(newVal, OldVal) { 
            if (newVal == false) { this.modalKey += 1}
        }
    },
}

</script>


<template>
     <div v-show="modal_state"  class="overlay fixed top-0 left-0 w-screen h-full z-[2000] flex flex-col items-center justify-center content-center p-4 overflow-x-hidden overflow-y-auto md:inset-0  min-h-full">
        <div :class="[
            (modal_status != 'ProductCategory' && modal_status != 'Currencies' && modal_status != 'User' ? 'max-w-lg' : ''), 
            (modal_status == 'Currencies'? 'max-w-3xl' : ''), 
            (modal_status == 'ProductCategory'? 'max-w-full' : ''),  
            (modal_status == 'User'? 'max-w-3xl' : ''),  
            (modal_state ? 'show-modal' : 'hide-modal')]" 
            class="relative w-full h-full md:h-full fiyalo-modal items-center justify-center place-content-center content-center">
            
        </div>
     </div>
</template>

<style scoped>
.overlay {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), 
              linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              linear-gradient(0deg, rgba(47, 61, 209, 0.7), rgba(55, 47, 209, 0.7))

}

.fiyalo-modal {
    transition: bottom 5s;
    bottom: 1000%;
}

.show-modal {
    bottom: 0px !important;
    transition: bottom 5s;
}

.hide-modal {
    bottom: 1000% !important;
    transition: bottom 5s;
}
</style>