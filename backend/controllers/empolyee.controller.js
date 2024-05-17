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
  const { id } = req.params;
  const ownerId = req.user._id;

  try {
    const employee = await Employee.findOneAndUpdate(
      { employeeId: id, owner: ownerId },
      req.body
    );

    console.log(employee);

    if (!employee) {
      return res.status(404).json({
        status: "fail",
        message: "Employee not found"
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        employee
      }
    });
  } catch (err) {
    handleError(err, "updateCustomerById", res);
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findOneAndDelete({
      employeeId: id
    });

    console.log(employee);

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
