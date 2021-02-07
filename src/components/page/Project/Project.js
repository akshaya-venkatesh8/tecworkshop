import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Banner, Footer, Header, Image, Slider } from "../..";
import { Strings } from "../../../constants";
import { PROJECTS } from "../../../data";
import "./Project.scss";

const Project = ({ history, match }) => {
  const [overlay, setOverlay] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  let projectId = match.params.projectId;
  let projects = PROJECTS.filter((project) => {
    return project.ID === projectId;
  });
  let project = {};
  if (projects.length > 0) {
    project = projects[0];
    console.log(project);
  } else {
    history.push(Strings.APPLICATION.ROUTES.ERROR);
  }

  const toggleOverlay = (index) => {
    console.log("clicked");
    setInitialSlide(index);
    setOverlay(!overlay);
  };

  const renderScrollerContent = () => {
    let contents = [];
    project.IMAGES.forEach((item, index) => {
      contents.push(
        <SwiperSlide
          className="image-container increase-size"
          style={{ height: "400px" }}
          onClick={() => toggleOverlay(index)}
          key={index}
        >
          <img
            draggable={false}
            style={{ width: "100%", height: "100%", cursor: "pointer" }}
            src={item.IMAGE}
            alt={item.ALT_TEXT}
          />
        </SwiperSlide>
      );
    });
    return contents;
  };

  const renderSlider = () => {
    let sliderList = [];
    project.IMAGES.map((item, index) => {
      sliderList.push(
        <SwiperSlide className="slider-content" key={index}>
          <div className="slider-image-wrapper">
            <Image source={item.IMAGE} altText={item.ALT_TEXT} />
          </div>
        </SwiperSlide>
      );
      return sliderList;
    });

    return sliderList;
  };

  return (
    <div className="project-wrapper">
      <Header theme="light" />
      <div className="title-section">
        <div className="project-title">{project.TITLE}</div>
        <div className="project-location">{project.LOCATION}</div>
      </div>
      <div className="banner-section">
        <Banner image={project.BANNER_IMAGE} />
      </div>
      <div className="project-scroll-section">
        <div className="project-description">{project.DESCRIPTION}</div>
        <div className="scroll-wrapper">
          <Slider slidesPerView={3} navigation={false} draggable={true}>
            {renderScrollerContent()}
          </Slider>
        </div>
      </div>
      <Footer />
      {overlay ? (
        <div className="project-overlay">
          <div className="close-overlay" onClick={toggleOverlay}>
            <div className="left-slash" />
            <div className="right-slash" />
          </div>
          <Slider
            initialSlide={initialSlide}
            spaceBetween={50}
            slidesPerView={1}
            draggable={true}
            loop={true}
          >
            {renderSlider()}
          </Slider>
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(Project);
