
import { useEffect, useState } from "react";

export default function GroundingExercise({ onComplete }) {
  // Existing exercise state
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [promptIndex, setPromptIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [responses, setResponses] = useState([]);

  // NEW: API state
  const [groundingPrompts, setGroundingPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // NEW: Fetch exercise configuration from FastAPI
  useEffect(() => {
    const controller = new AbortController();

    async function loadExercise() {
      try {
        const result = await fetch(
          "http://127.0.0.1:8000/api/exercise",
          { signal: controller.signal }
        );

        if (!result.ok) {
          throw new Error(`Server returned ${result.status}`);
        }

        const data = await result.json();

        if (
          !Array.isArray(data.steps) ||
          data.steps.length === 0 ||
          data.steps.some(
            (step) =>
              !step.title ||
              !Array.isArray(step.prompts) ||
              step.prompts.length === 0
          )
        ) {
          throw new Error("Invalid exercise configuration");
        }

        setGroundingPrompts(data.steps);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Unable to load the exercise. Please try again.");
          console.error("Exercise loading failed:", err);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadExercise();

    return () => controller.abort();
  }, []);

  // Existing navigation and response tracking
  const handleNext = () => {
    const currentCategory = groundingPrompts[categoryIndex];
    const currentPrompt = currentCategory.prompts[promptIndex];

    const isLastPromptInCategory =
      promptIndex === currentCategory.prompts.length - 1;

    const isLastCategory =
      categoryIndex === groundingPrompts.length - 1;

    // Save current response
    const updatedResponses = [
      ...responses,
      {
        category: currentCategory.title,
        prompt: currentPrompt,
        response: response.trim(),
      },
    ];

    setResponses(updatedResponses);
    setResponse("");

    if (!isLastPromptInCategory) {
      setPromptIndex(promptIndex + 1);
    } else if (!isLastCategory) {
      setCategoryIndex(categoryIndex + 1);
      setPromptIndex(0);
    } else {
      onComplete(updatedResponses);
    }
  };

  // NEW: Loading screen
  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full">
        <p className="text-sky-700">
          Preparing your grounding exercise...
        </p>
      </div>
    );
  }

  // NEW: Error screen
  if (error) {
    return (
      <div
        role="alert"
        className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full"
      >
        <p className="text-gray-700 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Exercise data is available after loading
  const currentCategory = groundingPrompts[categoryIndex];
  const currentPrompt = currentCategory.prompts[promptIndex];

  // Existing exercise interface
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-sky-700">
        {currentCategory.title}
      </h2>

      <p className="text-gray-700 mb-6">{currentPrompt}</p>

      <input
        type="text"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && response.trim()) {
            handleNext();
          }
        }}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
        placeholder="Type your answer..."
      />

      <button
        onClick={handleNext}
        disabled={!response.trim()}
        className={`px-6 py-2 rounded-full font-semibold transition ${
          response.trim()
            ? "bg-sky-500 hover:bg-sky-600 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {promptIndex === currentCategory.prompts.length - 1 &&
        categoryIndex === groundingPrompts.length - 1
          ? "Finish"
          : "Next"}
      </button>
    </div>
  );
}
