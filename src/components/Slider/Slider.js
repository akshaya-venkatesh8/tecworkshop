import React from "react";
import PropTypes from "prop-types";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./Slider.scss";

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar]);

const Slider = ({
  autoplay,
  children,
  spaceBetween,
  centeredSlides,
  initialSlide,
  slidesPerView,
  draggable,
  navigation,
  pagination,
  loop,
}) => {
  return (
    <div className="slider-wrapper">
      <Swiper
        initialSlide={initialSlide}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={navigation}
        centeredSlides={centeredSlides}
        pagination={{ clickable: pagination }}
        loop={loop}
        scrollbar={{ draggable: draggable }}
        autoplay={autoplay}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          501: {},
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

Slider.defaultProps = {
  autoplay: false,
  initialSlide: 0,
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: false,
  draggable: false,
  navigation: true,
  pagination: false,
  loop: false,
};

Slider.propTypes = {
  autoplay: PropTypes.bool,
  draggable: PropTypes.bool,
  initialSlide: PropTypes.number,
  spaceBetween: PropTypes.number,
  centeredSlides: PropTypes.bool,
  navigation: PropTypes.bool,
  pagination: PropTypes.bool,
  loop: PropTypes.bool,
};

export default React.memo(Slider);
