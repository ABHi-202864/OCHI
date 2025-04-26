import React from 'react';

function Featured() {
  return (
    <>
      <div className='w-full py-20'>
        <div className='w-full px-14'>
          <h1 className='text-6xl font-NeueMontreal'>Featured projects</h1>
        </div>

        {/* DIV FOR TOP BORDER */}
        <div className='w-full border-t-[0.1px] my-12 text-[#212121] opacity-30'></div>

        <div className="cards flex gap-5 w-full px-14">
          <div className="cardContainer w-1/2 h-[90vh]">
            <div className='flex items-center gap-2 mb-4'>
              <span className='inline-flex w-2.5 h-2.5 rounded-full bg-[#212121]'></span>
              <span className='uppercase font-NeueMontreal text-sm text-[#212121]'>Salience Labs</span>
            </div>

            <div className='card w-full h-full rounded-xl bg-green-500'>
              <img className='rounded-xl' src="./cardImg1.png" alt="" />
            </div>

            {/* WORKING START HERE */}
            <div>
              <div>
                <a href="">Brand Identity</a>
              </div>
              <div>
                <a href="">Pitch deck</a>
              </div>
            </div>
          </div>

          <div className="cardContainer w-1/2 h-[90vh]">
            <div className='flex items-center gap-2 mb-4'>
              <span className='inline-flex w-2.5 h-2.5 rounded-full bg-[#212121]'></span>
              <span className='uppercase font-NeueMontreal text-sm text-[#212121]'>Cardboard Spaceship</span>
            </div>

            <div className='card w-full h-full rounded-xl bg-green-500'>
              <img className='rounded-xl' src="./cardImg2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured;
