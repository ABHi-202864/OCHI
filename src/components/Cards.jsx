import React from 'react'

function Cards() {
  return (
    <>
      <div className='w-full mt-28 px-14'>
        <div className='cardContainer flex gap-5'>
          <div className='w-1/2 h-[50vh]'>
            <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
              <img className='w-48' src="cardBottomImg1.svg" alt="" />
              <button
                className='absolute left-5 bottom-5 text-[#cdea68] font-NeueMontreal border-2 rounded-full py-1 px-2.5 text-sm'
              >
                &copy;2019–2022
              </button>
            </div>
          </div>

          <div className='w-1/2 h-[50vh] flex gap-5'>
            <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
              <img className='w-36' src="cardBottomImg2.svg" alt="" />
              <button className="absolute left-8 bottom-4">
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector(".bg-fill");
                    const text = e.currentTarget.querySelector(".button-text");

                    bg.classList.remove("animate-slide-up-out", "reset-transform");
                    bg.classList.add("animate-slide-up-in");

                    text.classList.remove("text-[#f1f1f1]");
                    text.classList.add("text-[#212121]");
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector(".bg-fill");
                    const text = e.currentTarget.querySelector(".button-text");

                    bg.classList.remove("animate-slide-up-in");
                    bg.classList.add("animate-slide-up-out");

                    text.classList.remove("text-[#212121]");
                    text.classList.add("text-[#f1f1f1]");

                    setTimeout(() => {
                      bg.classList.remove("animate-slide-up-out");
                      bg.classList.add("reset-transform");
                    }, 400); // Should match the animation duration
                  }}
                  className="relative inline-block border border-[#f1f1f1] py-1 px-4 rounded-full font-NeueMontreal uppercase text-base overflow-hidden"
                >
                  <span className="button-text relative z-10 text-[#f1f1f1] transition-colors duration-300">
                    Rating 5.0 on Clutch
                  </span>
                  <span
                    className="bg-fill absolute inset-0 bg-[#f1f1f1] z-0 rounded-full pointer-events-none reset-transform transition-transform duration-300"
                    aria-hidden="true"
                  ></span>
                </a>
              </button>

            </div>
            <div className="card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
              <img className='w-28' src="cardBottomImg3.png" alt="" />
              <button className="absolute left-8 bottom-4">
                <a
                  href="#"
                  onMouseEnter={(e) => {
                    const bg = e.currentTarget.querySelector(".bg-fill");
                    const text = e.currentTarget.querySelector(".button-text");

                    bg.classList.remove("animate-slide-up-out", "reset-transform");
                    bg.classList.add("animate-slide-up-in");

                    text.classList.remove("text-[#f1f1f1]");
                    text.classList.add("text-[#212121]");
                  }}
                  onMouseLeave={(e) => {
                    const bg = e.currentTarget.querySelector(".bg-fill");
                    const text = e.currentTarget.querySelector(".button-text");

                    bg.classList.remove("animate-slide-up-in");
                    bg.classList.add("animate-slide-up-out");

                    text.classList.remove("text-[#212121]");
                    text.classList.add("text-[#f1f1f1]");

                    setTimeout(() => {
                      bg.classList.remove("animate-slide-up-out");
                      bg.classList.add("reset-transform");
                    }, 400); // Should match the animation duration
                  }}
                  className="relative inline-block border border-[#f1f1f1] py-1 px-4 rounded-full font-NeueMontreal uppercase text-base overflow-hidden"
                >
                  <span className="button-text relative z-10 text-[#f1f1f1] transition-colors duration-300">
                    Business Bootcamp Alumni
                  </span>
                  <span
                    className="bg-fill absolute inset-0 bg-[#f1f1f1] z-0 rounded-full pointer-events-none reset-transform transition-transform duration-300"
                    aria-hidden="true"
                  ></span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards;
