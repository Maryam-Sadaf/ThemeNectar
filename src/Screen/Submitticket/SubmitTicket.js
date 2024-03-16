import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import '../../Styles/SubmitTicket.css';
import submitTickStore from '../../Store/SubmitTicketStore';
import SbTicketPopup from './SbTicketPopup';
import { observer } from 'mobx-react-lite';
import SalientFormContent from './General';
import SalientResponsiveMulti from '../Salient - Responsive Multi/SalientResponsiveMulti';

const SubmitTicket = observer(() => {
  const toggleDropdown = () => {
    submitTickStore.setSbmitTicketPopUp(!submitTickStore.SbmitTicketPopUp);
  };

  return (
    <section className="submit-ticket-section">
      <div className="overlay">
        <div className="popup">
          <h3 className="submitTicket-heading">Submit a Ticket</h3>
          <div className="data">
            <h4 className="submitTicket-heading2">Product or Category</h4>
            <p className="submitTicket-heading3">With which product or category do you need help?</p>
            <div className="input-with-icon" onClick={toggleDropdown}>
              <span className="input-submitTicket">
                {submitTickStore.selectedCategory || 'Choose one ...'}
               
              </span>
              <span className="input-icon">
                <AiOutlineDown />
              </span>    
            </div>
           
          </div>
            {submitTickStore.SalientFormContent && <SalientFormContent/>}
            {submitTickStore.SalientResponsiveMultiStore && <SalientResponsiveMulti/>}
        </div>
        {submitTickStore.SbmitTicketPopUp && <SbTicketPopup />}
        
      </div>
      
    </section>
  );
});

export default SubmitTicket;