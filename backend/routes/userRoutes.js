import { Router } from 'express';
import { listUsers, addUser } from '../controllers/userController.js';
const router = Router();
router.get('/', listUsers); // GET /api/users
router.post('/', addUser); // POST /api/users { name }
export default router;