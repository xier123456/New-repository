import React from "react";

const Technology = () => {
  const TechnicalRoute=[
    {
      id:1,
      content:'HTML+CSS+JavaScript'
    },
    {
      id:2,
      content:'前端工程化+CSS基础补充'
    },
    {
      id:3,
      content:`react+JavaScript基础补充`
    },
     {
      id:4,
      content:'Tailwind+react基础补充'
    },
     {
      id:5,
      content:'Redux状态管理库+react+js+工程化补充'
    },
  ]

  const timelineStyleA="timeline-start timeline-box p-4 m-2"
  const timelineStyleB="timeline-end timeline-box p-4 m-2"

  return (
    <div className="pt-30 min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 ">
      <h1 className="text-center text-blank/70 text-[2em] mb-[5vh]">
        个人路线一览
      </h1>
     
        <ul 
       
        className="timeline  justify-center ">
           {TechnicalRoute.map((TRoute,index)=>(
        <li  key={TRoute.id}>
          <div className={index%2===0?timelineStyleA:timelineStyleB}>
            {TRoute.content}
          </div>
          <hr />
        </li>
         ))}
      </ul>

     
      
    </div>
  );
};

export default Technology;
