export default function GroundingStep({ step, onNext, isLast }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-sky-700">{step.prompt}</h2>
      <textarea
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring focus:ring-sky-200"
        rows="4"
        placeholder="Type your response here..."
      />
      <button
        onClick={onNext}
        className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold transition"
      >
        {isLast ? "Finish" : "Next"}
      </button>
    </div>
  );
}
