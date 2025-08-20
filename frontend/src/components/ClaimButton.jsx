export default function ClaimButton({ onClaim }) {
  return (
    <button
      onClick={onClaim}
      className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-bold shadow"
    >
      Claim Points 🎉
    </button>
  );
}
