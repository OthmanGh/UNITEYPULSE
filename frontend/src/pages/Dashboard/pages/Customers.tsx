import { useState } from 'react';
import useGetCustomers from '../../../hooks/useGetCustomers';
import Header from '../components/Header';
import { MdOutlineDeleteSweep as DeleteIcon } from 'react-icons/md';
import { BiSolidEditAlt as EditIcon } from 'react-icons/bi';

const Customers = () => {
  const { customers, loading } = useGetCustomers();

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
      <Header category="pages" title="Customers" />

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
    </section>
  );
};

export default Customers;

// {
//   "_id": "663c5f34040161bc23f92422",
//   "name": "Customer 1",
//   "projectName": "Project 1",
//   "status": "Pending",
//   "weeks": 10,
//   "budget": 50000,
//   "location": "City 1",
//   "customerId": "CUST001", *
//   "owner": "663b67f60b989a6091509d30",
//   "createdAt": "2024-05-09T05:29:24.987Z",
//   "updatedAt": "2024-05-09T05:29:24.987Z",
//   "__v": 0 1
// },
