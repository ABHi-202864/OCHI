import React from 'react';
import { motion } from 'framer-motion';


function Marque() {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full bg-[#004D43] py-5 rounded-tl-3xl rounded-tr-3xl">
        <div className="relative overflow-hidden whitespace-nowrap">
          {/* top border */}
          <div className="absolute top-20 left-0 w-full border-t-2 border-[#437C74] z-10" />

          {/* bottom border */}
          <div className="absolute bottom-8 left-0 w-full border-b-2 border-[#437C74]  z-10" />

          {/* scrolling text */}
          <div className="animate-marquee flex gap-10 text-[#FFFFFF]">
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", duration: 10, repeat: Infinity }}
              className="uppercase text-[30vw] leading-none font-FoundersGrotesk">
              we are ochi
            </motion.h1>
            <motion.h1
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", duration: 10, repeat: Infinity }}
              className="uppercase text-[30vw] leading-none font-FoundersGrotesk">
              we are ochi
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  )

}

export default Marque;
