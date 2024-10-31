import jwt from "jsonwebtoken";

const SECRET_KEY = "";

export const authenticate = (req,res) =>{
    const token = req.headers.authorization?.split(" ")[1]
    if (!token) return res.status(401)

    try{
        const decoded = jwt.verify(token,SECRET_KEY);
        req.user= decoded;
    }catch{
        res.status(401).json({error:"Unauthorized"});
    }
};