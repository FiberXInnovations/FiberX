require('dotenv').config('../.env');
const axios = require('axios');

class HelperFunctions {
  constructor() {
    this.nameRegex = /^[A-Za-z.'\s/_-]*$/;
    this.nameyRegex = /^[A-Za-z0-9.'\s,/_-]*$/;
    this.textArearRegex = (/^(.|\s)*[a-zA-Z]+(.|\s)*$/);
    this.emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    this.telRegex = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    this.passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d){6,}.+$");
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    this.config = process.env;
  }

  isEmpty(input) {
    if (input == '' || input == null || input == undefined || !input) {
      return true;
    } else {
      return false;
    }
  }

  isValidName(name) {
    const bul = this.nameRegex.test(name);
    return bul;
  }

  isValidNamey(name) {
    const bul = this.nameyRegex.test(name);
    return bul;
  }

  isValidLongText(text) {
    const bul = ((this.textArearRegex).test(text));
    return bul
  }

  isValidEmail(email) {
    const bul = this.emailRegex.test(email);
    return bul;
  }

  isValidTel(tel) {
    const bul = this.telRegex.test(tel);
    return bul;
  }

  isValidPass(password) {
    const bul = this.passRegex.test(password);
    return bul;
  }

  isValidInteger(integer) {
    if (isNaN(integer) || parseInt(integer) <= 0) {
      return false;
    } else {
      return true;
    }
  }

  isValidFloat(float) {
    if (isNaN(float) || parseFloat(float) < 0) {
      return false;
    } else {
      return true;
    }
  }

  isValidURL(URL) {
    var res = URL.match(this.urlRegex);
    return (res !== null)
  }

  isProduction = () => process.env.MODE == 'production';

  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  capitalizeWords(arr) {
    return arr.map(element => {
      return (element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()).trim();
    });
  };

  delay = ms => new Promise(res => setTimeout(res, ms));

  async verifyRecaptcha(token) {
    try {
      console.log({token})
      const secretKey = this.config.RECAPTCHA_SECRET_KEY;
      const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
        params: { secret: secretKey, response: token,},
      });
      console.log(response.data )
      return response.data.success;
    } catch (error) {
      console.error('reCAPTCHA verification failed:', error);
      return false;
    }
  }


}

module.exports = HelperFunctions;
