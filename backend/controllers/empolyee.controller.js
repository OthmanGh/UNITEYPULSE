import Employee from "../models/employee.model.js";

const handleError = (err, functionName, res) => {
  console.log(`Error in ${functionName} function:`, err);
  res.status(400).json({
    status: "fail",
    message: err.message
  });
};

export const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        employee
      }
    });
  } catch (err) {
    handleError(err, "createEmployee", res);
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      status: "success",
      results: employees.length,
      data: {
        employees
      }
    });
  } catch (err) {
    handleError(err, "getAllEmployees", res);
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      res.status(404).json({
        status: "fail",
        message: "Employee not found"
      });
    } else {
      res.status(200).json({
        status: "success",
        data: {
          employee
        }
      });
    }
  } catch (err) {
    handleError(err, "getEmployeeById", res);
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!employee) {
      res.status(404).json({
        status: "fail",
        message: "Employee not found"
      });
    } else {
      res.status(200).json({
        status: "success",
        data: {
          employee
        }
      });
    }
  } catch (err) {
    handleError(err, "updateEmployee", res);
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      res.status(404).json({
        status: "fail",
        message: "Employee not found"
      });
    } else {
      res.status(204).json({
        status: "success",
        data: null
      });
    }
  } catch (err) {
    handleError(err, "deleteEmployee", res);
  }
};
