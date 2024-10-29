import express from 'express';
import { createPost } from '../controllers/postsControllers';
const router = express.Router();

router.post('/', createPost);


export default router;
