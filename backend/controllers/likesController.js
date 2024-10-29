import Like from '../models/Like.js';

export const createLike = async (req, res) => {
    try {
        const like = await Like.create(req.body);
        res.status(201).json(like);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
