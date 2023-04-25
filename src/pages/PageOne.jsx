import React, { useState } from "react";

import Card from "../components/Card/Card";
import Container from "../components/Container/Container";
import AddTask from "../components/AddTask/AddTask";

const test = [
  {
    id: 0,
    name: "taskname",
    date: "date",
    details: "taskdetails",
    urgent: false,
  },
  {
    id: 1,
    name: "taskname2",
    date: "date2",
    details: "taskdetails2",
    urgent: false,
  },
];
const PageOne = () => {
  const [tasks, setTasks] = useState(test);
  const [toggleAdd, setToggleAdd] = useState(false);

  const addTask = (task) => {
    if (!task.id) {
      const newId =
        tasks.reduce((accumulator, t) => {
          if (accumulator > t.id) return accumulator;
          return t.id;
        }, 0) + 1;
    }
    task.id = newId;
    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      <div className="heading">
        <h3>Task Management</h3>
        <span onClick={() => setToggleAdd(!toggleAdd)}>toggle</span>
      </div>
      <AddTask display={toggleAdd} />
      <Container>
        {test.map((task, key) => {
          return (
            <Card key={key} task={task}>
              test {key + 1}
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default PageOne;
