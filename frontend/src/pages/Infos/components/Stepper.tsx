import React, { useEffect, useState, useRef } from 'react';

type Step = {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
};

type StepperProps = {
  steps: string[];
  currentStep: number;
};

const Stepper = ({ steps, currentStep }: StepperProps) => {
  const [newStep, setNewStep] = useState<Step[]>([]);
  const stepRef = useRef<Step[]>([]);

  const updateStep = (stepNumber: number, steps: Step[]) => {
    const newSteps = [...steps];

    for (let i = 0; i < newSteps.length; i++) {
      if (i === stepNumber) {
        newSteps[i] = {
          ...newSteps[i],
          highlighted: true,
          selected: true,
          completed: true,
        };
      } else if (i < stepNumber) {
        newSteps[i] = {
          ...newSteps[i],
          highlighted: false,
          selected: true,
          completed: true,
        };
      } else {
        newSteps[i] = {
          ...newSteps[i],
          highlighted: false,
          selected: false,
          completed: false,
        };
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0 ? true : false,
      selected: index === 0 ? true : false,
    }));

    stepRef.current = stepsState;
    const current = updateStep(currentStep, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => (
    <div key={index} className={` ${index !== newStep.length - 1 ? 'w-full flex items-center' : 'flex items-center'}`}>
      <div className="relative flex flex-col items-center text-secondary">
        <div
          className={`rounded-full transition duration-500 border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${
            step.selected ? 'bg-primary text-white font-bold border border-primary' : ''
          }`}
        >
          {step.completed ? <span className="text-white font-bold text-xl">&#10003;</span> : <span>{index + 1}</span>}
        </div>
        <div className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${step.highlighted ? 'text-gray-900' : 'text-gray-400'}`}>
          {step.description}
        </div>
      </div>
      <div className={`flex-auto border-t-2 transition duration-500 ${step.completed ? 'border-primary' : 'border-gray-300'}`}></div>
    </div>
  ));

  return <div className="mx-4 p-4 flex justify-between items-center">{displaySteps}</div>;
};

export default Stepper;
