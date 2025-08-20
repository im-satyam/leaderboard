import { addPoints } from '../services/userService.js';
import { logClaim, getHistory } from '../services/claimService.js';
import { randomPoints } from '../utils/random.js';
export const claimForUser = async (req, res, next) => {
try {
const { userId } = req.params;
const pts = randomPoints(1, 10);
const updatedUser = await addPoints(userId, pts);
if (!updatedUser) return res.status(404).json({ error: 'User not found' });
await logClaim({ userId, points: pts });
req.io.emit('leaderboard:updated');
res.json({
user: {
_id: updatedUser._id,
name: updatedUser.name,
totalPoints: updatedUser.totalPoints
},
claimedPoints: pts
});
} catch (err) {
next(err);
}
};
export const listHistory = async (req, res, next) => {
try {
const { userId, limit } = req.query;
const history = await getHistory({ userId, limit: Number(limit) || 100 });
res.json(history);
} catch (err) {
next(err);
}
};