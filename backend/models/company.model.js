import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Company name is required"],
      unique: true
    },

    incomes: {
      type: Number,
      default: 0
    },

    expenses: {
      type: Number,
      default: 0
    },

    profits: {
      type: Number,
      default: 0
    },

    budget: {
      type: Number,
      default: 0
    },

    sales: {
      type: Number,
      default: 0
    },

    products: {
      type: Number,
      default: 0
    },

    customers: {
      type: Number,
      default: 0
    },

    refunds: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
