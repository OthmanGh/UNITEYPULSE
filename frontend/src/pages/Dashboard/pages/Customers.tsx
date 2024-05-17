import { useState } from 'react';
import useGetCustomers from '../../../hooks/useGetCustomers';
import Header from '../components/Header';
import { MdOutlineDeleteSweep as DeleteIcon } from 'react-icons/md';
import { BiSolidEditAlt as EditIcon } from 'react-icons/bi';
import { AddIcon } from '../../../utils/icons';
import { CloseIcon } from '../../../utils/icons';

const Customers = () => {
  const { customers, loading } = useGetCustomers();
  const [showPopup, setShowPopup] = useState('false');

  const data = ['customerId', 'name', 'projectName', 'location', 'budget', 'status', 'week'];

  const filteredCustomers = customers.map((customer, index) => {
    const filteredData = {};
    for (const key of data) {
      if (customer.hasOwnProperty(key)) {
        filteredData[key] = customer[key];
      }
    }

    return (
      <tr
        key={index}
        className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'} hover:bg-secondary hover:bg-opacity-20 transition-all duration-500 text-dark`}
      >
        <td className="px-4 text-[15px] py-2">{filteredData.customerId}</td>
        <td className="px-4 text-[15px] py-2">{filteredData.name}</td>
        <td className="px-4 text-[15px] py-2">{filteredData.projectName}</td>
        <td className="px-4 text-[15px] py-2">{filteredData.status}</td>
        <td className="px-4 text-[15px] py-2">${filteredData.budget.toLocaleString()}</td>
        <td className="px-4 text-[15px] py-2">{filteredData.location}</td>
        <td className="px-4 text-[15px] py-2">
          <button className="py-2 px-4 ">
            <EditIcon className=" text-dark text-2xl hover:text-blue-500 trasition-all duration-500" />
          </button>
        </td>
        <td className="px-4 py-2">
          <button className=" text-dark hover:text-red-500 transition-all duration-500 py-2 px-4 rounded">
            <DeleteIcon className="text-2xl" />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <section className="py-8 px-4">
      <div className="flex flex-col  xs:flex-row items-center justify-between">
        <Header category="app" title="Expense Tracker" />
        <button
          className="flex items-center gap-2 bg-secondary text-gray-100 p-3 rounded-md cursor-pointer hover:bg-dark transition-all duration-400"
          onClick={() => setShowPopup(true)}
        >
          <AddIcon className="text-xl" />
          Add Customer
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="text-center bg-secondary ">
              <th className="text-gray-50  capitalize border-r-2 border-black px-4 py-2">Customer ID</th>
              <th className="text-gray-50  capitalize border-r-2 border-black px-4 py-2">Name</th>
              <th className="text-gray-50  capitalize border-r-2 border-black px-4 py-2">Project Name</th>
              <th className="text-gray-50  capitalize border-r-2 border-black px-4 py-2">Status</th>
              <th className="text-gray-50  capitalize border-r-2 border-black px-4 py-2">Budget</th>
              <th className="text-gray-50  capitalize border-r-2 border-black px-4 py-2">Location</th>
              <th className="text-gray-50  capitalize border-r-2 border-black px-4 py-2">Edit</th>
              <th className="text-gray-50  capitalize border-r-2 px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>{filteredCustomers}</tbody>
        </table>
      </div>

      {showPopup && <AddCustomerPopup setShowPopup={setShowPopup} />}
    </section>
  );
};

export default Customers;

const AddCustomerPopup = ({ setShowPopup }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-8 rounded-lg relative">
        <h2 className="text-2xl font-bold mb-4">Fill Customer Infos</h2>
        <button className="absolute top-6 right-6 text-xl text-secondary hover:text-dark transition-all duration-500" onClick={() => setShowPopup(false)}>
          <CloseIcon className="" />
        </button>

        <form className="grid grid-cols-1 items-center justify-center  xs:gap-4 xs:grid-cols-2 sm:grid-cols-3">
          <InputField type="text" placeholder="Customer Name" />
          <InputField type="text" placeholder="Customer ID" />
          <InputField type="text" placeholder="Project Name" />

          <select className="bg-slate-100 rounded-md px-4 py-4 h-15 text-secondary outline-none">
            <option value="pending">Pending</option>
            <option value="active">Active</option>
            <option value="cancel">Cancel</option>
            <option value="completed">Completed</option>
          </select>

          <InputField type="number" placeholder="Weeks" />
          <InputField type="number" placeholder="Budget" />
          <InputField type="text" placeholder="Location" />

          <button
            type="submit"
            className="bg-secondary rounded-md px-4 py-4 h-15 text-slate-100 outline-none font-bold cursor-pointer hover:bg-dark transition-all duration-500"
          >
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
};

type InputFieldProps = {
  type: string;
  placeholder: string;
};

const InputField = ({ type, placeholder }: InputFieldProps) => {
  return <input type={type} placeholder={placeholder} className="bg-slate-100 rounded-md px-4 py-4 h-15 text-secondary outline-none" />;
};
