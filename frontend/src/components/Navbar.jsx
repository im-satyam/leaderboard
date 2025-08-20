import { useState } from "react";

export default function Navbar({ currentTab, setCurrentTab }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🎯 Leaderboard App</h1>

      <button
        className="md:hidden flex flex-col justify-center items-center"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      <div className="space-x-6 hidden md:flex">
        <button
          onClick={() => setCurrentTab("users")}
          className={currentTab === "users" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"}
        >
          Users
        </button>
        <button
          onClick={() => setCurrentTab("leaderboard")}
          className={currentTab === "leaderboard" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"}
        >
          Leaderboard
        </button>
        <button
          onClick={() => setCurrentTab("history")}
          className={currentTab === "history" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"}
        >
          History
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <button
            onClick={() => {
              setCurrentTab("users");
              setMenuOpen(false);
            }}
            className={currentTab === "users" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"}
          >
            Users
          </button>
          <button
            onClick={() => {
              setCurrentTab("leaderboard");
              setMenuOpen(false);
            }}
            className={currentTab === "leaderboard" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"}
          >
            Leaderboard
          </button>
          <button
            onClick={() => {
              setCurrentTab("history");
              setMenuOpen(false);
            }}
            className={currentTab === "history" ? "text-yellow-400 font-bold" : "hover:text-yellow-400"}
          >
            History
          </button>
        </div>
      )}
    </nav>
  );
}
