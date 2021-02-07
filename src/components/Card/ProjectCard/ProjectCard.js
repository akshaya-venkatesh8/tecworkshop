import React from "react";
import { Image, ImageText } from "../../../components";
import { Images } from "../../../constants";
import "./ProjectCard.scss";

const ProjectCard = ({ data }) => {
  return (
    <div className="project-card-wrapper">
      <div className="card-details">
        <div className="image-wrapper">
          <Image source={data.IMAGE} altText={data.TITLE} />
        </div>
        <div className="project-card-title">
          {data.TITLE}
        </div>
        <div className="project-card-description">
          {data.DESCRIPTION}
        </div>
      </div>
      <ImageText
        image={Images.TWI_ASSETS_THREE}
        text="View Project"
        path={data.LINK}
      />
    </div>
  );
};

export default React.memo(ProjectCard);
