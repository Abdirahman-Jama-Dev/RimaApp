import User from "../models/User.js";

export const createUser = async (data) =>{
    return await User.create(data);
}