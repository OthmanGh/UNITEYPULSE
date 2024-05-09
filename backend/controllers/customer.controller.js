import Customer from "../models/customer.model.js";

const handleError = (err, functionName, res) => {
  console.log(`Error in ${functionName} function:`, err);
  res.status(400).json({
    status: "fail",
    message: err.message
  });
};

export const createCustomer = async (req, res) => {
  try {
    req.body.owner = req.user._id;
    const customer = await Customer.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        customer
      }
    });
  } catch (err) {
    handleError(err, "createCustomer", res);
  }
};

export const getAllCustomers = async (req, res) => {
  const ownerId = req.user._id;

  try {
    const customers = await Customer.find({ owner: ownerId });
    res.status(200).json({
      status: "success",
      results: customers.length,
      data: {
        customers
      }
    });
  } catch (err) {
    handleError(err, "getAllCustomers", res);
  }
};

export const getCustomer = async (req, res) => {
  const { id } = req.params;
  const ownerId = req.user._id;

  try {
    const customer = await Customer.findOne({ _id: id, owner: ownerId });
    if (!customer) {
      return res.status(404).json({
        status: "fail",
        message: "Customer not found"
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        customer
      }
    });
  } catch (err) {
    handleError(err, "getCustomerById", res);
  }
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const ownerId = req.user._id;

  try {
    const customer = await Customer.findOneAndUpdate(
      { _id: id, owner: ownerId },
      req.body,
      { new: true }
    );
    if (!customer) {
      return res.status(404).json({
        status: "fail",
        message: "Customer not found"
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        customer
      }
    });
  } catch (err) {
    handleError(err, "updateCustomerById", res);
  }
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  const ownerId = req.user._id;

  try {
    const customer = await Customer.findOneAndDelete({
      _id: id,
      owner: ownerId
    });
    if (!customer) {
      return res.status(404).json({
        status: "fail",
        message: "Customer not found"
      });
    }
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    handleError(err, "deleteCustomerById", res);
  }
};
