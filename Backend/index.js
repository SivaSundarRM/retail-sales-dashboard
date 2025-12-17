import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import salesRoutes from "./routes/salesRoutes.js";

const app = express();

app.use(cors({
  origin: "https://retail-sales-dashboard-1-lnyg.onrender.com", 
  methods: ["GET"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

mongoose
  .connect("Write your MongoDB Cluster URL  here")
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.log(" MongoDB Connection Error:", err));

app.use("/api", salesRoutes);

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Backend running on port ${PORT}`)
);
