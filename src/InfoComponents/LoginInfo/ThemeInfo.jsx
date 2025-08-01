import { useState } from "react";
import { AuthContext } from "./Context";
import Login from "../../FromLogin/Login";
import Home from "../../page/Home";
import Header from '../../components/Header'
import { Children } from "react";

function ThemeInfo({children}) {
  const [IsLogin, setIsLogin] = useState(false);
  const {articleCardID,setArticleCardID}=useState(1)

  return (
    <AuthContext.Provider value={{ IsLogin, setIsLogin, articleCardID,setArticleCardID }}>
      {children}
    </AuthContext.Provider>
  );
}
export default ThemeInfo;
