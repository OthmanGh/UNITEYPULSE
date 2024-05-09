import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    profile: {
      name: {
        type: String,
        required: [true, "Name is required"]
      },
      pic: {
        type: String,
        default: "annonymous.png"
      }
    },

    destination: {
      type: String
    },

    country: {
      type: String
    },

    hireDate: {
      type: Date,
      default: Date.now
    },

    reportsTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee"
    },

    employeeId: {
      type: String,
      required: [true, "Employee ID is required"],
      unique: true
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },

  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
