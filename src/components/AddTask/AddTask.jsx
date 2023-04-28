import React from "react";
import Button from "../Button/Button";
import "./AddTask.scss";

const AddTask = ({ display, addTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target;
    const task = {
      name: formData.name.value,
      date: formData.date.value,
      details: formData.details.value,
      urgent: formData.urgent.checked,
    };
    console.log(task);
    addTask(task);
  };
  return (
    <form
      className={`form${display ? "" : "-hide"}`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="form-control">
        <label htmlFor="name">Task</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Add Task"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="date">Day</label>
        <input
          type="text"
          name="date"
          id="date"
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
      <div className="form-control">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default AddTask;
