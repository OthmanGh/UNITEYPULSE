import React, { useState } from 'react';
import axios from 'axios';
import { useCompany } from '../../contexts/CompanyContext';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URI } from '../../utils';

interface FormData {
  companyName: string;
  address: string;
  foundedIn: string;
  website: string;
  budget: string;
  incomes: string;
  expenses: string;
  refunds: string;
  customers: string;
  sales: string;
  products: string;
  currency: string;
}

const Informations: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const { setCompany } = useCompany();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    address: '',
    foundedIn: '',
    website: '',
    budget: '',
    incomes: '',
    expenses: '',
    refunds: '',
    customers: '',
    sales: '',
    products: '',
    currency: 'usd',
  });

  const steps: string[] = ['Company Information', 'Financial Data', 'Business Operations'];
  const token = JSON.parse(localStorage.getItem('authUser')).token;

  console.log(token);
  const handleStepClick = (stepIndex: number): void => {
    setCurrentStep(stepIndex + 1);
  };

  const handleNextStep = async (): void => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        const response = await axios.post(`${API_BASE_URI}/company`, formData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Form Data Submitted Successfully:', response.data);
        setCompany(response.data.data.company);
        navigate('/dashboard');
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
    }
  };

  const handlePrevStep = (): void => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const stepComponents: JSX.Element[] = [
    <CompanyInformation formData={formData} handleChange={handleChange} />,
    <FinancialData formData={formData} handleChange={handleChange} />,
    <BusinessOperation formData={formData} handleChange={handleChange} />,
  ];

  return (
    <div className="h-screen">
      <div className="grid grid-cols-3 h-full bg-slate-100">
        <ul className="steps steps-vertical p-10 mx-auto">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`step text-slate-700 font-montserrat font-semibold 
                ${index < currentStep ? 'step-primary' : index === currentStep - 1 ? 'step-active' : 'step-default'}`}
              onClick={() => handleStepClick(index)}
            >
              {step}
            </li>
          ))}
        </ul>

        <form className="step-form flex flex-col bg-extraDark col-span-2">
          <div className={`form-step ${currentStep === currentStep + 1 ? 'active' : ''}`}>
            <div className="m-20 flex flex-col gap-10 relative">
              <h2 className="text-slate-200 text-3xl font-poppins">{steps[currentStep - 1]}</h2>
              <div className="grid grid-cols-2 gap-10 ">{stepComponents[currentStep - 1]}</div>

              <div className="flex flex-row justify-between mt-10">
                <button
                  type="button"
                  className="prev-btn hover:bg-primary text-white hover:text-slate-800 p-3 rounded-lg transition-all duration-500"
                  onClick={handlePrevStep}
                >
                  Previous
                </button>

                <button
                  type="button"
                  className="next-btn w-[90px] hover:bg-primary hover:text-slate-800 p-3 text-primary transition-all rounded-lg duration-500"
                  onClick={handleNextStep}
                >
                  {currentStep === steps.length ? 'Submit' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Informations;

interface InputFieldProps {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  label: string;
  id?: string;
  style?: string;
  disabled?: boolean;
}

const CompanyInformation: React.FC<{ formData: FormData; handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }> = ({
  formData,
  handleChange,
}) => {
  return (
    <>
      <InputField placeholder="Company Name" type="text" label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} />
      <InputField placeholder="Address" type="text" label="Address" name="address" value={formData.address} onChange={handleChange} />
      <InputField placeholder="Founded In" type="date" label="Founded In" name="foundedIn" value={formData.foundedIn} onChange={handleChange} />
      <InputField placeholder="Website" type="url" label="Website" name="website" value={formData.website} onChange={handleChange} />
    </>
  );
};

const FinancialData: React.FC<{ formData: FormData; handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }> = ({
  formData,
  handleChange,
}) => {
  return (
    <>
      <InputField placeholder="Budget" type="number" label="Budget" name="budget" value={formData.budget} onChange={handleChange} />
      <InputField placeholder="Incomes" type="number" label="Incomes" name="incomes" value={formData.incomes} onChange={handleChange} />
      <InputField placeholder="Expenses" type="number" label="Expenses" name="expenses" value={formData.expenses} onChange={handleChange} />
      <InputField placeholder="Refunds" type="number" label="Refunds" name="refunds" value={formData.refunds} onChange={handleChange} />
    </>
  );
};

const BusinessOperation: React.FC<{ formData: FormData; handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void }> = ({
  formData,
  handleChange,
}) => {
  return (
    <>
      <InputField placeholder="Number of Customers" type="number" label="Customers" name="customers" value={formData.customers} onChange={handleChange} />
      <InputField placeholder="Sales" type="number" label="Sales" name="sales" value={formData.sales} onChange={handleChange} />
      <InputField placeholder="Number of Products" type="number" label="Products" name="products" value={formData.products} onChange={handleChange} />
      <fieldset className="flex flex-col justify-center items-start w-[90%]">
        <label htmlFor="currency" className="mb-2 text-[15px] text-slate-500">
          Select Currency
        </label>
        <select
          className="bg-slate-100 rounded-md px-4 py-4 h-15 text-slate-800 outline-none w-full"
          id="currency"
          name="currency"
          value={formData.currency}
          onChange={handleChange}
        >
          <option value="usd">US Dollar</option>
          <option value="euro">Euro</option>
          <option value="gbp">Sterling</option>
        </select>
      </fieldset>
    </>
  );
};

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, name, value, onChange, label, id, style, disabled = false }) => {
  return (
    <fieldset className="flex flex-col justify-center items-start w-full">
      <label htmlFor={id} className="mb-2 text-[15px] text-slate-400">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`rounded-md px-4 w-[90%] py-4 h-15 text-secondary outline-none bg-gray-50 ${style}`}
        disabled={disabled}
        required
      />
    </fieldset>
  );
};
