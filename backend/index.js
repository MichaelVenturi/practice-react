import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./db.js";

import taskRoutes from "./routes/tasksRoute.js";

config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
