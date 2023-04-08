import React from "react";
import "./Container.scss";

const Container = ({ children }) => {
  return (
    <div className="container">
      {React.Children.map(children, (child) => (
        <div className="col">{child}</div>
      ))}
    </div>
  );
};

export default Container;
