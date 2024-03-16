import { makeObservable, observable, action } from 'mobx';
class ForgotPasswordStore {
  registerPopupStore = false;
  forgotPopupOpen = false;

  formFields = {
    email: '',
  };
  constructor() {
    makeObservable(this, {
      forgotPopupOpen: observable,
      formFields: observable,
      registerPopupStore :observable,
      setFormField: action,
      clearFormFields: action,
      setforgotPopupOpen: action,
      setRegisterPopupStore: action,
      togglePopupForget: action,
    });
  }

  togglePopupForget() {
    this.forgotPopupOpen = !this.forgotPopupOpen;
  }

  setforgotPopupOpen(open) {
    this.forgotPopupOpen = open;
  }
  setRegisterPopupStore(open) {
    this.registerPopupStore = open;
  }
  setFormField(field, value) {
    this.formFields[field] = value;
  }
  clearFormFields() {
    this.formFields = {
      email: '',
    };
  }
}

const forgotPasswordStore = new ForgotPasswordStore();
export default forgotPasswordStore;
