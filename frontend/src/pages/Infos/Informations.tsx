import React, { useState } from 'react';

function Informations() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ['Register', 'Choose plan', 'Purchase', 'Receive Product'];

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

  return (
    <div className="p-10">
      <div className="grid grid-cols-2 h-screen">
        <ul className="steps steps-vertical">
          {steps.map((step, index) => (
            <li key={index} className={`step ${index < currentStep ? 'step-primary' : ''}`} onClick={() => handleStepClick(index)}>
              {step}
            </li>
          ))}
        </ul>

        <form className="step-form">
          {steps.map((step, index) => (
            <div key={index} className={`form-step ${currentStep === index + 1 ? 'active' : ''}`}>
              <h2>{step}</h2>
              {/* Your form fields for each step */}
            </div>
          ))}
          <button type="button" className="prev-btn" onClick={handlePrevStep}>
            Previous
          </button>
          <button type="button" className="next-btn" onClick={handleNextStep}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default Informations;
