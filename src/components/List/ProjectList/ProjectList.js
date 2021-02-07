import React from "react";

import PropTypes from "prop-types";
import { ProjectCard } from "../../../components";
import "./ProjectList.scss";

const ProjectList = ({ data, type }) => {
  const _renderprojectTiles = () => {
    let projectList = [];
    if (data.length === 0) {
      projectList.push(
        <div className="no-projects-wrapper" key={0}>
          No Projects Found!
        </div>
      );
    } else {
      data.forEach((item, index) => {
        projectList.push(
          <div className="cards" key={index}>
            <ProjectCard data={item} />
          </div>
        );
      });
    }
    return projectList;
  };

  return (
    <div className={`project-list-wrapper ${type}`}>
      {_renderprojectTiles()}
    </div>
  );
};

ProjectList.defaultProps = {
  data: [],
  type: "three"
};

ProjectList.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string
};

export default React.memo(ProjectList);
