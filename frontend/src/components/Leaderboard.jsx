export default function Leaderboard({ leaderboard = [] }) {
  // normalize data
  const normalized = leaderboard.map((u) => ({
    _id: u._id ?? u.id,
    name: u.name ?? "Mystery",
    totalPoints: u.totalPoints ?? u.points ?? 0,
    avatar: u.avatar ?? null, 
  }));

  normalized.sort((a, b) => b.totalPoints - a.totalPoints);

  const top3 = normalized.slice(0, 3);
  const rest = normalized.slice(3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-50 p-6 rounded-xl shadow-inner">
      <h2 className="text-2xl font-extrabold text-yellow-800 text-center mb-8 drop-shadow">
        🏆 Monthly Wealth Ranking
      </h2>

      <div className="flex justify-center items-end gap-6 mb-10">

        {top3[1] && (
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center border-4 border-blue-400 shadow-lg">
              <img
                src={top3[1].avatar || `https://ui-avatars.com/api/?name=${top3[1].name}`}
                alt={top3[1].name}
                className="w-16 h-16 rounded-full"
              />
            </div>
            <span className="mt-2 text-gray-700 font-bold">{top3[1].name}</span>
            <span className="text-sm text-gray-500">{top3[1].totalPoints} pts</span>
            <div className="mt-2 bg-blue-200 w-16 h-12 rounded-t-lg flex items-center justify-center font-bold">2</div>
          </div>
        )}

 
        {top3[0] && (
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center border-4 border-yellow-400 shadow-lg">
              <img
                src={top3[0].avatar || `https://ui-avatars.com/api/?name=${top3[0].name}`}
                alt={top3[0].name}
                className="w-20 h-20 rounded-full"
              />
            </div>
            <span className="mt-2 text-gray-700 font-bold">{top3[0].name}</span>
            <span className="text-sm text-gray-500">{top3[0].totalPoints} pts</span>
            <div className="mt-2 bg-yellow-300 w-20 h-16 rounded-t-lg flex items-center justify-center font-bold">1</div>
          </div>
        )}

     
        {top3[2] && (
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center border-4 border-amber-700 shadow-lg">
              <img
                src={top3[2].avatar || `https://ui-avatars.com/api/?name=${top3[2].name}`}
                alt={top3[2].name}
                className="w-16 h-16 rounded-full"
              />
            </div>
            <span className="mt-2 text-gray-700 font-bold">{top3[2].name}</span>
            <span className="text-sm text-gray-500">{top3[2].totalPoints} pts</span>
            <div className="mt-2 bg-amber-300 w-16 h-10 rounded-t-lg flex items-center justify-center font-bold">3</div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-yellow-200">
            <tr>
              <th className="p-2 text-left">Rank</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Points</th>
            </tr>
          </thead>
          <tbody>
            {rest.map((u, i) => (
              <tr key={u._id} className="border-t hover:bg-yellow-50">
                <td className="p-2 font-semibold">{i + 4}</td>
                <td className="p-2 flex items-center gap-2">
                  <img
                    src={u.avatar || `https://ui-avatars.com/api/?name=${u.name}`}
                    alt={u.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {u.name}
                </td>
                <td className="p-2">{u.totalPoints} pts</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
