import 'dotenv/config';
import http from 'http';
import app from './app.js';
import { connectDB } from './config/db.js';
import { initSockets } from './sockets/index.js';


const PORT = process.env.PORT || 5000;


(async () => {
await connectDB(process.env.MONGODB_URI);


const server = http.createServer(app);
const io = initSockets(server, { origin: process.env.CLIENT_ORIGIN || '*' });


// make io available to controllers via req.io
app.set('io', io);


server.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
})();