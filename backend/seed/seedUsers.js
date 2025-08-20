import 'dotenv/config';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import User from '../models/User.js';


const initialUsers = [
'Rahul', 'Kamal', 'Sanak', 'Aisha', 'Neha',
'Rohan', 'Anita', 'Vikram', 'Priya', 'Arjun'
];


(async () => {
try {
await connectDB(process.env.MONGODB_URI);


const existing = await User.countDocuments();
if (existing === 0) {
await User.insertMany(initialUsers.map(name => ({ name })));
console.log('✅ Seeded 10 users');
} else {
console.log(`ℹ️ Users already present (${existing}), skipping seed.`);
}
} catch (e) {
console.error(e);
} finally {
await mongoose.connection.close();
process.exit(0);
}
})();