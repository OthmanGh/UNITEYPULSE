import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"]
    },

    picture: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/previews/005/266/979/original/avatar-profile-pink-neon-icon-brick-wall-background-colour-neon-icon-vector.jpg"
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
