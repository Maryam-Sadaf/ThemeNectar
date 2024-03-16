import { makeObservable, observable, action } from 'mobx';
class AppStore {
  selectedTicketInfo= " "
  updateTicket=false;
  loginPopupOpen = false;
  submitPopupOpen =false;
  herosection = true;
  PublicTicketStore= false ;
  
  formFields = {
    username: '',
    password: '',
    email: '',
    first_name:'',
    email_address:'',
    password_verify: '',
    rememberMe: false,
    related_url:'',
    subject:'',
    envato_purchase_code: '',

  };
  constructor() {
    makeObservable(this, {
      PublicTicketStore:observable,
      loginPopupOpen: observable,
      submitPopupOpen:observable,
      setHerosection :observable,
      selectedTicketInfo:observable,
      updateTicket:observable,
      setUpdateTicket:action,
      setSelectedTicketInfo:action,
      setPublicTicketStore:action,
      setSubmitPopupOpen:action,
      setLoginPopupOpen: action,
      formFields: observable,
      setFormField: action,
      clearFormFields: action,
    });
  }
  setUpdateTicket(open){
    this.updateTicket=open;
  }
  setSelectedTicketInfo(ticketInfo){
    this.selectedTicketInfo = ticketInfo;
  }
  setHerosection(){
    this.herosection = true;
    this.submitPopupOpen =false;
  } 
  setPublicTicketStore(){
this.PublicTicketStore= true;
  }
  togglePopup() {
    this.loginPopupOpen = !this.loginPopupOpen;
  }
  setLoginPopupOpen(open) {
    this.loginPopupOpen = open;
  }
  setSubmitPopupOpen(open){
    this.submitPopupOpen =open;
    this.herosection =false;
  }
  setFormField(field, value) {
    this.formFields[field] = value;
  }
  clearFormFields() {
    this.formFields = {
      username: '',
      password: '',
      email: '',
      rememberMe: false,
    };
  }
}
const appStore = new AppStore();
export default appStore;
