import { makeObservable, observable, action } from 'mobx';

class SubmitTickStore {
  SbmitTicketPopUp = false;
  MultiPurposeTheme = false;
  General = false;
  SalientFormContent= false;
  SalientResponsiveMultiStore =false;
  selectedCategory = ''; // New observable for selected category

  constructor() {
    makeObservable(this, {
      MultiPurposeTheme: observable,
      General: observable,
      SbmitTicketPopUp: observable,
      selectedCategory: observable, // Add the new observable
      SalientFormContent:observable,
      SalientResponsiveMultiStore:observable,
      setSalientResponsiveMultiStore:action,
      setSalientFormContent:action,
      setSbmitTicketPopUp: action,
      setmultiPurposeTheme: action,
      setGeneral: action,
      setSelectedCategory: action, // New action for setting selected category
    });
  }
  setSalientFormContent(open){
    this.SalientFormContent = open;
    this.SbmitTicketPopUp = false;
    this.SalientResponsiveMultiStore = false;

  }
  setSalientResponsiveMultiStore(open){
    this.SalientResponsiveMultiStore =open;
    this.SbmitTicketPopUp = false;
    this.SalientFormContent=false;

  }

  setSbmitTicketPopUp(open) {
    this.SbmitTicketPopUp = open;
  }

  setmultiPurposeTheme() {
    this.MultiPurposeTheme = true;
    this.General = false;
  }

  setGeneral() {
    this.General = true;
    this.MultiPurposeTheme = false;
  }

  setSelectedCategory(category) {
    this.selectedCategory = category;
  }
}

const submitTickStore = new SubmitTickStore();
export default submitTickStore;
