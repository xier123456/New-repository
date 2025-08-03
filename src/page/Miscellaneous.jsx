import React from "react";

const Miscellaneous = () => {
  const MisceUp = [
    {
      MisceUid: 1,
      content: "终于弄好一点react的基础了，弄个网页练习一下",
      date:'2025-7-25'
    },
    {
      MisceUid: 2,
      content: "今天把网页的内容完善一下，为部署上线做点准备，笔记什么的得加进入了",
      date:'2025-8-3'
    },
   
  ];

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 md:p-8">
      {/* 标题区 */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-[clamp(1.8rem,4vw,2.5rem)] font-light text-gray-700 tracking-wide mt-15">
          ~ 简简单单的心里话 ~
        </h1>
        <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full opacity-70"></div>
      </div>

      {/* 时间线容器 */}
      <div className="max-w-4xl mx-auto">
        <ul className="timeline timeline-vertical relative">
          {/* 中间连接线 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2 z-0"></div>
          
          {MisceUp.map((mis, index) => (
            <li key={mis.MisceUid} className="relative z-10 mb-10 md:mb-16 last:mb-0">
              {/* 左右交替的内容卡片 */}
              <div 
                className={`timeline-${index % 2 === 0 ? 'start' : 'end'} pr-8 md:pr-12 pl-4 md:pl-0`}
              >
                <div 
                  className={`p-6 md:p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md 
                             ${index % 2 === 0 
                               ? 'bg-white border-l-4 border-blue-400 hover:translate-x-1' 
                               : 'bg-white border-r-4 border-blue-300 hover:-translate-x-1'
                             }`}
                >
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {mis.content}
                  </p>
                  
                  {/* 小日期标识（可选） */}
                  <div className={`mt-4 text-xs text-gray-500 ${index % 2 === 0 ? 'text-blue-500' : 'text-blue-400'}`}>
                    记录于 {mis.date} 
                  </div>
                </div>
              </div>
              
              {/* 中间节点 */}
              <div className="timeline-middle">
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center shadow-md
                  ${index % 2 === 0 ? 'bg-blue-400' : 'bg-blue-300'}
                  transition-transform duration-300 hover:scale-125
                `}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Miscellaneous;