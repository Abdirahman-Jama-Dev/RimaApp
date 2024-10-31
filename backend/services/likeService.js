import Like from "../models/Like.js";

export const createLike = async (data) =>{
    return await Like.create(data);
}