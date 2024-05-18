import React, { useState } from 'react';
import '../../App.css'; // Ensure this import is correct

const Informations = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ['Company Information', 'Financial Data', 'Business Operations'];

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex + 1);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const stepComponents = [<CompanyInformation />, <FinancialData />, <BusinessOperation />];

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
              <div className="grid grid-cols-2 gap-10 "> {stepComponents[currentStep - 1]}</div>

              <div className="flex flex-row justify-between mt-10">
                <button
                  type="button"
                  className="prev-btn hover:bg-primary text-white hover:text-slate-800 p-3 rounded-lg  transition-all duration-500"
                  onClick={handlePrevStep}
                >
                  Previous
                </button>

                <button
                  type="button"
                  className="next-btn w-[90px] hover:bg-primary hover:text-slate-800 p-3  text-primary transition-all rounded-lg duration-500 "
                  onClick={handleNextStep}
                >
                  Next
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

const CompanyInformation = () => {
  return (
    <>
      <InputField placeholder="Company Name" type="text" label="Company Name" />
      <InputField placeholder="Address" type="text" label="Address" />
      <InputField placeholder="Founded In" type="date" label="Founded In" />
      <InputField placeholder="Website" type="url" label="Website" />
    </>
  );
};

const FinancialData = () => {
  return (
    <>
      <InputField placeholder="Budget" type="number" label="Budget" />
      <InputField placeholder="Incomes" type="number" label="Incomes" />
      <InputField placeholder="Expenses" type="number" label="Expenses" />
      <InputField placeholder="Refunds" type="number" label="Refunds" />
    </>
  );
};

const BusinessOperation = () => {
  return (
    <>
      <InputField placeholder="Number of Customers" type="number" label="Customers" />
      <InputField placeholder="Sales" type="number" label="Sales" />
      <InputField placeholder="Number of Products" type="number" label="Products" />

      <fieldset className="flex flex-col justify-center items-start w-[90%]">
        <label htmlFor="currency" className="mb-2 text-[15px] text-slate-500">
          Select Status
        </label>
        <select className="bg-slate-100 rounded-md px-4 py-4 h-15 text-slate-800 outline-none w-full" id="currency">
          <option value="usd">US Dollar</option>
          <option value="euro">Euro</option>
          <option value="gbp">Sterling</option>
        </select>
      </fieldset>
    </>
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
  disabled?: boolean;
  style?: string;
}

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
        className={`rounded-md px-4 w-[90%] py-4 h-15 text-secondary outline-none bg-gray-50`}
        disabled={disabled}
      />
    </fieldset>
  );
};
