import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import claimRoutes from './routes/claimRoutes.js';
const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*', credentials: true }));
// Attach io to requests (set in server.js)
app.use((req, _res, next) => {
req.io = app.get('io');
next();
});


app.get('/', (_req, res) => res.json({ ok: true, service: 'leaderboard-api' }));
app.use('/api/users', userRoutes);
app.use('/api/claims', claimRoutes);


// Error handler
app.use((err, _req, res, _next) => {
console.error(err);
res.status(500).json({ error: 'Internal Server Error', details: err.message });
});


export default app;