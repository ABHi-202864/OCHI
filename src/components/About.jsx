import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function About() {
  return (
    <>
      <div className='bg-[#004D43] -mt-32'>
        <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
          <div>
            <p className='text-2xl md:text-[3.5rem] font-NeueMontreal text-[#212121] md:leading-14 pl-4 md:pl-16 pt-20 md:pt-3 w-[85vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds</u>, <u>sell prod&shy;­ucts</u>, <u>ex&shy;plain com&shy;plex ideas</u>, and <u>hire great peo&shy;­ple</u>.</p>
          </div>

          <div className=' md:grid md:grid-cols-12 mt-25 pl-4 md:pl-16 text-[#212121] font-NeueMontreal text-[17px] relative'>

            {/* DIV FOR TOP BORDER */}
            <div className='absolute -top-5 left-0 w-full border-t-[0.1px] text-[#212121] opacity-30'></div>

            <div className='col-span-6 mb-6 md:mb-0'>
              <p>What you can expect:</p>
            </div>

            <div className='col-span-4 w-[40vh]'>
              <p>We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</p>
              <p className='mt-4'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
              </p>
            </div>

            <div className='col-span-2 grid items-end mt-6 md:mt-0'>
              <ul>
                <p className='mb-2'>S:</p>
                <li className='cursor-pointer'><a className='relative after:content-[""] after:absolute after:w-0 after:h-[1px] after:block after:mt-[.5px] after:right-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 hover:after:bg-black' href="">Instagram</a></li>
                <li className='cursor-pointer'><a className='relative after:content-[""] after:absolute after:w-0 after:h-[1px] after:block after:mt-[.5px] after:right-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 hover:after:bg-black' href="">Behance</a></li>
                <li className='cursor-pointer'><a className='relative after:content-[""] after:absolute after:w-0 after:h-[1px] after:block after:mt-[1px] after:right-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 hover:after:bg-black' href="">Facebook</a></li>
                <li className='cursor-pointer'><a className='relative after:content-[""] after:absolute after:w-0 after:h-[1px] after:block after:mt-[1px] after:right-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:left-0 hover:after:bg-black' href="">Linkedin</a></li>
              </ul>
            </div>
          </div>


          <div className='md:grid grid-cols-12 px-4 md:px-16 mt-20 relative'>

            {/* DIV FOR TOP BORDER */}
            <div className='absolute -top-5 left-0 w-full border-t-[0.1px] text-[#212121] opacity-30'></div>

            <div className='col-span-6'>
              <h2 className='text-4xl mb-4 md:text-[3.5rem] font-NeueMontreal text-black'>Our approach:</h2>
              <button className='group flex items-center gap-8 uppercase px-4 py-2.5 rounded-full bg-[#212121] hover:bg-black transition-colors duration-300 ease-in-out cursor-pointer mb-4 text-white'>
                <a href="">Read More</a>
                <div
                  className='w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out transform scale-50 group-hover:scale-125'
                >
                  <MdArrowOutward className='text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>
              </button>
            </div>

            <div className='col-span-6'>
              <img className='rounded-lg' src="Homepage-Photo.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
