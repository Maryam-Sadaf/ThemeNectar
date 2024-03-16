import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineTag, AiOutlineDown } from 'react-icons/ai';
import '../Styles/headerPlugin.css';
import '../Styles/mobile.css'
import SubmitTicket from './Submitticket/SubmitTicket';
import ForgotPopUp from './ForgotPopUp';
import { Outlet } from 'react-router-dom';
import LoginPopup from './LoginPopup';
import appStore from '../Store/AppStore';
import Register from './Register';
import forgotPasswordStore from '../Store/ForgotPasswordStore'; // Moved this import up
import PublicTickets from './PublicTickets/PublicTickets';
// import { FaBars, FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { FaTag, FaArrowDown, FaArrowLeft } from "react-icons/fa";
import { observer } from 'mobx-react-lite';
const Header = observer(() => {
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();

  

  const openPopup = () => {
    appStore.setLoginPopupOpen(true);
  };

  const submitPopupOpen = () => {
    navigate("/submitTicket")
    //  appStore.setSubmitPopupOpen(true);


  };
  const PublicTicketsOpen = () => {
    navigate("/publicTicket")
    // appStore.setHerosection(false);
    // appStore.setPublicTicketStore(true);
    // appStore.setSubmitPopupOpen(false);

    console.log(appStore.PublicTicketStore)
  }

  return (
    <>
      {/* Desktop Header */}
      <div className="header-container">
        {/* Desktop Header */}
        <header className="main-header-desktop">
          <div className="logo">
            <NavLink to="https://themenectar.ticksy.com/" className="logo-link">
              ThemeNectar
            </NavLink>
          </div>
          <nav className="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <span className="current-page" to="" onClick={submitPopupOpen}>
                  <span className="nav-icon">
                  <FaTag className='nav-icon'/>
                  </span>
                  Submit a Ticket
                </span>
              </li>
              <li className="menu-item">
                <NavLink className="current-page-ticket" to="">
                  <i class="ti ti-ticket-solid"></i>
                  Tickets
                  <AiOutlineDown className="after-icon" />
                </NavLink>
                <ul className="submenu">
                  <li className="submenu-item">
                    <span className="submenu-page" onClick={PublicTicketsOpen}>
                      {/* <AiOutlineTag className="submenu-icon" /> */}
                      <FaTag className='submenu-icon'/>
                      Public Tickets
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <button className="login-button signin" onClick={openPopup}>
              Sign In
            </button>
            <div className="header-search">
              <form id="animated-icon">
                <FaSearch className="search-icon" />
                <input type="text" name="search" placeholder="Search.." />
              </form>
            </div>
          </nav>
        </header>

 <div className="responsive-header">
        <FiMenu className='toggleicon'
          onClick={() => {
            setMenu(!menu);
          }}
        />
        <h1 className='logo-shall'>ThemeNectar</h1>
        <button className={`btn ${menu ? "hide" : "show"}`}>SIGN IN</button>
      </div>

      {/* Menu Items */}
      <div className="responsive-menu-container">
        <div className={`responsive-menu ${menu ? "show" : "hide"}`}>
          <input type="text" placeholder="Type here...." className='mobile-animated-icon'/>
          <h1 className='mobile-navigation'>NAVIGATION</h1>
          <div className="menu-items"  onClick={submitPopupOpen}>
            <FaTag color="white" />
            <span>Submit A Ticket</span>
          </div>
          <div className="menu-items">
            <FaArrowDown color="white" />
            <span>Public Tickets</span>
          </div>
          <h1 className='mobile-navigation'>Account</h1>
          <div className="menu-items">
            <BsPerson color="white" />
            <span>Sign In</span>
          </div>
        </div>
      </div>
      <div>
        <FaArrowLeft
          className={`close-menu ${menu ? "show" : "hide"}`}
          onClick={() => {
            setMenu(false);
          }}
        />
      </div>
        <Outlet />


      </div>
      {/* Render other components */}
      {appStore.submitPopupOpen && <SubmitTicket />}
      {appStore.loginPopupOpen && <LoginPopup />}
      {forgotPasswordStore.forgotPopupOpen && <ForgotPopUp />}
      {forgotPasswordStore.registerPopupStore && <Register />}
      {appStore.PublicTicketStore && <PublicTickets />}
    </>
  );
});

export default Header;
