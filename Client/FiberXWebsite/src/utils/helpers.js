import Cryptography from "./encoder_decoder.js";

class HelperFunctions {
  constructor() {
    this.nameRegex = /^[A-Za-z.'\s/_-]*$/;
    this.nameyRegex = /^[A-Za-z0-9.'\s,/_-]*$/;
    this.textArearRegex = (/^(.|\s)*[a-zA-Z]+(.|\s)*$/);
    this.emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    this.telRegex = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    this.passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d){6,}.+$");
    this.config = import.meta.env;
    this.cryptographor = new Cryptography();
  }

  isEmpty(input) {
    if (input == '' || input == null) {
      return true;
    } else {
      return false;
    }
  }

  validateName(name) {
    const bul = this.nameRegex.test(name);
    return bul;
  }

  validateNamey(name) {
    const bul = this.nameyRegex.test(name);
    return bul;
  }

  validateTextArea(text) {
    const bul = ((this.textArearRegex).test(text));
    return bul
  }

  validateEmail(email) {
    const bul = this.emailRegex.test(email);
    return bul;
  }

  validateTel(tel) {
    const bul = this.telRegex.test(tel);
    return bul;
  }
}

export default HelperFunctions