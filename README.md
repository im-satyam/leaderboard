# 🎯 Leaderboard App

Welcome to the **Leaderboard App**!  
A fun and interactive web application to manage users, claim points, and view real-time leaderboards.  
Built with **React**, **Vite**, **TailwindCSS**, and a simple **Node.js/Express** backend.

---

## ✨ Features

- 👤 **User Management:** Add and select users easily.
- 🏆 **Leaderboard:** See who’s on top in real-time.
- ⭐ **Claim Points:** Users can claim points and see their history.
- 📜 **History:** Track all point claims with timestamps.
- 📱 **Responsive UI:** Looks great on all devices!

---

## 🚀 Demo

![Leaderboard Demo](https://em-content.zobj.net/source/microsoft-teams/337/trophy_1f3c6.png)
![Responsive UI](https://em-content.zobj.net/source/microsoft-teams/337/star_2b50.png)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/im-satyam/leaderboard.git
cd leaderboard
```

---

### 2. Backend Setup

1. Go to the backend directory:

    ```bash
    cd backend
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory. Example:

    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/leaderboard
    
    ```

    - Adjust the variables as needed for your environment.

4. (Optional) Add sample data to your database if required.  
   You can create a `data/` folder or use a script like `seed.js` to populate initial users or leaderboard entries.

5. Start the backend server:

    ```bash
    npm run dev
    ```

   The backend will run by default at [http://localhost:5000](http://localhost:5000).



### 3. Frontend Setup

1. Open a new terminal and go to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm run dev
    ```

   The app will be running at [http://localhost:5173](http://localhost:5173).

---

## 📂 Project Structure

```
assingment/
  backend/
    controllers/
    models/
    routes/
    data/
    .env
    server.js
    package.json
  frontend/
    src/
      components/
      pages/
      App.jsx
      main.jsx
    index.html
    package.json
    tailwind.config.js
    vite.config.js
  README.md
```

---

## 🖼️ Screenshots

| Home Page | Leaderboard | History |
|-----------|-------------|---------|
| ![Home](https://em-content.zobj.net/source/microsoft-teams/337/house_1f3e0.png) | ![Leaderboard](https://em-content.zobj.net/source/microsoft-teams/337/trophy_1f3c6.png) | ![History](https://em-content.zobj.net/source/microsoft-teams/337/scroll_1f4dc.png) |

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT

---

> Made with ❤️ using React, Vite, TailwindCSS, and Node.js.