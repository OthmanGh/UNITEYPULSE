import Expense from "../models/expense.js";

const handleError = (err, functionName, res) => {
  console.log(`Error in ${functionName} function:`, err);
  res.status(400).json({
    status: "fail",
    message: err.message
  });
};

export const getAllExpenses = async (req, res) => {
  const createdBy = req.user._id;

  try {
    const expenses = await Expense.find({ createdBy });
    res.status(200).json({
      status: "success",
      results: expenses.length,
      data: {
        expenses
      }
    });
  } catch (err) {
    handleError(err, "getAllExpenses", res);
  }
};

export const createExpense = async (req, res) => {
  try {
    req.body.createdBy = req.user._id;
    const expense = await Expense.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        expense
      }
    });
  } catch (err) {
    handleError(err, "createExpense", res);
  }
};
