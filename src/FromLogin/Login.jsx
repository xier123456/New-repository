// src/components/AuthForm.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../InfoComponents/LoginInfo/Context";


const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [userLogin, setUserLogin] = useState(false);

  const navigate = useNavigate();
  const { setIsLogin } = useContext(AuthContext)

  const handleLongin = async () => {
    
    setUserLogin(true);
    setIsLogin(true);
    await new Promise((resolve) =>
      setTimeout(() => {
        return resolve();
      }, 2000)
    )
    navigate("/");
  }

  return (
    <div className="bg-gradient-to-br from-blue-50">
      <div
        className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl border border-white/70 shadow-xl overflow-hidden transition-all duration-500
    m-auto  relative top-40 "
      >
        {/* 顶部选项卡 */}
        <div className="flex border-b border-gray-100">
          <button
            className={`flex-1 py-4 text-center font-medium transition-all duration-300 ${
              activeTab === "login"
                ? "text-teal-600 border-b-2 border-teal-500 bg-gradient-to-b from-white to-teal-50"
                : "text-gray-500 hover:text-teal-500"
            }`}
            onClick={() => setActiveTab("login")}
          >
            登录
          </button>
          <button
            className={`flex-1 py-4 text-center font-medium transition-all duration-300 ${
              activeTab === "register"
                ? "text-teal-600 border-b-2 border-teal-500 bg-gradient-to-b from-white to-teal-50"
                : "text-gray-500 hover:text-teal-500"
            }`}
            onClick={() => setActiveTab("register")}
          >
            注册
          </button>
        </div>

        {/* 表单内容 */}
        <div className="p-8">
          {/* 登录表单 */}
          {activeTab === "login" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  欢迎回来
                </h1>
                <p className="text-center text-gray-500 mb-8">请登录您的账户</p>
              </div>

              <div className="space-y-5">
                {/* 用户名输入 */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="用户名"
                    className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white/70 focus:border-teal-400 focus:ring-1 focus:ring-teal-200 outline-none transition-all"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* 密码输入 */}
                <div className="relative">
                  <input
                    type="password"
                    placeholder="密码"
                    className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white/70 focus:border-teal-400 focus:ring-1 focus:ring-teal-200 outline-none transition-all"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-teal-500 rounded focus:ring-teal-300"
                    />
                    <label className="ml-2 text-sm text-gray-600">记住我</label>
                  </div>
                  <a href="#" className="text-sm text-teal-500 hover:underline">
                    忘记密码?
                  </a>
                </div>

                {userLogin === true ? (
                  <button className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 mt-4 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                   <span className="loading loading-bars loading-lg"></span>
                  </button>
                ) : (
                  <button
                    onClick={handleLongin}
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 mt-4 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    登录
                  </button>
                )}
              </div>

              <div className="text-center text-gray-600 text-sm">
                <span>还没有账号？</span>
                <button
                  onClick={() => setActiveTab("register")}
                  className="text-teal-500 font-medium ml-1 hover:underline cursor-pointer"
                >
                  立即注册
                </button>
              </div>
            </div>
          )}

          {/* 注册表单 */}
          {activeTab === "register" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
                  创建账户
                </h1>
                <p className="text-center text-gray-500 mb-8">
                  加入我们，开启旅程
                </p>
              </div>

              <div className="space-y-5">
                {/* 手机号输入 */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="手机号"
                    className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white/70 focus:border-teal-400 focus:ring-1 focus:ring-teal-200 outline-none transition-all"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                </div>

                {/* 邮箱输入 */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder="邮箱"
                    className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white/70 focus:border-teal-400 focus:ring-1 focus:ring-teal-200 outline-none transition-all"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>

                {/* 密码输入 */}
                <div className="relative">
                  <input
                    type="password"
                    placeholder="密码"
                    className="w-full py-3 px-4 border border-gray-200 rounded-lg bg-white/70 focus:border-teal-400 focus:ring-1 focus:ring-teal-200 outline-none transition-all"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-teal-500 rounded focus:ring-teal-300"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    我同意
                    <a href="#" className="text-teal-500 hover:underline ml-1">
                      服务条款
                    </a>
                    <span>和</span>
                    <a href="#" className="text-teal-500 hover:underline ml-1">
                      隐私政策
                    </a>
                  </label>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 mt-4 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  注册
                </button>
              </div>

              <div className="text-center text-gray-600 text-sm">
                <span>已有账号？</span>
                <button
                  onClick={() => setActiveTab("login")}
                  className="text-teal-500 font-medium ml-1 hover:underline cursor-pointer"
                >
                  立即登录
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 底部装饰 */}
        <div className="h-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400"></div>
      </div>
    </div>
  );
};

export default Login;
