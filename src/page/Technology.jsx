import React from "react";

const Technology = () => {
  const TechnicalRoute = [
    { id: 1, content: 'HTML+CSS+JavaScript', period: '2025-3' },
    { id: 2, content: '前端工程化+CSS基础补充', period: '2025-6' },
    { id: 3, content: 'React+JavaScript基础补充', period: '2025-6' },
    { id: 4, content: 'Tailwind基础+React基础补充', period: '2025-7' },
    { id: 5, content: 'Router+Redux+React+JS+工程化补充', period: '2025-8' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      
   
 
    <div className="py-12 px-4 md:px-8">
     
      <div className="text-center mb-12 mt-10">
        <h1 className="text-[clamp(1.8rem,4vw,2.5rem)] font-light text-gray-700 tracking-wide">
          个人路线一览
        </h1>
        <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full opacity-70"></div>
      </div>

     
      <div className="max-w-4xl mx-auto">
        <ul className="timeline timeline-vertical relative">
      
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2"></div>
          
          {TechnicalRoute.map((route, index) => (
            <li key={route.id} className="relative mb-10 last:mb-0">
      
              <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} pr-6 md:pr-12 pl-4`}>
                <div 
                  className={`p-5 rounded-lg shadow-sm bg-white transition-all duration-300 hover:shadow-md
                             ${index % 2 === 0 
                               ? 'border-l-4 border-blue-500' 
                               : 'border-r-4 border-blue-400'
                             }`}
                >
                  <div className={`text-xs font-medium px-2.5 py-1 rounded-full mb-2 
                                 ${index % 2 === 0 ? 'bg-blue-50 text-blue-600' : 'bg-blue-50 text-blue-500'}`}>
                    {route.period}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{route.content}</p>
                  <div className={`mt-2 text-xs text-gray-500 
                                 ${index % 2 === 0 ? 'text-blue-500' : 'text-blue-400'}`}>
                   
                  </div>
                </div>
              </div>
              
   
              <div className="timeline-middle">
                <div className={`
                  w-6 h-6 rounded-full flex items-center justify-center shadow
                  ${index % 2 === 0 ? 'bg-blue-500' : 'bg-blue-400'}
                  hover:scale-110 transition-transform
                `}>
                  <span className="text-white text-xs">{index + 1}</span>
                </div>
              </div>
            </li>
          ))}
          
       
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xs text-gray-500 mt-2">持续探索,不断进步</p>
          </div>
        </ul>
      </div>
    </div>
     </div>
  );
};

export default Technology;