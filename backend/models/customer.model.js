import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"]
    },

    projectName: {
      type: String,
      required: [true, "Project name is required"]
    },

    status: {
      type: String,
      enum: ["Pending", "Active", "Cancel", "Completed"],
      default: "Pending"
    },

    weeks: {
      type: Number,
      default: 0
    },

    budget: {
      type: Number,
      default: 0
    },

    location: {
      type: String
    },

    customerId: {
      type: String,
      required: true,
      unique: true
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
