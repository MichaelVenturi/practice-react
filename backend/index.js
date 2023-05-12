import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./db.js";

config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "ayo" });
});

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
