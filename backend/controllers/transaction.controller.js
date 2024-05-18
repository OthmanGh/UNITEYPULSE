import Transaction from "../models/transaction.model.js";

const handleError = (err, functionName, res) => {
  console.log(`Error in ${functionName} function:`, err);
  res.status(400).json({
    status: "fail",
    message: err.message
  });
};

export const getAllTransactions = async (req, res) => {
  const createdBy = req.user._id;

  try {
    const transactions = await Transaction.find({ createdBy });
    res.status(200).json({
      status: "success",
      results: transactions.length,
      data: {
        transactions
      }
    });
  } catch (err) {
    handleError(err, "getAllTransactions", res);
  }
};

export const createTransaction = async (req, res) => {
  try {
    req.body.createdBy = req.user._id;
    const transaction = await Transaction.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        transaction
      }
    });
  } catch (err) {
    handleError(err, "createTransaction", res);
  }
};

export const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  const createdBy = req.user._id;

  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: id,
      createdBy
    });

    if (!transaction) {
      return res.status(404).json({
        status: "fail",
        message: "Transaction not found"
      });
    }
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    handleError(err, "deleteTransaction", res);
  }
};

export const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const createdBy = req.user._id;

  try {
    const transaction = await Transaction.findOneAndUpdate(
      { _id: id, createdBy },
      req.body,
      { new: true }
    );

    if (!transaction) {
      return res.status(404).json({
        status: "fail",
        message: "Transaction not found"
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        transaction
      }
    });
  } catch (err) {
    handleError(err, "updateTransaction", res);
  }
};
