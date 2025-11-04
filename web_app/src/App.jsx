import React, { useState } from "react";

function App() {
  const [stage, setStage] = useState("safety"); // "safety", "exercise", "summary"

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-300 flex items-center justify-center">
      {stage === "safety" && <h1>Safety Check Component Here</h1>}
      {stage === "exercise" && <h1>Grounding Exercise Component Here</h1>}
      {stage === "summary" && <h1>Summary Component Here</h1>}
    </div>
  );
}

export default App;
