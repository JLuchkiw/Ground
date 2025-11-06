import { useState } from "react";
import GroundingStep from "./GroundingStep";

const steps = [
  { id: 1, prompt: "Name 5 things you can see." },
  { id: 2, prompt: "Name 4 things you can touch." },
  { id: 3, prompt: "Name 3 things you can hear." },
  { id: 4, prompt: "Name 2 things you can smell." },
  { id: 5, prompt: "Name 1 thing you can taste." },
];

export default function GroundingExercise({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  return (
    <GroundingStep
      step={steps[currentStep]}
      onNext={handleNext}
      isLast={currentStep === steps.length - 1}
    />
  );
}
