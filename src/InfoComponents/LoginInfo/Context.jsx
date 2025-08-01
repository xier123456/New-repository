import { createContext } from "react";

export const AuthContext=createContext({
    IsLogin:false,
    articleCardID:1,
    setIsLogin:()=>{},
    setArticleCardID:()=>{}
    
})