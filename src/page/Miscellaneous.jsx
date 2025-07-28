import React  from "react";

const Miscellaneous = () => {
  const MisceUp = [
    {
      MisceUid: 1,
      content: "First Macintosh computer",
    },
    {
      MisceUid: 2,
      content: "First Macintosh computer",
    },
  ];


  



  const MisceStyleA = "timeline-start timeline-box p-8";
  const MisceStyleB = "timeline-end timeline-box p-8";

  return (
    <div className="pt-30 min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <h1 className="text-center text-blank/70 text-[2em] mb-[3vh]">~简简单单的心里话~</h1>
      {MisceUp.map((Mis,index) => (
        <ul className="timeline timeline-vertical " >
          <li key={Mis.MisceUid}>
            {/* 1 */}
            <div className={index%2===0?MisceStyleA:MisceStyleB}>
              {Mis.content}
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="text-primary 0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <hr />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Miscellaneous;
