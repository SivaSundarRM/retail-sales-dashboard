import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import salesRoutes from "./routes/salesRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Siva:nZcBht17rwymWkil@cluster0.pyx7cj1.mongodb.net/SalesDB?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch((err) => console.log(" MongoDB Connection Error:", err));

app.use("/api", salesRoutes);

app.listen(5000, () => console.log(" Backend running on port 5000"));
