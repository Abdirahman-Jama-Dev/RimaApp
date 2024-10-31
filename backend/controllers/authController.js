import AuthService from "../services/authService.js";

class AuthController{
    async register(req,res){
        try{
            const token = await AuthService.register(req.body);
            res.status(201).json({token})
        }catch{
            res.status(400).json({error: error.message})
        }
    }

    async login(req,res) {
        try{
            const token = await AuthService.login(req.body.username, req.body.password);
            res(201).json({token});
        }catch{
        res.status(400).json({error:error.message});
     }
    }
}
export default new AuthController();