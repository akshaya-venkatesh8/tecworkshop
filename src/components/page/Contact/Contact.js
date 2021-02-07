import React, { useState } from "react";
import EmailJs from "emailjs-com";
import apiKeys from "../../../email-api";
import { Footer, Header } from "../..";
import { Strings } from "../../../constants";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let contactDetails = Strings.APPLICATION.CONTACT_US_PAGE;

  const _renderContactInfo = () => {
    let contactList = [];
    contactDetails.CONTACT_DETAILS.forEach((item, index) => {
      contactList.push(
        <div className="location-tile" key={index}>
          <div className="title">{item.TITLE}</div>
          <div className="address">{item.TEXT}</div>
        </div>
      );
    });
    return contactList;
  };

  const _renderLocations = () => {
    let locations = [];
    contactDetails.OFFICE_LOCATIONS.forEach((item, index) => {
      locations.push(
        <div className="location-tile" key={index}>
          <div className="title">{item.TITLE}</div>
          <div className="address">{item.ADDRESS}</div>
        </div>
      );
    });

    return locations;
  };

  const _sendEmail = (event) => {
    event.preventDefault();
    EmailJs.sendForm(
      apiKeys.SERVICE_ID,
      apiKeys.TEMPLATE_ID,
      event.target,
      apiKeys.USER_ID
    ).then(
      (result) => {
        alert("Message Sent. We'll get back to you shortly!");
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        alert("An error occured. Plese try again");
      }
    );
  };

  return (
    <div className="contact-us-wrapper">
      <Header />
      <div className="details-section">
        <div className="main-heading">
          <span>{contactDetails.TITLE}</span>
        </div>
        <div className="location-wrapper">
          <div className="contact-info-section">{_renderContactInfo()}</div>
          <div className="location-section">{_renderLocations()}</div>
        </div>
        <div className="form-section">
          <div className="form-title">Work with us today</div>
          <form onSubmit={_sendEmail}>
            <input
              className="form-field"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              required
            />
            <input
              className="form-field"
              name="email"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              title="Please enter a valid email!"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>
            <div className="button-wrapper">
              <input className="form-button" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <Footer contactUsSection={false} />
    </div>
  );
};

export default React.memo(Contact);
