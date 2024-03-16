import React from 'react';
import { observer } from 'mobx-react';
import '../Styles/LoginPopup.css';
import { AiOutlineCloseCircle, AiOutlineCalendar, } from "react-icons/ai";
import { FaUserPlus } from 'react-icons/fa';
import appStore from '../Store/AppStore';
import {  useNavigate } from 'react-router-dom';
import forgotPasswordStore from '../Store/ForgotPasswordStore';

const LoginPopup = observer(() => {
    const navigate = useNavigate()
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        appStore.setFormField(name, value);
        console.log(appStore.formFields)
    };
    const closePopup = () => {
        appStore.togglePopup();
        appStore.setLoginPopupOpen(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!appStore.formFields.username || !appStore.formFields.password) {
            alert('Please fill in all the required fields.');
            return;
        }
        appStore.clearFormFields();
        appStore.setLoginPopupOpen(false);
        navigate('/');
    };
       const ForgotPasswordPopup = () => {
        forgotPasswordStore.setforgotPopupOpen(true); 
        appStore.setLoginPopupOpen(false); // Close the sign-in popup
        // Open the forgot password popup
        console.log(forgotPasswordStore.setLoginPopupOpen);
      };
      const registerPopup = () => {
        forgotPasswordStore.setRegisterPopupStore(true);
        appStore.setLoginPopupOpen(false);
      }
    return (
        <>
        <div className={`popup-overlay ${appStore.loginPopupOpen ? 'open' : ''}`}>
            <div className="popup-container">
                <div className="top-heading" >
                    <h3 className="bordered">
                        <span className='bor-heading'>SIGN IN </span>
                    </h3>
                    <span className="closeicon" onClick={closePopup}>
                        <AiOutlineCloseCircle />
                    </span>
                </div>
                <section className='envato-sec'>

                    <div className='envato-signin-block'>
                        <span><AiOutlineCalendar className='envato-icon' /></span>
                        <p className='envato-heading'>Login with Envato </p>
                    </div>

                    <p className="signin-or-block">
                        <span>OR</span>
                    </p>
                </section>

                <section className='form-field'>
                    <div class="register-button" onClick={registerPopup}>
                        <span class="icon"> <FaUserPlus /></span>
                        Register
                    </div>
                    <form id="regular-signin-form" className="ticksy-form">
                        <div className="error-message"></div>
                        <input type="text" name="username" placeholder="Email Address ..." className="field"
                            value={appStore.formFields.username}
                            onChange={handleInputChange} />
                        <input type="password" name="password" placeholder="Password ..." className="field"
                            value={appStore.formFields.password}
                            onChange={handleInputChange} />

                        <p><small><button className="forgot-password" onClick={ForgotPasswordPopup}>FORGOT YOUR PASSWORD?</button></small></p>
                        <button type='submit' id='regular-signin-button' className="button-submit" onClick={handleSubmit} >SIGN IN</button>

                    </form>
                </section>
            </div>
        </div>

        </>
    );
});

export default LoginPopup;
