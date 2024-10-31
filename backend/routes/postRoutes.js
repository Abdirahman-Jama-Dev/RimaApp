import express from 'express';
import { createPostController } from '../controllers/postsControllers.js';
const router = express.Router();

router.post('/', createPostController);


export default router;
