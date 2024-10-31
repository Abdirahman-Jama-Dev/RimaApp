import User from "../models/User.js";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";


const SECRET_KEY = "";

class AuthService {
    async register(userData) {
        const hashedPassword = await bycrpt.hash(userData.password,10);
        const user = await User.create({...userData, hashedPassword});

        return this.generateToken(user);
    }

    async login(username, password) {
        const user = await User.findOne({where: {username}});
        if(!user) throw new Error("User not found!")

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) throw new Error("Invalid Password")

        return this.generateToken(user);
    }

    generateToken(user) {
        return jwt.sign({id:user.id, username:user.username}, SECRET_KEY);
    }

   
}
export default new AuthService();