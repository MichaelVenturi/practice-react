import React from "react";
import "./Button.scss";

const Button = ({ onClick, children, disabled, type }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => console.log("pressed"),
  disabled: false,
  type: "button",
};

export default Button;
