import React, {createContext, useState, useEffect} from "react";
import Authservice from "../services/authService.js";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [token,setToken] = useState(localStorage.getItem("token"));

    useEffect(()=>{
        if (token) {
            setUser(JSON.parse(local.storage.getItem("user")));

        }
        
    },[token]);

    const register = async (userData) => {
        const { token } = await Authservice.register(userData);
        setToken(token);
        localStorage.setItem("token", token);
      };
    
      const login = async (userData) => {
        const { token } = await Authservice.login(userData);
        setToken(token);
        localStorage.setItem("token", token);
      };
    
      const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
      };
    
      return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
          {children}
        </AuthContext.Provider>
      );

}

export const useAuth = () => React.useContext(AuthContext);