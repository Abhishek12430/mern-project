//server//routes/studentRoutes.js
import express from "express";
import { createStudent, getAllStudents } from "../controllers/studentController.js";

const router = express.Router();

// ✅ Routes
router.post("/student", createStudent);
router.get("/studentdata", getAllStudents);

export default router;
