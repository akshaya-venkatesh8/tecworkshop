import React from 'react';
import './TitleGroup.scss';

const TitleGroup = (props) => {
  return <div className="title-group-wrapper">
      <div className="group-title">{props.title}</div>
      <div className="group-subsection">
        <div className="subtitle">{props.subtitle}</div>
        <div className="description">{props.description}</div>
      </div>

  </div>;
};

export default React.memo(TitleGroup);
