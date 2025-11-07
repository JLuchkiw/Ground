import { useState } from "react";
import SafetyCheck from "./components/SafetyCheck.jsx";
import GroundingExercise from "./components/GroundingExercise.jsx";
import Summary from "./components/Summary.jsx";
import CrisisSupport from "./components/CrisisSupport.jsx";

export default function App() {
  const [stage, setStage] = useState("safety");

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 flex items-center justify-center">
      {stage === "safety" && (
        <SafetyCheck
          onSafe={() => setStage("exercise")}
          onNeedHelp={() => setStage("crisis")}
        />
      )}
      {stage === "crisis" && <CrisisSupport onBack={() => setStage("safety")} />}
      {stage === "exercise" && (
        <GroundingExercise onComplete={(responses) => setStage("summary")} />
      )}
      {stage === "summary" && <Summary />}
    </div>
  );
}
