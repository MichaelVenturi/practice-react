import Task from "../models/Task.js";

// get all
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, tasks: tasks });
  } catch (e) {
    console.error(e);
    res.status(400).json({ success: false, message: e.message });
  }
};

// get by id
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
    });
    if (!task) throw Error("task DNE");
    res.status(200).json({ success: true, task: task });
  } catch (e) {
    console.error(e);
    res.status(400).json({ success: false, message: e.message });
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
    res.status(200).json({ success: true, new_task: task });
  } catch (e) {
    console.error(e);
    res.status(400).json({ success: false, message: e.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
    });
    if (!task) throw Error("task DNE");
    const removed = await task.deleteOne();
    if (!removed) throw Error("failed to remove task");
    res.status(200).json({ success: true, task_deleted: removed });
  } catch (e) {
    console.error(e);
    res.status(400).json({ success: false, message: e.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
    });
    if (!task) throw Error("task DNE");
    task.name = req.body.name ?? task.name;
    task.details = req.body.details ?? task.details;
    const saved = await task.save();
    if (!saved) throw Error("failed to update task");
    res.status(200).json({ success: true, updated_task: saved });
  } catch (e) {
    console.error(e);
    res.status(400).json({ success: false, message: e.message });
  }
};
