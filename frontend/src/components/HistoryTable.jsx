export default function HistoryTable({ history = [] }) {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-yellow-800 flex items-center gap-2">
        📜 Claim History
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-yellow-300 text-yellow-900 rounded-lg">
              <th className="p-3 text-left">👤 User</th>
              <th className="p-3 text-left">⭐ Points</th>
              <th className="p-3 text-left">⏰ Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((h, index) => {
              const userName =
                h.user?.name ??
                h.userId?.name ??
                (h.userId && typeof h.userId === "string" ? h.userId : "Unknown");
              const pts =
                h.points ??
                h.pointsAwarded ??
                h.claimedPoints ??
                h.claimed_at ??
                0;
              const date =
                h.claimedAt ??
                h.createdAt ??
                h.claimed_at ??
                h.created_at ??
                null;

              return (
                <tr
                  key={h._id ?? JSON.stringify(h)}
                  className={`border-t hover:bg-yellow-100 transition ${
                    index % 2 === 0 ? "bg-yellow-50" : "bg-yellow-100/60"
                  }`}
                >
                  <td className="p-3 flex items-center gap-2 font-medium text-yellow-900">
                    <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 text-white font-bold rounded-full shadow-md">
                      {userName[0]?.toUpperCase() ?? "?"}
                    </span>
                    {userName}
                  </td>
                  <td className="p-3 font-bold text-yellow-800">{pts} ⭐</td>
                  <td className="p-3 text-sm text-gray-700">
                    {date ? new Date(date).toLocaleString() : "-"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
