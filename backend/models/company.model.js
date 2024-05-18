import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  foundedIn: {
    type: Date,
    required: true
  },

  website: {
    type: String,
    required: true
  },

  budget: {
    type: Number,
    required: true
  },

  incomes: {
    type: Number,
    required: true
  },

  expenses: {
    type: Number,
    required: true
  },

  refunds: {
    type: Number,
    required: true
  },

  customers: {
    type: Number,
    required: true
  },

  sales: {
    type: Number,
    required: true
  },

  products: {
    type: Number,
    required: true
  },

  currency: {
    type: String,
    enum: ["usd", "euro", "gbp"],
    default: "usd"
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Company = mongoose.model("Company", companySchema);

export default Company;
