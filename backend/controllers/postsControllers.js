import { createPost } from "../services/postService.js";

export const createPostController= async (req, res) => {
    try {
        const post = await createPost(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
