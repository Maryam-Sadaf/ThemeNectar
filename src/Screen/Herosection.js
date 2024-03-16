import React from 'react';
import { FaUserPlus} from 'react-icons/fa';
import {AiOutlineCalendar } from "react-icons/ai";
import '../Styles/HeroSection.css'
import { observer } from 'mobx-react-lite';
import appStore from '../Store/AppStore';
import SubmitTicket from './Submitticket/SubmitTicket';
import {useNavigate } from 'react-router-dom';
const Herosection = observer(() => {
    const Navigate =useNavigate();
    const submitPopupOpen = () => {
        // appStore.setSubmitPopupOpen(true);
        Navigate("/submitTicket")
      };
    return (
        <>
            <section id='banner'>
                <div className='main'>
                    <div className='body'>
                        <div class="search-container">
                            <input type="text" id="searchInput" placeholder="Search artical and public tickets" />
                            <button id="searchButton">SEARCH</button>
                        </div>
                        <div class="button-container">
                            <button class="custom-button"  onClick={submitPopupOpen}>
                                <AiOutlineCalendar className='ticketBtn'/>
                                SUBMIT A TICKET</button>
                            <button class="custom-button">
                                <FaUserPlus className='arrowBtn'/>
                                LOGIN WITH ENVATO</button>
                        </div>
                    </div>
                </div>
            </section>
            {appStore.submitPopupOpen && <SubmitTicket />}
        </>
    )
});
export default Herosection