import User from "../models/User";

export const createUser = async (data) =>{
    return await User.create(data);
}