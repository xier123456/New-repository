import React from 'react'
import up from '../assets/up.jpg'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 md:p-12 flex flex-col items-center">
      {/* 主容器 */}
      <div className="max-w-3xl w-full mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 tracking-wide">
            关于我
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-4 rounded-full opacity-70"></div>
        </div>
        

        <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">

          <div className="p-8 md:p-10 text-center">
    
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img 
                  src={up}
                  alt="个人头像" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
          
            
            </div>
            

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">昊小白</h3>
            <p className="text-blue-500 mb-4">前端学习者</p>
            

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">React</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">JavaScript</span>
            </div>
          </div>
          
          <div className="px-8 md:px-10 pb-8 md:pb-10 border-t border-gray-50">
            <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
              <i className="fa fa-user-circle text-blue-400 mr-2"></i>
              <p className="text-blue-500 mb-4">个人简介</p>
              
            </h4>
            
            <div className="space-y-4 text-gray-700 leading-relaxed ml-10">
                <p>
                大学民办本科，没什么特长了，哈哈。
              </p>
              <p>
                热爱前端开发的大学牲，没什么兴趣爱好，和普通人一样，喜欢打游戏...还有写react，我喜欢react。
              </p>
            
            </div>
          </div>
          
          <div className="px-8 md:px-10 py-6 bg-gray-50 border-t border-gray-50">
            <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
              <i className="fa fa-link text-blue-400 mr-2"></i>
              
            </h4>
            
         
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About