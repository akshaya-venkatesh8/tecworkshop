import React from "react";
import { SwiperSlide } from "swiper/react";
import { Banner, Footer, Header, Image, Slider } from "../..";
import { Images } from "../../../constants";
import { WORK_CATEGORIES } from "../../../data";
import "./Furniture.scss";

const Furniture = () => {
  const details = WORK_CATEGORIES["FURNITURE"] || [];

  const renderDescription = () => {
    let description = [];
    details.OFFER.forEach((item, index) => {
      description.push(<div key={index}>{item}</div>);
    });
    return description;
  };

  const _renderItems = () => {
    let items = [];

    details.ITEMS.forEach((item, index) => {
      items.push(
        <div className="product-wrapper" key={index}>
          <div className="product-title">{item.TITLE}</div>
          <Slider
            noOfSlides={3}
            spaceBetween={60}
            loop={true}
            draggable={false}
          >
            {_renderSlides(item)}
          </Slider>
        </div>
      );
    });

    return items;
  };

  const _renderSlides = (product) => {
    let slides = [];
    product.IMAGES.forEach((item, index) => {
      slides.push(
        <SwiperSlide className="slider-content" key={index}>
          <div className="slider-image-wrapper">
            <Image
              source={item.IMAGE}
              altText={item.NAME}
              fallbackImage={Images.COMING_SOON}
            />
          </div>
        </SwiperSlide>
      );
    });
    return slides;
  };

  return (
    <div className="furniture-page-wrapper">
      <Header theme="light" />
      <div className="banner-section">
        <Banner image={details.BANNER.IMAGE} altText="Furniture Banner Image">
          <div className="banner-content">
            <div className="title">{details.BANNER.TEXT[0]}</div>
            <div className="description">{details.BANNER.TEXT[1]}</div>
          </div>
        </Banner>
      </div>
      <div className="offer-section">
        <div className="title">What we make</div>
        <div className="description">{renderDescription()}</div>
      </div>
      <div className="items-wrapper">{_renderItems()}</div>
      <Footer />
    </div>
  );
};

export default React.memo(Furniture);
