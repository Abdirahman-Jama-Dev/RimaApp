import Comment from "../models/Comment";

export const createComment= async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
