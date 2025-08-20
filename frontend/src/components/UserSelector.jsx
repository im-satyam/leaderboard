import { useState } from "react";

export default function UserSelector({ users, selectedUser, setSelectedUser, onAddUser }) {
  const [newUser, setNewUser] = useState("");
  const [error, setError] = useState("");

  const handleAddUser = () => {
    if (!newUser.trim()) {
      setError("Please enter a name to add a user.");
      return;
    }
    onAddUser(newUser);
    setNewUser("");
    setError("");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl shadow-lg">
      <label className="block mb-3 font-bold text-yellow-900 text-lg">👤 Select User</label>
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        className="w-full p-3 border-2 border-yellow-400 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-yellow-900 font-medium"
      >
        <option value="">-- Choose User --</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>
            {u.name}
          </option>
        ))}
      </select>

      <div className="mt-6">
        <input
          type="text"
          value={newUser}
          onChange={(e) => {
            setNewUser(e.target.value);
            setError("");
          }}
          placeholder="Enter new user name"
          className="w-full p-3 border-2 border-yellow-400 rounded-xl mb-3 bg-white text-yellow-900 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {error && (
          <div className="mb-3 text-red-600 text-sm font-semibold bg-red-100 rounded-lg px-3 py-2 border border-red-200">
            {error}
          </div>
        )}
        <button
          onClick={handleAddUser}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold px-4 py-3 rounded-xl shadow-md transition transform hover:scale-105"
        >
          ➕ Add User
        </button>
      </div>
    </div>
  );
}
