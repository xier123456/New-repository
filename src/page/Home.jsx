import React from "react";
import up from "../assets/up.jpg";
import { FaBilibili } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { FaTiktok } from "react-icons/fa";



const Home = () => {
 
  return (
    <div>
      <div className="h-screen bg-[url('./assets/71d4a.webp')] bg-cover bg-center bg-no-repeat  to-white p-6">
        <div className="hero  min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse gap-22">
            <div className=" ">
            <img src={up} className="max-w-sm rounded-lg shadow-2xl w-50 " />
            </div>
            <div>
              
              <h1 className="mt-2 text-5xl font-bold text-center">Raect banzai!</h1>

              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat
              </p>
              <div className="flex gap-10 justify-center">
                <VscGithub  className="btn bg-black border-0  text-white border-black p-0 p-2  mt-2" />
                <FaBilibili className="btn bg-pink-400 border-0 text-white border-black p-0 p-2  mt-2" />
               <FaTiktok className="btn bg-black border-0 text-white border-black p-0 p-2  mt-2" />
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
