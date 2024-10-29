import express from 'express';
import { createLike } from '../controllers/likesController.js';
const router = express.Router();

router.post('/', createLike);


export default router;

