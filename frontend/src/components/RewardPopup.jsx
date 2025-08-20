export default function RewardPopup({ points, onClose }) {
  if (points == null) return null;

  const isNumber = typeof points === "number";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full animate-scale-up">
        <h2 className="text-2xl font-bold text-green-600">🎉 Congratulations!</h2>
        <p className="mt-3 text-lg">You just earned</p>

        {isNumber ? (
          <p className="mt-2 text-4xl font-extrabold text-yellow-500">{points} pts</p>
        ) : (
          <p className="mt-2 text-2xl font-semibold text-stone-700">Success</p>
        )}

        <button
          onClick={onClose}
          className="mt-6 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
        >
          OK
        </button>
      </div>
    </div>
  );
}
