import React from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { Strings } from "../../../constants";
import Logo from "../../../assets/svg/TWI logo_white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Image } from "../../../components";
import "./Footer.scss";

const Footer = ({ contactUsSection }) => {
  const history = useHistory();
  const renderSocialLinks = () => {
    let socialList = Strings.APPLICATION.SOCIAL;
    let socialLinks = [];
    for (let socialItem in socialList) {
      if (socialList[socialItem].LINK.length > 0) {
        socialLinks.push(
          <a
            key={socialItem}
            className="social-icon"
            href={socialList[socialItem].LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            {<FontAwesomeIcon icon={socialList[socialItem].ICON} />}
          </a>
        );
      }
    }
    return socialLinks;
  };
  const renderSiteMap = () => {
    let navList = [];
    let data = Strings.APPLICATION.SHARED.FOOTER;
    data.forEach((item, index) => {
      navList.push(
        <div className="line" key={index}>
          <Link to={item.LINK}>{item.NAME}</Link>
        </div>
      );
    });
    return navList;
  };
  return (
    <div className="footer-wrapper">
      {contactUsSection ? (
        <section className="footer-top">
          <div className="title-subsection">
            <div className="subtitles">
              <div className="heading">Work With Us Today.</div>
              <div className="heading">
                Let Us{" "}
                <i>
                  <b>Redefine</b>
                </i>{" "}
                Your Space
              </div>
            </div>
            <div className="contact-us">
              <Button
                buttonText="Contact Us"
                handleClick={() =>
                  history.push(Strings.APPLICATION.ROUTES.CONTACT)
                }
              />
            </div>
          </div>
        </section>
      ) : null}
      <section className="footer-bottom">
        <div className="footer-item-wrapper logo">
          <div className="logo-container">
            <Image source={Logo} />
          </div>
        </div>
        <div className="footer-item-wrapper">
          <div className="footer-item-title">SITEMAP</div>
          <div className="sitemap-list">{renderSiteMap()}</div>
          <div className="follow-us">FOLLOW US</div>
          <div className="social-links">{renderSocialLinks()}</div>
        </div>
        <div className="footer-item-wrapper">
          <div className="footer-item-title">CONTACT</div>
          <div className="address">
            <div className="line">Tec Workshop Interiors India Pvt Ltd,</div>
            <div className="line">224/1 Kamarajan Street,</div>
            <div className="line">Mettukupam Thoraipakkam</div>
            <div className="line">Chennai (TN), India-600097</div>
          </div>
          <div className="phone">
            <div className="line">T: 044 24329251 / 52</div>
            <div className="line">F: 044 24329251</div>
            <div className="line bold-text">M: twich@twiindia.com</div>
          </div>
        </div>
        <div className="footer-item-wrapper social-links-mobile">{renderSocialLinks()}</div>
      </section>
      <section className="copyright-section">
        <div className="copyright">
          Copyright 2020 Tec Workshop Interiors India Pvt Ltd
        </div>
        <div className="designed-by">
          Designed by <b>TIKI TAVI</b>
        </div>
      </section>
    </div>
  );
};

Footer.defaultProps = {
  contactUsSection: true,
};

Footer.propTypes = {
  contactUsSection: PropTypes.bool,
};

export default React.memo(Footer);
