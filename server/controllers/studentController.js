//server/controllers/studentController.js
import Student from "../models/Student.js";

// ✅ Insert student
export const createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({ message: "Student saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Fetch all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
