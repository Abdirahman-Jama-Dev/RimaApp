import axios from "axios";

const API_URL = "http:/localhost:5000/auth";

class AuthService {
    async register(userData){
        const response = await axios.post(`$[API_URL]/register`, userData);
        return response.data; 
    }

    async login(userData){
        const response = await axios.post(`$[API_URL]/login`, userData);
        return response.data;
    }
}
export default new AuthService();

