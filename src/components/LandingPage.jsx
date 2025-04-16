import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <>
      <div className='w-full h-screen bg-zinc-900 pt-1'>
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

        <div className='border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center py-5 px-20'>
          {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <p className='text-md font-light font-NeueMontreal'>{item}</p>
          ))}
          <div
            className='start flex items-center gap-2'
          >
            <div
              className='px-3.5 py-1 border-[1px] rounded-full border-zinc-300  uppercase font-NeueMontreal font-medium text-md cursor-pointer hover:bg-white hover:text-zinc-900 transition-colors duration-300'
            >
              Start the project
            </div>
            <div className='w-9 h-9 border-[1px] border-zinc-300 rounded-full grid place-content-center cursor-pointer hover:bg-white hover:text-zinc-900 transition-colors duration-300'>
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage;
