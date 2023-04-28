import React from "react";
import Button from "../Button/Button";
import "./Card.scss";

const Card = ({ children, task, deleteTask }) => {
  return (
    <>
      <div className="card">
        {children}
        <h3>
          <span>{task.name}</span>
          <span>{task.urgent ? "\tx" : "\to"}</span>
        </h3>
        <div>{task.details}</div>
        <div>{task.date}</div>
        <Button
          onClick={() => {
            console.log("delete clicked");
            deleteTask(task.id);
          }}
        >
          delete
        </Button>
      </div>
    </>
  );
};

export default Card;
