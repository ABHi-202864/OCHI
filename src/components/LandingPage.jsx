import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <>
      <div className='w-full h-screen bg-[#F1F1F1] pt-1'>
        <div className='textStructure mt-40 px-20'>
          {["We Create", "eye-opening", "presentations"].map((item, index) => {
            return (
              <div className='masker font-FoundersGrotesk'>
                <div className='w-fit flex items-baseline overflow-hidden'>
                  {index === 1 && (
                    <div
                      className='mr-[1vw] w-[9vw] h-[5.32vw] bg-red-500 rounded-md'
                    ></div>
                  )}
                  <h1 className='uppercase text-9xl tracking-wide leading-[.75]'>
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        <div className='border-t-[0.1px] border-gray-400 mt-24 flex justify-between items-center py-5 px-20'>
          {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <p className='text-md font-light font-NeueMontreal'>{item}</p>
          ))}

          <div className='group start flex items-center gap-2'>
            <div
              className='px-3.5 py-1 border-[1px] rounded-full group-border-zinc-800 uppercase font-NeueMontreal font-medium text-md cursor-pointer group-hover:bg-zinc-800 group-hover:text-white transition-colors ease-in-out duration-500'
            >
              Start the project
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
      </div>
    </>
  )
}

export default LandingPage;
