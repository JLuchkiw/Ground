import GroundingStep from "./GroundingStep";

export default function GroundingExercise({ onComplete }) {
  // GroundingStep now manages all prompts and categories
  return <GroundingStep onComplete={onComplete} />;
}