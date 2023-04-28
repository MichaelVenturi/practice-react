import React, { useState } from "react";

import Card from "../components/Card/Card";
import Container from "../components/Container/Container";
import AddTask from "../components/AddTask/AddTask";

import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/actions/taskActions";

const PageOne = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => {
    return state.tasks;
  });
  const [toggleAdd, setToggleAdd] = useState(false);

  const handleAddTask = (task) => {
    const newId =
      tasks.reduce((accumulator, t) => {
        if (accumulator > t.id) return accumulator;
        return t.id;
      }, 0) + 1;

    task.id = newId;
    dispatch(addTask(task));
  };
  const handleDeleteTask = (id) => {
    console.log("dispatching");
    dispatch(deleteTask(id));
  };
  return (
    <>
      <div className="heading">
        <h3>Task Management</h3>
        <span onClick={() => setToggleAdd(!toggleAdd)}>toggle</span>
      </div>
      <AddTask display={toggleAdd} addTask={handleAddTask} />
      <Container>
        {tasks.map((task, key) => {
          return (
            <Card key={key} task={task} deleteTask={handleDeleteTask}>
              test {key + 1}
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default PageOne;
