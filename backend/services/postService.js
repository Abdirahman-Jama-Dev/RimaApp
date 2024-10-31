import Post from "../models/Post.js";

export const createPost = async (req,res)=>{
  return await Post.create(data);
}