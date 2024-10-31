import Comment from "../models/Comment.js";

export const createComment = async (data) => {
    return await Comment.create(data);
};