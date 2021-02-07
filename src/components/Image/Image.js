import React from "react";
import PropTypes from "prop-types";
import { Images } from "../../constants";
import "./Image.scss";

const Image = ({ source, altText, fallbackImage }) => {
  const addDefaultSrc = event => {
    event.target.src = fallbackImage || Images.COMING_SOON;
  };
  return (
    <img className="image" src={source} alt={altText} onError={addDefaultSrc} />
  );
}

Image.defaultProps = {
  source: "",
  altText: "",
  fallbackImage: ""
};

Image.propTypes = {
  source: PropTypes.string,
  altText: PropTypes.string,
  fallbackImage: PropTypes.string
};

export default React.memo(Image);
