<script lang="js">
import ContactUsSVGImage from './ContactUsSVGImage.vue';
import { contactEmail } from '../../api/emailAPI';

export default {
    props: { content: Object },
    data() {
        return {
            title_text: this.content.title_text,
            full_name: "", email: "", subject: "", message: "",
            error_msg: "", title_text: "", recaptchaToken: null,
            RECAPTCHA_KEY: "6Led_rQoAAAAAD6ZhPHJ0TW3Q3z7kqprTPu5KPCG",
            loading: false,
        };
    },
    mounted: function() { this.setPageDataFromQuery(); },

    watch: { $route(to, from) { this.setPageDataFromQuery(); } },

    components: {ContactUsSVGImage },

    methods: {
        showError(msg) { this.error_msg = msg; },

        hideError() { this.error_msg = ""; },

        onRecaptchaChange(token) { this.recaptchaToken = token; },

        renderRecaptcha() { window.grecaptcha.render(this.$el.querySelector('.g-recaptcha'), { sitekey: this.RECAPTCHA_KEY, callback: this.onRecaptchaChange}); },

        setPageDataFromQuery() {
            const subject = this.$route.query.subject;
            this.subject = subject ? `Inquiry on ${subject}` : this.subject;
            this.title_text =  subject ? `${this.title_text} on ${subject}` : this.content.title_text;

            window.onRecaptchaLoaded = () => { this.renderRecaptcha(); };
        },

        async sendMessage() {
            this.hideError();
            this.loading = true;
            this.full_name  = this.full_name.toUpperCase();
            this.email      = this.email.toUpperCase();
            this.subject    = this.subject.toUpperCase();
            this.message    = this.message.toUpperCase();

            if (this.$root.hp.isEmpty(this.full_name) || !this.$root.hp.validateName(this.full_name)) {  this.loading = false; this.showError(`Invalid input for full name`); return; }

            else if(this.$root.hp.isEmpty(this.email) || !this.$root.hp.validateEmail(this.email) ) { this.loading = false; this.showError(`Invalid input for email address`); return; }

            else if(this.$root.hp.isEmpty(this.subject) || !this.$root.hp.validateNamey(this.subject)) { this.loading = false; this.showError(`Invalid input for subject`); return; }

            else if (this.$root.hp.isEmpty(this.message) || !this.$root.hp.validateTextArea(this.message)) { this.loading = false; this.showError(`Invalid input for message`); return; }

            else if (this.$root.hp.isEmpty(this.recaptchaToken)) { this.loading = false; this.showError(`Invalid Recaptcha Token`); return; }

            else {
                const { full_name, email, subject, message, recaptchaToken } = this;
                const form_data                 = {  full_name, email, subject, message, recaptchaToken, };
                const res                       = await contactEmail(form_data);
                const { status, msg, data }     = res;
                const dmsg                      = status == 'success' ? 'We would be in touch with you shortly. Thank you and have a great day.': 'Sorry, something went wrong please try again later.'
                this.loading                    = false;

                this.$root.showAlert(status, dmsg, 2000, false, true);
                
            }
        }
    }
}
</script>
<template>
     <section id="ContactUsForm" class="w-full min-h-[85vh] z-[1] relative bg-transparent py-[10%] flex items-center justify-center">
        <div class="w-full h-full  grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 flex md:px-[10%] px-[10%] flex items-center justify-center">
            <div class="w-full h-full items-center justify-center flex flex-col p-4">
                <ContactUsSVGImage />
            </div>
            <div class="w-full h-full items-center justify-center flex flex-col p-4">
                <h3 class="md:text-[49px] text-[30px] text-white font-black w-full truncate md:text-start text-center">{{ content.title_text }}</h3>
                <p class="w-full break-word mt-4 md:text-left text-center text-white">{{  content.sub_text }}</p>
                <div class="w-full my-4 flex items-center justify-center flex-col">
                    <form class="w-full h-full bg-transparent rounded-lg flex items-center justify-center flex-col ">
                        <!-- full name -->
                        <div class="form-group relative w-full my-2">
                            <label for="full_name" class="block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </label>
                            <input type="text" id="full_name" v-model="full_name" class="w-full contact-form-input text-sm font-bold uppercase" placeholder="Full Name">
                        </div>
                        <!-- email -->
                        <div class="form-group relative my-2 w-full">
                            <label for="email" class="block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </label>
                            <input type="email" id="email" v-model="email" class="w-full contact-form-input text-sm font-bold uppercase" placeholder="E-mail">
                        </div>
                        <!-- subject -->
                        <div class="form-group relative w-full my-2">
                            <label for="subject" class="block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </label>
                            <input type="text" id="subject" v-model="subject" class="w-full contact-form-input text-sm font-bold uppercase" placeholder="Subject/Title">
                        </div>
                        <!-- message -->
                        <div class="form-group message w-full my-2">
                            <textarea id="message" v-model="message" class="form-control form-control-lg w-full uppercase" rows="7" placeholder="Mensage.."></textarea>
                        </div>
                        <!-- captach public -->
                        <div class="form-group message w-full my-2 items-center justify-center flex">
                            <div class="g-recaptcha" :data-sitekey="RECAPTCHA_KEY" @g-recaptcha-response="onRecaptchaChange"></div>
                        </div>

                        <div v-if="error_msg" class="text-center my-2 w-full flex items-center justify-center bg-red-500 text-black break-word rounded-xl p-2">
                           {{ error_msg }}
                        </div>

                        <div class="text-center my-2 w-full flex items-center justify-center">
                            <button v-if="!loading" @click="sendMessage" type="button" class="btn btn-primary flex items-center justify-center capitalize">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                                Send Message
                            </button>
                            <button v-else type="button" class="btn btn-primary flex items-center justify-center capitalize !px-24 !py-2">
                                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="#1A1A1A" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>