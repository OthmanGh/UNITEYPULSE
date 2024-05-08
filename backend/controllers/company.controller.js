import Company from "../models/company.model.js";

export const createCompany = async (req, res) => {
  const {
    name,
    address,
    incomes,
    expenses,
    profits,
    budget,
    sales,
    products,
    customers,
    refunds
  } = req.body;

  try {
    if (
      !name ||
      !incomes ||
      !expenses ||
      !profits ||
      !budget ||
      !sales ||
      !products ||
      !customers ||
      !refunds
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const company = new Company({
      name,
      address,
      incomes,
      expenses,
      profits,
      budget,
      sales,
      products,
      customers,
      refunds
    });

    const newCompany = await company.save();
    res.status(201).json(newCompany);
  } catch (error) {
    console.error("Error creating company:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
