import ClaimHistory from '../models/ClaimHistory.js';
export const logClaim = async ({ userId, points }) => {
const doc = new ClaimHistory({ userId, points });
return doc.save();
};
export const getHistory = async ({ limit = 100, userId } = {}) => {
const query = {};
if (userId) query.userId = userId;
return ClaimHistory
.find(query)
.sort({ createdAt: -1 })
.limit(limit)
.populate('userId', 'name');
};