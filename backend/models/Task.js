import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("task", TaskSchema);

export default Task;
