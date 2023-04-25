import React from "react";
import Button from "../Button/Button";
import "./AddTask.scss";

const AddTask = ({ display }) => {
  return (
    <form className={`form${display ? "" : "-hide"}`}>
      <div className="form-control">
        <label htmlFor="title">Task</label>
        <input type="text" name="title" id="title" placeholder="Add Task" />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day</label>
        <input
          type="text"
          name="day"
          id="day"
          placeholder="Add Day &amp; Time"
        />
      </div>
      <div className="form-control">
        <label htmlFor="details">Details</label>
        <input
          type="text"
          name="details"
          id="details"
          placeholder="Add task details"
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="urgent">Set Urgent</label>
        <input type="checkbox" name="urgent" id="urgent" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddTask;
