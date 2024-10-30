import Like from "../models/Like";

export const createLike = async (data) =>{
    return await Like.create(data);
}