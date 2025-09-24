import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  Class: String,
  subject: String,
});

export default mongoose.models.Student || mongoose.model("Student", studentSchema);
