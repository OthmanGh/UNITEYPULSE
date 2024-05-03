import mongoose from "mongoose";

const attachmentSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  assignedTo: {
    name: String,
    username: String,
    email: String
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending"
  },
  attachments: [attachmentSchema]
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
