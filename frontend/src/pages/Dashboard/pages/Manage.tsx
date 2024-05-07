import React, { useState } from 'react';
import styles from '../../../components';
import Header from '../components/Header';
import { GiCycle as CycleIcon } from 'react-icons/gi';

interface CompanyInfo {
  companyName: string;
  totalIncomes: string;
  totalExpenses: string;
  taxId: string;
  currency: string;
  businessAddress: string;
}

interface EmployeeInfo {
  fullName: string;
  email: string;
  role: string;
  department: string;
  startDate: string;
  employeeId: string;
  manager: string;
  password: string;
}

type EmployeePopupProps = {
  employeeInfo: EmployeeInfo;
  handleEmployeeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmployeeSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const EmployeePopup = ({ employeeInfo, handleEmployeeChange, handleEmployeeSubmit }: EmployeePopupProps) => {
  return (
    <div className="bg-white p-8 rounded-lg ">
      <h2 className="text-lg font-semibold mb-4">Add Employee</h2>
      <form className="grid xs:grid-cols-2 sm:grid-cols-3 gap-10" onSubmit={handleEmployeeSubmit}>
        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400 w-full mb-4"
          placeholder="Full Name"
          name="fullName"
          value={employeeInfo.fullName}
          onChange={handleEmployeeChange}
          required
        />
        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400 w-full mb-4"
          placeholder="Email Address"
          type="email"
          name="email"
          value={employeeInfo.email}
          onChange={handleEmployeeChange}
          required
        />
        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400 w-full mb-4"
          placeholder="Role/Position"
          name="role"
          value={employeeInfo.role}
          onChange={handleEmployeeChange}
          required
        />
        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400 w-full mb-4"
          placeholder="Department"
          name="department"
          value={employeeInfo.department}
          onChange={handleEmployeeChange}
        />
        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400 w-full mb-4"
          placeholder="Start Date"
          type="date"
          name="startDate"
          value={employeeInfo.startDate}
          onChange={handleEmployeeChange}
          required
        />
        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400 w-full mb-4"
          placeholder="Employee ID"
          name="employeeId"
          value={employeeInfo.employeeId}
          onChange={handleEmployeeChange}
        />
        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400 w-full mb-4"
          placeholder="Manager"
          name="manager"
          value={employeeInfo.manager}
          onChange={handleEmployeeChange}
        />
        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400 w-full mb-4"
          placeholder="Password"
          type="password"
          name="password"
          value={employeeInfo.password}
          onChange={handleEmployeeChange}
          required
        />
        <div className="flex justify-end">
          <button type="submit" className="bg-secondary text-gray-100 p-3 rounded-md cursor-pointer hover:bg-dark transition-all duration-400 text-md">
            Invite Employee
          </button>
        </div>
      </form>
    </div>
  );
};

const Manage: React.FC = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    companyName: '',
    totalIncomes: '',
    totalExpenses: '',
    taxId: '',
    currency: '',
    businessAddress: '',
  });

  const [employeeInfo, setEmployeeInfo] = useState<EmployeeInfo>({
    fullName: '',
    email: '',
    role: '',
    department: '',
    startDate: '',
    employeeId: '',
    manager: '',
    password: '',
  });

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCompanyInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleEmployeeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEmployeeInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleEmployeeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(employeeInfo);
    setEmployeeInfo({
      fullName: '',
      email: '',
      role: '',
      department: '',
      startDate: '',
      employeeId: '',
      manager: '',
      password: '',
    });
  };

  const handleCompanySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(companyInfo);
    setCompanyInfo({
      companyName: '',
      totalIncomes: '',
      totalExpenses: '',
      taxId: '',
      currency: '',
      businessAddress: '',
    });
  };

  return (
    <section className={`${styles.dashboardSection}`}>
      <div className="flex flex-col  xs:flex-row items-center justify-between">
        <Header category="pages" title="Manage" />
        <button
          className="flex items-center mb-2 gap-2 bg-secondary text-gray-100 p-3 rounded-md cursor-pointer hover:bg-dark transition-all duration-400 text-md"
          onClick={handleCompanySubmit}
        >
          Submit Changes
        </button>
      </div>

      <form className="grid xs:grid-cols-2 sm:grid-cols-3 gap-10" onSubmit={handleCompanySubmit}>
        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400  w-[80%]"
          placeholder="Company Name"
          name="companyName"
          value={companyInfo.companyName}
          onChange={handleCompanyChange}
          required
        />

        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400  w-[80%]"
          placeholder="Total Incomes"
          type="number"
          name="totalIncomes"
          value={companyInfo.totalIncomes}
          onChange={handleCompanyChange}
          required
        />

        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400  w-[80%]"
          placeholder="Total Expenses"
          type="number"
          name="totalExpenses"
          value={companyInfo.totalExpenses}
          onChange={handleCompanyChange}
          required
        />

        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400  w-[80%]"
          placeholder="Tax ID"
          name="taxId"
          value={companyInfo.taxId}
          onChange={handleCompanyChange}
          required
        />

        <select
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400  w-[80%]"
          name="currency"
          value={companyInfo.currency}
          onChange={handleCompanyChange}
          required
        >
          <option value="">Currency</option>
          <option value="USD">USD - Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - Pound</option>
        </select>

        <input
          className="bg-transparent border-b-2 px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400  w-[80%]"
          placeholder="Business Address"
          name="businessAddress"
          value={companyInfo.businessAddress}
          onChange={handleCompanyChange}
          required
        />
      </form>

      <div>
        <h2 className="text-secondary font-semibold text-2xl mt-10">Access:</h2>

        <div className="bg-slate-100 px-4 py-10 rounded-lg h-[50vh] flex flex-col items-center mt-4 gap-10">
          <CycleIcon className="text-5xl text-dark" />
          <p className="text-lg text-slate-600">You've not added any employee yet</p>
          <button className="flex text-md items-center gap-2 bg-secondary text-gray-100 p-3 rounded-md cursor-pointer hover:bg-dark transition-all duration-400">
            Add Employee
          </button>
        </div>
      </div>

      <EmployeePopup employeeInfo={employeeInfo} handleEmployeeChange={handleEmployeeChange} handleEmployeeSubmit={handleEmployeeSubmit} />
    </section>
  );
};

export default Manage;
