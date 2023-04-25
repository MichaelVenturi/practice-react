import React from "react";
import "./Container.scss";

const Container = ({ colSize, children, row }) => {
  return (
    <div className={`container${row ? "" : "-column"}`}>
      {React.Children.map(children, (child) => (
        <div className={`col-${colSize}`}>{child}</div>
      ))}
    </div>
  );
};

Container.defaultProps = {
  colSize: 1,
  row: false,
};

export default Container;
