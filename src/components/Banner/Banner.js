import React from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

const Banner = ({ image, altText, children }) => {
  return (
    <div className="banner-wrapper">
      {/* <Image source={image} altText={altText} /> */}
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      {children}
    </div>
  );
};

Banner.defaultProps = {
  image: "",
};

Banner.propTypes = {
  image: PropTypes.string,
};

export default React.memo(Banner);
