export default function Summary() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-sky-700">Well done 🐋</h2>
      <p className="text-gray-700 mb-6">
        You’ve completed the grounding exercise. You're here, you're now, you're loved, you're safe.
        Breathe deeply and remember that you are not alone.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold transition"
      >
        Restart
      </button>
    </div>
  );
}
