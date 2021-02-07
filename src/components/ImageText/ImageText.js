import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Image } from "../../components";
import "./ImageText.scss";

const ImageText = ({ image, text, path }) => {
  return (
    <div className="image-text-wrapper">
      {image && (
        <div className="img-wrapper">
          <Image source={image} altText={text} />
        </div>
      )}
      <Link to={path}>{text}</Link>
    </div>
  );
};

ImageText.defaultProps = {
  text: "Shop Now",
  path: "/",
};

ImageText.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  path: PropTypes.string,
};

export default React.memo(ImageText);
