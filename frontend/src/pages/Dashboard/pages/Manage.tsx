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

const Manage: React.FC = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    companyName: '',
    totalIncomes: '',
    totalExpenses: '',
    taxId: '',
    currency: '',
    businessAddress: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCompanyInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
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

  const handleInvitationSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailPattern.test(email)) {
      console.log('Email is valid:', email);
      setEmail('');
      setShowPopup(false);
    } else {
      console.log('Invalid email:', email);
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
          <p className="text-lg text-slate-600">Send an invitation by email</p>
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

      {showPopup && <SendInvitationPopup onSubmit={handleInvitationSubmission} setShowPopup={setShowPopup} setEmail={setEmail} />}
    </section>
  );
};

export default Manage;

type SendInvitationPopupProps = {
  setShowPopup: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

const SendInvitationPopup: React.FC<SendInvitationPopupProps> = ({ setShowPopup, onSubmit, setEmail }) => {
  const handleInvitationSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

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
        <form onSubmit={handleInvitationSubmission}>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-md w-full bg-slate-200 outline-none text-slate-800"
            onChange={handleEmailChange}
          />
          <button type="submit" className="bg-secondary hover:bg-dark transition-all duration-500 text-white px-4 py-2 rounded-md mt-4 block w-full">
            Send Invitation
          </button>
        </form>
      </div>
    </div>
  );
};
