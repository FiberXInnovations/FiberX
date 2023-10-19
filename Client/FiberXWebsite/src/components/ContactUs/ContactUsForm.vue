<script lang="js">
import { RouterLink } from 'vue-router';
import ContactUsSVGImage from './ContactUsSVGImage.vue';
import { contactEmail } from '../../api/emailAPI';

export default {
    props: {
        external_content: Object
    },
    data() {
        return {
            content: this.$root.content_data.ContactUsForm,
            full_name: "", email: "", subject: "", message: "",
            error_msg: "", title_text: "", recaptchaToken: null,
            RECAPTCHA_KEY: "6Led_rQoAAAAAD6ZhPHJ0TW3Q3z7kqprTPu5KPCG"
        };
    },
    methods: {
        showError(msg) { this.error_msg = msg; },

        hideError() { this.error_msg = ""; },

        onRecaptchaChange(token) { this.recaptchaToken = token; },

        async sendMessage() {
            this.hideError();

            this.full_name = this.full_name.toUpperCase();
            this.email = this.email.toUpperCase();
            this.subject = this.subject.toUpperCase();
            this.message = this.message.toUpperCase();

            if (this.$root.hp.isEmpty(this.full_name) || !this.$root.hp.validateName(this.full_name)) { this.showError(`Invalid input for full name`); return; }

            else if(this.$root.hp.isEmpty(this.email) || !this.$root.hp.validateEmail(this.email) ) { this.showError(`Invalid input for email address`); return; }

            else if(this.$root.hp.isEmpty(this.subject) || !this.$root.hp.validateNamey(this.subject)) { this.showError(`Invalid input for subject`); return; }

            else if (this.$root.hp.isEmpty(this.message) || !this.$root.hp.validateTextArea(this.message)) { this.showError(`Invalid input for message`); return; }

            else if (this.$root.hp.isEmpty(this.recaptchaToken)) { this.showError(`Invalid Recaptcha Token`); return; }

            else {
                const { full_name, email, subject, message, recaptchaToken } = this;
                const form_data = {  full_name, email, subject, message, recaptchaToken, }

                this.$root.loading = true;
                const res = await contactEmail(form_data);
                const { status, msg, data } = res;
                const dmsg = status == 'success' ? 'We would be in touch with you shortly. Thank you and have a great day.': 'Sorry, something went wrong please try again later.'
                this.$root.loading = false;

                this.$root.showAlert(status, msg, 2000, false, true);
                
            }
        },

        renderRecaptcha() {
            window.grecaptcha.render(this.$el.querySelector('.g-recaptcha'), { sitekey: this.RECAPTCHA_KEY, callback: this.onRecaptchaChange});
        }
    },
    mounted: function() {
        const subject = this.$route.query.subject;
        this.subject = subject ? `Inquiry on ${subject}` : this.subject;
        this.content.title_text =  subject ? `${this.title_text} on ${subject}` : this.content.title_text;
        window.onRecaptchaLoaded = () => { this.renderRecaptcha(); };
        // window.grecaptcha.render(this.$el.querySelector('.g-recaptcha'), { sitekey: this.RECAPTCHA_KEY, callback: this.onRecaptchaChange});
    },
    created: function() { 
        this.content = this.external_content && Object.keys(this.external_content).length > 0 ? this.external_content : this.content;
        this.title_text = this.content.title_text;
        window.addEventListener('load', this.windowLoadedHandler);
    },
    components: { RouterLink, ContactUsSVGImage },
    watch: {
        $route(to, from) {
            const subject = this.$route.query.subject;
            this.subject = subject ? `Inquiry on ${subject}` : this.subject;
            this.content.title_text =  subject ? `${this.title_text} on ${subject}` : this.content.title_text;
        },
    },
}
</script>
<template>
    <section id="ContactUsForm"  class="w-full h-[85vh]">
        <div class="mx-auto container h-full pt-[90px]">
            <div class="flex flex-col items-center justify-center p-4 md:grid md:grid-cols-2 gap-4">
                <div class="flex items-center w-full md:h-full h-[100px] px-4">
                    <!-- <img class="object-fit w-full h-full" :src="content.img" /> -->
                    <ContactUsSVGImage />
                </div>
                <div class="flex items-center w-full h-full px-4">
                    <form class="w-full h-full bg-transabrent rounded-lg">
                        <h1 class="title text-center mb-4 w-full">{{ content.title_text }}</h1>
                        <p class="text-[#AEAEAE] text-center font-medium text-sm px-4 z-[2]">
                            {{ content.sub_text }}
                        </p>
                        <!-- full name -->
                        <div class="form-group relative w-full my-2">
                            <label for="full_name" class="block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </label>
                            <input type="text" id="full_name" v-model="full_name" class="form-control form-control-lg thick w-full uppercase" placeholder="Full Name">
                        </div>
                        <!-- email -->
                        <div class="form-group relative my-2">
                            <label for="email" class="block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </label>
                            <input type="email" id="email" v-model="email" class="form-control form-control-lg thick w-full uppercase" placeholder="E-mail">
                        </div>
                        <div class="form-group relative w-full my-2">
                            <label for="subject" class="block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </label>
                            <input type="text" id="subject" v-model="subject" class="form-control form-control-lg thick w-full uppercase" placeholder="Subject/Title">
                        </div>
                        <!-- message -->
                        <div class="form-group message w-full my-2">
                            <textarea id="message" v-model="message" class="form-control form-control-lg w-full uppercase" rows="7" placeholder="Mensage.."></textarea>
                        </div>

                        <div class="form-group message w-full my-2 items-center justify-center flex">
                            <div class="g-recaptcha" :data-sitekey="RECAPTCHA_KEY" @g-recaptcha-response="onRecaptchaChange"></div>
                        </div>


                        <div v-if="error_msg" class="text-center my-2 w-full flex items-center justify-center bg-red-500 text-black break-word rounded-xl p-2">
                           {{ error_msg }}
                        </div>

                        <div class="text-center my-2 w-full flex items-center justify-center">
                            <button @click="sendMessage" type="button" class="btn btn-primary flex items-center justify-center capitalize">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>