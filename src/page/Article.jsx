
import {  useDispatch, useSelector } from "react-redux";
import Img1 from "../assets/ArticleImg1.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

import {useState } from "react";
import { AuthContext } from "../InfoComponents/LoginInfo/Context";
import { setCurrentArticle } from "../Redux/articleCard";

const Article = () => {


const navigate= useNavigate()




 const res=useSelector(state=>state.articleCard)

   const dispatch= useDispatch()

  const handleCard=(id)=>{
    dispatch(setCurrentArticle(id))
    navigate(`/NotePage/${id}`)
    
  }
 const[articles]=useState(res.notesCard)

  return (
    
    <div className="pt-30 min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 "
    >
      <h1 className="m-5 text-5xl font-bold text-center ">技术笔记</h1>
      {articles.map((article) => (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-[55vw] m-auto p-4"  key={article.id}  onClick={()=>handleCard(article.id)}>
         
            <div 
             
            className="group bg-white rounded-xl shadow-[0_2px_12px_rgba(59,130,246,0.07)] hover:shadow-[0_12px_16px_rgba(59,130,246,0.12)] transition-all duration-300 overflow-hidden border border-[#EFF6FF]">
      <div className="p-6 sm:p-7">
        {/* 标题 - 主蓝色，hover时加深微妙层次 */}
        <h3 className="text-xl sm:text-2xl font-semibold  mb-3 group-hover:text-[#1D4ED8] transition-colors duration-300 leading-tight font-sans">
          {article.title}
        </h3>
        
        {/* 摘要 - 浅蓝灰，保持柔和对比 */}
        <p className="text-[#64748B] mb-5 line-clamp-2 sm:line-clamp-3 text-sm sm:text-base leading-relaxed font-sans">
          本文介绍了在React项s目开发中提升应用性能的实用方法，包括组件懒加载、虚拟列表实现以及状态管理优化等技巧，适合中高级开发者参考...
        </p>
        
        {/* 元数据区 - 淡蓝分隔，标签用主色浅变体 */}
        <div className="flex justify-between items-center text-xs sm:text-sm pt-3 border-t border-[#EFF6FF]">
          <span className="text-[#94A3B8]">{article.date}</span>
          <span className="bg-[#EFF6FF] text-[#2563EB] px-2.5 py-0.5 rounded-full">技术笔记</span>
        </div>
      </div>
    </div>
         
        </div>
      ))}
    </div>
    
  );
};

export default Article;
