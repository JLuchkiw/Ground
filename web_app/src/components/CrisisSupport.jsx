export default function CrisisSupport({ onBack }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-red-600">You’re Not Alone</h1>
      <p className="text-gray-700 mb-6">
        If you’re in danger or need to talk, help is available:
      </p>

      <div className="flex flex-col gap-4">
        <a
          href="tel:911"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition"
        >
          Call 911
        </a>
        <a
          href="tel:988"
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-semibold transition"
        >
          Call or Text 988
        </a>
        <button
          onClick={() => alert('Reach out to someone you trust. You matter. ❤️')}
          className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full font-semibold transition"
        >
          Contact a friend or family member
        </button>
      </div>

      <button
        onClick={onBack}
        className="mt-6 underline text-sky-700 hover:text-sky-900"
      >
        Back to Safety Check
      </button>
    </div>
  );
}
