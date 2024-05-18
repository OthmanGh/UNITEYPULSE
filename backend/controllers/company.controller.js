import Company from "../models/company.model.js";

const handleError = (err, functionName, res) => {
  console.log(`Error in ${functionName} function:`, err);
  res.status(400).json({
    status: "fail",
    message: err.message
  });
};

export const getCompanyById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const company = await Company.findOne({ _id: id, user: userId });
    if (!company) {
      return res.status(404).json({
        status: "fail",
        message: "Company not found"
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        company
      }
    });
  } catch (err) {
    handleError(err, "getCompanyById", res);
  }
};
