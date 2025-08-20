import { Router } from 'express';
import { claimForUser, listHistory } from '../controllers/claimController.js';


const router = Router();


router.post('/:userId', claimForUser); // POST /api/claims/:userId
router.get('/history', listHistory); // GET /api/claims/history?userId=&limit=


export default router;