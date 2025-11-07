export default function SafetyCheck({ onSafe, onNeedHelp }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-sky-700">Safety Check</h1>
      <p className="text-gray-700 mb-6">
        Before we begin, are you in a safe space where you can take a moment?
      </p>
      <div className="flex flex-col gap-4">
        <button
            onClick={onSafe}
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold transition"
        >
            Yes, I’m safe
        </button>
        <button
            onClick={onNeedHelp}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition"
        >
            No, I need help
        </button>
      </div>
    </div>
  );
}
