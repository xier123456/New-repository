import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { IoHelpCircleSharp } from "react-icons/io5";
import { RiMoneyCnyBoxFill } from "react-icons/ri";
import { FaFeather } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

import userImg from "../assets/up.jpg";
import LoginToast from "./state/LoginToast";
import { useRef } from "react";
import { AuthContext } from "../InfoComponents/LoginInfo/Context";

//10  2
const Header = () => {
  const [user, setuser] = useState(false);
  const [LoginStart, setLoginStart] = useState(false);
  const navbarRef = useRef(null);
  const[HeaderClearicons,setHeaderClearicons]=useState(true)
 const lastScrollY = useRef(0);
  const{IsLogin,setIsLogin}=useContext(AuthContext)

  const [finalFontStyle, setFinalFontStyle] = useState(true);

const throttle =(func,limit)=> {
  let lastFunc
  let lastRan
  return function(){
    const context=this
    const args=arguments
    if(!lastRan){
      func.apply(context,args)
      lastRan=Date.now()
    }else{
      clearTimeout(lastFunc)
      lastFunc=setTimeout(() => {
        if(Date.now()-lastRan>=limit){
          func.apply(context,args)
          lastRan=Date.now()
        }
        
      }, limit-(Date.now()-lastRan));
    }
  }
}

useEffect(()=>{
  const handleScroll=()=>{
    const windowscroll = window.scrollY;

    if (windowscroll > lastScrollY && windowscroll > 150) {
      setFinalFontStyle(false);
      setHeaderClearicons(false)
      
    } else {
      setFinalFontStyle(true);
      setHeaderClearicons(true)
    }
    lastScrollY.current=windowscroll<=0?0:windowscroll
  }
  const throttledHandleScroll=throttle(handleScroll,100)

  window.addEventListener('scroll',throttledHandleScroll)

  return()=>{
    window.removeEventListener('scroll',throttledHandleScroll)
  }

  
},[])

  // window.addEventListener("scroll", () => {
  //   const windowscroll = window.scrollY;
  //   if (windowscroll > lastScrollY && windowscroll > 150) {
  //     setFinalFontStyle(false);
  //     setHeaderClearicons(false)
      
  //   } else {
  //     setFinalFontStyle(true);
  //     setHeaderClearicons(true)
  //   }
  // })

  const FontStyleA =
    "text-[17px] z-10 btn p-4 btn-ghost btn-info mr-4 hover:text-white transition-all duration-500 ease-in-out";
  const FontStyleB =
    "text-[16px]  z-10 btn p-4 btn-ghost btn-info mr-4 hover:text-white transition-all duration-500 ease-in-out";

  useEffect(() => {
    // if (juLogin.get("setRLogin") === "true") {
      if (IsLogin) {
      setuser(true)
      setLoginStart(true);
      const timeId = setTimeout(() => setLoginStart(false), 1200);
      return () => clearTimeout(timeId);
    }
  }, [IsLogin])

  const handleUserLongin =  () => {
    setuser(false);
    setIsLogin(false)
  };

  return (
    <div>
      {LoginStart === true ? <LoginToast /> : undefined}
      <div
        ref={navbarRef}
        className=" z-10 navbar  bg-base-100  fixed  bg-transparent border-0"
      >
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">首页</Link>
              </li>
              <li>
                <Link to="/article">学习笔记</Link>
              </li>
              <li>
                <a>友链</a>
                <ul className="p-2">
                  <li>
                    <Link to="/tip">打赏</Link>
                  </li>
                  <li>
                    <Link to="/friend">好友</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Miscellaneous">说说</Link>
              </li>
              <li>
                <Link to="/Technology">个人发展图</Link>
              </li>
              <li>
                <Link to="/about">关于</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hover:text-white border-0 hover:bg-blue-400  transition-all duration-700 ease-in-out">
            HaoWhite
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={finalFontStyle?"menu menu-horizontal px-1 text-blank bg-white/0  rounded-lg "
            :"menu menu-horizontal px-1 bg-white/80 text-blank rounded-lg shadow-2xl"}>
            <li className="ml-2">
              <Link to="/" className={finalFontStyle ? FontStyleA : FontStyleB}>
                <FaHome />
                {HeaderClearicons?'首页':''}
                
              </Link>
            </li>
            <li>
              <Link
                to="/article"
                className={finalFontStyle ? FontStyleA : FontStyleB}
              >
                <MdArticle />
                {HeaderClearicons?'学习笔记':''}
                
                
              </Link>
            </li>
            <li>
              <details>
                <summary className={finalFontStyle ? FontStyleA : FontStyleB}>
                  <FaFeather />
                  {HeaderClearicons?'友链':''}
                  
                 
                </summary>
                <ul className="p-1">
                  <li>
                    <Link
                      to="/tip"
                      className="btn btn-dash btn-info p-4 m-1 ml-2 hover:text-white transition-all duration-700 ease-in-out"
                    >
                      <RiMoneyCnyBoxFill />
                      {HeaderClearicons?'打赏':''}
                      
                      
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/friend"
                      className="btn btn-dash btn-info m-1 p-4 ml-2 hover:text-white transition-all duration-700 ease-in-out"
                    >
                      <FaUserFriends />
                      {HeaderClearicons?'好友':''}
                      
                      
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                to="/Miscellaneous"
                className={finalFontStyle ? FontStyleA : FontStyleB}
              >
                <RiMessage3Fill />
                {HeaderClearicons?'说说':''}
                
                
              </Link>
            </li>
            <li>
              <Link
                to="/Technology"
                className={finalFontStyle ? FontStyleA : FontStyleB}
              >
                <GrTechnology />
                {HeaderClearicons?'个人发展图':''}
                
                
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={finalFontStyle ? FontStyleA : FontStyleB}
              >
                <IoHelpCircleSharp />
                {HeaderClearicons?'关于':''}
                
                
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <span>
              <div className="dropdown dropdown-start">
                {/* <div tabindex="0" role="button" className="btn relative right-5">
                  账户
                </div> */}
                <img
                  src={userImg}
                  tabIndex="0"
                  role="button"
                  className="btn btn-circle relative right-8 p-0"
                />
                <ul
                  tabIndex="0"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-28  shadow-sm relative right-1 mt-2"
                >
                  <li>
                    <Link>个人信息</Link>
                  </li>
                  <li>
                    <Link onClick={handleUserLongin} className="text-red-500">
                      退出登录？
                    </Link>
                  </li>
                </ul>
              </div>
            </span>
          ) : (
            <Link
              to="/Login"
              className="btn btn-dash btn-error hover:text-white transition-all duration-700 ease-in-out"
            >
              登录
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
