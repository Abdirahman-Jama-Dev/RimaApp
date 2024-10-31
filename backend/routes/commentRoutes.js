import express from 'express';
import { createCommentController } from '../controllers/commentsController.js';
const router = express.Router();

router.post('/', createCommentController);


export default router;
