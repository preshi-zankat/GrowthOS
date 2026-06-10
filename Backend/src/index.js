import "dotenv/config";
import express from "express";
import cors from "cors";   
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  res.json({ status: "ok", message: "GrowthOS API is running" });
});

app.get("/api", (_req, res) => {
  res.json({ message: "Welcome to GrowthOS API" });
});

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

export default app; 