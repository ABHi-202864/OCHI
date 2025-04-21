import React from 'react'

function About() {
  return (
    <>
      <div className='bg-[#004D43]'>
        <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
          <div>
            <p className='text-[3.5rem] font-NeueMontreal text-[#212121] leading-14 pl-16 pt-3 w-[85vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds</u>, <u>sell prod&shy;­ucts</u>, <u>ex&shy;plain com&shy;plex ideas</u>, and <u>hire great peo&shy;­ple</u>.</p>
          </div>

          <div className='grid grid-cols-12 mt-25 pl-16 text-[#212121] font-NeueMontreal text-[17px] relative'>

            {/* DIV FOR TOP BORDER */}
            <div className='absolute -top-5 left-0 w-full border-t-[1px]'></div>

            <div className='col-span-6'>
              <p>What you can expect:</p>
            </div>

            <div className='col-span-4 w-[40vh]'>
              <p>We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</p>
              <p className='mt-4'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
              </p>
            </div>

            <div className='col-span-2 grid items-end'>
              <ul>
                <p className='mb-2'>S:</p>
                <li className='underline cursor-pointer'><a href=""></a>Instagram</li>
                <li className='underline cursor-pointer'><a href=""></a>Behance</li>
                <li className='underline cursor-pointer'><a href=""></a>Facebook</li>
                <li className='underline cursor-pointer'><a href=""></a>Linkedin</li>
              </ul>
            </div>
          </div>

          <div className='grid grid-cols-12 px-16 mt-20'>
            <div className='col-span-6'>
              <h2 className='text-[3.5rem] font-NeueMontreal text-black'>Our approach:</h2>
              <button className='uppercase px-10 py-4 rounded-full bg-[#212121]'>Read More</button>
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
