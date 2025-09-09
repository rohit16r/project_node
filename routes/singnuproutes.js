
import express from 'express';
import signing from '../controllers/signupcontroller.js'; 

const router = express.Router();

// router.post('/signup"', signing);
router.post('/signup', signing);

export default router;
