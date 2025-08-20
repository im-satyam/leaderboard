import { createUser, getRankedUsers } from '../services/userService.js';
export const listUsers = async (req, res, next) => {
try {
const users = await getRankedUsers();
res.json(users);
} catch (err) {
next(err);
}
};
export const addUser = async (req, res, next) => {
try {
const { name } = req.body;
if (!name) return res.status(400).json({ error: 'Name is required' });
const user = await createUser(name);
req.io.emit('leaderboard:updated');
res.status(201).json(user);
} catch (err) {
if (err.code === 11000) {
return res.status(409).json({ error: 'User with this name already exists' });
}
next(err);
}
};