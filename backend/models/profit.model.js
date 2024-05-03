import mongoose from "mongoose";

const profitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  createdBy: {
    name: String,
    username: String,
    email: String
  }
});

const Profit = mongoose.model("Profit", profitSchema);
export default Profit;
