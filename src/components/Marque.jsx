// import { motion } from 'framer-motion';
import React from 'react';

function  Marque() {
  // return (
  //   <>
  //     <div className='w-full bg-[#004D43] py-10'>
  //       <div className='before:border-b-2 after:border-t-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden'>
  //         {/* use after befor here and make to borter, one for top one for bottom*/}
  //         <h1 className='uppercase text-[30vw] leading-none font-FoundersGrotesk'>we are ochi</h1>
  //         <h1 className='uppercase text-[30vw] leading-none font-FoundersGrotesk'>we are ochi</h1>
  //       </div>
  //     </div>
  //   </>
  // )

  return (
    <>
      <div className='bg-[#18181B]'>
        <div className="w-full bg-[#004D43] py-5 rounded-tl-3xl rounded-tr-3xl">
          <div className="relative overflow-hidden whitespace-nowrap">
            {/* top border */}
            <div className="absolute top-20 left-0 w-full border-t-2 border-[#437C74] z-10" />

            {/* bottom border */}
            <div className="absolute bottom-8 left-0 w-full border-b-2 border-[#437C74]  z-10" />

            {/* scrolling text */}
            <div className="animate-marquee flex gap-10">
              <h1 className="uppercase text-[30vw] leading-none font-FoundersGrotesk">
                we are ochi
              </h1>
              <h1 className="uppercase text-[30vw] leading-none font-FoundersGrotesk">
                we are ochi
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Marque;
