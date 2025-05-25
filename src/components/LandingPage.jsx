import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';

function LandingPage() {

  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-[#F1F1F1] pt-1'>
        <div className='textStructure mt-20 md:mt-40 md:px-20'>
          {["We Create", "eye-opening", "presentations"].map((item, index) => {
            return (
              <div className='masker font-FoundersGrotesk'>
                <div className='w-fit md:flex items-baseline overflow-hidden'>
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: window.innerWidth < 768 ? "28vw" : "9vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}
                      className="mt-2 md:mt-0 mr-[1vw] w-[9vw] h-14 md:h-[5.32vw] rounded-md bg-[url('/content-image01.jpg')] bg-cover bg-center"
                    >
                    </motion.div>

                  )}
                  <h1 className='uppercase ml-2 md:ml-0 text-6xl md:text-9xl tracking-wide leading-[.75]'>
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        <div className='border-t-[0.1px] border-gray-400 mt-24 md:flex justify-between items-center py-5 px-4 md:px-20'>
          {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <p className='text-md font-light font-NeueMontreal mb-8 md:mb-0'>{item}</p>
          ))}

          <div className='group start flex items-center gap-2'>
            <div
              className='px-3.5 py-1 border-[1px] rounded-full group-border-zinc-800 uppercase font-NeueMontreal font-medium text-md cursor-pointer group-hover:bg-zinc-800 group-hover:text-white transition-colors ease-in-out duration-500'
            >
              <a href="">Start the project</a>  
            </div>

            {/* Arrow icon with inner scaling background */}
            <div className='relative w-9 h-9 border-[1px] border-zinc-800 rounded-full grid place-content-center cursor-pointer overflow-hidden'>
              {/* Background scaling span */}
              <span className='absolute inset-0 bg-zinc-800 scale-0 group-hover:scale-125 transition-transform duration-500 rounded-full z-0' />

              {/* Icon stays on top */}
              <MdArrowOutward className='relative z-10 text-zinc-800 group-hover:text-white transition-colors duration-500' />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default LandingPage;
