import React, { useState } from 'react';
import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';
import CompanyInfos from './components/steps/CompanyInfos';
import Stats from './components/steps/Stats';
import Final from './components/steps/Final';
import { StepperContext } from '../../contexts/StepperContext';

const Infos = () => {
  const steps = ['Company Information', 'Statistics', 'Complete'];
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  const displayStep = (step) => {
    switch (step) {
      case 0:
        return <CompanyInfos />;
      case 1:
        return <Stats />;
      case 2:
        return <Final />;
      default:
        return null;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;

    newStep >= 0 && newStep < steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white h-screen">
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>

      <div>{displayStep(currentStep)}</div>
      <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
    </div>
  );
};

export default Infos;
