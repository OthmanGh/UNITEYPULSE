const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
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
    enum: ["Marketing", "Occupations", "Salaries"],
    required: true
  },
  createdBy: {
    name: String,
    username: String,
    email: String
  }
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
