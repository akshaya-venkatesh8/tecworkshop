import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ buttonText, handleClick, theme }) => {
  return (
    <button
      className={`custom-button ${theme}`}
      onClick={(event) => handleClick(event)}
    >
      {buttonText}
    </button>
  );
};

Button.defaultProps = {
  buttonText: "Submit",
  theme: "light",
};

Button.propTypes = {
  buttonText: PropTypes.string,
  theme: PropTypes.string,
};

export default React.memo(Button);
