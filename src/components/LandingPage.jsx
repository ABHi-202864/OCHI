import React from 'react'

function LandingPage() {
  return (
    <>
      <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textStructure mt-44 px-20'>
          {["We Create", "eye-opening", "presentations"].map((item, index) => {
            return <div key={index} className='masker font-FoundersGrotesk'>
              <h1 className='uppercase text-9xl tracking-wide leading-[6.3vw]'>{item}</h1>
            </div>
          })}
        </div>

        <div className='border-t-1 border-zinc-600 mt-24'>

        </div>
      </div>
    </>
  )
}

export default LandingPage;
