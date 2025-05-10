
// function Eyes() {
//   const [rotate, setRotate] = useState(0);


//   useEffect(() => {
//     window.addEventListener("mousemove", (e) => {
//       let mouseX = e.clientX;
//       let mouseY = e.clientY;

//       let deltaX = mouseX - window.innerWidth / 2;
//       let deltaY = mouseY - window.innerHeight / 2;

//       let angle = Math.atan2(deltaY - deltaX) * (180 / Math.PI);

//       setRotate(angle);
//     });
//   }, );

//   return (
//     <>
//       <div className='eyes w-full h-screen overflow-hidden'>
//         <div className='relative w-full h-full bg-[url("./EyesSectionImg.jpg")] bg-cover bg-center'>
//           <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
//             <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
//               <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
//                 <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
//                   className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'
//                 >
//                   <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
//               <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
//                 <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
//                   className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'
//                 >
//                   <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


import React, { useEffect, useState } from "react";

function Eyes() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Distance from center
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      // Max distance the pupil can move
      const maxDist = 60;

      // Get angle
      const angle = Math.atan2(deltaY, deltaX);

      // Limit the distance
      const x = Math.cos(angle) * maxDist;
      const y = Math.sin(angle) * maxDist;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.5" className='relative w-full h-full bg-[url("./EyesSectionImg.jpg")] bg-cover bg-center'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100"
            >
              <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                  }}
                  className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-zinc-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
