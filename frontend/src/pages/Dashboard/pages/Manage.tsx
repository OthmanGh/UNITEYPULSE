import React, { useState } from 'react';
import styles from '../../../components';
import Header from '../components/Header';
import { GiCycle as CycleIcon } from 'react-icons/gi';
import { CloseIcon } from '../../../utils/icons';
import { Tooltip } from '@mui/material';

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

  const [showPopup, setShowPopup] = useState(true);

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
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInvitationSubmission = (e) => {
    e.preventDefault();
    const emailInput = e.target.elements.email;
    if (emailPattern.test(emailInput.value)) {
      console.log('Email is valid:', emailInput.value);
    } else {
      console.log('Invalid email:', emailInput.value);
    }
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
          <p className="text-lg text-slate-600">Send an invaitation by email</p>
          <button
            className="flex text-md items-center gap-2 bg-secondary text-gray-100 p-3 rounded-md cursor-pointer hover:bg-dark transition-all duration-400"
            onClick={() => {
              setShowPopup(true);
            }}
          >
            Add Employee
          </button>
        </div>
      </div>

      <EmployeePopup employeeInfo={employeeInfo} handleEmployeeChange={handleEmployeeChange} handleEmployeeSubmit={handleEmployeeSubmit} />

      {showPopup && <SendInvitationPopup onSubmit={handleInvitationSubmission} setShowPopup={setShowPopup} />}
    </section>
  );
};

export default Manage;

const SendInvitationPopup = ({ setShowPopup }: { setShowPopup: () => void }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-8 shadow-md rounded-md">
        <div className="flex items-center justify-between mb-6 text-slate-600 relative">
          <h2 className="text-2xl font-semibold">Invite by Email</h2>
          <Tooltip title="close" placement="top">
            <CloseIcon
              className="text-xl transition-all duration-500 hover:text-slate-800 self-center cursor-pointer absolute top-[-13px] right-[-18px] "
              onClick={() => setShowPopup(false)}
            />
          </Tooltip>
        </div>
        <form>
          <input type="email" placeholder="Email" className=" px-4 py-2 rounded-md w-full bg-slate-200 outline-none text-slate-800" />

          <button type="submit" className="bg-secondary hover:bg-dark transition-all duration-500 text-white px-4 py-2 rounded-md mt-4 block w-full">
            Send Invitation
          </button>
        </form>
      </div>
    </div>
  );
};
