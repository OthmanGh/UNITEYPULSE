import React, { useState } from 'react';

interface AddTransactionPopupProps {
  onAddTransaction: (newTransaction: { date: string; description: string; category: string; amount: number; type: 'income' | 'expense' }) => void;
  onUpdateTransaction: (
    id: string,
    updatedTransaction: {
      date: string;
      description: string;
      category: string;
      amount: number;
      type: 'income' | 'expense';
    }
  ) => void;
  onClose: () => void;
  transaction: Transaction | null;
}

const AddTransactionPopup: React.FC<AddTransactionPopupProps> = ({ onAddTransaction, onUpdateTransaction, onClose, transaction }) => {
  const [date, setDate] = useState(transaction ? transaction.date : '');
  const [description, setDescription] = useState(transaction ? transaction.description : '');
  const [category, setCategory] = useState(transaction ? transaction.category : '');
  const [amount, setAmount] = useState(transaction ? transaction.amount.toString() : '');
  const [type, setType] = useState(transaction ? transaction.type : 'expense');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTransaction = {
      date,
      description,
      category,
      amount: parseFloat(amount), // Convert amount to number
      type,
    };

    if (transaction) {
      onUpdateTransaction(transaction._id, newTransaction);
    } else {
      onAddTransaction(newTransaction);
    }

    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-10">
      <div className="bg-white p-8 rounded-lg relative">
        <h2 className="text-2xl font-bold mb-4">{transaction ? 'Update Transaction' : 'Add Transaction'}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <InputField type="date" placeholder="Enter date" name="date" value={date} onChange={(e) => setDate(e.target.value)} label="Date" id="date" />
          <InputField
            type="text"
            placeholder="Enter description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            id="description"
          />
          <InputField
            type="text"
            placeholder="Enter category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label="Category"
            id="category"
          />
          <InputField
            type="number"
            placeholder="Enter amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            label="Amount"
            id="amount"
          />
          <div>
            <label>
              Type:
              <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </label>
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition-all duration-500">
              Cancel
            </button>
            <button type="submit" className="bg-secondary text-white px-4 py-2 rounded hover:bg-dark transition-all duration-500 ">
              {transaction ? 'Update Transaction' : 'Add Transaction'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionPopup;

interface InputFieldProps {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, name, value, onChange, label, id, disabled = false }) => {
  return (
    <label className="flex flex-col">
      <span className="text-slate-600 mb-[1px]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        className="p-3 rounded-md bg-slate-200 outline-none w-[500px] text-dark"
        disabled={disabled}
        required
      />
    </label>
  );
};
