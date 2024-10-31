import { createComment } from "../services/commentService.js";

export const createCommentController = async (req, res) => {
    try {
        const comment = await createComment(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};