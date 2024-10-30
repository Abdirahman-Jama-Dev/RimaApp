import Post from "../models/Post";

export const createPost = async (req,res)=>{
  return await Post.create(data);
}