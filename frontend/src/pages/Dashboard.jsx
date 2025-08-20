import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import UserSelector from "../components/UserSelector";
import ClaimButton from "../components/ClaimButton";
import Leaderboard from "../components/Leaderboard";
import HistoryTable from "../components/HistoryTable";
import RewardPopup from "../components/RewardPopup";

const API = "http://localhost:5000/api";

export default function Dashboard() {
  const [currentTab, setCurrentTab] = useState("users");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [history, setHistory] = useState([]);
  const [rewardPoints, setRewardPoints] = useState(null);


  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API}/users`);
      setUsers(res.data);
      setLeaderboard(res.data);
    } catch (err) {
      console.error("fetchUsers error", err);
    }
  };


  const fetchHistory = async () => {
    try {
      const res = await axios.get(`${API}/claims/history?limit=50`);
      setHistory(res.data);
    } catch (err) {
      console.error("fetchHistory error", err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchHistory();
  }, []);


  const handleAddUser = async (name) => {
    try {
      await axios.post(`${API}/users`, { name });
      await fetchUsers();
    } catch (err) {
      console.error("add user error", err);
      alert("Could not add user (check console).");
    }
  };


  const handleClaim = async () => {
    if (!selectedUser) return alert("Select a user first!");
    try {
      const res = await axios.post(`${API}/claims/${selectedUser}`);
      console.log("Claim response:", res.data);

      const awarded =
        res.data?.claimedPoints ??
        res.data?.points ??
        res.data?.claimed ??
        res.data?.claimed_points ??
        (res.data?.data && (res.data.data.claimedPoints ?? res.data.data.points)) ??
        null;

      if (awarded == null) {
        console.warn("Could not find awarded points in response:", res.data);
        setRewardPoints("ok");
      } else {
        setRewardPoints(awarded);
      }

      await fetchUsers();
      await fetchHistory();

      setTimeout(() => setRewardPoints(null), 3500);
    } catch (err) {
      console.error("claim error", err);
      alert("Error claiming points. See console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200">

      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <div className="max-w-5xl mx-auto p-6">
        {currentTab === "users" && (
          <div className="space-y-6">
            <UserSelector
              users={users}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              onAddUser={handleAddUser}
            />
            <ClaimButton onClaim={handleClaim} />
          </div>
        )}

        {currentTab === "leaderboard" && (
          <div className="mt-6">
            <Leaderboard leaderboard={leaderboard} />
          </div>
        )}

        {currentTab === "history" && (
          <div className="mt-6">
            <HistoryTable history={history} />
          </div>
        )}
      </div>

      <RewardPopup points={rewardPoints} onClose={() => setRewardPoints(null)} />
    </div>
  );
}
