import React, { useEffect, useState } from "react";
import {
  Banner,
  Footer,
  Header,
  Image,
  ImageText,
  ProjectList,
} from "../..";
import { Images } from "../../../constants";
import { WORK_CATEGORIES } from "../../../data";
import "./Work.scss";

const Work = ({ match }) => {
  const category =
    (match && match.params && match.params.category) || "hospitality";
  const details =
    WORK_CATEGORIES[category.toUpperCase()] || WORK_CATEGORIES.HOSPITALITY;
  const count = (details.PROJECTS && details.PROJECTS.length) || 0;
  let size = count > 3 ? 3 : count;
  const [projectCount, setProjectCount] = useState(size);
  const projectData =
    (details.PROJECTS && details.PROJECTS.slice(0, projectCount)) || [];

  const renderDescription = () => {
    let description = [];
    details.OFFER.forEach((item, index) => {
      description.push(<div key={index}>{item}</div>);
    });
    return description;
  };

  useEffect(() => {
    setProjectCount(size);
  }, [category, size]);

  const renderEthics = () => {
    let ethics = [];
    details.ETHICS.forEach((item, index) => {
      ethics.push(
        <div className="ethics-item" key={index}>
          <div className="image-wrapper">
            <Image source={item.IMAGE} altText={item.TITLE} />
          </div>
          <div className="ethics-title">{item.TITLE}</div>
          <div className="description">{item.DESCRIPTION}</div>
        </div>
      );
    });
    return ethics;
  };

  const renderFeaturedProjects = () => {
    let featuredProjects = [];
    details.FEATURED_PROJECTS.forEach((item, index) => {
      featuredProjects.push(
        <div className="featured-projects-wrapper" key={index}>
          <div className="image-wrapper">
            <Image source={item.IMAGE} altText={item.title} />
          </div>
          <div className="details">
            <div className="title">{item.TITLE}</div>
            <div className="description">{item.DESCRIPTION}</div>
            <ImageText
              image={Images.TWI_ASSETS_THREE}
              text="Show More"
              path={item.LINK}
            />
          </div>
        </div>
      );
    });
    return featuredProjects;
  };

  const loadMoreProjects = () => {
    let difference = count - projectCount;
    size = difference >= 3 ? projectCount + 3 : projectCount + difference;

    setProjectCount(size);
  };

  return (
    <div className="work-page-wrapper">
      <Header theme="light" />
      <div className="banner-section">
        <Banner
          image={details.BANNER.IMAGE}
          altText={`${category.toUpperCase()} Banner Image`}
        >
          <div className="banner-content">
            <div className="title">{details.BANNER.TEXT[0]}</div>
            <div className="description">{details.BANNER.TEXT[1]}</div>
          </div>
        </Banner>
      </div>
      <div className="offer-section">
        <div className="title">What we offer</div>
        <div className="description">{renderDescription()}</div>
      </div>
      <div className="ethics-section">{renderEthics()}</div>
      <div className="featured-projects-section">
        <div className="title">Featured Projects</div>
        {renderFeaturedProjects()}
      </div>
      <div className="other-projects-section">
        <div className="title">Other Projects</div>
        <ProjectList data={projectData} />
        {projectCount < count ? (
          <div className="load-more-projects" onClick={loadMoreProjects}>
            Load More
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(Work);
