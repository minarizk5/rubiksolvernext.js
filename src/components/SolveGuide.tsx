import React, { useState } from 'react';
import { CubeSolver } from '@/utils/cubeSolver';

interface SolveGuideProps {
  solver: CubeSolver;
}

export default function SolveGuide({ solver }: SolveGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const step = solver.getCurrentStep();

  const handleNext = () => {
    const nextStep = solver.getNextStep();
    if (nextStep) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    const prevStep = solver.getPreviousStep();
    if (prevStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = solver.getCurrentProgress();

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">{step.name}</h2>
          <span className="text-sm text-gray-500">
            Step {progress.currentStep} of {progress.totalSteps}
          </span>
        </div>
        <p className="text-gray-700 mb-4">{step.description}</p>
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-semibold mb-2">Tips:</h3>
          <ul className="list-disc list-inside space-y-2">
            {step.tips.map((tip, index) => (
              <li key={index} className="text-gray-600">{tip}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
        >
          Previous Step
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === progress.totalSteps - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}