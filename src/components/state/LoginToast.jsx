const LoginToast = () => (
  <div className="fixed inset-0 flex items-center justify-center z-50 opacity-100 transition-opacity duration-500">
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-2xl transform scale-100 transition-all duration-500">
      <div className="text-center flex items-center justify-center space-x-2 text-xl font-bold">
        <svg
          className="w-6 h-6 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <span>欢迎回来~</span>
      </div>
    </div>
  </div>
);

export default LoginToast;
