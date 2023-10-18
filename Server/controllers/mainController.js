const moment = require('moment');
const HelperFunctions = require('../helpers/utils');
const Email = require('../helpers/email');

class StoreController {
  constructor() {
    this.helpers = new HelperFunctions();
    this.email = new Email(this.helpers);
  }

  sendWebisteMessage = async (req, res) => {
    try {
      const { full_name, email, subject, message, recaptchaToken } = req.body;
      const isRecaptchaValid = await this.helpers.verifyRecaptcha(recaptchaToken);
      console.log({ isRecaptchaValid })

      if (this.helpers.isEmpty(full_name) || !this.helpers.isValidName(full_name)) { return res.errResponse('400', `Invalid input for full name`) }

      else if(this.helpers.isEmpty(email) || !this.helpers.isValidEmail(email) ) { return res.errResponse('400', `Invalid input for email address`)}

      else if(this.helpers.isEmpty(subject) || !this.helpers.isValidNamey(subject)) { return res.errResponse('400', `Invalid input for subject`) }

      else if (this.helpers.isEmpty(message) || !this.helpers.isValidLongText(message)) { return res.errResponse('400', `Invalid input for message`) }

      else if (this.helpers.isEmpty(recaptchaToken) || !isRecaptchaValid) { return res.errResponse('400', `Invalid Recaptcha Token`) }
      
      const name_array = full_name.split(' ');
      const to_user_obj = { email: "fiberxinnovations@gmail.com", fname: name_array[0], lname: name_array[1]}
      const to_custom_subject = `INQUIRY FROM FIBERX WEBSITE SUBJECT IS ${subject.toUpperCase()}`;
      const to_msg = `From: ${email} <br/> <br/> ${message}`
      await this.email.generalEmail(to_user_obj, to_custom_subject, to_msg );

      const from_user_obj = { email, fname: name_array[0], lname: name_array[1]}
      const from_custom_subject = `Thank You! Your Inquiry Has Been Received`;
      const from_msg = `Dear ${full_name} <br/>We hope this message finds you well. We want to express our sincere gratitude for reaching out to us with your inquiry. Your message has been successfully received, and we appreciate your interest in our products and services.
      <br/> <br/> Our dedicated team is already hard at work, reviewing the details of your inquiry. We aim to provide you with a comprehensive response that addresses your questions or concerns. You can expect to hear from us within the next 24-48 hours.
      <br/> <br/> Thank you for considering us for your digital needs. We look forward to the opportunity to serve you and provide the answers you seek.
      <br/> <br/> Best regards,
      <br/>The FiberX Innovations Team`
      await this.email.generalEmail(from_user_obj, from_custom_subject, from_msg );
     
      return res.successResponse(200, `inquiry received and delivered successfully`);

    } catch (error) {
      console.log(error)
      return res.errResponse(403, 'invalid_request');
    }
  };

}

module.exports = StoreController;

