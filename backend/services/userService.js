import User from '../models/User.js';
export const getRankedUsers = async () => {
const users = await User.find().sort({ totalPoints: -1, createdAt: 1 });
return users.map((u, idx) => ({
_id: u._id,
name: u.name,
totalPoints: u.totalPoints,
rank: idx + 1
}));
};


export const createUser = async (name) => {
const user = new User({ name });
return user.save();
};


export const addPoints = async (userId, points) => {
return User.findByIdAndUpdate(
userId,
{ $inc: { totalPoints: points } },
{ new: true, runValidators: true }
);
};