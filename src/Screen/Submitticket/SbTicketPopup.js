import React from 'react';
import { observer } from 'mobx-react-lite';
import submitTickStore from '../../Store/SubmitTicketStore';
import '../../Styles/SbTicketPopup.css';
import btnImg from '../../assets/logo-new (2).png';
import btn2Img from '../../assets/8794872685.png';
const SbTicketPopup = observer(() => {
  const selectSalient = () => {
    submitTickStore.setSbmitTicketPopUp(false);
    submitTickStore.setmultiPurposeTheme ();
    submitTickStore.setSalientResponsiveMultiStore(true);
    submitTickStore.setSelectedCategory('Salient - Responsive Multi-Purpose Theme');
  };

  const selectGeneral = () => {
    submitTickStore.setSbmitTicketPopUp(false);
    submitTickStore.setGeneral();
    submitTickStore.setSalientFormContent(true)
    
    submitTickStore.setSelectedCategory('General');
  };

  return (
    <div className={`ticket-popup${submitTickStore.SbmitTicketPopUp ? ' open' : ''}`}>
      <div className="submit-button-row">
        <button className="submit-ticket-button" onClick={selectSalient}>
          <img className="button-img" src={btnImg} alt="" />
          <div className="submit-ticket-button-text">Salient - Responsive Multi-Purpose Theme</div>
        </button>
        <p className="border-bottom"></p>
        <button className="general-submit-ticket-button" onClick={selectGeneral}>
          <img className="button-img" src={btn2Img} alt="" />
          <div className="submit-ticket-button-text">General</div>
        </button>
      </div>
      {/* {submitTickStore.selectedCategory === 'Salient - Responsive Multi-Purpose Theme' && (
        <SalientFormContent/>
      )} */}
    </div>
  );
});

export default SbTicketPopup;
