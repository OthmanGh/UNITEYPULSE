const AddExpensePopup = ({ onShowPopup, onAddExpense }: { onShowPopup: () => void; onAddExpense: () => void }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-secondary-dark-bg p-6 rounded-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Add Expense</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm  text-gray-700 dark:text-gray-200 font-semibold">
              Date
            </label>
            <input type="text" id="date" name="date" className="mt-1 p-2 border rounded-md w-full bg-gray-200 text-secondary  focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm  text-gray-700 dark:text-gray-200 font-semibold">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="mt-1 p-2 border rounded-md w-full bg-gray-200 text-secondary focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm text-gray-700 dark:text-gray-200 font-semibold">
              Category
            </label>
            <input type="text" id="category" name="category" className="mt-1 p-2 border rounded-md w-full bg-gray-200 text-secondary focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm  text-gray-700 dark:text-gray-200 font-semibold">
              Amount
            </label>
            <input type="text" id="amount" name="amount" className="mt-1 p-2 border rounded-md w-full bg-gray-200 text-secondary focus:outline-none" />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-300 text-gray-500 p-2 rounded-md mr-2 hover:bg-gray-200 transition-all duration-400 w-[80px]"
              onClick={() => onShowPopup(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={onAddExpense}
              className="bg-secondary text-white p-2 rounded-md hover:bg-secondary hover:bg-opacity-80 transition-all duration-400 w-[80px]"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddExpensePopup;
