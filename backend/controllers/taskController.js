import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    console.log(tasks);
    res.status(200).json(tasks);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
};

export const createTask = async (req, res) => {
  const newTask = new Task({
    name: req.body.name,
    date: req.body.date,
    details: req.body.details,
  });
  try {
    const task = await newTask.save();
    res.status(200).json(task);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
};
