import React from "react";
import "./Button.scss";

const Button = ({ onClick, children, disabled }) => {
  return (
    <button disabled={disabled} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => console.log("pressed"),
  disabled: false,
};

export default Button;
