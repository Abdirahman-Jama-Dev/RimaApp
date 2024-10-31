import express from 'express';
import { createLikeController } from '../controllers/likesController.js';
const router = express.Router();

router.post('/', createLikeController);


export default router;

