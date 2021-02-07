import React from "react";
import { useHistory } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import {
  Banner,
  Footer,
  Header,
  Image,
  ImageText,
  Slider,
  TitleGroup,
} from "../..";
import { Images, Strings } from "../../../constants";
import "./Home.scss";

const Home = () => {
  const history = useHistory();
  let scrollerCount = 3,
    sliderCount = "auto";

  const renderCarousel = () => {
    let carouselList = [];
    Strings.APPLICATION.HOME.CAROUSEL.map((item, index) => {
      carouselList.push(
        <SwiperSlide key={index}>
          <div
            className="image"
            style={{
              backgroundImage: `url(${item.IMAGE})`,
            }}
          >
            <div className="carousel-text">
              <div className="primary-text">{item.DISPLAY_TEXT[0]}</div>
              <div className="secondary-text">{item.DISPLAY_TEXT[1]}</div>
            </div>
          </div>
        </SwiperSlide>
      );
      return carouselList;
    });

    return carouselList;
  };

  const renderClients = () => {
    let clients = [];
    Strings.APPLICATION.HOME.BANNER.CLIENT_LOGOS.forEach((item, index) => {
      clients.push(
        <div className="client-logo-wrapper" key={index}>
          <Image source={item} altText={`client` + index} />
        </div>
      );
    });
    return clients;
  };

  const renderScrollerContents = () => {
    let contents = [];
    Strings.APPLICATION.HOME.WORK.forEach((item) => {
      contents.push(
        <SwiperSlide
          className="image-container increase-size"
          style={{ height: "400px" }}
          key={item.NAME}
          onClick={() => history.push(item.PATH)}
        >
          <img
            draggable={false}
            style={{ width: "100%", height: "100%", cursor: "pointer" }}
            src={item.IMAGE}
            alt={item.NAME}
          />
          <div className="overlay">
            <div className="overlay-text">
              <div>{item.NAME}</div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
    return contents;
  };

  const renderSlider = () => {
    let sliderList = [];
    Strings.APPLICATION.HOME.FEATURED_PROJECTS.map((item, index) => {
      sliderList.push(
        <SwiperSlide className="slider-content" key={index}>
          <div className="slider-image-wrapper">
            <div
              className="custom-slider-image"
              style={{
                backgroundImage: `url("${item.IMAGE}")`,
              }}
            />
          </div>
          <div className="featured-project-details">
            <div className="project-title">{item.NAME}</div>
            <ImageText
              image={Images.TWI_ASSETS_SIX}
              text="View"
              path={item.PATH}
            />
          </div>
        </SwiperSlide>
      );
      return sliderList;
    });

    return sliderList;
  };

  return (
    <div className="home-wrapper">
      <Header />
      <div className="main-carousel">
        <Slider
          slidesPerView={1}
          navigation={false}
          draggable={false}
          pagination={true}
          loop={true}
          autoplay={true}
        >
          {renderCarousel()}
        </Slider>
      </div>
      <section className="about home-section" id="about">
        <div className="left-section">
          <div className="title">ABOUT US</div>
          <div className="subtitle">Our quality is never on accident.</div>
          <p className="description">
            It is always the result of high intention, sincere effort,
            intelligent direction and skillful execution; it represents the wise
            choice of many alternatives.
          </p>
          <p className="description">
            Our clients understand this and quality is always delivered to their
            complete satisfaction.
          </p>
          <ImageText
            image={Images.TWI_ASSETS_THREE}
            text="Know More About Us"
            path={Strings.APPLICATION.ROUTES.ABOUT}
          />
        </div>
        <div className="image-wrapper">
          {/* <Image source={Images.ABOUT_US} altText="About us" /> */}
          <div
            className="image"
            style={{
              backgroundImage: `url(${Images.ABOUT_US})`,
            }}
          ></div>
        </div>
      </section>
      <TitleGroup
        title={Strings.APPLICATION.TEXT.SECTION1.TITLE}
        subtitle={Strings.APPLICATION.TEXT.SECTION1.SUB_TITLE}
        description={Strings.APPLICATION.TEXT.SECTION1.DESCRIPTION}
      />
      <div className="view-work">
        <div className="action-link">
          <ImageText
            image={Images.TWI_ASSETS_TWO}
            text="View Our Work"
            path="/work/hospitality"
          />
        </div>
        <div className="scroll-carousel-wrapper">
          <Slider
            slidesPerView={scrollerCount}
            navigation={false}
            draggable={true}
          >
            {renderScrollerContents()}
          </Slider>
        </div>
      </div>
      <div className="banner-section">
        <Banner image={Images.BANNER_IMAGE} altText="Banner Image">
          <div className="banner-content">
            <div className="title">Some of Our Valued Clients</div>
            <div className="client-logos">{renderClients()}</div>
          </div>
        </Banner>
      </div>
      <TitleGroup
        title={Strings.APPLICATION.TEXT.SECTION2.TITLE}
        subtitle={Strings.APPLICATION.TEXT.SECTION2.SUB_TITLE}
        description={Strings.APPLICATION.TEXT.SECTION2.DESCRIPTION}
      />
      <div className="slider-section">
        <Slider slidesPerView={sliderCount} centeredSlides={true} loop={true}>
          {renderSlider()}
        </Slider>
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(Home);
