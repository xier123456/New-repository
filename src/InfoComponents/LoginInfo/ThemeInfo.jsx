import { useState } from "react";
import { AuthContext } from "./Context";
import Login from "../../FromLogin/Login";
import Home from "../../page/Home";
import Header from '../../components/Header'
import { Children } from "react";

function ThemeInfo({children}) {
  const [IsLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ IsLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
export default ThemeInfo;
