import React, { useState, useEffect } from 'react';
import useGetCustomers from '../../../hooks/useGetCustomers';
import Header from '../components/Header';
import { MdOutlineDeleteSweep as DeleteIcon } from 'react-icons/md';
import { BiSolidEditAlt as EditIcon } from 'react-icons/bi';
import { AddIcon } from '../../../utils/icons';
import { CloseIcon } from '../../../utils/icons';
import useCreateCustomer from '../../../hooks/useCreateCustomer';

interface CustomerData {
  name: string;
  customerId: string;
  projectName: string;
  status: string;
  weeks: number;
  budget: number;
  location: string;
}

const data: string[] = ['customerId', 'name', 'projectName', 'location', 'budget', 'status', 'week'];

const Customers: React.FC = () => {
  const { customers: initialCustomers, loading } = useGetCustomers();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const { createCustomer, loading: createLoading, error: createError } = useCreateCustomer();
  const [customers, setCustomers] = useState<CustomerData[]>(initialCustomers);
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    customerId: '',
    projectName: '',
    status: 'Pending',
    weeks: 0,
    budget: 0,
    location: '',
  });

  useEffect(() => {
    if (!loading) {
      setCustomers(initialCustomers);
    }
  }, [initialCustomers, loading]);

  const filteredCustomers = customers.map((customer, index) => {
    const filteredData: any = {};
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: name === 'weeks' || name === 'budget' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const newCustomer = await createCustomer(customerData);
      setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
      setCustomerData({
        name: '',
        customerId: '',
        projectName: '',
        status: 'Pending',
        weeks: 0,
        budget: 0,
        location: '',
      });

      setShowPopup(false);
    } catch (error) {
      console.log(error);
    }
  };

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

      {showPopup && (
        <AddCustomerPopup
          setShowPopup={setShowPopup}
          setCustomerData={setCustomerData}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          customerData={customerData}
        />
      )}
    </section>
  );
};

export default Customers;

interface AddCustomerPopupProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomerData: React.Dispatch<React.SetStateAction<CustomerData>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  customerData: CustomerData;
}

const AddCustomerPopup: React.FC<AddCustomerPopupProps> = ({ setShowPopup, setCustomerData, handleSubmit, handleInputChange, customerData }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-8 rounded-lg relative">
        <h2 className="text-2xl font-bold mb-4">Fill Customer Infos</h2>
        <button className="absolute top-6 right-6 text-xl text-secondary hover:text-dark transition-all duration-500" onClick={() => setShowPopup(false)}>
          <CloseIcon />
        </button>

        <form className="grid  grid-cols-1 items-center justify-center   xs:grid-cols-2 gap-10 sm:grid-cols-3" onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Customer Name"
            name="name"
            value={customerData.name}
            onChange={handleInputChange}
            label="Customer Name"
            id="customerName"
          />
          <InputField
            type="text"
            placeholder="Customer ID"
            name="customerId"
            value={customerData.customerId}
            onChange={handleInputChange}
            label="Customer ID"
            id="customerId"
          />
          <InputField
            type="text"
            placeholder="Project Name"
            name="projectName"
            value={customerData.projectName}
            onChange={handleInputChange}
            label="Project Name"
            id="projectName"
          />

          <fieldset className="flex flex-col justify-center items-start">
            <label htmlFor="status" className="mb-2 text-[15px] text-slate-500">
              Select Status
            </label>
            <select
              className="bg-slate-100 rounded-md px-4 py-4 h-15 text-secondary outline-none w-full"
              name="status"
              value={customerData.status}
              onChange={handleInputChange}
              id="status"
            >
              <option value="Pending">Pending</option>
              <option value="Active">Active</option>
              <option value="Cancel">Cancel</option>
              <option value="Completed">Completed</option>
            </select>
          </fieldset>

          <InputField
            type="number"
            placeholder="Weeks"
            name="weeks"
            value={customerData.weeks.toString()}
            onChange={handleInputChange}
            label="Weeks"
            id="weeks"
          />
          <InputField
            type="number"
            placeholder="Budget"
            name="budget"
            value={customerData.budget.toString()}
            onChange={handleInputChange}
            label="Budget"
            id="budget"
          />
          <InputField
            type="text"
            placeholder="Location"
            name="location"
            value={customerData.location}
            onChange={handleInputChange}
            label="Location"
            id="location"
          />

          <button
            type="submit"
            className="bg-secondary rounded-md px-4 py-4 h-15 text-slate-100 outline-none font-bold cursor-pointer hover:bg-dark transition-all duration-500 w-full mt-[30px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

interface InputFieldProps {
  type: string;
  placeholder: string;
  name: string;
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, name, value, onChange, label, id }) => {
  return (
    <fieldset className="flex flex-col justify-center items-start">
      <label htmlFor="" className="mb-2 text-[15px] text-slate-500">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-slate-100 rounded-md px-4 py-4 h-15 text-secondary outline-none"
      />
    </fieldset>
  );
};
