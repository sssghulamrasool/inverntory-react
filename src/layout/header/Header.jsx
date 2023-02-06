import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import contact from "../../assets/images/contact.png";
import ProfileDetail from "../../components/profileDetail/ProfileDetail";
import bell from "../../assets/images/bell.png";
import FaqSection from "../../components/faqSection/FaqSection";
import { Link } from "react-router-dom";
import Notifications from "../../components/notifications/Notifications";
import { contentCreate } from "../../context/ContextApi";
const Header = (mobNavTog) => {
  const [profileName, setProfileName] = useState("James Smith");
  const [shortName, setShortName] = useState("JS");
  const [profileToogle, setProfileToggle] = useState(false);
  const [faqToogle, setFaqToogle] = useState(false);
  const [notification, setNotification] = useState(false);
  const mobToggle = useContext(contentCreate);
  const value = mobToggle.state.mobileMenuToogle;

  const conxt = useContext(contentCreate);
  const _handleProfileToogle = () => {
    setProfileToggle(!profileToogle);
    setNotification(false);
    setFaqToogle(false);
  };
  const _handleProfileSec = () => {
    setProfileToggle(false);
  };
  const _handleFaQ = () => {
    setFaqToogle(!faqToogle);
    setNotification(false);
    setProfileToggle(false);
  };
  const _handleNotifications = () => {
    setNotification(!notification);
    setFaqToogle(false);
    setProfileToggle(false);
  };
  const _handleMobileSidebar = () => {
    // console.log("burger clicked", mobileNav)
    // mobToggle.dispatch({ type: "TOOGLE" })
    // console.log(mobToggle.state.mobileMenuToogle)
    conxt.dispatch({
      type: "TOOGLE",
    });
    setFaqToogle(false);
    setProfileToggle(false);
    setNotification(false);
  };

  return (
    <>
      <header className="header_wrapper">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* col-sm-4 col-4 */}
            <div className="col-lg-3 col-md-4  mobile_header_screen header--left">
              <div className="logo_section d-flex align-items-center">
                <Link to="#">
                  <img
                    src={logo}
                    alt="logo "
                    className="img-fluid logo_image"
                  />
                </Link>
                <h2>Inventory Simulator</h2>
              </div>
            </div>
            {/* col-sm-3 col-4 */}
            <div className="col-lg-6 col-md-4  md_screen_ header--center">
              <div className="input">
                <input className="form-control" placeholder="Search" />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            {/* col-sm-5  col-4 */}
            <div className="col-lg-3 col-md-4  mobile_header_screen2 header--right">
              <div className="profile_info_section">
                <div className="info_left">
                  <img
                    src={bell}
                    alt="bell"
                    className="img-fluid bells_icon"
                    onClick={_handleNotifications}
                  />
                  <img
                    src={contact}
                    alt="contact icon "
                    className="img-fluid faq_iconnn"
                    onClick={_handleFaQ}
                  />
                  {faqToogle && (
                    <div className="faq_main_wrap">
                      <FaqSection />
                    </div>
                  )}
                  {notification && (
                    <div className="notif_wrapper">
                      <Notifications />
                    </div>
                  )}
                </div>
                <div className="profile_icon d-flex align-items-center">
                  <div className="name" onClick={_handleProfileToogle}>
                    <p>{shortName}</p>
                  </div>
                  <div class="dropdown " onClick={_handleProfileToogle}>
                    <p>
                      {profileName}

                      <span>
                        <i className="fa-sharp fa-solid fa-angle-down"></i>
                      </span>
                    </p>
                  </div>
                  {profileToogle && (
                    <div className="card_profile" onClick={_handleProfileSec}>
                      <ProfileDetail
                        nickName={shortName}
                        fullname={profileName}
                        disp="DMOD"
                      />
                    </div>
                  )}
                </div>
                <div className="mobile_burger_icon">
                  <i
                    className="fa-solid fa-bars"
                    onClick={_handleMobileSidebar}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
