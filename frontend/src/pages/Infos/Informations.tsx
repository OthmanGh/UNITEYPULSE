import React, { useState } from 'react';
import '../../App.css'; // Ensure this import is correct

const Informations = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ['Register', 'Choose plan', 'Purchase'];

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

  const stepComponents = [<CompanyInfos />, <CompanyStats />, <CompanyMoney />];

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
        className={`rounded-md px-4 py-4 h-15 text-secondary outline-none ${
          disabled ? 'bg-gray-500 text-slate-800 cursor-not-allowed' : 'bg-slate-100 w-[90%]'
        }`}
        disabled={disabled}
      />
    </fieldset>
  );
};

const CompanyInfos = () => {
  return (
    <>
      <InputField placeholder="Company Name" type="text" label="Company" />
      <InputField placeholder="Company Name" type="text" label="Company" />
      <InputField placeholder="Company Name" type="text" label="Company" />
      <InputField placeholder="Company Name" type="text" label="Company" />
    </>
  );
};

const CompanyStats = () => {
  return (
    <>
      <InputField placeholder="Company Name" type="text" label="Company" />
      <InputField placeholder="Company Name" type="text" label="Company" />
      <InputField placeholder="Company Name" type="text" label="Company" />
      <InputField placeholder="Company Name" type="text" label="Company" />
    </>
  );
};

const CompanyMoney = () => {
  return (
    <>
      <InputField placeholder="Company Name" type="text" label="Company" />
      <InputField placeholder="Company Name" type="text" label="Company" />
      <InputField placeholder="Company Name" type="text" label="Company" />
      <InputField placeholder="Company Name" type="text" label="Company" />
    </>
  );
};
