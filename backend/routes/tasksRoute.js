import express from "express";
// prettier-ignore
import {
  getAllTasks, getTaskById, createTask, deleteTask, updateTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);

router.post("/", createTask);

router.delete("/:id", deleteTask);

router.patch("/:id", updateTask);

export default router;
