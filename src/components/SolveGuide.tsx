import React, { useState } from 'react';
import { CubeSolver } from '@/utils/cubeSolver';

interface SolveGuideProps {
  solver: CubeSolver;
}

export default function SolveGuide({ solver }: SolveGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = solver.getCurrentStep();
  const progress = solver.getCurrentProgress();

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

  return (
    <div className="bg-secondary p-6 rounded-2xl shadow-lg border border-border">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span role="img" aria-label="Steps">📝</span>
            {step.name}
          </h2>
          <span className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">
            Step {progress.currentStep} of {progress.totalSteps}
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative h-2 bg-accent rounded-full overflow-hidden mb-4">
          <div 
            className="absolute h-full bg-primary transition-all duration-300 ease-out rounded-full"
            style={{ width: `${(progress.currentStep / progress.totalSteps) * 100}%` }}
          />
        </div>

        <p className="text-secondary-foreground text-lg mb-6">{step.description}</p>

        <div className="bg-accent/50 p-6 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <span role="img" aria-label="Tip" className="text-xl">💡</span>
            <h3 className="font-semibold text-foreground">Helpful Tips:</h3>
          </div>
          <ul className="space-y-3">
            {step.tips.map((tip, index) => (
              <li 
                key={index} 
                className="flex items-start gap-2 text-secondary-foreground"
              >
                <span className="text-primary mt-1">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between gap-4 mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
            ${currentStep === 0
              ? 'bg-accent text-accent-foreground cursor-not-allowed opacity-50'
              : 'bg-accent hover:bg-accent/80 text-accent-foreground'
            }
          `}
        >
          <span>←</span>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === progress.totalSteps - 1}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
            ${currentStep === progress.totalSteps - 1
              ? 'bg-accent text-accent-foreground cursor-not-allowed opacity-50'
              : 'bg-primary hover:bg-primary/90 text-primary-foreground'
            }
          `}
        >
          Next
          <span>→</span>
        </button>
      </div>
    </div>
  );
}