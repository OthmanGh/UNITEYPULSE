import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  user: {
    name: String,
    username: String,
    email: String,
    profilePicture: {
      type: String,
      default: "anonymous.png"
    }
  },

  designation: {
    type: String,
    required: true
  },

  country: {
    type: String,
    required: true
  },

  hireDate: {
    type: Date,
    required: true
  },

  reportsTo: {
    name: String,
    username: String,
    email: String
  },

  salary: {
    type: Number,
    required: true
  },

  performance: {
    type: String,
    enum: ["Excellent", "Good", "Average", "Poor"]
  },

  department: {
    name: String
  }
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
