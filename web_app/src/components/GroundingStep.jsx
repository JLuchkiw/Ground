import { useState } from "react";
import { GroundingPrompts } from "../data/GroundingPrompts.js";

export default function GroundingExercise({ onComplete }) {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [promptIndex, setPromptIndex] = useState(0);
  const [response, setResponse] = useState("");
  const [responses, setResponses] = useState([]);

  const currentCategory = GroundingPrompts[categoryIndex];
  const currentPrompt = currentCategory.prompts[promptIndex];

const handleNext = () => {
    const isLastPromptInCategory =
      promptIndex === currentCategory.prompts.length - 1;
    const isLastCategory = categoryIndex === GroundingPrompts.length - 1;

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
  setResponse(""); // clear input

if (!isLastPromptInCategory) {
      // Move to next prompt within the same category
      setPromptIndex(promptIndex + 1);
    } else if (!isLastCategory) {
      // Move to the first prompt of the next category
      setCategoryIndex(categoryIndex + 1);
      setPromptIndex(0);
    } else {
      // We've reached the very end — go to summary
      onComplete(updatedResponses);
    }
  };

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
        categoryIndex === GroundingPrompts.length - 1
          ? "Finish"
          : "Next"}
      </button>
    </div>
  );
}
