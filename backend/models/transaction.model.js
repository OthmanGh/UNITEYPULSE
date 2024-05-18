import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
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

    type: {
      type: String,
      enum: ["income", "expense"],
      required: true
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
