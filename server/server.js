import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import studentRoutes from "./routers/studentRouter.js";

dotenv.config();

const app = express();
  await connectDB()

app.use(cors());
app.use(express.json());
  app.get('/',(req,res)=> res.send('server is live'));

app.use("/api", studentRoutes);

const PORT = process.env.PORT||5000
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
