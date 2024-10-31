import { createLike } from "../services/likeService.js";

export const createLikeController = async (res, req)=>{
    try {
        const post = await createLike(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}