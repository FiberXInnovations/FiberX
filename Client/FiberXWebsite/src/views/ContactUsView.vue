<script>
import ContactUsWelcome from '../components/ContactUs/ContactUsWelcome.vue';
import ContactUsInfo from '../components/ContactUs/ContactUsInfo.vue';
import ContactUsForm from '../components/ContactUs/ContactUsForm.vue';
import Slogan from '../components/About/Slogan.vue';


export default {
    data() { 
        return { 
        }
    },
    methods: {

    },
    created: async function() { },
    mounted: function() { 
        const mainSection = document.getElementById('ScrollArea');
        mainSection.scrollTo(0, 0);
    },
    components: { ContactUsWelcome, ContactUsInfo, ContactUsForm, Slogan },
}
</script>

<template>
    <div class="w-full">
        <ContactUsWelcome />
        <ContactUsInfo />
        <ContactUsForm />
        <Slogan />
    </div>
</template>
