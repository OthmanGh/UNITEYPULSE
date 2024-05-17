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
      </div>

      <div>
        <h2 className="text-secondary font-bold text-2xl ">Company Policies:</h2>

        <div className="grid grid-cols-1 items-center justify-center xs:grid-cols-2 gap-4 sm:grid-cols-3 p-4">
          <Policies
            title="1. Equal Employment Opportunity Policy:"
            text=" We embrace diversity and provide equal opportunities for all employees, prohibiting discrimination based on race, gender, religion, age, or disability."
          />

          <Policies
            title="2. Code of Conduct:"
            text="Employees must maintain honesty, respect, and professionalism in all interactions, avoiding conflicts of interest and unethical behavior.

            "
          />

          <Policies
            title="3. Workplace Harassment:"
            text="Harassment of any kind is unacceptable. Employees are encouraged to report any incidents promptly for appropriate action."
          />

          <Policies
            title="4. Data Privacy and Security:"
            text="We prioritize the protection of customer and company data, ensuring compliance with all relevant privacy laws and regulations."
          />

          <Policies
            title="5. Performance Evaluation:"
            text="Annual evaluations provide opportunities for goal-setting, feedback, and professional development discussions."
          />

          <Policies
            title="6. Communication:"
            text="Clear and respectful communication is essential for effective collaboration. Our platform facilitates seamless communication across teams"
          />
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-secondary font-bold text-2xl">Access:</h2>

        <div className="p-4">
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
      </div>

      {showPopup && <SendInvitationPopup onSubmit={handleInvitationSubmission} setShowPopup={setShowPopup} setEmail={setEmail} />}
    </section>
  );
};

export default Manage;

type SendInvitationPopupProps = {
  setShowPopup: (show: boolean) => void;
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

const Policies = ({ text, title }: { text: string; title: string }) => {
  return (
    <Tooltip title="click to edit" placement="top">
      <div className="bg-dark px-4 py-6 rounded-lg text-sm w-full h-[180px] hover:scale-105 transition-all duration-500 hover:bg-secondary  hover:text-gray-200 overflow-y-scroll">
        <h3 className="text-[15px] text-white mb-3">{title}</h3>
        <p className="leading-6">{text}</p>
      </div>
    </Tooltip>
  );
};
