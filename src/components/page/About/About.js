import React from "react";
import { Footer, Header, Image, TitleGroup } from "../..";
import { Images, Strings } from "../../../constants";
import "./About.scss";

const About = () => {
  const _renderEthos = () => {
    let ethics = [];
    Strings.APPLICATION.ABOUT_US_PAGE.ETHICS.forEach((item, index) => {
      ethics.push(
        <div className="ethics-item" key={index}>
          <div className="image-wrapper">
            {/* <Image source={item.IMAGE} altText={item.TITLE} /> */}
            <div
              className="image"
              style={{
                backgroundImage: `url(${item.IMAGE})`,
              }}
            ></div>
          </div>
          <div className="ethics-title">{item.TITLE}</div>
          <div className="description">{item.DESCRIPTION}</div>
        </div>
      );
    });
    return ethics;
  };

  const _renderClientLogos = () => {
    let logo = [];
    Strings.APPLICATION.ABOUT_US_PAGE.OUR_CLIENTS.CLIENT_LOGOS.forEach(
      (item, index) => {
        logo.push(
          <div className="logo-wrapper" key={index}>
            <Image source={item} />
          </div>
        );
      }
    );
    return logo;
  };

  return (
    <div className="about-wrapper">
      <Header theme="light" />
      <section className="about intro">
        <div className="left-section">
          <div className="image-wrapper">
            {/* <Image source={Images.COMING_SOON} altText="Anil Tiwari" /> */}
            <div
              className="image"
              style={{
                backgroundImage: `url(${Images.COMING_SOON})`,
              }}
            ></div>
          </div>
          <div className="image-title">Anil Tiwari, Managing Director</div>
        </div>
        <div className="right-section">
          <div className="title">FOREWORD</div>
          <div className="subtitle">Our quality is never on accident.</div>
          <p className="description">
            We, Tec Workshop, are an interior contracting business venture from
            Chennai engaged in offering an extensive spectrum of handling civil
            contracts, turn key projects, interior decoration and other
            development works.
          </p>
          <p className="description">
            Our decade old expertise and service in the industry is highly
            demanded among prestigious clients for our incomparable quality
            standards.
          </p>
          <p className="description">
            Our strength lies in providing a unique solution to all our projects
            that resonates with our client's heritage, culture and environment.
          </p>
          <p className="description">
            Our portfolio includes a number of prestigious Indian and Foreign
            brands like ITC Hotels, The Oberoi Group, Taj Group of Hotels, GRT
            Hotels, Chalet Hotels, M FAR Group, LBR Group, Triguna Group, and
            TCI Group.
          </p>
        </div>
      </section>
      <section className="ethos-section">
        <div className="title">OUR ETHOS</div>
        <div className="image-text-wrapper">{_renderEthos()}</div>
      </section>
      <section className="our-plant-section">
        <div className="left-section">
          <div className="title">OUR PLANT</div>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <ul>
            <li>Loreum Ipsum</li>
            <li>Loreum Ipsum</li>
            <li>Loreum Ipsum</li>
            <li>Loreum Ipsum</li>
            <li>Loreum Ipsum</li>
            <li>Loreum Ipsum</li>
            <li>Loreum Ipsum</li>
          </ul>
        </div>
        <div className="right-section">
          <div className="image-wrapper">
            {/* <Image source={Images.COMING_SOON} altText="Our Plant" /> */}
            <div
              className="image"
              style={{
                backgroundImage: `url(${Images.COMING_SOON})`,
              }}
            ></div>
          </div>
        </div>
      </section>
      <TitleGroup
        title={Strings.APPLICATION.ABOUT_US_PAGE.OUR_CLIENTS.TITLE}
        subtitle={Strings.APPLICATION.ABOUT_US_PAGE.OUR_CLIENTS.SUB_TITLE}
        description={Strings.APPLICATION.ABOUT_US_PAGE.OUR_CLIENTS.DESCRIPTION}
      />
      <div className="client-logo-section">{_renderClientLogos()}</div>
      <Footer />
    </div>
  );
};

export default React.memo(About);
