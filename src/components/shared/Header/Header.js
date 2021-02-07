import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image, Navbar } from "../../../components";
import { Strings } from "../../../constants";
import mobileLogo from "../../../assets/svg/TWI logo_white.svg";
import blueLogo from "../../../assets/svg/Wordmark_blue-02.svg";
import whiteLogo from "../../../assets/svg/Wordmark_white-02.svg";

import "./Header.scss";

const Header = ({ theme }) => {
  const mobileMenu = useRef(null);
  const logo = theme === "dark" ? whiteLogo : blueLogo;

  const toggleMenu = () => {
    if (mobileMenu.current.classList.contains("active")) {
      console.log(document.body);
      document.body.classList.remove("overlay-active");
      mobileMenu.current.classList.remove("active");
    } else {
      document.body.classList.add("overlay-active");
      mobileMenu.current.classList.add("active");
    }
  };

  return (
    <div className={`header-wrapper ${theme}`}>
      <div className="logo">
        <Link to={Strings.APPLICATION.ROUTES.HOME} className="logo-link">
          <Image source={logo} altText="Tec Workshop Logo" />
        </Link>
      </div>
      <Navbar data={Strings.APPLICATION.SHARED.NAVBAR} />
      <div ref={mobileMenu} className="mobile-menu">
        <div id="close-icon" onClick={() => toggleMenu()}>
          <span className={`${theme}`}></span>
          <span className={`${theme}`}></span>
          <span className={`${theme}`}></span>
        </div>
        <div className="menu-content">
          <div className="logo-wrapper">
            <Image source={mobileLogo} altText="tecworkshop-logo" />
          </div>
          <Navbar data={Strings.APPLICATION.SHARED.FOOTER} />
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  theme: "dark",
};

Header.propTypes = {
  theme: PropTypes.string,
};

export default React.memo(Header);
