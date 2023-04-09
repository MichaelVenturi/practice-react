import React from "react";
import "./Container.scss";

const Container = ({ colSize, children }) => {
  return (
    <div className="container">
      {React.Children.map(children, (child) => (
        <div className={`col-${colSize}`}>{child}</div>
      ))}
    </div>
  );
};

export default Container;
