import express from 'express';
import { createComment } from '../controllers/commentsController';
const router = express.Router();

router.post('/', createComment);


export default router;
