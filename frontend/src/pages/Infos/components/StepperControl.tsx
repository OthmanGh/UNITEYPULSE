import React from 'react';

type StepperControlProps = {
  handleClick: (direction: string) => void;
  steps: string[];
  currentStep: number;
};

const StepperControl = ({ handleClick, currentStep, steps }: StepperControlProps) => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      <button
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold  cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition  duration-500 ${
          currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
        } `}
        onClick={() => handleClick('back')}
      >
        Back
      </button>

      <button
        className="bg-secondary text-white uppercase py-2 px-4 rounded-xl font-semibold  cursor-pointer hover:bg-slate-700 hover:text-white transition  duration-500"
        onClick={() => handleClick('next')}
      >
        {currentStep === steps.length - 1 ? 'Confirm' : 'Next'}
      </button>
    </div>
  );
};

export default StepperControl;
