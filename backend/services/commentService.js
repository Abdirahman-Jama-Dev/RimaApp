import Comment from "../models/Comment";

export const createComment = async (data) => {
    return await Comment.create(data);
};