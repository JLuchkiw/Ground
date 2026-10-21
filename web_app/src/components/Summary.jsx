export default function Summary({ responses, onRestart }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-sky-700 text-center">
        Well done 🐋
      </h2>

      <p className="text-gray-700 mb-6 text-center">
        You've completed the grounding exercise.
        Take a moment to reflect on what you noticed.
      </p>

      <h3 className="text-lg font-semibold text-sky-700 mb-4">
        Your Reflections
      </h3>

      <div className="space-y-4 mb-6">
        {responses.map((item, index) => (
          <div
            key={index}
            className="bg-sky-50 rounded-lg p-4"
          >
            <p className="text-sm font-semibold text-sky-700 mb-1">
              {item.category}
            </p>

            <p className="text-gray-700 font-medium">
              {item.prompt}
            </p>

            <p className="text-gray-600 mt-2">
              {item.response}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={onRestart}
          className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold transition"
        >
          Start Again
        </button>
      </div>
    </div>
  );
}